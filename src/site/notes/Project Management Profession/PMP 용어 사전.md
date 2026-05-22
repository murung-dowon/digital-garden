---
{"dg-publish":true,"permalink":"/project-management-profession/pmp/","tags":["PMP"]}
---


# PMP 용어 사전

> 공부하면서 헷갈렸던 용어 모음. 단어 → 뜻 → 관련 개념 영역 순서.

---

## 리스크 관리 (Risk Management)
→ [[Project Management Profession/PMP Official Study Log#리스크 관리 (Risk Management)\|PMP Official Study Log#리스크 관리 (Risk Management)]]

| 용어 | 뜻 | 비고 |
|---|---|---|
| **Risk Register** | 개별 리스크 상세 카드. prob/impact/response/owner 기록. 2~7단계 내내 업데이트 | PM, 리스크 오너용 |
| **Risk Report** | 전체 리스크 현황 집계 요약본. 2~5단계 업데이트 | 경영진/스폰서용 |
| **Risk Management Plan** | 리스크를 어떻게 관리할지 방법론 정의. 1단계에서 작성, 이후 거의 안 건드림 | 룰북 |
| **Assumption Log** | 프로젝트에서 사실이라고 가정한 것들의 목록. 가정이 틀리면 리스크 발생 | 2단계부터 업데이트 |
| **Issue Log** | 이미 발생한 문제 기록. "may/might" 아니라 "has/is" 상태일 때 | 3단계부터 |
| **Risk Threshold** | 리스크가 이 수준을 넘으면 대응/보고해야 하는 임계값 | 이해관계자 risk attitude 기반으로 설정 |
| **Contingency Reserve (비상 예비비)** | **식별된** 리스크(Known unknowns)에 대비한 예비 비용. PM이 사용 가능 | "이 리스크 알고 있으니 만약을 위해 비축" |
| **Management Reserve (관리 예비비)** | **미식별** 리스크(Unknown unknowns)에 대비한 예비 비용. 경영진 승인 필요 | "뭐가 터질지 몰라서 여유분 확보" |
| **Residual Risk** | 대응 조치 후에도 남아있는 잔여 리스크 | Monitor Risks에서 관리 |
| **Secondary Risk** | 리스크 대응 조치 자체가 만들어낸 새로운 리스크 | Monitor Risks에서 관리 |

---

## 리스크 대응 전략
→ [[Project Management Profession/PMP Official Study Log#리스크 대응 전략 5가지\|PMP Official Study Log#리스크 대응 전략 5가지]]

### Threat (부정적 리스크)

| 용어 | 뜻 | 비유 |
|---|---|---|
| **Avoid (회피)** | 리스크 자체를 제거. 계획 변경 필요 | 폭풍 예보날 캠핑 장소 변경 |
| **Transfer (전가)** | 임팩트를 제3자에게 넘김. 리스크는 여전히 존재 | 자동차 보험 가입 |
| **Mitigate (완화)** | 확률 또는 임팩트를 줄임. 리스크는 남아있음 | 우비 챙기기 |
| **Accept (수용)** | 리스크 인정하고 대응 안 함. Active(예비비)/Passive(그냥 수용) | 비 맞으면 맞는 거지 |
| **Escalate (상향)** | PM 권한 밖 리스크를 상위 권한자에게 넘김 | - |

### Opportunity (긍정적 리스크)

| 용어 | 뜻 | 비유 |
|---|---|---|
| **Exploit (활용/극대화)** | 기회를 반드시 100% 실현시킴. Threat에 절대 쓰지 않음 | 좋은 딜 소식에 즉시 선주문 |
| **Share (공유)** | 기회를 더 잘 잡을 수 있는 제3자와 공유 | 조인트벤처 구성 |
| **Enhance (강화)** | 기회의 확률/임팩트를 높임 | 복권 더 사기 |
| **Accept** | 기회 오면 잡고 아니면 말고 | - |

> Transfer(위협) ↔ Share(기회) / Mitigate(위협) ↔ Enhance(기회) 대칭 관계

---

## Plan 용어 구분

| 용어 | 뜻 |
|---|---|
| **Mitigation Plan** | Mitigate 전략의 구체적 실행 내용. Risk Register 안에 기록됨 (별도 문서 아님) |
| **Contingency Plan** | 리스크가 실제 발생했을 때 실행할 비상 계획 |
| **Fallback Plan** | Contingency Plan도 실패했을 때 최후 대응 |
| **Risk Response Plan** | 모든 리스크 대응 전략 모음. Risk Register 안에 포함 |

```
포함 관계: Mitigation Plan ⊂ Risk Response Plan ⊂ Risk Register
```

---

## 리스크 분석

| 용어 | 뜻 | 단계 |
|---|---|---|
| **Qualitative Risk Analysis (정성적)** | 확률/영향도로 리스크 우선순위 결정. P×I 매트릭스 사용 | 3단계 (필수) |
| **Quantitative Risk Analysis (정량적)** | 수치/통계 모델로 리스크 영향 분석. 몬테카를로, EMV, 결정트리 | 4단계 (선택) |
| **Risk Attitude** | 리스크에 대한 심리적 태도. averse / neutral / tolerant / seeking | 이해관계자별 다름 |
| **EMV (Expected Monetary Value)** | 기대화폐가치. 확률 × 금전적 임팩트 | Quantitative 도구 |
| **Monte Carlo Simulation** | 수천 번 시뮬레이션으로 확률 분포 산출 | Quantitative 도구 |

---

## 리스크 카테고리
→ [[Project Management Profession/PMP Official Study Log#리스크 카테고리 4가지\|PMP Official Study Log#리스크 카테고리 4가지]]

| 카테고리 | 뜻 | 예시 |
|---|---|---|
| **Technical** | "무엇을 만드냐(What)" 불명확. 범위/요구사항/기술 기준 | DoD 없음, 요구사항 불명확 |
| **Management** | "어떻게 운영하냐(How)" 불명확. 자원/조직/커뮤니케이션 | 자원 부족, 역할 불명확 |
| **External** | 조직 외부 요인 | 법규 변경, 경쟁사, 환경 규제 |
| **Commercial** | 거래/계약 관련 | 조달 계약, 하청업체 |

---

## 정보 관리 시스템

| 용어 | 뜻 | 비고 |
|---|---|---|
| **PMIS** (Project Management Information System) | 프로젝트 이력, 리소스, 성과 데이터, 교훈 등 **모든 프로젝트 정보를 담는 중앙 허브 시스템** | Jira, MS Project, SharePoint 등이 예시 |

```
"과거 프로젝트 정보 전체가 필요하다" → PMIS
헌장/보고서/품질 도구 = PMIS의 부분집합일 뿐
```

---

## 리더십 & 팀
→ [[Project Management Profession/PMP Official Study Log#리더십 & 팀 관리 (Leadership & Team)\|PMP Official Study Log#리더십 & 팀 관리 (Leadership & Team)]]

### Behavioral Orientation (동기 성향)
> "behavioral orientation" 키워드 나오면 이 프레임워크

| 용어 | 뜻 |
|---|---|
| **Directive** | 명확한 결과·완료 집중, 간결한 커뮤니케이션 선호. Control ≠ Directive |
| **Affiliation** | 관계·소속감으로 동기부여 |
| **Achievement** | 성취·탁월함으로 동기부여 |
| **Power** | 영향력·통제로 동기부여. Control = Power orientation |

### Situational Leadership (상황적 리더십)
> "leadership style" + 팀 상태 언급되면 이 프레임워크

| 용어 | 뜻 | 팀 상태 |
|---|---|---|
| **Directing (Telling)** | 구체적 지시, 밀착 감독 | 낮은 역량 + 높은 의욕 |
| **Coaching** | 지시 + 설명·격려 | 낮은 역량 + 낮은 의욕 |
| **Supporting** | 결정 참여, 관계 지원 | 높은 역량 + 낮은 의욕 |
| **Delegating** | 위임, 자율 | 높은 역량 + 높은 의욕 |

### 동기부여 이론
→ [[Project Management Profession/2 - 12 Principles of Project Management/2-2. 팀 - Team#5. 동기부여 이론\|2-2. 팀 - Team#5. 동기부여 이론]]

| 용어 | 핵심 | 키워드 |
|---|---|---|
| **Expectancy Theory** (Vroom) | 성과-보상 연결. "이걸 하면 저걸 받는다" | if-then 보상, 금전/휴가 제시 |
| **Achievement Theory** (McClelland) | 성취/친화/권력 욕구 | 성취감, 도전적 목표 |
| **Maslow** | 욕구 5단계 | 안전/소속/존중/자아실현 |
| **Herzberg** | 동기요인 vs 위생요인 | 급여 올려도 동기 안 오름 |
| **McGregor X/Y** | X=통제, Y=자율·신뢰 | PMP는 항상 Theory Y |
| **Contingency Theory** (Fiedler) | 리더십 효과 = 상황에 따라 다름 | 상황에 맞는 스타일 |
| **Servant Leadership** | 장애물 제거, 팀 지원, 자율성 보장 | Agile/Hybrid PM 역할 |

---

## 이해관계자 관리
→ [[Project Management Profession/PMP Official Study Log#이해관계자 관리 (Stakeholder Management)\|PMP Official Study Log#이해관계자 관리 (Stakeholder Management)]]

| 용어 | 뜻 |
|---|---|
| **Stakeholder Register** | 이해관계자 목록. 역할, 영향력, risk attitude 기록 |
| **Engagement** | 이해관계자를 의사결정에 참여시키는 것. Communication보다 강한 개념 |
| **Communication** | 정보 전달 (일방향 가능). Engagement의 하위 개념 |
| **Early Engagement** | 저항 예방의 핵심. 처음부터 함께 결정 = 주인의식 생김 |

---

## 변경 관리 (Change Management)
→ [[Project Management Profession/PMP Official Study Log#변경 관리 (Change Management)\|PMP Official Study Log#변경 관리 (Change Management)]]

| 용어 | 뜻 |
|---|---|
| **Change Request** | 공식적 변경 요청서. 모든 베이스라인 변경은 이걸 거쳐야 함 |
| **CCB (Change Control Board)** | 변경 요청 검토·승인/거부하는 위원회 |
| **Baseline** | 승인된 계획 기준선. 변경하려면 Change Request 필요 |

---

## 품질 관리 (Quality Management)

| 용어 | 뜻 | 시험 키워드 |
|---|---|---|
| **Pareto Chart** | 80/20 법칙 기반. 원인별 빈도를 내림차순 막대로 표시 + 누적% 꺾은선. **어떤 원인이 가장 큰 영향을 주는지** 식별 | "어떤 요소/원인이 핵심 지표에 영향?" |
| **Run Chart** | 시간 흐름에 따른 데이터 포인트 추세 그래프. **성과가 시간에 따라 어떻게 변하는지** 모니터링 | "시간에 따른 성과 추세/모니터링" |
| **Control Chart** | 프로세스가 통제 범위 내에 있는지 확인. 상한선/하한선 포함 | "프로세스 안정성, 통제 범위" |
| **Fishbone Diagram (Ishikawa)** | 원인-결과 관계 시각화. 문제의 근본 원인 찾기 | "원인-결과, 근본 원인 분석" |
| **Flowchart** | 프로세스/시스템 흐름 도식화. 통계적 통제 도구 아님 | 프로세스 설명용 |
| **Inspection** | 산출물이 인수 기준을 충족하는지 공식 검토. **품질 관리 도구** (리스크 도구 아님) | Quality Control |
| **Histogram** | 원인/카테고리별 결함 빈도(수량) 분포 표시. "어떤 원인으로 결함이 몇 개?" | 원인 + 수량 동시 |
| **Affinity Diagram** | 비슷한 원인/아이디어끼리 그룹화. 브레인스토밍 후 정리용 | 수량 표시 X |
| **Scatter Diagram (산점도)** | 두 변수 간의 상관관계를 점으로 표시. "A와 B가 관련 있나?" 확인용. 근본 원인 찾는 도구 아님 | 상관관계 있어도 인과관계 아님 |
| **Manage Quality** | **프로세스/방법론** 감사. "올바른 방법으로 일하고 있나?" 외부 감사자/컨설턴트가 등장하면 여기 | Quality Audit이 핵심 도구 |
| **Control Quality** | **산출물/deliverable** 검사. "만든 것이 기준에 맞나?" 테스트/검수/결함 발견 | Inspection, Testing, Pareto, Run Chart |
| **Plan Quality Management** | 프로젝트 초반에 품질 관리 방법 계획 수립. 이후엔 거의 안 건드림 | 1회성, 초반 |

#### Manage Quality vs Control Quality 핵심 구분

```
Manage Quality  = "우리가 올바른 방법으로 일하고 있나?" (프로세스 감사)
Control Quality = "우리가 만든 것이 기준에 맞나?"      (산출물 검사)
```

| | Manage Quality | Control Quality |
|---|---|---|
| **대상** | 프로세스/방법론 | 산출물/deliverable |
| **도구** | Quality Audit | Inspection, Testing, Pareto, Run Chart |
| **등장 신호** | 외부 감사자, 컨설턴트, 방법론 검토 | 테스트, 검수, 결함, 버그 |

#### 품질 도구 킬러 매핑

| 상황                    | 도구                             |
| --------------------- | ------------------------------ |
| **원인별 결함 수량/분포**      | Histogram                      |
| **상위 20% 원인이 80% 문제** | Pareto Chart                   |
| **프로세스 안정성/통제 범위**    | Control Chart                  |
| **시간에 따른 추세**         | Run Chart                      |
| **원인-결과 관계**          | Fishbone (Ishikawa)            |
| **원인들을 그룹화**          | Affinity Diagram               |
| **두 변수 간 상관관계**       | Scatter Diagram                |
| **방법론/프로세스 감사**       | Manage Quality (Quality Audit) |
| **산출물 검수/검사**         | Control Quality (Inspection)   |

> 통계적 품질 통제 도구: **Run Chart, Pareto Chart, Control Chart** 이 3개
> Flowchart, Data Flow Diagram = 프로세스 설명 도구, 통계적 통제 아님

---

## 조달 관리 (Procurement Management)

### 조달 요청 문서 4종

| 용어 | 정식 명칭 | 뜻 | 정보량 |
|---|---|---|---|
| **RFI** | Request for Information | 벤더 탐색용. 특정 측면만 물어봄. 비공식 | ⭐ |
| **RFQ** | Request for Quote | 뭘 살지 확정된 후 가격/견적만 요청 | ⭐⭐ |
| **RFP** | Request for Proposal | 요구사항+인수기준 전부 포함. 가장 포괄적·공식적. 솔루션 불확실할 때 사용 | ⭐⭐⭐⭐ |
| **RFC** | Request for Contract | 계약 체결 단계. RFP 참조. 범위 정보 적음 | ⭐⭐ |

```
정보량/공식성: RFP > RFC ≈ RFQ > RFI
```

> 신규 벤더 온보딩, 벤더 교체 → **RFP** (프로젝트 전체 컨텍스트가 필요하니까)

### 계약 관련 문서

| 용어 | 뜻 | 시험 포인트 |
|---|---|---|
| **SOW (Statement of Work)** | 계약 시 합의한 작업 범위·납품물·인수 기준 명세서 | 납품물 분쟁 시 검증 근거 = SOW |
| **Procurement Management Plan** | 조달을 **어떻게** 관리할지 방법론 정의. 인수 기준 없음 | "how to manage" 문서 |
| **Project Scope Statement** | 프로젝트 deliverables + 인수 기준 + 목표 명세서 | "key deliverables 묘사" = 여기. Agreement ≠ deliverables 명세 |

---

## 기타 / 공통

| 용어 | 뜻 | 영역 |
|---|---|---|
| **DoD (Definition of Done)** | 산출물이 완성됐다고 볼 수 있는 기준 목록 | Technical Risk에 해당 |
| **EEF (Enterprise Environmental Factors)** | 프로젝트에 영향을 주는 외부 환경 요인 | Marketplace conditions 포함 |
| **Marketplace Conditions** | 환율, 금리, 시장 경쟁 등 외부 시장 데이터. EEF의 일부 | 리스크 분석 인풋 |
| **Lessons Learned** | 프로젝트 교훈 기록. Monitor Risks(7단계)에서 업데이트. 미래 프로젝트 참고용 | Risk Management |

Power / Interest Grid
- 이해관계자를 **권력(Power)**과 **관심도(Interest)** 기준으로 4분면으로 나눌 수 있다.

```
              관심 낮음          관심 높음
권력 높음   Keep Satisfied   Manage Closely
권력 낮음     Monitor        Keep Informed


