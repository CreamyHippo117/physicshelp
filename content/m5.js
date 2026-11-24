PH.unit({
  id:"m5", course:"mech", order:70, hours:9,
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
    "Solve static equilibrium problems (beams, ladders) by choosing a clever pivot point"
  ],
  lessons:[
  {id:"l1", title:"Rotational kinematics and torque",,videos:[{title:"Search: rotational kinematics and torque, AP Physics C",url:"https://www.youtube.com/results?search_query=Flipping+Physics+rotational+kinematics+torque+cross+product+AP+Physics+C",src:"YouTube search",note:"Look for Flipping Physics results on angular velocity, v = omega r, and torque as r x F."}] html:String.raw`
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
  {id:"l2", title:"Rotational inertia and the parallel-axis theorem",,videos:[{title:"Rotations, Part II: Parallel Axis Theorem",url:"https://oyc.yale.edu/node/1559",src:"Yale Open Courses (Physics 200)",note:"Calculus-based treatment of rotational inertia and the parallel-axis theorem."}] html:String.raw`
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
<p>The AP gives you this table, but you must be able to <i>derive</i> any of it with an integral, and recognize that a non-uniform object (for example $\lambda=kx$) needs its own integral.</p>
<div class="box key"><b>Sanity ordering.</b> For the same $M$ and $R$: hoop $>$ shell $>$ disk $>$ sphere. The more mass pushed to the rim, the larger $\beta$.</div>

<p><b>Parallel-axis theorem.</b> If the axis passes a perpendicular distance $d$ from a <i>parallel</i> axis through the center of mass, then</p>
$$I=I_{cm}+Md^2$$
<p><b>Proof.</b> Work in the plane perpendicular to the axes and put the origin at the center of mass. Let a mass element $dm$ be at $\vec\rho\,'$ from the CM, and let the new axis be at displacement $\vec d$ from the CM. Then $dm$ is at $\vec\rho=\vec\rho\,'-\vec d$ from the new axis, and</p>
$$I=\int|\vec\rho\,'-\vec d|^2dm=\int\rho'^2\,dm-2\vec d\cdot\int\vec\rho\,'\,dm+d^2\int dm$$
<p>The first term is $I_{cm}$. The middle integral is $M$ times the CM position measured from the CM, which is $\vec 0$ by definition. The last is $Md^2$. Hence $I=I_{cm}+Md^2$. $\blacksquare$</p>
<p>Check: rod about its end, $d=L/2$: $\frac1{12}ML^2+M\frac{L^2}4=\frac13ML^2$. ✓.</p>
<div class="box trap"><b>Trap:</b> The theorem only moves between an axis through the CM and a parallel one. To go from end to some other point you must first go back to the CM (end $\to$ CM $\to$ new point). Also, adding $I$'s of parts is allowed (same axis), but you cannot add moments about different axes.</div>`},
  {id:"l3", title:"Rotational dynamics, energy, pulleys and rolling",,videos:[{title:"Walter Lewin, MIT 8.01 Lecture 24: Rolling Motion",url:"https://opencw.aprende.org/courses/physics/8-01-physics-i-classical-mechanics-fall-1999/video-lectures/lecture-24",src:"Walter Lewin lectures (MIT OCW mirror)",note:"Pure rolling of hollow and solid cylinders and the acceleration down a ramp."},{title:"Search: torque and pulleys with mass",url:"https://www.youtube.com/results?search_query=Flipping+Physics+torque+pulley+with+mass+rotational+dynamics",src:"YouTube search",note:"Worked pulley-with-mass problems."}] html:String.raw`
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
  {id:"l4", title:"Angular momentum",,videos:[{title:"Walter Lewin: Angular Momentum",url:"https://cosmolearning.org/video-lectures/angular-momentum",src:"Walter Lewin lectures (CosmoLearning)",note:"Lewin relates the rate of change of angular momentum to torque."}] html:String.raw`
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
<p><b>Changing $I$.</b> A skater with $I_1=4$ kg·m² spins at $\omega_1=3$ rad/s. She pulls her arms in so $I_2=2$ kg·m². Then $I_1\omega_1=I_2\omega_2$ gives $\omega_2=6$ rad/s. Kinetic energy $\tfrac12I\omega^2=\tfrac{L^2}{2I}$ <i>doubles</i>: her arms do work as they pull inward against the "centrifugal" tendency.</p>
<p><b>Collisions with a pivoted object.</b> A particle hits a rod or disk that can rotate about a fixed pivot. Take the pivot as the reference point. The pivot force acts <i>at</i> the pivot, so it has zero torque about it. Thus:</p>
$$L_{before}=L_{after}:\qquad mv\,d=(I_{body}+m r^2)\,\omega\quad(\text{particle sticks})$$
<div class="box trap"><b>Trap 1:</b> In such a collision <b>linear momentum is not conserved</b> (the pivot exerts a large impulsive force) and, if the particle sticks, <b>kinetic energy is not conserved either</b>. Conserve $L$ about the pivot, then use energy conservation only <i>after</i> the collision (for the swing).<br><b>Trap 2:</b> The particle's contribution to $L$ before is $mvd$ with $d$ perpendicular distance to the pivot, not just $mv$ times the rod length unless it hits perpendicular to the rod.</div>
<p>Energy loss in the perfectly inelastic case: with $K_i=\frac12mv^2$ and $K_f=\frac{L^2}{2I_{tot}}$ you can show $K_f/K_i=mr^2/I_{tot}$ ($r$ = distance of the impact point from the pivot, ball hitting perpendicular to the rod) if the particle starts as the only moving object. The heavier the rod's $I$, the more energy is lost to deformation and heat.</p>
<p><b>Rolling, in terms of $L$.</b> About a point on the ground, a rolling wheel has $L=Mv_{cm}R+I_{cm}\omega$ (orbital plus spin), which equals $I_P\omega$. Using the ground as reference, gravity and the contact force can both be handled with torque about the ground contact line.</p>`},
  {id:"l5", title:"Static equilibrium",,videos:[{title:"Static Equilibrium: Ladder Against a Wall",url:"https://www.pearson.com/channels/physics/asset/f8a1d3f3/static-equilibrium-ladder-against-wall",src:"Pearson video lesson",note:"Worked ladder problem with friction at the floor."}] html:String.raw`
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
  ]
});
