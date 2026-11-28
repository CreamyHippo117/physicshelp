PH.unit({
  id:"m4", course:"mech", order:60, hours:9,
  title:"Mechanics 4: Linear Momentum and Systems of Particles",
  blurb:"Newton's second law in its original form, $\\vec F=d\\vec p/dt$, leads to impulse, conservation of momentum, collisions, and the center of mass, the single point that obeys $\\vec F_{ext}=M\\vec a_{cm}$ for any system.",
  needs:["m1","m2","m3"],
  goals:[
    "Compute impulse as $\\int\\vec F\\,dt$ (area under an $F$-$t$ graph) and relate it to $\\Delta\\vec p$",
    "Decide when momentum is conserved for a system, and apply it component by component",
    "Classify collisions (elastic, inelastic, perfectly inelastic), use the coefficient of restitution, and compute kinetic energy lost",
    "Locate the center of mass of discrete and continuous bodies using $\\int x\\,dm$",
    "Use $\\vec F_{ext}=M\\vec a_{cm}$ to describe the motion of a system, including after an internal explosion",
    "Use the center-of-mass frame to see why only part of the kinetic energy can be lost in a collision",
    "Solve two-stage problems (collision then sliding, swinging, or spring compression) and bouncing-ball series"
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
<p>Define $e=\dfrac{v_{2f}-v_{1f}}{v_{1i}-v_{2i}}$ (speed of separation over speed of approach). $e=1$ elastic, $e=0$ perfectly inelastic, $0&lt;e<1$ inelastic. For a ball dropped from height $h_0$ onto a rigid floor that rebounds to $h$, $e=\sqrt{h/h_0}$ because speeds scale as $\sqrt{h}$. With $e$ known, momentum plus this relation gives two linear equations for the two unknown final velocities, no energy bookkeeping required.</p>
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
<p>This is the rocket equation: speed gain grows only logarithmically with the mass ratio. With $m_0/m=2$ you gain $0.69\,u$.</p>`},
  {id:"l5", title:"Collisions with springs, two-stage problems and bouncing balls", videos:[{title:"Search: collision with a spring maximum compression common velocity",url:"https://www.youtube.com/results?search_query=collision+with+spring+maximum+compression+common+velocity+AP+Physics+C",src:"YouTube search",note:"Search link, not a verified video."}], html:String.raw`
<p>Most real collision problems have <b>two stages</b> that need two different principles. Learn to cut the problem in time.</p>
<div class="box key"><b>Stage rule.</b> During the brief collision, internal forces dominate, so use <b>momentum</b> conservation (energy is usually <i>not</i> conserved). After the collision, forces such as friction, gravity on a swinging block, or a spring act over a finite distance, so use <b>energy</b> (or Newton's second law with the work done by friction). Never use energy across the sticking collision itself, and never use momentum across the slide or the swing.</div>
<h4>Collision then friction stop</h4>
<p>A bullet embeds in a block resting on a rough table. Stage 1: $mv=(m+M)V$. Stage 2: the block-plus-bullet decelerates with $a=\mu_k g$, so $V^2=2\mu_kgd$ (work-energy: $\tfrac12(m+M)V^2=\mu_k(m+M)g\,d$). The sliding mass cancels, so you only need $\mu_k$ and $d$ to get $V$, and then $v$.</p>
<h4>Collision with a spring: the maximum compression</h4>
<p>Let block 1 (mass $m_1$, speed $v$) strike block 2 (mass $m_2$, at rest) that carries a light spring on its front face. As the spring compresses, block 1 slows down and block 2 speeds up. The compression keeps growing as long as block 1 is still moving faster than block 2, that is, as long as the blocks are still approaching. It stops growing at the instant their velocities are <b>equal</b>. So:</p>
<svg class="fig" viewBox="0 0 360 150" width="360" role="img" aria-label="Three snapshots of a block hitting a spring-fronted block: before contact, at maximum compression with both blocks moving at the same speed V, and after separation">
<text x="6" y="20">before</text><rect x="60" y="28" width="46" height="26" fill="none" stroke="currentColor" stroke-width="2"/><text x="72" y="46">m₁</text><polygon points="112,41 122,36 122,46" fill="currentColor"/><line x1="108" y1="41" x2="120" y2="41" stroke="currentColor"/><text x="128" y="34">v</text>
<polyline points="170,41 176,33 184,49 192,33 200,49 208,41 214,41" fill="none" stroke="currentColor"/><rect x="214" y="28" width="60" height="26" fill="none" stroke="currentColor" stroke-width="2"/><text x="236" y="46">m₂</text>
<text x="6" y="82">max</text><rect x="100" y="70" width="46" height="26" fill="none" stroke="currentColor" stroke-width="2"/><text x="112" y="88">m₁</text>
<polyline points="146,83 150,77 156,89 162,77 168,89 172,83 176,83" fill="none" stroke="currentColor"/><rect x="176" y="70" width="60" height="26" fill="none" stroke="currentColor" stroke-width="2"/><text x="198" y="88">m₂</text><text x="250" y="88">both at V</text>
<text x="6" y="124">after</text><rect x="60" y="112" width="46" height="26" fill="none" stroke="currentColor" stroke-width="2"/><text x="72" y="130">m₁</text><text x="112" y="130">v₁f</text><rect x="214" y="112" width="60" height="26" fill="none" stroke="currentColor" stroke-width="2"/><text x="236" y="130">m₂</text><text x="280" y="130">v₂f</text></svg>
<p>At maximum compression $V=\dfrac{m_1v}{m_1+m_2}$ (momentum, valid at every instant since no external horizontal force), and the energy that is not in kinetic form is in the spring:</p>
$$\tfrac12kx_{max}^2=\tfrac12m_1v^2-\tfrac12(m_1+m_2)V^2=\tfrac12\mu v^2,\qquad\mu=\frac{m_1m_2}{m_1+m_2}$$
<p>This is exactly the $\tfrac12\mu v_{rel}^2$ from the cm-frame discussion: the spring stores the cm-frame kinetic energy at the instant everything is momentarily at rest in that frame. If the spring is ideal (no dissipation), it gives all of that energy back, and the blocks separate with the elastic-collision velocities. So a spring bumper makes an <i>elastic</i> collision that you can watch in slow motion.</p>
<div class="box trap"><b>Trap:</b> Do not set the spring energy equal to the whole initial kinetic energy. At maximum compression the blocks are still moving (at $V$), so they still hold kinetic energy $\tfrac12(m_1+m_2)V^2$. All of the energy goes into the spring only if $m_2\to\infty$ (a wall).</div>
<h4>Impulse during a collision when gravity matters</h4>
<p>The impulse-momentum theorem uses the <i>net</i> force. A ball hits the floor and leaves in a time $\Delta t$. The average net force is $\Delta p/\Delta t$, and the net force is $N_{avg}-mg$ (taking up as positive). So $N_{avg}=\dfrac{\Delta p}{\Delta t}+mg$. For a short, hard contact the $mg$ term is negligible; for a long, soft one (landing on a mattress) it may not be. Always draw the free-body diagram first.</p>
<h4>The bouncing ball and a geometric series</h4>
<p>A ball dropped from height $h_0$ hits the floor at speed $v_0=\sqrt{2gh_0}$ and leaves at $ev_0$. After the $n$th bounce its speed is $e^nv_0$ and the height reached is</p>
$$h_n=\frac{(e^nv_0)^2}{2g}=e^{2n}h_0$$
<p>Time between the $n$th and $(n+1)$th impacts is $2e^nv_0/g$ (up and down). The total time before it stops is a geometric series:</p>
$$t_{tot}=\frac{v_0}{g}+\frac{2v_0}{g}\left(e+e^2+\cdots\right)=\frac{v_0}{g}\,\frac{1+e}{1-e}$$
<p>and the total distance traveled is $h_0+2h_0(e^2+e^4+\cdots)=h_0\dfrac{1+e^2}{1-e^2}$. The ball makes infinitely many bounces in a finite time (a Zeno-type series that converges), after which it rests on the floor. Because the energy kept per bounce is $e^2$, a ball with $e=0.8$ keeps $64\%$ of its energy each time.</p>`},
  {id:"l6", extra:true, title:"Elastic collisions: energy transfer and two dimensions", videos:[{title:"Lecture 16: Collisions - Elastic and Inelastic - Center of Mass Frame of Reference (Walter Lewin, 8.01 Fall 1999)",url:"https://videolectures.net/mit801f99_lewin_lec16/",src:"Walter Lewin lectures (MIT 8.01)",note:"Elastic and inelastic collisions and the cm frame; third-party host of the MIT lecture."}], html:String.raw`
<h4>How much kinetic energy is handed over?</h4>
<p>Mass $m_1$ moving at $v$ hits a stationary mass $m_2$ head-on and elastically. From $v_{2f}=\dfrac{2m_1}{m_1+m_2}v$, the energy given to $m_2$ as a fraction of the original is</p>
$$\frac{\tfrac12m_2v_{2f}^2}{\tfrac12m_1v^2}=\frac{4m_1m_2}{(m_1+m_2)^2}$$
<p>This is symmetric in the masses and equals 1 only when $m_1=m_2$ (check: $4m^2/4m^2$). It is small when the masses are very unequal, either way: a ping-pong ball bouncing off a bowling ball gives the bowling ball almost nothing, and so does a bowling ball hitting a ping-pong ball (it passes through nearly unchanged at about twice its own speed, but the tiny ball carries little energy). With $m_2=3m_1$ the fraction is $12/16=75\%$.</p>
<p><b>Neutron moderation.</b> A nuclear reactor slows fast neutrons by letting them collide with light nuclei. Hydrogen (nearly equal mass) can take essentially all the energy in a head-on collision; carbon-12 takes at most $4(12)/13^2=28\%$ per head-on collision, so the energy left after a head-on hit is $(11/13)^2=72\%$ of what it was. Light nuclei are the efficient moderators.</p>
<div class="box key"><b>Momentum versus energy shortcut.</b> Since $K=p^2/2m$, two bodies with <i>equal</i> momentum have kinetic energies in the inverse ratio of their masses: the lighter one has more energy. A 4 kg block and a 1 kg block with the same momentum have energies in the ratio $1:4$. Conversely, equal kinetic energy means the heavier body has more momentum ($p=\sqrt{2mK}$).</div>
<h4>Elastic collisions in two dimensions</h4>
<p>Two momentum components plus one energy equation give three equations; the unknowns are $v_{1f},v_{2f}$ and two angles, so you must be told one more thing (usually one angle or one speed). The routine: write $p_x$, $p_y$ and $K$, use the given information to eliminate, and solve. For equal masses with one at rest, $\vec v_0=\vec v_1+\vec v_2$ with equal $v^2$ sums, so the paths are perpendicular and $v_1=v_0\cos\theta$, $v_2=v_0\sin\theta$ where $\theta$ is the deflection of the incoming body. For unequal masses the angle between the final velocities is not $90^\circ$ (a light body can bounce straight back off a heavy one, but a heavy incoming body can never be deflected by $90^\circ$ or more). See the worked example.</p>`},
  {id:"l7", extra:true, title:"Variable mass: falling sand, conveyor belts and chains", videos:[{title:"Search: variable mass conveyor belt sand F = v dm/dt",url:"https://www.youtube.com/results?search_query=variable+mass+problem+sand+falling+on+conveyor+belt+force+v+dm%2Fdt+physics",src:"YouTube search",note:"Search link, not a verified video."}], html:String.raw`
<p>When mass enters or leaves the system, the careless application of $\vec F=d(m\vec v)/dt$ goes wrong. The safe method (already used for the rocket in the previous lesson): <b>pick a system of fixed mass</b> that contains everything that is about to join, write its momentum at $t$ and at $t+dt$, and equate the change to $F_{ext}\,dt$.</p>
<h4>Sand falling on a moving belt</h4>
<p>Sand drops vertically onto a belt that moves at constant speed $v$, at a rate $dm/dt$. In time $dt$ a mass $dm$ goes from zero horizontal velocity to $v$, so the horizontal momentum of the system changes by $dm\,v$. The horizontal external force on the sand-plus-belt system (supplied by the belt's drive) must be</p>
$$F=v\frac{dm}{dt}$$
<p>The motor's power is $Fv=v^2\,dm/dt$, but the kinetic energy of the sand grows only at $\tfrac12v^2\,dm/dt$. <b>Exactly half</b> of the power is dissipated as heat where the sand slips on the belt until it matches the belt speed: this is a perfectly inelastic collision in disguise, and it does not depend on the friction coefficient.</p>
<h4>A chain falling onto a table</h4>
<p>A uniform chain of mass $M$ and length $L$ ($\lambda=M/L$) hangs vertically with its lower end just touching a table, and is released. When a length $x$ has landed, the free part is still in free fall, so all of it moves at $v^2=2gx$. The table must (i) support the pile, weight $\lambda xg$, and (ii) stop the links as they arrive, which takes a force equal to the momentum arriving per second, $v\,dm/dt=\lambda v\cdot v=\lambda v^2=2\lambda gx$. So</p>
$$N=\lambda gx+2\lambda gx=3\lambda gx=\frac{3Mgx}{L}$$
<p>When the last link lands the table feels $3Mg$, three times the weight of the entire chain, and the reading of a scale under it rises linearly with $x$.</p>
<div class="box trap"><b>Trap:</b> "$F=m\,dv/dt+v\,dm/dt$" counts the momentum of added mass correctly only if the added mass starts at rest <i>in the frame where you write $p$</i>. For the rocket, the ejected gas carries momentum of its own, so there the result is $m\,dv/dt=-u\,dm/dt$ (with $u$ measured relative to the rocket).</div>`},
  {id:"l8", extra:true, title:"Composite bodies, 2D centers of mass and solids by integration", videos:[{title:"17.4 Center of Mass of a System of Extended Objects",url:"https://www.ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/pages/week-5-momentum-and-impulse/17-4-center-of-mass-of-a-system-of-extended-objects",src:"MIT OCW 8.01SC",note:"Using the cm of each part to find the cm of a composite."}], html:String.raw`
<h4>Two dimensions and the hole trick</h4>
<p>In the plane, $\vec r_{cm}=\dfrac1M\sum m_i\vec r_i$ applies component by component: $x_{cm}=\sum m_ix_i/M$, $y_{cm}=\sum m_iy_i/M$. For a <b>composite plate</b>, replace each piece by a point mass (its mass at its own cm). For a plate with a <b>hole</b>, use "whole minus hole": the hole is a piece with <i>negative</i> mass, equal to $-\sigma A_{hole}$, located at the hole's center:</p>
$$x_{cm}=\frac{m_{whole}x_{whole}-m_{hole}x_{hole}}{m_{whole}-m_{hole}}$$
<p>(Here $m_{whole}$ is the mass the full plate <i>would</i> have, and the denominator is the mass that is actually left.) Check that the cm moves <i>away</i> from the hole.</p>
<h4>Solids by integration</h4>
<p>The method is always: slice the body into thin pieces whose own cm you know (usually thin disks or strips), write $dm=\rho\,dV$ for each slice, and integrate $\int z\,dm$.</p>
<p><b>Cone</b> (uniform, height $H$, base radius $R$, measure $y$ from the apex). A disk at $y$ has radius $Ry/H$, so $dm=\rho\pi R^2y^2/H^2\,dy$:</p>
$$y_{cm}=\frac{\int_0^Hy\cdot y^2\,dy}{\int_0^Hy^2\,dy}=\frac{H^4/4}{H^3/3}=\frac{3H}{4}$$
<p>i.e. $H/4$ above the base. <b>Solid hemisphere</b> (flat face down, height $z$): a disk at $z$ has radius$^2$ $R^2-z^2$, so $dm=\rho\pi(R^2-z^2)\,dz$, $M=\tfrac23\rho\pi R^3$, and</p>
$$z_{cm}=\frac{\rho\pi\int_0^Rz(R^2-z^2)\,dz}{\tfrac23\rho\pi R^3}=\frac{R^4/4}{2R^3/3}=\frac{3R}{8}$$
<p><b>Triangle</b> (base $b$, height $h$, $y$ from the base): the strip at height $y$ has width $b(1-y/h)$, so $A=\tfrac12bh$ and $\int y\,b(1-y/h)\,dy=bh^2/6$, giving $y_{cm}=h/3$. This fills in the result quoted in the center-of-mass lesson.</p>
<div class="box key">Pattern to remember: for a pyramid or cone the cm is $1/4$ of the height from the base; for a triangle $1/3$; for a semicircular disk $4R/3\pi$; for a solid hemisphere $3R/8$; for a hemispherical shell $R/2$.</div>`},
  {id:"l9", extra:true, title:"Two-body motion: relative coordinate and reduced mass", videos:[{title:"Search: two body problem reduced mass center of mass frame",url:"https://www.youtube.com/results?search_query=two+body+problem+reduced+mass+relative+coordinate+classical+mechanics+lecture",src:"YouTube search",note:"Search link, not a verified video."}], html:String.raw`
<p>Two bodies interact only with each other (no external force). Then $\vec R_{cm}$ moves uniformly, and everything interesting is in the <b>relative coordinate</b> $\vec r=\vec r_1-\vec r_2$. Newton's law for each body is $m_1\ddot{\vec r}_1=\vec F$ and $m_2\ddot{\vec r}_2=-\vec F$ (where $\vec F$ is the force on body 1). Divide each by its mass and subtract:</p>
$$\ddot{\vec r}=\vec F\left(\frac1{m_1}+\frac1{m_2}\right)\quad\Longrightarrow\quad \mu\,\ddot{\vec r}=\vec F(\vec r),\qquad \mu=\frac{m_1m_2}{m_1+m_2}$$
<p>The two-body problem therefore reduces to a <i>one</i>-body problem for a particle of mass $\mu$ (smaller than either mass) at position $\vec r$, subject to the force law. The positions of the individual bodies follow from $\vec r_1=\vec R_{cm}+\dfrac{m_2}{M}\vec r$ and $\vec r_2=\vec R_{cm}-\dfrac{m_1}{M}\vec r$ ($M=m_1+m_2$): the <b>heavier body stays closer to the cm</b>.</p>
<h4>Two blocks joined by a spring</h4>
<p>For a spring with force $F=-k(r-r_0)$ the relative coordinate obeys $\mu\ddot s=-ks$ ($s=r-r_0$), simple harmonic motion with $\omega=\sqrt{k/\mu}$. If an external force $F$ pulls on the pair, the cm accelerates at $F/M$ <i>regardless</i> of the oscillation, and the blocks oscillate about the uniformly accelerating cm.</p>
<h4>Binary orbits</h4>
<p>For gravity, $\mu\ddot{\vec r}=-\dfrac{Gm_1m_2}{r^2}\hat r$. Dividing by $\mu$ gives $\ddot{\vec r}=-\dfrac{G(m_1+m_2)}{r^2}\hat r$, the equation of a test mass orbiting a central mass $m_1+m_2$. For a circular orbit at separation $r$,</p>
$$T^2=\frac{4\pi^2r^3}{G(m_1+m_2)}$$
<p>Both stars circle the common cm with the <i>same</i> period; the radii are $r_1=\dfrac{m_2}{M}r$ and $r_2=\dfrac{m_1}{M}r$, so the lighter star moves on the bigger circle and faster. In a one-sun-and-planet system $m_2\ll m_1$ recovers the familiar $T^2=4\pi^2r^3/(GM_{sun})$ and the sun's wobble is tiny.</p>
<h4>Person on a boat</h4>
<p>With no horizontal external force (still water, negligible drag), the cm of person-plus-boat does not move horizontally. If the person walks a distance $d$ relative to the boat, the boat moves backward by $\dfrac{m_{person}}{m_{person}+M_{boat}}d$, and the person moves forward relative to the water by $\dfrac{M_{boat}}{m_{person}+M_{boat}}d$.</p>`}
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
<p>$y_{cm}=\dfrac{2R^3/3}{\pi R^2/2}=\dfrac{4R}{3\pi}\approx0.424R$, and $x_{cm}=0$ by symmetry. This matches the polar result in the lesson.</p>`},
  {id:"x5", title:"Block collision with a spring bumper", problem:String.raw`<p>A 2.0 kg block slides at 6.0 m/s on a frictionless table toward a 4.0 kg block at rest. The 4.0 kg block carries a light spring ($k=1200$ N/m) on its front face. Find (a) the common speed at maximum compression, (b) the maximum compression, (c) the velocities after the blocks separate.</p>`,
   solution:String.raw`<p>(a) Momentum: $2.0(6.0)=6.0\,V\Rightarrow V=2.0$ m/s. At maximum compression the relative velocity is zero.</p>
<p>(b) Energy: $\tfrac12(2)(36)=\tfrac12(6)(2.0)^2+\tfrac12kx^2$, so $36=12+600x^2$, $x^2=0.040$, $x=0.20$ m. (Check: $\tfrac12\mu v^2$ with $\mu=4/3$ kg gives 24 J, and $\tfrac12(1200)(0.2)^2=24$ J.)</p>
<p>(c) The spring is ideal so the collision is elastic: $v_1=\dfrac{2-4}{6}(6)=-2.0$ m/s, $v_2=\dfrac{2(2)}{6}(6)=+4.0$ m/s. Momentum check: $12=2(-2)+4(4)=12$.</p>
<p class="mut">The 24 J was stored for an instant, then returned. If the spring were replaced by putty, 24 J would be lost.</p>`},
  {id:"x6", title:"Bouncing ball: geometric series", problem:String.raw`<p>A ball is dropped from $h_0=2.0$ m onto a hard floor with coefficient of restitution $e=0.80$ ($g=10$ m/s²). Find (a) the speed just before the first impact and just after, (b) the height after the second bounce, (c) the total time until it stops bouncing, (d) the total distance traveled.</p>`,
   solution:String.raw`<p>(a) $v_0=\sqrt{2gh_0}=\sqrt{40}=6.32$ m/s; rebound speed $ev_0=5.06$ m/s.</p>
<p>(b) The height after the $n$th bounce is $e^{2n}h_0$, so $h_2=e^4h_0=0.4096(2.0)=0.82$ m. (For comparison $h_1=e^2h_0=1.28$ m.)</p>
<p>(c) Fall time $t_0=\sqrt{2h_0/g}=0.632$ s. Each later up-and-down takes $2e^nt_0$. $t_{tot}=t_0+2t_0\dfrac{e}{1-e}=t_0\dfrac{1+e}{1-e}=0.632(9)=5.69$ s.</p>
<p>(d) $d=h_0+2h_0\dfrac{e^2}{1-e^2}=h_0\dfrac{1+e^2}{1-e^2}=2.0\dfrac{1.64}{0.36}=9.11$ m.</p>
<p class="mut">Sanity: infinitely many bounces occur in a finite 5.7 s because the bounce durations form a convergent series.</p>`},
  {id:"x7", title:"Bullet in a block, then a friction stop", problem:String.raw`<p>A 10 g bullet embeds in a 990 g block at rest on a horizontal table. The block slides 0.90 m before stopping; the coefficient of kinetic friction is 0.50. Find the bullet's speed and the time the block slides. ($g=10$ m/s².)</p>`,
   solution:String.raw`<p><b>Stage 2 (sliding):</b> $a=\mu g=5.0$ m/s², so $V^2=2ad=2(5.0)(0.90)=9.0$, $V=3.0$ m/s. Time $t=V/a=0.60$ s.</p>
<p><b>Stage 1 (collision):</b> $0.010\,v=1.000(3.0)\Rightarrow v=300$ m/s.</p>
<p class="mut">The friction force during the very short embedding time is far smaller than the internal forces, so momentum is conserved across it; friction then does all the work in stage 2. The block mass cancels in stage 2.</p>`},
  {id:"x8", title:"Elastic collision in two dimensions", problem:String.raw`<p>(a) A 2.0 kg puck at 5.0 m/s strikes an identical stationary puck elastically. The incoming puck leaves at $30^\circ$ to its original direction. Find both final velocities. (b) A 1.0 kg puck at 6.0 m/s strikes a stationary 3.0 kg puck elastically and rebounds at exactly $90^\circ$ to its original direction. Find the final speeds and the direction of the 3.0 kg puck.</p>`,
   solution:String.raw`<p>(a) Equal masses: the final velocities are perpendicular, so the other puck leaves at $60^\circ$ on the other side, and $v_1=5.0\cos30^\circ=4.33$ m/s, $v_2=5.0\sin30^\circ=2.50$ m/s. Check energy: $4.33^2+2.50^2=18.75+6.25=25=5^2$.</p>
<p>(b) Let $x$ be the original direction. Puck 1 has $v_{1x}=0$ after, $v_{1y}=\pm u$. Momentum $x$: $1(6)=3v_{2x}\Rightarrow v_{2x}=2.0$ m/s. Momentum $y$: $0=u+3v_{2y}\Rightarrow v_{2y}=-u/3$. Energy: $\tfrac12(1)(36)=\tfrac12u^2+\tfrac12(3)(2.0^2+u^2/9)$, so $36=u^2+12+u^2/3$, $u^2=18$, $u=4.24$ m/s. Then $v_{2y}=-1.41$ m/s, speed $\sqrt{4+2}=2.45$ m/s at $\arctan(1.41/2.0)=35^\circ$ on the opposite side. Energy check: $\tfrac12(18)+\tfrac32(6)=9+9=18$ J.</p>
<p class="mut">The angle between the final velocities is $90^\circ$ in (b) only because we were told so; in general it is not $90^\circ$ for unequal masses.</p>`},
  {id:"x9", title:"Sand on a conveyor and a falling chain", problem:String.raw`<p>(a) Sand drops vertically onto a horizontal belt moving at 2.0 m/s at a rate of 5.0 kg/s. Find the extra horizontal force needed to keep the belt at constant speed, the power delivered by the motor, and the rate at which the sand's kinetic energy increases. (b) A uniform chain of mass 1.2 kg and length 0.60 m hangs with its lower end just above a table and is released. Find the force the table exerts at the instant when 0.30 m has landed, and at the instant the last link lands. ($g=10$ m/s².)</p>`,
   solution:String.raw`<p>(a) $F=v\,dm/dt=2.0(5.0)=10$ N. Power $=Fv=20$ W. Kinetic-energy rate $=\tfrac12v^2\,dm/dt=\tfrac12(4)(5)=10$ W. The remaining 10 W becomes heat as the sand slips on the belt.</p>
<p>(b) $N=3Mgx/L$. At $x=0.30$ m: $3(1.2)(10)(0.30)/0.60=18$ N. When the last link lands, $x=L$ and $N=3Mg=36$ N. Breakdown at $x=0.30$: weight of pile 6 N plus 12 N to stop the arriving links ($\lambda v^2$ with $\lambda=2$ kg/m, $v^2=2(10)(0.30)=6$, so $12$ N).</p>`},
  {id:"x10", title:"Center of mass of a plate with a hole", problem:String.raw`<p>A uniform square plate of side 0.60 m has its lower-left corner at the origin. A circular hole of radius 0.10 m is cut with its center at $(0.40\text{ m},\,0.20\text{ m})$. Find the center of mass of the remaining plate. Then find the cm of three point masses: 2.0 kg at $(0,0)$, 1.0 kg at $(3.0,0)$ and 3.0 kg at $(0,4.0)$ m.</p>`,
   solution:String.raw`<p>Let $\sigma$ be the mass per area. Whole square: mass $\sigma(0.36)$ at $(0.30,0.30)$. Hole: mass $\sigma\pi(0.10)^2=\sigma(0.0314)$, which is $0.0873$ of the square's mass. Treat the hole as negative mass:</p>
<p>$x_{cm}=\dfrac{0.30-0.0873(0.40)}{1-0.0873}=0.290$ m, $y_{cm}=\dfrac{0.30-0.0873(0.20)}{1-0.0873}=0.310$ m.</p>
<p>The cm moves from $(0.30,0.30)$ away from the hole (left and up), as it should.</p>
<p>Point masses: $M=6.0$ kg; $x_{cm}=(2(0)+1(3.0)+3(0))/6=0.50$ m; $y_{cm}=(0+0+3(4.0))/6=2.0$ m. So $(0.50,\,2.0)$ m.</p>`},
  {id:"x11", title:"Person walking on a boat; spring-linked blocks", problem:String.raw`<p>(a) A 60 kg person stands at the stern of a 120 kg boat at rest on still water and walks 4.0 m toward the bow (relative to the boat). Ignoring water drag, how far does the boat move, and how far does the person move relative to the water? (b) Two blocks of 1.0 kg and 3.0 kg, joined by a spring ($k=48$ N/m), lie on a frictionless table. A constant 8.0 N force pulls on the 1.0 kg block along the spring axis. Find the acceleration of the cm and the angular frequency of the oscillation of the separation.</p>`,
   solution:String.raw`<p>(a) No external horizontal force, so the cm stays put. Let the boat move $-s$ and the person $+(4.0-s)$ in the water frame: $60(4.0-s)=120s\Rightarrow s=240/180=1.33$ m. The boat moves 1.33 m backward and the person moves $4.0-1.33=2.67$ m forward relative to the water.</p>
<p>(b) $a_{cm}=F/M=8.0/4.0=2.0$ m/s². The separation oscillates with $\mu=\dfrac{1(3)}{4}=0.75$ kg, so $\omega=\sqrt{k/\mu}=\sqrt{48/0.75}=8.0$ rad/s ($T=0.785$ s). In the (accelerating) cm frame the spring carries a steady tension of $F m_2/M=6.0$ N, so the oscillation is about a stretched length ($6.0/48=0.125$ m longer than natural), not about the natural length.</p>`},
  {id:"x12", title:"Binary star system", problem:String.raw`<p>Two stars of masses $2.0\times10^{30}$ kg and $4.0\times10^{30}$ kg orbit their common center of mass in circles with a separation of $3.0\times10^{11}$ m. Find the radius of each star's orbit, the period, and the speed of each star. Use $G=6.67\times10^{-11}$ N m²/kg².</p>`,
   solution:String.raw`<p>$M=6.0\times10^{30}$ kg. The heavier star is closer: $r_{heavy}=\dfrac{2.0}{6.0}(3.0\times10^{11})=1.0\times10^{11}$ m, $r_{light}=2.0\times10^{11}$ m.</p>
<p>$T^2=\dfrac{4\pi^2r^3}{GM}=\dfrac{4\pi^2(2.7\times10^{34})}{(6.67\times10^{-11})(6.0\times10^{30})}$, so $T=5.16\times10^7$ s $=1.64$ years.</p>
<p>Speeds $v=2\pi r/T$: light star $2\pi(2.0\times10^{11})/5.16\times10^7=2.4\times10^4$ m/s; heavy star half of that, $1.2\times10^4$ m/s. Momenta are equal and opposite ($2\times10^{30}(2.4\times10^4)=4\times10^{30}(1.2\times10^4)$ in magnitude), as they must be in the cm frame.</p>`}
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
   why:String.raw`<p>Speed before impact is $\sqrt{2gh_0}$ and after is $\sqrt{2gh}$, so $e=\sqrt{h/h_0}=\sqrt{0.64}=0.80$. The height ratio itself (0.64) is $e^2$, which is the fraction of kinetic energy retained.</p>`},
  {id:"q12", q:String.raw`<p>A 3.0 kg block moving at 4.0 m/s on a frictionless surface hits a stationary 1.0 kg block that has a light spring attached to its front. The maximum energy stored in the spring is</p>`, choices:["3.0 J","4.5 J","6.0 J","18 J","24 J"], a:2,
   why:String.raw`<p>At maximum compression both blocks move at $V=12/4=3.0$ m/s. Kinetic energy left is $\tfrac12(4)(9)=18$ J out of 24 J, so 6.0 J is in the spring ($=\tfrac12\mu v^2$ with $\mu=0.75$ kg). The tempting 24 J would require the blocks to be at rest, which momentum conservation forbids.</p>`},
  {id:"q13", q:String.raw`<p>A ball is dropped from a height $h_0$ onto a hard floor. The coefficient of restitution is $e=0.50$. How high does it rise after the third bounce?</p>`, choices:["$h_0/8$","$h_0/16$","$h_0/32$","$h_0/64$","$h_0/6$"], a:3,
   why:String.raw`<p>Speed is multiplied by $e$ at each bounce, and height goes as speed squared, so $h_n=e^{2n}h_0=(1/2)^6h_0=h_0/64$. The tempting $h_0/8$ multiplies the <i>height</i> by $e$ (rather than $e^2$) each time.</p>`},
  {id:"q14", q:String.raw`<p>A mass $m$ moving at speed $v$ makes a head-on elastic collision with a stationary mass $3m$. What fraction of the initial kinetic energy is transferred to the $3m$ mass?</p>`, choices:["1/4","1/2","3/4","9/16","1"], a:2,
   why:String.raw`<p>$v_{2f}=\dfrac{2m}{4m}v=v/2$, so $K_2=\tfrac12(3m)(v/2)^2=\tfrac38mv^2$, which is $3/4$ of $\tfrac12mv^2$ (formula $4m_1m_2/(m_1+m_2)^2=12/16$). Only equal masses transfer everything. The tempting 1/2 comes from the speed ratio, not the energy ratio.</p>`},
  {id:"q15", q:String.raw`<p>A 0.50 kg ball hits the floor moving down at 6.0 m/s and leaves moving up at 4.0 m/s. The contact lasts 0.020 s. Taking $g=10$ m/s², the average force the floor exerts on the ball is</p>`, choices:["5.0 N","100 N","245 N","250 N","255 N"], a:4,
   why:String.raw`<p>Net impulse up $=0.50(4.0+6.0)=5.0$ N s, so the average <i>net</i> force is $250$ N. The floor force also has to cancel gravity: $N_{avg}-mg=250$, so $N_{avg}=255$ N. Answering 250 N forgets that the net force is not the floor force alone.</p>`},
  {id:"q16", q:String.raw`<p>An 80 kg person stands at one end of a 160 kg boat at rest on calm water and walks 3.0 m to the other end (relative to the boat). Neglect water drag. The boat moves</p>`, choices:["0.5 m opposite to the person's walk","1.0 m opposite to the person's walk","1.0 m in the direction of the walk","1.5 m opposite to the person's walk","3.0 m opposite to the person's walk"], a:1,
   why:String.raw`<p>The cm cannot move: $80(3.0-s)=160s\Rightarrow s=1.0$ m, backward. The person moves 2.0 m relative to the water. The tempting 1.5 m comes from splitting the 3 m equally, which would be right only for equal masses.</p>`},
  {id:"q17", q:String.raw`<p>Two objects have the same magnitude of momentum. Object A has four times the mass of object B. The ratio $K_A/K_B$ of their kinetic energies is</p>`, choices:["4","2","1","1/2","1/4"], a:4,
   why:String.raw`<p>$K=p^2/2m$, so at fixed $p$ the energy is inversely proportional to mass: $K_A/K_B=m_B/m_A=1/4$. The tempting 4 (or 1) mixes up this with the case of equal speeds ($K\propto m$) or equal energies.</p>`},
  {id:"q18", q:String.raw`<p>Sand falls vertically onto a horizontal conveyor belt moving at a constant 3.0 m/s, at a rate of 2.0 kg/s. The extra horizontal force needed to keep the belt speed constant is</p>`, choices:["1.5 N","3.0 N","6.0 N","9.0 N","18 N"], a:2,
   why:String.raw`<p>$F=v\,dm/dt=3.0(2.0)=6.0$ N. The 18 N option is $v^2\,dm/dt$, which has the units of power (18 W), not of force. Note also that only half of that 18 W goes into the sand's kinetic energy.</p>`},
  {id:"q19", q:String.raw`<p>A 0.50 kg lump of putty moving at 8.0 m/s sticks to a 1.5 kg block at rest on a table. The coefficient of kinetic friction is 0.20 ($g=10$ m/s²). How far does the combined object slide?</p>`, choices:["16 m","0.5 m","1.0 m","2.0 m","4.0 m"], a:2,
   why:String.raw`<p>Collision: $0.50(8.0)=2.0V\Rightarrow V=2.0$ m/s. Slide: $V^2=2\mu gd\Rightarrow d=4/(2\cdot0.20\cdot10)=1.0$ m. The tempting 16 m uses the putty's 8.0 m/s for the slide, forgetting that the collision consumed most of the speed.</p>`},
  {id:"q20", q:String.raw`<p>Two stars, of mass $M$ and $3M$, move in circular orbits about their common center of mass. The ratio of the orbital speed of the lighter star to that of the heavier star is</p>`, choices:["1/3","1","3","9","$\\sqrt3$"], a:2,
   why:String.raw`<p>Both stars complete one orbit in the same period, and the lighter star is three times farther from the cm ($m_1r_1=m_2r_2$). Since $v=2\pi r/T$, its speed is three times larger. Equal momentum magnitudes, not equal speeds, is the right statement for the cm frame. 9 would come from squaring the ratio.</p>`},
  {id:"q21", q:String.raw`<p>A uniform disk of radius $R$ is centered at the origin. A circular hole of radius $R/2$ is cut out, centered at $x=R/2$. The $x$-coordinate of the center of mass of the remaining disk is</p>`, choices:["$-R/8$","$-R/6$","$-R/4$","$-R/3$","$-R/2$"], a:1,
   why:String.raw`<p>The hole has $1/4$ of the disk's area. $x_{cm}=\dfrac{M(0)-(M/4)(R/2)}{M-M/4}=\dfrac{-R/8}{3/4}=-\dfrac R6$. The tempting $-R/8$ forgets to divide by the smaller remaining mass.</p>`},
  {id:"q22", q:String.raw`<p>A puck makes an elastic, glancing collision with an identical stationary puck. After the collision the incoming puck moves at $37^\circ$ to its original direction. The other puck moves at what angle to the original direction, on the other side?</p>`, choices:["$37^\\circ$","$45^\\circ$","$53^\\circ$","$63^\\circ$","$90^\\circ$"], a:2,
   why:String.raw`<p>For equal masses, elastic, one at rest, the final velocities are perpendicular, so the angles add to $90^\circ$: $90-37=53^\circ$. The tempting $37^\circ$ assumes a symmetric scattering, which would hold only for equal speeds, and $45^\circ$ for a deflection that is not given.</p>`},
  {id:"q23", q:String.raw`<p>A 2.0 kg block and a 3.0 kg block lie on a frictionless table, joined by a spring. A constant 10 N horizontal force along the spring pulls the 2.0 kg block (the spring stretches and oscillates). The acceleration of the center of mass of the two blocks is</p>`, choices:["5.0 m/s²","3.3 m/s²","2.5 m/s²","2.0 m/s²","1.0 m/s²"], a:3,
   why:String.raw`<p>$a_{cm}=F_{ext}/M=10/5.0=2.0$ m/s². The spring force is internal and cannot affect $a_{cm}$. 5.0 m/s² would be the acceleration of the 2.0 kg block on its own, which ignores the other block.</p>`},
  {id:"q24", q:String.raw`<p>A uniform solid cone has height $H$. Its center of mass lies on the axis at a distance from the apex of</p>`, choices:["$H/4$","$H/3$","$H/2$","$2H/3$","$3H/4$"], a:4,
   why:String.raw`<p>Slicing into disks, $dm\propto y^2dy$, so $y_{cm}=\int y^3dy/\int y^2dy=(H^4/4)/(H^3/3)=3H/4$ from the apex, which is $H/4$ above the base. The tempting $H/3$ belongs to a triangle (an area, with $dm\propto y$ weighting differently), and $H/4$ is the distance from the base, not the apex.</p>`}
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
<p>(e) $a_{cm}=F/M=\dfrac{3F}{\alpha L^3}$ in the direction of $\vec F$. Applying the force at $x=0$ gives the same $\vec a_{cm}$, because $\vec F_{ext,net}=M\vec a_{cm}$ involves only the net external force, not where it acts. (The rotation of the rod about its cm would differ.)</p>`},
  {id:"f3", type:"Experimental design & analysis", title:"Testing momentum conservation on an air track",
   prompt:String.raw`<p>A student uses a level air track to test conservation of momentum. Glider A (mass $m_A=0.250$ kg) is pushed toward glider B (mass $m_B=0.500$ kg), initially at rest. Velcro strips make them stick together. Two photogates measure speeds using a flag of known width on each glider.</p>
<p>(a) Describe the procedure: what is measured, with what equipment, how the track is made level and how the student checks that friction and tilt are negligible.<br>
(b) Four trials give the following measurements of speed of A before the collision, $v_i$, and speed of the combined gliders after, $v_f$:</p>
<table><tr><th>Trial</th><th>$v_i$ (m/s)</th><th>$v_f$ (m/s)</th></tr><tr><td>1</td><td>0.40</td><td>0.135</td></tr><tr><td>2</td><td>0.60</td><td>0.200</td></tr><tr><td>3</td><td>0.80</td><td>0.265</td></tr><tr><td>4</td><td>1.00</td><td>0.335</td></tr></table>
<p>For trial 3, calculate the total momentum before and after and the percentage difference. Is this within what you would expect?<br>
(c) If momentum is conserved, what quantity plotted against what gives a straight line, and what is the predicted slope? The best-fit line through the origin has slope $0.334\pm0.002$. Does this support conservation of momentum? Explain.<br>
(d) For trial 3 calculate the fraction of the initial kinetic energy that is lost, and compare it to the theoretical fraction. Does this fraction depend on $v_i$?<br>
(e) Identify one systematic error that would make the measured $v_f$ smaller than predicted, and describe a measurement the student could make to test whether it matters.</p>`,
   pts:[
    {p:1,d:"(a) Measures masses with a balance and speeds with gate times and the flag width ($v=w/\\Delta t$); states that speed is taken just before and just after the collision"},
    {p:1,d:"(a) Levels the track by checking that a glider at rest does not drift, or that gate speeds along a free glide are equal"},
    {p:1,d:"(b) $p_i=0.250(0.80)=0.200$ kg m/s and $p_f=0.750(0.265)=0.199$ kg m/s"},
    {p:1,d:"(b) Difference about 0.6%, consistent with measurement uncertainty"},
    {p:1,d:"(c) Plot $v_f$ against $v_i$ (linear, through the origin); slope $m_A/(m_A+m_B)=1/3$"},
    {p:1,d:"(c) Concludes that $0.334\\pm0.002$ agrees with $0.333$ within one standard error, which supports conservation"},
    {p:1,d:"(d) Correct energies: $K_i=0.0800$ J, $K_f=0.0263$ J, fraction lost $\\approx0.67$"},
    {p:1,d:"(d) Theoretical fraction $m_B/(m_A+m_B)=2/3$ agrees, and it does not depend on $v_i$"},
    {p:1,d:"(e) A plausible systematic error (such as residual air-track drag, a slight tilt, or Velcro contact before the second gate)"},
    {p:1,d:"(e) A test that isolates it (such as timing a freely gliding glider at both gates to measure its speed loss)"}],
   solution:String.raw`<p>(a) Measure $m_A,m_B$ with a balance. Place photogate 1 just before the collision point and gate 2 after it; with a flag of width $w$ the speed is $w/\Delta t$ for each gate. Level the track by releasing a glider at rest in several places and adjusting feet until it does not drift, and test friction/drag by measuring the speed of one glider at two gates with no collision.</p>
<p>(b) $p_i=0.250(0.80)=0.200$ kg m/s; $p_f=(0.750)(0.265)=0.19875\approx0.199$ kg m/s. Difference 0.6%, small compared to the likely few-percent timing and reading uncertainty.</p>
<p>(c) $v_f=\dfrac{m_A}{m_A+m_B}v_i$, so plot $v_f$ against $v_i$ for a line through the origin of slope $0.250/0.750=0.333$. The fitted $0.334\pm0.002$ agrees, so the data support conservation of momentum (a different slope would mean a momentum loss or a mistake in the masses).</p>
<p>(d) $K_i=\tfrac12(0.250)(0.80)^2=0.0800$ J; $K_f=\tfrac12(0.750)(0.265)^2=0.0263$ J; lost fraction $=1-0.329=0.671$. Theory: $1-\dfrac{m_A}{m_A+m_B}=\dfrac{m_B}{m_A+m_B}=\dfrac23=0.667$. It does not depend on $v_i$ because $K_f/K_i=m_A/(m_A+m_B)$ is a pure mass ratio.</p>
<p>(e) Air-track drag reduces the speed between the second gate and the collision, or between the collision and the second gate. To test it, launch a single glider through both gates with no collision and compare the two speeds; a drop of a few percent would explain a $v_f$ that is slightly too small.</p>`},
  {id:"f4", type:"Mathematical routines", title:"Collision with a spring bumper",
   prompt:String.raw`<p>A 1.0 kg block A moves at 6.0 m/s on a frictionless horizontal surface toward a 2.0 kg block B at rest. A light spring of constant $k=300$ N/m is attached to the front of B and is initially relaxed.</p>
<p>(a) Calculate the speed of the blocks at the moment the spring is maximally compressed.<br>
(b) Calculate the maximum compression of the spring.<br>
(c) Calculate the velocity of each block after the spring has returned to its natural length and the blocks have separated.<br>
(d) On one set of axes, sketch the velocities of A and B versus time from before contact until after separation. Label the value at maximum compression and indicate where the slopes are steepest.<br>
(e) Explain why the total kinetic energy is not constant during the collision, although total energy and total momentum are. State the kinetic energy at maximum compression.</p>`,
   pts:[
    {p:1,d:"(a) $V=m_Av_0/(m_A+m_B)=2.0$ m/s at the moment of equal velocities"},
    {p:1,d:"(b) Energy conservation: $\\tfrac12(1)(36)=\\tfrac12(3)(4)+\\tfrac12kx^2$"},
    {p:1,d:"(b) $x=0.28$ m"},
    {p:1,d:"(c) Uses momentum with elastic relative-velocity reversal (or energy conservation)"},
    {p:1,d:"(c) $v_A=-2.0$ m/s and $v_B=+4.0$ m/s"},
    {p:1,d:"(d) A decreases from 6.0 through 0 to $-2.0$; B increases from 0 to $+4.0$; the curves cross at 2.0 m/s at maximum compression"},
    {p:1,d:"(d) Slopes steepest at maximum compression (spring force largest); flat before contact and after separation; the slope of A has magnitude twice that of B at each instant"},
    {p:1,d:"(d) Slopes opposite in sign with $|a_B|=|a_A|/2$ because the spring forces are equal in magnitude (third law)"},
    {p:1,d:"(e) Part of the kinetic energy is stored as spring potential energy during compression, so $K$ changes while $K+U$ and $\\vec P$ are conserved"},
    {p:1,d:"(e) $K$ at maximum compression is 6.0 J (and 12 J is in the spring)"}],
   solution:String.raw`<p>(a) Momentum is conserved at every instant: $1.0(6.0)=3.0V\Rightarrow V=2.0$ m/s. Maximum compression occurs when the relative velocity is zero.</p>
<p>(b) $18=\tfrac12(3.0)(2.0)^2+\tfrac12(300)x^2=6+150x^2\Rightarrow x^2=0.080$, $x=0.28$ m.</p>
<p>(c) The spring is ideal, so the interaction is elastic: $v_A=\dfrac{1-2}{3}(6.0)=-2.0$ m/s, $v_B=\dfrac{2(1)}{3}(6.0)=+4.0$ m/s. Check: $6=-2+2(4)$ and $K=\tfrac12(1)(4)+\tfrac12(2)(16)=18$ J.</p>
<p>(d) Velocity of A: a horizontal line at 6.0, then a curve that falls through 0 to a flat line at $-2.0$. Velocity of B: flat at 0, then rising smoothly to flat at $+4.0$. The two curves cross at 2.0 m/s at the time of maximum compression; the slopes are steepest there because the spring force $kx$ is largest. The spring force on A and on B is equal in magnitude, so $|dv_A/dt|=2|dv_B/dt|$ throughout.</p>
<p>(e) The spring force does work on each block: it takes kinetic energy from A and gives only some of it to B, the rest going into spring potential energy, and gives it back later. Total energy $K+U$ and total momentum are conserved, but $K$ alone dips. At maximum compression $K=\tfrac12(3.0)(2.0)^2=6.0$ J, and 12 J is stored in the spring ($\tfrac12\mu v_{rel}^2$ with $\mu=2/3$ kg: $\tfrac12\cdot\tfrac23\cdot36=12$ J).</p>`}
  ]
});
