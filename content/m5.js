PH.unit({
  id:"m5", course:"mech", order:70, hours:14,
  title:"Mechanics 5: Torque and Rotational Dynamics",
  blurb:"Everything you know about force, momentum and energy, rebuilt for spinning objects. Torque is the new force, rotational inertia is the new mass, and angular momentum is the new momentum. One of the hardest AP C units, but almost every idea is a translation of one you already have.",
  needs:["m1","m2","m3","m4"],
  goals:[
    "Use $\\theta,\\omega,\\alpha$ exactly like $x,v,a$, and connect them with $s=r\\theta$, $v=\\omega r$, $a_t=\\alpha r$, $a_c=\\omega^2 r$",
    "Compute torque as $\\vec\\tau=\\vec r\\times\\vec F$, magnitude and direction (right-hand rule)",
    "Derive $I=\\int r^2\\,dm$ for a rod, ring, disk and use the parallel-axis theorem (and prove it)",
    "Apply $\\tau_{net}=I\\alpha$ to pulleys with mass and rolling objects, by both force and energy methods",
    "Predict which shape wins a race down an incline and find the friction needed to roll without slipping",
    "Use $\\vec L=\\vec r\\times\\vec p$, $L=I\\omega$, $\\tau=dL/dt$ and conservation of angular momentum, including collisions where kinetic energy is lost",
    "Solve static equilibrium problems (beams, ladders) by choosing a clever pivot point",
    "Analyze a rod swinging about a pivot (angle-dependent $\\alpha$, energy, hinge force), a ball that starts slipping, a pulled spool, and rolling up hills and loops",
    "Use angular momentum for central forces (string through a hole) and for coupled disks and turntables"
  ],
  lessons:[
  {id:"l1", title:"Rotational kinematics and torque",videos:[{title:"Search: rotational kinematics and torque, AP Physics C",url:"https://www.youtube.com/results?search_query=Flipping+Physics+rotational+kinematics+torque+cross+product+AP+Physics+C",src:"YouTube search",note:"Look for Flipping Physics results on angular velocity, v = omega r, and torque as r x F."}], html:String.raw`
<p>Consider a rigid object spinning about a fixed axis. Every point moves in a circle about the axis, and every point sweeps through the <b>same</b> angle in the same time. So one set of angular variables describes the whole object. Measure the angle $\theta$ in <b>radians</b> (so arc length is $s=r\theta$), counterclockwise positive:</p>
$$\omega=\frac{d\theta}{dt},\qquad \alpha=\frac{d\omega}{dt}=\frac{d^2\theta}{dt^2},\qquad \theta(t)=\theta_0+\int_0^t\omega\,dt',\qquad \omega(t)=\omega_0+\int_0^t\alpha\,dt'$$
<p>$\omega$ is the <b>angular velocity</b> (rad/s) and $\alpha$ the <b>angular acceleration</b> (rad/s²). This is Unit 1 with $x\to\theta$, $v\to\omega$, $a\to\alpha$. In particular, for <i>constant</i> $\alpha$ (and only then):</p>
$$\omega=\omega_0+\alpha t,\qquad \theta=\theta_0+\omega_0t+\tfrac12\alpha t^2,\qquad \omega^2=\omega_0^2+2\alpha(\theta-\theta_0)$$
<p><b>From angular to linear.</b> A point at distance $r$ from the axis travels arc length $s=r\theta$. Differentiate with $r$ fixed:</p>
$$v=\omega r,\qquad a_t=\alpha r\ \ (\text{tangential}),\qquad a_c=\frac{v^2}{r}=\omega^2r\ \ (\text{centripetal, toward the axis})$$
<p>The total acceleration of the point is the vector sum of these two perpendicular parts. Points farther out move faster, but all share the same $\omega$ and $\alpha$.</p>
<svg class="fig" viewBox="0 0 300 200" width="300" role="img" aria-label="A disk seen from above with a point P at radius r, a tangential velocity arrow, and a counterclockwise omega arc">
<defs><marker id="ar1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<circle cx="110" cy="100" r="80" fill="currentColor" fill-opacity=".08" stroke="currentColor"/>
<circle cx="110" cy="100" r="3" fill="currentColor"/>
<line x1="110" y1="100" x2="166" y2="44" stroke="currentColor" stroke-dasharray="4 3"/>
<circle cx="166" cy="44" r="4" fill="currentColor"/>
<line x1="166" y1="44" x2="216" y2="94" stroke="currentColor" stroke-width="2" marker-end="url(#ar1)"/>
<path d="M135 100 A25 25 0 0 0 128 82" fill="none" stroke="currentColor" marker-end="url(#ar1)"/>
<text x="84" y="116">axis</text><text x="125" y="62">r</text><text x="172" y="38">P</text><text x="214" y="82">v = ωr</text><text x="138" y="124">ω</text>
<text x="20" y="190" font-size="12">Counterclockwise is positive; v is tangent to the circle.</text></svg>
<div class="box key"><b>Direction of $\vec\omega$ (right-hand rule).</b> Curl the fingers of your right hand in the direction of rotation; your thumb gives the direction of the vector $\vec\omega$ (along the axis). Then $\vec v=\vec\omega\times\vec r$. For a fixed axis you can just say "counterclockwise $=+$".</div>

<p><b>Torque.</b> Force makes things accelerate; <b>torque</b> makes things start to rotate. A force $\vec F$ applied at position $\vec r$ (measured from the axis or reference point $O$) has torque</p>
$$\vec\tau=\vec r\times\vec F,\qquad |\vec\tau|=rF\sin\phi=r_\perp F=rF_\perp$$
<p>where $\phi$ is the angle between $\vec r$ and $\vec F$. Three equivalent readings of $rF\sin\phi$: (force component perpendicular to $\vec r$) $\times r$; (force) $\times$ (<b>moment arm</b> $r_\perp$, the perpendicular distance from the pivot to the force's line of action); or $r\times$ force. Direction by the right-hand rule: curl your fingers from $\vec r$ toward $\vec F$ and the thumb gives $\vec\tau$. Units: N·m (not joules, even though the dimensions match; torque is not an energy).</p>
<svg class="fig" viewBox="0 0 320 170" width="320" role="img" aria-label="A wrench of length r pivoted at the left; a force F at angle phi to the wrench; the moment arm is the perpendicular distance from the pivot to the line of action of the force">
<defs><marker id="ar2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<line x1="40" y1="120" x2="200" y2="120" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
<circle cx="40" cy="120" r="5" fill="currentColor"/>
<line x1="200" y1="120" x2="260" y2="50" stroke="currentColor" stroke-width="2" marker-end="url(#ar2)"/>
<line x1="200" y1="120" x2="290" y2="15" stroke="currentColor" stroke-dasharray="4 4" opacity=".5"/>
<line x1="40" y1="120" x2="40" y2="120" stroke="currentColor"/>
<line x1="40" y1="145" x2="200" y2="145" stroke="currentColor" opacity=".5"/>
<path d="M225 120 A25 25 0 0 0 218 102" fill="none" stroke="currentColor"/>
<text x="124" y="138">r</text><text x="262" y="48">F</text><text x="228" y="112" font-size="12">φ</text><text x="30" y="108">O</text>
<text x="10" y="165" font-size="12">τ = rF sin φ, out of the page if F tends to turn the wrench counterclockwise</text></svg>
<div class="box trap"><b>Trap:</b> A force along the line through the pivot ($\phi=0$ or $180^\circ$) has zero torque no matter how big. Pushing a door at the hinge does nothing; pushing at the handle perpendicular to the door ($\phi=90^\circ$) is best.</div>
<p>When several forces act, $\tau_{net}=\sum\tau_i$ about the <b>same</b> point, with signs (counterclockwise $+$). Gravity on an extended object acts as if it were all at the center of mass, so its torque about a pivot is $Mg\,x_{cm}$ with $x_{cm}$ the horizontal distance from the pivot.</p>`},
  {id:"l2", title:"Rotational inertia and the parallel-axis theorem",videos:[{title:"Rotations, Part II: Parallel Axis Theorem",url:"https://oyc.yale.edu/node/1559",src:"Yale Open Courses (Physics 200)",note:"Calculus-based treatment of rotational inertia and the parallel-axis theorem."}], html:String.raw`
<p>Linear: more mass means harder to accelerate. Rotational: more mass <i>far from the axis</i> means harder to spin up. The measure is the <b>rotational inertia</b> (moment of inertia) about a chosen axis:</p>
$$I=\sum_i m_ir_i^2\ \longrightarrow\ I=\int r^2\,dm,\qquad r=\text{perpendicular distance from the axis to }dm$$
<p>Units kg·m². $I$ depends on the axis chosen, not just the object. The $r^2$ is the whole story: a mass at twice the distance counts four times as much. (The next lesson shows <i>why</i> this combination is the right one: $\tau=I\alpha$.)</p>
<p><b>Technique.</b> Pick a mass element $dm$, express it as (density)$\times$(small length, area or volume), write $r$ for it, integrate. Always check units and a limit.</p>
<svg class="fig" viewBox="0 0 340 120" width="340" role="img" aria-label="A uniform rod of length L along the x axis from 0 to L with a small element dm of width dx at position x">
<line x1="30" y1="60" x2="310" y2="60" stroke="currentColor" stroke-width="8" stroke-linecap="round" opacity=".6"/>
<rect x="150" y="48" width="10" height="24" fill="currentColor"/>
<line x1="30" y1="95" x2="310" y2="95" stroke="currentColor"/><line x1="30" y1="90" x2="30" y2="100" stroke="currentColor"/><line x1="310" y1="90" x2="310" y2="100" stroke="currentColor"/><line x1="155" y1="90" x2="155" y2="100" stroke="currentColor"/>
<text x="24" y="114">0</text><text x="150" y="114">x</text><text x="305" y="114">L</text><text x="140" y="38">dm = (M/L) dx</text></svg>
<p><b>Uniform rod (mass $M$, length $L$), axis perpendicular to the rod.</b> Linear density $\lambda=M/L$, so $dm=\frac ML dx$.</p>
$$I_{end}=\int_0^L x^2\frac ML\,dx=\frac ML\frac{L^3}{3}=\frac13ML^2,\qquad I_{cm}=\int_{-L/2}^{L/2}x^2\frac ML\,dx=\frac ML\cdot\frac{2}{3}\left(\frac L2\right)^3=\frac1{12}ML^2$$
<p><b>Thin ring or hollow cylinder (radius $R$), axis through the center, perpendicular to the plane.</b> Every bit of mass is at distance $R$:</p>
$$I=\int R^2\,dm=R^2\int dm=MR^2$$
<p><b>Uniform solid disk or cylinder (radius $R$), axis through the center.</b> Slice into thin rings of radius $r$, width $dr$. Area density $\sigma=M/(\pi R^2)$, ring mass $dm=\sigma\,2\pi r\,dr$:</p>
$$I=\int_0^R r^2\,\frac{M}{\pi R^2}\,2\pi r\,dr=\frac{2M}{R^2}\int_0^Rr^3\,dr=\frac{2M}{R^2}\frac{R^4}{4}=\frac12MR^2$$
<p><b>Solid sphere</b> (optional derivation). Stack disks of radius $\sqrt{R^2-z^2}$ and thickness $dz$, each with $dI=\tfrac12\,dm\,(R^2-z^2)$ and $dm=\rho\pi(R^2-z^2)dz$. Then $I=\tfrac12\rho\pi\int_{-R}^R(R^2-z^2)^2dz=\tfrac12\rho\pi\cdot\tfrac{16}{15}R^5$. With $M=\tfrac43\pi R^3\rho$, this is $\tfrac25MR^2$.</p>
<table><tr><th>Object (about the axis shown)</th><th>$I$</th><th>$\beta=I/MR^2$</th></tr>
<tr><td>Thin hoop / ring / hollow cylinder, central axis</td><td>$MR^2$</td><td>1</td></tr>
<tr><td>Solid disk / solid cylinder, central axis</td><td>$\tfrac12MR^2$</td><td>1/2</td></tr>
<tr><td>Solid sphere, through center</td><td>$\tfrac25MR^2$</td><td>2/5</td></tr>
<tr><td>Thin spherical shell, through center</td><td>$\tfrac23MR^2$</td><td>2/3</td></tr>
<tr><td>Thin rod, axis through center, perpendicular</td><td>$\tfrac1{12}ML^2$</td><td></td></tr>
<tr><td>Thin rod, axis through one end, perpendicular</td><td>$\tfrac13ML^2$</td><td></td></tr>
<tr><td>Point mass $m$ at distance $r$</td><td>$mr^2$</td><td></td></tr></table>
<p>Do not count on being handed this table: to my knowledge the AP equation sheet gives (check the current sheet) $I=\int r^2\,dm$, $I=\sum mr^2$ and the parallel-axis theorem, and exam problems usually state the specific $I$ they need. Memorize the common ones and be able to <i>derive</i> any of it with an integral, and recognize that a non-uniform object (for example $\lambda=kx$) needs its own integral.</p>
<div class="box key"><b>Sanity ordering.</b> For the same $M$ and $R$: hoop $>$ shell $>$ disk $>$ sphere. The more mass pushed to the rim, the larger $\beta$.</div>

<p><b>Parallel-axis theorem.</b> If the axis passes a perpendicular distance $d$ from a <i>parallel</i> axis through the center of mass, then</p>
$$I=I_{cm}+Md^2$$
<p><b>Proof.</b> Work in the plane perpendicular to the axes and put the origin at the center of mass. Let a mass element $dm$ be at $\vec{\rho}^{\prime}$ from the CM, and let the new axis be at displacement $\vec d$ from the CM. Then $dm$ is at $\vec\rho=\vec{\rho}^{\prime}-\vec d$ from the new axis, and</p>
$$I=\int|\vec{\rho}^{\prime}-\vec d|^2dm=\int\rho^{\prime 2}\,dm-2\vec d\cdot\int\vec{\rho}^{\prime}\,dm+d^2\int dm$$
<p>The first term is $I_{cm}$. The middle integral is $M$ times the CM position measured from the CM, which is $\vec 0$ by definition. The last is $Md^2$. Hence $I=I_{cm}+Md^2$. $\blacksquare$</p>
<p>Check: rod about its end, $d=L/2$: $\frac1{12}ML^2+M\frac{L^2}4=\frac13ML^2$. ✓.</p>
<div class="box trap"><b>Trap:</b> The theorem only moves between an axis through the CM and a parallel one. To go from end to some other point you must first go back to the CM (end $\to$ CM $\to$ new point). Also, adding $I$'s of parts is allowed (same axis), but you cannot add moments about different axes.</div>`},
  {id:"l3", title:"Rotational dynamics, energy, pulleys and rolling",videos:[{title:"Walter Lewin, MIT 8.01 Lecture 24: Rolling Motion",url:"https://opencw.aprende.org/courses/physics/8-01-physics-i-classical-mechanics-fall-1999/video-lectures/lecture-24",src:"Walter Lewin lectures (MIT OCW mirror)",note:"Pure rolling of hollow and solid cylinders and the acceleration down a ramp."},{title:"Search: torque and pulleys with mass",url:"https://www.youtube.com/results?search_query=Flipping+Physics+torque+pulley+with+mass+rotational+dynamics",src:"YouTube search",note:"Worked pulley-with-mass problems."}], html:String.raw`
<p><b>Newton's second law for rotation.</b> Take a rigid body spinning about a fixed axis. The tangential force on a piece $m_i$ at radius $r_i$ is $F_{t,i}=m_ia_{t,i}=m_ir_i\alpha$. Its torque is $r_iF_{t,i}=m_ir_i^2\alpha$. Summing over all pieces (internal forces cancel in pairs):</p>
$$\tau_{net}=\Big(\sum m_ir_i^2\Big)\alpha=I\alpha$$
<p>This is $F=ma$ with $F\to\tau$, $m\to I$, $a\to\alpha$. The axis and the point for computing torque must be the same, and torques are about the <b>axis of rotation</b> (or about the center of mass for a free object).</p>
<p><b>Work, power, energy.</b> $dW=\tau\,d\theta$, $P=\tau\omega$, and $\tau=I\alpha=I\,\omega\,d\omega/d\theta$ gives</p>
$$W=\int\tau\,d\theta=\Delta K_{rot},\qquad K_{rot}=\tfrac12I\omega^2$$
<p>For an object that both translates and rotates, $K=\tfrac12Mv_{cm}^2+\tfrac12I_{cm}\omega^2$.</p>
<p><b>Strategy for linked problems: pulleys with mass.</b> Draw a separate FBD for each object. For a string over a pulley that does not slip, $a=\alpha R$. Because the pulley has inertia, the string tensions on its two sides are <b>different</b>: the net torque $(T_2-T_1)R=I\alpha$ is what accelerates the pulley.</p>
<svg class="fig" viewBox="0 0 280 200" width="280" role="img" aria-label="A disk pulley with a mass hanging from a string on the right; tension T pulls down on the pulley rim and mg and T act on the mass">
<defs><marker id="ar3" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<line x1="60" y1="12" x2="150" y2="12" stroke="currentColor" stroke-width="3"/>
<circle cx="105" cy="55" r="40" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><circle cx="105" cy="55" r="3" fill="currentColor"/>
<line x1="145" y1="55" x2="145" y2="140" stroke="currentColor"/>
<rect x="125" y="140" width="40" height="30" fill="currentColor" fill-opacity=".25" stroke="currentColor"/>
<line x1="145" y1="140" x2="145" y2="105" stroke="currentColor" stroke-width="2" marker-end="url(#ar3)"/>
<line x1="145" y1="170" x2="145" y2="195" stroke="currentColor" stroke-width="2" marker-end="url(#ar3)"/>
<path d="M85 40 A22 22 0 0 1 125 40" fill="none" stroke="currentColor" marker-end="url(#ar3)"/>
<text x="155" y="108">T</text><text x="155" y="192">mg</text><text x="160" y="85" font-size="12">T pulls rim down</text><text x="95" y="75">M, R</text><text x="172" y="160">m</text></svg>
<p><b>Rolling without slipping.</b> A wheel of radius $R$ rolls on a surface and the contact point is instantaneously at rest relative to the surface. This ties the center's motion to the spin:</p>
$$v_{cm}=\omega R,\qquad a_{cm}=\alpha R$$
<p>Picture it as pure rotation about the contact point: the center moves at $v_{cm}$, the top at $2v_{cm}$, the bottom at 0. Equivalent energy: $K=\tfrac12I_{P}\omega^2$ with $I_P=I_{cm}+MR^2$ (parallel axis), or</p>
$$K=\tfrac12Mv^2+\tfrac12(\beta MR^2)\frac{v^2}{R^2}=\tfrac12Mv^2(1+\beta),\qquad \beta=\frac{I_{cm}}{MR^2}$$
<svg class="fig" viewBox="0 0 320 170" width="320" role="img" aria-label="A wheel rolling to the right with velocity v at its center, 2v at the top and 0 at the contact point on the ground">
<defs><marker id="ar4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<line x1="10" y1="150" x2="310" y2="150" stroke="currentColor"/>
<circle cx="160" cy="95" r="55" fill="currentColor" fill-opacity=".08" stroke="currentColor"/><circle cx="160" cy="95" r="3" fill="currentColor"/>
<line x1="160" y1="95" x2="215" y2="95" stroke="currentColor" stroke-width="2" marker-end="url(#ar4)"/>
<line x1="160" y1="40" x2="250" y2="40" stroke="currentColor" stroke-width="2" marker-end="url(#ar4)"/>
<circle cx="160" cy="150" r="4" fill="currentColor"/>
<text x="218" y="92">v</text><text x="254" y="44">2v</text><text x="170" y="165" font-size="12">contact point: v = 0</text></svg>
<p><b>Incline: force method.</b> A round object of mass $M$, radius $R$, $I=\beta MR^2$, rolls down an incline at angle $\theta$. Forces: $Mg$, normal force $N$, and <b>static friction</b> $f$ up the incline at the contact point. Take down-slope as positive:</p>
$$Mg\sin\theta-f=Ma,\qquad fR=I\alpha=\beta MR^2\frac aR\ \Rightarrow\ f=\beta Ma$$
$$\boxed{a=\frac{g\sin\theta}{1+\beta}},\qquad f=\frac{\beta}{1+\beta}Mg\sin\theta,\qquad \mu_s\ge\frac{f}{N}=\frac{\beta}{1+\beta}\tan\theta$$
<svg class="fig" viewBox="0 0 340 190" width="340" role="img" aria-label="A cylinder on an incline with arrows for weight, normal force and static friction pointing up the slope">
<defs><marker id="ar5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<polygon points="20,170 320,170 320,40" fill="currentColor" fill-opacity=".1" stroke="currentColor"/>
<g transform="rotate(-23.4 170 105)"><circle cx="170" cy="105" r="28" fill="currentColor" fill-opacity=".15" stroke="currentColor"/><circle cx="170" cy="105" r="2.5" fill="currentColor"/></g>
<line x1="170" y1="105" x2="170" y2="165" stroke="currentColor" stroke-width="2" marker-end="url(#ar5)"/>
<line x1="170" y1="105" x2="148" y2="55" stroke="currentColor" stroke-width="2" marker-end="url(#ar5)"/>
<line x1="157" y1="127" x2="119" y2="143" stroke="currentColor" stroke-width="2" marker-end="url(#ar5)"/>
<text x="176" y="160">Mg</text><text x="132" y="52">N</text><text x="106" y="140">f</text><text x="40" y="162" font-size="12">θ</text></svg>
<p><b>Incline: energy method.</b> Static friction acts at a point that is instantaneously at rest, so it does <b>no work</b> and mechanical energy is conserved: $Mgh=\tfrac12Mv^2(1+\beta)$, so</p>
$$v=\sqrt{\frac{2gh}{1+\beta}}$$
<p>Both methods agree (check with $v^2=2a\,d$, $h=d\sin\theta$). Notice that neither depends on $M$ or $R$: only on shape through $\beta$. Race down a ramp: sphere ($\beta=0.4$) beats disk (0.5) beats shell (0.67) beats hoop (1). A frictionless block (equivalent to $\beta=0$) would beat them all, because it puts all the energy into translation.</p>
<div class="box trap"><b>Traps.</b> (1) Static friction on a rolling object is <i>not</i> $\mu N$; it takes whatever value $\beta Ma$ requires, up to the maximum $\mu_sN$. (2) Friction points <i>up</i> the slope on a ball rolling down, even though the ball moves down. It provides the torque that spins the ball up. (3) If the surface is too slippery ($\mu_s$ below the bound above), the object slides while spinning and $v\neq\omega R$.</div>`},
  {id:"l4", title:"Angular momentum",videos:[{title:"Walter Lewin: Angular Momentum",url:"https://cosmolearning.org/video-lectures/angular-momentum",src:"Walter Lewin lectures (CosmoLearning)",note:"Lewin relates the rate of change of angular momentum to torque."}], html:String.raw`
<p>Linear momentum $\vec p=m\vec v$ is conserved when there is no net force. Rotation has an analogous quantity. For a single particle, with position $\vec r$ measured from a chosen reference point $O$:</p>
$$\vec L=\vec r\times\vec p,\qquad |\vec L|=mvr\sin\phi=mv\,d$$
<p>where $d=r\sin\phi$ is the perpendicular distance from $O$ to the particle's line of motion. Direction by the right-hand rule (from $\vec r$ to $\vec p$). Units kg·m²/s. Notice that a particle moving in a perfectly straight line has a nonzero $L$ about points not on that line, and the value $mvd$ is the <b>same everywhere along the path</b>.</p>
<svg class="fig" viewBox="0 0 320 160" width="320" role="img" aria-label="A particle moving to the right along a horizontal line at perpendicular distance d above the origin O; r drawn from O to the particle; L equals m v d into the page">
<defs><marker id="ar6" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<line x1="20" y1="40" x2="300" y2="40" stroke="currentColor" stroke-dasharray="5 4" opacity=".5"/>
<circle cx="70" cy="130" r="4" fill="currentColor"/><text x="52" y="150">O</text>
<circle cx="200" cy="40" r="6" fill="currentColor"/>
<line x1="70" y1="130" x2="196" y2="44" stroke="currentColor" stroke-width="1.5" marker-end="url(#ar6)"/>
<line x1="206" y1="40" x2="262" y2="40" stroke="currentColor" stroke-width="2" marker-end="url(#ar6)"/>
<line x1="70" y1="130" x2="70" y2="42" stroke="currentColor" opacity=".6"/>
<text x="124" y="95">r</text><text x="78" y="88">d</text><text x="268" y="44">v</text><text x="170" y="28">m</text>
<text x="190" y="120" font-size="12">L = mvd (into the page here)</text></svg>
<p><b>Rigid body about a fixed axis.</b> Each piece moves in a circle with $v_i=\omega r_i$ perpendicular to $r_i$, so its contribution to the component of $\vec L$ along the axis is $m_ir_iv_i=m_ir_i^2\omega$. Adding up:</p>
$$L=\Big(\sum m_ir_i^2\Big)\omega=I\omega$$
<p><b>The rotational form of Newton's second law.</b> Differentiate $\vec L=\vec r\times\vec p$:</p>
$$\frac{d\vec L}{dt}=\underbrace{\frac{d\vec r}{dt}\times\vec p}_{\vec v\times m\vec v=0}+\vec r\times\frac{d\vec p}{dt}=\vec r\times\vec F_{net}=\vec\tau_{net}$$
<p>Summed over a system, internal torques cancel (equal and opposite forces along the line joining two particles), so $\vec\tau_{net,ext}=d\vec L_{sys}/dt$. This is the fundamental law; $\tau=I\alpha$ is the special case with constant $I$. Integrating gives the <b>angular impulse</b>: $\int\tau\,dt=\Delta L$. $\vec r$, $\vec L$ and $\vec\tau$ must all use the <b>same reference point</b>.</p>
<div class="box key"><b>Conservation of angular momentum.</b> If $\tau_{net,ext}=0$ about a point (or axis), then $L$ about that point is constant. This works even when forces are huge and complicated, as long as they pass through the reference point or are internal.</div>
<p><b>Changing $I$.</b> A skater with $I_1=4$ kg·m² spins at $\omega_1=3$ rad/s. She pulls her arms in so $I_2=2$ kg·m². Then $I_1\omega_1=I_2\omega_2$ gives $\omega_2=6$ rad/s. Kinetic energy $\tfrac12I\omega^2=\tfrac{L^2}{2I}$ <i>doubles</i>: her arms do positive work as they pull the masses inward against the tension needed to keep them circling (in the inertial frame there is no centrifugal force; that word belongs to the rotating frame).</p>
<p><b>Collisions with a pivoted object.</b> A particle hits a rod or disk that can rotate about a fixed pivot. Take the pivot as the reference point. The pivot force acts <i>at</i> the pivot, so it has zero torque about it. Thus:</p>
$$L_{before}=L_{after}:\qquad mv\,d=(I_{body}+m r^2)\,\omega\quad(\text{particle sticks})$$
<div class="box trap"><b>Trap 1:</b> In such a collision <b>linear momentum is not conserved</b> (the pivot exerts a large impulsive force) and, if the particle sticks, <b>kinetic energy is not conserved either</b>. Conserve $L$ about the pivot, then use energy conservation only <i>after</i> the collision (for the swing).<br><b>Trap 2:</b> The particle's contribution to $L$ before is $mvd$ with $d$ perpendicular distance to the pivot, not just $mv$ times the rod length unless it hits perpendicular to the rod.</div>
<p>Energy loss in the perfectly inelastic case: with $K_i=\frac12mv^2$ and $K_f=\frac{L^2}{2I_{tot}}$ you can show $K_f/K_i=mr^2/I_{tot}$ ($r$ = distance of the impact point from the pivot, ball hitting perpendicular to the rod) if the particle starts as the only moving object. The heavier the rod's $I$, the more energy is lost to deformation and heat.</p>
<p><b>Rolling, in terms of $L$.</b> About a point on the ground, a rolling wheel has $L=Mv_{cm}R+I_{cm}\omega$ (orbital plus spin), which equals $I_P\omega$. Using the ground as reference, gravity and the contact force can both be handled with torque about the ground contact line.</p>`},
  {id:"l5", title:"Static equilibrium",videos:[{title:"Static Equilibrium: Ladder Against a Wall",url:"https://www.pearson.com/channels/physics/asset/f8a1d3f3/static-equilibrium-ladder-against-wall",src:"Pearson video lesson",note:"Worked ladder problem with friction at the floor."}], html:String.raw`
<p>An object is in <b>static equilibrium</b> if it is at rest and stays at rest. This needs both</p>
$$\sum\vec F=0\quad(\text{no translation}),\qquad \sum\vec\tau=0\quad(\text{no rotation, about any point})$$
<p>The "about any point" is the key trick. If $\sum\vec F=0$ and the torques about one point sum to zero, then the torques about every other point also sum to zero (try it: moving the reference point adds $\vec d\times\sum\vec F=0$). So choose the pivot at the spot where the most unknown forces act, and those forces drop out of the torque equation.</p>
<p><b>Recipe.</b> (1) Draw an FBD with each force at its point of application; gravity at the center of mass. (2) Choose axes and a pivot that kills unknowns. (3) Write $\sum F_x=0$, $\sum F_y=0$, $\sum\tau=0$. (4) Solve. (5) Check the answer by taking torque about a <i>different</i> point.</p>
<p><b>Ladder against a frictionless wall.</b> A uniform ladder of weight $W$ and length $\ell$ leans at angle $\theta$ above the floor. Forces: wall normal $N_w$ (horizontal, because the wall is frictionless), floor normal $N$ (up), static friction $f$ (horizontal, away from the wall), and $W$ at the middle.</p>
<svg class="fig" viewBox="0 0 320 200" width="320" role="img" aria-label="A ladder leaning on a wall at angle theta with weight W at the middle, wall force N_w horizontal, floor normal N up and friction f horizontal at the bottom">
<defs><marker id="ar7" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<line x1="40" y1="175" x2="300" y2="175" stroke="currentColor"/><line x1="260" y1="20" x2="260" y2="175" stroke="currentColor" stroke-width="3"/>
<line x1="80" y1="175" x2="260" y2="45" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
<line x1="170" y1="110" x2="170" y2="160" stroke="currentColor" stroke-width="2" marker-end="url(#ar7)"/>
<line x1="260" y1="45" x2="215" y2="45" stroke="currentColor" stroke-width="2" marker-end="url(#ar7)"/>
<line x1="80" y1="175" x2="80" y2="130" stroke="currentColor" stroke-width="2" marker-end="url(#ar7)"/>
<line x1="80" y1="175" x2="125" y2="175" stroke="currentColor" stroke-width="2" marker-end="url(#ar7)"/>
<path d="M115 175 A35 35 0 0 0 108 158" fill="none" stroke="currentColor"/>
<text x="176" y="140">W</text><text x="215" y="38">N_w</text><text x="88" y="132">N</text><text x="112" y="190">f</text><text x="118" y="170" font-size="12">θ</text></svg>
<p>Forces: $N=W$ and $f=N_w$. Torque about the base (kills $N$ and $f$): $N_w\,(\ell\sin\theta)=W\,(\tfrac\ell2\cos\theta)$, so</p>
$$N_w=\frac{W}{2\tan\theta},\qquad f=N_w,\qquad \mu_s\ge\frac fN=\frac1{2\tan\theta}$$
<p>A steeper ladder (bigger $\theta$) needs less friction. A person standing on it adds weight at a higher point, which increases $N_w$ and the friction needed.</p>
<p><b>Beams and hinges.</b> A beam on two supports: write torque about one support to find the other force immediately. For a hinged beam with a cable, the hinge supplies an unknown force with <i>both</i> horizontal and vertical components; take torques about the hinge to eliminate them.</p>
<div class="box trap"><b>Traps.</b> Do not assume friction is $\mu N$ in equilibrium; it is only $\le\mu_sN$, equal to whatever balances the forces. Do not place a force's torque using the wrong lever arm: use the perpendicular distance, or $rF\sin\phi$ with $\phi$ between $\vec r$ and $\vec F$.</div>
<p><b>Stability (qualitative).</b> If the net torque after a small tilt restores the object, it is stable; if it pushes it farther, unstable. A body topples when the vertical line through its center of mass passes outside its base of support.</p>`}
,
  {id:"l6", title:"A rod swinging about a pivot: torque that changes with angle",videos:[{title:"Search: rod pivoted at one end released from horizontal, angular acceleration and pivot force",url:"https://www.youtube.com/results?search_query=rod+pivoted+at+one+end+released+from+horizontal+angular+acceleration+pivot+force",src:"YouTube search",note:"Search link, not a vetted video. Look for the 3g/2L result and the energy method."}], html:String.raw`
<p>The most reused rotation setup on Physics C exams is a uniform rod (mass $M$, length $L$) hinged at one end and released from rest. Measure the angle $\theta$ <b>below the horizontal</b>. About the pivot, $I=\tfrac13ML^2$. Gravity acts at the center, a lever arm $\tfrac L2\cos\theta$ from the pivot, so the torque is <b>not constant</b>: it is largest when the rod is horizontal and zero when vertical.</p>
<svg class="fig" viewBox="0 0 320 150" width="320" role="img" aria-label="A rod hinged at the left end, tilted an angle theta below the horizontal, with weight Mg at its midpoint and the hinge force components P_r along the rod and P_t perpendicular to it">
<defs><marker id="ar10" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<line x1="40" y1="30" x2="280" y2="30" stroke="currentColor" stroke-dasharray="4 4" opacity=".5"/>
<line x1="40" y1="30" x2="260" y2="100" stroke="currentColor" stroke-width="7" stroke-linecap="round" opacity=".6"/>
<circle cx="40" cy="30" r="5" fill="currentColor"/>
<line x1="150" y1="65" x2="150" y2="125" stroke="currentColor" stroke-width="2" marker-end="url(#ar10)"/>
<path d="M90 30 A50 50 0 0 1 86 46" fill="none" stroke="currentColor"/>
<text x="100" y="44" font-size="12">θ</text><text x="156" y="122">Mg</text><text x="22" y="22">pivot</text><text x="200" y="64" font-size="12">L</text></svg>
<p><b>Angular acceleration (varies with angle).</b></p>
$$\tau=Mg\frac L2\cos\theta=I\alpha=\tfrac13ML^2\alpha\ \Rightarrow\ \alpha=\frac{3g}{2L}\cos\theta$$
<p>At release from horizontal, $\alpha=3g/2L$ and the free tip has $a_t=\alpha L=\tfrac32g$: <b>the tip accelerates faster than free fall</b>. That is not paradoxical. A falling block is pulled by gravity alone; the rod's tip is also pulled by the rest of the rod, which is being dragged down by gravity and pushes the tip around. The point at distance $\tfrac23L$ from the pivot has $a_t=g$ exactly (this point is the <i>center of percussion</i> for a pivot at the end).</p>
<p><b>Angular speed by energy.</b> The pivot does no work (it does not move), so the center of mass falls $\tfrac L2\sin\theta$ and</p>
$$Mg\frac L2\sin\theta=\tfrac12\Big(\tfrac13ML^2\Big)\omega^2\ \Rightarrow\ \omega^2=\frac{3g\sin\theta}{L},\qquad v_{tip,bottom}=\omega L=\sqrt{3gL}$$
<p>Check by calculus: $\alpha=\omega\,d\omega/d\theta'$ with $\theta'$ the angle swept gives the same thing. Note you cannot use $\alpha=3g/2L$ in $\omega^2=2\alpha\Delta\theta$, because $\alpha$ is not constant. Energy is the tool for the speed; torque is the tool for the acceleration.</p>
<p><b>The pivot force.</b> The center of mass moves on a circle of radius $L/2$, so $\vec F_{net}=M\vec a_{cm}$ has a tangential part $M\alpha\tfrac L2$ and a centripetal part $M\omega^2\tfrac L2$ (toward the pivot). Resolve along and perpendicular to the rod:</p>
$$P_r-Mg\sin\theta=M\omega^2\tfrac L2\ \Rightarrow\ P_r=\tfrac52Mg\sin\theta,\qquad Mg\cos\theta-P_t=M\alpha\tfrac L2\ \Rightarrow\ P_t=\tfrac14Mg\cos\theta$$
<p>Horizontal release ($\theta=0$): the pivot supports only $\tfrac14Mg$ (the rod is mostly in free fall). At the bottom ($\theta=90^\circ$): $P=\tfrac52Mg$, much more than the weight, because the center of mass is turning a corner and needs a centripetal force.</p>
<div class="box trap"><b>Traps.</b> (1) Using $\omega^2=2\alpha\theta$ with the initial $\alpha$. (2) Setting the pivot force equal to $Mg$; the rod's center is accelerating, so $\sum F\neq0$. (3) Taking torque about the center of mass with the pivot force omitted: the pivot's torque about the CM is not zero. Torque about the <i>pivot</i> is the clean choice.</div>`},
  {id:"l7", title:"Rolling beyond the simple incline: slipping, pulled spools, hills and loops",videos:[{title:"Rolling Without Slipping: Introduction and Demonstrations",url:"https://www.pearson.com/channels/physics/asset/ac656f03/rolling-without-slipping-introduction-and-demonstrations",src:"Pearson video lesson (Flipping Physics channel listing)",note:"Short intro to the no-slip condition; not specifically the slipping-to-rolling problem."},{title:"Search: sphere starts sliding without spin then rolls, final speed 5/7 v0",url:"https://www.youtube.com/results?search_query=bowling+ball+sliding+then+rolling+without+slipping+final+speed+angular+momentum+about+contact+point",src:"YouTube search",note:"Search link, not a vetted video."}], html:String.raw`
<p>The no-slip rule $v_{cm}=\omega R$ is a <i>condition</i>, not a law of nature. Three situations show what happens around it.</p>
<p><b>1. Starting with slipping (bowling ball).</b> A ball is released with speed $v_0$ and no spin. The contact point slides forward, so <b>kinetic friction</b> $f_k=\mu_kMg$ acts <i>backward</i> on the ball. It does two jobs: it decelerates the center ($Ma=-\mu_kMg$) and, because it acts at the bottom of the ball, it exerts a torque that spins the ball up ($f_kR=I\alpha$). Slipping stops when $v=\omega R$ and from then on the ball rolls at constant speed (on a flat floor with no further friction needed).</p>
<p>The quickest way to get the final speed: <b>angular momentum about a point on the floor</b> (on the line of contact). Friction and the normal force act at or along lines through that point, and gravity is balanced by $N$, so there is no net torque about it. Then</p>
$$L_{before}=Mv_0R\ \ (\text{spin zero}),\qquad L_{after}=Mv_fR+I\frac{v_f}{R}=Mv_fR(1+\beta)\ \Rightarrow\ v_f=\frac{v_0}{1+\beta}$$
<p>For a solid sphere $\beta=\tfrac25$ so $v_f=\tfrac57v_0$, for a hoop $\tfrac12v_0$. This is independent of $\mu_k$. The coefficient only sets how long it takes ($t=\frac{v_0-v_f}{\mu_kg}$) and how far. Kinetic energy is <b>not</b> conserved: friction acts through a sliding contact and converts $\mu_kMg\times(\text{slip distance})$ into heat. For the sphere, $\tfrac27$ of the initial energy is lost.</p>
<p><b>2. Pulling a spool or yo-yo.</b> Take a spool of outer radius $R$ with an axle of radius $r$, on a table, with a string pulled horizontally off the bottom (or top) of the axle. The cleanest method: torque about the <b>contact point</b> (instantaneous axis of rolling), $\tau_P=I_P\alpha$ with $I_P=I_{cm}+MR^2$, $a=\alpha R$. If the string leaves the bottom of the axle, its line of action is at height $R-r$ above the floor, so $\tau_P=F(R-r)$. The spool rolls <b>toward</b> the pull and static friction on it points <b>backward</b>. If the string leaves the top of the axle, the lever arm is $R+r$. The direction of friction is not obvious; get it from $f=Ma-F$ after you find $a$. (A string wound on a hanging yo-yo of axle radius $r$ gives $a=g/(1+I/Mr^2)$: a small axle makes it fall slowly.)</p>
<p><b>3. Rolling up a hill and around a loop.</b> While rolling without slipping, static friction does no work, so $\tfrac12Mv^2(1+\beta)+Mgh=\text{const}$. Rolling up: it reaches $h=\dfrac{v_0^2(1+\beta)}{2g}$; the friction still points <i>up the slope</i> (it is the torque that slows the spin as the ball slows down). For a loop of radius $R_L$ (ball radius much smaller), the condition at the top is $N\ge0$: $v_{top}^2\ge gR_L$. Starting from rest at height $h$:</p>
$$Mgh=Mg(2R_L)+\tfrac12Mv_{top}^2(1+\beta)\ \Rightarrow\ h_{min}=2R_L+\frac{(1+\beta)}{2}R_L$$
<p>A sliding block needs $2.5R_L$; a rolling solid sphere needs $2.7R_L$; a hoop needs $3R_L$. Part of the energy is locked in spin.</p>
<div class="box trap"><b>Traps.</b> (1) Using energy conservation during the slipping phase: friction is kinetic there. (2) Applying $v=\omega R$ at the start of a slipping problem. (3) Saying friction "opposes the motion" on a rolling object: static friction points whichever way the equations require, here up the slope while rolling down.</div>`},
  {id:"l8", title:"Angular momentum in practice: strings through holes and turntables",videos:[{title:"Search: conservation of angular momentum, mass on a string pulled through a hole",url:"https://www.youtube.com/results?search_query=angular+momentum+conservation+mass+on+string+pulled+through+hole+tension+work",src:"YouTube search",note:"Search link, not a vetted video."}], html:String.raw`
<p><b>Central forces.</b> If the only force on a particle always points toward (or away from) a fixed point, its torque about that point is zero, so $L=mvr\sin\phi$ is constant. A mass circling on a frictionless table, tied to a string that passes through a hole, is the cleanest case. When the string is pulled in slowly, $r$ shrinks and the speed rises: $mv_1r_1=mv_2r_2$.</p>
<p>Where does the extra energy come from? The tension is not perpendicular to the motion any more (the mass spirals inward), so it does positive work: $W=\int T\,dr$ with $T=mv^2/r=L^2/(mr^3)$ for a slow pull, which equals $\Delta K=\tfrac{L^2}{2m}\big(r_2^{-2}-r_1^{-2}\big)$. In a quick check, this is the same mechanism as the skater: she pulls her arms in against the tension needed to keep them circling.</p>
<p><b>Rotating frame (optional).</b> An observer spinning with the mass would describe the pull as balancing a "centrifugal force" $m\omega^2r$. That is a bookkeeping device that exists only in the rotating frame; in the inertial frame used in this course, no such force acts, and the only horizontal force is the inward tension.</p>
<p><b>Coupling two rotating bodies.</b> Two disks on one axis, one spinning and one at rest, brought into contact: friction between them is internal, so total $L$ about the axis is conserved, but the sliding dissipates energy:</p>
$$I_1\omega_1=(I_1+I_2)\omega_f,\qquad \frac{K_f}{K_i}=\frac{I_1}{I_1+I_2},\ \ \text{loss fraction}=\frac{I_2}{I_1+I_2}$$
<p>(The same as the sticking-clay collision.) <b>Person on a turntable.</b> The person plus platform is a system with no external torque about the axis, so $L$ is conserved when the person walks. Moving the person outward raises $I$ and slows the platform; $K=L^2/2I$ then falls, because the person's feet push tangentially on the platform and the internal forces do net negative work on the system (the energy goes into the person's body).</p>
<div class="box key"><b>Procedure.</b> (1) Choose the system and the axis. (2) Argue there is no external torque about that axis (an axle force passes through it). (3) Write $\sum I_i\omega_i$ before and after, counting each person or particle with $mr^2$. (4) Only then ask about energy, and expect a loss unless the interaction is smooth and elastic.</div>`},
  {id:"l9", title:"Extension: composite bodies, non-uniform disks and the perpendicular-axis theorem", extra:true, videos:[{title:"Search: perpendicular axis theorem moment of inertia lamina",url:"https://www.youtube.com/results?search_query=perpendicular+axis+theorem+moment+of+inertia+disk+about+diameter",src:"YouTube search",note:"Search link, not a vetted video."}], html:String.raw`
<p><b>Composite bodies.</b> Rotational inertias about the <i>same</i> axis simply add. For a rod with masses at the ends, or a dumbbell, use $I=\sum I_{parts}$, moving each part with the parallel-axis theorem. A disk with a hole is a full disk minus the missing disk (each referred to the same axis). Example: a $2$ kg rod of length $1.0$ m with a $1$ kg ball fixed to each end, about the center: $I=\tfrac1{12}(2)(1)^2+2(1)(0.5)^2=0.667$ kg·m².</p>
<p><b>Non-uniform disk.</b> Let $\sigma=kr$ (density grows with radius). Ring of radius $r$: $dm=kr\cdot2\pi r\,dr$. Then $M=\int_0^R2\pi kr^2dr=\tfrac23\pi kR^3$ and $I=\int_0^R2\pi kr^4dr=\tfrac25\pi kR^5$. Dividing: $I=\tfrac35MR^2$ (larger than $\tfrac12MR^2$, since the mass sits farther out).</p>
<p><b>Perpendicular-axis theorem (flat objects only).</b> For a thin planar body in the $xy$ plane, $I_z=\int(x^2+y^2)dm=I_x+I_y$. For a disk, symmetry gives $I_x=I_y$, so a diameter has $I_x=\tfrac12I_z=\tfrac14MR^2$; for a ring a diameter gives $\tfrac12MR^2$. It fails for 3D bodies (a sphere is not flat) and needs the three axes mutually perpendicular and meeting at one point in the plane.</p>
<div class="box trap">For a solid sphere about a diameter ($\tfrac25MR^2$) the perpendicular-axis theorem does not apply. Use it only for flat laminae.</div>`},
  {id:"l10", title:"Extension: hinged beams with cables, and tipping versus sliding", extra:true, videos:[{title:"Search: hinged beam supported by cable, tension and hinge force components",url:"https://www.youtube.com/results?search_query=horizontal+beam+hinged+to+wall+supported+by+cable+tension+hinge+force+components+torque",src:"YouTube search",note:"Search link, not a vetted video."}], html:String.raw`
<p><b>Hinged beam with a cable.</b> Unknowns: tension $T$ and two hinge components $H_x,H_y$. Take torques about the hinge. $H_x$ and $H_y$ drop out and a single equation gives $T$; then $\sum F_x=0$ and $\sum F_y=0$ give the hinge components. The cable's torque uses the perpendicular component of $T$ (for a cable at angle $\phi$ above a horizontal beam, $T\sin\phi$ at the end). Note the hinge force is generally <i>not</i> along the beam.</p>
<p><b>Tipping versus sliding.</b> A box (width $w$, height $h$, uniform) on a rough surface. It tips about its lower edge when the normal force has moved to that edge, i.e. the torque about the edge of the applied force reaches $Mg\,w/2$; it slides when the friction needed reaches $\mu_sMg$. A horizontal push at height $y$: slides if $F>\mu_sMg$; tips if $Fy>Mg\,w/2$. It tips first when $y>w/(2\mu_s)$. On an incline: slides when $\tan\theta>\mu_s$; tips when $\tan\theta>w/h$.</p>
<p><b>Stability.</b> An object is stable while the vertical line through its center of mass falls inside its base of support. A stack of identical bricks, each overhanging the one below, can reach arbitrarily far, with the topmost bricks overhanging by $\tfrac L2,\tfrac L4,\tfrac L6,\dots$ (a harmonic series that diverges slowly).</p>`},
  {id:"l11", title:"Extension: gyroscopes, and the linear-to-rotational dictionary", extra:true, videos:[{title:"Walter Lewin, MIT 8.01 Lecture 24: Rolling Motion, Gyroscopes",url:"https://opencw.aprende.org/courses/physics/8-01-physics-i-classical-mechanics-fall-1999/video-lectures/lecture-24",src:"Walter Lewin lectures (MIT OCW mirror)",note:"Includes the precessing bicycle wheel and gyroscope in gimbals, a very non-intuitive demonstration."}], html:String.raw`
<p><b>Gyroscopic precession.</b> A bicycle wheel spins with angular momentum $\vec L$ along its axle and the axle is held at one end, a horizontal distance $d$ from the CM. Gravity gives a torque of magnitude $Mgd$ that is <i>horizontal</i> and perpendicular to $\vec L$. Since $d\vec L=\vec\tau\,dt$, the tip of $\vec L$ moves sideways, not down: $L$ keeps its length and rotates horizontally by $d\phi=dL/L$. So</p>
$$\Omega=\frac{d\phi}{dt}=\frac{\tau}{L}=\frac{Mgd}{I\omega}\quad(\text{fast spin})$$
<p>Faster spin means slower precession; reverse the spin and the precession reverses. The derivation uses only $\tau=dL/dt$, which is why the whole effect is "obvious" once you think in vectors.</p>
<p><b>Center of percussion.</b> A rod pivoted at one end, struck at distance $\tfrac23L$ from the pivot, gets no impulsive force from the pivot (it is also the point with $a_t=g$ in the falling-rod problem). Strike elsewhere and the pivot has to push back (the "sting" in a bat).</p>
<table><tr><th>Linear</th><th>Rotational</th></tr>
<tr><td>$x,\ v,\ a$</td><td>$\theta,\ \omega,\ \alpha$</td></tr>
<tr><td>mass $m$</td><td>rotational inertia $I$</td></tr>
<tr><td>force $F$, $F=ma$</td><td>torque $\tau$, $\tau=I\alpha$</td></tr>
<tr><td>$p=mv$, $F=dp/dt$</td><td>$L=I\omega$, $\tau=dL/dt$</td></tr>
<tr><td>$K=\tfrac12mv^2$</td><td>$K=\tfrac12I\omega^2$</td></tr>
<tr><td>$W=\int F\,dx$, $P=Fv$</td><td>$W=\int\tau\,d\theta$, $P=\tau\omega$</td></tr></table>
<p>Friction at an axle: a frictional torque $\tau_f$ on a wheel does work $-\tau_f\Delta\theta$, producing heat; the energy equation becomes $W_{applied}-\tau_f\Delta\theta=\Delta K$.</p>`}
  ],
  examples:[
  {id:"x1", title:"Mass hanging from a disk pulley", problem:String.raw`<p>A uniform solid disk pulley of mass $M=2.0$ kg and radius $R=0.20$ m can rotate freely about a fixed horizontal axle. A light string wraps around its rim without slipping and carries a block of mass $m=3.0$ kg. The block is released from rest. Use $g=10$ m/s². Find the block's acceleration, the string tension, and the pulley's angular acceleration.</p>`,
   solution:String.raw`<p>Block (down positive): $mg-T=ma$. Pulley (counterclockwise as the block falls): $TR=I\alpha=\tfrac12MR^2\alpha$, and no slipping gives $\alpha=a/R$, so $T=\tfrac12Ma$.</p>
<p>Substitute: $mg=ma+\tfrac12Ma$, so $a=\dfrac{mg}{m+M/2}=\dfrac{30}{3+1}=7.5$ m/s². Then $T=\tfrac12(2.0)(7.5)=7.5$ N and $\alpha=a/R=37.5$ rad/s².</p>
<p>Check: $mg-T=30-7.5=22.5=ma$ ✓. If the pulley were massless, $a$ would be $g=10$ and $T=0$ (nothing to turn).</p>`},
  {id:"x2", title:"A race down an incline", problem:String.raw`<p>A solid sphere, a solid disk and a hoop, all of the same mass and radius, are released from rest at the same time at the top of a $30^\circ$ incline and roll without slipping. (a) Find each one's acceleration ($g=10$ m/s²). (b) What minimum coefficient of static friction does the sphere need? (c) A solid cylinder starts from rest at vertical height $1.2$ m; find its speed at the bottom.</p>`,
   solution:String.raw`<p>(a) $a=\dfrac{g\sin\theta}{1+\beta}=\dfrac{5}{1+\beta}$. Sphere ($\beta=0.4$): $3.57$ m/s². Disk ($\beta=0.5$): $3.33$ m/s². Hoop ($\beta=1$): $2.5$ m/s². The sphere wins, then the disk, then the hoop, whatever the masses or radii.</p>
<p>(b) $\mu_s\ge\dfrac{\beta}{1+\beta}\tan\theta=\dfrac{0.4}{1.4}(0.577)=0.165$.</p>
<p>(c) Energy: $mgh=\tfrac12mv^2(1+\tfrac12)$, so $v^2=\dfrac{2gh}{1.5}=\dfrac{24}{1.5}=16$, $v=4.0$ m/s. A frictionless sliding block would reach $\sqrt{24}=4.9$ m/s; the missing energy went into spin, not heat.</p>`},
  {id:"x3", title:"Ladder with a climber", problem:String.raw`<p>A uniform ladder of length $5.0$ m and mass $20$ kg (weight 200 N) rests with its top against a frictionless vertical wall at height $4.0$ m. Its base is on the floor, $3.0$ m from the wall. (a) Find the wall force, floor normal force and friction when nobody is on it, and the minimum $\mu_s$. (b) A 60 kg person (600 N) stands $60\%$ of the way up the ladder. Find the new minimum $\mu_s$.</p>`,
   solution:String.raw`<p>Take torque about the base. The wall force is horizontal and acts $4.0$ m above the base, so its lever arm is $4.0$ m. Gravity at the middle has horizontal lever arm $1.5$ m.</p>
<p>(a) $N_w(4.0)=200(1.5)\Rightarrow N_w=75$ N. Then $f=N_w=75$ N and $N=200$ N, so $\mu_s\ge75/200=0.375$.</p>
<p>(b) The person's horizontal lever arm is $0.6(3.0)=1.8$ m. $N_w(4.0)=200(1.5)+600(1.8)=1380\Rightarrow N_w=345$ N. Now $N=800$ N, $f=345$ N, so $\mu_s\ge345/800=0.43$. Check with torque about the top end: consistent.</p>`},
  {id:"x4", title:"Variable torque, with calculus", problem:String.raw`<p>A wheel with $I=0.50$ kg·m² is at rest at $t=0$. A motor applies a torque $\tau=4t$ N·m (with $t$ in seconds). Find $\omega(t)$ and $\theta(t)$, the values at $t=3$ s, and confirm that the work done equals the kinetic energy gained.</p>`,
   solution:String.raw`<p>$\alpha=\tau/I=8t$. Integrate: $\omega=\int_0^t8t'\,dt'=4t^2$, $\theta=\int_0^t4t'^2dt'=\tfrac43t^3$. At $t=3$: $\omega=36$ rad/s, $\theta=36$ rad.</p>
<p>$K=\tfrac12I\omega^2=\tfrac12(0.5)(1296)=324$ J. Work: $W=\int\tau\,d\theta=\int\tau\omega\,dt=\int_0^34t\cdot4t^2\,dt=4t^4\Big|_0^3=324$ J ✓.</p>
<p>Alternatively angular impulse: $\Delta L=\int\tau\,dt=2t^2=18$ kg·m²/s $=I\omega=0.5(36)$ ✓.</p>`}
,
  {id:"x5", title:"Rod released from the horizontal", problem:String.raw`<p>A uniform rod of mass $M=2.0$ kg and length $L=1.2$ m is hinged at one end and released from rest in a horizontal position. Use $g=10$ m/s². Find (a) its initial angular acceleration and the initial acceleration of the free end, (b) the force of the hinge at release, (c) its angular speed and the speed of the free end at the bottom, and (d) the hinge force at the bottom.</p>`,
   solution:String.raw`<p>(a) $\alpha=\dfrac{3g}{2L}=\dfrac{30}{2.4}=12.5$ rad/s². Free end: $a=\alpha L=15$ m/s² $=1.5g$ (downward).</p>
<p>(b) CM acceleration $=\alpha L/2=7.5$ m/s² down. $Mg-P=Ma_{cm}$, so $P=2.0(10-7.5)=5.0$ N upward ($=Mg/4$), and no horizontal component at this instant ($\omega=0$).</p>
<p>(c) $Mg\tfrac L2=\tfrac12(\tfrac13ML^2)\omega^2\Rightarrow\omega^2=3g/L=25$, $\omega=5.0$ rad/s, $v_{tip}=\omega L=6.0$ m/s $=\sqrt{3gL}$.</p>
<p>(d) At the bottom the CM has centripetal acceleration $\omega^2L/2=15$ m/s² upward, and no tangential acceleration ($\alpha=0$). $P-Mg=M(15)$, $P=2.0(25)=50$ N upward ($=\tfrac52Mg$).</p>`},
  {id:"x6", title:"Sliding sphere becomes a rolling sphere", problem:String.raw`<p>A solid sphere is given speed $v_0=6.0$ m/s along a rough horizontal floor with no spin. The coefficient of kinetic friction is $\mu_k=0.20$. Find (a) its speed when it starts to roll without slipping, (b) the time that takes, (c) the distance travelled by the center during the slipping, and (d) the fraction of the initial kinetic energy lost. ($g=10$ m/s²)</p>`,
   solution:String.raw`<p>(a) Angular momentum about a point on the floor is conserved: $Mv_0R=Mv_fR(1+\tfrac25)\Rightarrow v_f=\tfrac57v_0=4.29$ m/s.</p>
<p>(b) Linear: $v=v_0-\mu_kgt$. Angular: $\alpha=\dfrac{\mu_kMgR}{\frac25MR^2}=\dfrac{5\mu_kg}{2R}$ so $\omega R=2.5\mu_kgt$. Set $v=\omega R$: $t=\dfrac{v_0}{3.5\mu_kg}=\dfrac{6}{7}=0.857$ s.</p>
<p>(c) $d=v_0t-\tfrac12\mu_kgt^2=5.14-0.73=4.41$ m.</p>
<p>(d) $K_i=\tfrac12M(36)=18M$. $K_f=\tfrac12Mv_f^2(1.4)=12.86M$. Lost $=5.14M$, i.e. $2/7=28.6\%$. Check: heat $=\mu_kMg\times s_{slip}$ with $s_{slip}=d-R\theta=4.41-1.84=2.57$ m gives $0.2(10)(2.57)=5.14$ per unit mass ✓.</p>`},
  {id:"x7", title:"A spool pulled from the bottom or the top of its axle", problem:String.raw`<p>A spool of mass $M=2.0$ kg has outer radius $R=0.10$ m and $I_{cm}=\tfrac12MR^2$. A string is wound on its axle of radius $r=0.05$ m and is pulled with a horizontal force $F=6.0$ N. The spool rolls without slipping on the table. Find the acceleration of the center and the friction force (magnitude and direction) when the string leaves (a) the bottom of the axle and (b) the top of the axle. ($g=10$ m/s²)</p>`,
   solution:String.raw`<p>Use torque about the contact point: $I_P=I_{cm}+MR^2=0.010+0.020=0.030$ kg·m², and $a=\alpha R$.</p>
<p>(a) Bottom: lever arm $R-r=0.05$ m, $\tau_P=6(0.05)=0.30$ N·m, $\alpha=10$ rad/s², $a=1.0$ m/s² toward the pull. Newton: $F+f=Ma$ (forward positive) gives $f=2.0-6.0=-4.0$ N: friction is $4.0$ N <b>backward</b> (needs $\mu_s\ge4/20=0.2$).</p>
<p>(b) Top: lever arm $R+r=0.15$ m, $\tau_P=0.90$, $\alpha=30$ rad/s², $a=3.0$ m/s². $f=Ma-F=6.0-6.0=0$. For this spool the friction vanishes exactly when the string is at height $I_{cm}/(MR)=R/2$ above the center. That is the center-of-percussion idea again.</p>`},
  {id:"x8", title:"Rolling up a hill and around a loop", problem:String.raw`<p>(a) A solid sphere rolls without slipping along a level floor at $5.0$ m/s and then up a $30^\circ$ incline. How high above the floor does it rise, and how far along the incline does it travel? (b) From what minimum height above the bottom must a solid sphere be released from rest to roll around a loop-the-loop of radius $0.50$ m (take the sphere's own radius as negligible)? ($g=10$ m/s²)</p>`,
   solution:String.raw`<p>(a) $\tfrac12Mv_0^2(1+\beta)=Mgh$: $h=\dfrac{25(1.4)}{20}=1.75$ m. Distance along the slope $=h/\sin30^\circ=3.5$ m. (A sliding block would rise only $1.25$ m.)</p>
<p>(b) At the top $v^2\ge gR_L=5$. $h=2R_L+\dfrac{(1+\beta)v^2}{2g}=1.0+\dfrac{1.4(5)}{20}=1.35$ m $=2.7R_L$.</p>`},
  {id:"x9", title:"A mass on a string pulled through a hole", problem:String.raw`<p>A $0.50$ kg mass slides on a frictionless horizontal table, attached to a string that passes through a small hole. It circles at $r_1=0.80$ m with speed $2.0$ m/s. The string is slowly pulled down until $r_2=0.40$ m. Find the new speed, the tension before and after, and the work done by the person pulling.</p>`,
   solution:String.raw`<p>The tension passes through the hole, so $L=mvr$ is constant: $v_2=v_1r_1/r_2=4.0$ m/s. Tensions: $T_1=mv_1^2/r_1=0.5(4)/0.8=2.5$ N; $T_2=0.5(16)/0.4=20$ N (8 times larger, since $T\propto r^{-3}$). Work $=\Delta K=\tfrac12(0.5)(16-4)=3.0$ J. Check: $\int T\,dr$ with $T=L^2/(mr^3)=1.28/r^3$ from $0.4$ to $0.8$ is $3.0$ J ✓.</p>`},
  {id:"x10", title:"A person walking out on a turntable", problem:String.raw`<p>A turntable of rotational inertia $200$ kg·m² spins at $2.0$ rad/s, frictionlessly, with a $50$ kg person standing at the center. The person walks to the rim ($R=2.0$ m). Find the new angular speed and the change in kinetic energy.</p>`,
   solution:String.raw`<p>No external torque about the axis: $200(2.0)=(200+50(2.0)^2)\omega_f=400\omega_f$, $\omega_f=1.0$ rad/s. $K_i=\tfrac12(200)(4)=400$ J, $K_f=\tfrac12(400)(1)=200$ J, so $200$ J is lost (angular momentum is conserved, kinetic energy is not; the person's feet exert tangential forces that do net negative work on the system). Walking back in raises $\omega$ and $K$ again, paid for by the person's muscles.</p>`},
  {id:"x11", title:"Spin-up of a wheel with numbers", problem:String.raw`<p>A wheel starts from rest with constant angular acceleration $\alpha=4.0$ rad/s². (a) After $5.0$ s find $\omega$, the angle turned and the revolutions. (b) For a point on the rim ($r=0.30$ m) find $a_t$, $a_c$ and the total acceleration at $t=5.0$ s. (c) At what time does the total acceleration of that point make a $45^\circ$ angle with the radius?</p>`,
   solution:String.raw`<p>(a) $\omega=20$ rad/s, $\theta=\tfrac12(4)(25)=50$ rad $=7.96$ rev. (b) $a_t=\alpha r=1.2$ m/s², $a_c=\omega^2r=400(0.3)=120$ m/s², $a=\sqrt{1.2^2+120^2}=120$ m/s² (almost purely radial). (c) $a_t=a_c$: $\alpha r=\alpha^2t^2r\Rightarrow t=1/\sqrt\alpha=0.50$ s, where $a=1.7$ m/s².</p>`},
  {id:"x12", title:"Beam hinged to a wall and held by a cable", problem:String.raw`<p>A uniform horizontal beam of weight $200$ N and length $3.0$ m is hinged to a wall at its left end. A cable attached to its right end runs up to the wall, making $30^\circ$ with the beam. A $100$ N sign hangs from the right end. Find the cable tension and the hinge force (components and magnitude).</p>`,
   solution:String.raw`<p>Torque about the hinge: $T\sin30^\circ(3.0)=200(1.5)+100(3.0)=600\Rightarrow T=400$ N. Horizontal: the cable pulls toward the wall with $T\cos30^\circ=346$ N, so the hinge pushes away from the wall $H_x=346$ N. Vertical: $H_y+T\sin30^\circ=300\Rightarrow H_y=100$ N upward. $|H|=\sqrt{346^2+100^2}=361$ N, $16^\circ$ above the horizontal. Not along the beam.</p>`}
  ],
  mcq:[
  {id:"q1", q:String.raw`<p>A uniform thin rod of mass $M$ and length $L$ has $I=\frac1{12}ML^2$ about a perpendicular axis through its center. Its rotational inertia about a parallel axis a distance $L/4$ from the center is</p>`, choices:["$\\dfrac{1}{16}ML^2$","$\\dfrac{7}{48}ML^2$","$\\dfrac{1}{6}ML^2$","$\\dfrac{1}{4}ML^2$","$\\dfrac{1}{3}ML^2$"], a:1,
   why:String.raw`<p>$I=I_{cm}+Md^2=\frac1{12}ML^2+M\frac{L^2}{16}=\frac{4+3}{48}ML^2=\frac7{48}ML^2$. The tempting $\frac1{16}ML^2$ is just the $Md^2$ term without $I_{cm}$; $\frac13ML^2$ is the end-axis value (axis at $L/2$, not $L/4$).</p>`},
  {id:"q2", q:String.raw`<p>A $0.60$ m wrench is pivoted at one end. A $20$ N force is applied at the far end, directed at $30^\circ$ to the wrench. The magnitude of the torque about the pivot is</p>`, choices:["3 N·m","6 N·m","10 N·m","10.4 N·m","12 N·m"], a:1,
   why:String.raw`<p>$\tau=rF\sin\phi=0.60(20)\sin30^\circ=6$ N·m. The $12$ N·m answer uses the full force with no sine (that would be right only for a perpendicular push); $10.4$ N·m would use $\cos30^\circ$, the component <i>along</i> the wrench, which produces no torque.</p>`},
  {id:"q3", q:String.raw`<p>A thin rod of length $L$ and mass $M$ has linear mass density $\lambda=kx$ ($x$ measured from the left end, $k$ constant). Its rotational inertia about a perpendicular axis through the left end is</p>`, choices:["$\\dfrac{1}{3}ML^2$","$\\dfrac{1}{2}ML^2$","$\\dfrac{1}{4}ML^2$","$\\dfrac{2}{3}ML^2$","$\\dfrac{1}{12}ML^2$"], a:1,
   why:String.raw`<p>$M=\int_0^Lkx\,dx=kL^2/2$, so $k=2M/L^2$. $I=\int_0^Lx^2(kx)\,dx=kL^4/4=\frac{2M}{L^2}\frac{L^4}{4}=\frac12ML^2$. It is larger than the uniform $\frac13ML^2$ because the mass is concentrated at large $x$.</p>`},
  {id:"q4", q:String.raw`<p>A hoop, a solid cylinder, and a solid sphere, all with the same mass and radius, are released together from rest at the top of a rough incline and roll without slipping. Which one reaches the bottom first?</p>`, choices:["The hoop","The solid cylinder","The solid sphere","They arrive together","It depends on the mass of each"], a:2,
   why:String.raw`<p>$a=g\sin\theta/(1+\beta)$ with $\beta=1,\ \frac12,\ \frac25$ respectively. The sphere has the smallest $\beta$, hence the largest $a$. Mass and radius cancel, so they never matter; the "same time" answer would be true only for objects sliding without friction.</p>`},
  {id:"q5", q:String.raw`<p>A solid sphere rolls without slipping on a horizontal floor. What fraction of its total kinetic energy is rotational?</p>`, choices:["$2/5$","$2/7$","$1/3$","$1/2$","$5/7$"], a:1,
   why:String.raw`<p>$K_{rot}/K=\dfrac{\frac12(\frac25MR^2)(v/R)^2}{\frac12Mv^2(1+\frac25)}=\dfrac{2/5}{7/5}=\dfrac27$. The $1/3$ is the answer for a solid disk and $5/7$ is the translational fraction.</p>`},
  {id:"q6", q:String.raw`<p>A $2.0$ kg block hangs from a string wrapped around a uniform solid disk of mass $4.0$ kg and radius $0.50$ m that spins on a frictionless horizontal axle. Take $g=10$ m/s². The block's acceleration after release is</p>`, choices:["2.5 m/s²","3.3 m/s²","5.0 m/s²","6.7 m/s²","10 m/s²"], a:2,
   why:String.raw`<p>$a=\dfrac{mg}{m+M/2}=\dfrac{20}{2+2}=5$ m/s². Ignoring the pulley's inertia gives $10$ m/s²; treating the disk as an extra hanging mass $M$ (i.e., $m+M$) gives $3.3$ m/s². The disk's effective inertia is $M/2$, not $M$.</p>`},
  {id:"q7", q:String.raw`<p>A skater spins with her arms out and then pulls them in so that her rotational inertia is cut in half. Neglecting friction, her angular speed and rotational kinetic energy change by which factors?</p>`, choices:["$\\omega\\times 2$, $K\\times 1$","$\\omega\\times 2$, $K\\times 2$","$\\omega\\times 2$, $K\\times 4$","$\\omega\\times\\sqrt2$, $K\\times 2$","$\\omega\\times 1$, $K\\times 1/2$"], a:1,
   why:String.raw`<p>$L=I\omega$ is constant, so $\omega$ doubles. $K=L^2/2I$ then doubles. The extra energy comes from the work her muscles do pulling the arms inward. $K$ is not conserved even though $L$ is.</p>`},
  {id:"q8", q:String.raw`<p>A uniform disk of mass $2.0$ kg and radius $0.50$ m rotates freely about its fixed central axis, initially at rest. A $1.0$ kg lump of clay moving at $6.0$ m/s tangentially strikes the rim and sticks. The disk's angular speed just after is</p>`, choices:["3.0 rad/s","4.0 rad/s","6.0 rad/s","8.0 rad/s","12 rad/s"], a:2,
   why:String.raw`<p>$L=mvR=1(6)(0.5)=3.0$. $I=\frac12(2)(0.25)+1(0.25)=0.50$. $\omega=3.0/0.50=6.0$ rad/s. Forgetting the clay's own $mR^2$ would give $12$ rad/s. Linear momentum is not conserved (the axle exerts an impulse).</p>`},
  {id:"q9", q:String.raw`<p>A uniform beam of length $4.0$ m and weight $120$ N rests horizontally on two supports at its two ends. A $80$ N load sits $1.0$ m from the left end. The force exerted by the left support is</p>`, choices:["60 N","80 N","100 N","120 N","200 N"], a:3,
   why:String.raw`<p>Torque about the right end: $F_L(4)=120(2)+80(3)=480\Rightarrow F_L=120$ N. The right support carries $80$ N (total $200$ N). Splitting the load equally between supports ($100$ N each) ignores the load's position.</p>`},
  {id:"q10", q:String.raw`<p>A $2.0$ kg particle moves with constant velocity $3.0$ m/s in the $+x$ direction along the line $y=4.0$ m. (Take $x$ to the right, $y$ up, $z$ out of the page.) Its angular momentum about the origin is</p>`, choices:["24 kg·m²/s out of the page","24 kg·m²/s into the page","6 kg·m²/s into the page","12 kg·m²/s out of the page","zero"], a:1,
   why:String.raw`<p>$|L|=mvd=2(3)(4)=24$. For $\vec r=(x,4)$ and $\vec p=(6,0)$: $L_z=xp_y-yp_x=0-4(6)=-24$, which is into the page (a clockwise motion about the origin). It is not zero, and it stays the same as $x$ changes.</p>`},
  {id:"q11", q:String.raw`<p>A uniform ladder leans against a frictionless wall, making a $45^\circ$ angle with a rough floor. The minimum coefficient of static friction with the floor to prevent slipping is</p>`, choices:["0.25","0.35","0.50","0.71","1.0"], a:2,
   why:String.raw`<p>$\mu_s\ge\dfrac1{2\tan\theta}=\dfrac1{2(1)}=0.5$ (from $N_w\ell\sin\theta=W\frac\ell2\cos\theta$, $f=N_w$, $N=W$). Choosing $1.0$ confuses this with a wall that is also rough or with the ladder's weight at the top.</p>`},
  {id:"q12", q:String.raw`<p>A solid cylinder rolls without slipping down an incline. Which statement about the friction force from the incline is correct?</p>`, choices:["It points down the incline and does negative work.","It points up the incline and does negative work.","It points up the incline and does no work.","It points down the incline and does positive work.","There is no friction force, since the cylinder rolls."], a:2,
   why:String.raw`<p>Static friction up the slope supplies the torque that spins the cylinder up, and slows the center's acceleration to $a=g\sin\theta/(1+\beta)$. The contact point is instantaneously at rest, so friction does no work and mechanical energy is conserved. The friction is needed (if $\mu_s=0$ the cylinder would simply slide).</p>`}
,
  {id:"q13", q:String.raw`<p>A uniform rod hinged at one end is released from rest in a horizontal position. Just after release, the acceleration of the free end is</p>`, choices:["$g/2$","$g$","$\\dfrac{3g}{2}$","$2g$","$3g$"], a:2,
   why:String.raw`<p>$\alpha=\tau/I=\dfrac{Mg(L/2)}{ML^2/3}=\dfrac{3g}{2L}$, so $a_{end}=\alpha L=1.5g$. The end exceeds $g$ because the rest of the rod pulls it around. Choosing $g$ treats the end as a freely falling point; $g/2$ is the CM-only guess.</p>`},
  {id:"q14", q:String.raw`<p>A uniform rod of length $2.0$ m is released from rest from the horizontal, pivoted at one end. Using $g=10$ m/s², the speed of the free end as the rod passes the vertical is closest to</p>`, choices:["4.5 m/s","6.3 m/s","7.7 m/s","9.0 m/s","10 m/s"], a:2,
   why:String.raw`<p>Energy: $Mg\frac L2=\frac12\cdot\frac13ML^2\omega^2$ gives $v=\omega L=\sqrt{3gL}=\sqrt{60}=7.7$ m/s. The tempting $4.5$ m/s is the free-fall speed through the CM drop, $\sqrt{2g(L/2)}$, which ignores that the rest of the rod turns and the tip is twice as far out; $6.3$ m/s is free fall through the full $L$ and ignores the rotational inertia.</p>`},
  {id:"q15", q:String.raw`<p>A bowling ball (solid sphere) is released onto a lane with speed $7.0$ m/s and no spin. Eventually it rolls without slipping. Its final speed is</p>`, choices:["3.5 m/s","4.0 m/s","5.0 m/s","5.6 m/s","7.0 m/s"], a:2,
   why:String.raw`<p>$L$ about a point on the floor is conserved: $Mv_0R=Mv_fR(1+\frac25)$, so $v_f=\frac57v_0=5.0$ m/s. It does not depend on $\mu_k$. Keeping $7.0$ m/s would conserve energy, but kinetic friction removes $2/7$ of it as heat. $5.6$ m/s is $\frac45v_0$, wrong $\beta$.</p>`},
  {id:"q16", q:String.raw`<p>A uniform disk has mass $4.0$ kg and radius $0.50$ m. Its rotational inertia about an axis along a diameter is</p>`, choices:["0.125 kg·m²","0.25 kg·m²","0.50 kg·m²","1.0 kg·m²","2.0 kg·m²"], a:1,
   why:String.raw`<p>By the perpendicular-axis theorem, $I_x+I_y=I_z=\frac12MR^2$ and $I_x=I_y$, so $I_x=\frac14MR^2=\frac14(4)(0.25)=0.25$. The $0.50$ answer is the central axis perpendicular to the disk.</p>`},
  {id:"q17", q:String.raw`<p>A uniform bar of mass $2.0$ kg and length $1.0$ m has a small $1.0$ kg ball fixed at each end. Its rotational inertia, in kg·m², about a perpendicular axis through its center is</p>`, choices:["0.17","0.50","0.67","1.0","1.5"], a:2, why:String.raw`<p>$I=\frac1{12}(2.0)(1.0)^2+2(1.0)(0.5)^2=0.167+0.50=0.67$. $0.17$ forgets the balls; $0.50$ forgets the bar; the rotational inertias about the same axis simply add.</p>`},
  {id:"q18", q:String.raw`<p>A mass on a frictionless table is attached to a string through a hole and circles at radius $r$. The string is pulled until the radius is $r/2$. The tension in the string is multiplied by</p>`, choices:["2","4","8","16","1"], a:2,
   why:String.raw`<p>$L=mvr$ is conserved so $v\to2v$. $T=mv^2/r\to m(4v^2)/(r/2)=8T$. Doubling only $v$ gives $4\times$ (forgetting that $r$ also halves); $16\times$ comes from squaring twice.</p>`},
  {id:"q19", q:String.raw`<p>Disk A ($I_A=2.0$ kg·m²) spins at $10$ rad/s about a frictionless axle. Disk B ($I_B=3.0$ kg·m², at rest, same axle) is dropped onto it and they stick. The fraction of the kinetic energy lost is</p>`, choices:["0.20","0.40","0.50","0.60","0.75"], a:3,
   why:String.raw`<p>$\omega_f=2(10)/5=4$ rad/s. $K_i=100$ J, $K_f=\frac12(5)(16)=40$ J, so $60\%$ is lost $=I_B/(I_A+I_B)$. $40\%$ is the fraction <i>left</i>; angular momentum is conserved but not energy.</p>`},
  {id:"q20", q:String.raw`<p>A uniform horizontal beam of weight $100$ N is hinged to a wall at one end. A cable from the other end makes $45^\circ$ with the beam and holds it horizontal. The tension in the cable is closest to</p>`, choices:["50 N","71 N","100 N","141 N","200 N"], a:1,
   why:String.raw`<p>Torque about the hinge: $T\sin45^\circ L=100(L/2)$, so $T=50/0.707=71$ N. $50$ N forgets the $\sin45^\circ$; $141$ N comes from putting the whole weight at the end of the beam (lever $L$) instead of at its middle.</p>`},
  {id:"q21", q:String.raw`<p>A yo-yo is a solid disk of mass $M$ and radius $R$ with a thin axle of radius $R/4$ wound with string. Holding the free end of the string fixed, the yo-yo is released. Its acceleration is</p>`, choices:["$g$","$g/2$","$g/3$","$g/5$","$g/9$"], a:4,
   why:String.raw`<p>$a=\dfrac{g}{1+I/(Mr^2)}$ with $I=\frac12MR^2$, $r=R/4$: $I/Mr^2=8$, so $a=g/9$. Using $r=R$ gives $g/1.5$; ignoring rotation gives $g$.</p>`},
  {id:"q22", q:String.raw`<p>A hoop rolls without slipping around a loop-the-loop of radius $R_L$ (the hoop's radius is negligible). The minimum height above the bottom from which it must be released from rest is</p>`, choices:["$2R_L$","$2.5R_L$","$2.7R_L$","$3R_L$","$4R_L$"], a:3,
   why:String.raw`<p>$v_{top}^2\ge gR_L$; $Mgh=2MgR_L+\frac12Mv^2(1+1)$ gives $h=3R_L$. $2.5R_L$ is the answer for a sliding block; $2.7R_L$ is for a solid sphere.</p>`},
  {id:"q23", q:String.raw`<p>A tall uniform box, width $0.30$ m and height $0.90$ m, sits on a rough board with $\mu_s=0.50$. The board is slowly tilted. The box will</p>`, choices:["slide first, at about $27^\\circ$","tip first, at about $18^\\circ$","slide first, at about $18^\\circ$","tip first, at about $27^\\circ$","stay put until $45^\\circ$"], a:1,
   why:String.raw`<p>It tips when $\tan\theta=w/h=\frac13$, $\theta=18.4^\circ$. It would slide at $\tan\theta=\mu_s$, $26.6^\circ$. The smaller angle happens first. Comparing angles with the wrong ratio ($h/w$) or assuming the box always slides first are the common slips.</p>`},
  {id:"q24", q:String.raw`<p>A wheel of radius $0.50$ m starts from rest with angular acceleration $2.0$ rad/s². At $t=3.0$ s the magnitude of the acceleration of a point on its rim is closest to</p>`, choices:["1.0 m/s²","3.0 m/s²","6.0 m/s²","18 m/s²","36 m/s²"], a:3,
   why:String.raw`<p>$a_t=\alpha r=1.0$, $\omega=6$ rad/s, $a_c=\omega^2r=18$, $a=\sqrt{1+324}=18.03$. Quoting only $a_t$ ($1.0$) ignores the centripetal part, which dominates.</p>`},
  {id:"q25", q:String.raw`<p>A particle moves with constant speed counterclockwise on a horizontal circle of radius $R$ centered on the $z$ axis. About a point on the $z$ axis a height $h$ above the plane of the circle, its angular momentum $\vec L$ is</p>`, choices:["zero, because the net torque is zero","constant in magnitude and direction","constant in magnitude, with a constant $z$ component and a horizontal component that rotates","$mvh$, along the radius","$mvR$, constant in direction"], a:2,
   why:String.raw`<p>$\vec L=\vec r\times\vec p=mv(h\cos\varphi,\ h\sin\varphi,\ R)$ (about a point above the plane, with $z$ axis up). $L_z=mvR$ is constant but the horizontal part rotates with the particle, so $\vec L$ changes: about this point the centripetal force has a nonzero torque. $\vec L$ is constant only about the center of the circle.</p>`},
  {id:"q26", q:String.raw`<p>A horizontal rod of mass $M$ and length $L$ pivoted at one end is released from rest. At the instant it passes through the vertical position, the pivot exerts a force of magnitude</p>`, choices:["$0$","$Mg/4$","$Mg$","$\\dfrac{5}{2}Mg$","$3Mg$"], a:3,
   why:String.raw`<p>At the bottom $\omega^2=3g/L$, the CM needs centripetal acceleration $\omega^2L/2=1.5g$: $P-Mg=1.5Mg$, $P=2.5Mg$. $Mg/4$ is the value at release; $Mg$ would require the CM not to accelerate.</p>`}
  ],
  frq:[
  {id:"f1", type:"Mathematical routines", title:"A rolling cylinder pulled by a falling block",
   prompt:String.raw`<p>A uniform solid cylinder of mass $M=4.0$ kg and radius $R=0.20$ m rests on a horizontal table. A light string is attached to the cylinder's axle, passes over a pulley, and supports a block of mass $m=2.0$ kg. The pulley is a uniform solid disk of mass $M_p=2.0$ kg and radius $r$, free to rotate about a frictionless axle, and the string does not slip on it. The cylinder rolls without slipping on the table. Use $g=10$ m/s².</p>
<svg class="fig" viewBox="0 0 340 190" width="340" role="img" aria-label="A cylinder on a table connected by a horizontal string over a pulley at the table edge to a hanging block">
<defs><marker id="ar8" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<line x1="10" y1="100" x2="250" y2="100" stroke="currentColor" stroke-width="3"/>
<circle cx="80" cy="70" r="30" fill="currentColor" fill-opacity=".15" stroke="currentColor"/><circle cx="80" cy="70" r="2.5" fill="currentColor"/>
<line x1="80" y1="70" x2="262" y2="70" stroke="currentColor"/>
<circle cx="268" cy="82" r="20" fill="currentColor" fill-opacity=".15" stroke="currentColor"/><circle cx="268" cy="82" r="2.5" fill="currentColor"/>
<line x1="288" y1="82" x2="288" y2="140" stroke="currentColor"/>
<rect x="272" y="140" width="32" height="26" fill="currentColor" fill-opacity=".3" stroke="currentColor"/>
<line x1="110" y1="45" x2="150" y2="45" stroke="currentColor" stroke-width="2" marker-end="url(#ar8)"/>
<text x="118" y="38" font-size="12">a</text><text x="46" y="35">M, R</text><text x="300" y="60" font-size="12">M_p, r</text><text x="308" y="158">m</text></svg>
<p>The system is released from rest.</p>
<p>(a) Draw free-body diagrams for the cylinder (include the friction force), the pulley (show the two tensions), and the block.<br>
(b) Write the equations of motion: Newton's second law for the cylinder's center of mass, the torque equation for the cylinder about its center, the torque equation for the pulley, and Newton's second law for the block. State the constraint relating the accelerations.<br>
(c) Show that the acceleration of the block is $a=\dfrac{mg}{m+\tfrac12M_p+\tfrac32M}$ and calculate its value.<br>
(d) Calculate the tension in the string on each side of the pulley, and the friction force on the cylinder. State its direction.<br>
(e) Determine the minimum coefficient of static friction between cylinder and table for rolling without slipping.<br>
(f) Use energy conservation to find the speed of the block after it has fallen $1.5$ m from rest, and compare it with the kinematic result from part (c).<br>
(g) In words, explain why the tension on the two sides of the pulley differ, and what would happen to the two tensions and to $a$ if the pulley were massless.</p>`,
   pts:[
    {p:1,d:"Correct FBDs: cylinder has $T_1$ forward at the axle, friction $f$ backward at the contact, $Mg$, $N$; pulley has $T_1$ and $T_2$ on opposite sides at the rim; block has $mg$ down and $T_2$ up"},
    {p:1,d:"Cylinder translation $T_1-f=Ma$ and rotation $fR=\\tfrac12MR^2\\alpha$ (friction provides the torque)"},
    {p:1,d:"Pulley $(T_2-T_1)r=\\tfrac12M_pr^2\\alpha_p$ and block $mg-T_2=ma$"},
    {p:1,d:"Constraints: $a=\\alpha R=\\alpha_pr$ (same $a$ for string, axle and block)"},
    {p:1,d:"Algebra to $a=mg/(m+\\tfrac12M_p+\\tfrac32M)$ (using $f=\\tfrac12Ma$, $T_1=\\tfrac32Ma$, $T_2-T_1=\\tfrac12M_pa$)"},
    {p:1,d:"$a=20/9=2.2$ m/s²"},
    {p:1,d:"$T_1=\\tfrac32Ma=13$ N, $T_2=m(g-a)=15.6$ N, $f=\\tfrac12Ma=4.4$ N, directed backward (opposite to the cylinder's motion, away from the pulley)"},
    {p:1,d:"$\\mu_s\\ge f/N=4.4/40=0.11$"},
    {p:1,d:"Energy: $mgh=\\tfrac12mv^2+\\tfrac14M_pv^2+\\tfrac34Mv^2$ giving $v=\\sqrt{30/4.5}=2.6$ m/s, agreeing with $\\sqrt{2ah}=\\sqrt{2(2.22)(1.5)}$"},
    {p:1,d:"Explanation: net torque on the pulley needs $T_2>T_1$ to give it angular acceleration; for a massless pulley $T_1=T_2$ and $a=mg/(m+\\tfrac32M)=2.5$ m/s² (larger, since less inertia to accelerate)"}],
   solution:String.raw`<p><b>(a), (b)</b> Let $a$ be the common linear acceleration (cylinder axle, string, block). Cylinder: $T_1-f=Ma$ (f points backward, opposite to the string); rotation about the center, $fR=\tfrac12MR^2\alpha$ with $\alpha=a/R$ (no slip), so $f=\tfrac12Ma$. Pulley: $(T_2-T_1)r=\tfrac12M_pr^2(a/r)$, so $T_2-T_1=\tfrac12M_pa$. Block: $mg-T_2=ma$.</p>
<p><b>(c)</b> From the cylinder: $T_1=Ma+\tfrac12Ma=\tfrac32Ma$. Then $T_2=\tfrac32Ma+\tfrac12M_pa$. Insert in the block equation: $mg=ma+\tfrac32Ma+\tfrac12M_pa$, so $a=\dfrac{mg}{m+\tfrac12M_p+\tfrac32M}=\dfrac{20}{2+1+6}=\dfrac{20}{9}=2.2$ m/s².</p>
<p><b>(d)</b> $T_1=\tfrac32(4.0)(2.22)=13.3$ N (between cylinder and pulley). $T_2=m(g-a)=2.0(7.78)=15.6$ N (block side). Check: $T_2-T_1=2.2=\tfrac12(2)(2.22)$ ✓. $f=\tfrac12Ma=4.4$ N, directed backward along the table (toward the side away from the pulley).</p>
<p><b>(e)</b> $N=Mg=40$ N, so $\mu_s\ge4.4/40=0.11$.</p>
<p><b>(f)</b> Friction does no work and nothing dissipates. $mgh=\tfrac12mv^2+\tfrac12I_p\omega_p^2+\tfrac12Mv^2+\tfrac12I_c\omega_c^2$. Using $I_p=\tfrac12M_pr^2$, $I_c=\tfrac12MR^2$ and $\omega=v/\text{radius}$: $mgh=v^2\big(\tfrac12m+\tfrac14M_p+\tfrac34M\big)=4.5v^2$. With $mgh=2(10)(1.5)=30$ J: $v^2=6.67$, $v=2.6$ m/s. Kinematics: $v^2=2ah=2(2.22)(1.5)=6.67$ ✓.</p>
<p><b>(g)</b> A massive pulley needs a net torque to gain angular speed, so the rope must pull harder on the block side ($T_2>T_1$). If the pulley were massless, $T_1=T_2$ (zero net torque is required for zero inertia), and $a=mg/(m+\tfrac32M)=20/8=2.5$ m/s², larger because the pulley's rotational inertia no longer has to be accelerated.</p>`},
  {id:"f2", type:"Qualitative/quantitative translation", title:"A clay ball hits a pivoted rod",
   prompt:String.raw`<p>A uniform rod of mass $M=3.0$ kg and length $L=1.2$ m hangs vertically from a frictionless horizontal pivot at its top end. A ball of clay of mass $m=1.0$ kg moving horizontally at $v=8.0$ m/s strikes the bottom tip of the rod and sticks to it. Use $g=10$ m/s² and $I_{rod}=\tfrac13ML^2$ about the pivot.</p>
<svg class="fig" viewBox="0 0 300 200" width="300" role="img" aria-label="A rod hanging from a pivot at the top, with a clay ball approaching the bottom end horizontally">
<defs><marker id="ar9" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<line x1="90" y1="14" x2="150" y2="14" stroke="currentColor" stroke-width="3"/>
<circle cx="120" cy="14" r="4" fill="currentColor"/>
<line x1="120" y1="14" x2="120" y2="165" stroke="currentColor" stroke-width="8" stroke-linecap="round" opacity=".6"/>
<circle cx="30" cy="165" r="9" fill="currentColor"/>
<line x1="44" y1="165" x2="90" y2="165" stroke="currentColor" stroke-width="2" marker-end="url(#ar9)"/>
<text x="20" y="190">m, v</text><text x="132" y="90">M, L</text><text x="128" y="20">pivot</text></svg>
<p>(a) Explain why the angular momentum of the rod-and-clay system about the pivot is conserved in the collision, but its linear momentum and kinetic energy are not.<br>
(b) Calculate the angular speed of the rod just after the collision.<br>
(c) Calculate the kinetic energy lost in the collision, and the fraction of the original kinetic energy that is lost.<br>
(d) After the collision the rod swings up. Find the maximum angle from the vertical that it reaches.<br>
(e) The pivot exerts a horizontal impulse on the rod during the collision. Calculate its magnitude and direction relative to the ball's initial velocity, and explain in words how this shows that linear momentum is not conserved.</p>`,
   pts:[
    {p:1,d:"Explains: the pivot force passes through the pivot so has zero torque about it, and gravity's torque is negligible/zero during the brief collision, so $L$ is conserved; the pivot's impulse changes the linear momentum; the clay sticking is inelastic so $K$ decreases"},
    {p:1,d:"$mvL=(\\tfrac13ML^2+mL^2)\\omega$ with correct initial angular momentum $9.6$ kg·m²/s"},
    {p:1,d:"$I_{tot}=1.44+1.44=2.88$ kg·m² and $\\omega=3.33$ rad/s"},
    {p:1,d:"$K_i=32$ J, $K_f=\\tfrac12I\\omega^2=16$ J, lost $=16$ J"},
    {p:1,d:"Fraction lost $=0.50$"},
    {p:1,d:"Energy conservation after collision: $K_f=(Mg\\tfrac L2+mgL)(1-\\cos\\theta)$ with CM heights correct"},
    {p:1,d:"$1-\\cos\\theta=16/30$, $\\theta\\approx62^\\circ$"},
    {p:1,d:"Momentum just after: $M\\omega L/2+m\\omega L=6+4=10$ kg·m/s, versus $8$ before; pivot impulse $=2$ N·s in the direction of the ball's velocity"},
    {p:1,d:"Explains that the net external (pivot) force during the collision gives a nonzero impulse, so $p$ of the system is not conserved"}],
   solution:String.raw`<p><b>(a)</b> About the pivot, the pivot force has zero lever arm and gravity's torque is negligible over the very short collision, so there is no external torque about it and $L$ is conserved. The pivot does exert an (impulsive) force, so total linear momentum changes. The clay sticks, so the collision is perfectly inelastic: mechanical energy is converted to heat and deformation.</p>
<p><b>(b)</b> $L_i=mvL=1.0(8.0)(1.2)=9.6$ kg·m²/s. $I_{rod}=\tfrac13(3.0)(1.2)^2=1.44$, $I_{clay}=mL^2=1.44$, $I_{tot}=2.88$ kg·m². $\omega=9.6/2.88=3.33$ rad/s.</p>
<p><b>(c)</b> $K_i=\tfrac12(1)(64)=32$ J. $K_f=\tfrac12(2.88)(3.33)^2=16$ J. Lost: $16$ J, which is $50\%$ (equal to $I_{rod}/I_{tot}$).</p>
<p><b>(d)</b> After the collision, $K_f$ becomes potential energy. Rising angle $\theta$: CM of rod rises $\tfrac L2(1-\cos\theta)$, the clay rises $L(1-\cos\theta)$. $16=\big(3(10)(0.6)+1(10)(1.2)\big)(1-\cos\theta)=30(1-\cos\theta)$, so $\cos\theta=0.467$, $\theta\approx62^\circ$.</p>
<p><b>(e)</b> $p_{after}=M\omega\tfrac L2+m\omega L=3(3.33)(0.6)+1(3.33)(1.2)=6+4=10$ kg·m/s. $p_{before}=8$. Impulse from the pivot $=10-8=2$ N·s, in the same direction as the ball's initial velocity. Because the system's momentum changed, an external force (the pivot) must have acted, so linear momentum was not conserved; (For the bare rod, the pivot impulse would be zero only if it were struck at the center of percussion, $\tfrac23L$ from the pivot.)</p>`}
,
  {id:"f3", type:"Mathematical routines", title:"A falling rod and its hinge",
   prompt:String.raw`<p>A uniform rod of mass $M=3.0$ kg and length $L=1.5$ m is hinged at one end to a frictionless pivot. It is released from rest in a horizontal position. Use $g=10$ m/s² and $I_{pivot}=\tfrac13ML^2$.</p>
<p>(a) Derive an expression for the angular acceleration of the rod when it makes an angle $\theta$ below the horizontal, and evaluate it at release. Find the acceleration of the free end at release and compare it with $g$.<br>
(b) Find the force exerted by the hinge on the rod at the instant of release.<br>
(c) Find the angular speed of the rod and the speed of its free end when the rod is vertical.<br>
(d) Find the force exerted by the hinge on the rod at that instant, with direction.<br>
(e) At release, how far from the pivot is the point whose acceleration is exactly $g$?<br>
(f) Explain in words why the free end of the rod can accelerate faster than $g$, and why the constant-acceleration formula $\omega^2=2\alpha\Delta\theta$ cannot be used in (c).</p>`,
   pts:[
    {p:1,d:"Torque about pivot $Mg\\tfrac L2\\cos\\theta$ and $I=\\tfrac13ML^2$"},
    {p:1,d:"$\\alpha=\\tfrac{3g}{2L}\\cos\\theta=10$ rad/s² at release"},
    {p:1,d:"$a_{end}=\\alpha L=15$ m/s² $=1.5g$, larger than $g$"},
    {p:1,d:"CM acceleration $\\alpha L/2=7.5$ m/s², hinge force $=M(g-a_{cm})=7.5$ N upward (no horizontal component)"},
    {p:1,d:"Energy conservation $Mg\\tfrac L2=\\tfrac12\\cdot\\tfrac13ML^2\\omega^2$"},
    {p:1,d:"$\\omega=\\sqrt{3g/L}=4.47$ rad/s and $v_{end}=\\sqrt{3gL}=6.7$ m/s"},
    {p:1,d:"Centripetal acceleration of the CM $\\omega^2L/2=15$ m/s² (no tangential component, $\\alpha=0$)"},
    {p:1,d:"Hinge force $=M(g+15)=75$ N, vertically upward"},
    {p:1,d:"Point with $a=g$ at $\\alpha r=g$: $r=2L/3=1.0$ m"},
    {p:1,d:"Explanation: the rest of the rod drags the end around / torque varies with angle so $\\alpha$ is not constant"}],
   solution:String.raw`<p><b>(a)</b> $\tau=Mg\tfrac L2\cos\theta=\tfrac13ML^2\alpha$, so $\alpha=\dfrac{3g\cos\theta}{2L}$. At release, $\alpha=\dfrac{30}{3.0}=10$ rad/s². Free end: $a=\alpha L=15$ m/s² $=1.5g$.</p>
<p><b>(b)</b> $a_{cm}=\alpha L/2=7.5$ m/s² downward and $\omega=0$. $Mg-P=Ma_{cm}$, $P=3.0(10-7.5)=7.5$ N upward.</p>
<p><b>(c)</b> $Mg\tfrac L2=\tfrac12\cdot\tfrac13ML^2\omega^2\Rightarrow\omega^2=3g/L=20$, $\omega=4.47$ rad/s; $v=\omega L=6.7$ m/s.</p>
<p><b>(d)</b> At the vertical, $\tau=0$ so $\alpha=0$; the CM moves in a circle of radius $0.75$ m with $a_c=\omega^2(0.75)=15$ m/s² upward. $P-Mg=Ma_c$, $P=3.0(25)=75$ N upward.</p>
<p><b>(e)</b> $a=\alpha r=g$ gives $r=g/\alpha=1.0$ m $=\tfrac23L$.</p>
<p><b>(f)</b> The end is not a free particle. The whole rod must turn rigidly with the single angular acceleration $\alpha=\tfrac{3g}{2L}$, and any point farther than $\tfrac23L$ from the pivot then has $\alpha r>g$: the inner part of the rod, pulled down by gravity but held back by the hinge, pushes on the outer part through the rod's internal forces and adds to gravity. The torque $\tfrac12MgL\cos\theta$ shrinks as the rod falls, so $\alpha$ is not constant and $\omega^2=2\alpha\Delta\theta$ with the initial $\alpha$ would overestimate $\omega$; the energy method accounts for the changing torque automatically.</p>`},
  {id:"f4", type:"Qualitative/quantitative translation", title:"A bowling ball starts to roll",
   prompt:String.raw`<p>A bowling ball (uniform solid sphere) of mass $M=7.0$ kg and radius $R=0.11$ m is released horizontally onto a lane with speed $v_0=8.0$ m/s and no rotation. The coefficient of kinetic friction is $\mu_k=0.25$. Use $g=10$ m/s².</p>
<p>(a) State the direction of the friction force on the ball while it slips. Write Newton's second law for the center of mass and the rotational equation about the center, and derive $v(t)$ and $\omega(t)$.<br>
(b) Find the time at which the ball begins to roll without slipping.<br>
(c) Use conservation of angular momentum about a point on the lane to find the speed of the ball once it rolls without slipping, and show it agrees with (b).<br>
(d) Calculate the kinetic energy lost and the fraction of the initial energy it represents. Where does it go?<br>
(e) If $\mu_k$ were doubled, state (with reasoning) what happens to the time, the final speed and the energy lost.</p>`,
   pts:[
    {p:1,d:"Friction backward (opposes slipping of the contact point), $f=\\mu_kMg=17.5$ N"},
    {p:1,d:"$Ma=-\\mu_kMg$ so $v=v_0-\\mu_kgt$"},
    {p:1,d:"$fR=I\\alpha$ with $I=\\tfrac25MR^2$ gives $\\alpha=5\\mu_kg/2R$, $\\omega=5\\mu_kgt/2R$"},
    {p:1,d:"Condition $v=\\omega R$ gives $t=v_0/(3.5\\mu_kg)=0.914$ s"},
    {p:1,d:"Angular momentum about a point on the lane: $Mv_0R=Mv_fR+\\tfrac25MR^2(v_f/R)$"},
    {p:1,d:"$v_f=\\tfrac57v_0=5.7$ m/s, matching $v_0-\\mu_kgt$"},
    {p:1,d:"$K_i=224$ J, $K_f=\\tfrac12Mv_f^2\\cdot\\tfrac75=160$ J, lost $64$ J"},
    {p:1,d:"Fraction $2/7\\approx0.29$; converted to heat by kinetic friction"},
    {p:1,d:"Doubled $\\mu_k$: time halves ($0.46$ s)"},
    {p:1,d:"Final speed unchanged and energy lost unchanged ($\\mu_k$ cancels from $L$ conservation; heat $=f\\times s_{slip}$ with $f$ doubled and slip distance halved)"}],
   solution:String.raw`<p><b>(a)</b> The contact point moves forward relative to the lane, so kinetic friction on the ball points backward: $f=\mu_kMg=17.5$ N. Center of mass: $Ma=-f\Rightarrow v=v_0-\mu_kgt$. About the center, friction at the bottom gives a torque that spins the ball up: $fR=\tfrac25MR^2\alpha\Rightarrow\alpha=\dfrac{5\mu_kg}{2R}$, $\omega=\dfrac{5\mu_kg}{2R}t$.</p>
<p><b>(b)</b> $v=\omega R$: $8-2.5t=6.25t\Rightarrow t=\dfrac{8}{8.75}=0.914$ s.</p>
<p><b>(c)</b> No torque about a point on the lane (friction acts along a line through it, $N$ cancels gravity). $Mv_0R=Mv_fR(1+\tfrac25)\Rightarrow v_f=\tfrac57(8)=5.71$ m/s. From (b): $8-2.5(0.914)=5.71$ ✓. Then $\omega_f=v_f/R=52$ rad/s.</p>
<p><b>(d)</b> $K_i=\tfrac12(7)(64)=224$ J; $K_f=\tfrac12(7)(5.71)^2(1.4)=160$ J. Lost: $64$ J $=\tfrac27K_i$ (29%), converted to thermal energy in the sliding contact (check: $f\times s_{slip}=17.5\times3.66=64$ J).</p>
<p><b>(e)</b> $t=v_0/(3.5\mu_kg)$ halves to $0.46$ s. The final speed is independent of $\mu_k$. The energy loss is also unchanged: friction doubles but the slip distance halves.</p>`},
  {id:"f5", type:"Experimental design & analysis", title:"Measuring the rotational inertia of a wheel",
   prompt:String.raw`<p>A student wants to measure the rotational inertia $I$ of a wheel that spins on a nearly frictionless horizontal axle. A light string wound around the axle (radius $r=0.020$ m) carries a hanging mass $m$. The student releases the mass from rest and measures the time $t$ it takes to fall $h=1.00$ m. Take $g=10.0$ m/s². Data:</p>
<table><tr><th>$m$ (kg)</th><th>0.10</th><th>0.20</th><th>0.30</th><th>0.40</th><th>0.50</th></tr><tr><th>$t$ (s)</th><td>3.19</td><td>2.28</td><td>1.88</td><td>1.64</td><td>1.48</td></tr></table>
<p>(a) Derive an expression for the acceleration of the mass in terms of $m$, $I$, $r$ and $g$, and explain how the student determines $a$ from $h$ and $t$.<br>
(b) The student wants a straight-line graph whose slope gives $I$. State what to plot on each axis and how $I$ is obtained from the slope. Say what the intercept should equal.<br>
(c) Add to a table the quantities you need, plot the points and draw the best-fit line. Use the line to find $I$.<br>
(d) Axle friction is not quite zero. Describe how it affects the measured accelerations, and whether the $I$ found from your graph tends to be too large or too small. Suggest one change to the procedure that reduces the effect.</p>`,
   pts:[
    {p:1,d:"Equations $mg-T=ma$ and $Tr=I\\alpha$, $a=\\alpha r$"},
    {p:1,d:"$a=mg/(m+I/r^2)$; and $a=2h/t^2$ from kinematics at constant acceleration from rest"},
    {p:1,d:"Linearization: $1/a=1/g+\\dfrac{I}{gr^2}\\dfrac1m$, plot $1/a$ vs $1/m$"},
    {p:1,d:"Slope $=I/(gr^2)$ so $I=\\text{slope}\\times gr^2$; intercept $=1/g=0.10$ s²/m"},
    {p:1,d:"Table values: $1/m=10,5,3.33,2.5,2.0$ kg⁻¹ and $1/a=t^2/2=5.09,2.60,1.77,1.35,1.10$ s²/m"},
    {p:1,d:"Axes labelled with units, points plotted, best-fit line drawn through the data"},
    {p:1,d:"Slope $\\approx0.50$ s²·kg/m (with the intercept $\\approx0.10$), consistent with the prediction"},
    {p:1,d:"$I=0.50(10.0)(0.020)^2=2.0\\times10^{-3}$ kg·m²"},
    {p:1,d:"Friction reduces $a$ (more so for small $m$), making the wheel look more massive, so $I$ is too large"},
    {p:1,d:"Valid improvement, e.g. use larger masses, check for linearity, lubricate, repeat and average, or include the friction torque as a fitted constant"}],
   solution:String.raw`<p><b>(a)</b> Mass: $mg-T=ma$. Wheel: $Tr=I\alpha=Ia/r$. Eliminating $T$: $a=\dfrac{mg}{m+I/r^2}$. Since it starts from rest and $a$ is constant, $h=\tfrac12at^2$, so $a=2h/t^2$.</p>
<p><b>(b)</b> Take the reciprocal: $\dfrac1a=\dfrac1g+\dfrac{I}{gr^2}\cdot\dfrac1m$. Plot $1/a$ (vertical) against $1/m$ (horizontal); the slope is $I/(gr^2)$ so $I=\text{slope}\,gr^2$, and the vertical intercept is $1/g=0.100$ s²/m.</p>
<p><b>(c)</b> $1/a=t^2/2$: $5.09,\ 2.60,\ 1.77,\ 1.35,\ 1.10$ s²/m for $1/m=10,\ 5.0,\ 3.33,\ 2.5,\ 2.0$ kg⁻¹. The points lie on a line of slope $\approx(5.09-1.10)/8=0.50$ and intercept $\approx0.10$. $I=0.50(10.0)(4.0\times10^{-4})=2.0\times10^{-3}$ kg·m².</p>
<p><b>(d)</b> A friction torque on the axle acts against the rotation, so the measured accelerations are smaller, especially for small $m$ where the driving torque $mgr$ is not much larger than the friction torque. The data then curve upward at large $1/m$ and a fit would give a slope too large, and an $I$ too large. Fitting only larger masses, or lubricating the axle, reduces it; repeating each drop and averaging reduces random timing error.</p>`}
  ]
});
