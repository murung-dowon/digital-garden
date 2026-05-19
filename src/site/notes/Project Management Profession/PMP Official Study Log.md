---
{"dg-publish":true,"permalink":"/project-management-profession/pmp-official-study-log/","tags":["PMP"]}
---


# PMP Official Study Log

---

## 26.05.19

### 리스크 대응 완료 후 다음 단계 (Monitor Risks로의 전환)

> 핵심: **"approved actions 완료"** = Implement Risk Responses(6단계) 종료 → 다음은 **Monitor Risks(7단계)**

#### 문제 패턴
> "A large risk is identified, risk management plan is executed. Upon completion of approved actions, what should PM do?"
> → 정답: **D. Identify new risks, and monitor residual risks**

#### 왜 D인가?

```
리스크 식별 → 분석 → 대응계획 수립 → 대응 실행(Approved Actions) ✅ 완료
                                                    ↓
                                         Monitor Risks (7단계)
                                         = 새 리스크 식별 + 잔여 리스크 모니터링
```

- Approved actions이 **모두 완료** = Implement Risk Responses(6단계) 끝
- 리스크 관리 사이클은 반복적(iterative) → 자동으로 Monitor 단계 진입
- Monitor Risks의 핵심 활동 = **새로운 리스크 식별** + **Residual/Secondary risks 모니터링**

#### 오답 분석

| 선지 | 틀린 이유 |
|---|---|
| **A. Update risk management plan** | Risk Mgmt Plan은 1단계에서 작성, 이후 수정 거의 없음. Approved actions 완료 후 플랜 수정은 순서상 맞지 않음 |
| **B. Revise schedule and budget** | 일정/예산 수정은 change request 프로세스에서 다루는 것, 리스크 대응 완료의 다음 스텝 아님 |
| **C. Update lessons learned** | Lessons Learned는 Monitor Risks(7단계) output 중 하나이지만, **가장 즉각적인 다음 액션**은 아님 |
| **D. Identify new risks + monitor residual** ✅ | Monitor Risks(7단계)의 핵심 정의 그 자체 |

#### 시험 포인트
- **"approved actions 완료"** 보이면 → 이미 6단계(Implement) 끝 → 7단계(Monitor)로 이동
- **Residual risk** = 대응 후에도 남아있는 리스크 → 계속 모니터링 필요
- **Secondary risk** = 대응 조치 자체가 만들어낸 새 리스크 → 역시 Identify & Monitor

---

### 정성적 vs 정량적 리스크 분석 (Qualitative vs Quantitative)

> 핵심 키워드: **"prioritize + probability & impact"** = Qualitative / **"수치·시뮬레이션"** = Quantitative

#### 정의 비교

| | Qualitative (3단계) | Quantitative (4단계) |
|---|---|---|
| **목적** | 리스크 **우선순위** 결정 | 리스크의 **수치적 영향** 분석 |
| **방법** | High/Med/Low, P×I 매트릭스 | 몬테카를로, 결정트리, 민감도 분석 |
| **질문** | "이 리스크 얼마나 심각해?" | "이 리스크로 얼마나 손해봐?" |
| **필수 여부** | ✅ 항상 수행 | ❌ 선택적 (대형 프로젝트) |

#### 킬러 키워드
- **Qualitative** → prioritize, probability of occurrence, impact, P×I matrix, further analysis or action
- **Quantitative** → numerical analysis, monetary value, Monte Carlo simulation, EMV, decision tree, sensitivity analysis

#### Quantitative 대표 도구
- **Monte Carlo Simulation**: 수천 번 시뮬레이션 → 확률 분포 산출
- **Decision Tree + EMV**: 기대화폐가치(Expected Monetary Value) 계산
- **Sensitivity Analysis**: 어떤 리스크가 결과에 가장 큰 영향을 주는지 파악

> ⚠️ Quantitative는 **반드시 수학적/통계적 모델** 사용. 숫자 없으면 Quantitative 아님.

---

## 26.05.17

### 변경 요청 프로세스 (Change Request Process)

> 핵심: **"approved"** 라는 단어가 보이면 → 승인 단계는 이미 끝난 것. 다음 액션은 **계획 문서 업데이트**.

```
변경 필요 발생
    ↓
Change Request 작성 (문서화)
    ↓
CCB / Steering Committee 검토 및 승인/거부
    ↓
✅ 승인되면 → 계획 문서 업데이트
    ↓
팀에 공지 및 실행
    ↓
필요시 Activity duration 재계산, 일정/비용 재산정
    ↓
변경 결과 모니터링
```

| 상황                  | 정답 액션                        |
| ------------------- | ---------------------------- |
| 변경 필요 발생            | Change Request 작성            |
| Change Request 제출 후 | CCB/Steering Committee 승인 대기 |
| **이미 Approved**     | **계획 문서 업데이트 → 실행**          |
| PM 혼자 변경 결정         | ❌ 항상 오답                      |

---

### 팀 동기부여 — Competitive Environment는 오답

> "highly motivated and high-performing team"을 만드는 방법 문제에서

- **Competitive environment (경쟁 환경) = ❌ 오답**
- 이유: 일부 팀원에게만 효과적, 팀워크 깨고 불안감 조성 가능 → **모든** 팀원에게 효과적이지 않음
- PMP는 **협업, 맥락 제공, 개인 맞춤 인센티브** 선호 / **경쟁, 압박** 비선호

---

### Behavioral Orientation 4가지 (⚠️ 리더십 스타일과 다른 개념!)

> 핵심: PMI의 **Behavioral Orientation**은 일반적인 리더십 스타일(Directive/Supportive 등)과 **다른 프레임워크**임!

#### 문제 패턴
> Virtual team, complex project, tight deadline + **directive behavioral orientation** PM → 어떻게 리드?
> → 정답: **D. Implement communication channels to announce task completion**

#### 4가지 Behavioral Orientation

| 성향 | 특징 | 대표 액션 |
|---|---|---|
| **Directive** ✅ | 결과지향, **명확·간결한 커뮤니케이션** 선호, 태스크 완료 집중 | Task completion 커뮤니케이션 채널 구축 |
| **Affiliation** | 관계 구축, 라포 형성, 팀워크 중시 | Build rapport & relationships |
| **Achievement** | 동기부여, 높은 기준, 성취 추구 | Achievement awards |
| **Power** | 영향력 행사, 통제, 의사결정 주도 | Influence decisions & control delivery |

#### ❗ 가장 헷갈리는 포인트
- 일상어로 "directive" = 지시적/통제적 → **C(control/influence)** 고르기 쉬움
- 근데 PMI에서 **Control/Influence = Power orientation**
- **Directive = "명확한 커뮤니케이션으로 태스크·결과에 집중"**

#### 킬러 키워드 매핑
- **Directive** → clear communication, task completion, results-driven
- **Affiliation** → rapport, relationships, belonging
- **Achievement** → motivation, awards, high standards, excellence
- **Power** → influence, control, decision-making, authority

> 참고: PMI Learning Library - Successful Motivational Techniques for Virtual Teams

---

### 리스크 관리 7단계 프로세스 (Risk Management Process)

> 핵심: 어떤 문서가 업데이트되냐 = 지금 어느 단계냐

#### 전체 흐름
```
1. Plan Risk Management       → 리스크 관리 방법 계획
         ↓
2. Identify Risks             → 리스크 목록 식별
         ↓
3. Qualitative Risk Analysis  → 확률/영향도 평가, 우선순위 결정
         ↓
4. Quantitative Risk Analysis → 수치로 리스크 영향 분석 (선택적)
         ↓
5. Plan Risk Responses        → 대응 전략 수립
         ↓
6. Implement Risk Responses   → 대응 계획 실행
         ↓
7. Monitor Risks              → 지속적 모니터링, 새 리스크 식별
```

#### 단계별 업데이트 문서

| 단계 | 업데이트 문서 |
|---|---|
| **1. Plan Risk Management** | Risk Management Plan (이후 업데이트 거의 없음) |
| **2. Identify Risks** | Risk Register 최초 생성, Assumption Log |
| **3. Qualitative Risk Analysis** ⭐ | Risk Register, Risk Report, Assumption Log, **Issue Log** (4개 전부) |
| **4. Quantitative Risk Analysis** | Risk Register, Risk Report |
| **5. Plan Risk Responses** | Risk Register, Risk Report, Change Requests |
| **6. Implement Risk Responses** | Issue Log, Change Requests |
| **7. Monitor Risks** | Risk Register, Issue Log, **Lessons Learned** ← 여기서만 나옴 |

#### 시험 포인트
- **Qualitative 끝난 후** → 4개 무조건 (Register, Report, Assumption Log, Issue Log)
- **Lessons Learned** → Monitor Risks(7단계)에서만. 앞 단계 선지에 나오면 ❌ 오답
- **Plan Risk Management** → 1단계 딱 한 번. 이후 선지에 나오면 ❌ 오답
- **Issue Log** → Qualitative(3단계)부터 시작. "분석하다 이슈 발견하면 바로 기록"
