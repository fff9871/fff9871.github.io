const content = {
  zh: {
    eyebrow: "Bilingual Personal Homepage",
    name: "付东淏",
    headline: "北京航空航天大学软件学院本科生｜科研与智能系统实践者",
    summary:
      "聚焦智能体安全、LLM 应用系统与多模态智能感知，兼具科研探索与工程落地经验。持续围绕高质量研究、实战项目和竞赛挑战推进从问题定义、系统设计到实验验证的完整闭环。",
    ctaContact: "联系我",
    ctaResearch: "查看科研成果",
    educationEyebrow: "Education",
    educationTitle: "教育背景",
    school: "北京航空航天大学",
    college: "软件学院｜本科在读",
    educationPeriod: "2022.09 - 2027.07",
    courseworkTitle: "主修课程",
    honorsEyebrow: "Recognition",
    honorsTitle: "荣誉与竞赛获奖",
    honorsListTitle: "在校荣誉",
    awardsTitle: "竞赛获奖",
    researchEyebrow: "Research",
    researchTitle: "论文与专利",
    projectsEyebrow: "Projects",
    projectsTitle: "代表性竞赛项目",
    contactEyebrow: "Contact",
    contactTitle: "联系方式",
    contactCopy:
      "欢迎围绕科研合作、竞赛项目、智能体系统、RAG 应用、目标检测或软件工程实践与我交流。本站基于个人简历整理，支持中英双语浏览。",
    heroChips: [
      "GPA 92.54 / 100",
      "专业排名 7/158（前 5%）",
      "国家奖学金 × 2",
      "挑战杯特等奖擂主"
    ],
    heroFacts: [
      {
        title: "研究方向",
        text: "Agent 安全、供应链风险、LLM 系统、频域建模与多模态智能感知"
      },
      {
        title: "实践关键词",
        text: "React、RAG、Dify、RAGFlow、YOLO、Qwen-VL、DeepSeek、昇腾"
      }
    ],
    educationStats: [
      { label: "GPA", value: "92.54 / 100" },
      { label: "Rank", value: "7 / 158" },
      { label: "Percentile", value: "Top 5%" }
    ],
    coursework:
      "线性代数（100）、算法分析与设计（100）、数据管理技术（99）、计算机网络与应用（99）、软件系统分析与设计（95）、工科数学分析（98）、计算机硬件基础（96）、面向对象程序设计（95）、软件工程基础实践（98）",
    honors: [
      "连续两年国家奖学金",
      "比亚迪奖学金",
      "校级三好学生",
      "校级优秀学生干部",
      "学习优秀特等奖学金",
      "社会工作二等奖学金",
      "北航学院优秀生"
    ],
    awards: [
      "大学生挑战杯揭榜挂帅擂台赛特等奖擂主",
      "揭榜挂帅擂台赛一等奖",
      "中国软件杯全国二等奖",
      "连续两届北京市大学生数学竞赛一等奖",
      "首都挑战杯特等奖擂主",
      "北京市互联网+产业赛道三等奖",
      "北航冯如杯主赛道三等奖"
    ],
    research: [
      {
        title: "Where Is the Cost of Third-Party API Routers in Agentic Software Development?",
        meta: "ICSE 2027（CCF A）一作在投",
        bullets: [
          "针对第三方 API 路由器在编码 Agent 场景中的供应链安全风险开展系统性实证研究，覆盖 Claude Code、Codex、Cursor、OpenCode 四类主流编码 Agent。",
          "提出 L1-L4 四级路由器侧注入攻击分类体系，并设计零侵入实验框架 SIDEL，支持 Trace 记录、重放、恶意注入与防御评估。",
          "构建包含 400 个高质量注入样本的数据集，从 Agent 类型、权限模式、后端模型和防御机制四个维度完成量化评估。"
        ]
      },
      {
        title: "一种基于频域专家混合的流体分析数据处理方法",
        meta: "发明专利｜实质审查中",
        bullets: [
          "面向传统 FNO 在流体力学 PDE 求解中的高频信息丢失问题，提出频域混合专家架构以提升高频细节捕获与长时预测稳定性。",
          "设计门控网络驱动的 Top-K 稀疏专家激活机制，并采用 Sparse Upcycling 技术构建渐进式协同学习范式。",
          "主导低秩权重继承策略设计，实现低频预训练与高频微调的参数高效协同。"
        ]
      }
    ],
    projects: [
      {
        title: "StarOps：基于多源数据融合与双 LLM 协同的智能运维架构",
        meta: "大学生挑战杯揭榜挂帅擂台赛特等奖擂主",
        bullets: [
          "构建覆盖指标、日志、调用链的全生命周期智能运维体系，实现异常检测、根因分析、故障自愈与风险预防闭环。",
          "提出 Fusion_LLM 双模型协同决策架构，并设计“脚本生成-沙箱验证-生产执行-反馈闭环”的高安全自愈流程。",
          "负责 React 智能体架构、工具调用编排、记忆模块和会话状态管理，完成 Percona、Lighthouse、Trivy 等工具集成。"
        ]
      },
      {
        title: "SkillForge+：LLM+RAG 赋能的学练考评一体化培训平台",
        meta: "中国软件杯全国二等奖",
        bullets: [
          "围绕企业培训场景搭建多模态教材解析、动态题库生成与个性化学习推荐一体化平台。",
          "构建 BM25 + 向量混合检索知识库，设计链式提示词双阶段 RAG 自动出题框架与个性化推荐机制。",
          "完成 Dify、RAGFlow 的私有化部署，并通过多组对照实验实现方案综合性能提升 40% 以上。"
        ]
      },
      {
        title: "长鹰异眸：昇腾国产算力无人机载荷实时智能感知系统",
        meta: "大学生挑战杯揭榜挂帅擂台赛一等奖",
        bullets: [
          "构建基于昇腾国产算力的端边协同两级智能感知系统，实现从实时目标检测到高层语义研判的全链路部署。",
          "设计 Global-Local 多模态推理范式，串联目标检测、多模态识别与高层推理三级研判链路。",
          "融合 Qwen-VL 与 DeepSeek，完成复杂场景下的目标行为意图研判，并探索 data-centric 数据增质路径。"
        ]
      },
      {
        title: "丝饼智检：基于改进 YOLO 的工业丝饼缺陷实时检测系统",
        meta: "首都挑战杯特等奖擂主",
        bullets: [
          "面向工业丝饼质检场景构建端到端实时检测系统，解决样本稀缺、类别不均衡与小目标识别难题。",
          "设计 Copy-Paste 数据增强策略，并在 YOLOv5 上引入 SE 通道注意力与 BiFPN 多尺度特征融合。",
          "设计 Focal Loss + NWD Loss 双损失优化方案，系统性提升弱纹理、小尺寸缺陷场景下的检测精度与鲁棒性。"
        ]
      }
    ],
    contacts: [
      { label: "邮箱", value: "fudonghao@buaa.edu.cn", href: "mailto:fudonghao@buaa.edu.cn" },
      { label: "学校", value: "北京航空航天大学软件学院" },
      { label: "语言", value: "中文 / English" }
    ]
  },
  en: {
    eyebrow: "Bilingual Personal Homepage",
    name: "Donghao Fu",
    headline: "Undergraduate at Beihang University School of Software | Researcher and Intelligent Systems Builder",
    summary:
      "Interested in agent security, LLM application systems, and multimodal intelligent perception, with experience spanning academic research and end-to-end engineering delivery. I enjoy turning open problems into reproducible studies, deployable systems, and competition-grade prototypes.",
    ctaContact: "Get in touch",
    ctaResearch: "View research",
    educationEyebrow: "Education",
    educationTitle: "Academic Background",
    school: "Beihang University",
    college: "School of Software | B.Eng. Candidate",
    educationPeriod: "Sep 2022 - Jul 2027",
    courseworkTitle: "Selected Coursework",
    honorsEyebrow: "Recognition",
    honorsTitle: "Honors and Awards",
    honorsListTitle: "University Honors",
    awardsTitle: "Competition Awards",
    researchEyebrow: "Research",
    researchTitle: "Papers and Patent",
    projectsEyebrow: "Projects",
    projectsTitle: "Selected Competition Projects",
    contactEyebrow: "Contact",
    contactTitle: "Contact Information",
    contactCopy:
      "Feel free to reach out for research collaboration, competition teams, agent systems, RAG applications, computer vision, or software engineering discussions. This website is adapted from my resume and supports both Chinese and English.",
    heroChips: [
      "GPA 92.54 / 100",
      "Ranked 7 / 158",
      "Top 5% in major",
      "Two-time National Scholarship recipient"
    ],
    heroFacts: [
      {
        title: "Research Themes",
        text: "Agent security, supply-chain risk, LLM systems, frequency-domain modeling, multimodal perception"
      },
      {
        title: "Hands-on Stack",
        text: "React, RAG, Dify, RAGFlow, YOLO, Qwen-VL, DeepSeek, Ascend"
      }
    ],
    educationStats: [
      { label: "GPA", value: "92.54 / 100" },
      { label: "Rank", value: "7 / 158" },
      { label: "Percentile", value: "Top 5%" }
    ],
    coursework:
      "Linear Algebra (100), Algorithm Analysis and Design (100), Data Management Technologies (99), Computer Networks and Applications (99), Software Systems Analysis and Design (95), Engineering Mathematical Analysis (98), Computer Hardware Fundamentals (96), Object-Oriented Programming (95), Foundational Software Engineering Practice (98)",
    honors: [
      "National Scholarship recipient for two consecutive years",
      "BYD Scholarship",
      "Outstanding Student",
      "Outstanding Student Leader",
      "Special Scholarship for Academic Excellence",
      "Second Prize Scholarship for Student Service",
      "Outstanding Student of Beihang College"
    ],
    awards: [
      "Grand Champion, Challenge Cup Ranking Challenge",
      "First Prize, Challenge Cup Ranking Challenge",
      "Second Prize, China Software Cup",
      "First Prize, Beijing Collegiate Mathematics Competition (two consecutive years)",
      "Grand Champion, Capital Challenge Cup",
      "Third Prize, Beijing Internet Plus Industry Track",
      "Third Prize, Feng Ru Cup Main Track"
    ],
    research: [
      {
        title: "Where Is the Cost of Third-Party API Routers in Agentic Software Development?",
        meta: "First-author submission to ICSE 2027 (CCF-A)",
        bullets: [
          "Conducted a systematic empirical study of supply-chain security risks introduced by third-party API routers in coding-agent workflows, covering Claude Code, Codex, Cursor, and OpenCode.",
          "Proposed an L1-L4 taxonomy of router-side injection attacks and built SIDEL, a non-intrusive framework for trace capture, replay, malicious injection, and defense evaluation.",
          "Constructed a 400-sample benchmark spanning 34 attack subtypes and evaluated the impact across agent category, permission mode, backend model, and defense strategy."
        ]
      },
      {
        title: "Fluid Analysis Data Processing Method Based on Mixture-of-Experts in the Frequency Domain",
        meta: "Invention patent under substantive examination",
        bullets: [
          "Addressed high-frequency information loss in conventional Fourier Neural Operators for PDE solving in fluid dynamics.",
          "Designed a frequency-domain mixture-of-experts architecture with Top-K sparse activation and Sparse Upcycling for progressive collaborative learning.",
          "Led the low-rank weight inheritance strategy that enables parameter-efficient transfer from low-frequency pretraining to high-frequency specialization."
        ]
      }
    ],
    projects: [
      {
        title: "StarOps: Intelligent Operations Architecture with Multi-Source Data Fusion and Dual-LLM Collaboration",
        meta: "Grand Champion, Challenge Cup Ranking Challenge",
        bullets: [
          "Built a full-lifecycle AIOps system spanning metrics, logs, and call traces to support anomaly detection, root-cause analysis, self-healing, and risk prevention.",
          "Proposed a Fusion_LLM dual-model decision architecture and a secure self-healing loop from script generation to sandbox validation and production execution.",
          "Implemented the React-based agent framework, tool orchestration, memory modules, and session management, and integrated Percona, Lighthouse, and Trivy."
        ]
      },
      {
        title: "SkillForge+: An LLM + RAG Platform for Training, Practice, Examination, and Assessment",
        meta: "Second Prize, China Software Cup",
        bullets: [
          "Created an enterprise training platform supporting multimodal material parsing, dynamic question generation, and personalized learning recommendation.",
          "Built a hybrid BM25 plus vector-retrieval knowledge base and a two-stage RAG question-generation workflow with chained prompting.",
          "Deployed Dify and RAGFlow privately and achieved more than 40% overall performance improvement through controlled experiments."
        ]
      },
      {
        title: "Changying Yimou: Real-Time Intelligent Perception System for UAV Payloads on Domestic Ascend Computing",
        meta: "First Prize, Challenge Cup Ranking Challenge",
        bullets: [
          "Developed an edge-cloud collaborative perception system on domestic Ascend hardware for real-time detection and higher-level semantic reasoning.",
          "Designed a Global-Local multimodal reasoning paradigm that combines detection, recognition, and advanced inference in a three-stage decision pipeline.",
          "Integrated Qwen-VL and DeepSeek for intent understanding in complex scenarios and explored data-centric improvement using synthetic extreme-scene datasets."
        ]
      },
      {
        title: "SilkCake Vision Inspection: Real-Time Industrial Defect Detection with an Improved YOLO Pipeline",
        meta: "Grand Champion, Capital Challenge Cup",
        bullets: [
          "Built an end-to-end industrial inspection system for scenarios with scarce samples, imbalanced classes, and small, weak-texture defects.",
          "Introduced Copy-Paste augmentation, SE channel attention, and BiFPN multi-scale fusion on top of YOLOv5.",
          "Designed a Focal Loss plus NWD Loss optimization scheme to improve accuracy and robustness under challenging fine-grained defect settings."
        ]
      }
    ],
    contacts: [
      { label: "Email", value: "fudonghao@buaa.edu.cn", href: "mailto:fudonghao@buaa.edu.cn" },
      { label: "School", value: "School of Software, Beihang University" },
      { label: "Languages", value: "Chinese / English" }
    ]
  }
};

const state = {
  lang: "zh"
};

const bindI18n = (lang) => {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  const dictionary = content[lang];

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = dictionary[key];
  });

  renderHero(dictionary);
  renderEducation(dictionary);
  renderList("honors-list", dictionary.honors);
  renderList("awards-list", dictionary.awards);
  renderTimeline("research-cards", dictionary.research);
  renderTimeline("project-cards", dictionary.projects);
  renderContacts(dictionary.contacts);
};

const renderHero = (dictionary) => {
  renderSimpleList("hero-chips", dictionary.heroChips);

  const container = document.getElementById("hero-facts");
  container.innerHTML = dictionary.heroFacts
    .map(
      (fact, index) => `
        <article class="reveal" style="animation-delay:${index * 90}ms">
          <h3>${fact.title}</h3>
          <p>${fact.text}</p>
        </article>
      `
    )
    .join("");
};

const renderEducation = (dictionary) => {
  const stats = document.getElementById("education-stats");
  stats.innerHTML = dictionary.educationStats
    .map(
      (item, index) => `
        <article class="stat-card reveal" style="animation-delay:${index * 80}ms">
          <p class="stat-card__label">${item.label}</p>
          <p class="stat-card__value">${item.value}</p>
        </article>
      `
    )
    .join("");

  document.getElementById("coursework-text").textContent = dictionary.coursework;
};

const renderSimpleList = (id, items) => {
  const target = document.getElementById(id);
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
};

const renderList = (id, items) => {
  const target = document.getElementById(id);
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
};

const renderTimeline = (id, items) => {
  const target = document.getElementById(id);
  target.innerHTML = items
    .map(
      (item, index) => `
        <article class="timeline-card reveal" style="animation-delay:${index * 110}ms">
          <p class="timeline-card__meta">${item.meta}</p>
          <h3>${item.title}</h3>
          <ul class="timeline-card__bullets">
            ${item.bullets.map((bullet) => `<li>${bullet}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
};

const renderContacts = (items) => {
  const target = document.getElementById("contact-list");
  target.innerHTML = items
    .map((item) => {
      const contentValue = item.href
        ? `<a href="${item.href}">${item.value}</a>`
        : item.value;
      return `<li><strong>${item.label}:</strong> ${contentValue}</li>`;
    })
    .join("");
};

document.querySelectorAll(".lang-switch__button").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.lang === state.lang) {
      return;
    }

    state.lang = button.dataset.lang;
    document.querySelectorAll(".lang-switch__button").forEach((node) => {
      node.classList.toggle("is-active", node === button);
    });
    bindI18n(state.lang);
  });
});

bindI18n(state.lang);
