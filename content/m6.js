PH.unit({
  id:"m6", course:"mech", order:80, hours:7.5,
  title:"Mechanics 6: Oscillations",
  blurb:"Simple harmonic motion is one ODE, $\\ddot x=-\\omega^2x$, and it shows up everywhere: springs, pendulums, and anything near a stable equilibrium. Solve it once, then recognize it.",
  needs:["m1","m2","m3","m5"],
  goals:[
    "Recognize $\\ddot x=-\\omega^2x$ as the signature of SHM and write its general solution with amplitude and phase fixed by initial conditions",
    "Use $\\omega=\\sqrt{k/m}$ for springs (horizontal, vertical, series, parallel) and $\\omega=\\sqrt{g/L}$ for the small-angle pendulum",
    "Derive the equation of motion for any single-degree-of-freedom system from force or torque, and justify the small-angle approximation",
    "Apply $T=2\\pi\\sqrt{I/mgd}$ to a physical pendulum",
    "Use energy conservation in SHM and read $x$, $v$, $a$ graphs, including phase relationships",
    "Describe qualitatively how damping changes amplitude, energy and period",
    "Linearize period data (e.g. $T^2$ vs $L$ or $m$) to extract $g$ or $k$",
    "Find $\\omega$ for composite systems (massive pulleys, rolling bodies) with the energy method, and find when a second body slips or leaves an oscillating platform"
  ],
  lessons:[
  {id:"l1", title:"SHM as an ODE, and the spring", videos:[{title:"Lecture 17 - Simple Harmonic Motion",url:"https://oyc.yale.edu/physics/phys-200/lecture-17",src:"Yale PHYS 200 (Shankar)",note:"Mass on a spring, ODE and its solution, amplitude and phase."},{title:"Search: simple harmonic motion x'' = -omega^2 x AP Physics C",url:"https://www.youtube.com/results?search_query=simple+harmonic+motion+x''+=+-omega^2+x+AP+Physics+C",src:"YouTube search",note:"Look for the ODE and cos(wt+phi) solution, vertical spring."}], html:String.raw`
<p>A system is in <b>simple harmonic motion</b> (SHM) when its position obeys</p>
$$\frac{d^2x}{dt^2}=-\omega^2x,\qquad \omega>0\ \text{constant.}$$
<p>In words: the acceleration is proportional to the displacement from equilibrium and points back toward it. You already know functions whose second derivative is a negative multiple of themselves. Try $x=\cos(\omega t)$: $\dot x=-\omega\sin\omega t$, $\ddot x=-\omega^2\cos\omega t$. It works, and so does $\sin\omega t$. The equation is linear and second order, so the general solution is a two-parameter family:</p>
$$x(t)=A\cos(\omega t+\varphi)\quad\Longleftrightarrow\quad x(t)=C\cos\omega t+D\sin\omega t,\qquad A=\sqrt{C^2+D^2}.$$
<p>$A\ge0$ is the <b>amplitude</b> (maximum displacement), $\varphi$ is the <b>phase constant</b> (where in the cycle you are at $t=0$), $\omega$ is the <b>angular frequency</b> in rad/s. The motion repeats when $\omega t$ advances by $2\pi$, so</p>
$$T=\frac{2\pi}{\omega},\qquad f=\frac1T=\frac{\omega}{2\pi}.$$
<p>$A$ and $\varphi$ are not properties of the system; they are set by the two initial conditions $x(0)$ and $v(0)$. Only $\omega$ is built into the system. Differentiating:</p>
$$v=-A\omega\sin(\omega t+\varphi),\qquad a=-A\omega^2\cos(\omega t+\varphi)=-\omega^2x.$$
<p>So $v_{\max}=A\omega$ and $a_{\max}=A\omega^2$. To get $A$ and $\varphi$ from initial data: $x(0)=A\cos\varphi$ and $v(0)=-A\omega\sin\varphi$, so $A=\sqrt{x(0)^2+(v(0)/\omega)^2}$.</p>
<svg class="fig" viewBox="0 0 340 200" width="340" role="img" aria-label="Graph of x versus t for simple harmonic motion, a cosine of amplitude A and period T, with a phase-shifted dashed copy">
<line x1="40" y1="100" x2="325" y2="100" stroke="currentColor"/><line x1="40" y1="12" x2="40" y2="188" stroke="currentColor"/>
<polyline points="40.0,40.0 42.8,40.5 45.6,41.9 48.4,44.2 51.2,47.4 54.0,51.5 56.8,56.3 59.6,61.8 62.4,67.9 65.2,74.5 68.0,81.5 70.8,88.8 73.6,96.2 76.4,103.8 79.2,111.2 82.0,118.5 84.8,125.5 87.6,132.1 90.4,138.2 93.2,143.7 96.0,148.5 98.8,152.6 101.6,155.8 104.4,158.1 107.2,159.5 110.0,160.0 112.8,159.5 115.6,158.1 118.4,155.8 121.2,152.6 124.0,148.5 126.8,143.7 129.6,138.2 132.4,132.1 135.2,125.5 138.0,118.5 140.8,111.2 143.6,103.8 146.4,96.2 149.2,88.8 152.0,81.5 154.8,74.5 157.6,67.9 160.4,61.8 163.2,56.3 166.0,51.5 168.8,47.4 171.6,44.2 174.4,41.9 177.2,40.5 180.0,40.0 182.8,40.5 185.6,41.9 188.4,44.2 191.2,47.4 194.0,51.5 196.8,56.3 199.6,61.8 202.4,67.9 205.2,74.5 208.0,81.5 210.8,88.8 213.6,96.2 216.4,103.8 219.2,111.2 222.0,118.5 224.8,125.5 227.6,132.1 230.4,138.2 233.2,143.7 236.0,148.5 238.8,152.6 241.6,155.8 244.4,158.1 247.2,159.5 250.0,160.0 252.8,159.5 255.6,158.1 258.4,155.8 261.2,152.6 264.0,148.5 266.8,143.7 269.6,138.2 272.4,132.1 275.2,125.5 278.0,118.5 280.8,111.2 283.6,103.8 286.4,96.2 289.2,88.8 292.0,81.5 294.8,74.5 297.6,67.9 300.4,61.8 303.2,56.3 306.0,51.5 308.8,47.4 311.6,44.2 314.4,41.9 317.2,40.5 320.0,40.0" fill="none" stroke="currentColor" stroke-width="2.5"/>
<polyline points="40.0,67.6 42.8,74.2 45.6,81.2 48.4,88.4 51.2,95.9 54.0,103.4 56.8,110.9 59.6,118.2 62.4,125.3 65.2,131.9 68.0,138.0 70.8,143.5 73.6,148.4 76.4,152.4 79.2,155.7 82.0,158.0 84.8,159.5 87.6,160.0 90.4,159.6 93.2,158.2 96.0,155.9 98.8,152.7 101.6,148.7 104.4,144.0 107.2,138.5 110.0,132.4 112.8,125.8 115.6,118.8 118.4,111.6 121.2,104.1 124.0,96.6 126.8,89.1 129.6,81.8 132.4,74.7 135.2,68.1 138.0,62.0 140.8,56.5 143.6,51.6 146.4,47.6 149.2,44.3 152.0,42.0 154.8,40.5 157.6,40.0 160.4,40.4 163.2,41.8 166.0,44.1 168.8,47.3 171.6,51.3 174.4,56.0 177.2,61.5 180.0,67.6 182.8,74.2 185.6,81.2 188.4,88.4 191.2,95.9 194.0,103.4 196.8,110.9 199.6,118.2 202.4,125.3 205.2,131.9 208.0,138.0 210.8,143.5 213.6,148.4 216.4,152.4 219.2,155.7 222.0,158.0 224.8,159.5 227.6,160.0 230.4,159.6 233.2,158.2 236.0,155.9 238.8,152.7 241.6,148.7 244.4,144.0 247.2,138.5 250.0,132.4 252.8,125.8 255.6,118.8 258.4,111.6 261.2,104.1 264.0,96.6 266.8,89.1 269.6,81.8 272.4,74.7 275.2,68.1 278.0,62.0 280.8,56.5 283.6,51.6 286.4,47.6 289.2,44.3 292.0,42.0 294.8,40.5 297.6,40.0 300.4,40.4 303.2,41.8 306.0,44.1 308.8,47.3 311.6,51.3 314.4,56.0 317.2,61.5 320.0,67.6" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="4 4" stroke-opacity=".7"/>
<line x1="40" y1="40" x2="320" y2="40" stroke="currentColor" stroke-opacity=".25" stroke-dasharray="2 4"/><line x1="40" y1="160" x2="320" y2="160" stroke="currentColor" stroke-opacity=".25" stroke-dasharray="2 4"/>
<text x="20" y="44">A</text><text x="12" y="164">−A</text><text x="326" y="116">t</text><text x="20" y="18">x</text>
<line x1="40" y1="180" x2="180" y2="180" stroke="currentColor"/><line x1="40" y1="175" x2="40" y2="185" stroke="currentColor"/><line x1="180" y1="175" x2="180" y2="185" stroke="currentColor"/>
<text x="100" y="195">T = 2π/ω</text><text x="200" y="30">solid: φ = 0   dashed: φ &gt; 0 (starts earlier in the cycle)</text></svg>
<h4>The ideal spring</h4>
<p>An ideal spring exerts a force proportional to its stretch from its natural length, <b>Hooke's law</b> $F=-kx$, where $k>0$ is the <b>spring constant</b> in N/m (stiffer spring, bigger $k$) and $x$ is measured from the equilibrium position. Newton's second law for a block of mass $m$ on a frictionless surface:</p>
$$m\ddot x=-kx\ \Rightarrow\ \ddot x=-\frac{k}{m}x\ \Rightarrow\ \boxed{\omega=\sqrt{\frac km},\quad T=2\pi\sqrt{\frac mk}}$$
<svg class="fig" viewBox="0 0 340 130" width="340" role="img" aria-label="Block on a horizontal spring attached to a wall, with position x measured from the equilibrium position">
<line x1="40" y1="20" x2="40" y2="100" stroke="currentColor" stroke-width="3"/>
<polyline points="70,60 78,74 88,46 98,74 108,46 118,74 129,46 139,74 149,46 159,74 169,46 190,60" fill="none" stroke="currentColor" stroke-width="1.8"/>
<rect x="190" y="38" width="44" height="44" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="2"/>
<line x1="30" y1="82" x2="300" y2="82" stroke="currentColor" stroke-opacity=".5"/>
<line x1="212" y1="90" x2="212" y2="112" stroke="currentColor" stroke-dasharray="3 3"/>
<text x="196" y="124">x = 0 (equilibrium)</text>
<line x1="212" y1="108" x2="268" y2="108" stroke="currentColor"/><polygon points="268,104 276,108 268,112" fill="currentColor"/>
<text x="254" y="96">x</text><text x="204" y="64">m</text><text x="104" y="38">k</text></svg>
<div class="box key"><b>Period does not depend on amplitude.</b> Bigger swings travel farther but also feel bigger restoring forces, and the two effects cancel exactly. This "isochronism" is a property of the linear force $F\propto x$; it will only be approximate for the pendulum. Heavier mass means slower ($T\propto\sqrt m$); stiffer spring means faster.</div>
<h4>Vertical spring: gravity only shifts the center</h4>
<p>Hang the mass from a vertical spring. At equilibrium the spring is stretched by $\Delta$ with $k\Delta=mg$. Measure displacement $y$ from that new equilibrium (not from the natural length). Then the net force at displacement $y$ is $-k(\Delta+y)+mg=-ky$, so $m\ddot y=-ky$ with the same $\omega=\sqrt{k/m}$. Gravity just moves the equilibrium point; it does not change the period. A handy consequence: $\omega=\sqrt{g/\Delta}$, so you can get the period from the static stretch alone.</p>
<div class="box trap"><b>Trap:</b> $\omega$ (rad/s) and $f$ (Hz) differ by $2\pi$. A spring with $\omega=10$ rad/s oscillates about 1.6 times per second, not 10. Also, a vertical spring oscillating on the Moon has the same period as on Earth.</div>`},
  {id:"l2", title:"Pendulums: small angles and physical pendulums", videos:[{title:"Search: physical pendulum period I mgd AP Physics C",url:"https://www.youtube.com/results?search_query=physical+pendulum+period+I+mgd+AP+Physics+C",src:"YouTube search",note:"Look for derivation by torque and the small-angle approximation."},{title:"Search: simple pendulum small angle approximation derivation",url:"https://www.youtube.com/results?search_query=simple+pendulum+small+angle+approximation+derivation",src:"YouTube search",note:"Why sin(theta) is replaced by theta."}], html:String.raw`
<h4>Simple pendulum</h4>
<p>A point mass $m$ on a light string of length $L$ swings in a vertical arc. Let $\theta$ be the angle from the vertical. Gravity $mg$ has a component along the string (balanced by tension, up to the centripetal part) and a component <b>tangent</b> to the arc, $mg\sin\theta$, that always points back toward $\theta=0$. The arc length is $s=L\theta$, so $m\,L\ddot\theta=-mg\sin\theta$:</p>
$$\ddot\theta=-\frac gL\sin\theta.$$
<p>That is <i>not</i> SHM: the restoring term is $\sin\theta$, not $\theta$. This nonlinear ODE has no elementary closed-form solution. But for small angles we use the Taylor series $\sin\theta=\theta-\theta^3/6+\cdots$ and keep the first term:</p>
$$\ddot\theta\approx-\frac gL\theta\ \Rightarrow\ \omega=\sqrt{\frac gL},\quad T=2\pi\sqrt{\frac Lg}.$$
<svg class="fig" viewBox="0 0 340 200" width="340" role="img" aria-label="Simple pendulum of length L displaced by angle theta from the vertical, showing gravity mg and its tangential component mg sin theta pointing back toward equilibrium">
<line x1="120" y1="25" x2="220" y2="25" stroke="currentColor" stroke-width="3"/>
<line x1="170" y1="25" x2="170" y2="165" stroke="currentColor" stroke-dasharray="4 4" stroke-opacity=".5"/>
<line x1="170" y1="25" x2="232.3" y2="139.1" stroke="currentColor" stroke-width="2"/>
<circle cx="232.3" cy="139.1" r="11" fill="currentColor" fill-opacity=".2" stroke="currentColor" stroke-width="2"/>
<path d="M 170,70 A 45 45 0 0 0 191.6,64.5" fill="none" stroke="currentColor"/>
<text x="184" y="85">θ</text>
<line x1="232.3" y1="139.1" x2="232.3" y2="189.1" stroke="currentColor" stroke-width="2"/><polygon points="228.3,185.1 232.3,193.1 236.3,185.1" fill="currentColor"/>
<text x="240.3" y="189.1">mg</text>
<line x1="232.3" y1="139.1" x2="188.4" y2="163.1" stroke="currentColor" stroke-width="2" stroke-dasharray="1 0"/>
<polygon points="188.4,163.1 193.5,155.7 197.4,162.7" fill="currentColor"/>
<text x="122.3" y="201.1">mg sin θ</text>
<text x="88" y="95">L</text><text x="125" y="20">pivot</text></svg>
<p><b>How small is small?</b> The relative error of $\sin\theta\approx\theta$ is about $\theta^2/6$. At $\theta=0.1$ rad ($5.7^\circ$) it is $0.17\%$; at $0.3$ rad ($17^\circ$) it is $1.5\%$; at $0.5$ rad ($29^\circ$) about $4\%$. The true period for amplitude $\theta_0$ is $T\approx2\pi\sqrt{L/g}\,(1+\theta_0^2/16)$, so large swings are <i>slower</i> than the formula says. On the AP, state "small angle, $\sin\theta\approx\theta$" whenever you use $T=2\pi\sqrt{L/g}$.</p>
<p>Notice the mass cancelled: the period depends only on $L$ and $g$. (Gravity's force and the inertia are both $\propto m$.) The same derivation by torque: about the pivot, $\tau=-mgL\sin\theta$ and $I=mL^2$, so $mL^2\ddot\theta=-mgL\sin\theta$, identical.</p>
<h4>Physical (compound) pendulum</h4>
<p>Now let any rigid body of mass $m$ swing about a fixed horizontal pivot. Let $d$ be the distance from the pivot to the center of mass and $I$ the moment of inertia about the pivot axis (the rotational analog of mass, Unit 5). Gravity acts at the center of mass, giving torque $\tau=-mgd\sin\theta$. Newton's second law for rotation, $I\ddot\theta=\tau$:</p>
$$I\ddot\theta=-mgd\sin\theta\approx-mgd\,\theta\ \Rightarrow\ \omega=\sqrt{\frac{mgd}{I}},\qquad T=2\pi\sqrt{\frac{I}{mgd}}.$$
<p>Check: a point mass has $I=mL^2$, $d=L$, which gives $T=2\pi\sqrt{L/g}$. For a uniform rod of length $L$ pivoted at one end, $I=\tfrac13mL^2$, $d=L/2$: $\omega^2=\dfrac{mg(L/2)}{mL^2/3}=\dfrac{3g}{2L}$. It swings like a simple pendulum of length $\tfrac23L$.</p>
<div class="box key"><b>Method for any oscillator:</b> (1) pick a coordinate measured from equilibrium; (2) write the net force or torque along it; (3) expand to first order in the coordinate; (4) rearrange into $\ddot q=-(\text{positive constant})\,q$. The constant is $\omega^2$. This works for any system near a stable equilibrium, which is why SHM is everywhere.</div>
<div class="box trap"><b>Trap:</b> do not confuse the angular speed of the swing, $\dot\theta$ (changes constantly), with $\omega$ (the fixed parameter in $\theta=\theta_0\cos\omega t$). Also $I$ must be about the <i>pivot</i>, not the center of mass.</div>`},
  {id:"l3", title:"Energy in SHM and reading graphs", videos:[{title:"Search: energy in simple harmonic motion x v a graphs AP Physics C",url:"https://www.youtube.com/results?search_query=energy+in+simple+harmonic+motion+x+v+a+graphs+AP+Physics+C",src:"YouTube search",note:"Look for phase relationships between x, v and a graphs."}], html:String.raw`
<p>The spring force is conservative with potential energy $U=\tfrac12kx^2$. With no friction the total mechanical energy is constant:</p>
$$E=\tfrac12mv^2+\tfrac12kx^2=\tfrac12kA^2=\tfrac12mv_{\max}^2.$$
<p>At the turning points $x=\pm A$ the block is momentarily at rest and all energy is potential. At $x=0$ all of it is kinetic. Solving for the speed anywhere:</p>
$$v=\pm\omega\sqrt{A^2-x^2}.$$
<p>This is the fast way to get $v$ at a given $x$, with no time needed. (Check with the solution: $v^2=A^2\omega^2\sin^2$ and $\omega^2x^2=A^2\omega^2\cos^2$, which add to $A^2\omega^2$.) Energy is proportional to $A^2$: doubling the amplitude quadruples $E$, doubles $v_{\max}$, and leaves $T$ unchanged. At $x=A/2$: $U=E/4$, so $K=\tfrac34E$.</p>
<svg class="fig" viewBox="0 0 340 200" width="340" role="img" aria-label="Parabolic potential energy U equals one half k x squared with a horizontal line at total energy E meeting it at the turning points minus A and plus A">
<line x1="30" y1="170" x2="320" y2="170" stroke="currentColor"/><line x1="160" y1="10" x2="160" y2="175" stroke="currentColor"/>
<polyline points="50.0,40.0 55.0,51.5 60.0,62.6 65.0,73.0 70.0,83.0 75.0,92.4 80.0,101.2 85.0,109.6 90.0,117.4 95.0,124.6 100.0,131.3 105.0,137.5 110.0,143.1 115.0,148.2 120.0,152.8 125.0,156.8 130.0,160.3 135.0,163.3 140.0,165.7 145.0,167.6 150.0,168.9 155.0,169.7 160.0,170.0 165.0,169.7 170.0,168.9 175.0,167.6 180.0,165.7 185.0,163.3 190.0,160.3 195.0,156.8 200.0,152.8 205.0,148.2 210.0,143.1 215.0,137.5 220.0,131.3 225.0,124.6 230.0,117.4 235.0,109.6 240.0,101.2 245.0,92.4 250.0,83.0 255.0,73.0 260.0,62.6 265.0,51.5 270.0,40.0" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="40" y1="40" x2="280" y2="40" stroke="currentColor" stroke-dasharray="5 4"/>
<line x1="50" y1="40" x2="50" y2="170" stroke="currentColor" stroke-opacity=".4" stroke-dasharray="2 3"/><line x1="270" y1="40" x2="270" y2="170" stroke="currentColor" stroke-opacity=".4" stroke-dasharray="2 3"/>
<line x1="110" y1="170" x2="110" y2="143" stroke="currentColor" stroke-width="5" stroke-opacity=".5"/>
<line x1="110" y1="143" x2="110" y2="40" stroke="currentColor" stroke-width="5" stroke-opacity=".2"/>
<text x="290" y="44">E = ½kA²</text><text x="40" y="188">−A</text><text x="262" y="188">+A</text><text x="164" y="22">energy</text><text x="300" y="164">x</text><text x="68" y="105">K = E − U</text><text x="205" y="125">U = ½kx²</text></svg>
<p>The same picture works for any potential near a minimum: any smooth $U(x)$ looks like a parabola there ($U\approx U_0+\tfrac12U''(x_0)(x-x_0)^2$), so the effective spring constant is $k_{\rm eff}=U''(x_0)$. That is why small oscillations about stable equilibria are always SHM.</p>
<h4>Graphs of $x$, $v$, $a$ versus $t$</h4>
<svg class="fig" viewBox="0 0 350 310" width="350" role="img" aria-label="Three stacked graphs of x, v and a versus t for SHM starting at x equals A: x is cosine, v is negative sine, a is negative cosine, so v leads x by a quarter period and a is opposite to x">
<line x1="50" y1="5" x2="50" y2="300" stroke="currentColor"/>
<line x1="50" y1="52" x2="320" y2="52" stroke="currentColor" stroke-opacity=".6"/><polyline points="50.0,18.0 52.7,18.3 55.4,19.1 58.1,20.4 60.8,22.2 63.5,24.5 66.2,27.2 68.9,30.3 71.6,33.8 74.3,37.5 77.0,41.5 79.7,45.6 82.4,49.9 85.1,54.1 87.8,58.4 90.5,62.5 93.2,66.5 95.9,70.2 98.6,73.7 101.3,76.8 104.0,79.5 106.7,81.8 109.4,83.6 112.1,84.9 114.8,85.7 117.5,86.0 120.2,85.7 122.9,84.9 125.6,83.6 128.3,81.8 131.0,79.5 133.7,76.8 136.4,73.7 139.1,70.2 141.8,66.5 144.5,62.5 147.2,58.4 149.9,54.1 152.6,49.9 155.3,45.6 158.0,41.5 160.7,37.5 163.4,33.8 166.1,30.3 168.8,27.2 171.5,24.5 174.2,22.2 176.9,20.4 179.6,19.1 182.3,18.3 185.0,18.0 187.7,18.3 190.4,19.1 193.1,20.4 195.8,22.2 198.5,24.5 201.2,27.2 203.9,30.3 206.6,33.8 209.3,37.5 212.0,41.5 214.7,45.6 217.4,49.9 220.1,54.1 222.8,58.4 225.5,62.5 228.2,66.5 230.9,70.2 233.6,73.7 236.3,76.8 239.0,79.5 241.7,81.8 244.4,83.6 247.1,84.9 249.8,85.7 252.5,86.0 255.2,85.7 257.9,84.9 260.6,83.6 263.3,81.8 266.0,79.5 268.7,76.8 271.4,73.7 274.1,70.2 276.8,66.5 279.5,62.5 282.2,58.4 284.9,54.1 287.6,49.9 290.3,45.6 293.0,41.5 295.7,37.5 298.4,33.8 301.1,30.3 303.8,27.2 306.5,24.5 309.2,22.2 311.9,20.4 314.6,19.1 317.3,18.3 320.0,18.0" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="10" y="56">x</text><text x="326" y="56">t</text><line x1="50" y1="155" x2="320" y2="155" stroke="currentColor" stroke-opacity=".6"/><polyline points="50.0,155.0 52.7,159.3 55.4,163.5 58.1,167.5 60.8,171.4 63.5,175.0 66.2,178.3 68.9,181.2 71.6,183.7 74.3,185.8 77.0,187.3 79.7,188.4 82.4,188.9 85.1,188.9 87.8,188.4 90.5,187.3 93.2,185.8 95.9,183.7 98.6,181.2 101.3,178.3 104.0,175.0 106.7,171.4 109.4,167.5 112.1,163.5 114.8,159.3 117.5,155.0 120.2,150.7 122.9,146.5 125.6,142.5 128.3,138.6 131.0,135.0 133.7,131.7 136.4,128.8 139.1,126.3 141.8,124.2 144.5,122.7 147.2,121.6 149.9,121.1 152.6,121.1 155.3,121.6 158.0,122.7 160.7,124.2 163.4,126.3 166.1,128.8 168.8,131.7 171.5,135.0 174.2,138.6 176.9,142.5 179.6,146.5 182.3,150.7 185.0,155.0 187.7,159.3 190.4,163.5 193.1,167.5 195.8,171.4 198.5,175.0 201.2,178.3 203.9,181.2 206.6,183.7 209.3,185.8 212.0,187.3 214.7,188.4 217.4,188.9 220.1,188.9 222.8,188.4 225.5,187.3 228.2,185.8 230.9,183.7 233.6,181.2 236.3,178.3 239.0,175.0 241.7,171.4 244.4,167.5 247.1,163.5 249.8,159.3 252.5,155.0 255.2,150.7 257.9,146.5 260.6,142.5 263.3,138.6 266.0,135.0 268.7,131.7 271.4,128.8 274.1,126.3 276.8,124.2 279.5,122.7 282.2,121.6 284.9,121.1 287.6,121.1 290.3,121.6 293.0,122.7 295.7,124.2 298.4,126.3 301.1,128.8 303.8,131.7 306.5,135.0 309.2,138.6 311.9,142.5 314.6,146.5 317.3,150.7 320.0,155.0" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="10" y="159">v</text><text x="326" y="159">t</text><line x1="50" y1="258" x2="320" y2="258" stroke="currentColor" stroke-opacity=".6"/><polyline points="50.0,292.0 52.7,291.7 55.4,290.9 58.1,289.6 60.8,287.8 63.5,285.5 66.2,282.8 68.9,279.7 71.6,276.2 74.3,272.5 77.0,268.5 79.7,264.4 82.4,260.1 85.1,255.9 87.8,251.6 90.5,247.5 93.2,243.5 95.9,239.8 98.6,236.3 101.3,233.2 104.0,230.5 106.7,228.2 109.4,226.4 112.1,225.1 114.8,224.3 117.5,224.0 120.2,224.3 122.9,225.1 125.6,226.4 128.3,228.2 131.0,230.5 133.7,233.2 136.4,236.3 139.1,239.8 141.8,243.5 144.5,247.5 147.2,251.6 149.9,255.9 152.6,260.1 155.3,264.4 158.0,268.5 160.7,272.5 163.4,276.2 166.1,279.7 168.8,282.8 171.5,285.5 174.2,287.8 176.9,289.6 179.6,290.9 182.3,291.7 185.0,292.0 187.7,291.7 190.4,290.9 193.1,289.6 195.8,287.8 198.5,285.5 201.2,282.8 203.9,279.7 206.6,276.2 209.3,272.5 212.0,268.5 214.7,264.4 217.4,260.1 220.1,255.9 222.8,251.6 225.5,247.5 228.2,243.5 230.9,239.8 233.6,236.3 236.3,233.2 239.0,230.5 241.7,228.2 244.4,226.4 247.1,225.1 249.8,224.3 252.5,224.0 255.2,224.3 257.9,225.1 260.6,226.4 263.3,228.2 266.0,230.5 268.7,233.2 271.4,236.3 274.1,239.8 276.8,243.5 279.5,247.5 282.2,251.6 284.9,255.9 287.6,260.1 290.3,264.4 293.0,268.5 295.7,272.5 298.4,276.2 301.1,279.7 303.8,282.8 306.5,285.5 309.2,287.8 311.9,289.6 314.6,290.9 317.3,291.7 320.0,292.0" fill="none" stroke="currentColor" stroke-width="2.2"/><text x="10" y="262">a</text><text x="326" y="262">t</text>
<line x1="50" y1="12" x2="50" y2="298" stroke="currentColor"/>
<line x1="117.5" y1="8" x2="117.5" y2="300" stroke="currentColor" stroke-dasharray="3 4" stroke-opacity=".5"/><line x1="185" y1="8" x2="185" y2="300" stroke="currentColor" stroke-dasharray="3 4" stroke-opacity=".5"/>
<text x="56" y="14">A</text><text x="56" y="116">−Aω</text><text x="120" y="200">v max when x = 0</text><text x="190" y="284">a = −ω²x</text></svg>
<p>For $x=A\cos\omega t$: $v=-A\omega\sin\omega t$ and $a=-A\omega^2\cos\omega t$. Read them off each other with calculus: $v$ is the slope of $x$, $a$ is the slope of $v$.</p>
<ul>
<li>When $|x|$ is max ($x=\pm A$): $v=0$ (flat tangent) and $|a|$ is max.</li>
<li>When $x=0$: $|v|$ is max (steepest slope) and $a=0$.</li>
<li>$a$ is always opposite in sign to $x$: the graph of $a$ is the graph of $x$ flipped, scaled by $\omega^2$.</li>
<li>$v$ is shifted a quarter period relative to $x$ ("$v$ leads $x$ by $90^\circ$"). With the cosine convention $v$ peaks a quarter period <i>before</i> $x$ peaks.</li>
</ul>
<div class="box trap"><b>Trap:</b> "At equilibrium the acceleration is zero, so the block is at rest" is false: $a=0$ at $x=0$ but the speed is maximal. And at the turning point $v=0$ but the acceleration is maximal, not zero.</div>`},
  {id:"l4", title:"Combining springs, and damping", videos:[{title:"Search: springs in series and parallel effective spring constant",url:"https://www.youtube.com/results?search_query=springs+in+series+and+parallel+effective+spring+constant",src:"YouTube search",note:"Derivation of k_eff in both cases."},{title:"Search: damped harmonic oscillator underdamped critically damped overdamped",url:"https://www.youtube.com/results?search_query=damped+harmonic+oscillator+underdamped+critically+damped+overdamped",src:"YouTube search",note:"Qualitative envelope and period change."}], html:String.raw`
<h4>Springs in parallel and series</h4>
<p>Replace any combination by one <b>effective spring constant</b> $k_{\rm eff}$ such that the combined force is $-k_{\rm eff}x$ when the block is displaced $x$.</p>
<ul>
<li><b>Parallel</b> (both springs attached to the same block and wall, so both stretch by the same $x$): the forces add, $F=-(k_1+k_2)x$, so $k_{\rm eff}=k_1+k_2$. Stiffer.</li>
<li><b>Series</b> (end to end): the same force $F$ passes through both, but the stretches add, $x=F/k_1+F/k_2$, so $\dfrac1{k_{\rm eff}}=\dfrac1{k_1}+\dfrac1{k_2}$. Softer than either spring alone.</li>
</ul>
<svg class="fig" viewBox="0 0 340 170" width="340" role="img" aria-label="Two springs in parallel (both attached to the same wall and block) and two springs in series (end to end)">
<line x1="20" y1="25" x2="20" y2="65" stroke="currentColor" stroke-width="3"/>
<polyline points="20,35 32,42 43,28 54,42 66,28 77,42 88,28 100,35" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="20,55 32,62 43,48 54,62 66,48 77,62 88,48 100,55" fill="none" stroke="currentColor" stroke-width="1.6"/>
<rect x="100" y="20" width="36" height="50" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="2"/>
<text x="150" y="50">parallel: k = k₁ + k₂</text>
<line x1="20" y1="110" x2="20" y2="150" stroke="currentColor" stroke-width="3"/>
<polyline points="20,130 31,137 40,123 50,137 59,123 70,130" fill="none" stroke="currentColor" stroke-width="1.6"/><polyline points="70,130 81,137 90,123 100,137 109,123 120,130" fill="none" stroke="currentColor" stroke-width="1.6"/>
<rect x="120" y="108" width="36" height="44" fill="currentColor" fill-opacity=".15" stroke="currentColor" stroke-width="2"/>
<text x="170" y="134">series: 1/k = 1/k₁ + 1/k₂</text><text x="36" y="118">k₁</text><text x="86" y="118">k₂</text><text x="50" y="22">k₁</text></svg>
<p>Sanity check: cutting a spring of constant $k$ in half gives two springs in series that must reproduce $k$; so each half has constant $2k$. A shorter spring is stiffer.</p>
<p>A block between two springs on opposite sides (each attached to a wall, block in the middle) is the parallel case: displacing the block stretches one and compresses the other, and both push the same way, so $k_{\rm eff}=k_1+k_2$.</p>
<h4>Damping (qualitative)</h4>
<p>Real oscillators lose energy to friction or drag. Add a force proportional to velocity, $-b\dot x$ ($b>0$), to the spring model:</p>
$$m\ddot x=-kx-b\dot x.$$
<p>This is a linear ODE you can solve with $x=e^{st}$ (you did this in your ODE course). The behavior depends on the size of $b$:</p>
<ul>
<li><b>Underdamped</b> (small $b$): $x(t)=Ae^{-bt/2m}\cos(\omega't+\varphi)$ with $\omega'=\sqrt{\omega^2-(b/2m)^2}$. It still oscillates, the amplitude shrinks <i>exponentially</i> inside an envelope $\pm Ae^{-bt/2m}$, and the period is very slightly <i>longer</i> than undamped.</li>
<li><b>Critically damped</b>: returns to equilibrium as fast as possible without oscillating (used in door closers and car shock absorbers).</li>
<li><b>Overdamped</b>: returns slowly without oscillating, like moving through honey.</li>
</ul>
<p>Since $E\propto A^2$, the mechanical energy of a lightly damped oscillator decays like $e^{-bt/m}$: each cycle loses the same <i>fraction</i> of its energy, not the same amount. The lost energy becomes thermal energy. To keep a damped oscillator going, a <b>driving force</b> can feed energy in; driving near $\omega$ produces <b>resonance</b>, a large amplitude response. The AP typically treats both qualitatively; quantitative versions appear in the extension lesson below.</p>
<div class="box key"><b>Summary of what changes with damping:</b> amplitude falls with time, energy falls with time, period grows slightly. The equilibrium position does not move.</div>`},
  {id:"l5", title:"The energy method, composite systems, and when a block slips", videos:[{title:"Search: energy method find angular frequency spring massive pulley effective mass AP Physics C",url:"https://www.youtube.com/results?search_query=energy+method+angular+frequency+spring+massive+pulley+effective+mass+physics",src:"YouTube search",note:"Look for dE/dt = 0 applied to a spring with a pulley or rolling cylinder."},{title:"Search: block on oscillating platform maximum amplitude before slipping or losing contact",url:"https://www.youtube.com/results?search_query=block+on+oscillating+platform+maximum+amplitude+before+slipping+SHM",src:"YouTube search",note:"Condition A omega^2 = mu g (slipping) and A omega^2 = g (losing contact)."}], html:String.raw`
<p>Newton's second law is not always the quickest way to find $\omega$. When pulleys, rolling bodies or several masses are involved, <b>energy</b> is a scalar and needs no free-body diagrams for every piece.</p>
<h4>Method: differentiate the energy</h4>
<p>If the only forces doing work are conservative (spring, gravity) and the system has one coordinate $x$, then $E=K+U$ is constant. Write it in the form</p>
$$E=\tfrac12M_{\rm eff}\,\dot x^2+\tfrac12k_{\rm eff}\,x^2\ (+\text{const}),$$
<p>where $x$ is measured from <i>equilibrium</i>. Setting $dE/dt=0$ gives $M_{\rm eff}\dot x\ddot x+k_{\rm eff}x\dot x=0$, so after cancelling $\dot x$:</p>
$$\ddot x=-\frac{k_{\rm eff}}{M_{\rm eff}}\,x\ \Rightarrow\ \omega=\sqrt{\frac{k_{\rm eff}}{M_{\rm eff}}}.$$
<p>All the work is in finding $M_{\rm eff}$: add up the kinetic energies of every moving piece, expressed through the one velocity $\dot x$.</p>
<ul>
<li><b>Massive pulley.</b> A string with speed $v$ rolls a pulley (moment of inertia $I$, radius $R$) without slipping, so $\omega_{\rm pulley}=v/R$ and its kinetic energy is $\tfrac12I(v/R)^2=\tfrac12(I/R^2)v^2$. The pulley acts like an extra mass $I/R^2$ moving at the string speed. For a uniform disk, $I/R^2=M_p/2$. This is the reason an ideal (massless) pulley is an approximation that overestimates $\omega$.</li>
<li><b>Rolling cylinder on a spring.</b> A solid cylinder (mass $m$, $I=\tfrac12mR^2$) rolling without slipping has $K=\tfrac12mv^2+\tfrac12(\tfrac12mR^2)(v/R)^2=\tfrac34mv^2$, so $M_{\rm eff}=\tfrac32m$. Rolling is slower than sliding because some of the energy goes into rotation.</li>
<li><b>Vertical spring.</b> The stored energy is $U=\tfrac12k(\Delta+y)^2-mgy$ with $k\Delta=mg$. Expanding: $U=\tfrac12k\Delta^2+k\Delta y+\tfrac12ky^2-mgy=\text{const}+\tfrac12ky^2$. The linear terms cancel exactly, so about the shifted equilibrium the total potential energy is just $\tfrac12ky^2$: gravity is absorbed into the choice of origin. This is why energy bookkeeping about the equilibrium point looks identical to the horizontal case.</li>
</ul>
<div class="box key"><b>Check:</b> the energy method must agree with the force method. For a mass $m$ on a spring plus a hanging mass $m_2$ joined by a string over a disk pulley of mass $M_p$, the effective mass is $m+m_2+M_p/2$, and the hanging weight $m_2g$ only moves the equilibrium.</div>
<h4>Two blocks: when does the top one slip or leave?</h4>
<p>A second body riding on an oscillator is carried along only by a force it can actually get. Its acceleration is whatever the oscillator's is, $a=-\omega^2x$, with largest size $A\omega^2$.</p>
<ul>
<li><b>Horizontal (friction supplies the force).</b> Block $m$ rests on a platform that oscillates horizontally. The only horizontal force on $m$ is static friction, and it must provide $ma$. Friction is limited to $\mu_smg$, so the block rides along if $m A\omega^2\le\mu_smg$:
$$A_{\max}=\frac{\mu_sg}{\omega^2}.$$ Beyond this amplitude it slips at the extremes of the motion, where $|a|$ is largest.</li>
<li><b>Vertical (the normal force supplies it).</b> Block $m$ on a platform that oscillates up and down. Taking up as positive, $N-mg=ma$, so $N=m(g+a)$. The smallest $N$ occurs when the acceleration is most negative (downward), at the top of the motion where $a=-A\omega^2$: $N=m(g-A\omega^2)$. Contact is lost when $N\to0$:
$$A_{\max}=\frac{g}{\omega^2}.$$ Beyond this, the platform accelerates down faster than free fall and the block lifts off near the top.</li>
</ul>
<p>For a block resting on another block that is itself on a spring (both on a frictionless table), the whole stack oscillates with $\omega=\sqrt{k/(M+m)}$, so the top block needs friction $m\,|a|$, and slipping starts when $A\omega^2=\mu_sg$ for the combined $\omega$, i.e. $A_{\max}=\mu_sg(M+m)/k$.</p>
<div class="box trap"><b>Trap:</b> in the stacked case use the <i>total</i> mass in $\omega$ (the spring accelerates both), but only the <i>top</i> block's own mass cancels in the friction condition. Using $M$ alone for the stack gives an amplitude that is too small.</div>`},
  {id:"l6", title:"Extension: reference circle, phase, time-to-position, torsion, and potentials", extra:true, videos:[{title:"Search: simple harmonic motion reference circle projection of uniform circular motion",url:"https://www.youtube.com/results?search_query=simple+harmonic+motion+reference+circle+projection+uniform+circular+motion",src:"YouTube search",note:"Why SHM is the shadow of circular motion."}], html:String.raw`
<h4>SHM is the shadow of circular motion</h4>
<p>A point moving on a circle of radius $A$ with constant angular speed $\omega$, at angle $\omega t+\varphi$ from the $+x$ axis, has $x$-coordinate $A\cos(\omega t+\varphi)$ and $y$-coordinate $A\sin(\omega t+\varphi)$. Each coordinate on its own is exactly SHM. The circle is the <b>reference circle</b> (or phasor diagram) and the angle $\omega t+\varphi$ is the <b>phase</b>.</p>
<svg class="fig" viewBox="0 0 340 200" width="340" role="img" aria-label="Reference circle of radius A: a point P moves counterclockwise at angular speed omega; its projection on the horizontal axis is x equals A cos of omega t plus phi">
<circle cx="110" cy="100" r="60" fill="none" stroke="currentColor" stroke-width="1.6"/>
<line x1="30" y1="100" x2="270" y2="100" stroke="currentColor" stroke-opacity=".6"/><line x1="110" y1="20" x2="110" y2="180" stroke="currentColor" stroke-opacity=".3"/>
<line x1="110" y1="100" x2="156" y2="61.4" stroke="currentColor" stroke-width="2.2"/><circle cx="156" cy="61.4" r="5" fill="currentColor"/>
<line x1="156" y1="61.4" x2="156" y2="100" stroke="currentColor" stroke-dasharray="3 3"/><circle cx="156" cy="100" r="4" fill="currentColor" fill-opacity=".5" stroke="currentColor"/>
<path d="M 138,100 A 28 28 0 0 0 131.5,82" fill="none" stroke="currentColor"/><text x="142" y="92">ωt+φ</text>
<text x="160" y="56">P</text><text x="128" y="118">x</text><text x="260" y="116">x</text><text x="170" y="170">A</text><text x="190" y="30">P moves at ω</text><text x="190" y="46">shadow on axis: SHM</text></svg>
<p>The velocity of $P$ is $A\omega$ tangent to the circle, and its $x$-component is $-A\omega\sin(\omega t+\varphi)$, which is $v_x$ of the oscillator. The centripetal acceleration $A\omega^2$ points at the center and has $x$-component $-A\omega^2\cos(\omega t+\varphi)=-\omega^2x$. The period of SHM is the period of the circle, $T=2\pi/\omega$. Two uses:</p>
<ul>
<li><b>Phase differences.</b> If oscillator 2 has phase $\varphi_2=\varphi_1-\pi/2$, its point trails by a quarter turn: it reaches each position a quarter period (T/4) <i>after</i> oscillator 1. A positive phase constant means the oscillator is <i>ahead</i> (it starts partway through the cycle).</li>
<li><b>Time-to-position.</b> The time between two positions is the angle swept divided by $\omega$. From $x=A$ (angle $0$) to $x=A/2$: $\cos\theta=\tfrac12$, $\theta=\pi/3$, so $t=\dfrac{\pi/3}{\omega}=\dfrac T6$. From $x=A/2$ on to $x=0$ takes $\pi/6$ of angle, $T/12$. The oscillator spends more time near the turning points (where it is slow) than near the center.</li>
</ul>
<h4>Reading phase from a graph</h4>
<p>If $x(0)=0$ and $x$ is increasing, the oscillator is at the bottom of the reference circle moving right, which is $\varphi=-\pi/2$ ($x=A\cos(\omega t-\pi/2)=A\sin\omega t$). If $x(0)=0$ and decreasing, $\varphi=+\pi/2$. If $x(0)=-A$, $\varphi=\pi$. Always check with the sign of $v(0)=-A\omega\sin\varphi$.</p>
<h4>Rotational SHM: the torsion pendulum</h4>
<p>A disk hung on a wire twists through angle $\theta$, and the wire exerts a restoring torque $\tau=-\kappa\theta$ ($\kappa$ is the <b>torsion constant</b>, N m/rad). Then $I\ddot\theta=-\kappa\theta$:</p>
$$\omega=\sqrt{\frac{\kappa}{I}},\qquad T=2\pi\sqrt{\frac I\kappa}.$$
<p>No small-angle approximation is needed here, only that the wire stays within its elastic range. Same pattern: spring constant becomes $\kappa$, mass becomes $I$.</p>
<h4>SHM from a potential energy curve</h4>
<p>Near a stable minimum $x_0$ of $U(x)$, $U\approx U_0+\tfrac12U''(x_0)(x-x_0)^2$, so $k_{\rm eff}=U''(x_0)$ and $\omega=\sqrt{U''(x_0)/m}$. Example (a diatomic-molecule model): $U=U_0\left[(r_0/x)^{12}-2(r_0/x)^6\right]$ has its minimum at $x=r_0$ with
$$U''(r_0)=U_0\left[\frac{156}{r_0^2}-\frac{84}{r_0^2}\right]=\frac{72U_0}{r_0^2},$$
so a small oscillation has $\omega=\sqrt{72U_0/(mr_0^2)}$. (First derivative: $U'=U_0[-12r_0^{12}x^{-13}+12r_0^6x^{-7}]$, zero at $x=r_0$, confirming the minimum.)</p>
<div class="box key"><b>Time-averages.</b> Over a full cycle, the average of $\sin^2$ or $\cos^2$ is $\tfrac12$, so the <i>time-averaged</i> kinetic and potential energies are each $\tfrac12E=\tfrac14kA^2$. (They are not equal at every instant, only on average.)</div>`},
  {id:"l7", title:"Extension: damped and driven oscillators with numbers", extra:true, videos:[{title:"Forced Oscillations with Damping, Destructive Resonance (8.03, Lecture 3)",url:"https://opencw.aprende.org/courses/physics/8-03-physics-iii-vibrations-and-waves-fall-2004/video-lectures/lecture-3",src:"MIT OCW 8.03 (Walter Lewin)",note:"Driven damped oscillator and resonance; the ODE treatment matches this lesson."},{title:"Search: damped driven harmonic oscillator resonance amplitude phase Q factor",url:"https://www.youtube.com/results?search_query=damped+driven+harmonic+oscillator+resonance+amplitude+phase+Q+factor",src:"YouTube search",note:"Steady-state amplitude and the phase swing through 90 degrees."}], html:String.raw`
<h4>Damped: the numbers</h4>
<p>Write the damped equation as $\ddot x+\gamma\dot x+\omega_0^2x=0$ with $\gamma=b/m$ and $\omega_0=\sqrt{k/m}$. Try $x=e^{st}$: $s^2+\gamma s+\omega_0^2=0$, so $s=-\tfrac\gamma2\pm\sqrt{\tfrac{\gamma^2}4-\omega_0^2}$.</p>
<ul>
<li>$\gamma&lt;2\omega_0$: <b>underdamped</b>. $x=Ae^{-\gamma t/2}\cos(\omega't+\varphi)$ with $\omega'=\sqrt{\omega_0^2-\gamma^2/4}$.</li>
<li>$\gamma=2\omega_0$: <b>critical damping</b> (a repeated root, $x=(C+Dt)e^{-\gamma t/2}$).</li>
<li>$\gamma&gt;2\omega_0$: <b>overdamped</b>, two decaying exponentials, no oscillation.</li>
</ul>
<p>The amplitude falls by $1/e$ in time $2/\gamma=2m/b$. Since $E\propto A^2$, the energy falls by $1/e$ in $\tau_E=1/\gamma=m/b$. The <b>quality factor</b> is $Q=\omega_0/\gamma=\omega_0m/b$. For large $Q$ the fraction of energy lost per cycle is about $2\pi/Q$, and the oscillator rings for about $Q/\pi$ cycles before its amplitude falls by $1/e$.</p>
<h4>Driven: resonance</h4>
<p>Now add a sinusoidal driving force $F_0\cos\omega t$ at a frequency $\omega$ you choose. With $f_0=F_0/m$:</p>
$$\ddot x+\gamma\dot x+\omega_0^2x=f_0\cos\omega t.$$
<p>The homogeneous (damped) part dies out like $e^{-\gamma t/2}$; what remains is the <b>steady state</b>, which oscillates at the <i>driving</i> frequency. Use a complex trick: $\cos\omega t=\mathrm{Re}\,e^{i\omega t}$, try $x=\mathrm{Re}\,[Ce^{i\omega t}]$, and substitute:</p>
$$(\omega_0^2-\omega^2+i\gamma\omega)\,C=f_0\ \Rightarrow\ |C|=\frac{f_0}{\sqrt{(\omega_0^2-\omega^2)^2+\gamma^2\omega^2}}.$$
<p>So $x_{ss}=A(\omega)\cos(\omega t-\delta)$ with</p>
$$A(\omega)=\frac{F_0/m}{\sqrt{(\omega_0^2-\omega^2)^2+\gamma^2\omega^2}},\qquad\tan\delta=\frac{\gamma\omega}{\omega_0^2-\omega^2}.$$
<ul>
<li>Very slow driving ($\omega\to0$): $A\to F_0/k$ (the static displacement), $\delta\to0$: the mass follows the force.</li>
<li>Very fast driving ($\omega\gg\omega_0$): $A\approx f_0/\omega^2\to0$, $\delta\to\pi$: the mass barely moves, and what motion there is is opposite to the force.</li>
<li>At $\omega=\omega_0$: $A=\dfrac{f_0}{\gamma\omega_0}=Q\,\dfrac{F_0}{k}$ and $\delta=\pi/2$ (the displacement lags the force by a quarter cycle, so the velocity is in phase with the force, which is why the driver does the most work). The peak amplitude is $Q$ times the static response.</li>
<li>The exact peak of $A(\omega)$ is at $\omega_r=\sqrt{\omega_0^2-\gamma^2/2}$, slightly below $\omega_0$; for light damping this is essentially $\omega_0$. The peak has a width of about $\gamma$, so higher $Q$ means a taller, narrower resonance.</li>
</ul>
<div class="box key"><b>Steady-state amplitude is independent of initial conditions.</b> The damped transient carries the initial data and then vanishes, leaving a motion set only by $F_0,\omega,k,m,b$. This is why a child on a swing pushed periodically settles into the push's rhythm.</div>
<p>The same equation governs the series RLC circuit in E&amp;M ($L\leftrightarrow m$, $R\leftrightarrow b$, $1/C\leftrightarrow k$), so this analysis is reused there.</p>`}
  ],
  examples:[
  {id:"x1", title:"Spring-block numbers", problem:String.raw`<p>A $0.50$ kg block on a frictionless table is attached to a spring with $k=200$ N/m. It is pulled to $x=+0.10$ m and released from rest at $t=0$. Find (a) $\omega$ and $T$, (b) the maximum speed and maximum acceleration, (c) the speed when $x=0.06$ m, and (d) $x(t)$.</p>`,
   solution:String.raw`<p>(a) $\omega=\sqrt{k/m}=\sqrt{200/0.5}=20$ rad/s, $T=2\pi/20\approx0.314$ s.</p>
<p>(b) $A=0.10$ m. $v_{\max}=A\omega=2.0$ m/s (at $x=0$). $a_{\max}=A\omega^2=40$ m/s² (at $x=\pm A$). Check: $kA/m=200(0.1)/0.5=40$.</p>
<p>(c) $v=\omega\sqrt{A^2-x^2}=20\sqrt{0.01-0.0036}=20(0.08)=1.6$ m/s. (Energy check: $\tfrac12(0.5)(1.6)^2+\tfrac12(200)(0.06)^2=0.64+0.36=1.0$ J $=\tfrac12(200)(0.1)^2$.)</p>
<p>(d) Released from rest at $+A$, so $\varphi=0$: $x(t)=0.10\cos(20t)$ m.</p>`},
  {id:"x2", title:"Amplitude and phase from initial conditions", problem:String.raw`<p>An oscillator has $\omega=10$ rad/s. At $t=0$ it is at $x=+0.030$ m moving with $v=+0.40$ m/s. Find the amplitude and write $x(t)=A\cos(\omega t+\varphi)$.</p>`,
   solution:String.raw`<p>$A=\sqrt{x_0^2+(v_0/\omega)^2}=\sqrt{0.03^2+0.04^2}=0.050$ m.</p>
<p>$x_0=A\cos\varphi\Rightarrow\cos\varphi=0.6$. $v_0=-A\omega\sin\varphi\Rightarrow\sin\varphi=-0.40/(0.05\times10)=-0.8$. Cosine positive and sine negative puts $\varphi$ in the fourth quadrant: $\varphi=-\arctan(0.8/0.6)=-0.927$ rad.</p>
<p>$x(t)=0.050\cos(10t-0.927)$ m. Sanity check: the block is moving toward $+x$ at $t=0$ so it has not yet reached the peak, which is why $\varphi<0$ (the cosine's argument is still negative, climbing toward zero).</p>`},
  {id:"x3", title:"Vertical spring", problem:String.raw`<p>A $2.0$ kg mass hangs at rest from a vertical spring and stretches it $0.25$ m. It is then pulled down an additional $0.10$ m and released from rest. Use $g=10$ m/s². Find $k$, the period, and the maximum speed. How would the period change on the Moon?</p>`,
   solution:String.raw`<p>Equilibrium: $k\Delta=mg\Rightarrow k=20/0.25=80$ N/m.</p>
<p>$\omega=\sqrt{k/m}=\sqrt{40}=6.32$ rad/s (equivalently $\sqrt{g/\Delta}=\sqrt{10/0.25}=\sqrt{40}$). $T=2\pi/\omega=0.993\approx1.0$ s.</p>
<p>Amplitude is the extra stretch from equilibrium, $A=0.10$ m, so $v_{\max}=A\omega=0.632$ m/s.</p>
<p>On the Moon the static stretch would shrink (weaker $g$), but $\omega=\sqrt{k/m}$ has no $g$ in it. The period is unchanged.</p>`},
  {id:"x4", title:"A rod as a physical pendulum", problem:String.raw`<p>A uniform rod of length $1.2$ m and mass $m$ hangs from a frictionless pivot at one end and swings through small angles. Find its period, and the length of a simple pendulum with the same period. ($I_{\rm end}=\tfrac13mL^2$, $g=10$ m/s².)</p>`,
   solution:String.raw`<p>$d=L/2=0.6$ m. $T=2\pi\sqrt{\dfrac{I}{mgd}}=2\pi\sqrt{\dfrac{\tfrac13L^2}{g(L/2)}}=2\pi\sqrt{\dfrac{2L}{3g}}=2\pi\sqrt{\dfrac{2(1.2)}{30}}=2\pi\sqrt{0.08}\approx1.78$ s.</p>
<p>A simple pendulum with $T=2\pi\sqrt{L_{\rm eq}/g}$ matches when $L_{\rm eq}=\tfrac23L=0.80$ m. (A simple pendulum of the full $1.2$ m would take $2.18$ s.)</p>`},
  {id:"x5", title:"Spring, string and a massive pulley (energy method)", problem:String.raw`<p>A $2.0$ kg block rests on a frictionless table. A spring ($k=120$ N/m) joins it to a fixed wall on one side. On the other side a light string runs over a pulley at the table's edge to a $1.0$ kg mass hanging freely. The pulley is a uniform disk of mass $1.0$ kg and radius $0.10$ m, and the string does not slip on it. Use $g=10$ m/s². (a) How far is the spring stretched at equilibrium? (b) Find $\omega$ and $T$ for small oscillations. (c) The system is displaced $0.050$ m from equilibrium and released from rest. Find the maximum speed of the block, and show the string stays taut.</p>`,
   solution:String.raw`<p>(a) At equilibrium the hanging weight is balanced through the string by the spring: $kx_0=m_2g\Rightarrow x_0=10/120=0.083$ m.</p>
<p>(b) Let $x$ be the block's displacement from equilibrium; every moving piece has speed $v=\dot x$. Energy about equilibrium (gravity on $m_2$ just shifts the origin, as for a vertical spring):
$$E=\tfrac12(m_1+m_2)v^2+\tfrac12I\left(\tfrac vR\right)^2+\tfrac12kx^2=\tfrac12\left(m_1+m_2+\tfrac{M_p}{2}\right)v^2+\tfrac12kx^2.$$
So $M_{\rm eff}=2.0+1.0+0.5=3.5$ kg and $\omega^2=120/3.5=34.3$ s⁻², $\omega=5.86$ rad/s, $T=2\pi/\omega=1.07$ s. (Ignoring the pulley's inertia would give $T=0.99$ s.)</p>
<p>(c) $v_{\max}=A\omega=0.050(5.855)=0.293$ m/s. Maximum acceleration $A\omega^2=0.050(34.3)=1.71$ m/s². The hanging mass has $m_2g-T_2=m_2a$, so $T_2=m_2(g-a)\ge1.0(10-1.71)=8.3$ N, always positive: the string stays taut. (It would go slack only if $A\omega^2$ exceeded $g$.)</p>`},
  {id:"x6", title:"When does the block slip or leave the platform?", problem:String.raw`<p>A small block rests on a platform. $g=10$ m/s². (a) The platform oscillates <i>horizontally</i> with frequency $1.5$ Hz; the coefficient of static friction is $0.40$. Find the largest amplitude for which the block does not slip. (b) The platform instead oscillates <i>vertically</i> with frequency $2.0$ Hz. Find the largest amplitude for which the block stays in contact, and say where in the cycle contact is lost.</p>`,
   solution:String.raw`<p>(a) $\omega=2\pi(1.5)=9.42$ rad/s, $\omega^2=88.8$ s⁻². The block's acceleration is supplied by static friction, $m A\omega^2\le\mu_smg$, so $A_{\max}=\mu_sg/\omega^2=0.40(10)/88.8=0.045$ m $=4.5$ cm.</p>
<p>(b) $\omega=2\pi(2.0)=12.57$ rad/s, $\omega^2=157.9$ s⁻². Contact requires $N=m(g-A\omega^2)\ge0$ at the top of the motion (acceleration $A\omega^2$ downward). $A_{\max}=g/\omega^2=10/157.9=0.0633$ m $\approx6.3$ cm. If $A$ is bigger the block leaves the platform near the top of the motion, where the platform's downward acceleration first exceeds $g$, and it lands again later. Note that the mass of the block does not enter either answer.</p>`},
  {id:"x7", title:"How long does it take to get there?", problem:String.raw`<p>A block oscillates with amplitude $0.20$ m and period $1.2$ s, starting from rest at $x=+0.20$ m at $t=0$. (a) At what time is it first at $x=+0.10$ m? (b) What fraction of the period does it spend with $|x|&lt;0.10$ m? (c) What is its speed at that first time?</p>`,
   solution:String.raw`<p>(a) $x=A\cos\omega t$ with $\omega=2\pi/1.2=5.236$ rad/s. $0.10=0.20\cos\omega t\Rightarrow\omega t=\pi/3$, so $t=\dfrac{\pi/3}{5.236}=0.20$ s $=T/6$.</p>
<p>(b) $|x|&lt;A/2$ corresponds to phases within $\pi/3$ of $\pm\pi/2$ on the reference circle, i.e. an angle of $\pi/3$ ($\pi/6$ either side of $\pi/2$) per crossing, and there are two crossings per cycle. Total angle $2\pi/3$, so the fraction is $1/3$. The block spends a third of the time in the middle half of its range, two thirds in the outer half.</p>
<p>(c) $v=\omega\sqrt{A^2-x^2}=5.236\sqrt{0.04-0.01}=5.236(0.1732)=0.907$ m/s.</p>`},
  {id:"x8", title:"Damped and driven numbers", problem:String.raw`<p>A $0.50$ kg block on a spring ($k=200$ N/m) moves through a fluid with drag $-b\dot x$, $b=0.40$ kg/s. (a) Find $\omega_0$, $\omega'$ and the period of the damped motion. (b) How long until the amplitude falls to $1/e$ of its initial value, and how many oscillations is that? (c) How long until the energy falls to $1/e$? (d) Find $Q$. (e) The block is now driven by $F_0\cos\omega t$ with $F_0=2.0$ N at $\omega=\omega_0$. Find the steady-state amplitude and compare it with the static displacement $F_0/k$.</p>`,
   solution:String.raw`<p>(a) $\omega_0=\sqrt{200/0.5}=20.0$ rad/s. $\gamma=b/m=0.80$ s⁻¹, $\omega'=\sqrt{400-(0.40)^2}=19.996$ rad/s: the shift is only $0.02\%$. $T'=2\pi/\omega'=0.3142$ s.</p>
<p>(b) Amplitude $\propto e^{-\gamma t/2}$, so $t=2/\gamma=2.5$ s. Number of oscillations $=2.5/0.3142=7.96\approx8$.</p>
<p>(c) $E\propto A^2\propto e^{-\gamma t}$, so $\tau_E=1/\gamma=m/b=1.25$ s (half the amplitude time).</p>
<p>(d) $Q=\omega_0/\gamma=20/0.80=25$. Check: fractional energy lost per cycle $=1-e^{-\gamma T'}=0.222$, close to $2\pi/Q=0.251$ (the approximation is for large $Q$).</p>
<p>(e) At $\omega=\omega_0$: $A=\dfrac{F_0/m}{\gamma\omega_0}=\dfrac{4.0}{(0.80)(20)}=0.25$ m. The static displacement is $F_0/k=0.010$ m, so the resonant amplitude is $25$ times larger, which is exactly $Q$.</p>`}
  ],
  mcq:[
  {id:"q1", q:String.raw`<p>A block on a spring oscillates with period $T$. The mass of the block is quadrupled and the same spring is used. The new period is</p>`, choices:["$T/4$","$T/2$","$T$","$2T$","$4T$"], a:3,
   why:String.raw`<p>$T=2\pi\sqrt{m/k}\propto\sqrt m$, so quadrupling $m$ doubles $T$. The tempting "$4T$" treats $T$ as proportional to $m$; the square root is what matters.</p>`},
  {id:"q2", q:String.raw`<p>A particle obeys $\dfrac{d^2x}{dt^2}=-25x$ (SI units). At $t=0$ it is at $x=0.20$ m at rest. What is the magnitude of its maximum acceleration?</p>`, choices:["$1.0$ m/s²","$4.0$ m/s²","$5.0$ m/s²","$25$ m/s²","$125$ m/s²"], a:2,
   why:String.raw`<p>$\omega^2=25$, $\omega=5$ rad/s; released from rest means $A=0.20$ m. $a_{\max}=A\omega^2=0.2(25)=5$ m/s². Multiplying by $\omega$ three times ($125$) or forgetting $A$ ($25$) are the usual slips.</p>`},
  {id:"q3", q:String.raw`<p>A mass on a spring undergoes SHM with total energy $E$. When the displacement is half the amplitude, the kinetic energy is</p>`, choices:["$E/4$","$E/2$","$3E/4$","$E$","$0$"], a:2,
   why:String.raw`<p>$U=\tfrac12k(A/2)^2=\tfrac14\cdot\tfrac12kA^2=E/4$, so $K=E-U=3E/4$. The tempting $E/2$ comes from assuming the energy is split evenly at the half-way <i>position</i>; it is split evenly at $x=A/\sqrt2$.</p>`},
  {id:"q4", q:String.raw`<p>A small-angle simple pendulum has period $T_0$ at rest in a classroom. It is now hung in an elevator that accelerates upward at $a=g$. The period is</p>`, choices:["$T_0/2$","$T_0/\\sqrt2$","$T_0$","$\\sqrt2\\,T_0$","$2T_0$"], a:1,
   why:String.raw`<p>In the accelerating frame the effective gravity is $g_{\rm eff}=g+a=2g$. Then $T=2\pi\sqrt{L/g_{\rm eff}}=T_0/\sqrt2$. Upward acceleration makes the bob feel heavier, so the period shortens, but only by $\sqrt2$, not $2$.</p>`},
  {id:"q5", q:String.raw`<p>Two identical springs, each with $k=100$ N/m, are connected end to end (series), and a $0.50$ kg block is attached to the free end and oscillates on a frictionless table. The period is closest to</p>`, choices:["0.31 s","0.44 s","0.63 s","0.89 s","1.26 s"], a:2,
   why:String.raw`<p>Series: $1/k_{\rm eff}=1/100+1/100$, so $k_{\rm eff}=50$ N/m. $T=2\pi\sqrt{0.5/50}=2\pi(0.1)=0.63$ s. Using $k=200$ (the parallel result) would give $0.31$ s; using a single spring gives $0.44$ s.</p>`},
  {id:"q6", q:String.raw`<p>For a block in SHM, at the instant it passes through the equilibrium position moving in the $+x$ direction, which statement is correct?</p>`, choices:["Its speed is maximum and its acceleration is zero","Its speed is zero and its acceleration is maximum","Its speed and acceleration are both maximum","Its speed and acceleration are both zero","Its speed is maximum and its acceleration points in the $+x$ direction"], a:0,
   why:String.raw`<p>At $x=0$, $F=-kx=0$ so $a=0$; all the energy is kinetic so the speed is maximum. Option "speed zero, acceleration maximum" describes the turning points, the case students swap in by mistake.</p>`},
  {id:"q7", q:String.raw`<p>A block hangs from a vertical spring and oscillates with period $T$ on Earth. The same setup is taken to the Moon, where $g$ is about one sixth as large. Compared with $T$, the period on the Moon is</p>`, choices:["about $T/6$","about $T/\\sqrt6$","$T$","about $\\sqrt6\\,T$","about $6T$"], a:2,
   why:String.raw`<p>$\omega=\sqrt{k/m}$ contains no $g$. Gravity only changes the equilibrium stretch ($mg/k$), not the restoring force per unit displacement from equilibrium. A <i>pendulum</i> would change, but a spring does not.</p>`},
  {id:"q8", q:String.raw`<p>A uniform disk of radius $R=0.40$ m hangs from a frictionless horizontal pin through a point on its rim, perpendicular to the disk, and swings with small amplitude. ($I_{\rm cm}=\tfrac12mR^2$, $g=10$ m/s².) Its period is closest to</p>`, choices:["1.26 s","1.54 s","1.78 s","2.18 s","2.51 s"], a:1,
   why:String.raw`<p>Parallel-axis: $I=\tfrac12mR^2+mR^2=\tfrac32mR^2$, $d=R$. $T=2\pi\sqrt{I/mgd}=2\pi\sqrt{3R/2g}=2\pi\sqrt{0.06}=1.54$ s. A simple pendulum of length $R$ would give $1.26$ s, which ignores that the mass is spread out.</p>`},
  {id:"q9", q:String.raw`<p>The amplitude of a block on a spring is doubled (same block, same spring). Which row correctly describes the new period and total mechanical energy compared with the originals?</p>`, choices:["period same, energy $\\times 4$","period same, energy $\\times 2$","period $\\times2$, energy $\\times4$","period $\\times2$, energy $\\times 2$","period same, energy same"], a:0,
   why:String.raw`<p>$T=2\pi\sqrt{m/k}$ is independent of amplitude. $E=\tfrac12kA^2\propto A^2$ so doubling $A$ quadruples $E$. The energy is not $\times2$ because it goes as the square of the amplitude.</p>`},
  {id:"q10", q:String.raw`<p>A block on a spring moves through a viscous fluid with a drag force $-b\dot x$ small enough that it still oscillates. Compared with the same system with no drag, which statement is correct?</p>`, choices:["The amplitude decays exponentially and the period is slightly longer","The amplitude decreases linearly and the period is unchanged","The amplitude is unchanged but the period is longer","The amplitude decays exponentially and the period is much shorter","The equilibrium position shifts toward the side where the block started"], a:0,
   why:String.raw`<p>For light damping $x=Ae^{-bt/2m}\cos(\omega't+\varphi)$ with $\omega'=\sqrt{\omega^2-(b/2m)^2}<\omega$, so the envelope is exponential and $T'$ is slightly larger. Drag $\propto v$ vanishes at rest, so it cannot move the equilibrium.</p>`},
  {id:"q11", q:String.raw`<p>An oscillator's position is $x(t)=A\cos(\omega t+\varphi)$. A graph shows that at $t=0$ the oscillator is at $x=0$ and is moving toward positive $x$. The phase constant is</p>`, choices:["$\\varphi=0$","$\\varphi=+\\pi/2$","$\\varphi=\\pi/4$","$\\varphi=-\\pi/2$","$\\varphi=\\pi$"], a:3,
   why:String.raw`<p>$x(0)=A\cos\varphi=0$ gives $\varphi=\pm\pi/2$. Then $v(0)=-A\omega\sin\varphi>0$ requires $\sin\varphi<0$, so $\varphi=-\pi/2$ (the curve is $A\sin\omega t$). The tempting $+\pi/2$ also has $x(0)=0$ but moves toward negative $x$.</p>`},
  {id:"q12", q:String.raw`<p>Oscillator 1 has $x_1=A\cos\omega t$ and oscillator 2 has $x_2=A\cos(\omega t-\pi/2)$, the same $A$ and $\omega$. Compared with oscillator 1, oscillator 2 reaches each of its maxima</p>`, choices:["a quarter period later", "a quarter period earlier", "at the same time", "half a period later", "an eighth of a period later"], a:0,
   why:String.raw`<p>$x_2$ is maximal when $\omega t-\pi/2=0$, i.e. $\omega t=\pi/2$, a quarter turn after $x_1$'s maximum at $\omega t=0$. A <i>minus</i> sign in the phase means the oscillator lags (is delayed); the tempting "earlier" reads the sign backward.</p>`},
  {id:"q13", q:String.raw`<p>A block in SHM has amplitude $A$ and period $T$ and is released from rest at $x=+A$. The time it takes to first reach $x=A/2$ is</p>`, choices:["$T/12$", "$T/6$", "$T/8$", "$T/4$", "$T/3$"], a:1,
   why:String.raw`<p>$\cos\omega t=\tfrac12\Rightarrow\omega t=\pi/3$, so $t=\dfrac{\pi/3}{2\pi/T}=T/6$. The reaction "half the distance should take half of the quarter period, $T/8$" fails because the block starts from rest and moves slowly near the turning point; it needs more than $T/8$. ($T/12$ is the time from $A/2$ to the center.)</p>`},
  {id:"q14", q:String.raw`<p>A small block rests on a horizontal platform that oscillates vertically in SHM with frequency $2.0$ Hz. Use $g=10$ m/s². The largest amplitude for which the block stays in contact with the platform is closest to</p>`, choices:["$0.0063$ m", "$0.016$ m", "$0.25$ m", "$0.063$ m", "$2.5$ m"], a:3,
   why:String.raw`<p>Contact is lost when the platform's downward acceleration $A\omega^2$ reaches $g$. $\omega=2\pi(2.0)=12.57$ rad/s, so $A=g/\omega^2=10/158=0.063$ m. Using $f=2.0$ directly in place of $\omega$ gives the tempting $2.5$ m; the block's mass does not matter.</p>`},
  {id:"q15", q:String.raw`<p>A solid cylinder of mass $m=2.0$ kg rolls without slipping on a horizontal table. Its axle is attached to a horizontal spring of constant $k=60$ N/m fixed to a wall. It is displaced slightly and released. The period of its oscillation is closest to</p>`, choices:["1.15 s", "1.28 s", "1.62 s", "2.03 s", "1.40 s"], a:4,
   why:String.raw`<p>Kinetic energy is $\tfrac12mv^2+\tfrac12(\tfrac12mR^2)(v/R)^2=\tfrac34mv^2$, so $M_{\rm eff}=\tfrac32m=3.0$ kg and $T=2\pi\sqrt{3.0/60}=1.40$ s. Treating it as a sliding block gives the tempting $1.15$ s (too short: it ignores the rotational energy). $1.62$ s would be $M_{\rm eff}=2m$.</p>`},
  {id:"q16", q:String.raw`<p>A uniform disk hangs from a wire and oscillates in torsion with period $T$. The disk is replaced by another uniform disk of the same mass but twice the radius ($I=\tfrac12mR^2$), on the same wire. The new period is</p>`, choices:["$2T$", "$T/2$", "$T/4$", "$T$", "$4T$"], a:0,
   why:String.raw`<p>$T=2\pi\sqrt{I/\kappa}$ and $I=\tfrac12mR^2$ increases by a factor of $4$, so $T$ doubles. The tempting $4T$ forgets the square root.</p>`},
  {id:"q17", q:String.raw`<p>A $0.50$ kg mass is attached to a vertical spring with $k=50$ N/m and released from rest while the spring is at its natural (unstretched) length. Use $g=10$ m/s². The maximum speed of the mass is</p>`, choices:["$1.0$ m/s", "$0.50$ m/s", "$0.71$ m/s", "$1.4$ m/s", "$2.0$ m/s"], a:0,
   why:String.raw`<p>The equilibrium is at stretch $mg/k=0.10$ m, so the motion has amplitude $A=0.10$ m about it and $\omega=\sqrt{50/0.5}=10$ rad/s, $v_{\max}=A\omega=1.0$ m/s. (Energy check: $mg(0.1)-\tfrac12k(0.1)^2=0.5-0.25=\tfrac12(0.5)v^2$ gives $v=1.0$.) The tempting $1.4$ m/s is the free-fall speed $\sqrt{2g(0.1)}$, which ignores the spring.</p>`},
  {id:"q18", q:String.raw`<p>A lightly damped oscillator has $m=0.50$ kg and $b=0.40$ kg/s. The time for its <i>mechanical energy</i> to fall to $1/e$ of its initial value is</p>`, choices:["$0.63$ s", "$2.5$ s", "$5.0$ s", "$1.25$ s", "$0.31$ s"], a:3,
   why:String.raw`<p>$E\propto A^2\propto e^{-bt/m}$, so $\tau_E=m/b=1.25$ s. The $2.5$ s answer is the time for the <i>amplitude</i> to fall by $1/e$ ($2m/b$); energy decays twice as fast.</p>`},
  {id:"q19", q:String.raw`<p>A lightly damped oscillator with quality factor $Q=25$ is driven by a force $F_0\cos\omega t$. The steady-state amplitude when $\omega$ equals the natural frequency, compared with the displacement $F_0/k$ produced by the same force applied statically, is about</p>`, choices:["the same", "25 times larger", "5 times larger", "50 times larger", "625 times larger"], a:1,
   why:String.raw`<p>At resonance $A=F_0/(m\gamma\omega_0)=Q\,F_0/k$, so the ratio is $Q=25$. The $625$ answer squares $Q$ (mixing up amplitude with energy).</p>`},
  {id:"q20", q:String.raw`<p>Two atoms interact with $U(x)=U_0\left[(r_0/x)^{12}-2(r_0/x)^6\right]$, minimum at $x=r_0$ where $U''(r_0)=72U_0/r_0^2$. One atom is fixed and the other (mass $m$) oscillates with small amplitude about $r_0$. With $U_0=1.0\times10^{-21}$ J, $r_0=3.0\times10^{-10}$ m and $m=1.0\times10^{-26}$ kg, its angular frequency is closest to</p>`, choices:["$3\\times10^{12}$ rad/s", "$1\\times10^{12}$ rad/s", "$9\\times10^{12}$ rad/s", "$9\\times10^{11}$ rad/s", "$3\\times10^{13}$ rad/s"], a:2,
   why:String.raw`<p>$k_{\rm eff}=72U_0/r_0^2=72(10^{-21})/(9\times10^{-20})=0.80$ N/m, so $\omega=\sqrt{0.80/10^{-26}}=8.9\times10^{12}$ rad/s. The frequency in hertz would be $1.4\times10^{12}$ Hz; do not report that as $\omega$.</p>`},
  {id:"q21", q:String.raw`<p>A block-spring oscillator has amplitude $A$. Averaged over one full period, its kinetic energy is</p>`, choices:["$\\tfrac12kA^2$","$\\tfrac14kA^2$","$\\tfrac{1}{2\\sqrt2}kA^2$","$\\tfrac18kA^2$","$0$"], a:1,
   why:String.raw`<p>$K=\tfrac12kA^2\sin^2(\omega t+\varphi)$ and the average of $\sin^2$ is $\tfrac12$, giving $\tfrac14kA^2=E/2$. The average of $K$ equals the average of $U$. $\tfrac12kA^2$ is the maximum kinetic energy, not its average.</p>`},
  {id:"q22", q:String.raw`<p>A $3.0$ kg block is attached to a spring of constant $200$ N/m on a frictionless table. A $1.0$ kg block rests on top of it; the coefficient of static friction between the blocks is $0.50$. Use $g=10$ m/s². The largest amplitude of oscillation for which the top block does not slip is</p>`, choices:["$0.075$ m", "$0.050$ m", "$0.025$ m", "$0.200$ m", "$0.100$ m"], a:4,
   why:String.raw`<p>Both blocks oscillate together with $\omega^2=k/(M+m)=50$ s⁻². The top block needs $m|a|_{\max}=mA\omega^2\le\mu_smg$, so $A_{\max}=\mu_sg/\omega^2=0.5(10)/50=0.100$ m (equivalently $\mu_sg(M+m)/k$). Using only the bottom block's mass in $\omega^2$ gives the tempting $0.075$ m.</p>`}
  ],
  frq:[
  {id:"f1", type:"Mathematical routines", title:"Rod with a spring: derive the equation of motion",
   prompt:String.raw`<p>A uniform rod of mass $M$ and length $L$ hangs from a frictionless horizontal pivot at its upper end and can swing in a vertical plane. A horizontal spring of constant $k$ connects the lower end of the rod to a vertical wall. The spring is at its natural length when the rod hangs vertically ($\theta=0$). The wall is to the right of the rod, and $\theta$ is positive when the lower end swings to the left, away from the wall (stretching the spring). The rod is displaced by a small angle $\theta$ and released. For small $\theta$, assume the spring stays horizontal. The moment of inertia of the rod about the pivot is $I=\tfrac13ML^2$.</p>
<p>(a) Draw a free-body diagram of the rod at angle $\theta$, showing the gravitational force, the spring force, and the pivot's location.<br>
(b) Write the net torque about the pivot as a function of $\theta$.<br>
(c) Show that for small angles $\ddot\theta=-\omega^2\theta$ and give $\omega^2$ in terms of $M$, $L$, $k$, $g$.<br>
(d) Justify the small-angle approximation: state which approximations you made and estimate the fractional error for $\theta=0.10$ rad.<br>
(e) For $M=2.0$ kg, $L=0.60$ m, $k=50$ N/m, $g=10$ m/s², find $\omega$ and $T$. If the rod is released from rest at $\theta=0.10$ rad, write $\theta(t)$ and find its maximum angular speed.<br>
(f) Explain physically, without algebra, why $\omega^2$ is larger than it would be with the spring removed.</p>`,
   pts:[
    {p:1,d:String.raw`FBD: weight $Mg$ at the center (distance $L/2$ from pivot), horizontal spring force $kL\sin\theta$ at the lower end directed back toward $\theta=0$, pivot force at the top`},
    {p:1,d:String.raw`Gravitational torque $-Mg\frac L2\sin\theta$ (restoring, correct moment arm)`},
    {p:1,d:String.raw`Spring torque $-kL\sin\theta\cdot L\cos\theta=-kL^2\sin\theta\cos\theta$ (force times vertical lever arm), with correct sign`},
    {p:1,d:String.raw`Uses $I\ddot\theta=\tau$ with $I=\frac13ML^2$ and sets $\sin\theta\approx\theta$, $\cos\theta\approx1$`},
    {p:1,d:String.raw`$\omega^2=\dfrac{3g}{2L}+\dfrac{3k}{M}$ and form $\ddot\theta=-\omega^2\theta$ identified as SHM`},
    {p:1,d:String.raw`Justifies: $\sin\theta\approx\theta$ and $\cos\theta\approx1$ (and spring stays horizontal); error $\theta^2/6\approx0.17\%$ for the gravity term ($\sin$) and about $\theta^2/6+\theta^2/2=2\theta^2/3\approx0.67\%$ for the spring term ($\sin\cos$)`},
    {p:1,d:String.raw`$\omega^2=25+75=100$, $\omega=10$ rad/s, $T=2\pi/\omega\approx0.63$ s; $\theta=0.10\cos(10t)$ rad, maximum angular speed $\theta_0\omega=1.0$ rad/s`},
    {p:1,d:String.raw`Explanation: the spring adds a second restoring torque that always opposes the displacement, increasing the torque per unit angle without changing $I$, so the oscillation is faster`}],
   solution:String.raw`<p>(a) Weight $Mg$ downward at the midpoint; spring force $F_s=kx=kL\sin\theta$ horizontal at the bottom, directed horizontally toward the wall, opposite to the displacement of the lower end (toward equilibrium); pivot force at the top (no torque about the pivot).</p>
<p>(b) Take $\theta$ positive in the direction the rod is displaced. Gravity: moment arm $\tfrac L2\sin\theta$, torque $-Mg\tfrac L2\sin\theta$. Spring: force $kL\sin\theta$ acting at height $L\cos\theta$ below the pivot, torque $-kL^2\sin\theta\cos\theta$. So $\tau=-\left(\tfrac{MgL}2+kL^2\cos\theta\right)\sin\theta$.</p>
<p>(c) $\tfrac13ML^2\ddot\theta=-\left(\tfrac{MgL}2+kL^2\right)\theta$ for small $\theta$, so
$$\ddot\theta=-\left(\frac{3g}{2L}+\frac{3k}{M}\right)\theta\quad\Rightarrow\quad\omega^2=\frac{3g}{2L}+\frac{3k}{M}.$$</p>
<p>(d) Taylor: $\sin\theta\approx\theta-\theta^3/6$ (fractional error $\theta^2/6=0.17\%$ at 0.10 rad) and $\cos\theta\approx1-\theta^2/2$ (0.5%). The spring torque is $kL^2\sin\theta\cos\theta=\tfrac12kL^2\sin2\theta$, so its fractional error is about $\theta^2/6+\theta^2/2=2\theta^2/3=0.67\%$ (gravity term 0.17%), giving roughly 0.6% in $\omega^2$. The spring is assumed to remain horizontal. All tiny, so the ODE is linear to good accuracy.</p>
<p>(e) $\omega^2=\dfrac{3(10)}{2(0.6)}+\dfrac{3(50)}{2.0}=25+75=100$ s⁻², so $\omega=10$ rad/s, $T=0.628$ s. $\theta(t)=0.10\cos(10t)$ rad, $\dot\theta_{\max}=0.10(10)=1.0$ rad/s.</p>
<p>(f) With the spring, a displacement produces two restoring torques instead of one. A larger torque per unit angle with the same rotational inertia gives larger angular acceleration, so the oscillation is faster. With $k=0$ the result reduces to the uniform-rod pendulum, $\omega^2=3g/2L$.</p>`},
  {id:"f2", type:"Experimental design & analysis", title:"Measuring g with a pendulum",
   prompt:String.raw`<p>A student measures the period of a simple pendulum for different lengths. The length $L$ is measured from the pivot to the <i>top</i> of a spherical bob whose radius is about 2 cm. Each period is the time for 10 swings divided by 10, with amplitude under $10^\circ$.</p>
<table><tr><th>$L$ (m)</th><td>0.200</td><td>0.400</td><td>0.600</td><td>0.800</td><td>1.000</td></tr>
<tr><th>$T$ (s)</th><td>0.94</td><td>1.30</td><td>1.58</td><td>1.82</td><td>2.03</td></tr></table>
<p>(a) The student wants a straight-line graph. State what to plot on each axis and write the slope in terms of $g$.<br>
(b) Add a row $T^2$ to the table.<br>
(c) Plot (describe) the data, draw a best-fit line, and use two well-separated points on the line (not data points if the line misses them) to determine the slope, then determine $g$.<br>
(d) The best-fit line has a small positive vertical intercept. Explain what physical error in the measurement of $L$ produces it, and estimate the size of that error. Does this error affect the slope?<br>
(e) State one reason the student timed 10 swings rather than one, and one reason the amplitude was kept small. If the amplitude had been large, would the computed $g$ be too high or too low? Explain.</p>`,
   pts:[
    {p:1,d:String.raw`Plots $T^2$ (vertical) vs $L$ (horizontal), from $T^2=\frac{4\pi^2}{g}L$`},
    {p:1,d:String.raw`Slope $=4\pi^2/g$ (identifies $g=4\pi^2/\text{slope}$)`},
    {p:1,d:String.raw`$T^2$ values correct: 0.88, 1.69, 2.50, 3.31, 4.12 s²`},
    {p:1,d:String.raw`Line drawn through the trend of the data; slope calculated from two well-separated points on the line, with units s²/m; value about 4.0 to 4.1`},
    {p:1,d:String.raw`$g=4\pi^2/\text{slope}\approx9.7$ to $9.9$ m/s² (accept 9.5 to 10.0 with consistent work)`},
    {p:1,d:String.raw`Intercept: $L$ was measured to the top of the bob, shorter than the true length to the center, so $T^2=\frac{4\pi^2}{g}(L+r)$, giving positive intercept $4\pi^2r/g\approx0.07$ s²; $r\approx1.7$ to $2$ cm`},
    {p:1,d:String.raw`States the slope is unaffected because the error is a constant offset in $L$, so $g$ from the slope is still valid`},
    {p:1,d:String.raw`Timing 10 swings reduces the fractional error from reaction time; small amplitude keeps $\sin\theta\approx\theta$; large amplitude makes $T$ longer, so the slope is too large and $g=4\pi^2/\text{slope}$ comes out too low`}],
   solution:String.raw`<p>(a) $T=2\pi\sqrt{L/g}\Rightarrow T^2=\dfrac{4\pi^2}{g}L$. Plot $T^2$ vs $L$; slope $=4\pi^2/g$.</p>
<p>(b) $T^2$: 0.884, 1.69, 2.50, 3.31, 4.12 s² (to three significant figures: $0.94^2=0.884$, $1.30^2=1.69$, $1.58^2=2.50$, $1.82^2=3.31$, $2.03^2=4.12$).</p>
<p>(c) Take points on the fitted line at $L=0.200$ and $1.000$ m, where $T^2=0.881$ and $4.120$ s²: slope $\approx\dfrac{4.120-0.881}{0.800}\approx4.05$ s²/m. Then $g=\dfrac{4\pi^2}{4.05}=\dfrac{39.48}{4.05}\approx9.75$ m/s².</p>
<p>(d) The intercept is about $+0.07$ s². Since $T^2=\dfrac{4\pi^2}{g}(L+r)$, the intercept is $\dfrac{4\pi^2}{g}r$, so $r=\dfrac{0.07}{4.05}\approx0.017$ m: about the radius of the bob (the true pendulum length runs to the bob's center of mass; the student measured only to the top of the bob). A constant offset in $L$ shifts the line vertically but does not change its slope, so $g$ from the slope is unaffected. (A method that used a single $(L,T)$ pair without checking the intercept would be biased.)</p>
<p>(e) The reaction time of starting and stopping a stopwatch (about $0.2$ s) is a fixed absolute error; spread over 10 periods the error per period is ten times smaller. Small amplitude is needed so $\sin\theta\approx\theta$; at large amplitude the true period is longer ($T\approx T_0(1+\theta_0^2/16)$), so $T^2$ and the slope are too large, giving $g=4\pi^2/\text{slope}$ too <i>low</i>.</p>`},
  {id:"f3", type:"Mathematical routines", title:"Spring, pulley and hanging mass: energy method",
   prompt:String.raw`<p>A block of mass $m_1=2.0$ kg rests on a frictionless horizontal table. It is connected to a wall by a spring of constant $k=120$ N/m. A light string attached to the other side of the block passes over a pulley at the table edge and holds a hanging mass $m_2=1.0$ kg. The pulley is a uniform disk of mass $M_p=1.0$ kg and radius $R=0.10$ m ($I=\tfrac12M_pR^2$); the string does not slip. Take $g=10$ m/s². Let $x$ be the displacement of the block from its equilibrium position.</p>
<p>(a) Find the spring's stretch at equilibrium.<br>
(b) Write the total mechanical energy of the system for a displacement $x$ and speed $v=\dot x$. Treat gravity by measuring everything from equilibrium and show the linear terms cancel.<br>
(c) Use $dE/dt=0$ to show that the motion is SHM and derive $\omega$ in terms of $k$, $m_1$, $m_2$, $M_p$. Evaluate $\omega$ and $T$.<br>
(d) The system is released from rest with the block displaced $0.050$ m from equilibrium. Find the maximum speed of the hanging mass and the maximum angular speed of the pulley.<br>
(e) Show that the string stays taut on the hanging-mass side during the motion.<br>
(f) Explain physically why the period is longer than for the same system with a massless pulley.</p>`,
   pts:[
    {p:1,d:String.raw`Equilibrium: $kx_0=m_2g$, $x_0=0.083$ m (10/120)`},
    {p:1,d:String.raw`Kinetic energy terms: $\tfrac12(m_1+m_2)v^2$ and pulley $\tfrac12I(v/R)^2=\tfrac14M_pv^2$`},
    {p:1,d:String.raw`Potential energy: $\tfrac12k(x_0+x)^2-m_2gx$; expands to constant $+\tfrac12kx^2$ because $kx_0=m_2g$ (linear terms cancel)`},
    {p:1,d:String.raw`$dE/dt=0$ gives $M_{\rm eff}\ddot x=-kx$ with $M_{\rm eff}=m_1+m_2+M_p/2$ and states SHM`},
    {p:1,d:String.raw`$\omega=\sqrt{k/(m_1+m_2+M_p/2)}=\sqrt{120/3.5}=5.86$ rad/s, $T=1.07$ s`},
    {p:1,d:String.raw`$v_{\max}=A\omega=0.29$ m/s for the hanging mass and $\omega_{p,\max}=v_{\max}/R=2.9$ rad/s`},
    {p:1,d:String.raw`Taut: $m_2g-T_2=m_2a$, $|a|_{\max}=A\omega^2=1.7$ m/s² $&lt;g$, so $T_2\ge8.3$ N $>0$`},
    {p:1,d:String.raw`Explanation: the pulley's rotational kinetic energy adds inertia ($M_p/2$) to the oscillating system without adding restoring force, so $\omega$ drops and $T$ increases`}],
   solution:String.raw`<p>(a) $x_0=m_2g/k=10/120=0.083$ m.</p>
<p>(b) $K=\tfrac12(m_1+m_2)v^2+\tfrac12\left(\tfrac12M_pR^2\right)(v/R)^2=\tfrac12\left(m_1+m_2+\tfrac{M_p}2\right)v^2$. $U=\tfrac12k(x_0+x)^2-m_2gx=\tfrac12kx_0^2+kx_0x+\tfrac12kx^2-m_2gx$. Since $kx_0=m_2g$ the linear terms cancel: $U=\text{const}+\tfrac12kx^2$.</p>
<p>(c) $E=\tfrac12M_{\rm eff}\dot x^2+\tfrac12kx^2+\text{const}$, $M_{\rm eff}=m_1+m_2+M_p/2=3.5$ kg. $dE/dt=\dot x(M_{\rm eff}\ddot x+kx)=0\Rightarrow\ddot x=-(k/M_{\rm eff})x$. $\omega=\sqrt{120/3.5}=5.86$ rad/s, $T=1.07$ s.</p>
<p>(d) $A=0.050$ m, $v_{\max}=A\omega=0.293$ m/s (the same for the block, the string and the hanging mass). Pulley: $0.293/0.10=2.93$ rad/s.</p>
<p>(e) Maximum acceleration $A\omega^2=0.050(34.3)=1.71$ m/s². For the hanging mass $T_2=m_2(g-a)$, smallest when $a=+1.71$ m/s² downward: $T_2=1.0(10-1.71)=8.3$ N $>0$.</p>
<p>(f) The pulley must be spun up and slowed down as the string moves, so part of the energy is stored as rotation. This acts as extra mass ($M_p/2=0.5$ kg) with no extra restoring force: same $k$, larger inertia, smaller $\omega$, longer $T$ ($1.07$ s versus $0.99$ s for a massless pulley).</p>`},
  {id:"f4", type:"Experimental design & analysis", title:"Physical pendulum: a meter stick on different pivots",
   prompt:String.raw`<p>A uniform meter stick ($L=1.000$ m, mass $m$) is hung from a horizontal pin through a small hole at distance $d$ from its center and swung through small angles. The period is measured for five values of $d$ (each is the average of timing 10 swings).</p>
<table><tr><th>$d$ (m)</th><td>0.10</td><td>0.20</td><td>0.30</td><td>0.40</td><td>0.45</td></tr>
<tr><th>$T$ (s)</th><td>1.95</td><td>1.57</td><td>1.52</td><td>1.57</td><td>1.59</td></tr></table>
<p>(a) Show that $T^2d=\dfrac{4\pi^2}{g}\left(d^2+\dfrac{L^2}{12}\right)$, using $I_{\rm cm}=\tfrac1{12}mL^2$.<br>
(b) State what to plot on each axis to obtain a straight line, and what the slope and the intercept represent.<br>
(c) Add the two columns you need to the table and compute them.<br>
(d) Draw a best-fit line (describe it) and use two well-separated points on the line to find the slope, then find $g$.<br>
(e) The intercept from the line is about $0.34$ s²m. Use it to check the value of $L$ the model predicts, and say what a significantly different value would suggest about the experiment.<br>
(f) The measured $T$ is smallest at an intermediate $d$ rather than decreasing as $d$ increases. Explain qualitatively why a pivot far from the center gives a longer period even though gravity's torque is larger there, and state the $d$ that minimizes $T$.</p>`,
   pts:[
    {p:1,d:String.raw`Parallel axis: $I=\tfrac1{12}mL^2+md^2$; $T=2\pi\sqrt{I/mgd}$ squared and multiplied by $d$ gives $T^2d=\frac{4\pi^2}{g}(d^2+L^2/12)$`},
    {p:1,d:String.raw`Plots $T^2d$ (vertical) against $d^2$ (horizontal); slope $4\pi^2/g$; intercept $4\pi^2L^2/(12g)$`},
    {p:1,d:String.raw`$d^2$: 0.0100, 0.0400, 0.0900, 0.1600, 0.2025 m²; $T^2d$: 0.380, 0.493, 0.693, 0.986, 1.138 s²m`},
    {p:1,d:String.raw`Line drawn through the trend; slope from two well-separated points on the line (not data points), value about $3.9$ to $4.0$ s²/m`},
    {p:1,d:String.raw`$g=4\pi^2/\text{slope}\approx9.9$ to $10.0$ m/s² (accept 9.7 to 10.1)`},
    {p:1,d:String.raw`Intercept $\Rightarrow L^2=12(\text{intercept})/\text{slope}$, $L\approx1.0$ m, consistent with the meter stick; a very different value would mean the model (uniform rod, pivot at a point, small angle) or the measurement of $d$ is flawed`},
    {p:1,d:String.raw`Explains the minimum: the period balances torque growing with $d$ against $I$ growing as $md^2$ (at large $d$ the stick behaves like a long simple pendulum of length about $d$); minimum at $d=L/\sqrt{12}\approx0.29$ m`}],
   solution:String.raw`<p>(a) $I=\tfrac1{12}mL^2+md^2$, so $T^2=4\pi^2\dfrac{I}{mgd}=\dfrac{4\pi^2}{g}\,\dfrac{L^2/12+d^2}{d}$. Multiply by $d$.</p>
<p>(b) $y=T^2d$, $x=d^2$: $y=\dfrac{4\pi^2}{g}x+\dfrac{4\pi^2L^2}{12g}$. Slope $4\pi^2/g$; intercept $4\pi^2L^2/12g$. (This linearization puts the unknown $g$ in the slope and the geometry in the intercept.)</p>
<p>(c) $d^2$: 0.0100, 0.0400, 0.0900, 0.1600, 0.2025. $T^2d$: $1.95^2(0.10)=0.380$; $1.57^2(0.20)=0.493$; $1.52^2(0.30)=0.693$; $1.57^2(0.40)=0.986$; $1.59^2(0.45)=1.138$ (s²m).</p>
<p>(d) Using points on the least-squares line $T^2d=3.98d^2+0.338$ at $d^2=0.0100$ and $0.2025$ (values 0.378 and 1.144 s²m), slope $\approx\dfrac{1.144-0.378}{0.1925}\approx3.98$ s²/m. $g=4\pi^2/3.98=9.9$ m/s².</p>
<p>(e) Intercept $=0.34$: $L^2=12(0.34)/3.98=1.03$ m², $L\approx1.01$ m, consistent with the meter stick. A strongly different value would indicate an error such as the pivot offset being mismeasured (a systematic error in $d$ distorts both slope and intercept) or large-amplitude swings.</p>
<p>(f) Close to the center, gravity's torque $mgd\sin\theta$ is small while $I\approx mL^2/12$ stays large, so the period is long (as $d\to0$, $T\to\infty$). Far from the center $I\approx md^2$ grows as fast as the torque and the stick acts like a simple pendulum of length about $d$, so $T$ grows again with $d$. Minimizing $T^2=\frac{4\pi^2}{g}(d+L^2/12d)$: $1-L^2/12d^2=0\Rightarrow d=L/\sqrt{12}=0.289$ m, where $T_{\min}=1.52$ s. (At that point $T$ is the same as a simple pendulum of length $2d$.)</p>`}
  ]
});
