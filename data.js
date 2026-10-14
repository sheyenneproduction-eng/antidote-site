/* Produits et vidéos repris de Podia et du flux YouTube (maquette du 11 septembre 2026).
   Le champ p d’une vidéo = le produit affiché dessous, décidé par Sheyenne le 11 octobre 2026. */
var PODIA="https://www.antidote-thechannel.com/";
var YT_SUB="https://www.youtube.com/channel/UCQUnqaW8Q33siyLYhisN7HQ?sub_confirmation=1";
var VIDEOS=[
 {
  "id": "nrUQcGpEpWI",
  "t": "Never Split the Difference",
  "full": "How to Get Whatever You Want From Someone (Never Split the Difference)",
  "d": "2026-10-13",
  "a": "Chris Voss",
  "p": "never-split-the-difference"
 },
 {
  "id": "VGU6ytrVN5c",
  "t": "The Art of War",
  "full": "The Art of War by Sun Tzu | Complete Animated Book Summary",
  "d": "2026-08-17",
  "a": "Sun Tzu",
  "p": "the-art-of-war"
 },
 {
  "id": "Eua9Nrc7auY",
  "t": "Secrets of the Millionaire Mind",
  "full": "Secrets of the Millionaire Mind | Animated Book Summary",
  "d": "2026-06-15",
  "a": "T. Harv Eker",
  "p": "secrets-of-the-millionaire-mind"
 },
 {
  "id": "dw8XTxfNkNA",
  "t": "The 7 Habits of Highly Effective People",
  "full": "The 7 Habits That Will Change Your Life | Animated Book Summary",
  "d": "2026-05-11",
  "a": "Stephen R. Covey",
  "p": "the-7-habits"
 },
 {
  "id": "SaWJMC3PsmA",
  "t": "The Intelligent Investor",
  "full": "The Intelligent Investor in 31 Minutes | Animated Book Summary",
  "d": "2026-04-06",
  "a": "Benjamin Graham",
  "p": "money-mastery-system"
 },
 {
  "id": "gRemGWzxj2Y",
  "t": "The Compound Effect",
  "full": "The Daily Choices That Will Shape Your Next 5 Years | The Compound Effect",
  "d": "2026-02-23",
  "a": "Darren Hardy",
  "p": ""
 },
 {
  "id": "PmvhH6R-H44",
  "t": "Atomic Habits",
  "full": "Atomic Habits in 30 Minutes | Animated Book Summary",
  "d": "2026-01-30",
  "a": "James Clear",
  "p": "the-goals-os"
 },
 {
  "id": "fL6Y1hXxz1c",
  "t": "The Mountain Is You",
  "full": "How to RESTART YOUR LIFE | The Mountain Is You (Animated Book Summary)",
  "d": "2025-12-10",
  "a": "Brianna Wiest",
  "p": "the-mountain-is-you"
 },
 {
  "id": "TstkLVLXuGA",
  "t": "The Art of Seduction",
  "full": "The Art of Seduction by Robert Greene | Animated Book Summary",
  "d": "2025-11-09",
  "a": "Robert Greene",
  "p": "the-art-of-seduction"
 },
 {
  "id": "sn_cnhuGUKU",
  "t": "Thinking, Fast and Slow",
  "full": "Thinking, Fast and Slow by Daniel Kahneman | Animated Book Summary",
  "d": "2025-09-25",
  "a": "Daniel Kahneman",
  "p": "thinking-fast-and-slow"
 },
 {
  "id": "NPKnyFI5Wg4",
  "t": "Think and Grow Rich",
  "full": "Think and Grow Rich Explained in 29 Minutes",
  "d": "2025-08-29",
  "a": "Napoleon Hill",
  "p": "think-and-grow-rich"
 },
 {
  "id": "tKMYvCMFIJw",
  "t": "The Prince",
  "full": "The Prince in 37 Minutes | Machiavelli",
  "d": "2025-07-31",
  "a": "Niccolò Machiavelli",
  "p": "the-prince"
 },
 {
  "id": "jPPzvuDIr1w",
  "t": "The Psychology of Money",
  "full": "The Psychology of Money in 33 minutes | Animated Book Summary",
  "d": "2025-07-02",
  "a": "Morgan Housel",
  "p": "money-mastery-system"
 },
 {
  "id": "rvgS9jTGbp4",
  "t": "How to Win Friends and Influence People",
  "full": "How to Win Friends and INFLUENCE People (Animated Book Summary)",
  "d": "2025-05-05",
  "a": "Dale Carnegie",
  "p": "how-to-win-friends"
 },
 {
  "id": "E7w3Zn8h8AY",
  "t": "The Laws of Human Nature",
  "full": "The Laws of Human Nature in 50 Minutes | Animated Book Summary",
  "d": "2025-04-18",
  "a": "Robert Greene",
  "p": "the-laws-of-human-nature"
 },
 {
  "id": "3Ai3WkzeZEc",
  "t": "The 48 Laws of Power",
  "full": "The 48 Laws of Power by Robert Greene | Animated Book Summary",
  "d": "2025-03-21",
  "a": "Robert Greene",
  "p": "the-48-laws-of-power"
 },
 {
  "id": "X1meRsHIRmg",
  "t": "The 33 Strategies of War, Part 2",
  "full": "The 33 Strategies of War by Robert Greene | Animated Book Summary (Part 2)",
  "a": "Robert Greene",
  "p": "the-33-strategies-of-war"
 },
 {
  "id": "Il7EEz2o2Wg",
  "t": "The 33 Strategies of War",
  "full": "The 33 Strategies of War by Robert Greene | Animated Book Summary",
  "a": "Robert Greene",
  "p": "the-33-strategies-of-war"
 },
 {
  "id": "RX9lAjAdxSo",
  "t": "Mastery",
  "full": "MASTERY by Robert Greene (Animated Book Summary)",
  "a": "Robert Greene",
  "p": "mastery"
 },
 {
  "id": "nUgHSxOAlWw",
  "t": "The Art of Seduction, Detailed",
  "full": "The Art of Seduction by Robert Greene | Detailed Animated Book Summary",
  "a": "Robert Greene",
  "p": "the-art-of-seduction"
 },
 {
  "id": "hZTt9OdKy3o",
  "t": "The Subtle Art of Not Giving a F*ck",
  "full": "The Subtle Art of Not Giving a F*ck in 31 minutes | Animated Book Summary",
  "a": "Mark Manson",
  "p": "the-subtle-art"
 }
];
var P=[
 {
  "s": "the-goals-os",
  "c": "systems",
  "k": "Notion system",
  "t": "Achieve Anything: The Goals OS",
  "by": "Version 1.0",
  "pr": 29.99,
  "u": "the-goals-os",
  "h": "An identity-based operating system for your life, built in Notion.",
  "d": "An identity-based operating system for your life, built in Notion. It helps clarify who you want to become, define meaningful goals, break them into projects and tasks, build the right skills and habits, and continuously adjust through feedback.",
  "lt": "Features",
  "l": [
   "Identity Board",
   "Life Areas Overview",
   "Goal System (long / mid / short-term)",
   "Projects & Tasks Engine",
   "Skills & Side Quests",
   "Healthy Habits Tracker",
   "Weekly Review & Feedback Loop",
   "Gamified Progress (XP, levels, no streak guilt)",
   "System Map (see how everything connects)",
   "Execution Panel (know exactly what to work on today)"
  ],
  "inc": [
   "Lifetime access",
   "Free updates included",
   "Step-by-step PDF guides"
  ],
  "sn": "The Goals OS"
 },
 {
  "s": "money-mastery-system",
  "c": "systems",
  "k": "Notion system",
  "t": "Money Mastery System",
  "by": "Version 2.0",
  "pr": 29.99,
  "u": "money-mastery-system",
  "h": "See your full financial picture, track progress, and make decisions like the wealthy, every single day.",
  "d": "Built to help you manage money like the wealthy do. See your full financial picture, track progress, and make decisions like the wealthy, every single day.",
  "lt": "Features",
  "l": [
   "Accounts Manager",
   "Finance Tracker",
   "Budget Setup",
   "Wealth Tracker",
   "Financial Goals",
   "Bills & Subscriptions",
   "Finance Graphs",
   "Reflection Prompts",
   "Weekly & Monthly Habits"
  ],
  "cur": [
   "USD",
   "EUR",
   "GBP",
   "CAD",
   "NZD",
   "INR",
   "PHP",
   "NGN",
   "THB",
   "SAR",
   "PLN",
   "TRY",
   "MXN",
   "ZAR",
   "AUD"
  ],
  "inc": [
   "Lifetime access",
   "Free updates included",
   "Step-by-step video tutorial + PDF guide"
  ],
  "sn": "Money Mastery"
 },
 {
  "s": "12-week-year",
  "c": "systems",
  "k": "Notion system",
  "t": "Achieve More in 12 Weeks Than Most Do in a Year",
  "by": "Built on The 12-Week Year",
  "pr": 19.99,
  "u": "12-weeks-year-planner",
  "h": "Plan, execute, and track your goals using the principles of The 12-Week Year.",
  "d": "A Notion-based system designed to help you plan, execute, and track goals using principles from The 12-Week Year. It includes goal-setting frameworks, weekly planning tools, progress tracking, and guided reflection.",
  "lt": "Features",
  "l": [
   "Pre-built structure, no setup from scratch",
   "Automated progress tracking across connected goals, tactics, and tasks",
   "Step-by-step guidance with reflection prompts",
   "Mindset clarity section for motivation realignment",
   "Vision assessment across life areas",
   "SMART goal-setting system with challenge anticipation",
   "Integrated tactics and tasks with automatic progress updates",
   "Weekly planning with automated scorecard",
   "13th week for reflection and after-action review",
   "Blank template for future 12-week cycles",
   "Bonus: visual mind map of the 12-Week Year framework"
  ],
  "inc": [
   "Lifetime access",
   "Free updates",
   "Step-by-step PDF guide"
  ],
  "sn": "The 12-Week Year"
 },
 {
  "s": "habits-dashboard",
  "c": "systems",
  "k": "Notion system",
  "t": "Habits Dashboard",
  "by": "Start here",
  "pr": 0,
  "u": "habit-dashboard",
  "h": "Track your routines, visualize your progress, and stay accountable. All from a single Notion dashboard.",
  "d": "Built to help you build better habits. Track your routines, visualize your progress, and stay accountable. All from a single Notion dashboard.",
  "lt": "What’s included",
  "l": [
   [
    "Journal",
    "Daily & weekly templates drop straight into a monthly calendar, so logging mood, energy and reflections takes seconds."
   ],
   [
    "Progress Graph",
    "An auto-updating line chart that shows your year-to-date habit consistency at a glance."
   ],
   [
    "Habit Tracker",
    "Today’s checklist is generated every midnight; tick items off and watch the completion % update in real time."
   ],
   [
    "Streak Counter",
    "See your current and longest run for every habit."
   ],
   [
    "Supplement Schedule",
    "Track each course from Upcoming to Ongoing to Done automatically, with built-in pages for dosage & notes."
   ],
   [
    "30-Day Habit Challenge",
    "A lightweight board for testing one new routine at a time."
   ]
  ],
  "inc": [
   "Step-by-step PDF tutorial"
  ],
  "sn": "Habits Dashboard"
 },
 {
  "s": "never-split-the-difference",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "Never Split the Difference",
  "by": "Chris Voss",
  "pr": 0,
  "u": "blueprint-never-split-the-difference-by-chris-voss",
  "h": "Ready to stop arguing your way through negotiations, get people to open up, and reach better agreements without giving up your limits?",
  "d": "Ready to stop arguing your way through negotiations, get people to open up, and reach better agreements without giving up your limits? This blueprint breaks down the key techniques from Chris Voss’s Never Split the Difference into a simple, structured guide. Instead of treating the book as a manual for hostage crises, you’ll discover how its lessons apply to the negotiations you face every day: deadlines with coworkers, salary and price discussions, clients, and conversations with your partner or your kids.",
  "lt": "Inside, you’ll",
  "l": [
   "Spot the 16 mistakes that undermine your negotiations, across 5 acts",
   "Learn the FBI techniques that replace them: mirroring, labeling, calibrated questions, and no-oriented questions",
   "Know exactly what to say, with “instead of / say this” examples for each situation",
   "Handle numbers with confidence: deadlines, anchoring, fairness, and the Ackerman model"
  ]
 },
 {
  "s": "the-art-of-war",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "The Art of War",
  "by": "Sun Tzu",
  "pr": 0,
  "u": "blueprint-the-art-of-war-by-sun-tzu",
  "h": "Think more strategically, handle conflict with clarity, and make better decisions under pressure.",
  "d": "Think more strategically, handle conflict with clarity, and make better decisions under pressure. Sun Tzu’s classic, reframed for strategic thinking, leadership, negotiation, conflict management, business, relationships, and everyday decisions.",
  "lt": "What’s included",
  "l": [
   "Understand the key concepts from all 13 chapters",
   "Learn how to prepare, position yourself, and shape conditions in your favor",
   "Recognize when to act, wait, adapt, negotiate, or walk away",
   "Apply Sun Tzu’s strategies through practical examples, decision tools, and warning signs"
  ]
 },
 {
  "s": "secrets-of-the-millionaire-mind",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "Secrets of the Millionaire Mind",
  "by": "T. Harv Eker",
  "pr": 0,
  "u": "blueprint-secrets-of-the-millionaire-mind-by-t-harv-eker",
  "h": "Understand the hidden beliefs that shape your financial behavior.",
  "d": "Ready to understand the money patterns holding you back, and start building wealth with more intention? This blueprint breaks down the key principles from Secrets of the Millionaire Mind into a simple, structured guide you can understand at a glance.",
  "lt": "What you’ll gain",
  "l": [
   "Understand the hidden beliefs that shape your financial behavior",
   "Discover the 17 wealth principles from the book",
   "See the difference between a limited money mindset and a wealth-building mindset",
   "Identify which part of your money blueprint needs the most attention"
  ]
 },
 {
  "s": "the-7-habits",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "The 7 Habits of Highly Effective People",
  "by": "Stephen R. Covey",
  "pr": 0,
  "u": "blueprint-the-7-habits-of-highly-effective-people",
  "h": "Take responsibility for your actions and decisions.",
  "d": "Ready to stop reacting and start taking control of your life? This actionable blueprint breaks down the key principles from The 7 Habits of Highly Effective People into simple, structured steps you can apply immediately.",
  "lt": "What you’ll gain",
  "l": [
   "Take responsibility for your actions and decisions",
   "Gain clarity on what truly matters",
   "Build strong, trust-based relationships",
   "Improve your focus and productivity",
   "Create sustainable habits for long-term growth"
  ]
 },
 {
  "s": "the-mountain-is-you",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "The Mountain Is You",
  "by": "Brianna Wiest",
  "pr": 0,
  "u": "blueprint-the-mountain-is-you-by-brianna-wiest",
  "h": "Understand why you self-sabotage and turn those patterns into emotional strength.",
  "d": "Ready to break the patterns that keep holding you back? This blueprint turns Brianna Wiest’s The Mountain Is You into a clear, practical guide that helps you understand why you self-sabotage and how to transform those patterns into emotional strength and aligned action.",
  "lt": "What’s included",
  "l": [
   "A simple breakdown of the emotional roots behind self-sabotage (fear, unmet needs, old identities, and protective patterns)",
   "Practical tools to decode your emotions, build self-trust, regulate your reactions, and choose actions aligned with your future self",
   "Guided exercises to rewrite limiting beliefs, track sabotage loops, and create the strong internal foundation the book teaches"
  ]
 },
 {
  "s": "thinking-fast-and-slow",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "Thinking, Fast and Slow",
  "by": "Daniel Kahneman",
  "pr": 0,
  "u": "blueprint-thinking-fast-and-slow-by-daniel-kahneman",
  "h": "A clear, organized guide to the 18 mental traps that distort judgment.",
  "d": "This blueprint distills Daniel Kahneman’s Thinking, Fast and Slow into a clear, organized guide to the 18 mental traps that distort judgment. Instead of getting lost in complexity, you get a structured overview that makes the book’s insights easy to grasp and revisit.",
  "lt": "What’s included",
  "l": [
   "A simple breakdown of each mental trap, with its definition and key experiment",
   "Real-world examples that show how these traps influence money, work, and daily life",
   "Practical insights on how to recognize and avoid these thinking errors"
  ]
 },
 {
  "s": "think-and-grow-rich",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "Think and Grow Rich",
  "by": "Napoleon Hill",
  "pr": 0,
  "u": "blueprint-how-to-think-and-grow-rich-by-napoleon-hill",
  "h": "Define exactly what you want, and turn it into a plan.",
  "d": "Ready to master the timeless formula for success and turn your goals into reality? This actionable blueprint takes the powerful lessons from Think and Grow Rich by Napoleon Hill and transforms them into clear, step-by-step guidance to help you build wealth, strengthen your mindset, and achieve lasting success.",
  "lt": "What you’ll gain",
  "l": [
   "Define exactly what you want",
   "Turn knowledge, imagination, and planning into practical results",
   "Build persistence and overcome the fears that hold you back"
  ]
 },
 {
  "s": "the-prince",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "The Prince",
  "by": "Niccolò Machiavelli",
  "pr": 0,
  "u": "blueprint-the-prince",
  "h": "See the world as it is, not as you wish it to be.",
  "d": "This actionable blueprint simplifies the timeless lessons from The Prince by Niccolò Machiavelli into clear, step-by-step guidance to help you gain, keep, and strengthen your influence.",
  "lt": "What you’ll gain",
  "l": [
   "See the world as it is (not as you wish it to be)",
   "Master the art of decisive, calculated action",
   "Build unshakable power that commands respect"
  ]
 },
 {
  "s": "the-48-laws-of-power",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "The 48 Laws of Power",
  "by": "Robert Greene",
  "pr": 9.99,
  "u": "blueprint-the-48-laws-of-power",
  "h": "Master the psychology of power, persuasion, and influence.",
  "d": "Want to master power, influence, and manipulation at the deepest level? This actionable blueprint distills The 48 Laws of Power into clear, practical steps, helping you apply them strategically in real life, ethically or ruthlessly, depending on your goals.",
  "lt": "What you’ll gain",
  "l": [
   "Master the psychology of power, persuasion, and influence",
   "Uncover the science of manipulation: the tactics used by history’s most cunning strategists",
   "Know when to play bold and when to stay subtle",
   "Avoid common power traps that led others to downfall",
   "Build influence while staying in control"
  ],
  "cats": [
   "Power Through Perception & Influence",
   "Psychological Warfare & Manipulation",
   "Control & Strategy",
   "Defense & Protection",
   "Aggression & Domination",
   "Adaptability & Evolution"
  ],
  "inside": "A step-by-step breakdown of each law, with real-life applications, reflective questions, and actionable exercises. Strategic mind maps sort the 48 laws into 6 power categories:"
 },
 {
  "s": "the-power-of-habit",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "The Power of Habit",
  "by": "Charles Duhigg",
  "pr": 0,
  "u": "blueprint-the-power-of-habit-by-charles-duhigg",
  "h": "Learn how habits work and why they shape your daily actions.",
  "d": "Ready to break free from bad habits and take control of your life? This actionable blueprint transforms the insights from The Power of Habit by Charles Duhigg into practical, step-by-step guidance to help you master your habits and create meaningful change.",
  "lt": "What you’ll gain",
  "l": [
   "Learn how habits work and why they shape your daily actions",
   "Identify triggers and rewards to reshape your routines",
   "Develop keystone habits that drive long-lasting transformation in every area of your life"
  ]
 },
 {
  "s": "the-33-strategies-of-war",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "The 33 Strategies of War",
  "by": "Robert Greene",
  "pr": 0,
  "u": "blueprint-war",
  "h": "Master timeless strategies to handle any challenge.",
  "d": "This actionable blueprint distills the powerful lessons from The 33 Strategies of War by Robert Greene into practical, step-by-step guidance to help you navigate obstacles and achieve your goals with confidence.",
  "lt": "What you’ll gain",
  "l": [
   "Master timeless strategies to handle any challenge",
   "Build discipline and focus to stay ahead",
   "Adopt a growth mindset to excel in any competitive situation"
  ],
  "cover": "Il7EEz2o2Wg"
 },
 {
  "s": "mastery",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "Mastery",
  "by": "Robert Greene",
  "pr": 0,
  "u": "blueprint-mastery-by-robert-greene",
  "h": "Embrace the proven path from dabbler to master.",
  "d": "Ready to unlock your highest potential and reach mastery in your field? This actionable blueprint distills the powerful principles from Mastery by Robert Greene into practical, step-by-step guidance designed to elevate your skills and accelerate your journey.",
  "lt": "What you’ll gain",
  "l": [
   "Embrace the proven path from dabbler to master",
   "Cultivate resilience and creativity through focused practice",
   "Harness your unique potential to make a lasting impact in your domain"
  ]
 },
 {
  "s": "the-art-of-seduction",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "The Art of Seduction",
  "by": "Robert Greene",
  "pr": 0,
  "u": "the-art-of-seduction",
  "h": "Learn how to captivate and charm with authenticity.",
  "d": "This actionable blueprint breaks down the timeless strategies from The Art of Seduction into clear, practical steps you can apply in everyday interactions.",
  "lt": "What you’ll gain",
  "l": [
   "Learn how to captivate and charm with authenticity",
   "Harness the psychology of desire",
   "Build lasting influence in both personal and professional relationships"
  ],
  "cover": "TstkLVLXuGA"
 },
 {
  "s": "the-subtle-art",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "The Subtle Art of Not Giving a F*ck",
  "by": "Mark Manson",
  "pr": 0,
  "u": "blueprint-the-subtle-art-of-not-giving-a-f-ck-by-mark-manson",
  "h": "Discover how to focus on what truly matters.",
  "d": "Ready to stop overthinking and start taking control of your life? This actionable blueprint breaks down the key principles from The Subtle Art of Not Giving a F*ck into simple, practical steps you can use every day.",
  "lt": "What you’ll gain",
  "l": [
   "Discover how to focus on what truly matters",
   "Embrace challenges",
   "Build a mindset for success"
  ]
 },
 {
  "s": "the-laws-of-human-nature",
  "c": "blueprints",
  "k": "Blueprint",
  "t": "The Laws of Human Nature",
  "by": "Robert Greene",
  "pr": 6.99,
  "u": "blueprint-the-laws-of-human-nature-by-robert-greene",
  "h": "Understand hidden motives, yours and others’.",
  "d": "Ready to master human behavior and take control of your personal growth? This actionable blueprint breaks down the essential laws from The Laws of Human Nature into clear, practical steps designed for real transformation.",
  "lt": "What you’ll gain",
  "l": [
   "Understand hidden motives (yours and others)",
   "Master emotional control for greater resilience",
   "Build stronger, more authentic relationships",
   "Challenge your biases and develop true self-awareness"
  ]
 },
 {
  "s": "master-the-art-of-human-behavior",
  "c": "blueprints",
  "k": "Premium blueprint",
  "t": "Master the Art of Human Behavior",
  "by": "Transform your relationships and achieve your goals",
  "pr": 19.99,
  "u": "premium-blueprint-human-nature",
  "vid": "the-laws-of-human-nature",
  "h": "A hands-on workshop: 21 lessons covering 18 laws of human nature, in video.",
  "d": "A hands-on workshop that guides you through applying the laws of human nature to real-life situations. It’s designed to help you take action, not just absorb information.",
  "lt": "What’s included",
  "l": [
   "21 lessons covering 18 laws, in video format",
   "Easy step-by-step guides with optimized tables",
   "Reflective questions for self-awareness",
   "Practical frameworks with real-world scenarios",
   "Trigger log for tracking behaviors",
   "Action goals tracker",
   "Self-paced: linear, non-linear, or express paths (Goal Focus, Self-Control, Social Mastery)",
   "Bonus mind map: 18 Laws at a Glance",
   "Bonus blueprint: The Laws of Human Nature by Robert Greene"
  ]
 },
 {
  "s": "how-to-win-friends",
  "c": "challenges",
  "k": "Challenge sheets",
  "t": "How to Win Friends and Influence People",
  "by": "Dale Carnegie",
  "pr": 0,
  "u": "challenge-sheet-how-to-win-friends-and-influence-people",
  "h": "30 daily micro-challenges to live the principles, not just learn them.",
  "d": "How to Win Friends and Influence People has changed millions of lives. But reading alone isn’t enough. If you want real results, better conversations, deeper connections, more influence, you need to live the principles, not just learn them.",
  "lt": "What’s included",
  "l": [
   [
    "30 daily micro-challenges",
    "Bite-sized, real-world tasks that help you apply each principle immediately."
   ],
   [
    "Quick reflections",
    "Simple prompts to help you track growth and build self-awareness."
   ],
   [
    "Built-in accountability",
    "New challenges unlock daily, building habit, momentum, and confidence over time."
   ]
  ]
 }
];
