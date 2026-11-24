PH.unit({
  id:"m2", course:"mech", order:40, hours:9,
  title:"Mechanics 2: Force and Translational Dynamics",
  blurb:"Newton's laws as a working tool: draw the forces, write $\\sum\\vec F=m\\vec a$ along each axis, and solve. Friction, pulleys, circular motion, drag (as an ODE), and forces that change with time.",
  needs:["m1"],
  goals:[
    "State Newton's three laws precisely, including what an inertial frame is and why the first law is not a special case of the second",
    "Draw a correct free-body diagram and turn it into component equations $\\sum F_x=ma_x$, $\\sum F_y=ma_y$",
    "Distinguish mass from weight and explain what the normal force actually is (including apparent weight in an accelerating elevator)",
    "Use $f_s\\le\\mu_sN$ and $f_k=\\mu_kN$ on flat surfaces and inclines, and decide which regime applies",
    "Solve connected-body, pulley and Atwood problems, choosing sensible systems and sign conventions",
    "Treat circular motion as $\\sum F_{\\text{toward center}}=mv^2/r$: flat, banked, vertical and conical-pendulum cases",
    "Solve $m\\,dv/dt=mg-bv$ for $v(t)$, find terminal velocity and $\\tau=m/b$, and set up the quadratic-drag equation",
    "Integrate $a=F(t)/m$ and $v\\,dv=(F(x)/m)\\,dx$ when the force is not constant"
  ],
  lessons:[
  {id:"l1", title:"Newton's laws, inertial frames, mass and weight", html:String.raw`
<p>Kinematics (Unit 1) described motion. Dynamics explains <i>why</i> motion changes. The key new quantity is <b>force</b>: a push or pull exerted by one object on another, measured in newtons ($1\ \text{N}=1\ \text{kg m/s}^2$). Forces are vectors, and they add.</p>
<div class="box key"><b>First law (inertia).</b> There exist reference frames, called <b>inertial frames</b>, in which an object that has no net force on it moves with constant velocity (possibly zero).</div>
<p>The first law is not just "the second law with $a=0$". It is the statement that inertial frames exist, and it is what tells you which frames the second law may be used in. A frame accelerating relative to an inertial frame (a braking car, a spinning carousel) is <b>non-inertial</b>: a coffee cup on the dashboard seems to accelerate forward with no force on it. Within an inertial frame, any frame moving at constant velocity relative to it is also inertial. For AP problems, the ground (and anything moving uniformly relative to it) is inertial. Always analyze in an inertial frame and you never need "fictitious forces".</p>
<div class="box key"><b>Second law.</b> For an object of constant mass $m$ in an inertial frame,
$$\sum\vec F=m\vec a\qquad\Longleftrightarrow\qquad \sum F_x=ma_x,\ \ \sum F_y=ma_y$$
where $\sum\vec F$ is the vector sum of every force acting <i>on</i> the object. (The more general form is $\sum\vec F=d\vec p/dt$; see Unit 4.)</div>
<p>Read this equation as a recipe: sum <i>only</i> forces on the chosen object, never "$ma$" as a force, and treat each axis separately. Because each axis is separate, you may pick axes cleverly (along an incline, along the radius of a circle).</p>
<div class="box key"><b>Third law.</b> If object A exerts a force on object B, then B exerts a force on A of equal magnitude and opposite direction. The two forces are the same kind of force, act on <i>different</i> objects, and so never appear in the same free-body diagram.</div>
<div class="box trap"><b>Trap:</b> "The normal force is the reaction to gravity." No. The reaction to Earth pulling on a book is the book pulling on Earth. The reaction to the table pushing up on the book is the book pushing down on the table. Weight and normal force are often equal in magnitude only because the book's acceleration is zero (second law), not because of the third law.</div>
<p><b>Mass vs weight.</b> <b>Mass</b> $m$ is a measure of an object's resistance to acceleration (inertia); it is the same everywhere. <b>Weight</b> is the gravitational force on the object near a planet: $\vec F_g=m\vec g$, magnitude $mg$, directed toward the planet's center. Near Earth's surface $g\approx 10$ m/s² (we use 10 throughout; the exact value is 9.8). A 5 kg object weighs 50 N on Earth and about 8 N on the Moon, but is 5 kg in both places.</p>
<p>The fact that gravitational "charge" and inertia are the same quantity is why all objects fall with the same acceleration $g$ when gravity is the only force: $mg=ma\Rightarrow a=g$.</p>`},

  {id:"l2", title:"Free-body diagrams and contact forces", html:String.raw`
<p>A <b>free-body diagram (FBD)</b> shows one object (as a dot or box) and every force acting <i>on it</i>, as arrows from the object. Nothing else. It is the single most valuable habit in this unit. Procedure:</p>
<ol>
<li>Isolate one object. Decide what touches it (each contact can supply forces) and whether a field (gravity) acts.</li>
<li>Draw each force with its direction. Label it by source and type ($N$, $f$, $T$, $mg$).</li>
<li>Choose axes aligned with the motion (or with the expected acceleration). Resolve any tilted force into components.</li>
<li>Write $\sum F=ma$ for each axis.</li>
</ol>
<svg class="fig" viewBox="0 0 330 200" width="330" role="img" aria-label="Free body diagram of a block sliding down a rough incline: weight mg straight down, normal force N perpendicular to the surface, kinetic friction f up the slope, and the components mg sin theta along and mg cos theta perpendicular to the incline">
<defs><marker id="m2a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<polygon points="30,180 290,180 290,30" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="1.5"/>
<path d="M70,180 A40,40 0 0 0 65,160" fill="none" stroke="currentColor"/><text x="76" y="173" font-size="12">θ</text>
<g transform="translate(150,111) rotate(-30)"><rect x="-22" y="-32" width="44" height="32" fill="currentColor" fill-opacity=".18" stroke="currentColor"/></g>
<g stroke="currentColor" stroke-width="2" fill="none" marker-end="url(#m2a)">
<line x1="142" y1="95" x2="142" y2="158" marker-end="url(#m2a)"/>
<line x1="142" y1="95" x2="110" y2="150" stroke-opacity="0"/>
<line x1="142" y1="95" x2="165" y2="55" marker-end="url(#m2a)"/>
<line x1="142" y1="95" x2="187" y2="69" marker-end="url(#m2a)"/>
</g>
<text x="148" y="160" font-size="12">mg</text><text x="150" y="50" font-size="12">N</text><text x="190" y="66" font-size="12">f</text>
<text x="20" y="22" font-size="11">N ⟂ surface, f along surface (up slope</text><text x="20" y="36" font-size="11">since block slides down), mg straight down</text>
</svg>
<p><b>Normal force $N$.</b> The component of a contact force perpendicular to a surface. It is whatever value is needed to keep the object from accelerating <i>into</i> the surface (a spring-like response of the material). It is not "$mg$" by definition: on a level floor with nothing else vertical, $N=mg$; on a $30^\circ$ incline $N=mg\cos30^\circ$; if you also pull up on the object, $N$ shrinks. Always get $N$ from the perpendicular-axis equation.</p>
<p><b>Tension $T$.</b> A force transmitted along a rope or string, directed away from the object along the rope. For an ideal (massless) rope over an ideal (frictionless, massless) pulley, $T$ is the same everywhere along the rope. If the rope has mass, or the pulley has rotational inertia (Unit 5), the tension differs on two sides.</p>
<p><b>Apparent weight and the elevator.</b> A scale measures the normal force $N$ it exerts on you. In an elevator accelerating upward with $a$ (positive up), you accelerate with it: $N-mg=ma$, so
$$N=m(g+a).$$
Accelerating upward: you feel heavier. Accelerating <i>downward</i> (including moving up while slowing down): $N=m(g-|a|)$, lighter. In free fall $a=-g$ and $N=0$: weightlessness (apparent). Only the <i>acceleration</i> matters, not the direction of the velocity. An elevator at constant velocity, up or down, reads exactly $mg$. This is the cleanest example of why $N\ne mg$ in general.</p>
<div class="box trap"><b>Trap:</b> Do not draw "centripetal force", "force of motion" or "$ma$" on an FBD. These are not forces on the object. Draw only real interactions: gravity, contact (normal, friction, tension, drag), and later fields.</div>`},

  {id:"l3", title:"Friction, inclines, pulleys and connected bodies", html:String.raw`
<p><b>Friction</b> is the component of the contact force parallel to the surface, opposing relative sliding (or its tendency). Empirically:</p>
$$f_s\le\mu_sN\ \ (\text{static, no slipping}),\qquad f_k=\mu_kN\ \ (\text{kinetic, sliding}),\qquad \mu_k<\mu_s\ \text{typically.}$$
<p>Static friction is <i>adjustable</i>: it takes whatever value (up to $\mu_sN$) keeps the surfaces from slipping. If you push gently on a heavy crate and it does not move, $f_s$ equals your push. Only at the verge of slipping does $f_s=\mu_sN$. Kinetic friction is a fixed value $\mu_kN$ once sliding, independent of speed and contact area.</p>
<div class="box key"><b>Incline.</b> Axes along and perpendicular to the slope. Gravity splits into $mg\sin\theta$ (along, downhill) and $mg\cos\theta$ (into the surface). Then $N=mg\cos\theta$, and for a block sliding down: $a=g(\sin\theta-\mu_k\cos\theta)$. A block just begins to slip when $\tan\theta=\mu_s$; the mass cancels.</div>
<div class="box trap"><b>Trap:</b> The direction of friction opposes the <i>sliding</i> (relative motion of surfaces), not the applied force. A block sliding up an incline has friction pointing down the slope; the same block sliding back down has friction pointing up the slope, so its acceleration magnitude differs on the way up and the way down.</div>
<p><b>Connected bodies.</b> If two objects are connected by a taut, inextensible rope, they share the magnitude of acceleration along the rope. Write $\sum F=ma$ for each object with a consistent sign convention (define the positive direction as "the direction the system accelerates", even if you must guess), then solve the simultaneous equations. A negative $a$ just means you guessed the direction backwards.</p>
<svg class="fig" viewBox="0 0 300 190" width="300" role="img" aria-label="Atwood machine: two masses m1 and m2 hanging on either side of a pulley, with tension T up on each and weights m1 g and m2 g down">
<defs><marker id="m2b" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<line x1="90" y1="15" x2="210" y2="15" stroke="currentColor" stroke-width="3"/><line x1="150" y1="15" x2="150" y2="30" stroke="currentColor"/>
<circle cx="150" cy="48" r="18" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="132" y1="48" x2="132" y2="135" stroke="currentColor"/><line x1="168" y1="48" x2="168" y2="105" stroke="currentColor"/>
<rect x="114" y="135" width="36" height="30" fill="currentColor" fill-opacity=".18" stroke="currentColor"/><text x="125" y="155" font-size="13">m₁</text>
<rect x="150" y="105" width="36" height="30" fill="currentColor" fill-opacity=".18" stroke="currentColor"/><text x="161" y="125" font-size="13">m₂</text>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="132" y1="135" x2="132" y2="100" marker-end="url(#m2b)"/><line x1="168" y1="105" x2="168" y2="75" marker-end="url(#m2b)"/>
<line x1="132" y1="150" x2="132" y2="185" marker-end="url(#m2b)"/><line x1="168" y1="120" x2="168" y2="165" marker-end="url(#m2b)"/></g>
<text x="95" y="112" font-size="12">T</text><text x="175" y="82" font-size="12">T</text><text x="85" y="182" font-size="12">m₁g</text><text x="175" y="170" font-size="12">m₂g</text>
</svg>
<p><b>Atwood machine</b> ($m_2>m_1$, ideal rope and pulley). Let positive be "$m_2$ down, $m_1$ up":</p>
$$m_2g-T=m_2a,\qquad T-m_1g=m_1a\ \Rightarrow\ a=\frac{m_2-m_1}{m_1+m_2}g,\quad T=\frac{2m_1m_2}{m_1+m_2}g.$$
<p>Check limits: $m_1=m_2\Rightarrow a=0,\ T=mg$; $m_1\to0\Rightarrow a\to g,\ T\to0$ (free fall). Always run these sanity checks.</p>
<p><b>Systems.</b> You may also draw one FBD around the whole system. Then the internal forces (tension) cancel in pairs by the third law and you get the total: for the Atwood machine, $(m_2-m_1)g=(m_1+m_2)a$ directly. Use the system for $a$, then a single object for the internal force $T$. Two blocks $m_1$, $m_2$ pulled by $F$ along a frictionless table: $a=F/(m_1+m_2)$, and the rope force on the trailing block is $m_1a$.</p>`},

  {id:"l4", title:"Circular motion", html:String.raw`
<p>An object moving in a circle of radius $r$ at speed $v$ has acceleration of magnitude
$$a_c=\frac{v^2}{r}=\omega^2r$$
directed toward the center (even when the speed is constant, the <i>direction</i> of velocity changes). Newton's second law then requires a net force toward the center:</p>
<div class="box key">$\displaystyle\sum F_{\text{toward center}}=\frac{mv^2}{r}$. "Centripetal force" is not a new force. It is the name for the net inward component of the real forces (tension, gravity, normal, friction). Never put it on the FBD as a separate arrow.</div>
<p><b>Procedure.</b> Draw the real forces. Choose one axis pointing toward the center and one perpendicular (vertical or tangential). Write $\sum F_{in}=mv^2/r$ along the first.</p>
<p><b>Flat curve.</b> Friction is the only inward force; it is static, since the tire does not slip along the road. $f_s=mv^2/r\le\mu_smg\Rightarrow v_{max}=\sqrt{\mu_sgr}$.</p>
<svg class="fig" viewBox="0 0 320 170" width="320" role="img" aria-label="Car on a banked curve seen from behind: banked surface at angle theta, normal force N perpendicular to the surface tilted toward the center, weight mg down, and a dashed horizontal arrow toward the center showing the net force">
<defs><marker id="m2c" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<polygon points="40,150 290,150 290,70" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="1.5"/>
<text x="55" y="140" font-size="12">center of circle is to the left</text>
<g transform="translate(165,110) rotate(-17.7)"><rect x="-20" y="-20" width="40" height="20" fill="currentColor" fill-opacity=".18" stroke="currentColor"/></g>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="165" y1="95" x2="165" y2="150" marker-end="url(#m2c)"/>
<line x1="165" y1="95" x2="190" y2="44" marker-end="url(#m2c)" stroke-opacity="0"/>
<line x1="165" y1="95" x2="140" y2="43" marker-end="url(#m2c)" transform="translate(0,0)" stroke-opacity="0"/>
<line x1="165" y1="95" x2="145" y2="48" marker-end="url(#m2c)" stroke-opacity="0"/></g>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="165" y1="95" x2="145" y2="40" marker-end="url(#m2c)" stroke-opacity="0"/></g>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="165" y1="95" x2="190" y2="38" marker-end="url(#m2c)" stroke-opacity="0"/></g>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="165" y1="95" x2="146" y2="40" stroke-opacity="0"/></g>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="165" y1="95" x2="190" y2="35" stroke-opacity="0"/></g>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="165" y1="95" x2="147" y2="40" stroke-opacity="0"/></g>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="165" y1="95" x2="179" y2="40" stroke-opacity="0"/></g>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="165" y1="95" x2="165" y2="35" stroke-opacity="0"/></g>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="165" y1="95" x2="195" y2="45" stroke-opacity="0"/></g>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="165" y1="95" x2="143" y2="42" stroke-opacity="0"/></g>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="165" y1="95" x2="194" y2="44" stroke-opacity="0"/></g>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="165" y1="95" x2="177" y2="38" stroke-opacity="0"/></g>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="165" y1="95" x2="196" y2="45" stroke-opacity="0"/></g>
</svg>
<p>PLACEHOLDER_REPLACED</p>`},

  {id:"l5", title:"Forces that vary: drag, F(t) and F(x)", html:String.raw`<p>PLACEHOLDER</p>`}
  ],
  examples:[],
  mcq:[],
  frq:[]
});
