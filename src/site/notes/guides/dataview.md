---
title: Dataview Guide
tags:
  - note
  - reference
dg-publish: true
dgShowFileTree: true
permalink: /guides/dataview/
---

# Dataview 사용 가이드

Dataview는 Obsidian vault를 데이터베이스처럼 쿼리할 수 있는 플러그인입니다. 이 문서는 주요 쿼리 타입과 실전 예시를 정리합니다.

> [!info] Digital Garden에서의 Dataview
> Dataview 쿼리 결과는 **Obsidian에서 렌더링된 HTML**로 퍼블리시됩니다. Digital Garden 플러그인이 결과를 정적 HTML로 변환하므로, 실시간 쿼리가 아닌 퍼블리시 시점의 스냅샷입니다.

---

## 기본 구조

모든 Dataview 쿼리는 다음 구조를 따릅니다:

````
```dataview
[쿼리 타입] [필드, ...]
FROM [소스]
WHERE [조건]
SORT [필드] [ASC/DESC]
LIMIT [숫자]
GROUP BY [필드]
```
````

---

## 쿼리 타입

### 1. TABLE

테이블 형태로 데이터를 출력합니다.

````
```dataview
TABLE file.ctime AS "Created", file.mtime AS "Modified"
FROM "notes"
SORT file.mtime DESC
LIMIT 10
```
````

필드 없이 파일 목록만 출력:

````
```dataview
TABLE WITHOUT ID file.link AS "Note", file.size AS "Size"
FROM "notes"
SORT file.size DESC
```
````

### 2. LIST

링크 목록으로 출력합니다.

````
```dataview
LIST
FROM #tag
SORT file.name ASC
```
````

추가 정보 포함:

````
```dataview
LIST file.ctime
FROM "notes"
WHERE file.ctime >= date(today) - dur(7 days)
SORT file.ctime DESC
```
````

### 3. TASK

vault 전체의 태스크를 수집합니다.

````
```dataview
TASK
WHERE !completed
SORT file.ctime DESC
LIMIT 20
```
````

특정 폴더의 완료되지 않은 태스크:

````
```dataview
TASK
FROM "projects"
WHERE !completed
GROUP BY file.link
```
````

### 4. CALENDAR

캘린더 뷰로 출력합니다 (날짜 필드 필요).

````
```dataview
CALENDAR file.ctime
FROM "notes"
```
````

---

## FROM 소스

| 구문 | 설명 |
|------|------|
| `FROM "folder"` | 특정 폴더의 노트 |
| `FROM #tag` | 특정 태그가 있는 노트 |
| `FROM [[note]]` | 특정 노트로 링크하는 노트 |
| `FROM outgoing([[note]])` | 특정 노트가 링크하는 노트 |
| `FROM "folder" AND #tag` | AND 조합 |
| `FROM #tag1 OR #tag2` | OR 조합 |
| `FROM -"folder"` | 특정 폴더 제외 |

---

## WHERE 조건

| 구문 | 설명 |
|------|------|
| `WHERE file.name = "test"` | 정확히 일치 |
| `WHERE contains(file.name, "draft")` | 포함 여부 |
| `WHERE file.size > 1000` | 비교 연산 |
| `WHERE date(today) - file.ctime < dur(7 days)` | 날짜 비교 |
| `WHERE status = "published"` | frontmatter 필드 |
| `WHERE !completed` | 부정 |
| `WHERE file.tags` | 태그가 있는 노트만 |
| `WHERE contains(tags, "project")` | 특정 태그 포함 |

---

## SORT 정렬

````
```dataview
TABLE
FROM "notes"
SORT file.mtime DESC
```
````

다중 정렬:

````
```dataview
TABLE
FROM "notes"
SORT status ASC, file.mtime DESC
```
````

---

## GROUP BY 그룹화

````
```dataview
TABLE rows.file.link AS "Notes"
FROM "notes"
GROUP BY tags[0] AS "Category"
```
````

---

## Inline 쿼리

문장 안에 값을 삽입합니다:

```
Today is `= date(today)`.
```

```
This note has `= length(file.inlinks)` backlinks.
```

```
Last modified: `= this.file.mtime`.
```

---

## 메타데이터 (Frontmatter)

Dataview는 frontmatter 필드를 자동으로 인식합니다:

```yaml
---
title: "My Note"
status: draft
rating: 8
category: tech
created: 2024-01-15
---
```

쿼리에서 사용:

````
```dataview
TABLE status, rating, category
FROM "notes"
WHERE status = "draft"
SORT rating DESC
```
````

---

## 내장 필드

| 필드 | 설명 |
|------|------|
| `file.name` | 파일 이름 (확장자 제외) |
| `file.link` | 파일 링크 |
| `file.path` | 전체 경로 |
| `file.size` | 파일 크기 (bytes) |
| `file.ctime` | 생성 시간 |
| `file.mtime` | 수정 시간 |
| `file.tags` | 모든 태그 |
| `file.etags` | 명시적 태그만 |
| `file.inlinks` | 이 파일을 가리키는 링크 |
| `file.outlinks` | 이 파일이 가리키는 링크 |
| `file.tasks` | 이 파일의 태스크 |
| `file.lists` | 이 파일의 리스트 아이템 |
| `file.folder` | 파일이 속한 폴더 |
| `file.day` | 파일 이름에서 추출한 날짜 |

---

## 실전 예시

### 최근 수정된 노트 10개

````
```dataview
TABLE file.mtime AS "Modified"
FROM "notes"
SORT file.mtime DESC
LIMIT 10
```
````

### 태그별 노트 수

````
```dataview
TABLE length(rows) AS "Count"
FROM "notes"
GROUP BY tags[0] AS "Tag"
SORT length(rows) DESC
```
````

### 미완료 태스크 모아보기

````
```dataview
TASK
WHERE !completed AND !contains(text, "#later")
GROUP BY file.link
SORT file.mtime DESC
```
````

### 특정 상태의 노트 목록

````
```dataview
LIST
FROM "notes"
WHERE status = "published"
SORT file.name ASC
```
````

### 이번 주 생성된 노트

````
```dataview
TABLE file.ctime AS "Created"
FROM "notes"
WHERE file.ctime >= date(today) - dur(7 days)
SORT file.ctime DESC
```
````

### 링크가 많은 노트 (Hub Notes)

````
```dataview
TABLE length(file.inlinks) AS "Backlinks", length(file.outlinks) AS "Outlinks"
FROM "notes"
SORT length(file.inlinks) DESC
LIMIT 10
```
````

---

## Cards 레이아웃과 조합

Dataview TABLE 결과를 카드 형태로 표시하려면 frontmatter에 `cssclasses`를 추가합니다:

```yaml
---
cssclasses:
  - cards
  - cards-cover
  - cards-cols-3
---
```

그 후 TABLE 쿼리에서 이미지 필드를 포함하면 카드 레이아웃이 적용됩니다.

> [!tip] 카드 레이아웃 참고
> 자세한 카드 클래스 옵션은 [[showcase#Cards Layout|Showcase - Cards Layout]] 섹션을 참고하세요.

---

## DataviewJS

더 복잡한 쿼리는 JavaScript로 작성합니다:

````
```dataviewjs
const pages = dv.pages("#project")
  .where(p => p.status === "active")
  .sort(p => p.priority, "desc");

dv.table(
  ["Project", "Status", "Priority"],
  pages.map(p => [p.file.link, p.status, p.priority])
);
```
````

> [!warning] DataviewJS와 Digital Garden
> DataviewJS는 Digital Garden에서 지원이 제한적일 수 있습니다. 가능하면 DQL (기본 쿼리 문법)을 사용하세요.

---

## 참고 링크

- Dataview 공식 문서: `https://blacksmithgu.github.io/obsidian-dataview/`
- Dataview GitHub: `https://github.com/blacksmithgu/obsidian-dataview`
