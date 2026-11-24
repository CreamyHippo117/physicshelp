PH.unit({
  id:"prereq3", course:"prereq", order:12, hours:2.5,
  title:"Prereq 3: The language of physics",
  blurb:"A plain-language primer for someone who has never taken physics: what mass, weight, force, energy, charge and fields actually are, how to draw free-body diagrams, what models and approximations are for, and a method for attacking AP free-response questions.",
  needs:["prereq1"],
  goals:[
    "Say in plain words what mass, weight, force, energy, charge, and a field are, and keep mass and weight apart",
    "Draw correct free-body diagrams (every force on one object, nothing else) for common situations",
    "State Newton's three laws at first-contact level and spot the usual misconceptions",
    "Name the idealizations behind a problem (point particle, frictionless, ideal string/wire) and know when they fail",
    "Attack an FRQ systematically: read everything, translate to equations, derive symbolically, check units and limits, and write what the command words ask for"
  ],
  lessons:[
  {id:"l1", title:"Mass, weight and force: the basic vocabulary", videos:[{"title": "Newton's first law of motion", "url": "https://www.youtube.com/watch?v=5-ZFOhHQS68", "src": "Khan Academy", "note": "Inertia primer (listing attributed to Sal Khan)."}], html:String.raw`
<p>Physics describes the world with a few quantities, each defined by how it is measured. Learn these meanings first; the equations are just precise statements of them.</p>
<p><b>Mass</b> ($m$, kg) measures how much "stuff" there is and, more usefully, <b>how hard an object is to accelerate</b> (its inertia). Mass is a scalar and does not change when you travel to the Moon.</p>
<p><b>Force</b> ($\vec F$, newtons) is a push or a pull that one object exerts on another. It is a vector: it has a size and a direction. One newton is the force that would make a 1 kg object speed up by 1 m/s every second. Common forces you will draw:</p>
<ul>
<li><b>Weight</b> (gravity), $\vec F_g=m\vec g$: the pull of the Earth on an object, always toward the center of the Earth. Near the surface, $g\approx10$ N/kg (9.8 to be exact; we use 10 unless told otherwise).</li>
<li><b>Normal force</b> $\vec N$: the push of a surface on an object touching it. "Normal" means <i>perpendicular</i> to the surface. It adjusts itself to whatever size is needed to stop the object from sinking into the surface, up to the breaking point.</li>
<li><b>Friction</b> $\vec f$: a force parallel to a surface that resists sliding (or attempted sliding). For sliding on a dry surface the approximate model is $f=\mu N$, where $\mu$ is the coefficient of friction.</li>
<li><b>Tension</b> $\vec T$: the pull of a rope or string. It pulls <i>along</i> the rope, away from the object it is attached to. Ropes can pull but not push.</li>
<li><b>Applied force</b>: a push or pull from you or from some other agent.</li>
</ul>
<div class="box key"><b>Mass vs weight.</b> Mass is a property of the object; weight is a force on it that depends on where it is. A 60 kg person has weight $mg=600$ N on Earth and about $96$ N on the Moon (where $g\approx1.6$ N/kg). Their mass is 60 kg in both places. When a scale in a store "weighs" you in kilograms it is really measuring a force and converting using Earth's $g$.</div>
<p><b>Newton's laws, first contact</b> (full treatment in Mechanics 2):</p>
<ol>
<li><b>Inertia.</b> If the net force on an object is zero, it moves with constant velocity. That includes standing still, but also gliding at constant speed in a straight line. <i>No force is needed to keep an object moving.</i></li>
<li><b>$\vec F_\text{net}=m\vec a$.</b> A net (total) force produces acceleration in the same direction; bigger force gives bigger acceleration, bigger mass gives smaller acceleration.</li>
<li><b>Action-reaction.</b> If object A pushes on object B, then B pushes on A with a force of equal size and opposite direction. The two forces act on <i>different</i> objects and are the same kind of force.</li>
</ol>
<div class="box trap"><b>Traps.</b> (1) "Heavier things fall faster." Without air, all objects have the same acceleration $g$, since the force $mg$ and the inertia $m$ cancel. (2) "A moving object must have a force in the direction of motion." Forces change velocity, they do not maintain it. (3) A book resting on a table: the weight and the normal force are equal and opposite, but they are <i>not</i> a third-law pair. They act on the same object, and they are different kinds of forces. The partner of "Earth pulls on book" is "book pulls on Earth".</div>
<p><b>Velocity and acceleration, quick.</b> Velocity is the rate of change of position; acceleration is the rate of change of velocity. Speeding up, slowing down, and turning are all accelerations. An object moving in a circle at constant speed is accelerating because its velocity direction changes.</p>`},
  {id:"l2", title:"Free-body diagrams", videos:[{"title": "5 Steps to Help Solve any Free Body Diagram Problem", "url": "https://www.youtube.com/watch?v=pA9Uc_rJNiA", "src": "Flipping Physics", "note": "FBD drawing routine."}], html:String.raw`
<p>A <b>free-body diagram (FBD)</b> is the single most important drawing in mechanics. It isolates one object and shows <b>every force acting on it</b>, nothing else.</p>
<p><b>The recipe.</b></p>
<ol>
<li>Choose <b>one</b> object (the "system") and draw it as a dot or a small box.</li>
<li>Ask: <i>what is touching it?</i> Each contact (surface, rope, hand) can supply a force. Then add the long-range forces: gravity, and (later) electric or magnetic forces.</li>
<li>Draw each force as an arrow starting on the object, pointing in the direction the force pushes or pulls on the object. Make lengths roughly proportional to sizes (equal arrows if the forces should cancel).</li>
<li>Label each force with what it is (and ideally who exerts it): $N$, $mg$, $T$, $f$, $F_\text{applied}$.</li>
<li>Choose axes, usually along the direction of the acceleration. Then break any slanted forces into components and write $\sum F_x=ma_x$, $\sum F_y=ma_y$.</li>
</ol>
<svg class="fig" viewBox="0 0 480 180" width="480" role="img" aria-label="Three free-body diagrams. Left: a block at rest on a table, normal force up equals weight down. Middle: a hanging mass speeding up downward, tension up smaller than weight down. Right: a ball at the top of its toss with only weight acting downward.">
<defs><marker id="p3a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="currentColor"/></marker></defs>
<g stroke="currentColor" stroke-width="2.5" fill="none" marker-end="url(#p3a)">
<line x1="80" y1="95" x2="80" y2="28" marker-end="url(#p3a)"/><line x1="80" y1="95" x2="80" y2="162" marker-end="url(#p3a)"/>
<line x1="240" y1="95" x2="240" y2="42" marker-end="url(#p3a)"/><line x1="240" y1="95" x2="240" y2="162" marker-end="url(#p3a)"/>
<line x1="400" y1="95" x2="400" y2="162" marker-end="url(#p3a)"/></g>
<g fill="none" stroke="currentColor"><rect x="66" y="81" width="28" height="28"/><rect x="226" y="81" width="28" height="28"/><circle cx="400" cy="95" r="12"/></g>
<text x="88" y="38">N</text><text x="88" y="158">mg</text><text x="248" y="52">T</text><text x="248" y="158">mg</text><text x="408" y="158">mg</text>
<text x="20" y="14" font-size="12">at rest on a table</text><text x="156" y="14" font-size="12">hanging mass, speeding up downward</text><text x="338" y="14" font-size="12">ball at top of its toss</text>
<text x="110" y="100" font-size="12">N = mg</text><text x="270" y="100" font-size="12">mg &gt; T</text><text x="418" y="100" font-size="12">v=0 but</text><text x="418" y="115" font-size="12">still mg</text></svg>
<svg class="fig" viewBox="0 0 340 200" width="340" role="img" aria-label="Free-body diagram of a block sliding down a rough incline at 30 degrees: weight straight down, normal force perpendicular to the surface, friction up along the slope">
<defs><marker id="p3b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="currentColor"/></marker></defs>
<polygon points="20,180 290,180 290,24" fill="currentColor" fill-opacity=".08" stroke="currentColor"/>
<rect x="132" y="70" width="40" height="28" fill="none" stroke="currentColor" transform="rotate(-30 152 84)"/>
<g stroke="currentColor" stroke-width="2.5" fill="none"><line x1="152" y1="84" x2="152" y2="150" marker-end="url(#p3b)"/><line x1="152" y1="84" x2="104" y2="56" marker-end="url(#p3b)"/><line x1="152" y1="84" x2="186" y2="64" marker-end="url(#p3b)"/></g>
<path d="M60,180 A40,40 0 0 0 55,160" fill="none" stroke="currentColor"/><text x="68" y="176" font-size="12">θ = 30°</text>
<text x="158" y="148">mg</text><text x="84" y="52">N</text><text x="190" y="62">f</text><text x="205" y="104" font-size="12">sliding down the slope</text></svg>
<svg class="fig" viewBox="0 0 340 140" width="340" role="img" aria-label="Free-body diagram of a block pushed to the right along a rough floor: applied force right (longer), friction left (shorter), normal up, weight down">
<defs><marker id="p3c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="currentColor"/></marker></defs>
<rect x="150" y="55" width="30" height="30" fill="none" stroke="currentColor"/>
<g stroke="currentColor" stroke-width="2.5" fill="none"><line x1="165" y1="70" x2="270" y2="70" marker-end="url(#p3c)"/><line x1="165" y1="70" x2="100" y2="70" marker-end="url(#p3c)"/><line x1="165" y1="70" x2="165" y2="15" marker-end="url(#p3c)"/><line x1="165" y1="70" x2="165" y2="125" marker-end="url(#p3c)"/></g>
<text x="270" y="62">F</text><text x="98" y="62">f</text><text x="172" y="24">N</text><text x="172" y="122">mg</text><text x="20" y="132" font-size="12">F &gt; f, so the block speeds up to the right</text></svg>
<p><b>What does not belong on an FBD.</b></p>
<ul>
<li>Forces the object exerts on <i>other</i> things (those go on <i>their</i> diagrams).</li>
<li>"The force of motion" or "the force of the throw" once the hand has let go. After release only gravity (and drag, if present) act on a ball.</li>
<li>"$ma$" or "net force" as an arrow. $ma$ is the <i>result</i> of the forces, not another force.</li>
<li>"Centripetal force" as a separate arrow. It is the name for whichever real forces (tension, gravity, normal) point toward the center.</li>
</ul>
<div class="box key"><b>Check your FBD with the motion.</b> Constant velocity (including at rest): forces must cancel, so draw opposing arrows with equal length. Speeding up to the right: the rightward arrows must win. For an object resting on a surface, $N$ is whatever is needed to balance the other perpendicular forces, which is not always $mg$ (it is less on an incline, and more when you push down on the block).</div>
<p><b>Slanted forces.</b> On an incline of angle $\theta$, resolve gravity into a component <i>along</i> the slope, $mg\sin\theta$, and one <i>perpendicular</i> to it, $mg\cos\theta$. The perpendicular part is balanced by $N$ (so $N=mg\cos\theta$ if nothing else is pressing); the along-slope part is what makes the block accelerate (if friction is absent, $a=g\sin\theta$). Limiting check: at $\theta=0$ (flat), $a=0$ and $N=mg$. At $\theta=90^\circ$ (a vertical wall), $a=g$ and $N=0$. &#10003;</p>`},
  {id:"l3", title:"Energy, conservation, charge and fields", videos:[{"title": "Search: energy and conservation", "url": "https://www.youtube.com/results?search_query=what+is+energy+conservation+of+energy+introduction+physics", "src": "YouTube search", "note": "Pick a short, well-reviewed explainer; no specific video verified."}, {"title": "Search: electric field as force per charge", "url": "https://www.youtube.com/results?search_query=electric+field+explained+test+charge+force+per+charge", "src": "YouTube search", "note": "Pick a short, well-reviewed explainer; no specific video verified."}], html:String.raw`
<p><b>Energy is bookkeeping.</b> It is a number you can compute for a system that tells you what the system could do. Energy comes in forms, and the central fact is that it can change form but is never created or destroyed:</p>
<ul>
<li><b>Kinetic energy</b> $K=\tfrac12mv^2$ (energy of motion, joules).</li>
<li><b>Gravitational potential energy</b> near the Earth's surface, $U_g=mgh$ (stored by raising something).</li>
<li><b>Spring potential energy</b> $U_s=\tfrac12kx^2$ (stored in a stretched or compressed spring).</li>
<li><b>Thermal energy</b>: the random motion of atoms. Friction and air resistance turn organized kinetic energy into it.</li>
</ul>
<p><b>Work</b> is the way energy is transferred by a force: $W=\vec F\cdot\Delta\vec r=F\,d\cos\theta$. A force along the motion adds energy to the object; a force opposing the motion removes it; a force perpendicular to the motion does nothing. The ledger statement for an isolated system is $K_i+U_i=K_f+U_f$ (with thermal energy added when friction acts).</p>
<div class="box key"><b>Why bookkeeping is powerful.</b> A ball falling 5 m: you do not need to know the path or time. Energy lost from $U$ equals energy gained as $K$: $mgh=\tfrac12mv^2$, so $v=\sqrt{2gh}$. The mass cancels, a first clue that the result is "universal". (Example 3.)</div>
<p><b>Conservation ideas.</b> A conserved quantity can be moved from one object or form to another, but the total in a closed system stays the same. You will use four: <b>energy</b>, <b>momentum</b> ($\vec p=m\vec v$, conserved when no net external force acts, e.g. in collisions), <b>angular momentum</b> (the rotational analogue, Mechanics 5), and <b>electric charge</b>. These give answers without needing details of forces during a collision or a complicated path.</p>
<p><b>Electric charge</b> $q$ (coulombs) is a property of matter that makes it feel electric forces. There are two kinds, called positive and negative. Like charges repel; unlike charges attract. Charge is conserved: it can be moved around, never created from nothing. It comes in lumps of the elementary charge $e=1.6\times10^{-19}$ C (a proton has $+e$, an electron $-e$). Coulomb's law gives the size of the force between two small charges separated by $r$:</p>
$$F=k\frac{|q_1q_2|}{r^2},\qquad k=9.0\times10^9\ \text{N}\cdot\text{m}^2/\text{C}^2.$$
<p>It is an <b>inverse-square</b> law: double the distance and the force drops by a factor of 4. (Gravity has the same form with masses in place of charges, but it is always attractive.)</p>
<p><b>Fields: a map of the force a test object would feel.</b> Rather than think of each object as reaching across empty space, we say each object (or charge) creates a <b>field</b> filling the space around it. At every point of space the field is a vector: the force that a small <b>test object</b> placed there would feel, divided by the test object's property:</p>
$$\vec g=\frac{\vec F}{m}\ (\text{N/kg}),\qquad \vec E=\frac{\vec F}{q}\ (\text{N/C}).$$
<p>So near Earth's surface $g\approx10$ N/kg downward at every point; a 3 kg object feels $30$ N. An electric field of $5\times10^3$ N/C at a point means that a $2\ \mu$C charge placed there feels $F=qE=10^{-2}$ N. The field exists whether or not the test object is there.</p>
<svg class="fig" viewBox="0 0 280 200" width="280" role="img" aria-label="Electric field of a positive point charge: arrows radiate outward and get shorter farther from the charge">
<defs><marker id="p3d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0L10,5L0,10z" fill="currentColor"/></marker></defs>
<circle cx="140" cy="100" r="9" fill="none" stroke="currentColor" stroke-width="2"/><text x="135" y="105">+</text>
<g stroke="currentColor" stroke-width="2" fill="none">
<line x1="158" y1="100" x2="196" y2="100" marker-end="url(#p3d)"/><line x1="122" y1="100" x2="84" y2="100" marker-end="url(#p3d)"/><line x1="140" y1="82" x2="140" y2="44" marker-end="url(#p3d)"/><line x1="140" y1="118" x2="140" y2="156" marker-end="url(#p3d)"/>
<line x1="153" y1="87" x2="180" y2="60" marker-end="url(#p3d)"/><line x1="127" y1="87" x2="100" y2="60" marker-end="url(#p3d)"/><line x1="153" y1="113" x2="180" y2="140" marker-end="url(#p3d)"/><line x1="127" y1="113" x2="100" y2="140" marker-end="url(#p3d)"/>
<line x1="230" y1="100" x2="250" y2="100" marker-end="url(#p3d)"/><line x1="50" y1="100" x2="30" y2="100" marker-end="url(#p3d)"/><line x1="140" y1="30" x2="140" y2="14" marker-end="url(#p3d)"/><line x1="140" y1="170" x2="140" y2="186" marker-end="url(#p3d)"/></g>
<text x="205" y="94" font-size="12">E</text><text x="148" y="40" font-size="12">E</text></svg>
<p class="mut">Arrow length is the strength of the field: it falls off as $1/r^2$.</p>
<div class="box trap"><b>Trap:</b> The field is not the force. The force on a charge $q$ is $\vec F=q\vec E$. A negative charge feels a force <i>opposite</i> to $\vec E$.</div>`},
  {id:"l4", title:"Models and approximations", html:String.raw`
<p>Real situations are too messy to solve exactly. Physics works by building a <b>model</b>: a simplified version of reality that keeps the effects you care about and throws away the rest. Every AP problem comes with an unstated model, and often a stated one ("frictionless," "ideal"). Knowing what each idealization means, and when it fails, is part of the skill.</p>
<table><tr><th>Idealization</th><th>What you are assuming</th><th>When it fails</th></tr>
<tr><td><b>Point particle</b></td><td>The object's size and shape do not matter; all forces act at one point, and it does not rotate</td><td>Spinning/rolling objects, questions about where a force acts (torque), extended structures</td></tr>
<tr><td><b>Frictionless surface</b></td><td>No force parallel to the surface; only $N$</td><td>Rough floors, ice at low speed (small but nonzero $\mu$)</td></tr>
<tr><td><b>Neglect air resistance</b></td><td>Only gravity acts on a projectile</td><td>Light or fast objects (feather, golf ball, sky-diver)</td></tr>
<tr><td><b>Massless, inextensible string</b></td><td>Tension is the same along the whole string; both ends move the same distance</td><td>Heavy rope, an elastic cord</td></tr>
<tr><td><b>Ideal (massless, frictionless) pulley</b></td><td>It only redirects the string, tension equal on both sides</td><td>A heavy pulley that has to be spun up (rotational inertia, Mechanics 5)</td></tr>
<tr><td><b>Uniform field</b></td><td>$g$ (or $E$) is the same everywhere in the region</td><td>Over distances comparable to the size of the Earth (or the capacitor gap...)</td></tr>
<tr><td><b>Ideal wire / ideal battery</b> (E&amp;M)</td><td>Zero resistance in wires; constant emf</td><td>Long thin wires, a nearly drained battery</td></tr>
<tr><td><b>Small angle</b></td><td>$\sin\theta\approx\theta$</td><td>Large swings</td></tr></table>
<p><b>How to use models well.</b></p>
<ol>
<li><b>State your assumptions</b> when a problem is open-ended: "assume the string is massless and the table frictionless, so the tension is the same throughout." The AP often awards a point for exactly this.</li>
<li><b>Judge size before dropping a term.</b> Neglecting air drag on a 10 m fall of a steel ball changes the answer by a fraction of a percent; on a falling feather it changes everything.</li>
<li><b>Know the direction of the error.</b> If real friction exists, a sliding block really goes slower and a ball really goes shorter than the ideal model says. Predicting "too high" or "too low" is a common FRQ point.</li>
<li><b>Models define scope.</b> $g=10$ N/kg for everything a few kilometers above the ground; gravity weakens noticeably only when height is a good fraction of Earth's 6400 km radius.</li>
</ol>
<div class="box key"><b>A model is not wrong for being simple.</b> It is wrong only when used outside its range. The skill the AP rewards is being able to say: "I assumed X, so my answer is an upper (or lower) bound."</div>
<p><b>Order-of-magnitude sanity.</b> After solving, estimate (Prereq 1): is a 12 N tension plausible for a 2 kg block and a 3 kg hanging mass? The hanging weight is 30 N, so tension must be less than that and more than zero. 12 N is. If you had 45 N, an error has occurred.</p>`},
  {id:"l5", title:"Attacking an AP free-response question", videos:[{"title": "Search: AP Physics C FRQ strategy", "url": "https://www.youtube.com/results?search_query=AP+Physics+C+free+response+strategy+tips", "src": "YouTube search", "note": "Pick a short, well-reviewed explainer; no specific video verified."}], html:String.raw`
<p>The AP Physics C free-response section is scored on a rubric of small points. Most students lose points to <i>process</i>, not physics. Use a fixed routine.</p>
<p><b>The routine.</b></p>
<ol>
<li><b>Read all parts first.</b> Later parts reveal what symbols are allowed and what the problem is building toward ("in terms of $m$, $g$ and $\theta$"). Also notice which parts are independent, so you can skip a stuck part without losing the rest.</li>
<li><b>Translate</b> the words into a picture: a labeled sketch, a free-body diagram, defined axes and a positive direction. List knowns and unknowns with symbols.</li>
<li><b>Name the principle.</b> Write the law you are using before doing algebra: "Newton's second law for the block, along the incline" or "conservation of energy from release to the bottom". That statement itself is usually worth a point.</li>
<li><b>Work symbolically.</b> Solve in letters, and substitute numbers only at the end, and only if the question asks for a number. Letters let you check units and limits, and let the grader see your reasoning even if your arithmetic slips. If the question says "in terms of" some variables, use only those (and standard constants like $g$).</li>
<li><b>Check.</b> (a) <b>Units</b>: every term should have the same dimension. (b) <b>Limiting cases</b>: ask "what happens if $m\to\infty$? If $\mu\to0$? If $\theta\to0$ or $90^\circ$?" and see whether the formula agrees with physical intuition. (c) <b>Plausibility</b>: a speed of $10^8$ m/s for a thrown ball is a mistake.</li>
<li><b>Write it so partial credit is possible.</b> If stuck, write the equation anyway. If a later part needs an earlier answer you did not get, define a symbol ("let the speed from part (a) be $v_a$") and continue; errors carried forward are typically scored for the later method.</li>
</ol>
<p><b>The command words.</b> Rubrics are written in terms of these words:</p>
<table><tr><th>Word</th><th>What is expected</th></tr>
<tr><td><b>Calculate / Determine / Find</b></td><td>Starting equation, substitution with units, final answer with units. The answer without any visible work often gets little or no credit.</td></tr>
<tr><td><b>Derive</b></td><td>Begin from a fundamental principle or law (from the equation sheet or "starting from..."), carry the algebra with enough lines that each step follows, and end on the expression requested. Quoting the final formula is not a derivation.</td></tr>
<tr><td><b>Justify / Explain</b></td><td>A claim <b>plus</b> reasoning based on a physics principle or equation: "The speed is the same because energy is conserved and $mgh$ does not depend on the path." In words (equations may support them). Restating the answer is not a justification.</td></tr>
<tr><td><b>Sketch</b></td><td>Qualitative graph or diagram: correct shape, signs, intercepts, asymptotes, labeled axes. Exact scale not required.</td></tr>
<tr><td><b>Plot</b></td><td>Axes with labels, units and scales, points placed accurately, best-fit line.</td></tr>
<tr><td><b>Compare / Rank</b></td><td>State greater, less or equal, with a reason.</td></tr>
<tr><td><b>Describe / State</b></td><td>A brief factual answer. No derivation needed.</td></tr></table>
<div class="box key"><b>A good explanation in one line:</b> "[claim], because [physics principle/equation], which implies [consequence]." Example: "The tension is less than $Mg$ because the hanging block accelerates downward, so the net force on it is downward: $Mg-T=Ma>0$."</div>
<p><b>How points are typically earned</b> (details vary by problem): one point for a correct starting equation or principle, one for correct algebra or substitution, one for the correct result with units, and separate points for each requested sketch, label or explanation. A correct number with no support can earn little. A wrong number reached with correct method earns most of the points. You are scored on every part; blank space earns zero while a sensible attempt may earn something.</p>
<div class="box trap"><b>Traps.</b> (1) Plugging in numbers early and then being unable to answer "what if the mass doubles?" (2) Writing a free-body-diagram force that does not exist ("force of motion"). (3) Explaining with vague words ("because of inertia") without connecting to the situation. (4) Not stating the sign convention, then losing a sign. (5) Leaving out units.</div>
<p><b>Time.</b> The FRQ section allows roughly 25 minutes per question. Spend the first minute on reading and sketching, and leave 2 minutes at the end for unit and limit checks.</p>`}
  ],
  examples:[
  {id:"x1", title:"Mass, weight and the scale in an elevator", problem:String.raw`<p>A person of mass 60 kg stands on a bathroom scale. (a) What are the person's mass and weight on Earth ($g=10$ m/s$^2$) and on the Moon ($g_\text{Moon}=1.6$ m/s$^2$)? (b) On Earth the person rides in an elevator that is speeding up upward at $2.0$ m/s$^2$. What does the scale read (in newtons)? Draw the FBD in words.</p>`,
   solution:String.raw`<p>(a) Mass is 60 kg in both places. Weight: Earth $mg=60(10)=600$ N; Moon $60(1.6)=96$ N.</p>
<p>(b) The forces on the person: the weight $mg$ (down) and the scale's push $N$ (up). The scale reads $N$. The person accelerates upward at $a=2.0$ m/s$^2$, so by $F_\text{net}=ma$:</p>
$$N-mg=ma\ \Rightarrow\ N=m(g+a)=60(10+2.0)=720\ \text{N}.$$
<p>The scale reads more than the true weight (600 N) because the scale must push up harder than gravity pulls down to accelerate the person upward. If the elevator were moving upward at <i>constant</i> speed, $a=0$ and $N=600$ N; if accelerating downward at 2.0, $N=60(8)=480$ N. In free fall ($a=g$ downward) the scale reads zero: "weightlessness" is the absence of normal force, not of gravity.</p>`},
  {id:"x2", title:"Block on a frictionless incline", problem:String.raw`<p>A 5.0 kg block rests on a frictionless incline of angle $30^\circ$ (use $g=10$ m/s$^2$). (a) Find the components of its weight along and perpendicular to the incline. (b) Find the normal force. (c) Find the block's acceleration down the slope.</p>`,
   solution:String.raw`<p>Weight $mg=50$ N. (a) Along the slope: $mg\sin30^\circ=50(0.5)=25$ N, pointing down the slope. Perpendicular: $mg\cos30^\circ=50(0.866)=43.3$ N, pointing into the surface.</p>
<p>(b) There is no acceleration perpendicular to the surface, so the forces there balance: $N=mg\cos30^\circ=43.3$ N.</p>
<p>(c) Along the slope, the only force is the $25$ N component: $ma=25\Rightarrow a=25/5.0=5.0$ m/s$^2$. In general $a=g\sin\theta$, independent of mass. Check limits: $\theta\to0$ gives $a\to0$; $\theta\to90^\circ$ gives $a\to g$. &#10003;</p>`},
  {id:"x3", title:"Energy as bookkeeping", problem:String.raw`<p>A ball of mass $m$ is dropped from rest from a height $h=5.0$ m (use $g=10$ m/s$^2$, ignore air resistance). (a) Find the speed just before it hits the ground. (b) Would the speed change if the ball instead slid down a frictionless ramp starting from the same height? (c) What if the ball's mass doubled?</p>`,
   solution:String.raw`<p>(a) The system loses potential energy $mgh$ and gains kinetic energy $\tfrac12mv^2$: $mgh=\tfrac12mv^2\Rightarrow v=\sqrt{2gh}=\sqrt{2(10)(5.0)}=10$ m/s.</p>
<p>(b) No. The normal force from a frictionless ramp is perpendicular to the motion, so it does no work; only gravity transfers energy, and gravity only cares about the height change. The speed at the bottom is again 10 m/s (though the time to get there is longer).</p>
<p>(c) No. $m$ canceled. All objects dropped from the same height in the absence of air resistance arrive with the same speed. This is exactly why a hammer and a feather fall together on the Moon.</p>`},
  {id:"x4", title:"Translating words into equations", problem:String.raw`<p>A block of mass $m$ is released from rest on a frictionless curved track at height $h$ above a horizontal floor. At the bottom it slides onto a rough horizontal section where the coefficient of kinetic friction is $\mu$. (a) Derive an expression for the distance $d$ the block slides on the rough section before stopping. (b) Evaluate it for $h=1.25$ m and $\mu=0.25$. (c) Check the result with limiting cases.</p>`,
   solution:String.raw`<p><b>Translate:</b> frictionless track $\Rightarrow$ no energy loss on the way down; on the flat section the normal force equals $mg$ so friction is $f=\mu N=\mu mg$, and it does work $-fd$. The block stops, so its final kinetic energy is zero.</p>
<p><b>Energy ledger:</b> start with $U=mgh$ and $K=0$; end with $K=0$; the energy has become thermal energy equal to the friction work:</p>
$$mgh=\mu mg\,d\ \Rightarrow\ d=\frac{h}{\mu}.$$
<p>(b) $d=1.25/0.25=5.0$ m.</p>
<p>(c) <b>Units:</b> $h/\mu$ is meters since $\mu$ is dimensionless. &#10003; <b>Limits:</b> $\mu\to0$ gives $d\to\infty$ (no friction, the block never stops). &#10003; $h\to0$ gives $d\to0$ (no energy to dissipate). &#10003; Doubling $h$ doubles $d$. The mass canceled: friction is proportional to $m$ and so is the energy, so a heavier block slides the same distance.</p>`}
  ],
  mcq:[
  {id:"q1", q:String.raw`<p>An astronaut travels from Earth to the Moon, where the gravitational field is about one-sixth of Earth's. Compared with her values on Earth, on the Moon her</p>`, choices:["mass and weight are both unchanged","mass is unchanged and weight is about one-sixth as large","mass is about one-sixth as large and weight is unchanged","mass and weight are both about one-sixth as large","mass and weight are both zero"], a:1,
   why:String.raw`<p>Mass is the amount of matter (inertia), so it does not depend on location. Weight $=mg$ depends on the local field, and $g$ is a sixth as large on the Moon. A common slip is to say the astronaut "loses mass".</p>`},
  {id:"q2", q:String.raw`<p>A hockey puck glides at a constant 3 m/s in a straight line over very smooth (frictionless) ice. The net horizontal force on the puck is</p>`, choices:["zero","a forward force of constant size that keeps it moving","equal to its weight","equal to $mv$","equal to $mg$ in the forward direction"], a:0,
   why:String.raw`<p>Constant velocity means zero acceleration, so the net force is zero (Newton's first law). No force is needed to keep an object moving; forces are needed to change its velocity.</p>`},
  {id:"q3", q:String.raw`<p>A heavy truck collides head-on with a small car. During the collision, the magnitude of the force of the truck on the car, compared with the magnitude of the force of the car on the truck, is</p>`, choices:["larger","smaller","equal","larger, but only if the truck is moving faster","unknowable without the masses"], a:2,
   why:String.raw`<p>Newton's third law: the two forces are always equal in magnitude and opposite in direction, whatever the masses. The car is damaged more because the same force produces a much larger acceleration on the lighter object ($a=F/m$).</p>`},
  {id:"q4", q:String.raw`<p>A 50 kg person stands on a scale in an elevator that is accelerating upward at 2.0 m/s$^2$. Taking $g=10$ m/s$^2$, the scale reads</p>`, choices:["400 N","500 N","600 N","700 N","100 N"], a:2,
   why:String.raw`<p>$N-mg=ma\Rightarrow N=m(g+a)=50(12)=600$ N. The reading is larger than the true weight (500 N), because the scale must push up with more than $mg$ to accelerate the person upward; 400 N is what the scale reads when accelerating downward at 2.0 m/s$^2$.</p>`},
  {id:"q5", q:String.raw`<p>A block slides down a rough incline. Which list gives all the forces acting <i>on the block</i> (ignoring air resistance)?</p>`, choices:["weight, normal force, friction directed up the slope","weight, normal force, friction directed up the slope, and a force of motion directed down the slope","weight and normal force only","weight, normal force, and friction directed down the slope","weight, normal force, friction directed up the slope, and the net force"], a:0,
   why:String.raw`<p>There are three forces: gravity, the surface's normal push, and friction, which opposes the sliding, so it points up the slope for a block sliding down. A "force of motion" does not exist, and the net force is the sum of the arrows, not another arrow.</p>`},
  {id:"q6", q:String.raw`<p>A rock is dropped from rest from a height of 20 m. Ignoring air resistance and using $g=10$ m/s$^2$, its speed just before hitting the ground is</p>`, choices:["10 m/s","14 m/s","20 m/s","40 m/s","200 m/s"], a:2,
   why:String.raw`<p>$v=\sqrt{2gh}=\sqrt{2(10)(20)}=\sqrt{400}=20$ m/s. The value 200 is $2gh$ without the square root.</p>`},
  {id:"q7", q:String.raw`<p>The gravitational field strength near the Earth's surface is about 10 N/kg. What force does the Earth exert on a 3 kg object near its surface?</p>`, choices:["3 N","10 N","13 N","30 N","0.3 N"], a:3,
   why:String.raw`<p>Field is force per unit mass, so the force is the field times the mass: $F=mg=3\times10=30$ N, the weight.</p>`},
  {id:"q8", q:String.raw`<p>Two small charged spheres a distance $r$ apart exert a force of magnitude $F$ on each other. If the distance is doubled to $2r$ and one of the charges is also doubled, the new force has magnitude</p>`, choices:["$F/4$","$F/2$","$F$","$2F$","$F/8$"], a:1,
   why:String.raw`<p>$F\propto q_1q_2/r^2$. Doubling $q_1$ multiplies $F$ by 2; doubling $r$ multiplies it by $1/4$. Net factor $2/4=1/2$.</p>`},
  {id:"q9", q:String.raw`<p>A block of mass $m$ on a frictionless table is connected by a light string over an ideal pulley to a hanging mass $M$. A student derives candidate formulas for the block's acceleration $a$. Which formula gives $a\to g$ when $M\gg m$ and $a\to0$ when $M\to0$?</p>`, choices:["$a=\\dfrac{Mg}{M+m}$","$a=\\dfrac{mg}{M+m}$","$a=\\dfrac{(M-m)g}{M+m}$","$a=\\dfrac{Mg}{m}$","$a=\\dfrac{(M+m)g}{M}$"], a:0,
   why:String.raw`<p>Only $Mg/(M+m)$ passes both: it tends to $g$ for $M\gg m$ and to 0 for $M\to0$. $mg/(M+m)$ goes to 0 for large $M$; $(M-m)g/(M+m)$ goes to $-g$ for $M\to0$; $Mg/m$ blows up for large $M$; $(M+m)g/M$ blows up for $M\to0$. Limiting-case checks like this are quick and the AP rewards them.</p>`},
  {id:"q10", q:String.raw`<p>On the AP exam, a question that says "<b>derive</b>" an expression expects the response to</p>`, choices:["begin from a fundamental law or definition and show the algebraic steps leading to the requested expression","give only the final numerical value","consist of a sketch only","state the final formula, as found on the equation sheet","use numbers from the start rather than symbols"], a:0,
   why:String.raw`<p>A derivation shows the logical path from a basic principle to the result. Quoting the final formula or giving only a number does not show reasoning, and it is generally not enough for credit.</p>`},
  {id:"q11", q:String.raw`<p>Treating an object as a point particle is <i>least</i> appropriate for answering which question?</p>`, choices:["How long does a car take to drive 300 km between two cities?","How far does a thrown baseball travel before landing?","How does Earth's orbit around the Sun change if the Sun's mass doubles?","How fast does a basketball spin as it rolls down a ramp?","How long does a small steel ball take to fall 2 m?"], a:3,
   why:String.raw`<p>Spinning and rolling involve the object's extent and the distribution of its mass, which a point cannot represent. In the other cases the size of the object is tiny compared with the distances involved, so the point model works.</p>`}
  ],
  frq:[
  {id:"f1", type:"Qualitative/quantitative translation", title:"A block on a table pulled by a hanging mass",
   prompt:String.raw`<p>A block of mass $m$ rests on a horizontal table. It is connected to a hanging block of mass $M$ by a light string that passes over a small pulley at the edge of the table, as shown. The block is released from rest.</p>
<svg class="fig" viewBox="0 0 300 190" width="300" role="img" aria-label="A block of mass m on a horizontal table is connected by a string over a pulley at the table edge to a block of mass M hanging below">
<rect x="20" y="67" width="190" height="14" fill="none" stroke="currentColor"/>
<rect x="90" y="42" width="40" height="25" fill="none" stroke="currentColor"/><text x="104" y="59">m</text>
<line x1="130" y1="55" x2="220" y2="55" stroke="currentColor"/><circle cx="220" cy="65" r="10" fill="none" stroke="currentColor"/>
<line x1="230" y1="65" x2="230" y2="118" stroke="currentColor"/><rect x="212" y="118" width="36" height="32" fill="none" stroke="currentColor"/><text x="224" y="139">M</text></svg>
<p>(a) State two modeling assumptions that allow you to treat the string and pulley simply.<br>
(b) Draw and label free-body diagrams for each block, with the forces drawn as arrows from a dot.<br>
(c) Derive expressions for the magnitude of the acceleration $a$ of the blocks and the tension $T$ in the string, in terms of $m$, $M$ and $g$. Neglect friction.<br>
(d) Consider two limits: (i) $M\to\infty$ and (ii) $m\to\infty$. For each, state what your expressions give for $a$ and $T$ and explain why the result makes physical sense.<br>
(e) Calculate $a$ and $T$ for $m=2.0$ kg, $M=3.0$ kg, $g=10$ m/s$^2$.<br>
(f) Explain, using the physics of the hanging block, why $T$ must be less than $Mg$.<br>
(g) The hanging block descends a distance $d=1.0$ m from rest. Use conservation of energy to find the speed of the blocks, and verify that it agrees with your kinematics.</p>`,
   pts:[
    {p:1,d:"First valid assumption (e.g. string massless/inextensible, so tension is uniform and both blocks have the same acceleration magnitude)"},
    {p:1,d:"Second valid assumption (e.g. pulley massless and frictionless, so it only redirects the tension; table frictionless)"},
    {p:1,d:"FBD for $m$: weight down, normal force up, tension horizontal toward the pulley; no extra forces"},
    {p:1,d:"FBD for $M$: weight down, tension up; no extra forces"},
    {p:1,d:"Newton's second law for block $m$: $T=ma$"},
    {p:1,d:"Newton's second law for block $M$: $Mg-T=Ma$"},
    {p:1,d:"Solves: $a=Mg/(M+m)$ and $T=mMg/(M+m)$"},
    {p:1,d:"$M\\to\\infty$: $a\\to g$ (and $T\\to mg$), with a physical explanation (the hanging block essentially in free fall)"},
    {p:1,d:"$m\\to\\infty$: $a\\to0$ and $T\\to Mg$, with a physical explanation (the heavy block barely accelerates, so the string just holds the hanging block's weight)"},
    {p:1,d:"$a=6.0$ m/s$^2$ and $T=12$ N, with units"},
    {p:1,d:"Hanging block accelerates downward, so net force on it is downward: $Mg-T=Ma>0$, hence $T<Mg$"},
    {p:1,d:"Energy: $Mgd=\\tfrac12(M+m)v^2\\Rightarrow v=\\sqrt{2Mgd/(M+m)}=3.5$ m/s, consistent with $v^2=2ad$"}],
   solution:String.raw`<p>(a) Assume (1) a massless, inextensible string, so the tension is the same everywhere along it and both blocks move together with equal speeds and accelerations; (2) a massless, frictionless pulley, which only changes the direction of the tension; and the table is frictionless.</p>
<p>(b) Block $m$ (dot): $mg$ downward, $N$ upward, $T$ horizontal toward the pulley; $N$ and $mg$ have equal length. Block $M$ (dot): $Mg$ downward (longer) and $T$ upward.</p>
<p>(c) Take the direction of motion as positive (to the right for $m$, downward for $M$). Block $m$: the only unbalanced force is $T$, so $T=ma$. Block $M$: $Mg-T=Ma$. Add: $Mg=(M+m)a$, so</p>
$$a=\frac{Mg}{M+m},\qquad T=ma=\frac{mMg}{M+m}.$$
<p>(d) (i) $M\to\infty$: $a\to g$ and $T\to mg$. The hanging block is so heavy that the little block hardly matters and it falls as if free. (ii) $m\to\infty$: $a\to0$ and $T\to Mg$. The very heavy block hardly accelerates, so the hanging block stays nearly at rest, and the string tension just balances $Mg$.</p>
<p>(e) $a=3.0(10)/5.0=6.0$ m/s$^2$; $T=2.0(6.0)=12$ N. Check with the other equation: $Mg-T=30-12=18$ N $=Ma=3.0(6.0)$. &#10003;</p>
<p>(f) The hanging block speeds up downward, so the net force on it must point downward: $Mg-T>0$, so $T<Mg$. Here $12<30$ N. If $T$ were equal to $Mg$, the hanging block would not accelerate.</p>
<p>(g) Both blocks gain speed together; the only energy change is the hanging block's loss of potential energy: $Mgd=\tfrac12(M+m)v^2\Rightarrow v=\sqrt{\dfrac{2Mgd}{M+m}}=\sqrt{\dfrac{2(3.0)(10)(1.0)}{5.0}}=\sqrt{12}=3.5$ m/s. Kinematics: $v^2=2ad=2(6.0)(1.0)=12$, the same. &#10003;</p>`}
  ]
});
