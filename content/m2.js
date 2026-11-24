PH.unit({
  id:"m2", course:"mech", order:40, hours:9,
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
    "Integrate $a=F(t)/m$ and $v\\,dv=(F(x)/m)\\,dx$ when the force is not constant"
  ],
  lessons:[
  {id:"l1", title:"Newton's laws, inertial frames, mass and weight", html:String.raw`
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

  {id:"l2", title:"Free-body diagrams and contact forces", html:String.raw`
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

  {id:"l3", title:"Friction, inclines, pulleys and connected bodies", html:String.raw`
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

  {id:"l4", title:"Circular motion", html:String.raw`
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

  {id:"l5", title:"Forces that vary: F(t), F(x), and drag", html:String.raw`
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
For the AP, you must be able to find $v_t=\sqrt{mg/c}$, write the ODE, and sketch/describe the solution; the integral above is a good exercise but rarely demanded. Note the mass dependence differs: linear $v_t\propto m$, quadratic $v_t\propto\sqrt m$.</p>
<div class="box trap"><b>Trap:</b> "Terminal velocity is reached when the drag force reaches $mg$" is right, but the object only approaches it asymptotically. Do not use $v=at$ or $v^2=2gh$ once drag matters. Also when the object is moving upward, drag points <i>downward</i>, adding to gravity, so $a$ is larger than $g$ in magnitude.</div>`}
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
<p>(d) $540=60(10+a)\Rightarrow a=-1$ m/s², i.e. 1.0 m/s² <b>downward</b>. The velocity cannot be determined: the elevator could be moving down and speeding up, or moving up and slowing down. Only the acceleration enters the force law.</p>`}
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
   why:String.raw`<p>System: $a=20/5=4$ m/s². Only the rope pulls the 2.0 kg block: $T=2(4)=8$ N. The tension is not 20 N (the rope does not transmit the full force to the first block) and not 12 N (that is the net force on the 3.0 kg block, $20-8$).</p>`}
  ],
  frq:[
  {id:"f1", type:"Mathematical routines", title:"Blocks on an incline joined over a pulley",
   prompt:String.raw`<p>A block A of mass 5.0 kg is on a rough incline at $37^\circ$ ($\sin37^\circ=0.60$, $\cos37^\circ=0.80$). Coefficients of friction between A and the incline are $\mu_s=0.30$ and $\mu_k=0.25$. A light rope attached to A runs up the incline and over an ideal pulley to a hanging block B of mass 5.0 kg. The system is released from rest. Use $g=10$ m/s².</p>
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
    {p:1,d:"$v_t=\\sqrt{mg/c}$ and a valid qualitative difference (reaches $v_t$ more quickly in this form for equal $v_t$ and $g$ / initial slope same; terminal speed scales as $\\sqrt m$ rather than $m$; tanh shape)"}],
   solution:String.raw`<p>(a) Weight $mg$ down, drag $bv$ up. Taking down as positive, $m\dfrac{dv}{dt}=mg-bv$.</p>
<p>(b) $dv/dt=0\Rightarrow v_t=mg/b=0.5(10)/0.25=20$ m/s.</p>
<p>(c) $\dfrac{dv}{dt}=\dfrac{v_t-v}{\tau}$ with $\tau=m/b=2.0$ s. $\displaystyle\int_0^v\frac{dv'}{v_t-v'}=\int_0^t\frac{dt'}{\tau}\Rightarrow -\ln\frac{v_t-v}{v_t}=\frac t\tau\Rightarrow v=v_t(1-e^{-t/\tau})=20(1-e^{-t/2})$. At 2.0 s: $20(1-0.368)=12.6$ m/s.</p>
<p>(d) $v(t)$: starts at the origin with initial slope 10 m/s², rises concave down, asymptote $v=20$ m/s; it reaches 63% of 20 m/s (12.6 m/s) at $t=\tau=2$ s. $a(t)=g\,e^{-t/\tau}$: starts at 10 m/s² at $t=0$ and decays exponentially toward the axis (a(2 s) = 3.7 m/s²).</p>
<p>(e) At release $v=0$, drag is zero, and the only force is gravity: $a=g$. As the sphere speeds up, the upward drag $bv$ grows, so the downward net force $mg-bv$ and hence $a$ shrink. When $bv$ approaches $mg$ the net force approaches zero and the speed stops changing. The sphere cannot overshoot $v_t$: if $v$ were larger than $v_t$ the drag would exceed the weight, the net force would point upward, and the sphere would slow. So $v_t$ is a stable limit approached from below.</p>
<p>(f) $m\dfrac{dv}{dt}=mg-cv^2$; $a=0\Rightarrow v_t=\sqrt{mg/c}$. The curve $v_t\tanh(gt/v_t)$ still starts with slope $g$ and levels off at $v_t$, but (compared with the exponential having the same $v_t$) it bends over faster and flattens more abruptly; also $v_t\propto\sqrt m$ rather than $\propto m$, so doubling the mass raises $v_t$ by only $\sqrt2$.</p>`}
  ]
});
