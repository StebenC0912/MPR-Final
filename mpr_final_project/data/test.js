import { Event } from "../model/Event.js";

export const starterPack = [
  new Event(
    1,
    "I was born in a circus in Vietnam, I have a natural talent as a developer.",
    0
  ),
  new Event(2, "My birthday is February 5, 2024 I am an Aquarius.", 0),
  new Event(3, "Say hi", 0),
  new Event(4, "My mother is NgoLinh, a female comedian", 0),
  new Event(5, "My father is SinhHung, is a comedy king of Ha Nam.", 0),
];

export const randomEvent = [
  // Age 1
new Event(
  6,
  "You learn to walk, stumbling a few times but persevering. (+1 Smarts, -2 Health)",
  1,
  { health: -2, smart: 1, happy: 1, look: 0 }
),
new Event(
  7,
  "Your first birthday party with lots of laughter and fun. (+3 Happiness)",
  1,
  { health: 0, smart: 0, happy: 3, look: 0 }
),

// Age 2
new Event(
  8,
  "You start speaking your first words, amusing everyone around. (+2 Smarts, +2 Happiness)",
  2,
  { health: 0, smart: 2, happy: 2, look: 0 }
),
new Event(
  9,
  "You accidentally touch a hot pan and get a mild burn. (-5 Health, -1 Happiness)",
  2,
  { health: -5, smart: 0, happy: -1, look: 0 }
),

// Age 3
new Event(
  10,
  "You learn to use the potty on your own. (+1 Smarts, +1 Happiness)",
  3,
  { health: 0, smart: 1, happy: 1, look: 0 }
),
new Event(
11,
  "You throw a tantrum when you don't get the toy you want. (-2 Happiness)",
  3,
  { health: 0, smart: 0, happy: -2, look: 0 }
),

// Age 4
new Event(
  12,
  "You make your first friend at preschool. (+3 Happiness, +1 Smarts)",
  4,
  { health: 0, smart: 1, happy: 3, look: 0 }
),
new Event(
  13,
  "You catch a cold from playing outside in the rain. (-5 Health)",
  4,
  { health: -5, smart: 0, happy: 0, look: 0 }
),

// Age 5
new Event(
  14,
  "You learn to read your first book. (+3 Smarts, +2 Happiness)",
  5,
  { health: 0, smart: 3, happy: 2, look: 0 }
),
new Event(
  15,
  "You fall off a swing at the playground. (-3 Health, -1 Happiness)",
  5,
  { health: -3, smart: 0, happy: -1, look: 0 }
),
new Event(
  16,
  "You start learning how to ride a bicycle and enjoy your first ride in the park. (+2 Smarts, +2 Happiness)",
  6,
  { health: 0, smart: 2, happy: 2, look: 0 }
),
new Event(
  17,
  "You lose your first tooth and place it under your pillow for the tooth fairy. (+1 Happiness, +1 Smart)",
  6,
  { health: 0, smart: 1, happy: 1, look: 0 }
),

// Age 7
new Event(
  18,
  "You join a local soccer team and score your first goal. (+2 Happiness, +1 Smart, +1 Health)",
  7,
  { health: 1, smart: 1, happy: 2, look: 0 }
),
new Event(
  19,
  "You accidentally break a window while playing ball. (-1 Happiness, -5 Health)",
  7,
  { health: -5, smart: 0, happy: -1, look: 0 }
),

// Age 8
new Event(
  20,
  "You participate in your school’s science fair and win a prize. (+3 Smarts, +2 Happiness)",
  8,
  { health: 0, smart: 3, happy: 2, look: 0 }
),
new Event(
  21,
  "You get lost in a mall for a few hours, causing stress and worry. (-2 Happiness, -1 Health)",
  8,
  { health: -1, smart: 0, happy: -2, look: 0 }
),

// Age 9
new Event(
  22,
  "You learn to swim at summer camp and make new friends. (+2 Smarts, +3 Happiness)",
  9,
  { health: 0, smart: 2, happy: 3, look: 0 }
),
new Event(
  23,
  "You have a bad dream and struggle to sleep, feeling tired the next day. (-2 Health, -1 Happiness)",
  9,
  { health: -2, smart: 0, happy: -1, look: 0 }
),

// Age 10
new Event(
  24,
  "You win a spelling bee contest at school, feeling proud and accomplished. (+3 Smarts, +2 Happiness)",
  10,
  { health: 0, smart: 3, happy: 2, look: 0 }
),
new Event(
  25,
  "You break your arm during a recess game, leading to a hospital visit and pain. (-10 Health, -2 Happiness)",
  10,
  { health: -10, smart: 0, happy: -2, look: 0 }
),
new Event(
  26,
  "You start middle school and are elected class representative. (+3 Happiness, +2 Smarts)",
  11,
  { health: 0, smart: 2, happy: 3, look: 0 }
),
new Event(
  27,
  "You forget your lines in the school play and feel embarrassed. (-2 Happiness)",
  11,
  { health: 0, smart: 0, happy: -2, look: 0 }
),

// Age 12
new Event(
  28,
  "You win first place in a regional math competition. (+4 Smarts, +2 Happiness)",
  12,
  { health: 0, smart: 4, happy: 2, look: 0 }
),
new Event(
  29,
  "You sprain your ankle during a basketball game. (-5 Health, -1 Happiness)",
  12,
  { health: -5, smart: 0, happy: -1, look: 0 }
),

// Age 13
new Event(
  30,
  "You start learning a musical instrument and enjoy playing it. (+2 Smarts, +2 Happiness)",
  13,
  { health: 0, smart: 2, happy: 2, look: 0 }
),
new Event(
  31,
  "You have your first big argument with your best friend and feel upset. (-3 Happiness)",
  13,
  { health: 0, smart: 0, happy: -3, look: 0 }
),

// Age 14
new Event(
  32,
  "You go on a school trip abroad and learn about different cultures. (+3 Smarts, +3 Happiness)",
  14,
  { health: 0, smart: 3, happy: 3, look: 0 }
),
new Event(
  33,
  "You catch the flu and miss an important exam, causing stress. (-5 Health, -2 Happiness)",
  14,
  { health: -5, smart: 0, happy: -2, look: 0 }
),

// Age 15
new Event(
  34,
  "You volunteer at a local charity and feel fulfilled. (+2 Happiness, +1 Smart)",
  15,
  { health: 0, smart: 1, happy: 2, look: 0 }
),
new Event(
  35,
  "You struggle with math this year and feel discouraged. (-1 Happiness, -1 Smart)",
  15,
  { health: 0, smart: -1, happy: -1, look: 0 }
),
// Age 16
new Event(
  36,
  "You get your driver's license after passing the driving test on your first try. (+3 Happiness, +1 Smarts)",
  16,
  { health: 0, smart: 1, happy: 3, look: 0 }
),
new Event(
  37,
  "You experience your first heartbreak, which affects your mood and school performance. (-3 Happiness, -1 Smart)",
  16,
  { health: 0, smart: -1, happy: -3, look: 0 }
),

// Age 17
new Event(
  38,
  "You lead a school project and it wins a state competition. (+4 Smarts, +4 Happiness)",
  17,
  { health: 0, smart: 4, happy: 4, look: 0 }
),
new Event(
  39,
  "You struggle with balancing school and part-time job, feeling constantly tired. (-2 Health, -2 Happiness)",
  17,
  { health: -2, smart: 0, happy: -2, look: 0 }
),

// Age 18
new Event(
  40,
  "You receive $10000 from your parents",
  18,
  { health: 0, smart: 2, happy: 5, look: 0 }
),
new Event(
  41,
  "You receive $10000 from your parents",
  18,
  { health: -5, smart: 0, happy: -1, look: 0 }
),

// Age 19
new Event(
  42,
  "You study abroad for a semester and make lifelong friends. (+3 Happiness, +3 Smarts)",
  19,
  { health: 0, smart: 3, happy: 3, look: 0 }
),
new Event(
  43,
  "Financial strains from college fees stress you out, affecting your mental health. (-3 Happiness)",
  19,
  { health: 0, smart: 0, happy: -3, look: 0 }
),

// Age 20
new Event(
  44,
  "You launch a small startup with friends, feeling excited but overwhelmed. (+2 Smarts, +2 Happiness, -2 Health)",
  20,
  { health: -2, smart: 2, happy: 2, look: 0 }
),
new Event(
  45,
  "You face academic probation due to underperformance, sparking a reevaluation of your priorities. (-4 Happiness, -2 Smarts)",
  20,
  { health: 0, smart: -2, happy: -4, look: 0 }
),
// Age 21
new Event(
  46,
  "You land your first full-time job, marking the start of your professional career. (+3 Happiness, +2 Smarts)",
  21,
  { health: 0, smart: 2, happy: 3, look: 0 }
),
new Event(
  47,
  "You experience your first significant financial independence but face the challenges of budgeting. (+1 Smart, -2 Happiness)",
  21,
  { health: 0, smart: 1, happy: -2, look: 0 }
),

// Age 22
new Event(
  48,
  "You move into your first apartment, feeling excited and nervous. (+2 Happiness, +1 Smart)",
  22,
  { health: 0, smart: 1, happy: 2, look: 0 }
),
new Event(
  49,
  "A challenging project at work leads to long hours, affecting your health and social life. (-1 Health, -3 Happiness)",
  22,
  { health: -1, smart: 2, happy: -3, look: 0 }
),

// Age 23
new Event(
  50,
  "You take a vacation abroad to explore new cultures and relax. (+3 Happiness, +2 Smarts)",
  23,
  { health: 0, smart: 2, happy: 3, look: 0 }
),
new Event(
  51,
  "You face a challenging breakup that affects your emotional well-being. (-4 Happiness)",
  23,
  { health: 0, smart: 0, happy: -4, look: 0 }
),

// Age 24
new Event(
  52,
  "You are promoted at work, reflecting your hard work and dedication. (+4 Happiness, +3 Smarts)",
  24,
  { health: 0, smart: 3, happy: 4, look: 0 }
),
new Event(
  53,
  "A health scare makes you reconsider your lifestyle choices. (-5 Health, +1 Smart)",
  24,
  { health: -5, smart: 1, happy: 0, look: 0 }
),

// Age 25
new Event(
  54,
  "You start a side business, pursuing a personal passion. (+2 Smarts, +2 Happiness)",
  25,
  { health: 0, smart: 2, happy: 2, look: 0 }
),
new Event(
  55,
  "Financial strain from student loans and other expenses mount, causing stress. (-3 Happiness, -1 Health)",
  25,
  { health: -1, smart: 0, happy: -3, look: 0 }
),
// Age 26
new Event(
  56,
  "You buy your first home, feeling a mix of excitement and financial pressure. (+2 Happiness, -3 Health due to stress)",
  26,
  { health: -3, smart: 1, happy: 2, look: 0 }
),
new Event(
  57,
  "You decide to go back to school for further education, balancing work and study. (+3 Smarts, -2 Happiness due to workload)",
  26,
  { health: 0, smart: 3, happy: -2, look: 0 }
),

// Age 27
new Event(
  58,
  "You get engaged, marking a new chapter in your personal life. (+4 Happiness)",
  27,
  { health: 0, smart: 0, happy: 4, look: 1 }
),
new Event(
  59,
  "A major project at work fails, leading to a challenging period of reflection and recovery. (-1 Health, -4 Happiness, +1 Smart)",
  27,
  { health: -1, smart: 1, happy: -4, look: 0 }
),

// Age 28
new Event(
  60,
  "You volunteer for a cause you are passionate about, finding new purpose. (+3 Happiness, +2 Smarts)",
  28,
  { health: 0, smart: 2, happy: 3, look: 0 }
),
new Event(
  61,
  "You suffer from a minor but persistent health issue, prompting a lifestyle change. (-4 Health, +1 Smart)",
  28,
  { health: -4, smart: 1, happy: 0, look: 0 }
),

// Age 29
new Event(
  62,
  "You take on a leadership role at your workplace, facing both challenges and opportunities. (+3 Smarts, +2 Happiness, -1 Health)",
  29,
  { health: -1, smart: 3, happy: 2, look: 0 }
),
new Event(
  63,
  "You experience burnout due to high stress at work, needing time to recuperate. (-5 Health, -3 Happiness)",
  29,
  { health: -5, smart: 0, happy: -3, look: 0 }
),

// Age 30
new Event(
  64,
  "You celebrate a milestone birthday with friends and family, reflecting on your achievements. (+5 Happiness)",
  30,
  { health: 0, smart: 0, happy: 5, look: 1 }
),
new Event(
  65,
  "You start a family, embracing the joys and challenges of parenthood. (+3 Happiness, -2 Health due to sleepless nights)",
  30,
  { health: -2, smart: 0, happy: 3, look: 0 }
),
// Age 31
new Event(
  66,
  "You are offered a significant promotion at work, which comes with more responsibilities and stress. (+4 Smarts, +3 Happiness, -2 Health)",
  31,
  { health: -2, smart: 4, happy: 3, look: 0 }
),
new Event(
  67,
  "You decide to take up a new hobby that improves your mental health and broadens your social circle. (+2 Happiness, +1 Smart, +1 Health)",
  31,
  { health: 1, smart: 1, happy: 2, look: 0 }
),

// Age 32
new Event(
  68,
  "You face a challenging situation at work that tests your problem-solving skills and resilience. (+3 Smarts, -3 Happiness)",
  32,
  { health: 0, smart: 3, happy: -3, look: 0 }
),
new Event(
  69,
  "You renovate your home, which increases your comfort and satisfaction but strains your finances temporarily. (+1 Happiness, -2 Health)",
  32,
  { health: -2, smart: 0, happy: 1, look: 1 }
),

// Age 33
new Event(
  70,
  "You start a health and fitness regime that greatly improves your physical and mental well-being. (+2 Health, +1 Smart, +2 Happiness)",
  33,
  { health: 2, smart: 1, happy: 2, look: 1 }
),
new Event(
  71,
  "A financial investment pays off, providing you with extra resources to plan for the future. (+3 Happiness, +2 Smarts)",
  33,
  { health: 0, smart: 2, happy: 3, look: 0 }
),

// Age 34
new Event(
  72,
  "You experience a significant personal loss that affects your emotional stability. (-4 Happiness, -1 Health)",
  34,
  { health: -1, smart: 0, happy: -4, look: 0 }
),
new Event(
  73,
  "You are recognized publicly for your contributions to your field, boosting your professional reputation. (+4 Smarts, +4 Happiness)",
  34,
  { health: 0, smart: 4, happy: 4, look: 1 }
),

// Age 35
new Event(
  74,
  "You decide to further your education by pursuing an advanced degree, which challenges and inspires you. (+3 Smarts, -1 Happiness due to workload)",
  35,
  { health: 0, smart: 3, happy: -1, look: 0 }
),
new Event(
  75,
  "Your child starts school, bringing new routines and challenges into your family life. (+1 Happiness, -1 Health due to early mornings)",
  35,
  { health: -1, smart: 0, happy: 1, look: 0 }
),
// Age 36
new Event(
  76,
  "You are invited to speak at an international conference, showcasing your expertise. (+4 Smarts, +3 Happiness, +1 Look)",
  36,
  { health: 0, smart: 4, happy: 3, look: 1 }
),
new Event(
  77,
  "You struggle with work-life balance, impacting your health and family time. (-2 Health, -2 Happiness)",
  36,
  { health: -2, smart: 0, happy: -2, look: 0 }
),

// Age 37
new Event(
  78,
  "Your significant other gets a fantastic job offer in another city, sparking a family move. (+2 Happiness, +1 Smart, -1 Health due to stress of moving)",
  37,
  { health: -1, smart: 1, happy: 2, look: 0 }
),
new Event(
  79,
  "You publish a book based on your professional experiences, gaining acclaim but also criticism. (+3 Smarts, +2 Happiness, -1 Happiness due to critical reviews)",
  37,
  { health: 0, smart: 3, happy: 1, look: 0 }
),

// Age 38
new Event(
  80,
  "You start a consultancy business in your field of expertise, embracing the challenges and rewards of entrepreneurship. (+3 Smarts, +2 Happiness, -2 Health due to workload)",
  38,
  { health: -2, smart: 3, happy: 2, look: 0 }
),
new Event(
  81,
  "A health scare prompts you to reevaluate your lifestyle and prioritize well-being. (+1 Health, -3 Happiness during the scare, +2 Smarts from learning about health)",
  38,
  { health: 1, smart: 2, happy: -3, look: 0 }
),

// Age 39
new Event(
  82,
  "You are recognized as a top professional in your city, boosting your social status. (+3 Happiness, +2 Smarts, +1 Look)",
  39,
  { health: 0, smart: 2, happy: 3, look: 1 }
),
new Event(
  83,
  "You experience burnout from excessive work, requiring you to take a sabbatical. (-2 Health, -4 Happiness, +1 Smart after recovery and self-reflection)",
  39,
  { health: -2, smart: 1, happy: -4, look: 0 }
),

// Age 40
new Event(
  84,
  "You celebrate your 40th birthday with a grand party, surrounded by friends and family, reflecting on life's journey. (+5 Happiness)",
  40,
  { health: 0, smart: 0, happy: 5, look: 1 }
),
new Event(
  85,
  "You decide to take up a new hobby in arts, which becomes a source of relaxation and joy. (+2 Happiness, +1 Smart, +1 Look)",
  40,
  { health: 0, smart: 1, happy: 2, look: 1 }
),
// Age 41
new Event(
  86,
  "You undergo a major surgery, which requires a long period of recovery. (-10 Health, -3 Happiness due to the stress of recovery)",
  41,
  { health: -10, smart: 0, happy: -3, look: 0 }
),
new Event(
  87,
  "You face a chronic back pain issue due to years of poor posture and stress. (-7 Health, -2 Happiness as you adjust your lifestyle)",
  41,
  { health: -7, smart: 0, happy: -2, look: 0 }
),

// Age 42
new Event(
  88,
  "A stressful year at work leads to hypertension, reminding you to prioritize your health. (-6 Health, -2 Happiness, +1 Smart from learning about stress management)",
  42,
  { health: -6, smart: 1, happy: -2, look: 0 }
),
new Event(
  89,
  "You are involved in a minor car accident, resulting in injuries and a fear of driving. (-5 Health, -4 Happiness)",
  42,
  { health: -5, smart: 0, happy: -4, look: 0 }
),

// Age 43
new Event(
  90,
  "Diagnosed with diabetes, you are forced to overhaul your diet and lifestyle. (-4 Health, +2 Smarts from learning to manage your condition, -1 Happiness)",
  43,
  { health: -4, smart: 2, happy: -1, look: 0 }
),
new Event(
  91,
  "You struggle with anxiety and depression, seeking professional help. (-3 Health, -3 Happiness, +1 Smart from therapy and personal growth)",
  43,
  { health: -3, smart: 1, happy: -3, look: 0 }
),

// Age 44
new Event(
  92,
  "You undergo knee replacement surgery due to arthritis, facing a challenging rehabilitation. (-8 Health, -2 Happiness)",
  44,
  { health: -8, smart: 0, happy: -2, look: 0 }
),
new Event(
  93,
  "A severe flu season hits, and you suffer from a prolonged illness. (-6 Health, -1 Happiness)",
  44,
  { health: -6, smart: 0, happy: -1, look: 0 }
),

// Age 45
new Event(
  94,
  "You experience a significant hearing loss, affecting your social interactions and well-being. (-5 Health, -3 Happiness, +1 Smart from learning new communication skills)",
  45,
  { health: -5, smart: 1, happy: -3, look: 0 }
),
new Event(
  95,
  "You are diagnosed with high cholesterol and must take medication, leading to lifestyle adjustments. (-4 Health, -1 Happiness)",
  45,
  { health: -4, smart: 0, happy: -1, look: 0 }
),
// Age 41
new Event(
  86,
  "You undergo a major surgery, which requires a long period of recovery. (-10 Health, -3 Happiness due to the stress of recovery)",
  41,
  { health: -10, smart: 0, happy: -3, look: 0 }
),
new Event(
  87,
  "You face a chronic back pain issue due to years of poor posture and stress. (-7 Health, -2 Happiness as you adjust your lifestyle)",
  41,
  { health: -7, smart: 0, happy: -2, look: 0 }
),

// Age 42
new Event(
  88,
  "A stressful year at work leads to hypertension, reminding you to prioritize your health. (-6 Health, -2 Happiness, +1 Smart from learning about stress management)",
  42,
  { health: -6, smart: 1, happy: -2, look: 0 }
),
new Event(
  89,
  "You are involved in a minor car accident, resulting in injuries and a fear of driving. (-5 Health, -4 Happiness)",
  42,
  { health: -5, smart: 0, happy: -4, look: 0 }
),

// Age 43
new Event(
  90,
  "Diagnosed with diabetes, you are forced to overhaul your diet and lifestyle. (-4 Health, +2 Smarts from learning to manage your condition, -1 Happiness)",
  43,
  { health: -4, smart: 2, happy: -1, look: 0 }
),
new Event(
  91,
  "You struggle with anxiety and depression, seeking professional help. (-3 Health, -3 Happiness, +1 Smart from therapy and personal growth)",
  43,
  { health: -3, smart: 1, happy: -3, look: 0 }
),

// Age 44
new Event(
  92,
  "You undergo knee replacement surgery due to arthritis, facing a challenging rehabilitation. (-8 Health, -2 Happiness)",
  44,
  { health: -8, smart: 0, happy: -2, look: 0 }
),
new Event(
  93,
  "A severe flu season hits, and you suffer from a prolonged illness. (-6 Health, -1 Happiness)",
  44,
  { health: -6, smart: 0, happy: -1, look: 0 }
),

// Age 45
new Event(
  94,
  "You experience a significant hearing loss, affecting your social interactions and well-being. (-5 Health, -3 Happiness, +1 Smart from learning new communication skills)",
  45,
  { health: -5, smart: 1, happy: -3, look: 0 }
),
new Event(
  95,
  "You are diagnosed with high cholesterol and must take medication, leading to lifestyle adjustments. (-4 Health, -1 Happiness)",
  45,
  { health: -4, smart: 0, happy: -1, look: 0 }
),
// Age 51
new Event(
  106,
  "You decide to downsize your home as your children move out, leading to a simpler, more manageable lifestyle. (+2 Happiness, -1 Health due to the stress of moving)",
  51,
  { health: -1, smart: 0, happy: 2, look: 0 }
),
new Event(
  107,
  "You suffer from a minor heart attack, which is a wake-up call to prioritize your health. (-6 Health, -2 Happiness, +3 Smarts from lifestyle changes and learning)",
  51,
  { health: -6, smart: 3, happy: -2, look: 0 }
),

// Age 52
new Event(
  108,
  "You take a sabbatical from work to travel the world, experiencing new cultures and perspectives. (+4 Happiness, +2 Smarts, -1 Health from the rigors of travel)",
  52,
  { health: -1, smart: 2, happy: 4, look: 0 }
),
new Event(
  109,
  "You start volunteering regularly at a local non-profit, finding fulfillment in giving back to the community. (+3 Happiness, +1 Smart)",
  52,
  { health: 0, smart: 1, happy: 3, look: 0 }
),

// Age 53
new Event(
  110,
  "You become a grandparent, which brings new joy and responsibilities into your life. (+3 Happiness, -1 Health from the busy new schedule)",
  53,
  { health: -1, smart: 0, happy: 3, look: 0 }
),
new Event(
  111,
  "You are diagnosed with type 2 diabetes, leading to necessary dietary and lifestyle adjustments. (-4 Health, -2 Happiness, +2 Smarts from managing your condition)",
  53,
  { health: -4, smart: 2, happy: -2, look: 0 }
),

// Age 54
new Event(
  112,
  "You publish a memoir detailing the lessons learned over your life, receiving critical acclaim and personal satisfaction. (+4 Happiness, +3 Smarts)",
  54,
  { health: 0, smart: 3, happy: 4, look: 1 }
),
new Event(
  113,
  "You face a significant loss in your investment portfolio, causing financial stress and a reassessment of your retirement plans. (-3 Happiness, -1 Health)",
  54,
  { health: -1, smart: 0, happy: -3, look: 0 }
),

// Age 55
new Event(
  114,
  "You retire from your long-term career, facing both the excitement and anxiety of this major life change. (+2 Happiness, -2 Health due to adjustment stress)",
  55,
  { health: -2, smart: 0, happy: 2, look: 0 }
),
new Event(
  115,
  "You start a new hobby in gardening, which improves your physical activity and mental well-being. (+2 Health, +1 Happiness)",
  55,
  { health: 2, smart: 0, happy: 1, look: 0 }
),
// Age 56
new Event(
  116,
  "You decide to mentor young professionals in your field, finding joy in passing on your knowledge but feeling the strain of keeping up with new trends. (+2 Happiness, +2 Smarts, -3 Health)",
  56,
  { health: -3, smart: 2, happy: 2, look: 0 }
),
new Event(
  117,
  "A close friend passes away, leading to deep reflection on your own life choices and mortality. (+1 Smart, -4 Happiness, -2 Health)",
  56,
  { health: -2, smart: 1, happy: -4, look: 0 }
),

// Age 57
new Event(
  118,
  "You undertake a major home renovation to make your living space more comfortable and accessible, enduring stress and physical exertion. (+1 Look, -5 Health)",
  57,
  { health: -5, smart: 0, happy: 1, look: 1 }
),
new Event(
  119,
  "You join a local committee to help shape community policies, engaging deeply but finding the responsibilities taxing. (+2 Smarts, +1 Happiness, -3 Health)",
  57,
  { health: -3, smart: 2, happy: 1, look: 0 }
),

// Age 58
new Event(
  120,
  "You travel to a dream destination, fulfilling a lifelong wish but facing challenges with mobility and fatigue. (+3 Happiness, -4 Health)",
  58,
  { health: -4, smart: 0, happy: 3, look: 0 }
),
new Event(
  121,
  "You suffer from a fall at home, leading to a slow and frustrating recovery period. (-6 Health, -2 Happiness)",
  58,
  { health: -6, smart: 0, happy: -2, look: 0 }
),

// Age 59
new Event(
  122,
  "You volunteer to lead a charity event, which is highly successful but physically draining. (+3 Happiness, +1 Smart, -4 Health)",
  59,
  { health: -4, smart: 1, happy: 3, look: 0 }
),
new Event(
  123,
  "Health issues become more prevalent, requiring you to adjust your daily activities significantly. (-5 Health, +1 Smart from learning to manage new health regimes)",
  59,
  { health: -5, smart: 1, happy: 0, look: 0 }
),

// Age 60
new Event(
  124,
  "You celebrate your 60th birthday with a large family gathering, feeling the love and support but also the fatigue from the event. (+4 Happiness, -3 Health)",
  60,
  { health: -3, smart: 0, happy: 4, look: 1 }
),
new Event(
  125,
  "You begin a new art class, exploring creative expression that enriches your life but acknowledges the reality of your physical limitations. (+2 Happiness, +2 Smarts, -2 Health)",
  60,
  { health: -2, smart: 2, happy: 2, look: 0 }
),
// Age 61
new Event(
  126,
  "You start experiencing memory lapses and difficulty concentrating, leading to frustration and concern. (-3 Health, -2 Smart, -2 Look)",
  61,
  { health: -3, smart: -2, happy: 0, look: -2 }
),
new Event(
  127,
  "You undergo a major surgery, taking a toll on your physical and mental well-being. (-6 Health, -3 Smart, -3 Look)",
  61,
  { health: -6, smart: -3, happy: 0, look: -3 }
),

// Age 62
new Event(
  128,
  "You experience joint pain and stiffness, making daily activities more challenging. (-4 Health, -2 Smart, -1 Look)",
  62,
  { health: -4, smart: -2, happy: 0, look: -1 }
),
new Event(
  129,
  "You struggle with technology advancements, feeling left behind and frustrated. (-2 Smart, -1 Happiness, -1 Look)",
  62,
  { health: 0, smart: -2, happy: -1, look: -1 }
),

// Age 63
new Event(
  130,
  "You face difficulties with mobility, relying more on assistive devices and experiencing a decline in independence. (-5 Health, -3 Smart, -2 Look)",
  63,
  { health: -5, smart: -3, happy: 0, look: -2 }
),
new Event(
  131,
  "You encounter vision problems, requiring the use of glasses and affecting your confidence. (-3 Smart, -2 Happiness, -2 Look)",
  63,
  { health: 0, smart: -3, happy: -2, look: -2 }
),

// Age 64
new Event(
  132,
  "You experience a significant hearing loss, leading to communication challenges and social isolation. (-4 Health, -3 Smart, -3 Look)",
  64,
  { health: -4, smart: -3, happy: 0, look: -3 }
),
new Event(
  133,
  "You undergo therapy for age-related cognitive decline, facing frustration and setbacks. (-5 Health, -4 Smart, -2 Look)",
  64,
  { health: -5, smart: -4, happy: 0, look: -2 }
),

// Age 65
new Event(
  134,
  "You retire from your long-time career, feeling a sense of loss of identity and purpose. (-3 Smart, -2 Happiness, -2 Look)",
  65,
  { health: 0, smart: -3, happy: -2, look: -2 }
),
new Event(
  135,
  "You experience a fall at home, resulting in injuries and a decrease in mobility. (-6 Health, -3 Smart, -3 Look)",
  65,
  { health: -6, smart: -3, happy: 0, look: -3 }
),
// Age 66
new Event(
  136,
  "You volunteer at a local community center, finding fulfillment in helping others. (+2 Happiness, -1 Health)",
  66,
  { health: -1, smart: 0, happy: 2, look: 0 }
),
new Event(
  137,
  "You struggle with managing finances in retirement, causing stress and anxiety. (-2 Happiness, -2 Smart)",
  66,
  { health: 0, smart: -2, happy: -2, look: 0 }
),

// Age 67
new Event(
  138,
  "You embark on a journey to explore new hobbies and interests, enriching your life with new experiences. (+3 Happiness, -1 Smart)",
  67,
  { health: 0, smart: -1, happy: 3, look: 0 }
),
new Event(
  139,
  "You face a health scare, leading to lifestyle changes and a renewed focus on well-being. (-3 Health, -1 Happiness)",
  67,
  { health: -3, smart: 0, happy: -1, look: 0 }
),

// Age 68
new Event(
  140,
  "You reconnect with old friends, reminiscing about shared memories and strengthening bonds. (+2 Happiness, -1 Smart)",
  68,
  { health: 0, smart: -1, happy: 2, look: 0 }
),
new Event(
  141,
  "You experience a decline in physical strength and stamina, requiring adjustments in daily activities. (-2 Health, -2 Smart)",
  68,
  { health: -2, smart: -2, happy: 0, look: 0 }
),

// Age 69
new Event(
  142,
  "You celebrate your retirement anniversary with loved ones, cherishing the memories of your career. (+3 Happiness)",
  69,
  { health: 0, smart: 0, happy: 3, look: 0 }
),
new Event(
  143,
  "You face challenges with technology, feeling overwhelmed by the rapid pace of advancements. (-2 Smart, -1 Happiness)",
  69,
  { health: 0, smart: -2, happy: -1, look: 0 }
),

// Age 70
new Event(
  144,
  "You spend quality time with grandchildren, finding joy in their laughter and innocence. (+3 Happiness)",
  70,
  { health: 0, smart: 0, happy: 3, look: 0 }
),
new Event(
  145,
  "You experience a health scare, prompting reflection on life's priorities and the importance of health. (-3 Health, -2 Happiness)",
  70,
  { health: -3, smart: 0, happy: -2, look: 0 }
),
// Age 71
new Event(
  146,
  "You face challenges with mobility, requiring assistance with daily tasks. (-5 Health, -3 Happiness)",
  71,
  { health: -5, smart: 0, happy: -3, look: 0 }
),
new Event(
  147,
  "You reconnect with distant relatives, finding joy in family bonds and shared memories. (+4 Happiness)",
  71,
  { health: 0, smart: 0, happy: 4, look: 0 }
),

// Age 72
new Event(
  148,
  "You experience a loss of independence, needing support for everyday activities. (-7 Health, -4 Happiness)",
  72,
  { health: -7, smart: 0, happy: -4, look: 0 }
),
new Event(
  149,
  "You receive recognition for your contributions to the community, fostering a sense of pride and fulfillment. (+3 Happiness)",
  72,
  { health: 0, smart: 0, happy: 3, look: 0 }
),

// Age 73
new Event(
  150,
  "You face challenges with memory and cognition, leading to frustration and anxiety. (-8 Health, -5 Happiness, -2 Smart)",
  73,
  { health: -8, smart: -2, happy: -5, look: 0 }
),
new Event(
  151,
  "You celebrate a milestone anniversary with your spouse, reminiscing about a lifetime of love and shared experiences. (+5 Happiness)",
  73,
  { health: 0, smart: 0, happy: 5, look: 0 }
),

// Age 74
new Event(
  152,
  "You experience a health crisis, requiring hospitalization and medical treatment. (-10 Health, -5 Happiness)",
  74,
  { health: -10, smart: 0, happy: -5, look: 0 }
),
new Event(
  153,
  "You reconnect with an old hobby, finding solace and joy in familiar activities. (+3 Happiness)",
  74,
  { health: 0, smart: 0, happy: 3, look: 0 }
),

// Age 75
new Event(
  154,
  "You face the loss of a close friend or family member, leading to grief and emotional turmoil. (-15 Health, -8 Happiness)",
  75,
  { health: -15, smart: 0, happy: -8, look: 0 }
),
new Event(
  155,
  "You volunteer at a local charity, finding fulfillment in giving back to the community. (+4 Happiness)",
  75,
  { health: 0, smart: 0, happy: 4, look: 0 }
),

// Age 76
new Event(
  156,
  "You experience a decline in physical strength and mobility, requiring assistance with daily activities. (-10 Health, -5 Happiness)",
  76,
  { health: -10, smart: 0, happy: -5, look: 0 }
),
new Event(
  157,
  "You travel to a new destination, fulfilling a lifelong dream and creating lasting memories. (+5 Happiness)",
  76,
  { health: 0, smart: 0, happy: 5, look: 0 }
),

// Age 77
new Event(
  158,
  "You face challenges with chronic health conditions, requiring ongoing medical care and treatment. (-12 Health, -6 Happiness)",
  77,
  { health: -12, smart: 0, happy: -6, look: 0 }
),
new Event(
  159,
  "You reconnect with old friends from school, reminiscing about youthful adventures and shared experiences. (+3 Happiness)",
  77,
  { health: 0, smart: 0, happy: 3, look: 0 }
),

// Age 78
new Event(
  160,
  "You experience a decline in cognitive function, facing challenges with memory and mental clarity. (-15 Health, -8 Happiness, -3 Smart)",
  78,
  { health: -15, smart: -3, happy: -8, look: 0 }
),
new Event(
  161,
  "You attend a family reunion, reconnecting with relatives and strengthening family bonds. (+4 Happiness)",
  78,
  { health: 0, smart: 0, happy: 4, look: 0 }
),

// Age 79
new Event(
  162,
  "You face financial difficulties in retirement, struggling to make ends meet. (-10 Happiness, -5 Smart)",
  79,
  { health: 0, smart: -5, happy: -10, look: 0 }
),
new Event(
  163,
  "You spend quality time with grandchildren, finding joy in their innocence and laughter. (+3 Happiness)",
  79,
  { health: 0, smart: 0, happy: 3, look: 0 }
),

// Age 80
new Event(
  164,
  "You experience a decline in overall health and mobility, requiring assistance with daily activities. (-20 Health, -10 Happiness, -5 Smart)",
  80,
  { health: -20, smart: -5, happy: -10, look: 0 }
),
new Event(
  165,
  "You celebrate your 80th birthday surrounded by loved ones, cherishing the moments and memories. (+5 Happiness)",
  80,
  { health: 0, smart: 0, happy: 5, look: 0 }
),
// Age 81
new Event(
  166,
  "You experience a serious health crisis, requiring hospitalization and intensive medical care. (-65 Health, -15 Happiness)",
  81,
  { health: -65, smart: 0, happy: -15, look: 0 }
),
new Event(
  167,
  "You reconnect with distant relatives, finding joy in family bonds and shared memories. (+10 Happiness)",
  81,
  { health: 0, smart: 0, happy: 10, look: 0 }
),

// Age 82
new Event(
  168,
  "You struggle with memory loss and cognitive decline, facing challenges with daily tasks. (-50 Health, -10 Smart)",
  82,
  { health: -50, smart: -10, happy: 0, look: 0 }
),
new Event(
  169,
  "You receive recognition for your lifetime achievements, celebrating your contributions to society. (+20 Happiness)",
  82,
  { health: 0, smart: 0, happy: 20, look: 0 }
),

// Age 83
new Event(
  170,
  "You face challenges with mobility and physical health, requiring assistance for everyday activities. (-55 Health, -12 Happiness)",
  83,
  { health: -55, smart: 0, happy: -12, look: 0 }
),
new Event(
  171,
  "You reconnect with old friends, reminiscing about shared experiences and cherished memories. (+15 Happiness)",
  83,
  { health: 0, smart: 0, happy: 15, look: 0 }
),

// Age 84
new Event(
  172,
  "You experience a decline in overall health and well-being, facing challenges with daily activities. (-60 Health, -15 Happiness)",
  84,
  { health: -60, smart: 0, happy: -15, look: 0 }
),
new Event(
  173,
  "You celebrate your 84th birthday surrounded by loved ones, cherishing the moments and memories. (+25 Happiness)",
  84,
  { health: 0, smart: 0, happy: 25, look: 0 }
),

// Age 85
new Event(
  174,
  "You face the loss of a close friend or family member, leading to grief and emotional turmoil. (-65 Health, -20 Happiness)",
  85,
  { health: -65, smart: 0, happy: -20, look: 0 }
),
new Event(
  175,
  "You volunteer at a local charity, finding fulfillment in giving back to the community. (+30 Happiness)",
  85,
  { health: 0, smart: 0, happy: 30, look: 0 }
),
// Age 81
new Event(
  166,
  "You experience a serious health crisis, requiring hospitalization and intensive medical care. (-65 Health, -15 Happiness)",
  81,
  { health: -65, smart: 0, happy: -15, look: 0 }
),
new Event(
  167,
  "You reconnect with distant relatives, finding joy in family bonds and shared memories. (+10 Happiness)",
  81,
  { health: 0, smart: 0, happy: 10, look: 0 }
),

// Age 82
new Event(
  168,
  "You struggle with memory loss and cognitive decline, facing challenges with daily tasks. (-50 Health, -10 Smart)",
  82,
  { health: -50, smart: -10, happy: 0, look: 0 }
),
new Event(
  169,
  "You receive recognition for your lifetime achievements, celebrating your contributions to society. (+20 Happiness)",
  82,
  { health: 0, smart: 0, happy: 20, look: 0 }
),

// Age 83
new Event(
  170,
  "You face challenges with mobility and physical health, requiring assistance for everyday activities. (-55 Health, -12 Happiness)",
  83,
  { health: -55, smart: 0, happy: -12, look: 0 }
),
new Event(
  171,
  "You reconnect with old friends, reminiscing about shared experiences and cherished memories. (+15 Happiness)",
  83,
  { health: 0, smart: 0, happy: 15, look: 0 }
),

// Age 84
new Event(
  172,
  "You experience a decline in overall health and well-being, facing challenges with daily activities. (-60 Health, -15 Happiness)",
  84,
  { health: -60, smart: 0, happy: -15, look: 0 }
),
new Event(
  173,
  "You celebrate your 84th birthday surrounded by loved ones, cherishing the moments and memories. (+25 Happiness)",
  84,
  { health: 0, smart: 0, happy: 25, look: 0 }
),

// Age 85
new Event(
  174,
  "You face the loss of a close friend or family member, leading to grief and emotional turmoil. (-65 Health, -20 Happiness)",
  85,
  { health: -65, smart: 0, happy: -20, look: 0 }
),
new Event(
  175,
  "You volunteer at a local charity, finding fulfillment in giving back to the community. (+30 Happiness)",
  85,
  { health: 0, smart: 0, happy: 30, look: 0 }
),
// Age 86
new Event(
  176,
  "You experience a severe health crisis, requiring emergency medical intervention. (-90 Health, -25 Happiness)",
  86,
  { health: -90, smart: 0, happy: -25, look: 0 }
),
new Event(
  177,
  "You reconnect with distant relatives, finding solace in family connections during difficult times. (+35 Happiness)",
  86,
  { health: 0, smart: 0, happy: 35, look: 0 }
),

// Age 87
new Event(
  178,
  "You struggle with chronic health issues, facing limitations in daily activities. (-85 Health, -20 Happiness)",
  87,
  { health: -85, smart: 0, happy: -20, look: 0 }
),
new Event(
  179,
  "You receive a surprise visit from an old friend, brightening your day with laughter and conversation. (+30 Happiness)",
  87,
  { health: 0, smart: 0, happy: 30, look: 0 }
),

// Age 88
new Event(
  180,
  "You experience a decline in physical strength and stamina, requiring assistance for mobility. (-90 Health, -25 Happiness)",
  88,
  { health: -90, smart: 0, happy: -25, look: 0 }
),
new Event(
  181,
  "You celebrate your 88th birthday with a small gathering of loved ones, cherishing the moments together. (+40 Happiness)",
  88,
  { health: 0, smart: 0, happy: 40, look: 0 }
),

// Age 89
new Event(
  182,
  "You face the loss of a beloved pet, mourning the companionship and memories shared. (-90 Health, -30 Happiness)",
  89,
  { health: -90, smart: 0, happy: -30, look: 0 }
),
new Event(
  183,
  "You volunteer at a local shelter, finding solace in caring for animals in need. (+35 Happiness)",
  89,
  { health: 0, smart: 0, happy: 35, look: 0 }
),

// Age 90
new Event(
  184,
  "You experience a serious health setback, requiring extended hospitalization and treatment. (-95 Health, -35 Happiness)",
  90,
  { health: -95, smart: 0, happy: -35, look: 0 }
),
new Event(
  185,
  "You reconnect with distant relatives, finding joy in family connections and shared memories. (+40 Happiness)",
  90,
  { health: 0, smart: 0, happy: 40, look: 0 }
)
];
