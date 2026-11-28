PH.unit({
  id:"m2", course:"mech", order:40, hours:14,
  title:"Mechanics 2: Force and Translational Dynamics",
  blurb:"Newton's laws as a working tool: draw the forces, write $\\sum\\vec F=m\\vec a$ along each axis, and solve. Friction, pulleys, circular motion, drag (as an ODE), and forces that change with time.",
  needs:["m1"],
  goals:[
    "State Newton's three laws precisely, including what an inertial frame is and why the first law is not just a special case of the second",
    "Draw a correct free-body diagram and turn it into component equations $\\sum F_x=ma_x$, $\\sum F_y=ma_y$",
    "Distinguish mass from weight and explain what the normal force is (including apparent weight in an accelerating elevator)",
    "Use $f_s\\le\\mu_sN$ and $f_k=\\mu_kN$ on flat surfaces and inclines, and decide which regime applies",
    "Solve connected-body, pulley and Atwood problems, choosing sensible systems and sign conventions",
    "Treat circular motion as $\\sum F_{\\text{toward center}}=mv^2/r$: flat, banked, vertical and conical-pendulum cases",
    "Solve $m\\,dv/dt=mg-bv$ for $v(t)$, find terminal velocity and $\\tau=m/b$, and set up the quadratic-drag equation",
    "Integrate $a=F(t)/m$ and $v\\,dv=(F(x)/m)\\,dx$ when the force is not constant",
    "Solve equilibrium problems with cables at angles, and find the best angle to drag a crate",
    "Analyze stacked blocks, accelerating surfaces and pushed chains, and read the friction-versus-force graph",
    "Handle crests, dips, turntables, rotors and nonuniform circular motion (tangential plus radial acceleration)"
  ],
  lessons:[
  {id:"l1", title:"Newton's laws, inertial frames, mass and weight", videos:[{title:"2.1a Newton's Second Law of Motion, Forces, Free Body Diagrams - AP Physics C (Mechanics)",url:"https://www.youtube.com/watch?v=vnPHeTqQ1KQ",src:"YouTube (AP Physics C series; channel not confirmed)",note:"AP Physics C framing of the second law and force diagrams."}], html:String.raw`
<p>Kinematics (Unit 1) described motion. Dynamics explains <i>why</i> motion changes. The new quantity is <b>force</b>: a push or pull exerted by one object on another, measured in newtons ($1\ \text{N}=1\ \text{kg m/s}^2$). Forces are vectors, and they add.</p>
<div class="box key"><b>First law (inertia).</b> There exist reference frames, called <b>inertial frames</b>, in which an object with no net force on it moves with constant velocity (possibly zero).</div>
<p>The first law is not merely "the second law with $a=0$". It asserts that inertial frames exist, and it tells you which frames the second law may be used in. A frame that accelerates relative to an inertial frame (a braking car, a spinning carousel) is <b>non-inertial</b>: a coffee cup on the dashboard seems to accelerate forward with no force on it. Any frame moving at constant velocity relative to an inertial frame is also inertial. For this course the ground (and anything moving uniformly relative to it) counts as inertial. Analyze in an inertial frame and you never need "fictitious forces".</p>
<div class="box key"><b>Second law.</b> For an object of constant mass $m$ in an inertial frame,
$$\sum\vec F=m\vec a\qquad\Longleftrightarrow\qquad \sum F_x=ma_x,\ \ \sum F_y=ma_y$$
where $\sum\vec F$ is the vector sum of every force acting <i>on</i> the object. (The more general form $\sum\vec F=d\vec p/dt$ comes in Unit 4.)</div>
<p>Read this as a recipe: sum <i>only</i> forces on the chosen object, never count "$ma$" as a force, and treat each axis separately. Because axes are independent you may pick them cleverly (along an incline, along the radius of a circle).</p>
<div class="box key"><b>Third law.</b> If object A exerts a force on object B, then B exerts on A a force of equal magnitude and opposite direction. The two forces are the same kind of force and act on <i>different</i> objects, so they never appear together in one free-body diagram.</div>
<div class="box trap"><b>Trap:</b> "The normal force is the reaction to gravity." No. The reaction to Earth pulling on a book is the book pulling on Earth. The reaction to the table pushing up on the book is the book pushing down on the table. Weight and normal force are equal for a resting book because its acceleration is zero (second law), not because of the third law.</div>
<p><b>Mass vs weight.</b> <b>Mass</b> $m$ measures an object's resistance to acceleration (inertia); it is the same everywhere. <b>Weight</b> is the gravitational force on the object near a planet: $\vec F_g=m\vec g$, magnitude $mg$, toward the planet's center. Near Earth $g\approx10$ m/s² (we use 10 throughout; the more exact value is 9.8). A 5 kg object weighs 50 N on Earth and about 8 N on the Moon, but is 5 kg in both places.</p>
<p>Gravity's "charge" is mass itself, the same quantity as inertia. That is why every object falls with the same acceleration when gravity is the only force: $mg=ma\Rightarrow a=g$.</p>`},

  {id:"l2", title:"Free-body diagrams and contact forces", videos:[{title:"AP Physics C - Newton's Laws & Circular Motion (playlist)",url:"https://www.youtube.com/playlist?list=PLPN8ldQPmg2fXr-cHhbnjpdhZbKbCLpkv",src:"YouTube (AP Physics C playlist; channel not confirmed)",note:"Covers free-body diagrams, normal and tension force."}], html:String.raw`
<p>A <b>free-body diagram (FBD)</b> shows one object (a dot or box) and every force acting <i>on it</i>, as arrows drawn from the object. Nothing else. It is the most valuable habit in this unit.</p>
<ol>
<li>Isolate one object. Ask what touches it (each contact can supply a force) and what fields act (gravity).</li>
<li>Draw each force with its true direction and label it by type: $N$, $f$, $T$, $mg$.</li>
<li>Choose axes along the motion (or the expected acceleration). Resolve tilted forces into components.</li>
<li>Write $\sum F=ma$ for each axis.</li>
</ol>
<svg class="fig" viewBox="0 0 330 200" width="330" role="img" aria-label="Free body diagram of a block sliding down a rough incline of angle theta: weight mg straight down, normal force N perpendicular to the surface pointing up and away, and kinetic friction f pointing up the slope">
<defs><marker id="m2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<polygon points="30,180 290,180 290,30" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="1.5"/>
<path d="M70,180 A40,40 0 0 0 64.6,160" fill="none" stroke="currentColor"/><text x="76" y="174" font-size="12">θ</text>
<g transform="translate(150,111) rotate(-30)"><rect x="-22" y="-32" width="44" height="32" fill="currentColor" fill-opacity=".18" stroke="currentColor"/></g>
<g stroke="currentColor" stroke-width="2" fill="none">
<line x1="142" y1="88" x2="142" y2="140" marker-end="url(#m2a)"/>
<line x1="142" y1="88" x2="114" y2="40" marker-end="url(#m2a)"/>
<line x1="142" y1="88" x2="177" y2="68" marker-end="url(#m2a)"/></g>
<text x="148" y="142" font-size="13">mg</text><text x="100" y="42" font-size="13">N</text><text x="181" y="68" font-size="13">f</text>
</svg>
<p><b>Normal force $N$.</b> The component of a contact force perpendicular to a surface. It takes whatever value is needed to keep the object from accelerating <i>into</i> the surface. It is not "$mg$" by definition: on a level floor with nothing else vertical $N=mg$; on a $30^\circ$ incline $N=mg\cos30^\circ$; if you also pull upward on the object, $N$ shrinks. Get $N$ from the perpendicular-axis equation, always.</p>
<p><b>Tension $T$.</b> A force transmitted along a rope or string, directed away from the object along the rope. For an ideal (massless) rope over an ideal (frictionless, massless) pulley, $T$ is the same everywhere along the rope. If the rope has mass, or the pulley has rotational inertia (Unit 5), the tension differs on the two sides.</p>
<p><b>Apparent weight and the elevator.</b> A scale reads the normal force $N$ it exerts on you. In an elevator with acceleration $a$ (positive up) you accelerate with it: $N-mg=ma$, so
$$N=m(g+a).$$
Accelerating upward: you feel heavier. Accelerating <i>downward</i> (including moving up while slowing down): $N=m(g-|a|)$, lighter. In free fall $a=-g$ and $N=0$: apparent weightlessness. Only the <i>acceleration</i> matters, not the direction of the velocity: an elevator at constant velocity, up or down, reads exactly $mg$.</p>
<p>Viewed from inside the elevator (a non-inertial frame) you could say "an extra downward pseudo-force $ma$ acts on everything". That is a bookkeeping device. In the ground frame, which we use, nothing new appears: the floor simply must push harder to accelerate you.</p>
<div class="box trap"><b>Trap:</b> Do not draw "centripetal force", "force of motion" or "$ma$" on an FBD. They are not forces on the object. Draw only real interactions: gravity, contact (normal, friction, tension, drag).</div>`},

  {id:"l3", title:"Friction, inclines, pulleys and connected bodies", videos:[{title:"Search: friction inclines pulleys Atwood machine AP Physics C",url:"https://www.youtube.com/results?search_query=friction+inclines+pulleys+Atwood+machine+AP+Physics+C",src:"YouTube search",note:"Pick a worked-example video on connected bodies and friction."}], html:String.raw`
<p><b>Friction</b> is the component of a contact force parallel to the surface, opposing relative sliding (or its tendency). Empirically:</p>
$$f_s\le\mu_sN\ \ (\text{static, no slipping}),\qquad f_k=\mu_kN\ \ (\text{kinetic, sliding}),\qquad \mu_k<\mu_s\ \text{usually.}$$
<p>Static friction is <i>adjustable</i>: it takes whatever value (up to $\mu_sN$) keeps the surfaces from slipping. If you push gently on a heavy crate and it does not move, $f_s$ equals your push. Only at the verge of slipping is $f_s=\mu_sN$. Kinetic friction has the fixed magnitude $\mu_kN$ once sliding, independent of speed and contact area (a model, but a good one).</p>
<div class="box key"><b>Incline.</b> Use axes along and perpendicular to the slope. Gravity splits into $mg\sin\theta$ (along, downhill) and $mg\cos\theta$ (into the surface). Then $N=mg\cos\theta$, and for a block sliding down, $a=g(\sin\theta-\mu_k\cos\theta)$. A block begins to slip when $\tan\theta=\mu_s$; the mass cancels.</div>
<div class="box trap"><b>Trap:</b> Friction opposes the <i>sliding</i> (relative motion of the surfaces), not the applied force. A block sliding up an incline has friction pointing down the slope; the same block sliding back down has friction pointing up the slope, so the acceleration magnitude differs going up and coming down.</div>
<p><b>Connected bodies.</b> Objects joined by a taut, inextensible rope share the magnitude of their acceleration along the rope. Write $\sum F=ma$ for each object with a consistent sign convention (define positive as "the direction the system accelerates", guessing if necessary), then solve the equations together. A negative $a$ just means you guessed backwards. Always check that the rope stays taut ($T>0$).</p>
<svg class="fig" viewBox="0 0 300 195" width="300" role="img" aria-label="Atwood machine: masses m1 and m2 hanging on opposite sides of a pulley, tension T upward on each mass and weights m1 g and m2 g downward">
<defs><marker id="m2b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<line x1="90" y1="15" x2="210" y2="15" stroke="currentColor" stroke-width="3"/><line x1="150" y1="15" x2="150" y2="30" stroke="currentColor"/>
<circle cx="150" cy="48" r="18" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="132" y1="48" x2="132" y2="135" stroke="currentColor"/><line x1="168" y1="48" x2="168" y2="105" stroke="currentColor"/>
<rect x="114" y="135" width="36" height="30" fill="currentColor" fill-opacity=".18" stroke="currentColor"/><text x="125" y="155" font-size="13">m₁</text>
<rect x="150" y="105" width="36" height="30" fill="currentColor" fill-opacity=".18" stroke="currentColor"/><text x="161" y="125" font-size="13">m₂</text>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="120" y1="135" x2="120" y2="95" marker-end="url(#m2b)"/><line x1="180" y1="105" x2="180" y2="70" marker-end="url(#m2b)"/>
<line x1="132" y1="165" x2="132" y2="190" marker-end="url(#m2b)"/><line x1="168" y1="135" x2="168" y2="175" marker-end="url(#m2b)"/></g>
<text x="102" y="112" font-size="12">T</text><text x="186" y="85" font-size="12">T</text><text x="92" y="188" font-size="12">m₁g</text><text x="174" y="180" font-size="12">m₂g</text>
</svg>
<p><b>Atwood machine</b> ($m_2>m_1$, ideal rope and pulley). Take positive as "$m_2$ down, $m_1$ up":</p>
$$m_2g-T=m_2a,\qquad T-m_1g=m_1a\ \Rightarrow\ a=\frac{m_2-m_1}{m_1+m_2}\,g,\qquad T=\frac{2m_1m_2}{m_1+m_2}\,g.$$
<p>Sanity limits: $m_1=m_2\Rightarrow a=0,\ T=mg$; $m_1\to0\Rightarrow a\to g,\ T\to0$ (free fall). Always run such checks.</p>
<p><b>Choosing a system.</b> You may draw one FBD around several objects. Internal forces (tension) cancel in pairs by the third law and you get the total directly: for the Atwood machine, $(m_2-m_1)g=(m_1+m_2)a$. Use the system for $a$, then a single object for the internal force. Example: blocks $m_1$ (trailing) and $m_2$ (front) on a frictionless table, $F$ pulling on $m_2$: $a=F/(m_1+m_2)$, and the rope force on the trailing block is $T=m_1a$.</p>`},

  {id:"l4", title:"Circular motion", videos:[{title:"Lec 05: Uniform Circular Motion",url:"https://www.youtube.com/watch?v=Usg_IPT5gJQ",src:"MIT 8.01 (Walter Lewin)",note:"Centripetal acceleration and force; derivation-style lecture."}], html:String.raw`
<p>An object moving in a circle of radius $r$ at speed $v$ has an acceleration of magnitude
$$a_c=\frac{v^2}{r}=\omega^2r$$
directed toward the center. (Even at constant speed the <i>direction</i> of $\vec v$ changes, so $\vec a\ne0$.) Newton's second law then demands a net inward force:</p>
<div class="box key">$\displaystyle\sum F_{\text{toward center}}=\frac{mv^2}{r}$. "Centripetal force" is not a new force. It is the name for the net inward component of the real forces (tension, gravity, normal, friction). Never draw it as a separate arrow on the FBD.</div>
<p><b>Procedure.</b> Draw the real forces. Choose one axis pointing toward the <i>center</i> of the circle (not necessarily horizontal!) and one perpendicular. Set the inward sum equal to $mv^2/r$ and the perpendicular sum equal to the perpendicular acceleration (often zero).</p>
<p><b>Flat curve.</b> Friction is the only inward force, and it is static (the tire is not sliding along the road): $f_s=mv^2/r\le\mu_smg$, so $v_{max}=\sqrt{\mu_sgr}$. Mass cancels.</p>
<p><b>Banked curve, no friction.</b> The normal force is tilted inward by the bank angle $\theta$; its horizontal component supplies the centripetal force (the center is <i>horizontal</i> from the car):</p>
$$N\cos\theta=mg,\qquad N\sin\theta=\frac{mv^2}{r}\ \Rightarrow\ \tan\theta=\frac{v^2}{rg}.$$
<svg class="fig" viewBox="0 0 320 170" width="320" role="img" aria-label="Car on a banked curve seen from behind. The surface rises toward the right. Normal force N is perpendicular to the surface, weight mg is straight down, and the net force is a horizontal dashed arrow toward the center of the circle on the left">
<defs><marker id="m2c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<polygon points="40,150 290,150 290,70" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="1.5"/>
<g transform="translate(165,110) rotate(-17.7)"><rect x="-20" y="-20" width="40" height="20" fill="currentColor" fill-opacity=".18" stroke="currentColor"/></g>
<g stroke="currentColor" stroke-width="2" fill="none">
<line x1="162" y1="100" x2="162" y2="148" marker-end="url(#m2c)"/>
<line x1="162" y1="100" x2="146" y2="48" marker-end="url(#m2c)"/>
<line x1="162" y1="100" x2="108" y2="100" stroke-dasharray="5 4" marker-end="url(#m2c)"/></g>
<text x="168" y="145" font-size="13">mg</text><text x="130" y="48" font-size="13">N</text><text x="62" y="94" font-size="12">net F (toward center)</text>
<text x="75" y="145" font-size="12">θ</text>
</svg>
<p>With friction at the maximum speed (friction acting down the slope, $f=\mu_sN$): $v^2_{max}=rg\,\dfrac{\tan\theta+\mu_s}{1-\mu_s\tan\theta}$. For $\theta=0$ it reduces to the flat-curve result.</p>
<p><b>Vertical circle (ball on a string, speed varies).</b> At the top, tension and gravity both point inward: $T+mg=mv^2/r$. At the bottom, tension points inward and gravity outward: $T-mg=mv^2/r$. The string can only pull, so $T\ge0$ at the top requires $v_{top}\ge\sqrt{gr}$. At the bottom $T$ is larger than at the top: the string holds the weight <i>and</i> turns the ball. (Speed changes along the path; the energy relation connecting $v_{top}$ and $v_{bottom}$ is Unit 3.)</p>
<p><b>Conical pendulum.</b> A mass on a string of length $L$ moves in a horizontal circle with the string at angle $\theta$ from the vertical. Radius $r=L\sin\theta$. Vertical: $T\cos\theta=mg$. Horizontal (inward): $T\sin\theta=mv^2/r=m\omega^2r$. Dividing,
$$\tan\theta=\frac{v^2}{rg},\qquad T=\frac{mg}{\cos\theta},\qquad \omega^2=\frac{g}{L\cos\theta}.$$</p>
<div class="box trap"><b>Trap:</b> An object is not "thrown outward" at the top of a loop. If the string is cut it moves off along the <b>tangent</b> (first law). Also: the inward axis for a conical pendulum or banked road is horizontal, so the normal force and tension must be resolved, and $N\ne mg$.</div>`},

  {id:"l5", title:"Forces that vary: F(t), F(x), and drag", videos:[{title:"Terminal velocity differential equation",url:"https://www.youtube.com/watch?v=FwGA8zb_CWM",src:"YouTube (channel not confirmed)",note:"Derives and solves the falling-with-air-resistance ODE."},{title:"Solving Differential Equation for Falling Object with Air Resistance",url:"https://www.youtube.com/watch?v=cbubFX-qL2U",src:"YouTube (channel not confirmed)",note:"Drag proportional to velocity (linear case)."}], html:String.raw`
<p>When the force is not constant, $a=F/m$ is not constant and the kinematic formulas fail. Go back to calculus (Unit 1):</p>
<p><b>Force as a function of time.</b> $a(t)=F(t)/m$, so
$$v(t)=v_0+\frac1m\int_0^tF(t')\,dt',\qquad x(t)=x_0+\int_0^tv(t')\,dt'.$$
The integral $\int F\,dt$ is called <b>impulse</b> (Unit 4). Example: $F=F_0t/T$ gives $v=v_0+F_0t^2/(2mT)$.</p>
<p><b>Force as a function of position.</b> Use $a=v\,dv/dx$: $m\,v\,dv=F(x)\,dx$, so $\tfrac12mv^2-\tfrac12mv_0^2=\int F\,dx$ (work-energy, Unit 3). Example: a spring-like force $F=-kx$ integrates to $v^2=v_0^2-k(x^2-x_0^2)/m$.</p>
<p><b>Force as a function of velocity: drag.</b> A body moving through a fluid feels a resistive force opposite to its velocity. Two common models: <b>linear</b> (slow, viscous) $\vec F_d=-b\vec v$, and <b>quadratic</b> (fast, turbulent) $F_d=-cv^2$ opposite to $\vec v$. Take down as positive for an object dropped from rest:</p>
$$m\frac{dv}{dt}=mg-bv\ \Longrightarrow\ \frac{dv}{dt}=\frac{v_t-v}{\tau},\qquad v_t=\frac{mg}{b},\quad \tau=\frac mb.$$
<p>$v_t$ is the <b>terminal velocity</b> (net force zero, $a=0$) and $\tau$ is the <b>time constant</b>. Separate variables:</p>
$$\int_0^v\frac{dv'}{v_t-v'}=\int_0^t\frac{dt'}{\tau}\ \Rightarrow\ -\ln\frac{v_t-v}{v_t}=\frac t\tau\ \Rightarrow\ v(t)=v_t\left(1-e^{-t/\tau}\right).$$
<p>Then $a=\dfrac{v_t}{\tau}e^{-t/\tau}=g\,e^{-t/\tau}$ (starts at $g$, decays to 0) and the distance fallen is $y=v_t\left[t-\tau\left(1-e^{-t/\tau}\right)\right]$. At $t=\tau$ the speed is $63\%$ of $v_t$; at $3\tau$, $95\%$; at $5\tau$, $99.3\%$. It <i>never</i> exactly reaches $v_t$ in finite time. It is the same exponential as the sliding puck of Unit 1, now with gravity setting the target speed.</p>
<svg class="fig" viewBox="0 0 340 195" width="340" role="img" aria-label="Speed versus time for a falling object with drag. The solid curve for linear drag rises as one minus e to the minus t over tau toward a dashed horizontal line at terminal velocity. The dashed curve for quadratic drag, a hyperbolic tangent, rises faster at first and levels off sooner. Both start with the same slope g.">
<line x1="40" y1="160" x2="325" y2="160" stroke="currentColor"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor"/>
<line x1="40" y1="40" x2="320" y2="40" stroke="currentColor" stroke-dasharray="4 4" stroke-opacity=".6"/>
<path d="M40.0,160.0 L50.8,138.2 L61.6,120.4 L72.4,105.9 L83.2,93.9 L94.0,84.1 L104.8,76.1 L115.6,69.6 L126.4,64.2 L137.2,59.8 L148.0,56.2 L158.8,53.3 L169.6,50.9 L180.4,48.9 L191.2,47.3 L202.0,46.0 L212.8,44.9 L223.6,44.0 L234.4,43.3 L245.2,42.7 L256.0,42.2 L266.8,41.8 L277.6,41.5 L288.4,41.2 L299.2,41.0 L310.0,40.8" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M40.0,160.0 L50.8,136.3 L61.6,114.4 L72.4,95.6 L83.2,80.3 L94.0,68.6 L104.8,60.0 L115.6,53.8 L126.4,49.4 L137.2,46.4 L148.0,44.3 L158.8,42.9 L169.6,42.0 L180.4,41.3 L191.2,40.9 L202.0,40.6 L212.8,40.4 L223.6,40.3 L234.4,40.2 L245.2,40.1 L256.0,40.1 L266.8,40.1 L277.6,40.0 L288.4,40.0 L299.2,40.0 L310.0,40.0" fill="none" stroke="currentColor" stroke-width="2" stroke-dasharray="6 3"/>
<text x="14" y="44" font-size="12">v_t</text><text x="22" y="22" font-size="12">v</text><text x="316" y="177" font-size="12">t</text>
<text x="130" y="105" font-size="12">linear drag: 1 − e^(−t/τ)</text><text x="130" y="121" font-size="12">quadratic: v_t tanh(gt/v_t) (dashed)</text>
<text x="108" y="177" font-size="11">τ</text><text x="162" y="177" font-size="11">2τ</text><text x="216" y="177" font-size="11">3τ</text>
</svg>
<p>(Axes: time in units of $v_t/g$, which equals $\tau$ for linear drag. Both curves start with slope $g$ and share the same asymptote.)</p>
<p><b>Quadratic drag.</b> Now $m\,dv/dt=mg-cv^2$, a nonlinear (but separable) ODE. Define $v_t=\sqrt{mg/c}$ (set $a=0$). Then $\dfrac{dv}{dt}=g\left(1-\dfrac{v^2}{v_t^2}\right)$. Separating, $\displaystyle\int_0^v\frac{dv'}{1-v'^2/v_t^2}=gt$, giving $v_t\,\text{artanh}(v/v_t)=gt$, i.e.
$$v(t)=v_t\tanh\!\left(\frac{gt}{v_t}\right).$$
You should be able to find $v_t=\sqrt{mg/c}$, write the ODE, and sketch/describe the solution; the integral above is a good exercise and a useful check, though it may not be demanded on an exam. Note the mass dependence differs: linear $v_t\propto m$, quadratic $v_t\propto\sqrt m$.</p>
<div class="box trap"><b>Trap:</b> "Terminal velocity is reached when the drag force reaches $mg$" is right, but the object only approaches it asymptotically. Do not use $v=at$ or $v^2=2gh$ once drag matters. Also when the object is moving upward, drag points <i>downward</i>, adding to gravity, so $a$ is larger than $g$ in magnitude.</div>`},
  {id:"l6", title:"Equilibrium, tension at angles, and pulling at an angle", videos:[{title:"Search: equilibrium two cables tension angle sign hanging free body diagram",url:"https://www.youtube.com/results?search_query=equilibrium+two+cables+tension+angle+hanging+sign+free+body+diagram",src:"YouTube search",note:"Look for a worked sign-hung-by-two-cables problem."}], html:String.raw`
<p>An object is in <b>equilibrium</b> when $\sum\vec F=0$ (it is at rest, or moving at constant velocity). Because axes are independent this is two equations, $\sum F_x=0$ and $\sum F_y=0$, which is enough to find <i>two</i> unknowns. The standard unknowns are two tensions.</p>
<svg class="fig" viewBox="0 0 320 170" width="320" role="img" aria-label="A sign hangs from a knot supported by two cables attached to a ceiling. The left cable makes angle alpha with the horizontal and the right cable makes angle beta. Forces on the knot: T1 up and left along the left cable, T2 up and right along the right cable, and weight mg straight down.">
<defs><marker id="m2d" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<line x1="20" y1="12" x2="300" y2="12" stroke="currentColor" stroke-width="3"/>
<line x1="40" y1="12" x2="170" y2="82" stroke="currentColor" stroke-width="1.5"/><line x1="290" y1="12" x2="170" y2="82" stroke="currentColor" stroke-width="1.5"/>
<circle cx="170" cy="82" r="3" fill="currentColor"/>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="170" y1="82" x2="120" y2="55" marker-end="url(#m2d)"/><line x1="170" y1="82" x2="222" y2="53" marker-end="url(#m2d)"/><line x1="170" y1="82" x2="170" y2="145" marker-end="url(#m2d)"/></g>
<text x="104" y="52" font-size="13">T₁</text><text x="226" y="52" font-size="13">T₂</text><text x="176" y="140" font-size="13">mg</text>
<text x="76" y="38" font-size="12">α</text><text x="244" y="38" font-size="12">β</text>
</svg>
<p><b>Method for a knot.</b> Draw the FBD of the <i>knot</i> where the cables meet (all three forces act on it). Each tension points <i>away from the knot, along its cable</i>. Resolve each into components using the angle the cable makes with a fixed direction, and write the two equations. For cables at angles $\alpha,\beta$ above the horizontal:
$$T_1\cos\alpha=T_2\cos\beta,\qquad T_1\sin\alpha+T_2\sin\beta=mg.$$
The horizontal equation says the horizontal pulls cancel, which is why the flatter cable carries more tension. Solving: $T_1=\dfrac{mg\cos\beta}{\sin(\alpha+\beta)}$, $T_2=\dfrac{mg\cos\alpha}{\sin(\alpha+\beta)}$.</p>
<div class="box key"><b>Symmetric case.</b> Two equal cables each at angle $\theta$ above the horizontal: $2T\sin\theta=mg$, so
$$T=\frac{mg}{2\sin\theta}.$$
As $\theta\to0$ (a nearly taut, nearly horizontal line) $T\to\infty$: no cable can be pulled perfectly straight with a weight hanging in the middle. The same formula explains why pulling sideways at the middle of a taut rope (force $F$, each half at angle $\theta$ from the rope's line) makes the rope tension $T=F/(2\sin\theta)$, much larger than $F$.</div>
<div class="box trap"><b>Trap:</b> "Each cable carries half the weight." Only the vertical <i>component</i> of each tension carries half the weight; the tension itself is larger by $1/\sin\theta$. Also check which angle you were given: from the horizontal or from the vertical swaps sine and cosine.</div>
<p><b>Pulling or pushing at an angle, with friction.</b> A crate of mass $m$ is dragged at constant speed by a rope at angle $\varphi$ above the horizontal with force $F$. Now the normal force changes:
$$N+F\sin\varphi=mg\ \Rightarrow\ N=mg-F\sin\varphi,\qquad F\cos\varphi=\mu_kN.$$
Substituting, $F\cos\varphi=\mu_k(mg-F\sin\varphi)$, so
$$F(\varphi)=\frac{\mu_kmg}{\cos\varphi+\mu_k\sin\varphi}.$$
Tilting the rope upward lifts a little weight off the floor (smaller $N$, smaller friction) but wastes some of $F$ on lifting instead of pulling. There is a best angle: minimize $F$ by maximizing the denominator $D=\cos\varphi+\mu_k\sin\varphi$. $dD/d\varphi=-\sin\varphi+\mu_k\cos\varphi=0\Rightarrow\boxed{\tan\varphi=\mu_k}$, where $D_{max}=\sqrt{1+\mu_k^2}$, so
$$F_{min}=\frac{\mu_kmg}{\sqrt{1+\mu_k^2}}.$$
Physical meaning: the floor's total contact force ($N$ and $f$ combined) is tilted back from the vertical by exactly $\arctan\mu_k$. The weight and the contact force are fixed in direction, so the three-force triangle is smallest when $F$ is perpendicular to the contact force, i.e. along the line at $\varphi=\arctan\mu_k$ above horizontal.</p>
<p>If you <i>push</i> downward at angle $\varphi$ instead, $N=mg+F\sin\varphi$ grows and $F=\mu_kmg/(\cos\varphi-\mu_k\sin\varphi)$. The denominator reaches zero at $\tan\varphi=1/\mu_k$: pushing that steeply, no force can move the crate ("jamming").</p>`},

  {id:"l7", title:"Friction graphs, stacked blocks, accelerating surfaces and pushed chains", videos:[{title:"Lec 08: Friction (Walter Lewin, MIT 8.01, 1999)",url:"https://new.videolectures.net/videos/mit801f99_lewin_lec08",src:"MIT 8.01 (Walter Lewin)",note:"A full lecture on static and kinetic friction, including the tilt method for measuring the coefficient."}], html:String.raw`
<p><b>The friction curve.</b> Push horizontally on a heavy block with a force that you slowly increase from zero. Friction responds:</p>
<svg class="fig" viewBox="0 0 340 195" width="340" role="img" aria-label="Graph of friction force versus applied force. The friction force rises along a straight line of slope one while the block is at rest, reaches a peak equal to mu s N, then drops to a lower horizontal plateau equal to mu k N once the block slides.">
<line x1="40" y1="165" x2="325" y2="165" stroke="currentColor"/><line x1="40" y1="165" x2="40" y2="15" stroke="currentColor"/>
<line x1="40" y1="165" x2="170" y2="45" stroke="currentColor" stroke-width="2.5"/>
<line x1="170" y1="45" x2="170" y2="85" stroke="currentColor" stroke-width="2" stroke-dasharray="4 3"/>
<line x1="170" y1="85" x2="315" y2="85" stroke="currentColor" stroke-width="2.5"/>
<line x1="40" y1="45" x2="170" y2="45" stroke="currentColor" stroke-dasharray="2 4" stroke-opacity=".6"/>
<text x="6" y="49" font-size="12">μₛN</text><text x="6" y="89" font-size="12">μₖN</text>
<text x="70" y="120" font-size="12">static: f = F</text><text x="205" y="76" font-size="12">kinetic: f = μₖN</text>
<text x="300" y="182" font-size="12">F</text><text x="22" y="20" font-size="12">f</text>
<text x="150" y="182" font-size="11">slip</text>
</svg>
<p>While the block sits still, $f_s=F$ (slope 1: friction exactly cancels the push, so $a=0$). At $F=\mu_sN$ the block is on the verge of slipping. Once it slides, friction drops to $\mu_kN$ (for $\mu_k&lt;\mu_s$) and stays constant however hard you push. That abrupt drop is why a stuck object lurches forward. <b>Decision rule ("will it slip?"):</b> compute the friction needed to keep $a=0$; if it is at most $\mu_sN$, static friction supplies it; if not, the object slips and $f=\mu_kN$ (check the case where the kinetic value then gives the acceleration).</p>
<p><b>Stacked blocks and a block on an accelerating cart.</b> Block A (mass $m$) rests on block or cart B (mass $M$). B sits on a frictionless floor and is pulled by a horizontal force $F$ on B. The horizontal force on A is only the friction from B. Identify it carefully:</p>
<ol>
<li>If A does not slip on B, they share one acceleration $a=F/(m+M)$ (treat both as one system). A's only horizontal force is static friction from B, directed <i>forward</i>: $f=ma$. This is the only thing that accelerates A; without friction (slippery surface) A would be left behind.</li>
<li>Static friction is limited: $f\le\mu_smg$, so A stays put only while $a\le\mu_sg$. The largest force that keeps them together is $F_{max}=(m+M)\mu_sg$.</li>
<li>Beyond that A slips backward relative to B. Friction is now kinetic, $\mu_kmg$, <i>forward</i> on A (it opposes A's motion <i>relative to B</i>, which is backward) and, by the third law, equal and <i>backward</i> on B. Then $a_A=\mu_kg$ and $a_B=(F-\mu_kmg)/M$, and $a_B&gt;a_A$.</li>
</ol>
<div class="box trap"><b>Trap:</b> friction on the top block is not "opposite to the motion". A passenger standing in an accelerating bus is pushed <i>forward</i> by friction on the shoes. Friction opposes <i>relative slipping</i>, and here its job is to make A accelerate.</div>
<p><b>Contact forces in a pushed chain.</b> Blocks of masses $m_1,m_2,m_3$ touching in a line on a frictionless floor, pushed from the left by $F$ on $m_1$. All share $a=F/(m_1+m_2+m_3)$. The force between blocks 1 and 2 must accelerate everything to its right: $F_{12}=(m_2+m_3)a$; between 2 and 3: $F_{23}=m_3a$. So the contact force decreases along the chain, from $F$ at the pusher to $m_3a$ at the last block. (If the floor has a friction coefficient $\mu$ that is the same under every block, the same fractions result: $F_{12}=F(m_2+m_3)/(m_1+m_2+m_3)$, because friction is proportional to mass.) <i>Technique:</i> to find the force at one interface, take as your system everything on one side of it.</p>`},

  {id:"l8", title:"More circular motion: crests, rotors, turntables, and speeding up around a curve", videos:[{title:"Introductory Centripetal Force Problem - Car over a Hill (Flipping Physics, 7:31; AP Physics 1 level)",url:"https://flippingphysics.com/centripetal-force-problem.html",src:"Flipping Physics",note:"Same crest setup as below with the sign of $N$ explained; algebra is the same at AP Physics C level."}], html:String.raw`
<p>The rule never changes: pick the axis pointing to the <i>center</i>, then $\sum F_{\text{toward center}}=mv^2/r$. Only the list of real forces changes.</p>
<p><b>Crest of a hill (radius $r$).</b> The center of the circle is below the car. Gravity points toward it, the normal force away:
$$mg-N=\frac{mv^2}{r}\ \Rightarrow\ N=m\left(g-\frac{v^2}{r}\right).$$
$N$ decreases with speed (you feel light), and $N=0$ at $v=\sqrt{gr}$: the car leaves the road, because the road can only push, never pull. Beyond that speed the car's path curves less sharply than the hill. At the bottom of a <b>dip</b> the center is above the car: $N-mg=mv^2/r$, so $N=m(g+v^2/r)>mg$ (you feel heavy).</p>
<p><b>Flat turntable.</b> A coin at distance $r$ from the axis of a disk turning at angular speed $\omega$ moves in a circle. The only horizontal force is static friction: $f_s=m\omega^2r\le\mu_smg$, so the coin stays until
$$\omega_{max}=\sqrt{\frac{\mu_sg}{r}}.$$
Mass cancels; coins farther out ($r$ larger) go first. When it slips, the coin does not fly radially outward: it leaves along the tangent.</p>
<p><b>Rotor ("wall of death").</b> Riders stand against the inside wall of a vertical cylinder of radius $r$ spinning at $\omega$. The wall's normal force points <i>inward</i> and supplies the centripetal force: $N=m\omega^2r$. Gravity is balanced vertically by <b>static friction</b>, which points up: $f=mg$ and $f\le\mu_sN$. This requires
$$\mu_sm\omega^2r\ge mg\ \Rightarrow\ \omega\ge\sqrt{\frac{g}{\mu_sr}}.$$
Notice: while the rider is held, friction is <i>exactly</i> $mg$, no matter how fast it spins; speeding up only increases $N$ (and the maximum available friction).</p>
<p><b>Nonuniform circular motion.</b> If the speed changes, the acceleration has two perpendicular parts. <b>Radial (centripetal):</b> $a_r=v^2/r$ toward the center, changes the direction of $\vec v$. <b>Tangential:</b> $a_t=dv/dt$ along the path, changes the speed. Apply Newton's law separately:
$$\sum F_{\text{toward center}}=\frac{mv^2}{r},\qquad \sum F_{\text{tangent}}=m\frac{dv}{dt}.$$
The total acceleration has magnitude $\sqrt{a_r^2+a_t^2}$. <i>Pendulum of length $L$</i> at angle $\theta$ from the vertical: tension points toward the pivot (center), gravity has the radial component $mg\cos\theta$ (outward when the bob is below the pivot):
$$T-mg\cos\theta=\frac{mv^2}{L},\qquad mg\sin\theta=m\,a_t\ \ (\text{restoring, along the arc}).$$
Speed $v$ at that angle comes from energy conservation (Unit 3): $v^2=2gL(\cos\theta-\cos\theta_0)$ if released from rest at $\theta_0$. Then $T=mg(3\cos\theta-2\cos\theta_0)$. At the bottom, $T=mg(3-2\cos\theta_0)$; at the release point $v=0$ and $T=mg\cos\theta_0$, less than $mg$.</p>
<div class="box trap"><b>Trap:</b> at the ends of the swing, the acceleration is <i>not</i> zero and not "$g$ down": $a_r=0$ there but $a_t=g\sin\theta_0$. And at the bottom $T\ne mg$: it is greater, because the bob is still accelerating (upward, toward the pivot).</div>`},

  {id:"l9", extra:true, title:"Constraints, movable pulleys and springs in dynamics", html:String.raw`
<p><b>Constraint equations.</b> When bodies are linked by an inextensible rope, their motions are not independent. Write the total rope length as a sum of segment lengths, set its derivative to zero, and differentiate again for accelerations. This is the step students skip: with a movable pulley the accelerations of the linked bodies are <i>not</i> equal.</p>
<p>Example geometry: a rope tied to the ceiling runs down and under a light movable pulley, then up over a fixed pulley to a block on a table. If the movable pulley (carrying a hanging mass) is a depth $y$ below the fixed ceiling attachment and the table block is a distance $x$ from the table's edge, rope length is $L=x+2y+\text{const}$ (two vertical segments hang around the movable pulley). Hence $\dot x=-2\dot y$ and $|a_{block}|=2|a_{pulley}|$: the block moves twice as far as the load.</p>
<p>Next, <b>massless pulley</b> $\Rightarrow$ the net force on it must be zero (otherwise $a=F/m$ would be infinite). So the upward pull of the two rope segments, $2T$, balances whatever hangs from the pulley's axle (including the load's weight minus $ma$ if the load is accelerating): $m_2g-2T=m_2a_2$. Also, one rope has one tension everywhere only if the pulleys it passes over are ideal; the tension in a <i>different</i> rope (the one from the axle to the load) is different.</p>
<p>A work check: the table block moves $2\times$ as far under a tension $T$, while the load moves under a force $2T$: the work done by the rope on the two bodies is balanced as expected ($T\cdot2d=2T\cdot d$), a movable pulley is a force-trading machine.</p>
<p><b>Springs in dynamics.</b> A spring exerts $F=-kx$ (Hooke's law, $x$ measured from the relaxed length). Two reminders: (1) at a given instant the force is set by the <i>current</i> stretch, so the acceleration is $a=-kx/m$, which is largest at maximum stretch and zero at the equilibrium; a block released at rest from a stretched spring starts with $a=kx_0/m$, not zero. (2) A <b>spring scale</b> reads the tension (force) transmitted through it, not the sum of both ends: if 50 N pulls on each end of a stationary spring scale, it reads 50 N (each end exerts 50 N on the scale and the scale is in equilibrium). A scale hanging from the ceiling with a 5 kg mass reads 50 N, and the same scale between two 5 kg masses hung over pulleys on both sides also reads 50 N: the wall in the first case plays the role of the second mass.</p>`},

  {id:"l10", extra:true, title:"Drag: moving upward, and v as a function of position", videos:[{title:"Search: projectile motion with air resistance linear drag differential equation upward",url:"https://www.youtube.com/results?search_query=projectile+motion+linear+air+resistance+differential+equation+rise+time+maximum+height",src:"YouTube search",note:"Look for a derivation of time to top and maximum height with drag."}], html:String.raw`
<p>Section l5 gave the falling case. Three extra ones come up in practice.</p>
<p><b>Linear drag, motion straight up.</b> Take up as positive. Gravity and drag both point down while the object rises, so
$$m\frac{dv}{dt}=-mg-bv\ \Rightarrow\ \frac{dv}{dt}=-\frac{v+v_t}{\tau},\qquad v_t=\frac{mg}b,\ \tau=\frac mb.$$
Solution with $v(0)=v_0$: $v(t)=(v_0+v_t)e^{-t/\tau}-v_t$. It reaches zero at the <b>time to the top</b>
$$t_{top}=\tau\ln\!\left(1+\frac{v_0}{v_t}\right).$$
As $b\to0$ this is $v_0/g$ (use $\ln(1+x)\approx x$). With drag it is shorter, because the deceleration $g+bv/m$ exceeds $g$.</p>
<p><b>$v$ as a function of position.</b> Use $dv/dt=v\,dv/dx$. For linear drag moving horizontally with no other force, $m\,v\,dv/dx=-bv$, so $dv/dx=-b/m$ and
$$v(x)=v_0-\frac bm\,x,\qquad x_{stop}=\frac{mv_0}{b}.$$
The object stops after a <i>finite distance</i> $mv_0/b$ (even though the stopping time is infinite: $v=v_0e^{-bt/m}$). Going up: $v\,dv/dx=-(v+v_t)/\tau$, so $\dfrac{v\,dv}{v+v_t}=-\dfrac{dx}{\tau}$, and integrating from $v_0$ to 0 (write $\frac{v}{v+v_t}=1-\frac{v_t}{v+v_t}$):
$$h_{max}=\tau\left[v_0-v_t\ln\!\left(1+\frac{v_0}{v_t}\right)\right].$$</p>
<p><b>Quadratic drag, horizontal slide.</b> $m\,dv/dt=-cv^2$ separates: $-1/v+1/v_0=ct/m$, so
$$v(t)=\frac{v_0}{1+cv_0t/m},\qquad x(t)=\frac mc\ln\!\left(1+\frac{cv_0t}{m}\right),\qquad v(x)=v_0e^{-cx/m}.$$
Here neither the stopping time nor the stopping distance is finite: the object slows as $1/t$, and $x$ keeps growing like $\ln t$ without limit.</p>
<div class="box key"><b>Rise versus fall.</b> With drag, the rising object is decelerated by more than $g$ and the falling one is accelerated by less than $g$ over the same height, so the <b>rise takes less time than the fall</b>, and the object returns with a speed lower than $v_0$ (it has lost energy to the fluid).</div>`},

  {id:"l11", extra:true, title:"Non-inertial frames, fictitious forces, and two small topics", html:String.raw`
<p>Newton's second law $\sum\vec F=m\vec a$ holds in inertial frames. If you insist on working in a frame accelerating with $\vec A$ relative to an inertial one, the law is rescued by adding a <b>fictitious force</b> $-m\vec A$ to the real ones: $\sum\vec F_{real}-m\vec A=m\vec a_{rel}$. It is not exerted by any object (no third-law partner), it is a bookkeeping device for describing the motion from an accelerating viewpoint.</p>
<p><b>Rotating frames.</b> In a frame spinning with angular velocity $\omega$ about a fixed axis, an object at rest in that frame moves, as seen by an inertial observer, in a circle: the real net force is $m\omega^2r$ <i>inward</i>. The rotating observer sees no acceleration, and says the real inward force is balanced by a fictitious <b>centrifugal force</b> $m\omega^2r$ <i>outward</i>. That is why a person in a rotor "feels pressed against the wall" and why a banked-turn passenger feels pushed outward. In the inertial frame the same fact reads: the wall pushes in, and the person's body resists leaving its straight-line path. An object moving within the rotating frame also seems deflected sideways by a <b>Coriolis force</b> $-2m\vec\omega\times\vec v_{rel}$, which is responsible for the rotation of weather systems on Earth.</p>
<div class="box key">Everything in this course can be done, and is usually safer to do, in the inertial frame with real forces only. Use the rotating-frame picture only to build intuition, and never mix the two in one equation.</div>
<p><b>Rope with mass.</b> A uniform hanging rope has mass per unit length $\lambda=M/L$. At a point a distance $y$ above the free bottom end, the tension supports the rope below it: $T(y)=\lambda gy$ (zero at the bottom, $Mg$ at the top). If an upward force accelerates the whole rope at $a$, $T(y)=\lambda y(g+a)$. The tension varies continuously, so a massless-rope idealization is only valid if the rope's mass is negligible compared with the loads.</p>
<p><b>Buoyancy.</b> A body of volume $V$ immersed in fluid of density $\rho_f$ feels an upward force $\rho_fVg$ equal to the weight of the displaced fluid. For fluid drag problems this lowers the effective weight: $v_t=(m-\rho_fV)g/b$. The problems in this unit say to ignore it.</p>`}

  ],
  examples:[
  {id:"x1", title:"Block on a rough incline tied to a hanging mass", problem:String.raw`<p>A 4.0 kg block rests on a rough $30^\circ$ incline ($\mu_k=0.20$). A light rope runs from it, up the incline and over a frictionless, massless pulley at the top, to a 3.0 kg block hanging vertically. The system accelerates with the hanging block moving down. Use $g=10$ m/s². Find the acceleration and the rope tension.</p>`,
   solution:String.raw`<p>Positive direction: hanging block down, incline block up the slope. Incline block: perpendicular axis $N=m_1g\cos30^\circ=40(0.866)=34.6$ N, so $f_k=0.20(34.6)=6.93$ N, down the slope (opposing the upward motion). Along the slope:
$$T-m_1g\sin30^\circ-f_k=m_1a.$$
Hanging block: $m_2g-T=m_2a$. Add the two equations (the system approach): $m_2g-m_1g\sin30^\circ-f_k=(m_1+m_2)a$:
$$a=\frac{30-20-6.93}{7}=0.44\ \text{m/s}^2.$$
Then $T=m_2(g-a)=3.0(10-0.44)=28.7$ N. Check with block 1: $28.7-20-6.93=1.77=4(0.44)$. ✓ ($T>0$ so the rope is taut.)</p>
<p class="mut">Note the net force is a small difference of large numbers: errors in $f_k$ matter a lot.</p>`},
  {id:"x2", title:"Banked curve, with and without friction", problem:String.raw`<p>A highway curve of radius 50 m is banked so that a car travelling at 15 m/s needs no friction at all. (a) Find the bank angle. (b) If the coefficient of static friction between tires and road is $\mu_s=0.30$, what is the maximum speed at which a car can take the curve without sliding? Use $g=10$ m/s².</p>`,
   solution:String.raw`<p>(a) With no friction, $\tan\theta=v^2/(rg)=225/500=0.45$, so $\theta=24.2^\circ$.</p>
<p>(b) At maximum speed the car is about to slide <i>up</i> the bank, so static friction $f=\mu_sN$ points down the slope. Vertical: $N\cos\theta-f\sin\theta=mg$. Horizontal (toward center): $N\sin\theta+f\cos\theta=mv^2/r$. With $f=\mu_sN$:
$$\frac{v^2}{rg}=\frac{\sin\theta+\mu_s\cos\theta}{\cos\theta-\mu_s\sin\theta}=\frac{\tan\theta+\mu_s}{1-\mu_s\tan\theta}=\frac{0.75}{0.865}=0.867.$$
So $v^2=0.867(500)=433$, $v\approx20.8$ m/s (about 75 km/h). Compare: on a flat road with $\mu_s=0.30$ the limit would be $\sqrt{0.3\cdot10\cdot50}=12.2$ m/s. The bank helps a lot.</p>`},
  {id:"x3", title:"Falling with linear drag", problem:String.raw`<p>A 2.0 kg object is dropped from rest in a fluid that exerts a drag force of magnitude $bv$ with $b=0.50$ kg/s. Use $g=10$ m/s². Find (a) the terminal speed and time constant, (b) the speed at $t=\tau$, (c) the time to reach 90% of terminal speed, (d) how far it has fallen at $t=\tau$.</p>`,
   solution:String.raw`<p>(a) $v_t=mg/b=20/0.5=40$ m/s; $\tau=m/b=4.0$ s.</p>
<p>(b) $v(\tau)=v_t(1-e^{-1})=40(0.632)=25.3$ m/s.</p>
<p>(c) $1-e^{-t/\tau}=0.9\Rightarrow t=\tau\ln10=4(2.303)=9.2$ s.</p>
<p>(d) $y=v_t\left[t-\tau(1-e^{-t/\tau})\right]=40\left[4-4(0.632)\right]=40(1.472)=58.9$ m. (Without drag it would have fallen $\tfrac12(10)(16)=80$ m, so drag has taken away about a quarter of that.)</p>`},
  {id:"x4", title:"Scale reading in an elevator", problem:String.raw`<p>A 60 kg person stands on a bathroom scale in an elevator. Use $g=10$ m/s². What does the scale read when the elevator (a) accelerates upward at 2.0 m/s², (b) accelerates downward at 2.0 m/s², (c) moves upward at constant 3 m/s? (d) At one instant the scale reads 540 N. What is the elevator's acceleration, and what can you say about its velocity?</p>`,
   solution:String.raw`<p>Take up as positive: $N-mg=ma$, so $N=m(g+a)$.</p>
<p>(a) $a=+2$: $N=60(12)=720$ N. (b) $a=-2$: $N=60(8)=480$ N. (c) $a=0$: $N=600$ N, the true weight.</p>
<p>(d) $540=60(10+a)\Rightarrow a=-1$ m/s², i.e. 1.0 m/s² <b>downward</b>. The velocity cannot be determined: the elevator could be moving down and speeding up, or moving up and slowing down. Only the acceleration enters the force law.</p>`},
  {id:"x5", title:"A sign hung by two cables at different angles", problem:String.raw`<p>A 40 kg sign hangs at rest from a knot supported by two cables. The left cable makes $30^\circ$ with the horizontal ceiling and the right cable makes $45^\circ$ with the horizontal. Use $g=10$ m/s². Find the tension in each cable. Which one is larger, and why?</p>`,
   solution:String.raw`<p>Knot: $T_1$ up-left at $30^\circ$ above horizontal, $T_2$ up-right at $45^\circ$, weight $mg=400$ N down. $\sum F_x=0$: $T_1\cos30^\circ=T_2\cos45^\circ$, so $T_1=T_2\,(0.7071/0.8660)=0.8165\,T_2$. $\sum F_y=0$: $T_1\sin30^\circ+T_2\sin45^\circ=400$:
$$0.8165T_2(0.500)+0.7071T_2=400\Rightarrow 1.1154\,T_2=400\Rightarrow T_2=358.6\ \text{N},\quad T_1=292.8\ \text{N}.$$
(Check with $T_1=mg\cos\beta/\sin(\alpha+\beta)=400(0.7071)/0.9659=292.8$ N. ✓) $T_2$ is larger: it is the cable that is steeper, so it must supply more of the upward force, but the horizontal pulls must cancel, which sets the ratio. Neither tension is 200 N: each is larger than half the weight.</p>`},
  {id:"x6", title:"Dragging a crate: what angle is best?", problem:String.raw`<p>A 50 kg crate is dragged across a horizontal floor at constant speed by a rope at angle $\varphi$ above the horizontal, with $\mu_k=0.40$ ($g=10$ m/s²). (a) Find the force needed for $\varphi=0$ and $\varphi=30^\circ$. (b) Find the angle that minimizes the force, and the minimum force. (c) What is the normal force in that case?</p>`,
   solution:String.raw`<p>$F(\varphi)=\dfrac{\mu_kmg}{\cos\varphi+\mu_k\sin\varphi}$ with $\mu_kmg=200$ N.</p>
<p>(a) $\varphi=0$: $F=200$ N. $\varphi=30^\circ$: $F=200/(0.866+0.200)=187.6$ N.</p>
<p>(b) $dF/d\varphi=0\Rightarrow\tan\varphi=\mu_k=0.40$, $\varphi=21.8^\circ$. $F_{min}=\mu_kmg/\sqrt{1+\mu_k^2}=200/\sqrt{1.16}=185.7$ N. The gain over horizontal pulling is only about 7%, the minimum is shallow.</p>
<p>(c) $N=mg-F\sin\varphi=500-185.7(0.3714)=431$ N, noticeably less than 500 N. Check: $f=0.40(431)=172.4$ N $=F\cos\varphi=185.7(0.9285)=172.4$ N ✓.</p>`},
  {id:"x7", title:"A block on an accelerating cart", problem:String.raw`<p>A 2.0 kg block sits on a 6.0 kg cart. The coefficients of friction between block and cart are $\mu_s=0.40$ and $\mu_k=0.30$. The cart rolls on a frictionless floor and is pulled horizontally by a force $F$ on the cart. Use $g=10$ m/s². (a) Find the largest $F$ for which the block does not slip. (b) For $F=20$ N, find the friction force on the block. (c) For $F=48$ N, find the acceleration of each.</p>`,
   solution:String.raw`<p>(a) The block's only horizontal force is static friction, at most $\mu_smg=0.40(20)=8$ N, so its maximum acceleration is $\mu_sg=4.0$ m/s². Both move together at that acceleration when $F_{max}=(2+6)(4.0)=32$ N.</p>
<p>(b) No slipping: $a=20/8=2.5$ m/s², and $f=m a=2.0(2.5)=5.0$ N forward on the block (less than the 8 N limit, so the assumption holds).</p>
<p>(c) $F=48$ N exceeds 32 N, so the block slips (relative to the cart it moves backward). Kinetic friction $f_k=0.30(20)=6.0$ N acts forward on the block and backward on the cart: $a_{block}=6/2=3.0$ m/s², $a_{cart}=(48-6)/6=7.0$ m/s². Relative acceleration 4.0 m/s² (cart pulling ahead).</p>`},
  {id:"x8", title:"Over the crest and through the dip", problem:String.raw`<p>A 1200 kg car travels at 15 m/s over a hill whose top has radius of curvature 40 m, and later through a dip of the same radius at the same speed. Use $g=10$ m/s². (a) Find the normal force at the top of the hill. (b) Find it at the bottom of the dip. (c) At what speed does the car leave the road at the crest?</p>`,
   solution:String.raw`<p>$v^2/r=225/40=5.625$ m/s².</p>
<p>(a) Crest (center below): $mg-N=mv^2/r\Rightarrow N=1200(10-5.625)=5250$ N, versus the weight 12000 N.</p>
<p>(b) Dip (center above): $N-mg=mv^2/r\Rightarrow N=1200(10+5.625)=18750$ N, about 1.6 times the weight.</p>
<p>(c) $N=0$ when $v^2/r=g$: $v=\sqrt{gr}=\sqrt{400}=20$ m/s.</p>`},
  {id:"x9", title:"A coin on a turntable and a rotor ride", problem:String.raw`<p>(a) A coin lies 0.10 m from the axis of a horizontal turntable ($\mu_s=0.60$). Find the largest angular speed for which it stays in place, in rad/s and rev/min. (b) A rotor ride is a vertical cylinder of radius 3.0 m; the rider-wall coefficient is $\mu_s=0.40$. Find the minimum $\omega$ for which a rider stays pinned when the floor drops away, and the friction force on a 70 kg rider at that speed. Use $g=10$ m/s².</p>`,
   solution:String.raw`<p>(a) $\omega_{max}=\sqrt{\mu_sg/r}=\sqrt{0.60(10)/0.10}=\sqrt{60}=7.75$ rad/s $=7.75(60)/(2\pi)=74$ rev/min.</p>
<p>(b) $N=m\omega^2r$ and $f=mg\le\mu_sN$: $\omega_{min}=\sqrt{g/(\mu_sr)}=\sqrt{10/1.2}=2.89$ rad/s $=27.6$ rev/min (rim speed 8.7 m/s). At that speed $f=mg=700$ N (not $\mu_s\times$ anything bigger): static friction equals the weight, and $N=70(8.33)(3.0)=1750$ N; indeed $0.40(1750)=700$ N ✓. Spinning faster raises $N$ but not $f$.</p>`},
  {id:"x10", title:"Tension in a swinging pendulum", problem:String.raw`<p>A 0.40 kg bob on a 1.5 m string is released from rest at $60^\circ$ from the vertical ($g=10$ m/s²). Find the speed, the tension, and the tangential and radial acceleration (a) at the bottom, (b) when the string makes $30^\circ$ with the vertical (use energy for the speed).</p>`,
   solution:String.raw`<p>Energy: $v^2=2gL(\cos\theta-\cos60^\circ)$.</p>
<p>(a) Bottom: $v^2=2(10)(1.5)(1-0.5)=15$, $v=3.87$ m/s. $T-mg=mv^2/L\Rightarrow T=4+0.40(15)/1.5=8.0$ N $=mg(3-2\cos60^\circ)$. $a_t=0$, $a_r=v^2/L=10$ m/s² upward.</p>
<p>(b) At $30^\circ$: $v^2=30(0.8660-0.5)=10.98$, $v=3.31$ m/s. $T=mg\cos30^\circ+mv^2/L=3.46+0.40(10.98)/1.5=3.46+2.93=6.39$ N. $a_t=g\sin30^\circ=5.0$ m/s², $a_r=v^2/L=7.32$ m/s², total $\sqrt{25+53.6}=8.87$ m/s², at $34^\circ$ from the string direction.</p>`},
  {id:"x11", title:"Contact forces in a pushed chain", problem:String.raw`<p>Blocks of 1.0 kg, 2.0 kg and 3.0 kg touch in a line on a frictionless table. A horizontal 12 N force pushes on the 1.0 kg block, which pushes the 2.0 kg block, which pushes the 3.0 kg block. Find the acceleration and the force each block exerts on the next.</p>`,
   solution:String.raw`<p>System: $a=12/6=2.0$ m/s². Force of block 1 on block 2 must accelerate blocks 2 and 3: $F_{12}=(2+3)(2.0)=10$ N. Force of block 2 on block 3: $F_{23}=3(2.0)=6$ N. Check on block 2: $10-6=4=2(2.0)$ ✓. (Block 1: $12-10=2=1(2.0)$ ✓.)</p>`},
  {id:"x12", title:"A movable pulley and a constraint", problem:String.raw`<p>A 2.0 kg block sits on a frictionless table. A light rope is tied to it, runs to the table edge, over a fixed frictionless pulley, down and under a light, movable pulley that carries a hanging 3.0 kg load, then up to a fixed ceiling attachment. Use $g=10$ m/s². Find the acceleration of each body and the rope tension.</p>`,
   solution:String.raw`<p>Rope length: $x+2y=\text{const}$ ($x$ block's distance from the edge, $y$ the depth of the movable pulley), so the block's acceleration is $a_1=2a_2$ ($a_2$ the load's, downward).</p>
<p>Block: $T=m_1a_1=2.0(2a_2)$. Load: two rope segments pull up: $m_2g-2T=m_2a_2\Rightarrow30-2(4a_2)=3a_2\Rightarrow a_2=30/11=2.73$ m/s². Then $a_1=5.45$ m/s² and $T=2.0(5.45)=10.9$ N. Check: $30-2(10.9)=8.2=3.0(2.73)$ ✓. Notice the load's acceleration is less than $g$, and $T\ne m_2g/2=15$ N because the load is accelerating.</p>`},
  {id:"x13", title:"Thrown upward with linear drag", problem:String.raw`<p>A 0.50 kg ball is thrown straight up at 30 m/s in a fluid with drag $bv$, $b=0.25$ kg/s ($g=10$ m/s²). Find (a) $v_t$ and $\tau$, (b) the time to the top, (c) the maximum height, and compare with no drag. (d) What is the ball's initial deceleration?</p>`,
   solution:String.raw`<p>(a) $v_t=mg/b=20$ m/s, $\tau=m/b=2.0$ s.</p>
<p>(b) $t_{top}=\tau\ln(1+v_0/v_t)=2.0\ln(2.5)=1.83$ s (without drag: 3.0 s).</p>
<p>(c) $h=\tau[v_0-v_t\ln(1+v_0/v_t)]=2.0[30-20(0.9163)]=23.3$ m (without drag: $v_0^2/2g=45$ m).</p>
<p>(d) $a_0=g+bv_0/m=10+0.25(30)/0.50=25$ m/s², directed downward. (From the top, the fall back takes about 2.63 s, longer than the 1.83 s rise, and the ball returns at about 14.6 m/s.)</p>`}

  ],
  mcq:[
  {id:"q1", q:String.raw`<p>An object moves in a straight line at constant velocity relative to the ground. Which conclusion is justified?</p>`, choices:["No forces act on it","The net force on it is zero","A forward force larger than any opposing force acts on it","Its mass must be large","Its momentum must be zero"], a:1,
   why:String.raw`<p>Constant velocity means $a=0$, so $\sum\vec F=0$ (second law/first law). That does not mean no forces act: a crate pushed across a rough floor at constant speed has an applied force exactly balanced by friction. A forward force larger than the opposition would produce acceleration, not constant velocity.</p>`},
  {id:"q2", q:String.raw`<p>A book rests on a horizontal table. Which force is the third-law (action-reaction) partner of the upward normal force the table exerts on the book?</p>`, choices:["The weight of the book (Earth's pull on the book)","The downward force the book exerts on the table","The pull of the book on the Earth","The downward force of the table on the floor","The net force on the book, which is zero"], a:1,
   why:String.raw`<p>Third-law pairs are the same kind of force acting on two different objects, equal and opposite: table-on-book up, book-on-table down. The weight is the tempting answer; it equals the normal force only because the book is not accelerating (second law). The weight's own partner is the book's gravitational pull on the Earth.</p>`},
  {id:"q3", q:String.raw`<p>A 70 kg person stands on a scale in an elevator that is moving upward but slowing down at 2.0 m/s². Taking $g=10$ m/s², the scale reads</p>`, choices:["560 N","700 N","840 N","140 N","0 N"], a:0,
   why:String.raw`<p>Moving up while slowing means the acceleration is downward, $a=-2$ m/s². $N-mg=ma\Rightarrow N=70(10-2)=560$ N. The tempting 840 N comes from seeing "upward" and using $g+a$; the direction of the velocity is irrelevant, only the direction of $a$ matters.</p>`},
  {id:"q4", q:String.raw`<p>Masses of 2.0 kg and 3.0 kg hang from the two ends of a light rope over a frictionless, massless pulley and are released from rest. Taking $g=10$ m/s², the tension in the rope is</p>`, choices:["20 N","24 N","30 N","50 N","12 N"], a:1,
   why:String.raw`<p>$a=\dfrac{3-2}{5}(10)=2$ m/s². For the 2 kg mass (accelerating upward): $T-20=2(2)\Rightarrow T=24$ N. Check with the 3 kg mass: $30-T=3(2)\Rightarrow T=24$ N. The tension is not equal to either weight; it lies between 20 N and 30 N.</p>`},
  {id:"q5", q:String.raw`<p>A block slides down a $30^\circ$ incline whose coefficient of kinetic friction is 0.20. Taking $g=10$ m/s², its acceleration is closest to</p>`, choices:["1.5 m/s²","2.4 m/s²","3.3 m/s²","5.0 m/s²","8.7 m/s²"], a:2,
   why:String.raw`<p>$a=g(\sin30^\circ-\mu_k\cos30^\circ)=10(0.500-0.173)=3.27$ m/s². The 5.0 m/s² choice ignores friction; 8.7 m/s² is $g\cos30^\circ$, using the wrong component. The mass cancels.</p>`},
  {id:"q6", q:String.raw`<p>A car rounds a flat, circular curve of radius 40 m. The coefficient of static friction between tires and road is 0.50. Taking $g=10$ m/s², the greatest speed at which it can make the turn without skidding is closest to</p>`, choices:["5 m/s","10 m/s","14 m/s","20 m/s","200 m/s"], a:2,
   why:String.raw`<p>$f_s=mv^2/r\le\mu_smg\Rightarrow v_{max}=\sqrt{\mu_sgr}=\sqrt{0.5\cdot10\cdot40}=\sqrt{200}=14.1$ m/s. The answer 200 forgets the square root. Mass cancels, so a heavier car has the same limit.</p>`},
  {id:"q7", q:String.raw`<p>A ball on a string of length 0.90 m is swung in a vertical circle. Taking $g=10$ m/s², the minimum speed at the top of the circle for which the string stays taut is</p>`, choices:["1.5 m/s","3.0 m/s","4.5 m/s","9.0 m/s","0 m/s"], a:1,
   why:String.raw`<p>At the top $T+mg=mv^2/r$. The string is just taut when $T=0$: $mg=mv^2/r\Rightarrow v=\sqrt{gr}=\sqrt{9}=3.0$ m/s. A speed of 0 is impossible because the ball would not follow the circle: gravity alone would pull it off a circular path.</p>`},
  {id:"q8", q:String.raw`<p>A mass $m$ moves in a horizontal circle at the end of a string that makes an angle $\theta$ with the vertical (a conical pendulum). The tension in the string is</p>`, choices:["$mg\\cos\\theta$","$mg/\\cos\\theta$","$mg\\sin\\theta$","$mg$","$mg\\tan\\theta$"], a:1,
   why:String.raw`<p>The mass has no vertical acceleration, so the vertical component of tension balances gravity: $T\cos\theta=mg\Rightarrow T=mg/\cos\theta$, which exceeds $mg$. The horizontal component $T\sin\theta=mg\tan\theta$ is the centripetal force. $mg\tan\theta$ is that horizontal component, not the tension itself.</p>`},
  {id:"q9", q:String.raw`<p>A 2.0 kg object falls through air with a drag force $F_d=cv^2$, where $c=0.050$ kg/m. Taking $g=10$ m/s², its terminal speed is</p>`, choices:["10 m/s","20 m/s","200 m/s","400 m/s","40 m/s"], a:1,
   why:String.raw`<p>At terminal speed $a=0$: $mg=cv_t^2\Rightarrow v_t=\sqrt{mg/c}=\sqrt{20/0.05}=\sqrt{400}=20$ m/s. Forgetting the square root gives 400. The units check: $c$ in kg/m times m²/s² gives newtons.</p>`},
  {id:"q10", q:String.raw`<p>An object is released from rest in a fluid with linear drag $F=-bv$ and has terminal speed 40 m/s. Its speed at $t=\tau=m/b$ is closest to</p>`, choices:["20 m/s","25 m/s","30 m/s","35 m/s","40 m/s"], a:1,
   why:String.raw`<p>$v=v_t(1-e^{-t/\tau})$, so at $t=\tau$, $v=40(1-0.368)=25.3$ m/s. The object has covered 63% of the way to $v_t$, not half. Reaching 40 m/s is never achieved exactly in finite time.</p>`},
  {id:"q11", q:String.raw`<p>A 3.0 kg object starts from rest at $t=0$ on a frictionless horizontal surface. A horizontal force $F=12t$ (SI units) acts on it. Its speed at $t=3.0$ s is</p>`, choices:["12 m/s","18 m/s","36 m/s","54 m/s","108 m/s"], a:1,
   why:String.raw`<p>$a=F/m=4t$, so $v=\int_0^3 4t\,dt=2t^2\big|_{3}=18$ m/s. Using $v=at$ with the final value $a=12$ m/s² gives 36 m/s: wrong because $a$ is not constant. (The average force is 18 N, giving $\Delta v=18(3)/3=18$ m/s.)</p>`},
  {id:"q12", q:String.raw`<p>A 2.0 kg block is connected by a light rope to a 3.0 kg block on a frictionless table. A horizontal force of 20 N pulls on the 3.0 kg block directly away from the 2.0 kg block, so the rope stays taut. The tension in the rope is</p>`, choices:["8 N","12 N","20 N","4 N","10 N"], a:0,
   why:String.raw`<p>System: $a=20/5=4$ m/s². Only the rope pulls the 2.0 kg block: $T=2(4)=8$ N. The tension is not 20 N (the rope does not transmit the full force to the first block) and not 12 N (that is the net force on the 3.0 kg block, $20-8$).</p>`},
  {id:"q13", q:String.raw`<p>A 20 kg sign hangs from a knot supported by two identical cables, each making $30^\circ$ with the horizontal. Taking $g=10$ m/s², the tension in each cable is</p>`, choices:["100 N","173 N","346 N","200 N","400 N"], a:3,
   why:String.raw`<p>$2T\sin30^\circ=mg\Rightarrow T=200/(2\cdot0.5)=200$ N. The tempting 100 N treats each cable as carrying half the weight with its full tension; only the vertical component of each tension carries half the weight. 173 N is $T\cos30^\circ$, the horizontal component.</p>`},
  {id:"q14", q:String.raw`<p>A 10 kg block on a level floor has $\mu_s=0.60$ and $\mu_k=0.40$ ($g=10$ m/s²). A horizontal 45 N force is applied and the block does not move. The friction force on the block is</p>`, choices:["45 N","60 N","40 N","0 N","20 N"], a:0,
   why:String.raw`<p>The block is at rest, so static friction equals the applied force (45 N), which is below the maximum $\mu_sN=60$ N. 60 N is the largest static friction available, not what is acting; 40 N is the kinetic value, which applies only once the block is sliding.</p>`},
  {id:"q15", q:String.raw`<p>A crate is dragged by a rope at angle $\varphi$ above the horizontal over a floor with $\mu_k=0.75$. The rope angle that minimizes the force needed to keep the crate moving at constant speed is closest to</p>`, choices:["0°","30°","45°","53°","37°"], a:4,
   why:String.raw`<p>$\tan\varphi=\mu_k=0.75\Rightarrow\varphi=36.9^\circ$. Pulling horizontally (0°) is not optimal because a slight upward component reduces the normal force and thus friction by more than it costs in forward force. 53° is the angle with $\tan=1.33=1/\mu_k$, the reciprocal.</p>`},
  {id:"q16", q:String.raw`<p>A crate rests on a flatbed truck. The coefficients of friction between crate and bed are $\mu_s=0.30$ and $\mu_k=0.20$. Taking $g=10$ m/s², the greatest acceleration the truck can have, on level road, without the crate sliding is</p>`, choices:["3.0 m/s²","2.0 m/s²","0.30 m/s²","5.0 m/s²","10 m/s²"], a:0,
   why:String.raw`<p>The crate's only horizontal force is static friction, at most $\mu_smg$, so $a_{max}=\mu_sg=3.0$ m/s², independent of mass. 2.0 m/s² uses the kinetic coefficient, which applies only after slipping starts.</p>`},
  {id:"q17", q:String.raw`<p>A car of mass $m$ passes over the top of a circular hill of radius 45 m at 15 m/s ($g=10$ m/s²). The normal force of the road on the car is</p>`, choices:["$0$","$mg/2$","$mg$","$3mg/2$","$2mg$"], a:1,
   why:String.raw`<p>$mg-N=mv^2/r$, $v^2/r=225/45=5$ m/s², so $N=m(10-5)=mg/2$. $3mg/2$ is the result for the bottom of a dip, where the normal force and gravity oppose in the other order. $N=0$ would need $v=\sqrt{gr}=21$ m/s.</p>`},
  {id:"q18", q:String.raw`<p>A rider is pinned against the vertical wall of a rotating cylinder (a rotor) with no floor. The angular speed is increased slightly while she stays at the same height against the wall. Compared with before, the normal force and the friction force on her are</p>`, choices:["both larger","normal force larger; friction unchanged (equal to her weight)","friction larger; normal force unchanged","both unchanged","normal force larger; friction smaller"], a:1,
   why:String.raw`<p>Vertically she is in equilibrium, so static friction equals $mg$ regardless of $\omega$. Horizontally $N=m\omega^2r$ grows with $\omega$. Friction would increase only if she were slipping; it is the <i>maximum possible</i> friction $\mu_sN$ that increases, not the actual value.</p>`},
  {id:"q19", q:String.raw`<p>A small coin on a rotating turntable begins to slide when the angular speed reaches $\omega_0$ with the coin at distance $r$ from the axis. A coin of the same material placed at $2r$ will begin to slide at angular speed</p>`, choices:["$\\omega_0/2$","$\\omega_0/\\sqrt2$","$\\omega_0$","$\\sqrt2\\,\\omega_0$","$2\\omega_0$"], a:1,
   why:String.raw`<p>$\omega_{max}=\sqrt{\mu_sg/r}\propto1/\sqrt r$, so doubling $r$ divides $\omega_{max}$ by $\sqrt2$. Mass does not matter. $\omega_0/2$ would be the answer if $\omega_{max}$ were proportional to $1/r$.</p>`},
  {id:"q20", q:String.raw`<p>A 0.50 kg pendulum bob is released from rest with the string at $60^\circ$ to the vertical ($g=10$ m/s²). Immediately after release, the tension is</p>`, choices:["0","4.3 N","5.0 N","7.5 N","2.5 N"], a:4,
   why:String.raw`<p>At release $v=0$, so there is no centripetal acceleration: $T-mg\cos\theta=0\Rightarrow T=mg\cos60^\circ=2.5$ N. 5.0 N is the weight, the value for a bob hanging at rest. 4.3 N would use $mg\sin\theta$, which is the component along the arc, not along the string.</p>`},
  {id:"q21", q:String.raw`<p>A light rope is tied to the ceiling, passes under a light movable pulley that holds a hanging load, then rises over a fixed pulley and is tied to a block B. If the load descends 0.40 m, how far does B move (assume the rope stays taut)?</p>`, choices:["0.20 m","0.40 m","1.6 m","0.80 m","0.10 m"], a:3,
   why:String.raw`<p>The rope has two segments hanging around the movable pulley; lowering the pulley by $d$ takes up $2d$ of rope, so B moves $2d=0.80$ m. B's acceleration is therefore twice the load's. Taking them equal (0.40 m) forgets the two supporting segments.</p>`},
  {id:"q22", q:String.raw`<p>Blocks of 1 kg, 2 kg and 3 kg touch in a line on a frictionless table. A horizontal 12 N force pushes on the 1 kg block. The force the 2 kg block exerts on the 3 kg block is</p>`, choices:["12 N","6 N","4 N","10 N","2 N"], a:1,
   why:String.raw`<p>$a=12/6=2$ m/s², and the 3 kg block is accelerated only by the 2 kg block: $F=3(2)=6$ N. 10 N is the force of the 1 kg on the 2 kg block ($5\times2$), and 12 N is the applied force on the first block.</p>`},
  {id:"q23", q:String.raw`<p>A ball is thrown straight up in air and the drag force is not negligible. Compared with the time $t_{down}$ it takes to fall back from its highest point to the launch height, the time $t_{up}$ to rise is</p>`, choices:["shorter","equal, by symmetry","longer","longer if drag is linear, shorter if quadratic","undetermined without the mass"], a:0,
   why:String.raw`<p>On the way up gravity and drag both act downward, so the deceleration exceeds $g$; on the way down drag opposes gravity, so the acceleration is below $g$. Over the same distance, the larger-acceleration trip takes less time: $t_{up}&lt;t_{down}$. The symmetry of the no-drag case is broken. The conclusion holds for both models.</p>`},
  {id:"q24", q:String.raw`<p>A 2.0 kg block slides on a horizontal surface with initial speed 10 m/s. The only horizontal force is linear drag $F=-bv$ with $b=0.50$ kg/s. The total distance it travels before stopping is</p>`, choices:["20 m","80 m","10 m","40 m","infinite"], a:3,
   why:String.raw`<p>$m\,v\,dv/dx=-bv\Rightarrow v=v_0-bx/m$, which reaches zero at $x=mv_0/b=2(10)/0.5=40$ m. "Infinite" is tempting because $v=v_0e^{-bt/m}$ never reaches zero in finite <i>time</i>, but the distance is finite. 20 m would come from dividing by $2$ as in constant deceleration.</p>`},
  {id:"q25", q:String.raw`<p>A spring scale is attached by light ropes to two 5.0 kg masses that hang, at rest, on opposite sides of two pulleys, so each end of the scale is pulled with a tension through the pulleys. Taking $g=10$ m/s², the scale reads</p>`, choices:["0 N","25 N","50 N","100 N","10 N"], a:2,
   why:String.raw`<p>Each rope pulls on the scale with the tension 50 N (each mass is in equilibrium, $T=mg$). The scale reads the force transmitted through it, 50 N, exactly what it would read if one end were tied to a wall. 100 N would add the two ends, but the scale in equilibrium has two 50 N forces pulling in opposite directions; they are not summed.</p>`}

  ],
  frq:[
  {id:"f1", type:"Mathematical routines", title:"Blocks on an incline joined over a pulley",
   prompt:String.raw`<p>A block A of mass 5.0 kg is on a rough incline at $37^\circ$ ($\sin37^\circ=0.60$, $\cos37^\circ=0.80$). Coefficients of friction between A and the incline are $\mu_s=0.30$ and $\mu_k=0.25$. A light rope attached to A runs up the incline and over an ideal pulley to a hanging block B of mass 5.0 kg. The system is released from rest. Use $g=10$ m/s². Assume the incline is long enough that A stays on it, and that B has more than 2 m of vertical drop available before it reaches the floor or pulley, so nothing stops the motion during the first 2.0 s.</p>
<p>(a) Draw and label a free-body diagram for A and for B.<br>
(b) Write Newton's second law for each block, with a clearly stated positive direction.<br>
(c) Determine the acceleration of the blocks and the tension in the rope.<br>
(d) After 2.0 s the rope is cut. Determine the speed of A at that instant.<br>
(e) After the cut, determine how much farther A slides up the incline before stopping.<br>
(f) Does A then remain at rest? If not, find its acceleration down the slope, and explain in words why this is smaller in magnitude than its deceleration while sliding up.</p>`,
   pts:[
    {p:1,d:"FBD of A: weight (down), normal (perpendicular to the incline), tension (up the slope), kinetic friction (down the slope), with correct directions"},
    {p:1,d:"FBD of B: weight (down) and tension (up) only"},
    {p:1,d:"Newton's second law for A along the slope with correct signs: $T-m_Ag\\sin\\theta-\\mu_kN=m_Aa$, with $N=m_Ag\\cos\\theta$ from the perpendicular axis"},
    {p:1,d:"Newton's second law for B: $m_Bg-T=m_Ba$, consistent positive direction"},
    {p:1,d:"Solves for $a=1.0$ m/s² (shows $N=40$ N, $f_k=10$ N)"},
    {p:1,d:"$T=45$ N"},
    {p:1,d:"$v=at=2.0$ m/s"},
    {p:1,d:"Recognizes deceleration after the cut is $g\\sin\\theta+\\mu_kg\\cos\\theta=8$ m/s² (friction still down the slope), and gets a further distance $v^2/(2a)=0.25$ m"},
    {p:1,d:"Compares $\\tan\\theta=0.75$ with $\\mu_s=0.30$ (or equivalent: $mg\\sin\\theta=30$ N exceeds maximum static friction $12$ N) and concludes A slides back down"},
    {p:1,d:"Acceleration down $=g(\\sin\\theta-\\mu_k\\cos\\theta)=4$ m/s²"},
    {p:1,d:"Explanation: when moving up, friction and the gravity component both point down the slope and add; when moving down, friction reverses (opposes the new sliding direction) and subtracts from the gravity component"}],
   solution:String.raw`<p>(a) A: weight $m_Ag$ straight down; normal $N$ perpendicular to the incline; tension $T$ up the slope; kinetic friction $f_k$ down the slope (A moves up). B: weight $m_Bg$ down, tension $T$ up.</p>
<p>(b) Positive: B down, A up the slope. A: $T-m_Ag\sin\theta-\mu_kN=m_Aa$ with $N=m_Ag\cos\theta=40$ N. B: $m_Bg-T=m_Ba$.</p>
<p>(c) First, sanity: $m_Bg=50$ N exceeds $m_Ag\sin\theta+\mu_sN=30+12=42$ N, so the system does start to move. Add: $m_Bg-m_Ag\sin\theta-\mu_kN=(m_A+m_B)a\Rightarrow 50-30-10=10a$, so $a=1.0$ m/s². Then $T=m_B(g-a)=5(9)=45$ N. (Check A: $45-30-10=5=5(1)$.)</p>
<p>(d) $v=at=1.0(2.0)=2.0$ m/s. (A has moved $\tfrac12(1)(4)=2$ m.)</p>
<p>(e) After the cut, A moves up with no rope: $a=-(g\sin\theta+\mu_kg\cos\theta)=-(6+2)=-8$ m/s². Distance $=v^2/(2|a|)=4/16=0.25$ m.</p>
<p>(f) At the top, $mg\sin\theta=30$ N exceeds the maximum static friction $\mu_sN=12$ N (equivalently $\tan37^\circ=0.75>0.30$), so A slides back down. Its acceleration is $g(\sin\theta-\mu_k\cos\theta)=10(0.60-0.20)=4.0$ m/s² down the slope. Going up, both friction and the gravity component point down the slope and add to give 8 m/s². Going down, friction points <i>up</i> the slope (it always opposes the sliding) and partly cancels the gravity component, giving a smaller net force.</p>`},

  {id:"f2", type:"Qualitative/quantitative translation", title:"Falling through a viscous fluid",
   prompt:String.raw`<p>A small sphere of mass $m=0.50$ kg is released from rest in a deep tank of viscous oil. The oil exerts a drag force of magnitude $bv$ on the sphere, opposite its velocity, with $b=0.25$ kg/s. Ignore buoyancy. Use $g=10$ m/s² and take downward as positive.</p>
<p>(a) Draw a free-body diagram for the sphere while it is falling at speed $v$, and write the differential equation for $v(t)$.<br>
(b) Find the terminal speed $v_t$.<br>
(c) Solve the differential equation to obtain $v(t)$ and evaluate the time constant $\tau$ and the speed at $t=2.0$ s.<br>
(d) Sketch graphs of $v(t)$ and of the acceleration $a(t)$, labeling intercepts and asymptotes.<br>
(e) In words, using forces, explain why the sphere approaches $v_t$ but never exceeds it, and why the acceleration decreases.<br>
(f) The oil is replaced by a gas in which the drag is $F_d=cv^2$. Write the new differential equation, find the new terminal speed in terms of $m$, $g$ and $c$, and state one qualitative difference between the new $v(t)$ curve and the one in (d).</p>`,
   pts:[
    {p:1,d:"FBD: weight $mg$ downward and drag $bv$ upward"},
    {p:1,d:"$m\\,dv/dt=mg-bv$ (or equivalent)"},
    {p:1,d:"$v_t=mg/b=20$ m/s from setting $dv/dt=0$"},
    {p:1,d:"Separates variables and integrates with $v(0)=0$"},
    {p:1,d:"$v(t)=v_t(1-e^{-t/\\tau})$ with $\\tau=m/b=2.0$ s"},
    {p:1,d:"$v(2.0)=20(1-e^{-1})=12.6$ m/s"},
    {p:1,d:"Sketch of $v(t)$: starts at 0 with slope $g=10$ m/s², concave down, asymptote at 20 m/s"},
    {p:1,d:"Sketch of $a(t)$: starts at 10 m/s², decays exponentially to 0"},
    {p:1,d:"Explanation: drag grows with speed so net force $mg-bv$ shrinks; as $bv\\to mg$ the net force and acceleration approach zero; $v$ cannot exceed $v_t$ because the net force would then point upward and reduce $v$"},
    {p:1,d:"Quadratic ODE: $m\\,dv/dt=mg-cv^2$"},
    {p:1,d:"$v_t=\\sqrt{mg/c}$ and a valid qualitative difference (approaches $v_t$ sooner, since the tanh curve lies above $1-e^{-t/\\tau}$ for the same $v_t$ and initial slope; terminal speed scales as $\\sqrt m$ rather than $m$; tanh shape)"}],
   solution:String.raw`<p>(a) Weight $mg$ down, drag $bv$ up. Taking down as positive, $m\dfrac{dv}{dt}=mg-bv$.</p>
<p>(b) $dv/dt=0\Rightarrow v_t=mg/b=0.5(10)/0.25=20$ m/s.</p>
<p>(c) $\dfrac{dv}{dt}=\dfrac{v_t-v}{\tau}$ with $\tau=m/b=2.0$ s. $\displaystyle\int_0^v\frac{dv'}{v_t-v'}=\int_0^t\frac{dt'}{\tau}\Rightarrow -\ln\frac{v_t-v}{v_t}=\frac t\tau\Rightarrow v=v_t(1-e^{-t/\tau})=20(1-e^{-t/2})$. At 2.0 s: $20(1-0.368)=12.6$ m/s.</p>
<p>(d) $v(t)$: starts at the origin with initial slope 10 m/s², rises concave down, asymptote $v=20$ m/s; it reaches 63% of 20 m/s (12.6 m/s) at $t=\tau=2$ s. $a(t)=g\,e^{-t/\tau}$: starts at 10 m/s² at $t=0$ and decays exponentially toward the axis (a(2 s) = 3.7 m/s²).</p>
<p>(e) At release $v=0$, drag is zero, and the only force is gravity: $a=g$. As the sphere speeds up, the upward drag $bv$ grows, so the downward net force $mg-bv$ and hence $a$ shrink. When $bv$ approaches $mg$ the net force approaches zero and the speed stops changing. The sphere cannot overshoot $v_t$: if $v$ were larger than $v_t$ the drag would exceed the weight, the net force would point upward, and the sphere would slow. So $v_t$ is a stable limit approached from below.</p>
<p>(f) $m\dfrac{dv}{dt}=mg-cv^2$; $a=0\Rightarrow v_t=\sqrt{mg/c}$. The curve $v_t\tanh(gt/v_t)$ still starts with slope $g$ and levels off at $v_t$, but (compared with the exponential having the same $v_t$) it lies above the exponential, so it approaches $v_t$ sooner, though still only asymptotically; also $v_t\propto\sqrt m$ rather than $\propto m$, so doubling the mass raises $v_t$ by only $\sqrt2$.</p>`},
  {id:"f3", type:"Mathematical routines", title:"Block on a block, pulled",
   prompt:String.raw`<p>Block A (3.0 kg) rests on block B (6.0 kg). B rests on a frictionless horizontal table. The coefficients of friction between A and B are $\mu_s=0.50$ and $\mu_k=0.40$. A horizontal force $F$ is applied to B (not to A). Use $g=10$ m/s².</p>
<p>(a) Draw free-body diagrams of A and B, showing all horizontal and vertical forces on each.<br>
(b) Explain which force accelerates A when it does not slip on B, and in which direction it points.<br>
(c) Find the largest $F$ for which A does not slip on B.<br>
(d) For $F=27$ N, find the acceleration of the blocks and the friction force on A.<br>
(e) For $F=63$ N, find the acceleration of each block.<br>
(f) In the case of part (e), A starts at the front end of B, which is 1.8 m long. How long before A slides off the rear end? Explain, using Newton's third law, why the acceleration of B is less than $F/m_B$.</p>`,
   pts:[
    {p:1,d:String.raw`FBD of A: weight, normal from B, friction from B (horizontal, forward)`},
    {p:1,d:String.raw`FBD of B: weight, normal from table, force from A on B (normal, down), friction from A (backward), and $F$`},
    {p:1,d:String.raw`Identifies static friction from B on A, directed forward, as the only horizontal force on A`},
    {p:1,d:String.raw`$a_{A,max}=\mu_sg=5.0$ m/s² from the limiting friction $\mu_sm_Ag$`},
    {p:1,d:String.raw`$F_{max}=(m_A+m_B)a=45$ N`},
    {p:1,d:String.raw`$a=F/(m_A+m_B)=3.0$ m/s²`},
    {p:1,d:String.raw`$f=m_Aa=9.0$ N (static, below the 15 N maximum, so no slipping)`},
    {p:1,d:String.raw`Recognizes slipping ($63>45$) and uses kinetic friction $\mu_km_Ag=12$ N, forward on A and backward on B`},
    {p:1,d:String.raw`$a_A=4.0$ m/s² and $a_B=(63-12)/6=8.5$ m/s²`},
    {p:1,d:String.raw`$t=\sqrt{2L/(a_B-a_A)}=\sqrt{2(1.8)/4.5}=0.89$ s (relative acceleration 4.5 m/s²)`},
    {p:1,d:String.raw`Third law: A pushes B backward with an equal 12 N, so the net force on B is $F-12=51$ N rather than $F$`}],
   solution:String.raw`<p>(a) A: weight $30$ N down, normal $30$ N up from B, friction from B horizontal (forward). B: weight 60 N down, normal from table up, normal from A (30 N) down, $F$ forward, friction from A backward.</p>
<p>(b) Without slipping A accelerates forward; the only horizontal force on A is static friction from B, so it points forward (in the direction of $F$).</p>
<p>(c) $f_{max}=\mu_sm_Ag=15$ N, so $a_{max}=15/3=5.0$ m/s². Together: $F_{max}=9(5.0)=45$ N.</p>
<p>(d) $a=27/9=3.0$ m/s². $f=3(3.0)=9.0$ N, below 15 N: valid.</p>
<p>(e) $63>45$: slipping. $f_k=0.40(30)=12$ N. $a_A=12/3=4.0$ m/s² forward; $a_B=(63-12)/6=8.5$ m/s².</p>
<p>(f) Relative acceleration 4.5 m/s²: $1.8=\tfrac12(4.5)t^2\Rightarrow t=0.894$ s. By the third law, A pulls B backward with the same 12 N it receives; $F$ alone is not the net force on B, so $a_B=(F-12)/6&lt;F/6=10.5$ m/s².</p>`},

  {id:"f4", type:"Experimental design & analysis", title:"Testing Newton's second law with a cart and hanging mass",
   prompt:String.raw`<p>A student tests $F=ma$ with a low-friction cart on a horizontal track. A light string runs from the cart over a light pulley to a hanger. Use $g=9.8$ m/s². The student keeps the <b>total</b> mass of cart + weights + hanger fixed at $M=0.600$ kg (measured on a balance) by moving small masses between the cart and the hanger, and varies the hanging mass $m$. For each $m$ the acceleration $a$ is found from the cart's velocity measured by a motion sensor.</p>
<table><tr><th>$m$ (kg)</th><td>0.020</td><td>0.040</td><td>0.060</td><td>0.080</td><td>0.100</td></tr><tr><th>$a$ (m/s²)</th><td>0.28</td><td>0.60</td><td>0.93</td><td>1.26</td><td>1.58</td></tr></table>
<p>(a) Describe how $a$ can be obtained from the sensor's data, and how to reduce random error.<br>
(b) Explain why the total mass is held constant, and what would go wrong with a plot of $a$ versus $m$ if the cart's mass were held fixed instead.<br>
(c) Derive the predicted relationship between $a$ and $m$ for an ideal, frictionless setup (write Newton's law for the cart and for the hanger).<br>
(d) Using the data (a best-fit line through them has slope about 16.3 m/s² per kg), find the slope's meaning and use it to compute $M$ and compare with the balance value.<br>
(e) The best-fit line has an intercept of about $-0.048$ m/s². Interpret it, and find the friction force on the cart.<br>
(f) Name one systematic error that would change the slope, and say how.<br>
(g) The same track is tilted until the cart (disconnected, wheels locked) just begins to slide. Show how to find $\mu_s$ from the angle and give one way to estimate its uncertainty.</p>`,
   pts:[
    {p:1,d:String.raw`Acceleration from the slope of $v$ versus $t$ (or from $x=\tfrac12at^2$ with a stopwatch); repeats, averaging, fitting a line over many points`},
    {p:1,d:String.raw`Total mass fixed so the moved system's inertia is the same, so $a$ depends only on the net force $mg$; if only $m$ changed the system mass would change and $a$ versus $m$ would curve (saturating at $g$)`},
    {p:1,d:String.raw`Hanger: $mg-T=ma$; cart: $T=(M-m)a$ (or system $mg=Ma$)`},
    {p:1,d:String.raw`$a=(g/M)\,m$, linear through the origin`},
    {p:1,d:String.raw`Slope $=g/M$`},
    {p:1,d:String.raw`$M=g/\text{slope}=9.8/16.3=0.60$ kg, in agreement with the balance (0.600 kg)`},
    {p:1,d:String.raw`Intercept: $a=(mg-f)/M$, so the intercept is $-f/M$ (a minimum hanging mass is needed to overcome friction; the line crosses $a=0$ at about 3 grams of hanging mass)`},
    {p:1,d:String.raw`$f\approx0.048(0.600)=0.029$ N`},
    {p:1,d:String.raw`One valid systematic error and its effect, e.g. the pulley's rotational inertia $I$ makes the effective mass $M+I/R^2$, lowering the slope and making the inferred $M$ too large; or a string that is not level (not parallel to the track)`},
    {p:1,d:String.raw`$\mu_s=\tan\theta$ from $mg\sin\theta=\mu_smg\cos\theta$ at slip; uncertainty from repeated trials or from measuring height and base ($\tan\theta=h/b$) with the uncertainty in each`}],
   solution:String.raw`<p>(a) A motion sensor gives $v(t)$; the slope of a straight-line fit is $a$. Repeat each run several times and average (or use the fit's uncertainty).</p>
<p>(b) With the total mass fixed, the same system is accelerated by a net force $mg$, so $a=mg/M$ is linear in $m$. If instead cart mass was fixed and mass added to the hanger, the moving mass would be $M_c+m$, giving $a=mg/(M_c+m)$, a curve that flattens toward $g$. One can still linearize with $1/a$ versus $1/m$, but the constant-total-mass design is simpler.</p>
<p>(c) Hanger (down positive): $mg-T=ma$; cart: $T=(M-m)a$. Adding: $mg=Ma$, so $a=(g/M)m$.</p>
<p>(d) Slope $=g/M$. $M=9.8/16.3=0.601$ kg, consistent with the balance reading of 0.600 kg.</p>
<p>(e) With friction $f$ on the cart, $mg-f=Ma$, $a=(g/M)m-f/M$. The intercept $-f/M=-0.048$ m/s² gives $f=0.029$ N; the line crosses $a=0$ at $m=f/g=0.029/9.8\approx3$ grams. (Friction on the cart really depends on its normal force, which changes slightly as mass moves between cart and hanger, so $f$ is only approximately constant; for a low-friction cart the effect on the slope is under 1%.) A stretching string would not change $a$ for an ideal string, so it is not a systematic error here.</p>
<p>(f) Pulley with rotational inertia $I$: the effective mass is $M+I/R^2$, so slope $g/(M+I/R^2)$ is smaller and the $M$ inferred from the slope is too large. (Any answer that identifies an error and its direction is acceptable.)</p>
<p>(g) At the verge of slipping, $mg\sin\theta=\mu_smg\cos\theta$, so $\mu_s=\tan\theta$ (mass cancels). Measure the height $h$ and base $b$ of the track and use $\tan\theta=h/b$, repeating the trial, and take the spread of the results as the uncertainty.</p>`}

  ]
});
