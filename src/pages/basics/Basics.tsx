import { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import SEOHead from '../../components/SEOHead';
import TipBox from '../../components/TipBox';
import type { ReactElement } from 'react';

const SECTIONS = [
  { id: 'concept', icon: 'fa-lightbulb', ko: '회계의 개념과 목적', en: 'Accounting Concepts & Purpose' },
  { id: 'principles', icon: 'fa-scale-balanced', ko: '회계 원칙과 기준', en: 'Accounting Principles & Standards' },
  { id: 'equation', icon: 'fa-equals', ko: '회계 등식과 거래', en: 'Accounting Equation & Transactions' },
  { id: 'cycle', icon: 'fa-arrows-spin', ko: '회계 순환과정', en: 'Accounting Cycle' },
  { id: 'accounts', icon: 'fa-list-check', ko: '계정과목 체계', en: 'Chart of Accounts' },
  { id: 'ifrs', icon: 'fa-globe', ko: 'IFRS와 K-GAAP', en: 'IFRS & K-GAAP' },
];

/* ── Section Components ─────────────────────────────────── */

function ConceptSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '회계의 개념과 목적' : 'Accounting Concepts & Purpose'}</h2>

      <h3>{isKo ? '회계란 무엇인가?' : 'What is Accounting?'}</h3>
      <p>
        {isKo
          ? '회계(Accounting)란 기업이나 조직의 경제적 활동을 체계적으로 기록, 분류, 요약하여 이해관계자에게 유용한 재무 정보를 제공하는 과정입니다. 회계는 흔히 "사업의 언어(Language of Business)"라 불리며, 경영 의사결정의 근간이 되는 핵심 도구입니다. 모든 경제 주체는 자원의 유입과 유출을 추적하고, 그 결과를 측정하기 위해 회계를 필요로 합니다.'
          : 'Accounting is the process of systematically recording, classifying, and summarizing the economic activities of businesses or organizations to provide useful financial information to stakeholders. Often called the "Language of Business," accounting is a core tool that forms the foundation of management decision-making. Every economic entity needs accounting to track the inflow and outflow of resources and measure the results.'}
      </p>
      <p>
        {isKo
          ? '고대 메소포타미아의 점토판 기록에서 시작된 회계는 15세기 이탈리아의 루카 파치올리(Luca Pacioli)가 복식부기를 체계화하면서 현대적 형태를 갖추게 되었습니다. 파치올리는 1494년 저서 "산술, 기하, 비율, 비례의 총론(Summa de Arithmetica)"에서 차변과 대변의 이중 기록 원리를 설명하였으며, 이 원리는 500년이 넘은 오늘날에도 전 세계 모든 회계 시스템의 근간으로 사용되고 있습니다.'
          : 'Accounting began with clay tablet records in ancient Mesopotamia and took its modern form when Luca Pacioli systematized double-entry bookkeeping in 15th-century Italy. In his 1494 work "Summa de Arithmetica, Geometria, Proportioni et Proportionalita," Pacioli described the principle of dual recording with debits and credits. This principle remains the foundation of every accounting system worldwide, over 500 years later.'}
      </p>
      <img src="/assets/images/topics/basics-concept.svg" alt={isKo ? '회계의 개념' : 'Accounting Concepts'} className="guide-section-illustration" />

      <h3>{isKo ? '회계의 주요 목적' : 'Key Purposes of Accounting'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '재무 상태 파악' : 'Assessing Financial Position'}</strong>
          <p>{isKo ? '기업이 보유한 자산, 부채, 자본의 현황을 체계적으로 파악합니다. 재무상태표(대차대조표)를 통해 특정 시점의 기업 재무 건전성을 확인할 수 있으며, 이는 투자자와 채권자의 의사결정에 핵심적인 정보를 제공합니다.' : 'Systematically identify the current status of assets, liabilities, and equity. The Statement of Financial Position (Balance Sheet) reveals the financial health of a company at a specific point in time, providing critical information for investor and creditor decision-making.'}</p>
        </li>
        <li>
          <strong>{isKo ? '경영 성과 측정' : 'Measuring Business Performance'}</strong>
          <p>{isKo ? '일정 기간 동안의 수익과 비용을 비교하여 순이익 또는 순손실을 산출합니다. 손익계산서(포괄손익계산서)를 통해 기업이 얼마나 효율적으로 가치를 창출하고 있는지 평가할 수 있습니다.' : 'Compare revenues and expenses over a period to calculate net income or net loss. The Income Statement (Statement of Comprehensive Income) enables evaluation of how efficiently a company is creating value.'}</p>
        </li>
        <li>
          <strong>{isKo ? '의사결정 지원' : 'Supporting Decision-Making'}</strong>
          <p>{isKo ? '경영자, 투자자, 정부 기관 등 다양한 이해관계자에게 합리적 의사결정을 위한 정보를 제공합니다. 원가회계 정보는 제품 가격 결정에, 관리회계 정보는 사업 전략 수립에, 세무회계 정보는 납세 의무 이행에 활용됩니다.' : 'Provide information for rational decision-making to various stakeholders including managers, investors, and government agencies. Cost accounting information aids product pricing, management accounting information supports business strategy formulation, and tax accounting information facilitates tax compliance.'}</p>
        </li>
        <li>
          <strong>{isKo ? '법적 의무 이행' : 'Fulfilling Legal Obligations'}</strong>
          <p>{isKo ? '상법, 세법, 외부감사법 등 관련 법률에 따라 기업은 재무제표를 작성하고 공시할 의무가 있습니다. 상장기업의 경우 분기별 재무보고서를 금융감독원 전자공시시스템(DART)에 제출해야 합니다.' : 'Companies are obligated to prepare and disclose financial statements according to relevant laws including commercial law, tax law, and external audit law. Listed companies must submit quarterly financial reports to the Financial Supervisory Service electronic disclosure system (DART).'}</p>
        </li>
      </ol>

      <h3>{isKo ? '회계의 분류' : 'Classification of Accounting'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '재무회계 (Financial Accounting)' : 'Financial Accounting'}</strong>
          {isKo ? ': 외부 이해관계자(투자자, 채권자, 정부)에게 재무 정보를 제공하는 회계입니다. IFRS나 K-GAAP 등 공인된 회계기준에 따라 작성됩니다.' : ': Accounting that provides financial information to external stakeholders (investors, creditors, government). Prepared according to recognized accounting standards such as IFRS or K-GAAP.'}
        </li>
        <li>
          <strong>{isKo ? '관리회계 (Management Accounting)' : 'Management Accounting'}</strong>
          {isKo ? ': 내부 경영자의 의사결정을 지원하기 위한 회계입니다. 법적 형식에 구애받지 않으며, 예산 편성, 원가 분석, 성과 평가 등에 활용됩니다.' : ': Accounting that supports internal management decision-making. Not bound by legal format, it is used for budgeting, cost analysis, performance evaluation, and more.'}
        </li>
        <li>
          <strong>{isKo ? '세무회계 (Tax Accounting)' : 'Tax Accounting'}</strong>
          {isKo ? ': 세법에 따라 과세 소득을 계산하고 납세 의무를 이행하기 위한 회계입니다. 법인세, 부가가치세, 소득세 등의 신고와 납부를 다룹니다.' : ': Accounting for calculating taxable income and fulfilling tax obligations according to tax law. Covers filing and payment of corporate tax, value-added tax, income tax, and more.'}
        </li>
        <li>
          <strong>{isKo ? '원가회계 (Cost Accounting)' : 'Cost Accounting'}</strong>
          {isKo ? ': 제품이나 서비스의 원가를 정확하게 계산하는 회계입니다. 제조업에서 특히 중요하며, 직접재료비, 직접노무비, 제조간접비를 체계적으로 배분합니다.' : ': Accounting that accurately calculates the cost of products or services. Particularly important in manufacturing, it systematically allocates direct materials, direct labor, and manufacturing overhead.'}
        </li>
      </ul>

      <h3>{isKo ? '회계 정보의 이용자' : 'Users of Accounting Information'}</h3>
      <p>
        {isKo
          ? '회계 정보의 이용자는 크게 내부 이용자와 외부 이용자로 나뉩니다. 내부 이용자에는 경영자, 관리자, 종업원이 포함되며, 이들은 일상적 경영 의사결정과 전략 수립에 회계 정보를 활용합니다. 외부 이용자에는 투자자, 채권자(은행 등), 거래처, 정부 기관(국세청, 금융감독원), 일반 대중이 포함됩니다. 각 이용자 그룹은 서로 다른 관점과 목적으로 동일한 재무 정보를 분석합니다.'
          : 'Users of accounting information are broadly divided into internal and external users. Internal users include executives, managers, and employees who use accounting information for routine management decisions and strategy formulation. External users include investors, creditors (banks, etc.), business partners, government agencies (National Tax Service, Financial Supervisory Service), and the general public. Each user group analyzes the same financial information from different perspectives and for different purposes.'}
      </p>

      <TipBox type="important" title={isKo ? '회계의 핵심 원리' : 'Core Principle of Accounting'}>
        <p>
          {isKo
            ? '회계의 가장 기본적인 원리는 "거래의 이중성(Duality of Transactions)"입니다. 모든 경제적 거래는 반드시 두 가지 측면을 가지며, 차변(Debit)과 대변(Credit)의 합계는 항상 일치해야 합니다. 이 원리를 이해하면 복식부기의 모든 기록이 자연스럽게 이해됩니다. 회계를 처음 배울 때 이 개념을 확실히 잡는 것이 가장 중요합니다.'
            : 'The most fundamental principle of accounting is the "Duality of Transactions." Every economic transaction necessarily has two aspects, and the total of Debits must always equal the total of Credits. Understanding this principle makes all double-entry bookkeeping records naturally comprehensible. Firmly grasping this concept is the most important step when first learning accounting.'}
        </p>
      </TipBox>
    </section>
  );
}

function PrinciplesSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '회계 원칙과 기준' : 'Accounting Principles & Standards'}</h2>

      <h3>{isKo ? '일반적으로 인정된 회계원칙(GAAP)' : 'Generally Accepted Accounting Principles (GAAP)'}</h3>
      <p>
        {isKo
          ? '일반적으로 인정된 회계원칙(GAAP: Generally Accepted Accounting Principles)은 재무제표 작성 시 준수해야 하는 규칙과 관행의 체계입니다. GAAP는 재무 정보의 비교 가능성과 신뢰성을 확보하기 위해 존재하며, 기업들이 동일한 기준으로 재무 정보를 보고하도록 합니다. 한국에서는 한국채택국제회계기준(K-IFRS)과 일반기업회계기준(K-GAAP)이 적용됩니다.'
          : 'Generally Accepted Accounting Principles (GAAP) are the framework of rules and practices that must be followed when preparing financial statements. GAAP exists to ensure comparability and reliability of financial information, requiring companies to report financial information under the same standards. In Korea, Korean International Financial Reporting Standards (K-IFRS) and Korean Generally Accepted Accounting Principles (K-GAAP) are applied.'}
      </p>
      <p>
        {isKo
          ? '회계기준은 단순한 규칙의 나열이 아니라, 재무보고의 개념적 체계(Conceptual Framework) 위에 구축됩니다. 개념적 체계는 재무보고의 목적, 유용한 재무정보의 질적 특성, 재무제표의 구성 요소(자산, 부채, 자본, 수익, 비용)의 정의와 인식 기준을 포함합니다.'
          : 'Accounting standards are not merely a list of rules but are built upon the Conceptual Framework of financial reporting. The Conceptual Framework includes the objective of financial reporting, qualitative characteristics of useful financial information, and the definitions and recognition criteria of financial statement elements (assets, liabilities, equity, revenue, expenses).'}
      </p>
      <img src="/assets/images/topics/basics-principles.svg" alt={isKo ? '회계 원칙' : 'Accounting Principles'} className="guide-section-illustration" />

      <h3>{isKo ? '기본 회계 원칙' : 'Fundamental Accounting Principles'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '발생주의 원칙 (Accrual Basis)' : 'Accrual Basis Principle'}</strong>
          <p>{isKo ? '수익과 비용은 현금의 수수 시점이 아닌 경제적 사건이 발생한 시점에 인식합니다. 예를 들어, 12월에 용역을 제공하고 1월에 대금을 받는 경우, 수익은 12월에 인식합니다. 이는 현금주의(Cash Basis)와 대비되는 개념으로, 현대 재무회계의 근본 원칙입니다.' : 'Revenue and expenses are recognized when economic events occur, not when cash is received or paid. For example, if a service is provided in December but payment is received in January, revenue is recognized in December. This contrasts with the Cash Basis and is a fundamental principle of modern financial accounting.'}</p>
        </li>
        <li>
          <strong>{isKo ? '수익 인식 원칙 (Revenue Recognition)' : 'Revenue Recognition Principle'}</strong>
          <p>{isKo ? '수익은 재화나 용역이 고객에게 이전되어 수행의무가 충족된 시점에 인식합니다. IFRS 15에서는 5단계 수익 인식 모형을 제시합니다: (1) 계약 식별, (2) 수행의무 식별, (3) 거래가격 산정, (4) 거래가격 배분, (5) 수행의무 충족 시 수익 인식.' : 'Revenue is recognized when goods or services are transferred to the customer and performance obligations are satisfied. IFRS 15 presents a 5-step revenue recognition model: (1) identify the contract, (2) identify performance obligations, (3) determine the transaction price, (4) allocate the transaction price, (5) recognize revenue when performance obligations are satisfied.'}</p>
        </li>
        <li>
          <strong>{isKo ? '대응 원칙 (Matching Principle)' : 'Matching Principle'}</strong>
          <p>{isKo ? '비용은 그 비용과 관련된 수익이 인식되는 기간에 함께 인식해야 합니다. 제품을 판매하여 수익을 인식할 때, 그 제품의 제조원가도 같은 기간에 비용으로 인식합니다. 이를 통해 특정 기간의 경영 성과를 정확하게 측정할 수 있습니다.' : 'Expenses must be recognized in the same period as the related revenue. When revenue is recognized from selling a product, the manufacturing cost of that product is also recognized as an expense in the same period. This enables accurate measurement of business performance for a specific period.'}</p>
        </li>
        <li>
          <strong>{isKo ? '역사적 원가 원칙 (Historical Cost)' : 'Historical Cost Principle'}</strong>
          <p>{isKo ? '자산은 취득 시점의 원가로 기록합니다. 다만, 현대 회계에서는 공정가치(Fair Value) 측정이 확대되어 금융상품, 투자부동산 등에서는 공정가치 평가가 적용되기도 합니다. IFRS는 원가 모형과 공정가치 모형 중 선택을 허용하는 경우가 많습니다.' : 'Assets are recorded at their acquisition cost. However, in modern accounting, fair value measurement has expanded, and fair value valuation is applied to financial instruments, investment properties, and more. IFRS often allows a choice between the cost model and fair value model.'}</p>
        </li>
      </ol>

      <h3>{isKo ? '재무정보의 질적 특성' : 'Qualitative Characteristics of Financial Information'}</h3>
      <ul>
        <li>
          <strong>{isKo ? '목적적합성 (Relevance)' : 'Relevance'}</strong>
          {isKo ? ': 정보가 이용자의 의사결정에 차이를 만들 수 있어야 합니다. 예측 가치와 확인 가치를 모두 가져야 하며, 중요성(Materiality)은 목적적합성의 하위 개념입니다.' : ': Information must be capable of making a difference in users\' decisions. It must have both predictive value and confirmatory value, and Materiality is a sub-concept of relevance.'}
        </li>
        <li>
          <strong>{isKo ? '충실한 표현 (Faithful Representation)' : 'Faithful Representation'}</strong>
          {isKo ? ': 재무정보가 경제적 현상을 완전하고, 중립적이며, 오류 없이 표현해야 합니다. 이전에 "신뢰성(Reliability)"으로 불렸던 개념이 개정되어 더 넓은 의미를 포함합니다.' : ': Financial information must represent economic phenomena completely, neutrally, and free from error. This concept, previously called "Reliability," was revised to encompass a broader meaning.'}
        </li>
        <li>
          <strong>{isKo ? '비교 가능성 (Comparability)' : 'Comparability'}</strong>
          {isKo ? ': 기업 간 비교와 동일 기업의 기간 간 비교가 가능해야 합니다. 회계정책의 일관성이 이를 뒷받침합니다.' : ': Must enable comparison between entities and between periods for the same entity. Consistency in accounting policies supports this.'}
        </li>
        <li>
          <strong>{isKo ? '검증 가능성 (Verifiability)' : 'Verifiability'}</strong>
          {isKo ? ': 독립적인 관찰자들이 동일한 결론에 도달할 수 있어야 합니다. 외부감사의 근거가 되는 특성입니다.' : ': Independent observers must be able to reach the same conclusion. This characteristic forms the basis for external auditing.'}
        </li>
        <li>
          <strong>{isKo ? '적시성 (Timeliness)' : 'Timeliness'}</strong>
          {isKo ? ': 정보가 의사결정에 영향을 줄 수 있는 시점에 제공되어야 합니다. 지나치게 지연된 정보는 유용성이 감소합니다.' : ': Information must be available in time to influence decisions. Excessively delayed information loses its usefulness.'}
        </li>
        <li>
          <strong>{isKo ? '이해 가능성 (Understandability)' : 'Understandability'}</strong>
          {isKo ? ': 합리적 수준의 사업 및 회계 지식을 가진 이용자가 이해할 수 있도록 명확하고 간결하게 표현되어야 합니다.' : ': Must be expressed clearly and concisely so that users with a reasonable level of business and accounting knowledge can understand it.'}
        </li>
      </ul>

      <h3>{isKo ? '회계의 기본 가정' : 'Basic Accounting Assumptions'}</h3>
      <p>
        {isKo
          ? '회계는 몇 가지 기본 가정 위에 성립합니다. 첫째, 기업실체의 가정(Entity Assumption)으로, 기업은 소유주와 분리된 독립된 경제적 실체로 간주됩니다. 둘째, 계속기업의 가정(Going Concern)으로, 기업은 예측 가능한 미래에 청산되지 않고 계속 영업할 것으로 가정합니다. 셋째, 기간별 보고의 가정(Periodicity)으로, 기업의 계속적 활동을 인위적으로 일정 기간(분기, 반기, 연간)으로 나누어 보고합니다. 넷째, 화폐 단위의 가정(Monetary Unit)으로, 모든 거래는 화폐로 측정 가능한 것만 기록합니다.'
          : 'Accounting is established upon several basic assumptions. First, the Entity Assumption: a business is regarded as an independent economic entity separate from its owners. Second, the Going Concern assumption: the business is assumed to continue operating in the foreseeable future without liquidation. Third, the Periodicity assumption: the continuous activities of a business are artificially divided into periods (quarterly, semi-annual, annual) for reporting. Fourth, the Monetary Unit assumption: only transactions measurable in monetary terms are recorded.'}
      </p>

      <TipBox type="tip" title={isKo ? '원칙 vs 규칙 중심 회계기준' : 'Principles-based vs Rules-based Standards'}>
        <p>
          {isKo
            ? 'IFRS는 원칙 중심(Principles-based) 기준으로, 큰 원칙을 제시하고 세부적인 적용은 전문가의 판단에 맡깁니다. 반면 미국 GAAP(US GAAP)은 규칙 중심(Rules-based)으로, 구체적이고 상세한 규정을 제시합니다. 한국은 K-IFRS를 채택하여 원칙 중심 접근을 따르고 있으며, 이는 회계 전문가의 전문적 판단(Professional Judgment)이 더욱 중요해졌음을 의미합니다.'
            : 'IFRS is principles-based, presenting broad principles and leaving detailed application to professional judgment. In contrast, US GAAP is rules-based, providing specific and detailed regulations. Korea has adopted K-IFRS, following the principles-based approach, meaning that professional judgment of accounting experts has become even more important.'}
        </p>
      </TipBox>
    </section>
  );
}

function EquationSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '회계 등식과 거래' : 'Accounting Equation & Transactions'}</h2>

      <h3>{isKo ? '회계 등식의 이해' : 'Understanding the Accounting Equation'}</h3>
      <p>
        {isKo
          ? '회계 등식(Accounting Equation)은 복식부기의 기초이자 재무상태표의 근본 구조입니다. 가장 기본적인 형태는 "자산 = 부채 + 자본"입니다. 이 등식은 기업이 보유한 경제적 자원(자산)이 어디서 왔는지를 보여줍니다. 외부에서 빌린 것(부채)이거나 소유주가 투자하거나 영업으로 벌어들인 것(자본)입니다. 이 등식은 어떤 거래가 발생하더라도 항상 균형을 유지합니다.'
          : 'The Accounting Equation is the foundation of double-entry bookkeeping and the fundamental structure of the Statement of Financial Position. Its most basic form is "Assets = Liabilities + Equity." This equation shows where a company\'s economic resources (assets) come from: either borrowed from outside (liabilities) or invested by owners or earned from operations (equity). This equation always remains in balance regardless of what transactions occur.'}
      </p>
      <p>
        {isKo
          ? '확장된 회계 등식은 자본을 더 세분화합니다: "자산 = 부채 + 자본금 + 이익잉여금(수익 - 비용)". 이를 통해 손익계산서와 재무상태표의 관계를 이해할 수 있습니다. 수익이 증가하면 이익잉여금이 증가하고, 비용이 증가하면 이익잉여금이 감소합니다. 결국 손익계산서의 순이익은 재무상태표의 자본을 변화시킵니다.'
          : 'The expanded accounting equation further breaks down equity: "Assets = Liabilities + Capital Stock + Retained Earnings (Revenue - Expenses)." This reveals the relationship between the Income Statement and the Statement of Financial Position. When revenue increases, retained earnings increase; when expenses increase, retained earnings decrease. Ultimately, net income from the Income Statement changes equity on the Statement of Financial Position.'}
      </p>
      <img src="/assets/images/topics/basics-equation.svg" alt={isKo ? '회계 등식' : 'Accounting Equation'} className="guide-section-illustration" />

      <h3>{isKo ? '거래의 의미와 유형' : 'Meaning and Types of Transactions'}</h3>
      <p>
        {isKo
          ? '회계에서 "거래(Transaction)"란 기업의 재무 상태에 변동을 가져오는 경제적 사건을 말합니다. 일상적 의미의 거래와 회계적 거래는 다를 수 있습니다. 예를 들어, 계약을 체결하는 것은 일상적 거래이지만, 재무 상태의 변동이 없으므로 회계적 거래가 아닙니다. 반면 화재로 인한 재고자산 소실은 일상적 거래가 아니지만 재무 상태를 변동시키므로 회계적 거래입니다.'
          : 'In accounting, a "Transaction" refers to an economic event that changes the financial position of a company. Everyday transactions and accounting transactions can differ. For example, signing a contract is an everyday transaction but not an accounting transaction because it does not change financial position. Conversely, the loss of inventory due to fire is not an everyday transaction but is an accounting transaction because it changes financial position.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '교환 거래 (Exchange Transactions)' : 'Exchange Transactions'}</strong>
          <p>{isKo ? '자산, 부채, 자본 항목들 간의 교환이 발생하는 거래입니다. 예: 현금으로 비품을 구매(자산의 증가 + 자산의 감소), 은행에서 대출(자산의 증가 + 부채의 증가), 외상매입금 현금 상환(부채의 감소 + 자산의 감소).' : 'Transactions involving exchanges between asset, liability, and equity items. Examples: purchasing equipment with cash (asset increase + asset decrease), bank loan (asset increase + liability increase), repaying accounts payable with cash (liability decrease + asset decrease).'}</p>
        </li>
        <li>
          <strong>{isKo ? '손익 거래 (Income/Expense Transactions)' : 'Income/Expense Transactions'}</strong>
          <p>{isKo ? '수익 또는 비용이 발생하여 순자산(자본)에 변동이 생기는 거래입니다. 예: 용역 수익의 발생(자산 증가 + 수익 발생), 급여 지급(비용 발생 + 자산 감소), 이자비용 발생(비용 발생 + 부채 증가).' : 'Transactions where revenue or expenses occur, causing changes in net assets (equity). Examples: service revenue earned (asset increase + revenue), salary payment (expense + asset decrease), interest expense incurred (expense + liability increase).'}</p>
        </li>
        <li>
          <strong>{isKo ? '혼합 거래 (Mixed Transactions)' : 'Mixed Transactions'}</strong>
          <p>{isKo ? '교환 거래와 손익 거래의 성격을 동시에 가지는 거래입니다. 예: 장부가액 100만원인 비품을 120만원에 매각하면, 교환(자산 간 교환)과 손익(처분이익 20만원)이 동시에 발생합니다.' : 'Transactions that simultaneously have the nature of both exchange and income/expense transactions. Example: selling equipment with a book value of 1 million won for 1.2 million won involves both exchange (between assets) and income (disposal gain of 200,000 won).'}</p>
        </li>
      </ol>

      <h3>{isKo ? '차변과 대변의 원리' : 'The Debit and Credit Principle'}</h3>
      <p>
        {isKo
          ? '복식부기에서 모든 거래는 차변(Debit, 왼쪽)과 대변(Credit, 오른쪽)에 동시에 기록됩니다. 차변과 대변은 단순히 "왼쪽"과 "오른쪽"을 의미하며, "좋다/나쁘다"의 의미가 아닙니다. 계정의 성격에 따라 증가와 감소가 기록되는 위치가 달라집니다.'
          : 'In double-entry bookkeeping, every transaction is simultaneously recorded on the Debit (left) and Credit (right) sides. Debit and Credit simply mean "left" and "right" — they do not mean "good" or "bad." The position where increases and decreases are recorded depends on the nature of the account.'}
      </p>
      <ul>
        <li>{isKo ? '자산 계정: 증가는 차변, 감소는 대변' : 'Asset accounts: increases on debit, decreases on credit'}</li>
        <li>{isKo ? '부채 계정: 증가는 대변, 감소는 차변' : 'Liability accounts: increases on credit, decreases on debit'}</li>
        <li>{isKo ? '자본 계정: 증가는 대변, 감소는 차변' : 'Equity accounts: increases on credit, decreases on debit'}</li>
        <li>{isKo ? '수익 계정: 발생은 대변 (자본을 증가시키므로)' : 'Revenue accounts: recorded on credit (because they increase equity)'}</li>
        <li>{isKo ? '비용 계정: 발생은 차변 (자본을 감소시키므로)' : 'Expense accounts: recorded on debit (because they decrease equity)'}</li>
      </ul>

      <h3>{isKo ? '거래의 분개 (Journal Entry)' : 'Journal Entries'}</h3>
      <p>
        {isKo
          ? '분개(Journal Entry)란 발생한 거래를 차변과 대변으로 나누어 분개장에 기록하는 것입니다. 분개는 회계 기록의 첫 번째 단계로, 거래의 날짜, 관련 계정과목, 금액, 그리고 간단한 설명(적요)을 포함합니다. 예를 들어, 사무용 컴퓨터를 현금 200만원에 구매한 경우: (차변) 비품 2,000,000원 / (대변) 현금 2,000,000원으로 분개합니다.'
          : 'A Journal Entry is the recording of a transaction in the journal by dividing it into debit and credit. Journalizing is the first step in accounting records, including the date of the transaction, related accounts, amounts, and a brief description. For example, purchasing an office computer for 2,000,000 won in cash: (Debit) Equipment 2,000,000 / (Credit) Cash 2,000,000.'}
      </p>

      <TipBox type="warning" title={isKo ? '등식의 균형 확인' : 'Checking Equation Balance'}>
        <p>
          {isKo
            ? '모든 분개에서 차변 합계와 대변 합계는 반드시 일치해야 합니다. 만약 일치하지 않는다면 기록 오류가 발생한 것입니다. 시산표(Trial Balance)는 이러한 균형을 검증하기 위한 도구입니다. 다만, 시산표의 차대 합계가 일치하더라도 계정과목의 오류, 거래 누락, 이중 기록 등의 오류는 발견할 수 없다는 한계가 있습니다.'
            : 'In every journal entry, the total of debits must equal the total of credits. If they do not match, a recording error has occurred. The Trial Balance is a tool for verifying this balance. However, even if the trial balance balances, it cannot detect errors such as wrong account classifications, omitted transactions, or duplicate entries.'}
        </p>
      </TipBox>
    </section>
  );
}

function CycleSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '회계 순환과정' : 'Accounting Cycle'}</h2>

      <h3>{isKo ? '회계 순환과정이란?' : 'What is the Accounting Cycle?'}</h3>
      <p>
        {isKo
          ? '회계 순환과정(Accounting Cycle)은 회계 기간 동안 거래의 식별에서 재무제표 작성까지 반복적으로 수행되는 일련의 절차입니다. 이 과정은 매 회계기간(보통 1년)마다 순환적으로 반복되며, 기업의 재무 정보를 체계적으로 기록하고 보고하는 데 필수적인 프레임워크입니다. 회계 순환과정을 이해하면 개별 회계 처리의 의미와 목적을 전체적인 맥락에서 파악할 수 있습니다.'
          : 'The Accounting Cycle is a series of procedures performed repeatedly during an accounting period, from identifying transactions to preparing financial statements. This cycle repeats every accounting period (usually one year) and is an essential framework for systematically recording and reporting a company\'s financial information. Understanding the accounting cycle allows you to grasp the meaning and purpose of individual accounting treatments within the overall context.'}
      </p>
      <img src="/assets/images/topics/basics-cycle.svg" alt={isKo ? '회계 순환과정' : 'Accounting Cycle'} className="guide-section-illustration" />

      <h3>{isKo ? '회계 순환과정의 단계' : 'Steps of the Accounting Cycle'}</h3>
      <ol>
        <li>
          <strong>{isKo ? '1단계: 거래의 식별과 분석' : 'Step 1: Identify and Analyze Transactions'}</strong>
          <p>{isKo ? '경제적 사건 중 회계적 거래에 해당하는 것을 식별하고, 어떤 계정과목이 영향을 받는지, 금액은 얼마인지, 차변과 대변 중 어느 쪽에 기록해야 하는지를 분석합니다. 이 단계에서는 거래의 원천 증빙(영수증, 청구서, 계약서 등)이 필수적입니다.' : 'Identify which economic events qualify as accounting transactions and analyze which accounts are affected, the amounts involved, and whether they should be recorded on the debit or credit side. Source documents (receipts, invoices, contracts) are essential at this stage.'}</p>
        </li>
        <li>
          <strong>{isKo ? '2단계: 분개 (Journalizing)' : 'Step 2: Journalizing'}</strong>
          <p>{isKo ? '식별된 거래를 분개장(Journal)에 시간순으로 기록합니다. 각 분개는 날짜, 계정과목, 차변 금액, 대변 금액, 적요를 포함합니다. 분개장은 모든 거래의 시간순 기록으로, "역사적 기록부"라고도 합니다.' : 'Record identified transactions chronologically in the Journal. Each entry includes the date, accounts, debit amounts, credit amounts, and a description. The journal is a chronological record of all transactions, also called the "book of original entry."'}</p>
        </li>
        <li>
          <strong>{isKo ? '3단계: 전기 (Posting)' : 'Step 3: Posting'}</strong>
          <p>{isKo ? '분개장에 기록된 내용을 각 계정과목별 원장(Ledger)으로 옮겨 적습니다. 원장은 계정과목별로 모든 거래를 모아놓은 장부로, T계정 형태로 표시됩니다. 전기를 통해 각 계정의 잔액을 파악할 수 있게 됩니다.' : 'Transfer journal entries to individual account Ledgers. The ledger is a book that collects all transactions by account, displayed in T-account format. Through posting, the balance of each account can be determined.'}</p>
        </li>
        <li>
          <strong>{isKo ? '4단계: 수정 전 시산표 작성' : 'Step 4: Prepare Unadjusted Trial Balance'}</strong>
          <p>{isKo ? '모든 원장 계정의 잔액을 한 곳에 모아 차변 합계와 대변 합계의 일치 여부를 확인합니다. 시산표는 장부 기록의 정확성을 검증하는 첫 번째 도구이며, 차대 합계가 일치해야 다음 단계로 진행할 수 있습니다.' : 'Gather all ledger account balances in one place to verify that total debits equal total credits. The trial balance is the first tool for verifying the accuracy of book records, and totals must balance before proceeding to the next step.'}</p>
        </li>
        <li>
          <strong>{isKo ? '5단계: 수정 분개 (Adjusting Entries)' : 'Step 5: Adjusting Entries'}</strong>
          <p>{isKo ? '발생주의에 따라 기말 수정 분개를 수행합니다. 선급비용의 기간 배분, 미수수익의 인식, 감가상각비의 계상, 대손충당금의 설정 등이 포함됩니다. 수정 분개는 재무제표의 정확성을 확보하는 핵심 단계입니다.' : 'Perform period-end adjusting entries according to the accrual basis. This includes allocating prepaid expenses, recognizing accrued revenues, recording depreciation, and establishing allowances for doubtful accounts. Adjusting entries are a critical step for ensuring financial statement accuracy.'}</p>
        </li>
        <li>
          <strong>{isKo ? '6단계: 수정 후 시산표 작성' : 'Step 6: Prepare Adjusted Trial Balance'}</strong>
          <p>{isKo ? '수정 분개를 반영한 후 다시 시산표를 작성하여 차대 균형을 확인합니다. 이 수정 후 시산표가 재무제표 작성의 직접적인 기초가 됩니다.' : 'After reflecting adjusting entries, prepare another trial balance to verify debit-credit balance. This adjusted trial balance serves as the direct basis for preparing financial statements.'}</p>
        </li>
        <li>
          <strong>{isKo ? '7단계: 재무제표 작성' : 'Step 7: Prepare Financial Statements'}</strong>
          <p>{isKo ? '수정 후 시산표를 기초로 재무상태표, 포괄손익계산서, 자본변동표, 현금흐름표, 주석을 작성합니다. 재무제표는 회계 순환과정의 최종 산출물이자 이해관계자에게 제공되는 핵심 보고서입니다.' : 'Based on the adjusted trial balance, prepare the Statement of Financial Position, Statement of Comprehensive Income, Statement of Changes in Equity, Statement of Cash Flows, and Notes. Financial statements are the final output of the accounting cycle and the core reports provided to stakeholders.'}</p>
        </li>
        <li>
          <strong>{isKo ? '8단계: 마감 분개 (Closing Entries)' : 'Step 8: Closing Entries'}</strong>
          <p>{isKo ? '수익과 비용의 임시 계정(명목 계정)을 마감하여 잔액을 0으로 만들고, 순이익(또는 순손실)을 이익잉여금 계정으로 대체합니다. 이를 통해 다음 회계기간의 수익과 비용을 새롭게 집계할 수 있게 됩니다.' : 'Close temporary accounts (nominal accounts) for revenue and expenses, bringing their balances to zero, and transfer net income (or net loss) to the Retained Earnings account. This enables fresh accumulation of revenues and expenses for the next accounting period.'}</p>
        </li>
      </ol>

      <h3>{isKo ? '정산표(Worksheet)의 활용' : 'Using the Worksheet'}</h3>
      <p>
        {isKo
          ? '정산표는 회계 순환과정을 효율적으로 수행하기 위한 비공식적 도구입니다. 수정 전 시산표, 수정 분개, 수정 후 시산표, 손익계산서, 재무상태표의 5개 영역으로 구성되며, 한 장의 표에서 회계 순환과정의 핵심 단계를 모두 수행할 수 있습니다. 정산표는 공식적인 재무보고 서류는 아니지만, 실무에서 결산 작업의 정확성과 효율성을 크게 높여주는 도구로 널리 사용됩니다.'
          : 'The Worksheet is an informal tool for efficiently performing the accounting cycle. It consists of five sections: unadjusted trial balance, adjustments, adjusted trial balance, income statement, and statement of financial position. All key steps of the accounting cycle can be performed on a single worksheet. While not an official financial reporting document, it is widely used in practice as a tool that greatly improves the accuracy and efficiency of closing procedures.'}
      </p>

      <TipBox type="tip" title={isKo ? '결산 실무 포인트' : 'Practical Closing Tips'}>
        <p>
          {isKo
            ? '회계 순환과정에서 가장 실수가 많은 단계는 수정 분개입니다. 특히 감가상각비, 선급비용/미지급비용의 기간 배분, 대손충당금 설정, 재고자산 평가는 반드시 체크리스트를 만들어 하나씩 확인하세요. 현대의 ERP 시스템이 많은 부분을 자동화하지만, 수정 분개의 적절성을 판단하는 것은 여전히 회계 전문가의 역할입니다.'
            : 'The step with the most errors in the accounting cycle is adjusting entries. Especially for depreciation, allocation of prepaid/accrued expenses, allowance for doubtful accounts, and inventory valuation — always create a checklist and verify each item. Modern ERP systems automate much of this, but judging the appropriateness of adjusting entries remains the role of accounting professionals.'}
        </p>
      </TipBox>
    </section>
  );
}

function AccountsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? '계정과목 체계' : 'Chart of Accounts'}</h2>

      <h3>{isKo ? '계정과목이란?' : 'What are Accounts?'}</h3>
      <p>
        {isKo
          ? '계정과목(Account)은 거래의 내용을 성격별로 분류하기 위한 명칭입니다. 계정과목 체계(Chart of Accounts)는 기업이 사용하는 모든 계정과목을 체계적으로 정리한 목록으로, 기업의 재무 기록 시스템의 골격을 이룹니다. 잘 설계된 계정과목 체계는 정확한 기록, 효율적인 보고, 유의미한 분석을 가능하게 합니다.'
          : 'An Account is a name used to classify the content of transactions by nature. The Chart of Accounts is a systematically organized list of all accounts used by a company, forming the skeleton of the company\'s financial recording system. A well-designed chart of accounts enables accurate recording, efficient reporting, and meaningful analysis.'}
      </p>
      <p>
        {isKo
          ? '계정과목은 크게 재무상태표 계정(영구 계정)과 손익계산서 계정(임시 계정)으로 나뉩니다. 재무상태표 계정은 기말에 잔액이 차기로 이월되며, 손익계산서 계정은 기말에 마감하여 이익잉여금으로 대체됩니다.'
          : 'Accounts are broadly divided into Statement of Financial Position accounts (permanent accounts) and Income Statement accounts (temporary accounts). Statement of Financial Position account balances carry forward to the next period, while Income Statement accounts are closed at period-end and transferred to Retained Earnings.'}
      </p>
      <img src="/assets/images/topics/basics-accounts.svg" alt={isKo ? '계정과목 체계' : 'Chart of Accounts'} className="guide-section-illustration" />

      <h3>{isKo ? '자산 계정 (Assets)' : 'Asset Accounts'}</h3>
      <p>
        {isKo
          ? '자산은 과거 사건의 결과로 기업이 통제하고 있고, 미래에 경제적 효익이 유입될 것으로 기대되는 자원입니다. 자산은 유동성(현금화 속도)에 따라 유동자산과 비유동자산으로 분류됩니다.'
          : 'Assets are resources controlled by the entity as a result of past events, from which future economic benefits are expected to flow. Assets are classified as current assets and non-current assets based on liquidity (speed of conversion to cash).'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '유동자산' : 'Current Assets'}</strong>
          {isKo ? ': 현금및현금성자산, 단기금융상품, 매출채권(외상매출금), 재고자산, 선급금, 선급비용, 미수수익 등. 1년 이내에 현금화되거나 소비될 것으로 예상되는 자산입니다.' : ': Cash and cash equivalents, short-term financial instruments, accounts receivable, inventory, advance payments, prepaid expenses, accrued revenue, etc. Assets expected to be converted to cash or consumed within one year.'}
        </li>
        <li>
          <strong>{isKo ? '비유동자산' : 'Non-current Assets'}</strong>
          {isKo ? ': 유형자산(토지, 건물, 기계장치, 비품, 차량운반구), 무형자산(영업권, 특허권, 소프트웨어), 투자부동산, 장기금융상품, 장기매출채권 등. 1년 이상 장기간 사용하거나 보유하는 자산입니다.' : ': Tangible assets (land, buildings, machinery, equipment, vehicles), intangible assets (goodwill, patents, software), investment property, long-term financial instruments, long-term receivables, etc. Assets used or held for more than one year.'}
        </li>
      </ul>

      <h3>{isKo ? '부채 계정 (Liabilities)' : 'Liability Accounts'}</h3>
      <p>
        {isKo
          ? '부채는 과거 사건에 의해 발생한 현재의 의무로, 그 이행을 위해 경제적 효익이 유출될 것으로 예상되는 것입니다. 자산과 마찬가지로 유동부채와 비유동부채로 분류됩니다.'
          : 'Liabilities are present obligations arising from past events, the settlement of which is expected to result in an outflow of economic benefits. Like assets, they are classified as current liabilities and non-current liabilities.'}
      </p>
      <ul>
        <li>
          <strong>{isKo ? '유동부채' : 'Current Liabilities'}</strong>
          {isKo ? ': 매입채무(외상매입금), 단기차입금, 미지급금, 미지급비용, 선수금, 선수수익, 유동성장기부채, 예수금 등. 1년 이내에 상환하거나 이행해야 하는 의무입니다.' : ': Accounts payable, short-term borrowings, accrued payables, accrued expenses, advance receipts, unearned revenue, current portion of long-term debt, withholdings, etc. Obligations due within one year.'}
        </li>
        <li>
          <strong>{isKo ? '비유동부채' : 'Non-current Liabilities'}</strong>
          {isKo ? ': 장기차입금, 사채, 퇴직급여충당부채, 장기미지급금, 이연법인세부채 등. 만기가 1년을 초과하는 의무입니다.' : ': Long-term borrowings, bonds payable, retirement benefit obligations, long-term payables, deferred tax liabilities, etc. Obligations with maturities exceeding one year.'}
        </li>
      </ul>

      <h3>{isKo ? '자본, 수익, 비용 계정' : 'Equity, Revenue & Expense Accounts'}</h3>
      <p>
        {isKo
          ? '자본(Equity)은 기업의 총자산에서 총부채를 차감한 잔여 지분입니다. 자본금(보통주자본금, 우선주자본금), 자본잉여금(주식발행초과금), 이익잉여금(이익준비금, 미처분이익잉여금), 기타포괄손익누계액, 자기주식 등으로 구성됩니다.'
          : 'Equity is the residual interest in the total assets of a company after deducting total liabilities. It consists of capital stock (common stock, preferred stock), capital surplus (share premium), retained earnings (legal reserve, unappropriated retained earnings), accumulated other comprehensive income, and treasury stock.'}
      </p>
      <p>
        {isKo
          ? '수익(Revenue) 계정은 매출액, 용역수익, 이자수익, 배당금수익, 임대수익, 유형자산처분이익 등을 포함합니다. 비용(Expense) 계정은 매출원가, 급여, 임차료, 감가상각비, 광고선전비, 접대비, 세금과공과, 이자비용, 대손상각비, 유형자산처분손실 등을 포함합니다. 수익에서 비용을 차감한 금액이 당기순이익이며, 이는 이익잉여금에 가산되어 자본을 변동시킵니다.'
          : 'Revenue accounts include sales, service revenue, interest income, dividend income, rental income, and gains on disposal of tangible assets. Expense accounts include cost of goods sold, salaries, rent, depreciation, advertising, entertainment, taxes and dues, interest expense, bad debt expense, and losses on disposal of tangible assets. Revenue minus expenses equals net income, which is added to retained earnings and changes equity.'}
      </p>

      <h3>{isKo ? '계정과목 코드 체계' : 'Account Code System'}</h3>
      <p>
        {isKo
          ? '실무에서 계정과목은 숫자 코드로 관리됩니다. 일반적으로 1로 시작하는 코드는 자산, 2로 시작하면 부채, 3으로 시작하면 자본, 4로 시작하면 수익, 5로 시작하면 비용을 나타냅니다. 예를 들어, 101은 현금, 110은 매출채권, 201은 매입채무, 301은 자본금, 401은 매출액, 501은 매출원가와 같이 체계적으로 번호가 부여됩니다. 이러한 코드 체계는 ERP 시스템에서의 자동 분류, 검색, 보고서 생성을 용이하게 합니다.'
          : 'In practice, accounts are managed with numeric codes. Generally, codes starting with 1 represent assets, 2 for liabilities, 3 for equity, 4 for revenue, and 5 for expenses. For example, 101 for Cash, 110 for Accounts Receivable, 201 for Accounts Payable, 301 for Capital Stock, 401 for Sales Revenue, 501 for Cost of Goods Sold. This coding system facilitates automatic classification, search, and report generation in ERP systems.'}
      </p>

      <TipBox type="important" title={isKo ? '계정과목 선택의 중요성' : 'Importance of Account Selection'}>
        <p>
          {isKo
            ? '올바른 계정과목의 선택은 정확한 재무보고의 출발점입니다. 같은 거래라도 계정과목을 잘못 선택하면 재무제표의 왜곡이 발생합니다. 예를 들어, 비품(자산) 구매를 소모품비(비용)로 처리하면 자산이 과소 계상되고 비용이 과대 계상됩니다. 실무에서는 기업의 계정과목 코드북을 참조하고, 애매한 경우 상급자나 외부 전문가에게 확인하는 것이 중요합니다.'
            : 'Correct account selection is the starting point of accurate financial reporting. Even the same transaction can distort financial statements if the wrong account is chosen. For example, recording equipment (asset) purchase as supplies expense (expense) understates assets and overstates expenses. In practice, it is important to refer to the company\'s account code book and consult supervisors or external experts in ambiguous cases.'}
        </p>
      </TipBox>
    </section>
  );
}

function IfrsSection({ isKo }: { isKo: boolean }): ReactElement {
  return (
    <section className="guide-section">
      <h2>{isKo ? 'IFRS와 K-GAAP' : 'IFRS & K-GAAP'}</h2>

      <h3>{isKo ? 'IFRS의 탄생과 배경' : 'The Birth and Background of IFRS'}</h3>
      <p>
        {isKo
          ? '국제회계기준(IFRS: International Financial Reporting Standards)은 국제회계기준위원회(IASB: International Accounting Standards Board)가 제정하는 글로벌 회계기준입니다. 글로벌 자본시장의 확대와 국경을 넘는 투자 활동의 증가로 인해, 각국의 서로 다른 회계기준으로 작성된 재무제표를 비교하기 어려운 문제가 발생했습니다. IFRS는 이러한 문제를 해결하고 전 세계적으로 통일된 재무보고 언어를 제공하기 위해 개발되었습니다.'
          : 'International Financial Reporting Standards (IFRS) are global accounting standards established by the International Accounting Standards Board (IASB). With the expansion of global capital markets and increasing cross-border investment activities, it became difficult to compare financial statements prepared under different national accounting standards. IFRS was developed to solve this problem and provide a unified financial reporting language worldwide.'}
      </p>
      <p>
        {isKo
          ? '2024년 기준으로 전 세계 140개국 이상이 IFRS를 채택하고 있으며, 유럽연합은 2005년부터 상장기업에 IFRS를 의무 적용하고 있습니다. 미국은 자국의 US GAAP을 유지하고 있지만, IFRS와의 수렴(convergence) 작업을 지속하고 있습니다. 한국은 2011년부터 상장기업에 K-IFRS(한국채택국제회계기준)를 의무 적용하고 있습니다.'
          : 'As of 2024, over 140 countries worldwide have adopted IFRS, and the European Union has mandated IFRS for listed companies since 2005. The United States maintains its own US GAAP but continues convergence efforts with IFRS. Korea has mandated K-IFRS (Korean International Financial Reporting Standards) for listed companies since 2011.'}
      </p>
      <img src="/assets/images/topics/basics-ifrs.svg" alt={isKo ? 'IFRS 글로벌 채택 현황' : 'IFRS Global Adoption'} className="guide-section-illustration" />

      <h3>{isKo ? 'K-IFRS와 K-GAAP의 차이' : 'Differences Between K-IFRS and K-GAAP'}</h3>
      <p>
        {isKo
          ? '한국에서는 상장기업과 금융기관은 K-IFRS를, 비상장 중소기업은 일반기업회계기준(K-GAAP)을 적용합니다. 두 기준의 주요 차이점은 다음과 같습니다.'
          : 'In Korea, listed companies and financial institutions apply K-IFRS, while unlisted small and medium enterprises apply K-GAAP. The main differences between the two standards are as follows.'}
      </p>
      <ol>
        <li>
          <strong>{isKo ? '연결재무제표 vs 개별재무제표' : 'Consolidated vs Separate Financial Statements'}</strong>
          <p>{isKo ? 'K-IFRS는 연결재무제표를 주 재무제표로 요구합니다. 모회사와 자회사를 하나의 경제적 실체로 보고 합산하여 보고합니다. 반면 K-GAAP에서는 개별재무제표가 주 재무제표이며, 연결재무제표는 보조적 역할을 합니다.' : 'K-IFRS requires consolidated financial statements as the primary financial statements. It views the parent and subsidiaries as one economic entity and reports them combined. In contrast, K-GAAP uses separate financial statements as primary, with consolidated statements playing a supplementary role.'}</p>
        </li>
        <li>
          <strong>{isKo ? '공정가치 측정의 확대' : 'Expanded Fair Value Measurement'}</strong>
          <p>{isKo ? 'K-IFRS는 많은 자산과 부채에 대해 공정가치(Fair Value) 측정을 허용하거나 요구합니다. 금융상품, 투자부동산, 생물자산 등에서 공정가치 모형을 선택할 수 있습니다. K-GAAP은 역사적 원가(취득원가)를 더 많이 사용합니다.' : 'K-IFRS allows or requires fair value measurement for many assets and liabilities. The fair value model can be chosen for financial instruments, investment property, biological assets, and more. K-GAAP relies more heavily on historical cost (acquisition cost).'}</p>
        </li>
        <li>
          <strong>{isKo ? '원칙 중심 vs 규칙 중심' : 'Principles-based vs Rules-based'}</strong>
          <p>{isKo ? 'K-IFRS는 원칙 중심의 기준으로, 구체적인 규칙보다 큰 원칙을 제시합니다. 이에 따라 회계처리에 경영진의 판단이 더 많이 요구됩니다. K-GAAP은 상대적으로 더 구체적인 규정을 두고 있어 적용이 명확합니다.' : 'K-IFRS is a principles-based standard that presents broad principles rather than specific rules. This requires more management judgment in accounting treatment. K-GAAP has relatively more specific regulations, making application clearer.'}</p>
        </li>
        <li>
          <strong>{isKo ? '재무제표 명칭의 차이' : 'Differences in Financial Statement Nomenclature'}</strong>
          <p>{isKo ? 'K-IFRS에서는 "재무상태표", "포괄손익계산서"라는 명칭을 사용하고, K-GAAP에서는 "대차대조표", "손익계산서"라는 전통적인 명칭을 사용합니다. 또한 K-IFRS는 기타포괄손익을 포괄손익계산서에 포함하여 보고합니다.' : 'K-IFRS uses "Statement of Financial Position" and "Statement of Comprehensive Income," while K-GAAP uses the traditional names "Balance Sheet" and "Income Statement." Additionally, K-IFRS includes other comprehensive income in the Statement of Comprehensive Income.'}</p>
        </li>
      </ol>

      <h3>{isKo ? 'IFRS의 주요 기준서' : 'Key IFRS Standards'}</h3>
      <ul>
        <li>
          <strong>IFRS 9</strong>
          {isKo ? ' (금융상품): 금융자산의 분류와 측정, 손상(기대신용손실 모형), 위험회피회계를 규정합니다.' : ' (Financial Instruments): Governs classification and measurement of financial assets, impairment (expected credit loss model), and hedge accounting.'}
        </li>
        <li>
          <strong>IFRS 15</strong>
          {isKo ? ' (고객과의 계약에서 생기는 수익): 5단계 수익 인식 모형을 제시하며, 모든 산업에 동일하게 적용되는 단일 수익 인식 기준입니다.' : ' (Revenue from Contracts with Customers): Presents the 5-step revenue recognition model, a single revenue recognition standard applied uniformly across all industries.'}
        </li>
        <li>
          <strong>IFRS 16</strong>
          {isKo ? ' (리스): 리스이용자가 거의 모든 리스를 재무상태표에 인식하도록 요구합니다. 사용권자산과 리스부채를 인식하며, 기존의 운용리스/금융리스 구분이 리스이용자 입장에서 사실상 없어졌습니다.' : ' (Leases): Requires lessees to recognize nearly all leases on the Statement of Financial Position. Right-of-use assets and lease liabilities are recognized, effectively eliminating the operating/finance lease distinction from the lessee perspective.'}
        </li>
        <li>
          <strong>IAS 1</strong>
          {isKo ? ' (재무제표 표시): 재무제표의 전반적인 표시 요구사항을 규정합니다. 재무제표의 목적, 구성 요소, 일반 표시 원칙, 구조와 내용에 대한 기본 틀을 제공합니다.' : ' (Presentation of Financial Statements): Prescribes the overall requirements for the presentation of financial statements. Provides the basic framework for the purpose, components, general presentation principles, structure, and content of financial statements.'}
        </li>
        <li>
          <strong>IAS 16</strong>
          {isKo ? ' (유형자산): 유형자산의 인식, 측정(원가 모형 또는 재평가 모형), 감가상각, 손상, 제거에 대한 회계처리를 규정합니다.' : ' (Property, Plant and Equipment): Prescribes accounting treatment for recognition, measurement (cost model or revaluation model), depreciation, impairment, and derecognition of tangible assets.'}
        </li>
      </ul>

      <h3>{isKo ? 'IFRS 도입의 영향과 실무적 시사점' : 'Impact and Practical Implications of IFRS Adoption'}</h3>
      <p>
        {isKo
          ? 'K-IFRS의 도입은 한국 기업의 재무보고에 근본적인 변화를 가져왔습니다. 연결 중심의 보고 체계로 전환되면서 자회사를 포함한 그룹 전체의 재무 상황을 더 투명하게 보여줄 수 있게 되었습니다. 공정가치 측정의 확대로 재무제표가 시장 상황을 더 잘 반영하게 되었지만, 동시에 이익의 변동성이 커지는 결과도 초래했습니다. 또한 원칙 중심의 기준 적용으로 회계 전문가의 전문적 판단이 더욱 중요해졌으며, 이는 감사인과의 소통과 내부 통제 시스템의 강화를 요구합니다.'
          : 'The adoption of K-IFRS brought fundamental changes to Korean corporate financial reporting. The shift to a consolidation-focused reporting system enabled more transparent disclosure of the financial situation of the entire group including subsidiaries. While expanded fair value measurement made financial statements better reflect market conditions, it also resulted in greater earnings volatility. Furthermore, the principles-based approach increased the importance of professional judgment by accounting experts, requiring enhanced communication with auditors and strengthened internal control systems.'}
      </p>

      <TipBox type="danger" title={isKo ? 'IFRS 학습 시 주의사항' : 'Cautions When Studying IFRS'}>
        <p>
          {isKo
            ? 'IFRS는 지속적으로 개정되므로, 반드시 최신 기준서를 확인해야 합니다. 특히 IFRS 17(보험계약, 2023년 시행), IFRS 9(금융상품)과 같은 최근 개정된 기준서는 기존 회계처리와 크게 달라진 부분이 있으므로 주의가 필요합니다. 또한 K-IFRS는 IFRS를 거의 그대로 번역하여 채택하지만, 일부 경과조치나 적용 시기에서 차이가 있을 수 있으므로, 한국 고유의 적용 지침도 함께 확인하세요.'
            : 'IFRS is continuously revised, so always verify the latest standards. Be particularly careful with recently revised standards like IFRS 17 (Insurance Contracts, effective 2023) and IFRS 9 (Financial Instruments), which differ significantly from previous accounting treatments. Also, while K-IFRS adopts IFRS almost verbatim in translation, there may be differences in some transitional measures and application timing, so check Korea-specific application guidelines as well.'}
        </p>
      </TipBox>
    </section>
  );
}

/* ── Main Component ─────────────────────────────────────── */

export default function Basics(): ReactElement {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id);
  const isKo = language === 'ko';
  const currentIndex = SECTIONS.findIndex((s) => s.id === activeSection);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveSection(SECTIONS[currentIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentIndex < SECTIONS.length - 1) {
      setActiveSection(SECTIONS[currentIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <SEOHead
        title={isKo ? '회계 기초 완벽 가이드' : 'Complete Guide to Accounting Basics'}
        description={
          isKo
            ? '회계의 기초를 체계적으로 학습합니다. 회계의 개념과 목적, 회계 원칙과 기준, 회계 등식과 거래, 회계 순환과정, 계정과목 체계, IFRS와 K-GAAP까지 모든 기초 내용을 다룹니다.'
            : 'Learn accounting basics systematically. Covers accounting concepts and purpose, principles and standards, the accounting equation and transactions, the accounting cycle, chart of accounts, and IFRS & K-GAAP.'
        }
        path="/basics"
      />

      <div className="guide-page">
        <div className="guide-layout">
          {/* Sidebar */}
          <aside className="guide-sidebar">
            <div className="guide-sidebar-title">
              {isKo ? '목차' : 'Contents'}
            </div>
            <ul className="guide-nav">
              {SECTIONS.map((section) => (
                <li key={section.id} className="guide-nav-item">
                  <button
                    className={`guide-nav-link ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => handleNavClick(section.id)}
                  >
                    <i className={`fa-solid ${section.icon}`} />
                    <span>{isKo ? section.ko : section.en}</span>
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <main className="guide-content">
            <div className="guide-content-header">
              <h1>{isKo ? '회계 기초 완벽 가이드' : 'Complete Guide to Accounting Basics'}</h1>
              <p>
                {isKo
                  ? '회계는 사업의 언어입니다. 회계의 기본 개념과 목적부터 회계 원칙, 회계 등식, 순환과정, 계정과목 체계, 그리고 국제회계기준(IFRS)까지 회계의 핵심 기초를 체계적으로 학습합니다. 비전공자도 쉽게 이해할 수 있도록 핵심 개념을 명확하게 설명합니다.'
                  : 'Accounting is the language of business. Learn the core fundamentals of accounting systematically — from basic concepts and purpose, principles, the accounting equation, the accounting cycle, chart of accounts, to International Financial Reporting Standards (IFRS). Core concepts are clearly explained so even non-majors can easily understand.'}
              </p>
              <img src="/assets/images/topics/basics-hero.svg" alt={isKo ? '회계 기초 일러스트' : 'Accounting Basics Illustration'} className="guide-hero-illustration" />
            </div>

            {/* ────────── Section Rendering ────────── */}
            {activeSection === 'concept' && <ConceptSection isKo={isKo} />}
            {activeSection === 'principles' && <PrinciplesSection isKo={isKo} />}
            {activeSection === 'equation' && <EquationSection isKo={isKo} />}
            {activeSection === 'cycle' && <CycleSection isKo={isKo} />}
            {activeSection === 'accounts' && <AccountsSection isKo={isKo} />}
            {activeSection === 'ifrs' && <IfrsSection isKo={isKo} />}

            {/* Section Navigation */}
            <div className="guide-section-nav">
              <button className="guide-nav-btn prev" onClick={handlePrev} disabled={currentIndex === 0}>
                <i className="fa-solid fa-arrow-left" />
                <span>
                  {currentIndex > 0
                    ? (isKo ? SECTIONS[currentIndex - 1].ko : SECTIONS[currentIndex - 1].en)
                    : (isKo ? '이전' : 'Previous')}
                </span>
              </button>
              <button className="guide-nav-btn next" onClick={handleNext} disabled={currentIndex === SECTIONS.length - 1}>
                <span>
                  {currentIndex < SECTIONS.length - 1
                    ? (isKo ? SECTIONS[currentIndex + 1].ko : SECTIONS[currentIndex + 1].en)
                    : (isKo ? '다음' : 'Next')}
                </span>
                <i className="fa-solid fa-arrow-right" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
