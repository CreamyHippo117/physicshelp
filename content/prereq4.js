PH.unit({
  id:"prereq4", course:"prereq", order:13, hours:4,
  title:"Prereq 4: Assumed mechanics intuition",
  blurb:"The first-semester physics intuition that Mechanics teachers take for granted: what forces do, how to read a free-body diagram, and what energy, momentum and rotation look like in the real world. Fast, conceptual, calculus where natural.",
  needs:["prereq1","prereq2"],
  goals:[
    "Separate position, velocity and acceleration cleanly, including at the top of a throw and in free fall",
    "Name and defuse the classic misconceptions (force needed for motion, heavy falls faster, N = mg always, 'centripetal force' as an extra force, action-reaction on one body)",
    "Draw and read a free-body diagram with only real forces on one chosen object",
    "Describe energy transformations for a coaster, pendulum and spring, and predict speeds with $v=\\sqrt{2gh}$-type reasoning",
    "Predict qualitative collision outcomes from momentum conservation",
    "Explain tipping and turning with torque; use Hooke's law $F=-kx$ and $U=\\tfrac12kx^2$",
    "Judge honestly whether you are ready for Mechanics 2"
  ],
  lessons:[
  {id:"l1", title:"Motion without the formulas: vectors, speed, acceleration", html:String.raw`
<p>A <b>scalar</b> has only a size (mass, time, speed, energy). A <b>vector</b> has size and direction (displacement, velocity, acceleration, force, momentum). Everything below leans on three definitions you already know as calculus:</p>
$$\vec v=\frac{d\vec r}{dt},\qquad \vec a=\frac{d\vec v}{dt}$$
<p><b>Speed</b> is the size of the velocity: $|\vec v|$. <b>Acceleration is any change in velocity, size or direction.</b> A car going around a circle at constant speed is accelerating because its velocity vector keeps rotating. A car braking, speeding up, or turning is accelerating; only straight-line cruising at constant speed is not.</p>
<div class="box key"><b>Direction rule.</b> Compare $\vec v$ and $\vec a$ along the line of motion. Same direction: speeding up. Opposite: slowing down. Perpendicular: turning without a change in speed. "Negative acceleration" does <i>not</i> mean "slowing down"; it only means the vector points in the negative direction.</div>
<h3>Free fall</h3>
<p>Once a ball leaves your hand (air resistance negligible) the <i>only</i> force on it is gravity, so its acceleration is $g\approx10$ m/s² downward the entire time: rising, at the top, and falling. Each second the velocity changes by 10 m/s downward. Toss a ball up at 20 m/s: velocities at $t=0,1,2,3,4$ s are $+20,+10,0,-10,-20$ m/s. At $t=2$ s it is momentarily at rest but is still accelerating at 10 m/s².</p>
<div class="box trap"><b>Trap:</b> "Acceleration is not speed." A rocket at rest on the pad has $v=0$ but $a>0$ the instant it lifts off. A jet cruising at 250 m/s has $a=0$. Large $v$ says nothing about $a$, and $a=0$ does not mean $v=0$.</div>
<p><b>Relative motion.</b> Velocities depend on the observer: $\vec v_{A\text{ rel }C}=\vec v_{A\text{ rel }B}+\vec v_{B\text{ rel }C}$. A ball tossed straight up inside a train moving at constant velocity lands back in your hand: in the train's frame it goes straight up and down, and in the ground frame both you and the ball share the train's horizontal velocity. Constant-velocity frames are physically indistinguishable; this is why "at rest" and "moving at constant velocity" are the same situation to physics.</p>`},
  {id:"l2", title:"Forces and the misconceptions everyone has", html:String.raw`
<p>A <b>force</b> is a push or pull (units: newtons, $1\text{ N}=1\text{ kg·m/s}^2$). Newton's laws in plain English:</p>
<ol>
<li><b>Inertia.</b> With zero <i>net</i> force, velocity stays constant (including staying at rest).</li>
<li><b>$\vec F_{\text{net}}=m\vec a$.</b> Net force sets the <i>acceleration</i>, not the velocity. Same direction as $\vec a$.</li>
<li><b>Third law.</b> If A pushes on B with force $\vec F$, then B pushes on A with $-\vec F$.</li>
</ol>
<p>Weight is the gravitational force on a body near Earth: $W=mg$ (about 10 N per kg). Mass is the "how hard to accelerate" property; it is the same on the Moon, while weight is not.</p>
<h3>The big five misconceptions</h3>
<div class="box trap"><b>1. "Motion needs a force."</b> A hockey puck sliding on ice keeps going because nothing is slowing it (the real answer to "why does a rolling ball stop?" is friction or drag, which <i>is</i> a force). Constant velocity means net force zero. A force is needed to <i>change</i> velocity.</div>
<div class="box trap"><b>2. "Heavier objects fall faster."</b> Gravity pulls harder on a bigger mass ($mg$), but a bigger mass also resists acceleration more ($m$): $a=mg/m=g$. Without air, a bowling ball and a feather hit together. Air resistance, not mass, makes the feather slow.</div>
<div class="box trap"><b>3. "Normal force equals weight."</b> The normal force $N$ is whatever the surface must push to stop things sinking in. It equals $mg$ only when there is no vertical acceleration and no other vertical forces. On an incline $N=mg\cos\theta$. Standing on a scale in an accelerating elevator, $N=m(g+a)$ for upward acceleration $a$.</div>
<div class="box trap"><b>4. "Centripetal force is another force."</b> It is not a new force you add to a diagram. "Centripetal" just means "pointing toward the center": it is a <i>name for the net inward force</i>, supplied by tension, gravity, friction, a normal force, whatever is really there. Never draw it as a separate arrow alongside those.</div>
<div class="box trap"><b>5. "Action and reaction cancel."</b> The two forces of a third-law pair act on <i>different bodies</i>, so they never appear on the same free-body diagram and can never cancel each other. A truck hitting a mosquito: the force on each is the same size; the accelerations differ because the masses do.</div>
<p>Test for a valid third-law pair: same type of force, equal size, opposite direction, on swapped objects. "Earth pulls book down" pairs with "book pulls Earth up" (not with "table pushes book up", which is a different interaction that merely happens to be equal and opposite when the book is at rest).</p>`},
  {id:"l3", title:"Free-body diagrams: reading and making them", html:String.raw`
<p>A <b>free-body diagram (FBD)</b> is how you turn a physical scene into $\vec F_{\text{net}}=m\vec a$. Recipe:</p>
<ol>
<li>Choose <b>one object</b> and draw it as a dot or box. Ignore everything that does not touch it, except gravity (which acts at a distance).</li>
<li>Walk around the object: for every thing that touches it, draw one arrow (normal, friction, tension, applied push) starting at the object. Add gravity $m\vec g$.</li>
<li>Label each force by <i>what exerts it</i> ("friction from floor"), draw arrow length roughly in proportion, and do <b>not</b> include forces the object exerts on others, velocity, or "centripetal force".</li>
<li>Pick axes along the acceleration direction (along the slope for an incline), resolve forces into components, and write $\sum F_x=ma_x$, $\sum F_y=ma_y$.</li>
</ol>
<svg class="fig" viewBox="0 0 520 210" width="520" role="img" aria-label="Two free-body diagrams: a box on a table pushed right at constant speed with equal friction and push, and equal normal force and weight; and a box on an incline with weight, normal force and friction">
<g stroke="currentColor" fill="none" stroke-width="2">
<rect x="90" y="75" width="70" height="55" fill="currentColor" fill-opacity=".1"/>
<line x1="30" y1="130" x2="230" y2="130"/>
</g>
<g stroke="currentColor" stroke-width="2.5" fill="currentColor">
<line x1="125" y1="75" x2="125" y2="22"/><polygon points="125,15 119,28 131,28"/>
<line x1="125" y1="130" x2="125" y2="183"/><polygon points="125,190 119,177 131,177"/>
<line x1="160" y1="102" x2="215" y2="102"/><polygon points="222,102 209,96 209,108"/>
<line x1="90" y1="102" x2="35" y2="102"/><polygon points="28,102 41,96 41,108"/>
</g>
<text x="132" y="30">N (table)</text><text x="132" y="186">mg (Earth)</text><text x="158" y="94">push</text><text x="22" y="94">friction</text>
<text x="70" y="206" font-size="12">constant velocity: all pairs balance</text>
<g stroke="currentColor" fill="none" stroke-width="2"><polygon points="290,190 500,190 500,100"/>
<g transform="rotate(-25.5 400 145)"><rect x="370" y="105" width="64" height="40" fill="currentColor" fill-opacity=".1"/></g></g>
<g stroke="currentColor" stroke-width="2.5" fill="currentColor">
<line x1="402" y1="125" x2="402" y2="185"/><polygon points="402,192 396,179 408,179"/>
<line x1="402" y1="125" x2="425" y2="82"/><polygon points="428,76 417,86 428,91"/>
<line x1="402" y1="125" x2="370" y2="144"/><polygon points="364,148 375,138 380,148"/>
</g>
<text x="430" y="82">N</text><text x="410" y="185">mg</text><text x="330" y="150">f</text>
<text x="300" y="206" font-size="12">on a slope: mg splits along and across</text>
</svg>
<p><b>Reading an FBD.</b> If the arrows balance in a direction, there is no acceleration in that direction (the object may still be moving). If they do not balance, $\vec a$ points along the unbalanced remainder. Example: in the left picture, if the push were larger than friction, the box would accelerate to the right; the weight and normal force still cancel, because the box does not accelerate vertically.</p>
<p><b>Strings and pulleys.</b> A light string pulls along itself with tension $T$, the same all along an ideal string. Two hanging blocks over a pulley have different FBDs but the same string tension and the same acceleration size.</p>
<div class="box key">Always ask <i>what is touching my object?</i> Surface contact gives you at most two forces per surface: perpendicular (normal) and parallel (friction). Rope contact gives tension. Everything else is gravity. Mechanics 2 gives the full treatment with friction models and pulleys.</div>`},
  {id:"l4", title:"Energy, momentum, rotation and springs: the intuition", html:String.raw`
<h3>Energy transformations</h3>
<p><b>Energy</b> is the bookkeeping quantity that is converted between forms but, for an isolated system, never lost. Kinetic: $K=\tfrac12mv^2$. Gravitational potential near Earth: $U=mgh$. Spring: $U=\tfrac12kx^2$. With only conservative forces, $K+U$ stays constant. Friction and drag convert mechanical energy into thermal energy.</p>
<svg class="fig" viewBox="0 0 520 170" width="520" role="img" aria-label="Roller coaster track starting at the top of a tall hill, dipping to a valley and climbing a lower hill, with labels for potential and kinetic energy at each point">
<path d="M20 30 C 90 30, 110 150, 200 150 C 270 150, 290 80, 360 80 C 410 80, 430 120, 500 120" fill="none" stroke="currentColor" stroke-width="3"/>
<circle cx="30" cy="27" r="7" fill="currentColor"/><circle cx="200" cy="143" r="7" fill="currentColor"/><circle cx="355" cy="73" r="7" fill="currentColor"/>
<line x1="20" y1="150" x2="510" y2="150" stroke="currentColor" stroke-dasharray="4 4" opacity=".5"/>
<text x="50" y="22">top: all U, K = 0</text><text x="150" y="168">bottom: all K, U = 0</text><text x="300" y="62">lower crest: some of each</text>
</svg>
<p>Roller coaster, frictionless: released from rest at height $h$, the speed at the bottom satisfies $mgh=\tfrac12mv^2$, so $v=\sqrt{2gh}$. The mass cancels (compare "heavier falls faster"). The speed at any point depends on <i>height lost</i> only, not on the track's shape. A <b>pendulum</b> swaps $U$ and $K$ back and forth: fastest at the bottom, momentarily stopped at the ends. A <b>mass on a spring</b> swaps spring $U$ and $K$: fastest as it passes the relaxed length, stopped at maximum stretch/compression.</p>
<p>Energy tells you speeds without needing to know the forces along the path. Forces tell you accelerations at an instant. (Both show up in Mechanics 3 and 4.)</p>
<h3>Momentum and collisions</h3>
<p><b>Momentum</b> $\vec p=m\vec v$. With no external net force on a system, total momentum stays constant: $m_1\vec v_1+m_2\vec v_2$ before $=$ after. This follows from the third law (equal and opposite impulses).</p>
<ul>
<li><b>Elastic:</b> kinetic energy is also conserved (idealized billiard balls). <b>Inelastic:</b> some kinetic energy becomes heat or deformation. <b>Perfectly inelastic:</b> the objects stick together, losing the most.</li>
<li>Momentum is conserved in <i>all</i> of them; kinetic energy only in elastic ones.</li>
<li>Rule of thumb: a light object hitting a heavy stationary one bounces back; a heavy one hitting a light one plows on. Recoil: a gun and bullet start at rest, so their momenta are equal and opposite (the light one gets the speed).</li>
</ul>
<h3>Rotation: wheels and tipping</h3>
<p>A force's turning effect is its <b>torque</b>: $\tau=rF\sin\phi$, where $r$ is the distance from the pivot and $\phi$ the angle between $\vec r$ and $\vec F$. That is why a long wrench loosens a bolt and a door handle sits far from the hinges. An object does not rotate if the net torque is zero. A box <b>tips</b> when the vertical line through its center of mass falls outside its base, because then gravity's torque about the edge turns it over. Tall narrow things tip at smaller tilts; low wide things are stable. A rolling wheel moves forward while spinning: its center has velocity $v$ and the rim spins at $\omega=v/R$ (for rolling without slipping). Mechanics 5-7 develop these from scratch.</p>
<h3>Springs and Hooke's law</h3>
<p>A spring pushes or pulls back toward its relaxed length with force $F=-kx$, where $x$ is the stretch (or compression) and $k$ is the stiffness in N/m. A stiffer spring has larger $k$. Stretching twice as far requires twice the force, but stores <b>four times</b> the energy, since $U=\int_0^x kx'\,dx'=\tfrac12kx^2$. A mass hanging at rest from a spring: $kx=mg$. Released from a stretched/compressed spot it oscillates; you will derive $x(t)$ as a solution of the ODE $m\ddot x=-kx$ in Mechanics 7.</p>`},
  {id:"l5", title:"Readiness check: are you ready for Mechanics 2?", html:String.raw`
<p>Mechanics 2 (Newton's laws and applications) assumes no formal prior physics, so "ready" is not "took Physics 1". It means the following sentences feel obvious, not surprising. Be honest: for each one, answer aloud <i>without looking</i>.</p>
<ol>
<li>A ball is at the top of its toss. What is its velocity? Its acceleration? (Zero, and $g$ down.)</li>
<li>A crate slides at constant velocity under a 50 N push. How big is friction, and which way? (50 N, backward; net force zero.)</li>
<li>A 2 kg book rests on a table. The normal force is 20 N. Now you press down on it with 10 N. What is $N$ and does the book accelerate? (30 N; no.)</li>
<li>Why can't a force pair act on the same FBD? (Third-law partners act on different bodies.)</li>
<li>A car turns at constant speed. Is it accelerating? Where does the net force point? (Yes; toward the center of the turn.)</li>
<li>Which has more kinetic energy: a 1000 kg car at 10 m/s or a 500 kg car at 20 m/s? (The second: 100 kJ vs 200 kJ; speed is squared.)</li>
</ol>
<div class="box key"><b>Scoring.</b> 6/6 with a clear reason: go straight to Mechanics 2; use this unit's MCQs as warm-up. 4-5: skim lessons 2 and 3 again and redo the questions you missed. 3 or fewer: work this whole unit including the FRQ, then proceed.</div>
<p>One more mindset point: physics rewards <b>explaining in words before computing</b>. When you meet a problem, say aloud (1) what the system is, (2) what is touching it, (3) whether it is accelerating, (4) which conserved quantity (energy, momentum) might apply. AP free-response questions award points for the sentence "the net force is zero because..." as often as for the arithmetic.</p>
<p>You also do not need to master everything here: Mechanics 1-7 reteach kinematics, Newton's laws, energy, momentum, rotation and oscillations from scratch with calculus. This unit's job is only to remove surprise.</p>`}
  ],
  examples:[
  {id:"x1", title:"The scale in an elevator", problem:String.raw`<p>A 70 kg person stands on a bathroom scale (which reads the normal force on it) in an elevator. Use $g=10$ m/s². What does the scale read when the elevator (a) moves up at a steady 3 m/s, (b) accelerates upward at 2 m/s², (c) is moving upward but slowing at 2 m/s²?</p>`,
   solution:String.raw`<p>FBD of the person: $N$ up, $mg=700$ N down. Take up as positive: $N-mg=ma$.</p>
<p>(a) $a=0$ (constant velocity): $N=700$ N. Speed does not matter, only acceleration.</p>
<p>(b) $N=m(g+a)=70(12)=840$ N. You feel heavier.</p>
<p>(c) Moving up but slowing means acceleration is downward: $a=-2$, so $N=70(8)=560$ N. You feel lighter. This is the same reading as when accelerating downward at 2 m/s²; the scale only cares about $a$, not velocity.</p>`},
  {id:"x2", title:"Sticking collision", problem:String.raw`<p>A 2 kg cart moving at 3 m/s collides head-on with a stationary 1 kg cart and the two stick together on a frictionless track. Find the final speed and the fraction of kinetic energy lost.</p>`,
   solution:String.raw`<p>No external horizontal force, so momentum is conserved: $2(3)=(2+1)v\Rightarrow v=2$ m/s.</p>
<p>$K_i=\tfrac12(2)(3)^2=9$ J; $K_f=\tfrac12(3)(2)^2=6$ J. Lost: $3$ J, which is one third of the initial energy (it became heat and deformation). Momentum survived; kinetic energy did not, which is what "inelastic" means.</p>`},
  {id:"x3", title:"Spring launch", problem:String.raw`<p>A 0.5 kg block sits on a frictionless table against a spring ($k=200$ N/m) compressed by 0.20 m. The spring is released. (a) How much energy is stored? (b) How fast does the block leave the spring? (c) By how much does the spring stretch when the same block hangs at rest from it vertically? Use $g=10$ m/s².</p>`,
   solution:String.raw`<p>(a) $U=\tfrac12kx^2=\tfrac12(200)(0.2)^2=4$ J.</p>
<p>(b) All becomes kinetic: $\tfrac12(0.5)v^2=4\Rightarrow v^2=16$, $v=4$ m/s.</p>
<p>(c) At rest, $kx=mg$: $x=5/200=0.025$ m $=2.5$ cm. (Different situation, so do not reuse the 0.20 m.)</p>`}
  ],
  mcq:[
  {id:"q1", q:String.raw`<p>A hockey puck slides across frictionless ice at a steady 5 m/s. Which statement about the forces on the puck is correct?</p>`, choices:["A forward force equal to the puck's momentum keeps it moving","The net force on it is zero","A forward force that slowly gets weaker keeps it moving","Gravity is balanced by a forward force","The net force points in the direction of motion because it is moving"], a:1,
   why:String.raw`<p>Constant velocity means zero acceleration, so the net force is zero (gravity is balanced by the normal force; nothing is needed horizontally). The tempting "forward force" options confuse velocity with acceleration; a force is only needed to <i>change</i> velocity.</p>`},
  {id:"q2", q:String.raw`<p>A ball is thrown straight up and is in the air, still moving upward, after leaving the hand. Neglecting air resistance, the forces on the ball are</p>`, choices:["gravity only","gravity and an upward force from the throw that decreases","gravity and an upward force that exactly balances it","an upward force only until it reaches the top","no forces, since it is moving by inertia"], a:0,
   why:String.raw`<p>Once it leaves the hand, nothing touches the ball; only gravity acts (downward). The upward velocity does not need an upward force; it simply gets used up by a downward acceleration of 10 m/s². "A force carried by the ball" does not exist.</p>`},
  {id:"q3", q:String.raw`<p>A bowling ball and a tennis ball are dropped together from the same height in a vacuum chamber. Compared with the bowling ball, the tennis ball</p>`, choices:["hits the floor at the same time","hits later because it has less mass","hits earlier because it needs less force","hits later because gravity pulls less on it","falls with smaller acceleration but the same final speed"], a:0,
   why:String.raw`<p>Gravity does pull less on the tennis ball, but it also has less inertia: $a=mg/m=g$ for both. Same acceleration, same time. Option "hits later because gravity pulls less" is the half-truth that drops the cancelling mass.</p>`},
  {id:"q4", q:String.raw`<p>A book rests on a horizontal table. Which force is the third-law partner of "the gravitational pull of Earth on the book"?</p>`, choices:["The normal force of the table on the book","The gravitational pull of the book on Earth","The normal force of the book on the table","The friction of the table on the book","There is none, because the book is at rest"], a:1,
   why:String.raw`<p>The third-law partner swaps the two bodies and keeps the type of force: Earth pulls book, so book pulls Earth. The table's normal force is equal and opposite to the weight only because the book is not accelerating, which is a statement about the second law, not the third.</p>`},
  {id:"q5", q:String.raw`<p>A person stands on a scale in an elevator that is moving upward and slowing down as it approaches the top floor. Compared with the person's true weight, the scale reading is</p>`, choices:["larger","the same","smaller","zero","impossible to compare without the speed"], a:2,
   why:String.raw`<p>Moving up but slowing means the acceleration is downward. Then $mg-N=m|a|$, so $N<mg$. The tempting answer "same" uses "moving at constant velocity" reasoning, and "larger" confuses upward velocity with upward acceleration.</p>`},
  {id:"q6", q:String.raw`<p>A car travels at constant speed around a flat circular curve. The horizontal force on the car (supplied by friction between tires and road) is directed</p>`, choices:["forward, along the velocity","backward, opposite the velocity","toward the center of the circle","away from the center of the circle","nowhere: the net force is zero because the speed is constant"], a:2,
   why:String.raw`<p>The velocity direction keeps changing, so the car accelerates, and the acceleration (and net force) point toward the center. There is no outward force on the car; the "pushed outward" feeling is your body trying to continue straight.</p>`},
  {id:"q7", q:String.raw`<p>A heavy truck collides head-on with a small car. During the collision, the magnitude of the force of the truck on the car is</p>`, choices:["larger than the force of the car on the truck","smaller than the force of the car on the truck","equal to it","larger only if the truck was moving faster","zero if the car stops the truck"], a:2,
   why:String.raw`<p>Third law: the two forces are equal in size and opposite in direction, always. The car suffers more because the same force gives the smaller mass a larger acceleration.</p>`},
  {id:"q8", q:String.raw`<p>A frictionless roller-coaster car starts from rest at the top of a hill 40 m above the ground. At a point on the track 20 m above the ground, and using $g=10$ m/s², its speed is</p>`, choices:["10 m/s","14 m/s","20 m/s","28 m/s","400 m/s"], a:2,
   why:String.raw`<p>It has dropped 20 m, so $\tfrac12v^2=gh$ gives $v=\sqrt{2(10)(20)}=20$ m/s. Using the full 40 m would give 28 m/s (the speed at the ground); the mass and track shape do not matter, only the height lost.</p>`},
  {id:"q9", q:String.raw`<p>A 1 kg cart moving at 6 m/s collides with and sticks to a stationary 2 kg cart on a frictionless track. The combined speed afterward is</p>`, choices:["1 m/s","2 m/s","3 m/s","4 m/s","6 m/s"], a:1,
   why:String.raw`<p>$1(6)=3v\Rightarrow v=2$ m/s. The answer 3 m/s (halving the speed) forgets that the masses differ; 6 m/s ignores the added mass.</p>`},
  {id:"q10", q:String.raw`<p>A spring stores 1 J of energy when stretched 2 cm. How much does it store when stretched 6 cm from its relaxed length?</p>`, choices:["3 J","6 J","9 J","18 J","36 J"], a:2,
   why:String.raw`<p>$U=\tfrac12kx^2\propto x^2$; tripling $x$ multiplies $U$ by 9. The answer 3 J wrongly treats energy as proportional to stretch (that would be force, which does triple).</p>`},
  {id:"q11", q:String.raw`<p>A wooden block is slowly tilted on a board. Block A is tall and narrow; block B has the same mass but is short and wide. As the board's tilt increases (with enough friction that neither slides),</p>`, choices:["B tips first because it is wider","they tip at the same angle because they have the same mass","A tips first","neither can tip, since friction holds them","the heavier one always tips first"], a:2,
   why:String.raw`<p>A block tips when the vertical line through its center of mass passes beyond the bottom edge. For a tall narrow block, that happens at a small tilt angle; short and wide blocks tolerate much more tilt. Mass does not enter, only the geometry of the center of mass.</p>`},
  {id:"q12", q:String.raw`<p>A car moving east brakes to a stop. During the braking, the car's acceleration is</p>`, choices:["zero, since the speed is decreasing","directed east, since the car moves east","directed west","directed east at first, then west","undefined at the instant it stops"], a:2,
   why:String.raw`<p>Velocity is east and decreasing, so $\Delta\vec v$ points west, and so does $\vec a$. Slowing down is acceleration opposite to velocity, not "zero acceleration".</p>`}
  ],
  frq:[
  {id:"f1", type:"Qualitative/quantitative translation", title:"Pushing a crate",
   prompt:String.raw`<p>A 20 kg crate sits on a horizontal floor. A worker pushes it horizontally and the crate slides to the right at a <b>constant</b> velocity under a horizontal push of 60 N. Use $g=10$ m/s².</p>
<p>(a) Draw a free-body diagram of the crate while it slides at constant velocity. Label each force by its source, and draw the arrows with sensible relative lengths.<br>
(b) Determine the magnitude of the friction force and of the normal force from the floor.<br>
(c) The worker now pushes with 100 N, and the kinetic friction stays the same. Determine the acceleration, and explain in words why the crate speeds up.<br>
(d) The worker lets go, and the crate keeps sliding. Describe the motion that follows, determine its acceleration, and explain in words (not just with a formula) what force is responsible.<br>
(e) Identify the third-law partner of the friction force that the floor exerts on the crate. State which body that partner acts on.</p>`,
   pts:[
    {p:1,d:"FBD with four forces on the crate: weight down, normal up, push right, friction left, each labeled by source"},
    {p:1,d:"Horizontal arrows equal in length and vertical arrows equal in length (balanced); no extra 'centripetal'/'motion' arrow"},
    {p:1,d:"Friction $=60$ N (net horizontal force is zero at constant velocity)"},
    {p:1,d:"Normal force $=mg=200$ N (no vertical acceleration)"},
    {p:1,d:"$a=(100-60)/20=2$ m/s² to the right"},
    {p:1,d:"Explains that the net force is now nonzero (push exceeds friction), so velocity changes: speeds up; force causes acceleration, not velocity"},
    {p:1,d:"Crate slows (with constant deceleration while kinetic friction acts) and stops; $a=60/20=3$ m/s² directed left"},
    {p:1,d:"States that friction (the only unbalanced horizontal force) causes the slowing; it does not need a force to keep moving"},
    {p:1,d:"Third-law partner: friction force of the crate on the floor, to the right, acting on the floor"}],
   solution:String.raw`<p>(a) Four arrows: weight $mg$ (from Earth) down, normal $N$ (from floor) up, push (from worker) right, kinetic friction (from floor) left. The up/down pair has equal lengths, and so does the left/right pair.</p>
<p>(b) Constant velocity means $\vec F_{\text{net}}=0$: friction $=60$ N; $N=mg=200$ N.</p>
<p>(c) $F_{\text{net}}=100-60=40$ N, so $a=40/20=2$ m/s² to the right. The net force is no longer zero, so velocity changes. Because $\vec F_{\text{net}}$ points along the motion the speed increases.</p>
<p>(d) With the push gone, only friction acts horizontally: $a=-60/20=-3$ m/s² (3 m/s² to the left). The crate slows down steadily and stops (once at rest, kinetic friction no longer applies). The force that does this is the friction from the floor, which points opposite the velocity; no force is needed for the sliding itself.</p>
<p>(e) The partner is the force of the crate on the floor (friction), same size 60 N, directed to the right, acting on the floor.</p>`}
  ]
});
