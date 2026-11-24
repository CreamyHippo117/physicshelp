PH.unit({
  id:"m4", course:"mech", order:60, hours:6,
  title:"Mechanics 4: Linear Momentum and Systems of Particles",
  blurb:"Newton's second law in its original form, $\\vec F=d\\vec p/dt$, leads to impulse, conservation of momentum, collisions, and the center of mass, the single point that obeys $\\vec F_{ext}=M\\vec a_{cm}$ for any system.",
  needs:["m1","m2","m3"],
  goals:[
    "Compute impulse as $\\int\\vec F\\,dt$ (area under an $F$-$t$ graph) and relate it to $\\Delta\\vec p$",
    "Decide when momentum is conserved for a system, and apply it component by component",
    "Classify collisions (elastic, inelastic, perfectly inelastic), use the coefficient of restitution, and compute kinetic energy lost",
    "Locate the center of mass of discrete and continuous bodies using $\\int x\\,dm$",
    "Use $\\vec F_{ext}=M\\vec a_{cm}$ to describe the motion of a system, including after an internal explosion",
    "Use the center-of-mass frame to see why only part of the kinetic energy can be lost in a collision"
  ],
  lessons:[
  {id:"l1", title:"Momentum and impulse", videos:[{title:"Impulse Derivation and Demonstration",url:"https://www.flippingphysics.com/impulse-derivation-demo.html",src:"Flipping Physics",note:"AP Physics C: derives impulse with calculus and shows a slow-motion F-t graph (about 6.5 min)."}], html:String.raw`
<p><b>Linear momentum</b> of a particle is the vector $\vec p=m\vec v$ (units kg m/s = N s). It measures how hard a moving object is to stop. Newton wrote his second law not as $F=ma$ but as</p>
$$\vec F_{net}=\frac{d\vec p}{dt}$$
<p>For constant mass this reduces to $m\,d\vec v/dt=m\vec a$. The momentum form is the more general one and is the natural starting point for systems.</p>
<p>Integrate both sides over a time interval. The result is the <b>impulse-momentum theorem</b>:</p>
$$\vec J\equiv\int_{t_1}^{t_2}\vec F_{net}\,dt=\vec p_2-\vec p_1=\Delta\vec p$$
<p>$\vec J$ is the <b>impulse</b>. On an $F$-$t$ graph it is the signed area under the curve. Because it is a vector equation, it holds separately for each component. A force that is huge but acts for a very short time (a bat hitting a ball) can be summarized by its <b>average force</b> $F_{avg}=J/\Delta t$.</p>
<svg class="fig" viewBox="0 0 340 190" width="340" role="img" aria-label="Force versus time graph: a triangular pulse rising from zero to a peak and back, with the area under it shaded and labeled impulse J">
<line x1="40" y1="160" x2="320" y2="160" stroke="currentColor"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor"/>
<polygon points="70,160 160,40 250,160" fill="currentColor" fill-opacity=".15"/>
<polyline points="70,160 160,40 250,160" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="70" y1="95" x2="250" y2="95" stroke="currentColor" stroke-dasharray="5 4" stroke-opacity=".6"/>
<text x="300" y="178">t</text><text x="22" y="22">F</text><text x="165" y="35">F peak</text>
<text x="118" y="140">area = J = Δp</text><text x="255" y="90">F avg (same area)</text></svg>
<div class="box key"><b>Impulse vs work.</b> Both come from integrating $\vec F$, but over different variables. $\int\vec F\,dt=\Delta\vec p$ (a vector) and $\int\vec F\cdot d\vec r=\Delta K$ (a scalar). Momentum is changed by force acting over <i>time</i>, kinetic energy by force acting over <i>distance</i>. The two are linked by $K=p^2/2m$.</div>
<p><b>Signs and direction.</b> Choose a positive axis first. A ball hitting a wall at $+10$ m/s and rebounding at $-6$ m/s has $\Delta v=-16$ m/s, not $-4$. Bouncing back gives more impulse than just stopping.</p>
<div class="box trap"><b>Trap:</b> The impulse-momentum theorem uses the <i>net</i> force. During a bat-ball contact, gravity is also acting but is negligible next to the thousands of newtons from the bat, which is why we usually ignore it over the short contact time.</div>`},
  {id:"l2", title:"Conservation of momentum and collisions", videos:[{title:"26.1 Momentum in Collisions (8.01SC Week 9)",url:"https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-9-collision-theory/26-1-momentum-in-collisions/",src:"MIT OCW 8.01SC",note:"Elastic vs inelastic collisions and the relative-velocity-reversal result."},{title:"Search: elastic and inelastic collisions AP Physics C",url:"https://www.youtube.com/results?search_query=elastic+inelastic+collisions+AP+Physics+C+Flipping+Physics",src:"YouTube search",note:"Search link, not a verified video."}], html:String.raw`
<p>Consider a system of particles. Internal forces come in Newton's third-law pairs: $\vec F_{12}=-\vec F_{21}$. Summing $d\vec p_i/dt=\vec F_i$ over all particles, the internal pairs cancel:</p>
$$\frac{d\vec P}{dt}=\vec F_{ext,\,net},\qquad \vec P=\sum_i m_i\vec v_i$$
<p>So if $\vec F_{ext,net}=0$, then $\vec P$ is constant: <b>conservation of momentum</b>. The system is whatever you decide to include; the art is choosing one where external forces are zero, or negligible over the time you care about.</p>
<div class="box key"><b>Component by component.</b> If the net external force is zero in only one direction, momentum is conserved in that direction only. A block sliding off a frictionless table into a cart conserves horizontal momentum (gravity is vertical) but not vertical momentum (the floor pushes up during impact).</div>
<p><b>When it applies in a collision.</b> During a brief collision the internal forces are enormous compared with external ones (gravity, friction), so $\vec P$ just before equals $\vec P$ just after. This is the "impulse approximation." It is often true even when the system is <i>not</i> isolated over longer times (example: a bullet embedding in a hanging block; momentum is conserved during the embedding, but not afterward as the block swings up).</p>
<h4>Types of collision</h4>
<table><tr><th>Type</th><th>Momentum</th><th>Kinetic energy</th></tr>
<tr><td>Elastic</td><td>conserved</td><td>conserved</td></tr>
<tr><td>Inelastic</td><td>conserved</td><td>decreases (some to heat, sound, deformation)</td></tr>
<tr><td>Perfectly inelastic</td><td>conserved</td><td>decreases the most allowed: objects move together afterward</td></tr></table>
<div class="box trap"><b>Trap:</b> "Inelastic" never means momentum is lost. Momentum is conserved in <i>every</i> collision with no external impulse. Only kinetic energy distinguishes the types. (In an explosion, KE increases while $\vec P$ is still conserved.)</div>
<h4>One dimension</h4>
<p>Masses $m_1,m_2$ with velocities $v_{1i},v_{2i}$ (signed). Momentum: $m_1v_{1i}+m_2v_{2i}=m_1v_{1f}+m_2v_{2f}$. For an <b>elastic</b> collision, energy conservation combined with momentum reduces (algebra: $m_1(v_{1i}^2-v_{1f}^2)=m_2(v_{2f}^2-v_{2i}^2)$ divided by the momentum equation) to the beautiful statement that the <b>relative velocity reverses</b>:</p>
$$v_{1i}-v_{2i}=-(v_{1f}-v_{2f})$$
<p>Solving the two linear equations gives</p>
$$v_{1f}=\frac{m_1-m_2}{m_1+m_2}v_{1i}+\frac{2m_2}{m_1+m_2}v_{2i},\qquad v_{2f}=\frac{2m_1}{m_1+m_2}v_{1i}+\frac{m_2-m_1}{m_1+m_2}v_{2i}$$
<p>Limits worth knowing: equal masses exchange velocities; a light object hitting a very heavy stationary one bounces back with nearly the same speed; a heavy object hitting a light stationary one barely slows and sends it off at nearly $2v$.</p>
<h4>Coefficient of restitution</h4>
<p>Define $e=\dfrac{v_{2f}-v_{1f}}{v_{1i}-v_{2i}}$ (speed of separation over speed of approach). $e=1$ elastic, $e=0$ perfectly inelastic, $0<e<1$ inelastic. For a ball dropped from height $h_0$ onto a rigid floor that rebounds to $h$, $e=\sqrt{h/h_0}$ because speeds scale as $\sqrt{h}$. With $e$ known, momentum plus this relation gives two linear equations for the two unknown final velocities, no energy bookkeeping required.</p>
<svg class="fig" viewBox="0 0 360 150" width="360" role="img" aria-label="Before and after sketch of a one dimensional collision: mass m1 moving right toward mass m2 at rest, then both moving after the collision">
<text x="8" y="22">before</text><rect x="40" y="40" width="50" height="40" fill="none" stroke="currentColor" stroke-width="2"/><text x="58" y="65">m₁</text>
<line x1="95" y1="60" x2="140" y2="60" stroke="currentColor" stroke-width="2"/><polygon points="140,55 150,60 140,65" fill="currentColor"/><text x="100" y="50">v₁ᵢ</text>
<rect x="220" y="40" width="70" height="40" fill="none" stroke="currentColor" stroke-width="2"/><text x="248" y="65">m₂</text><text x="300" y="50">v₂ᵢ = 0</text>
<line x1="20" y1="85" x2="340" y2="85" stroke="currentColor"/>
<text x="8" y="112">after</text><rect x="100" y="125" width="50" height="22" fill="none" stroke="currentColor" stroke-width="2"/><text x="118" y="141">m₁</text><text x="160" y="141">v₁f</text>
<rect x="220" y="125" width="70" height="22" fill="none" stroke="currentColor" stroke-width="2"/><text x="248" y="141">m₂</text><text x="300" y="141">v₂f</text></svg>
<h4>Two dimensions</h4>
<p>Momentum is a vector, so write one equation per component. Perfectly inelastic: $M\vec v_f=m_1\vec v_1+m_2\vec v_2$, which is two scalar equations. Elastic collisions in 2D additionally conserve $K$, but you need extra information (such as one final angle) since the unknowns outnumber the equations. A useful fact: for an elastic collision of two <i>equal</i> masses with one initially at rest, the final velocities are perpendicular (unless head-on). Why: $\vec v_0=\vec v_1+\vec v_2$ and $v_0^2=v_1^2+v_2^2$ together force $\vec v_1\cdot\vec v_2=0$.</p>`},
  {id:"l3", title:"Center of mass", videos:[{title:"17.3 Center of Mass of a Continuous System",url:"https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-5-momentum-and-impulse/17-3-center-of-mass-of-a-continuous-system",src:"MIT OCW 8.01SC",note:"Continuous distributions: writing dm and integrating."}], html:String.raw`
<p>The <b>center of mass</b> (cm) of a system is the mass-weighted average position:</p>
$$\vec r_{cm}=\frac{1}{M}\sum_i m_i\vec r_i\qquad\longrightarrow\qquad \vec r_{cm}=\frac1M\int\vec r\,dm$$
<p>Each coordinate is done separately: $x_{cm}=\frac1M\int x\,dm$. The integral is the continuous version of the sum, but <b>you must first write $dm$ in terms of a coordinate</b>:</p>
<table><tr><th>Shape</th><th>Density</th><th>$dm$</th></tr>
<tr><td>rod (1D)</td><td>$\lambda$ (kg/m)</td><td>$\lambda\,dx$</td></tr>
<tr><td>plate (2D)</td><td>$\sigma$ (kg/m²)</td><td>$\sigma\,dA$</td></tr>
<tr><td>solid (3D)</td><td>$\rho$ (kg/m³)</td><td>$\rho\,dV$</td></tr></table>
<p><b>Discrete example.</b> Masses 1 kg at $x=0$ and 3 kg at $x=4$ m: $x_{cm}=(0+12)/4=3$ m. The cm sits closer to the heavier mass.</p>
<h4>Rod with variable density</h4>
<p>A rod runs from $x=0$ to $x=L$ with $\lambda=\alpha x$ ($\alpha$ constant, units kg/m²). Then</p>
$$M=\int_0^L\alpha x\,dx=\frac{\alpha L^2}{2},\qquad x_{cm}=\frac1M\int_0^Lx(\alpha x)\,dx=\frac{\alpha L^3/3}{\alpha L^2/2}=\frac{2L}{3}$$
<p>It lies beyond the middle, toward the heavy end, as it should. Always run this sanity check.</p>
<svg class="fig" viewBox="0 0 340 120" width="340" role="img" aria-label="A rod from x equals 0 to x equals L drawn thicker toward the right to show density increasing, with the center of mass marked at two thirds of L">
<polygon points="40,70 300,50 300,90 40,70" fill="currentColor" fill-opacity=".2" stroke="currentColor" stroke-width="2"/>
<line x1="40" y1="100" x2="300" y2="100" stroke="currentColor"/>
<text x="36" y="116">0</text><text x="296" y="116">L</text>
<line x1="213" y1="40" x2="213" y2="100" stroke="currentColor" stroke-dasharray="4 3"/><circle cx="213" cy="70" r="4" fill="currentColor"/>
<text x="170" y="32">x_cm = 2L/3</text><text x="60" y="30">λ = αx</text></svg>
<h4>Uniform half-disk</h4>
<p>Half-disk of radius $R$, mass $M$, flat edge on the $x$-axis, symmetric about the $y$-axis, so $x_{cm}=0$. Use polar coordinates: $dm=\sigma\,r\,dr\,d\theta$ with $\sigma=M/(\tfrac12\pi R^2)$ and $y=r\sin\theta$:</p>
$$y_{cm}=\frac{\sigma}{M}\int_0^R r^2dr\int_0^\pi\sin\theta\,d\theta=\frac{\sigma}{M}\cdot\frac{R^3}{3}\cdot2=\frac{2R^3/3}{\pi R^2/2}=\frac{4R}{3\pi}\approx0.42R$$
<svg class="fig" viewBox="0 0 280 150" width="280" role="img" aria-label="A half disk of radius R with flat side down on the x axis and the center of mass marked on the vertical axis at 4R over 3 pi above the flat edge">
<path d="M40,120 A100,100 0 0 1 240,120 Z" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="2"/>
<line x1="20" y1="120" x2="260" y2="120" stroke="currentColor"/><line x1="140" y1="120" x2="140" y2="15" stroke="currentColor" stroke-dasharray="4 3"/>
<circle cx="140" cy="78" r="4" fill="currentColor"/><text x="150" y="82">cm, y = 4R/3π</text><text x="236" y="136">R</text><text x="36" y="136">-R</text></svg>
<p><b>Triangle.</b> By the same method (slice into strips of width $dy$ whose length shrinks linearly), a uniform triangle's cm is at one third of the height measured from the base: $y_{cm}=h/3$.</p>
<p><b>Shortcuts you should use.</b> (1) Symmetry: if the body has a mirror plane or axis, the cm is on it. (2) Composite bodies: treat each piece as a point mass at its own cm. (3) A hole is a negative mass: subtract its $m\,x$ contribution.</p>
<div class="box trap"><b>Trap:</b> The cm need not lie inside the object (a ring, a boomerang). And "center of mass" is not "geometric center" unless the density is uniform.</div>`},
  {id:"l4", title:"Motion of the center of mass; the cm frame", videos:[{title:"Search: center of mass motion F_ext = M a_cm and the cm frame",url:"https://www.youtube.com/results?search_query=center+of+mass+motion+external+force+M+a_cm+center+of+mass+frame",src:"YouTube search",note:"Search link, not a verified video."}], html:String.raw`
<p>Differentiate $M\vec r_{cm}=\sum m_i\vec r_i$ (constant masses):</p>
$$\vec P=\sum m_i\vec v_i=M\vec v_{cm},\qquad \vec F_{ext,net}=\frac{d\vec P}{dt}=M\vec a_{cm}$$
<p>This is the most useful sentence in the unit: <b>the center of mass moves exactly like a single particle of mass $M$ acted on by the net external force.</b> The internal forces, however violent, cannot move it. The point of application of an external force also does not matter for $\vec a_{cm}$ (it matters for rotation, Unit 5).</p>
<p><b>Examples.</b></p>
<ul>
<li>A firework shell explodes at the top of its arc. Neglecting air resistance, only gravity (external) acts, so the cm of all the fragments keeps following the original parabola. The first fragment to land does not change this: the moment a fragment hits the ground, the ground applies a new external force.</li>
<li>Two skaters push off from each other on frictionless ice. $\vec F_{ext,net}=0$ (gravity cancels the normal force), so the cm stays at rest or in uniform motion: $m_1\Delta x_1=-m_2\Delta x_2$.</li>
<li>A person on a frictionless surface cannot walk: the cm cannot move horizontally with no external horizontal force.</li>
</ul>
<svg class="fig" viewBox="0 0 340 160" width="340" role="img" aria-label="A parabolic trajectory of a shell, with an explosion at the top producing two fragments that follow separate paths while the center of mass continues along the original parabola">
<path d="M20,140 Q120,-20 220,140" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 4"/>
<line x1="10" y1="140" x2="330" y2="140" stroke="currentColor"/>
<circle cx="120" cy="60" r="4" fill="currentColor"/><text x="128" y="55">explosion</text>
<path d="M120,60 Q140,75 150,140" fill="none" stroke="currentColor" stroke-width="2"/>
<path d="M120,60 Q220,60 300,140" fill="none" stroke="currentColor" stroke-width="2"/>
<text x="230" y="30">cm still on the dashed parabola</text></svg>
<h4>The center-of-mass frame</h4>
<p>Switch to the frame moving with $\vec v_{cm}$. Velocities there are $\vec u_i=\vec v_i-\vec v_{cm}$, and by construction $\sum m_i\vec u_i=0$: <b>total momentum is zero in the cm frame</b>. If no external force acts, this frame is inertial, and collisions look simple: in 1D, two bodies approach each other with opposing momenta, and an elastic collision just reverses both velocities.</p>
<p>The kinetic energy splits cleanly (König's theorem):</p>
$$K=\tfrac12Mv_{cm}^2+K_{cm\text{-}frame}$$
<p>The first term cannot be changed by internal forces. So in a collision only $K_{cm\text{-}frame}$ can be dissipated. For two bodies, $K_{cm\text{-}frame}=\tfrac12\mu v_{rel}^2$ with reduced mass $\mu=\dfrac{m_1m_2}{m_1+m_2}$ and $v_{rel}=|v_1-v_2|$. A perfectly inelastic collision loses all of it, and no more:</p>
$$\Delta K_{lost,\,max}=\tfrac12\mu v_{rel}^2$$
<p>Check: a 2 kg cart at 6 m/s striking a stationary 4 kg cart and sticking has $\mu=4/3$ kg, lost energy $\tfrac12\cdot\tfrac43\cdot36=24$ J out of 36 J.</p>
<h4>Enrichment: variable mass (rockets)</h4>
<p>Do not just write $F=dp/dt=m\,dv/dt+v\,dm/dt$ for a system whose mass changes; this fails unless you track what the escaping mass carries away. Safe procedure: choose a system of fixed mass (rocket plus the fuel about to be expelled), compare momentum at $t$ and $t+dt$. A rocket of mass $m$ ejecting gas at speed $u$ <i>relative to the rocket</i>, with no external force, gains $m\,dv=-u\,dm$ (here $dm<0$), so</p>
$$v=v_0+u\ln\frac{m_0}{m}$$
<p>This is the rocket equation: speed gain grows only logarithmically with the mass ratio. With $m_0/m=2$ you gain $0.69\,u$.</p>`}
  ],
  examples:[
  {id:"x1", title:"Impulse from a time-varying force", problem:String.raw`<p>A force $F(t)=6t(4-t)$ N (for $0\le t\le4$ s, zero otherwise) acts along $+x$ on an 8 kg cart that is initially at rest on a frictionless track. Find the impulse, the final speed, the peak force, and the average force over the 4 s.</p>`,
   solution:String.raw`<p>$J=\int_0^4(24t-6t^2)\,dt=12t^2-2t^3\Big|_0^4=192-128=64$ N s.</p>
<p>$v=J/m=64/8=8$ m/s (the cart started at rest, so $\Delta p=mv$).</p>
<p>The peak is where $dF/dt=24-12t=0$, i.e. $t=2$ s, with $F=6(2)(2)=24$ N.</p>
<p>$F_{avg}=J/\Delta t=64/4=16$ N. This is the constant force that would give the same impulse; it is less than the peak, as it must be.</p>`},
  {id:"x2", title:"Ballistic pendulum", problem:String.raw`<p>A 0.020 kg bullet embeds itself in a 1.98 kg block hanging at rest from light strings. The block (with bullet) swings up a maximum height of 0.20 m. Find the bullet's speed and the fraction of its kinetic energy lost in the collision. Use $g=10$ m/s².</p>`,
   solution:String.raw`<p>Two stages need two different principles.</p>
<p><b>Swing (energy):</b> after the collision, mechanical energy is conserved: $\tfrac12Mv_f^2=Mgh\Rightarrow v_f=\sqrt{2(10)(0.20)}=2.0$ m/s.</p>
<p><b>Collision (momentum, very brief):</b> $m v=(m+M_b)v_f\Rightarrow 0.020\,v=2.00(2.0)\Rightarrow v=200$ m/s.</p>
<p>Kinetic energy before $=\tfrac12(0.020)(200)^2=400$ J. Just after: $\tfrac12(2.00)(2.0)^2=4$ J. Lost: $396$ J, which is $99\%$. Equivalently the surviving fraction is $m/(m+M_b)=0.010$.</p>
<p class="mut">Do not apply energy conservation across the collision: that is where almost all the energy disappears.</p>`},
  {id:"x3", title:"Perfectly inelastic collision in two dimensions", problem:String.raw`<p>At an icy intersection a 1000 kg car heading east at 20 m/s collides with a 1500 kg car heading north at 10 m/s. They lock together. Neglect friction during the collision. Find the velocity of the wreckage and the kinetic energy lost.</p>`,
   solution:String.raw`<p>Total mass 2500 kg. East: $1000(20)=2500\,v_x\Rightarrow v_x=8$ m/s. North: $1500(10)=2500\,v_y\Rightarrow v_y=6$ m/s.</p>
<p>Speed $=\sqrt{8^2+6^2}=10$ m/s at $\arctan(6/8)=36.9^\circ$ north of east.</p>
<p>$K_i=\tfrac12(1000)(400)+\tfrac12(1500)(100)=200\,000+75\,000=275\,000$ J. $K_f=\tfrac12(2500)(100)=125\,000$ J. Lost: 150 000 J (55%).</p>
<p class="mut">The momenta are perpendicular, so you cannot add 20 and 10 or use a one-dimensional equation.</p>`},
  {id:"x4", title:"Center of mass of a half-disk by integration", problem:String.raw`<p>A uniform thin half-disk of radius $R$ and mass $M$ lies in the $xy$-plane, $y\ge0$, with its straight edge along the $x$-axis. Find $y_{cm}$ using horizontal strips (not polar coordinates).</p>`,
   solution:String.raw`<p>A strip at height $y$ with thickness $dy$ has length $2\sqrt{R^2-y^2}$, so $dm=\sigma\,2\sqrt{R^2-y^2}\,dy$ with $\sigma=M/(\tfrac12\pi R^2)$.</p>
$$y_{cm}=\frac{\sigma}{M}\int_0^R2y\sqrt{R^2-y^2}\,dy$$
<p>Let $u=R^2-y^2$, $du=-2y\,dy$: $\int_0^R2y\sqrt{R^2-y^2}\,dy=\int_0^{R^2}u^{1/2}du=\tfrac23R^3$.</p>
<p>$y_{cm}=\dfrac{2R^3/3}{\pi R^2/2}=\dfrac{4R}{3\pi}\approx0.424R$, and $x_{cm}=0$ by symmetry. This matches the polar result in the lesson.</p>`}
  ],
  mcq:[
  {id:"q1", q:String.raw`<p>A 0.50 kg ball initially at rest receives a force pulse that rises linearly from 0 to a peak of 20 N in 0.25 s and then falls linearly back to 0 in another 0.25 s. The speed of the ball after the pulse is</p>`, choices:["2.5 m/s","5.0 m/s","10 m/s","20 m/s","40 m/s"], a:2,
   why:String.raw`<p>Impulse = area of the triangle $=\tfrac12(0.50\text{ s})(20\text{ N})=5.0$ N s, so $v=J/m=5.0/0.50=10$ m/s. Using the peak force times the whole duration ($10$ N s, giving 20 m/s) overcounts, because the force is at its peak only instantaneously.</p>`},
  {id:"q2", q:String.raw`<p>A ball falls freely toward the Earth. Which statement about momentum is correct? (Ignore air resistance and the Sun.)</p>`, choices:["The ball's momentum is conserved because its mass is constant","The momentum of the ball-Earth system is conserved, but the ball's momentum alone is not","Neither the system's nor the ball's momentum is conserved, since gravity acts","The Earth's momentum alone is conserved because its mass is so large","Both the ball's momentum and the Earth's are conserved because energy is conserved"], a:1,
   why:String.raw`<p>Gravity on the ball is external to the ball alone, so its momentum changes. For ball plus Earth, gravity is an internal Newton's-third-law pair, so the total $\vec P$ is constant: the Earth gains the same momentum the ball gains (in the opposite direction), with a negligible velocity change because its mass is enormous.</p>`},
  {id:"q3", q:String.raw`<p>A 3.0 kg block moving at 4.0 m/s collides elastically head-on with a stationary 1.0 kg block. The speed of the 1.0 kg block just after the collision is</p>`, choices:["2.0 m/s","3.0 m/s","4.0 m/s","6.0 m/s","8.0 m/s"], a:3,
   why:String.raw`<p>$v_{2f}=\dfrac{2m_1}{m_1+m_2}v_{1i}=\dfrac{6}{4}(4)=6.0$ m/s. Check: the 3 kg block continues at $+2$ m/s, and $12=3(2)+1(6)$; relative speed after $=4$ m/s equals relative speed before. The tempting 8 m/s (speed $2v_{1i}$) holds only when the incoming object is much heavier.</p>`},
  {id:"q4", q:String.raw`<p>A mass $m$ moving at speed $v$ sticks to a stationary mass $3m$. What fraction of the initial kinetic energy is lost?</p>`, choices:["1/4","1/2","2/3","3/4","7/8"], a:3,
   why:String.raw`<p>$mv=4mv_f\Rightarrow v_f=v/4$. $K_f=\tfrac12(4m)(v/4)^2=\tfrac18mv^2$, compared to $K_i=\tfrac12mv^2$. So $K_f/K_i=1/4$ and the lost fraction is $3/4$. The tempting 1/4 is the fraction that <i>remains</i>. In general the fraction remaining is $m_1/(m_1+m_2)$ for a target at rest.</p>`},
  {id:"q5", q:String.raw`<p>Point masses of 1 kg, 2 kg, and 3 kg lie on the $x$-axis at $x=0$, $3$ m, and $6$ m, respectively. The center of mass is at</p>`, choices:["2 m","3 m","4 m","4.5 m","5 m"], a:2,
   why:String.raw`<p>$x_{cm}=(1\cdot0+2\cdot3+3\cdot6)/6=24/6=4$ m. The unweighted average of positions (3 m) ignores the masses.</p>`},
  {id:"q6", q:String.raw`<p>A thin rod extends from $x=0$ to $x=L$ with linear density $\lambda=\alpha(L-x)$, where $\alpha$ is a positive constant. The center of mass is located at $x=$</p>`, choices:["$L/4$","$L/3$","$L/2$","$2L/3$","$3L/4$"], a:1,
   why:String.raw`<p>$M=\alpha\int_0^L(L-x)dx=\alpha L^2/2$; $\int x\lambda\,dx=\alpha(L^3/2-L^3/3)=\alpha L^3/6$. So $x_{cm}=L/3$. This is also the mirror image of the $\lambda=\alpha x$ rod (cm at $2L/3$), and it is below $L/2$ because the density is largest at $x=0$.</p>`},
  {id:"q7", q:String.raw`<p>A shell moving in a parabolic trajectory explodes in mid-air into several fragments. Ignoring air resistance, until the first fragment hits the ground, the center of mass of all the fragments</p>`, choices:["continues along the same parabola the unexploded shell would have followed","moves in a straight line at constant velocity, since the explosion forces are internal","remains at rest at the point of the explosion","follows a new parabola with greater range because the explosion adds energy","moves along the path of the heaviest fragment"], a:0,
   why:String.raw`<p>The explosion forces are internal and cannot change $\vec P$. The only external force is gravity, so $M\vec a_{cm}=M\vec g$ still holds. The straight-line option wrongly ignores gravity; the extra explosion energy changes the individual fragment paths, not the cm path.</p>`},
  {id:"q8", q:String.raw`<p>Two skaters stand at rest on frictionless ice. They push apart. The 60 kg skater moves away at 2.0 m/s. The speed of the 40 kg skater is</p>`, choices:["1.3 m/s","2.0 m/s","3.0 m/s","4.0 m/s","5.0 m/s"], a:2,
   why:String.raw`<p>Total momentum is zero: $60(2.0)=40\,v\Rightarrow v=3.0$ m/s in the opposite direction. The lighter skater moves faster. Inverting the mass ratio gives the tempting 1.3 m/s.</p>`},
  {id:"q9", q:String.raw`<p>A 0.20 kg ball strikes a wall horizontally at 10 m/s and rebounds along the same line at 6.0 m/s. The magnitude of the impulse the wall exerts on the ball is</p>`, choices:["0.8 N s","1.2 N s","2.0 N s","3.2 N s","4.0 N s"], a:3,
   why:String.raw`<p>Taking the initial direction as positive, $\Delta p=0.20(-6.0)-0.20(10)=-3.2$ kg m/s, so $|J|=3.2$ N s. A common error is $0.20(10-6)=0.8$ N s, which forgets the reversal of direction.</p>`},
  {id:"q10", q:String.raw`<p>A 2.0 kg puck moving in the $+x$ direction at 3.0 m/s collides with a 1.0 kg puck moving in the $+y$ direction at 6.0 m/s. They stick together. The velocity of the combined pucks is</p>`, choices:["2.0 m/s at $45^\\circ$ above the $+x$ axis","2.8 m/s at $45^\\circ$ above the $+x$ axis","3.0 m/s at $45^\\circ$ above the $+x$ axis","4.0 m/s at $45^\\circ$ above the $+x$ axis","2.8 m/s at $27^\\circ$ above the $+x$ axis"], a:1,
   why:String.raw`<p>$p_x=2(3)=6$, $p_y=1(6)=6$ kg m/s; $M=3$ kg so $\vec v=(2,2)$ m/s, speed $2\sqrt2\approx2.8$ m/s at $45^\circ$. Adding the momentum magnitudes (12) and dividing by $M$ gives 4.0 m/s, which wrongly treats perpendicular vectors as parallel.</p>`},
  {id:"q11", q:String.raw`<p>A ball is dropped from 1.0 m onto a hard floor and rebounds to a height of 0.64 m. The coefficient of restitution for the ball-floor collision is</p>`, choices:["0.64","0.80","0.90","0.36","0.50"], a:1,
   why:String.raw`<p>Speed before impact is $\sqrt{2gh_0}$ and after is $\sqrt{2gh}$, so $e=\sqrt{h/h_0}=\sqrt{0.64}=0.80$. The height ratio itself (0.64) is $e^2$, which is the fraction of kinetic energy retained.</p>`}
  ],
  frq:[
  {id:"f1", type:"Mathematical routines", title:"Colliding carts and energy loss",
   prompt:String.raw`<p>Two carts move on a frictionless horizontal track. Cart A has mass 2.0 kg and moves in the $+x$ direction at 6.0 m/s. Cart B has mass 4.0 kg and is initially at rest.</p>
<svg class="fig" viewBox="0 0 340 90" width="340" role="img" aria-label="Cart A of mass 2 kilograms moving right at 6 meters per second toward cart B of mass 4 kilograms at rest on a track">
<rect x="40" y="25" width="50" height="30" fill="none" stroke="currentColor" stroke-width="2"/><text x="58" y="45">2 kg</text>
<line x1="95" y1="40" x2="140" y2="40" stroke="currentColor" stroke-width="2"/><polygon points="140,35 150,40 140,45" fill="currentColor"/><text x="98" y="30">6.0 m/s</text>
<rect x="210" y="25" width="70" height="30" fill="none" stroke="currentColor" stroke-width="2"/><text x="235" y="45">4 kg</text>
<line x1="20" y1="60" x2="320" y2="60" stroke="currentColor"/><circle cx="55" cy="66" r="5" fill="none" stroke="currentColor"/><circle cx="80" cy="66" r="5" fill="none" stroke="currentColor"/><circle cx="225" cy="66" r="5" fill="none" stroke="currentColor"/><circle cx="265" cy="66" r="5" fill="none" stroke="currentColor"/></svg>
<p>(a) The carts collide and stick together. Calculate their common velocity and the kinetic energy lost.<br>
(b) In a second trial the collision is perfectly elastic. Calculate the velocity of each cart after the collision.<br>
(c) In a third trial the coefficient of restitution is $e=0.50$. Calculate the final velocity of each cart and the kinetic energy lost.<br>
(d) Momentum is conserved in all three trials but kinetic energy is not. Explain why the same internal forces can leave the total momentum unchanged while changing the kinetic energy.<br>
(e) In the elastic trial the contact lasts 0.020 s. Determine the magnitude of the impulse on cart B and the average force on it.</p>`,
   pts:[
    {p:1,d:"(a) Momentum conservation $2(6)=6v$, $v=2.0$ m/s in $+x$"},
    {p:1,d:"(a) $K_i=36$ J, $K_f=12$ J, lost $=24$ J"},
    {p:1,d:"(b) Uses momentum and either energy conservation or reversal of relative velocity (correct equations)"},
    {p:1,d:"(b) $v_A=-2.0$ m/s (reverses), $v_B=+4.0$ m/s"},
    {p:1,d:"(c) Uses $v_B-v_A=e(6.0)=3.0$ m/s together with momentum conservation"},
    {p:1,d:"(c) $v_A=0$, $v_B=3.0$ m/s, and energy lost $=36-18=18$ J"},
    {p:1,d:"(d) States that internal forces are equal and opposite (Newton's third law) so their impulses cancel in the total momentum"},
    {p:1,d:"(d) States that the two forces act through different displacements, so net work done by them can be nonzero (deformation, heat, sound)"},
    {p:1,d:"(e) $J_B=\\Delta p_B=4.0(4.0)=16$ N s"},
    {p:1,d:"(e) $F_{avg}=J/\\Delta t=16/0.020=800$ N"}],
   solution:String.raw`<p>(a) $2.0(6.0)=(2.0+4.0)v\Rightarrow v=2.0$ m/s. $K_i=\tfrac12(2)(36)=36$ J; $K_f=\tfrac12(6)(4)=12$ J. Lost 24 J.</p>
<p>(b) $v_A=\dfrac{m_A-m_B}{m_A+m_B}v=\dfrac{-2}{6}(6)=-2.0$ m/s, $v_B=\dfrac{2m_A}{m_A+m_B}v=\dfrac46(6)=4.0$ m/s. Check: $12=2(-2)+4(4)=12$; $K=\tfrac12(2)(4)+\tfrac12(4)(16)=36$ J.</p>
<p>(c) $v_B-v_A=0.50(6.0)=3.0$ and $12=2v_A+4v_B$. Substituting $v_A=v_B-3$: $12=6v_B-6\Rightarrow v_B=3.0$ m/s, $v_A=0$. $K_f=\tfrac12(4)(9)=18$ J, lost 18 J.</p>
<p>(d) The force A exerts on B and the force B exerts on A are equal and opposite at every instant, so their impulses cancel and $\Delta\vec P_{total}=0$. Work is force times displacement of the point of application, and the two contact points need not move equally while the carts are deformed or squeezed together. The net work of the internal pair can therefore be nonzero, converting kinetic energy to thermal energy and deformation (or back, in an explosion).</p>
<p>(e) $J_B=\Delta p_B=4.0(4.0-0)=16$ N s. $F_{avg}=16/0.020=800$ N.</p>
<p class="mut">Check against the cm frame: $\mu=4/3$ kg, $\tfrac12\mu v_{rel}^2=24$ J is the maximum loss, and the three trials lose 24, 0 and 18 J, all within range.</p>`},
  {id:"f2", type:"Mathematical routines", title:"Center of mass of a nonuniform rod",
   prompt:String.raw`<p>A thin rod of length $L$ lies along the $x$-axis from $x=0$ to $x=L$. Its linear mass density is $\lambda(x)=\alpha x^2$, where $\alpha$ is a positive constant.</p>
<p>(a) Determine the SI units of $\alpha$, and derive an expression for the total mass $M$ of the rod in terms of $\alpha$ and $L$.<br>
(b) Derive an expression for the $x$-coordinate of the center of mass, in terms of $L$ only.<br>
(c) A point mass of the same mass $M$ is now attached to the rod's right end at $x=L$. Determine the $x$-coordinate of the center of mass of the combined system.<br>
(d) Explain without calculation why the rod's center of mass lies to the right of $x=L/2$.<br>
(e) The original rod rests on frictionless ice. A constant horizontal force of magnitude $F$, perpendicular to the rod, is applied at the end $x=L$. Determine the acceleration of the rod's center of mass. Would this change if the same force were applied at $x=0$? Justify.</p>`,
   pts:[
    {p:1,d:"(a) Units of $\\alpha$ are kg/m$^3$ (since $\\lambda$ is kg/m and $x^2$ is m$^2$)"},
    {p:1,d:"(a) $M=\\int_0^L\\alpha x^2dx=\\alpha L^3/3$"},
    {p:1,d:"(b) Sets up $x_{cm}=\\frac1M\\int x\\,dm$ with $dm=\\alpha x^2dx$"},
    {p:1,d:"(b) Evaluates $\\int_0^L\\alpha x^3dx=\\alpha L^4/4$"},
    {p:1,d:"(b) $x_{cm}=3L/4$ (the $\\alpha$ cancels)"},
    {p:1,d:"(c) Weighted average of rod at $3L/4$ and point mass at $L$"},
    {p:1,d:"(c) $x_{cm}=7L/8$"},
    {p:1,d:"(d) States that the density increases with $x$, so more of the mass lies in the right half and the weighted average is pulled right"},
    {p:1,d:"(e) $a_{cm}=F/M=3F/(\\alpha L^3)$ in the direction of the force"},
    {p:1,d:"(e) No change: $\\vec F_{ext}=M\\vec a_{cm}$ does not depend on where the force is applied (only rotation does)"}],
   solution:String.raw`<p>(a) $\alpha=\lambda/x^2$ has units kg m$^{-1}$/m$^2$ = kg/m$^3$. $M=\int_0^L\alpha x^2\,dx=\dfrac{\alpha L^3}{3}$.</p>
<p>(b) $x_{cm}=\dfrac1M\int_0^Lx(\alpha x^2)\,dx=\dfrac{\alpha L^4/4}{\alpha L^3/3}=\dfrac{3L}{4}$.</p>
<p>(c) $x_{cm}=\dfrac{M(3L/4)+M(L)}{2M}=\dfrac{7L}{8}$.</p>
<p>(d) The density grows with $x$, so a greater share of the mass sits in the right half; the center of mass is the mass-weighted average position and is pulled toward the heavier end. For uniform density it would be at $L/2$.</p>
<p>(e) $a_{cm}=F/M=\dfrac{3F}{\alpha L^3}$ in the direction of $\vec F$. Applying the force at $x=0$ gives the same $\vec a_{cm}$, because $\vec F_{ext,net}=M\vec a_{cm}$ involves only the net external force, not where it acts. (The rotation of the rod about its cm would differ.)</p>`}
  ]
});
