export interface Post {
  slug: string
  tag: string
  title: string
  subtitle: string
  excerpt: string
  date: string
  readTime: string
  emoji: string
  bg: string
  content: string
}

export const POSTS: Post[] = [
  {
    slug: 'why-i-teach-slowly',
    tag: 'On Practice',
    title: 'Why I teach slowly — and why it matters more than you might think',
    subtitle: 'The pace of a yoga class is not just a stylistic choice. It is the teaching itself.',
    excerpt: 'Most yoga classes I attended before I found traditional practice had one thing in common: they were designed to fill the hour.',
    date: 'June 2026',
    readTime: '5 min read',
    emoji: '🌿',
    bg: 'linear-gradient(135deg, #E8F0E9 0%, #C5D9C7 100%)',
    content: `
      <p>Most yoga classes I attended before I found traditional practice had one thing in common: they were designed to fill the hour. Music, transitions, the next pose already cued before you had settled into this one. It felt productive. But I was leaving without feeling any different.</p>
      <p>When I started practising with a traditional teacher, the first thing I noticed was the silence. Not awkward silence — deliberate silence. We would hold a posture and she would say nothing. And in that nothing, I could feel my body for the first time in years.</p>
      <h2>What happens when you slow down</h2>
      <p>The nervous system does not respond well to speed. When a class moves fast, the body stays in a mild state of alert. You finish tired, perhaps a little stretched, but the nervous system has not rested. It has simply kept up.</p>
      <p>Slow movement is different. When you stay in a pose long enough, the initial resistance begins to settle. The breath deepens on its own. Something releases that was not accessible two minutes earlier.</p>
      <blockquote>Slow is not easier. It is more demanding in a different way — and more rewarding in a different way.</blockquote>
      <h2>The instruction question</h2>
      <p>I also minimise instruction in class. Not because I have nothing to say, but because constant verbal instruction keeps the mind busy. If you are listening to me, you are not listening to your body. And the body is the teacher.</p>
      <p>I might say one or two things in a long hold. The rest is yours.</p>
      <h2>A note for new students</h2>
      <p>If you come to class expecting to be busy, you may feel, at first, that nothing is happening. That is usually when everything begins to happen. Give it three sessions before you judge.</p>
    `
  },
  {
    slug: 'what-yin-yoga-does',
    tag: 'On the Body',
    title: 'What yin yoga does that other practices cannot',
    subtitle: 'It is not about flexibility. It is about time.',
    excerpt: 'Yin yoga is often described as a flexibility practice, which is a little like describing meditation as a breathing exercise.',
    date: 'May 2026',
    readTime: '6 min read',
    emoji: '🌙',
    bg: 'linear-gradient(135deg, #EDE8F5 0%, #D4CAE8 100%)',
    content: `
      <p>Yin yoga is often described as a flexibility practice. Which is a little like describing meditation as a breathing exercise. True, but it misses the point entirely.</p>
      <p>In a yin class, you hold poses for three to five minutes. The target is not the muscle — it is the connective tissue: the fascia, the ligaments, the joint capsules. These structures respond to gentle, sustained pressure over time. They do not respond to effort. They respond to time.</p>
      <h2>The fascia problem nobody talks about</h2>
      <p>Fascia is the connective tissue that wraps around every muscle, organ, and bone in your body. In most adults — especially those who sit for long hours or carry chronic stress — it tightens. It dries out. It loses its slide.</p>
      <p>Dynamic movement hydrates the muscles. It does not reach the fascia in the same way. For that, you need time. You need stillness. You need to stop trying.</p>
      <blockquote>The hardest thing I ask of students in yin class is to do nothing. To stop adjusting, fidgeting, and fixing. Just to stay.</blockquote>
      <h2>The nervous system piece</h2>
      <p>There is a second layer that most people notice after a few sessions: yin has a direct effect on the nervous system. Holding a pose for five minutes while the mind wants to move is, in a quiet way, a practice in regulating the stress response.</p>
      <p>Several students who came to me with chronic stress or hormonal concerns have told me that yin was what helped them sleep again.</p>
    `
  },
  {
    slug: 'sound-healing',
    tag: 'On Sound',
    title: 'Sound healing is not mystical. Here is what it actually does.',
    subtitle: 'A plain account of why a singing bowl in a yoga class is not wishful thinking.',
    excerpt: 'I understand the scepticism. I had it too. A bowl that makes a sound — how does that do anything useful?',
    date: 'April 2026',
    readTime: '4 min read',
    emoji: '🎵',
    bg: 'linear-gradient(135deg, #F5EDE8 0%, #E8D4C0 100%)',
    content: `
      <p>I understand the scepticism. I had it too. A bowl that makes a sound — how does that do anything useful?</p>
      <h2>What the sound actually does</h2>
      <p>The human body responds to sound physically, not just emotionally. Low, sustained frequencies slow brainwave activity. The same mechanism that makes certain music feel calming is at work when you sit near a singing bowl — except the frequencies produced by a Himalayan bowl are particularly effective at inducing the alpha and theta brainwave states associated with deep rest.</p>
      <p>You do not need to believe this is happening for it to happen. You simply lie down. The sound does the rest.</p>
      <blockquote>Most students tell me the session felt like an hour. It was forty-five minutes. That is what a genuine shift in brainwave state feels like from the inside.</blockquote>
      <h2>Why I pair it with yin</h2>
      <p>The combination works because both are asking the same thing of the body. Yin asks you to stop muscular effort and stay. Sound gives the mind something passive to rest on — rather than leaving it to its own devices, which for most people means thinking about the grocery list.</p>
      <h2>Who it is particularly good for</h2>
      <p>In my experience, Deep Relaxation sessions are especially helpful for people with chronic stress, hormonal imbalances particularly affecting sleep, and anyone who finds traditional meditation practice difficult to access.</p>
    `
  },
  {
    slug: 'pranayama',
    tag: 'On Breath',
    title: 'Pranayama: the part of yoga that changed everything for me',
    subtitle: 'Before I understood breath, I did not really understand yoga.',
    excerpt: 'Pranayama is usually the part of the class that gets abbreviated. That framing has it backwards.',
    date: 'March 2026',
    readTime: '5 min read',
    emoji: '🌬️',
    bg: 'linear-gradient(135deg, #E8F4F0 0%, #C7DDD8 100%)',
    content: `
      <p>Pranayama is usually the part of the class that gets abbreviated — a few minutes of breathing before we get to the "real" practice. That framing has it backwards.</p>
      <p>In traditional yoga, pranayama is not preparation. It is the practice. The postures were, historically, preparation for the breath work — not the other way around.</p>
      <h2>What pranayama actually is</h2>
      <p>Prana means life force, vitality, energy. Yama means regulation. Pranayama is the deliberate regulation of breath — using specific patterns of inhalation, retention, and exhalation to alter the state of the nervous system.</p>
      <p>Different techniques do genuinely different things. Nadi Shodhana balances and calms. Kapalabhati energises and clears. Bhramari slows the heart rate measurably.</p>
      <blockquote>I came to pranayama sceptically and stayed because it was the first thing that reliably changed how I felt within minutes. Not after weeks of practice. Within minutes.</blockquote>
      <h2>Why I include it in every class</h2>
      <p>Almost every class I teach begins with five minutes of breath awareness and simple pranayama. Not because it is traditional — though it is — but because it is the fastest way I know to bring students into their bodies before we begin moving.</p>
    `
  },
  {
    slug: 'small-classes',
    tag: 'On Teaching',
    title: 'Why small classes are a feature, not a limitation',
    subtitle: 'Yoga taught to one person is different from yoga performed for twenty.',
    excerpt: 'When I tell people my classes have a maximum of six students, the first response is usually surprise.',
    date: 'February 2026',
    readTime: '4 min read',
    emoji: '🌱',
    bg: 'linear-gradient(135deg, #F0EEE8 0%, #D9D0BB 100%)',
    content: `
      <p>When I tell people my classes have a maximum of six students, the first response is usually surprise — and sometimes mild suspicion, as if there must be a reason I cannot fill a larger room.</p>
      <p>The reason is simpler: I cannot do this work well with fifteen people in front of me. Nobody can.</p>
      <h2>What actually happens in a large class</h2>
      <p>In a class of fifteen, the teacher is managing the room. There is no space to notice that one student's left hip is uncomfortable, or that another has started holding their breath. The teaching that matters cannot happen in a crowded room.</p>
      <blockquote>Small numbers are not a limitation. They are the method. This work cannot be done while managing a room of fifteen.</blockquote>
      <h2>What small actually means in practice</h2>
      <p>In a class of four to six, I can see everyone. I know if you have been carrying stress in your shoulders for three weeks. I remember what we worked on last time. If you tell me your back is bad today, I can modify the whole session accordingly.</p>
      <p>This is not a premium feature. It is what teaching is supposed to be.</p>
    `
  },
  {
    slug: 'rest-is-the-practice',
    tag: 'On Rest',
    title: 'Rest is not the absence of practice. It is the practice.',
    subtitle: 'A note on why doing less is sometimes the most advanced thing you can do.',
    excerpt: 'There is a tendency in yoga to treat rest as the reward you get at the end of a hard class. That is not how traditional yoga understands rest.',
    date: 'January 2026',
    readTime: '4 min read',
    emoji: '✨',
    bg: 'linear-gradient(135deg, #EDE8F5 0%, #D4CAE8 100%)',
    content: `
      <p>There is a tendency in yoga — particularly in the more fitness-oriented versions — to treat rest as the reward you get at the end of a hard class. Savasana as a prize. Five minutes of lying down because you earned it.</p>
      <p>That is not how traditional yoga understands rest. In traditional practice, the capacity to be genuinely still is one of the hardest things to cultivate. And one of the most important.</p>
      <h2>The problem with always doing</h2>
      <p>The nervous system has two primary modes: activation and recovery. Most modern life runs heavily toward activation — even the activities we call rest are stimulating the nervous system, not resting it.</p>
      <p>Genuine rest requires a degree of stillness that many people have not experienced since childhood. The first time you try it, it is often uncomfortable. The mind does not want to be quiet.</p>
      <blockquote>What we call boredom in the early stages of stillness practice is almost always just the nervous system beginning to discharge. Sit with it a little longer.</blockquote>
      <h2>What Savasana is actually for</h2>
      <p>Savasana is not a cool-down. It is the integration period. The physical practice creates change in the body; Savasana is when the nervous system absorbs that change. Leaving early skips the most important part of the session.</p>
      <p>I always hold Savasana for a full eight to ten minutes. Almost all students, by their third or fourth class, say it is the part they look forward to most.</p>
    `
  },
]
