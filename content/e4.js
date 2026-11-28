PH.unit({
  id:"e4", course:"em", order:130, hours:9,
  title:"E&M 4: Magnetic Fields",
  blurb:"Magnetic force on charges and currents, circular and helical motion, and the two ways to find a magnetic field: Biot-Savart (always works, integrate) and Ampère's law (symmetry, easy).",
  needs:["e3"],
  goals:[
    "Compute $\\vec F=q\\vec v\\times\\vec B$ in magnitude and direction, using components and the right-hand rule",
    "Explain why a magnetic force does no work, and use $r=mv/(qB)$ for circular and helical motion",
    "Analyze a velocity selector and a mass spectrometer",
    "Find $\\vec F=I\\vec L\\times\\vec B$, the force per length between parallel wires, and the torque on a current loop",
    "Set up and evaluate Biot-Savart integrals for straight wires, arcs and loops",
    "Apply Ampère's law with symmetry: wire (uniform and nonuniform $J$), solenoid, toroid"
  ],
  lessons:[
  {id:"l1", title:"The magnetic force and the right-hand rule", videos:[{title:"Magnetic Force Direction (Right-Hand Rule)",url:"https://www.youtube.com/watch?v=XFOzwYbqNbE",src:"YouTube (AP Physics C-level)",note:"Practice finding the direction of F = qv x B"},{title:"Magnetic Force on a Moving Charge In a Magnetic Field",url:"https://www.youtube.com/watch?v=7MBawzone30",src:"YouTube",note:"Force on a proton with worked examples"}], html:String.raw`
<p>A <b>magnetic field</b> $\vec B$ (SI unit: the tesla, T $=\text{N}/(\text{A}\cdot\text{m})$) is a vector field. It exerts a force only on <i>moving</i> charge:</p>
$$\vec F=q\,\vec v\times\vec B,\qquad |\vec F|=|q|\,v\,B\sin\theta$$
<p>where $\theta$ is the angle between $\vec v$ and $\vec B$. (Together with the electric force this is the full Lorentz force, $\vec F=q(\vec E+\vec v\times\vec B)$.) Typical sizes: Earth's field $\sim5\times10^{-5}$ T, a refrigerator magnet $\sim5\times10^{-3}$ T, an MRI machine $\sim1$ to $3$ T.</p>
<p><b>The cross product, since it may be new.</b> $\vec A\times\vec B$ is a vector perpendicular to both $\vec A$ and $\vec B$, with magnitude $AB\sin\theta$ (the area of the parallelogram they span). In components,</p>
$$\vec A\times\vec B=(A_yB_z-A_zB_y,\;A_zB_x-A_xB_z,\;A_xB_y-A_yB_x),\qquad \hat x\times\hat y=\hat z,\;\hat y\times\hat z=\hat x,\;\hat z\times\hat x=\hat y$$
<p>and reversing the order flips the sign: $\vec B\times\vec A=-\vec A\times\vec B$. <b>Right-hand rule (RHR-1):</b> point your fingers along the first vector ($\vec v$), curl them toward the second ($\vec B$) through the smaller angle; your thumb points along $\vec v\times\vec B$. For a <b>negative</b> charge the force is opposite to the thumb.</p>
<p><b>Page notation.</b> Fields perpendicular to the page are drawn as $\otimes$ (into the page, the tail feathers of an arrow flying away from you) and $\odot$ (out of the page, the arrowhead flying toward you). With $\hat x$ right, $\hat y$ up, $\hat z$ out of the page, "into the page" is $-\hat z$.</p>
<svg class="fig" viewBox="0 0 340 215" width="340" role="img" aria-label="Positive charge moving right in a field directed into the page: force points up, so the path curves counterclockwise into a circle">
<defs><g id="e4x"><circle r="6" fill="none" stroke="currentColor"/><line x1="-4" y1="-4" x2="4" y2="4" stroke="currentColor"/><line x1="-4" y1="4" x2="4" y2="-4" stroke="currentColor"/></g></defs>
<g opacity=".55"><use href="#e4x" x="30" y="25"/><use href="#e4x" x="90" y="25"/><use href="#e4x" x="150" y="25"/><use href="#e4x" x="210" y="25"/><use href="#e4x" x="270" y="25"/>
<use href="#e4x" x="30" y="105"/><use href="#e4x" x="30" y="185"/><use href="#e4x" x="270" y="105"/><use href="#e4x" x="270" y="185"/><use href="#e4x" x="90" y="185"/><use href="#e4x" x="210" y="185"/><use href="#e4x" x="150" y="185"/></g>
<circle cx="150" cy="105" r="58" fill="none" stroke="currentColor" stroke-dasharray="5 4"/>
<circle cx="150" cy="163" r="6" fill="currentColor"/><text x="140" y="203">+q</text>
<line x1="150" y1="163" x2="205" y2="163" stroke="currentColor" stroke-width="2.5"/><polygon points="205,158 215,163 205,168" fill="currentColor"/><text x="220" y="167">v</text>
<line x1="150" y1="157" x2="150" y2="118" stroke="currentColor" stroke-width="2.5"/><polygon points="145,120 150,110 155,120" fill="currentColor"/><text x="157" y="130">F</text>
<text x="300" y="60">B into</text><text x="300" y="75">page (⊗)</text></svg>
<div class="box key"><b>Magnetic force does no work.</b> $\vec F\perp\vec v$ always, so the power $\vec F\cdot\vec v=0$. A magnetic field changes the <i>direction</i> of a charge's velocity, never its speed or kinetic energy.</div>
<div class="box trap"><b>Trap:</b> a magnetic force on a charge at rest is zero, and also zero if $\vec v\parallel\vec B$ ($\sin\theta=0$). The force is not along $\vec B$ or along $\vec v$: it is perpendicular to both.</div>`},

  {id:"l2", title:"Circular and helical motion, selectors, spectrometers", videos:[{title:"Search: velocity selector and mass spectrometer",url:"https://www.youtube.com/results?search_query=velocity+selector+mass+spectrometer+AP+Physics+C",src:"YouTube search",note:"Pick a worked example on r = mv/(qB)"}], html:String.raw`
<p>Take a charge $q$ with velocity <b>perpendicular</b> to a uniform $\vec B$. The force has constant magnitude $qvB$ and is always perpendicular to $\vec v$, which is exactly the recipe for uniform circular motion. Newton's second law with centripetal acceleration $v^2/r$:</p>
$$qvB=\frac{mv^2}{r}\;\Rightarrow\; r=\frac{mv}{qB}=\frac{p}{qB},\qquad \omega=\frac{v}{r}=\frac{qB}{m},\qquad T=\frac{2\pi m}{qB}$$
<p>Notice that the period and angular frequency do <b>not</b> depend on $v$: faster particles travel a bigger circle in the same time. That is the principle of the cyclotron. To get the sense of rotation, use RHR-1 on the initial velocity (a positive charge in $\vec B$ into the page circles counterclockwise; negative circles clockwise).</p>
<p><b>Helical motion.</b> If $\vec v$ has a component $v_\parallel$ along $\vec B$ and $v_\perp$ across it, the parallel part is unaffected (no force) while the perpendicular part circles. The path is a helix with</p>
$$r=\frac{mv_\perp}{qB},\qquad \text{pitch}=v_\parallel T=\frac{2\pi m\,v_\parallel}{qB}$$
<p><b>Velocity selector.</b> Cross a uniform $\vec E$ and $\vec B$ so that the electric and magnetic forces on a charge point opposite ways. A particle goes straight only if the forces cancel: $qE=qvB$, so</p>
$$v=\frac{E}{B}$$
<p>independent of $q$ and $m$. Faster particles are pushed toward the magnetic-force side, slower ones toward the electric-force side.</p>
<svg class="fig" viewBox="0 0 360 220" width="360" role="img" aria-label="Velocity selector between two plates with electric field pointing down and magnetic field into the page, followed by a semicircular path in a second magnetic field into the page">
<defs><g id="e4x2"><circle r="5" fill="none" stroke="currentColor"/><line x1="-3.5" y1="-3.5" x2="3.5" y2="3.5" stroke="currentColor"/><line x1="-3.5" y1="3.5" x2="3.5" y2="-3.5" stroke="currentColor"/></g></defs>
<line x1="20" y1="40" x2="150" y2="40" stroke="currentColor" stroke-width="3"/><line x1="20" y1="110" x2="150" y2="110" stroke="currentColor" stroke-width="3"/>
<text x="24" y="33">+ + + + + +</text><text x="24" y="130">− − − − − −</text>
<g opacity=".55"><use href="#e4x2" x="50" y="60"/><use href="#e4x2" x="85" y="60"/><use href="#e4x2" x="120" y="60"/><use href="#e4x2" x="50" y="92"/><use href="#e4x2" x="85" y="92"/><use href="#e4x2" x="120" y="92"/></g>
<line x1="5" y1="75" x2="160" y2="75" stroke="currentColor" stroke-dasharray="2 4"/>
<line x1="150" y1="110" x2="150" y2="150" stroke="currentColor"/><line x1="150" y1="40" x2="150" y2="0" stroke="currentColor"/>
<line x1="160" y1="75" x2="190" y2="75" stroke="currentColor"/>
<circle cx="14" cy="75" r="4" fill="currentColor"/><text x="2" y="95">+q</text>
<line x1="130" y1="14" x2="130" y2="30" stroke="currentColor" stroke-width="2"/><text x="136" y="22">E</text><polygon points="126,28 130,35 134,28" fill="currentColor"/>
<text x="55" y="165">velocity selector</text><text x="55" y="180">v = E/B</text>
<g opacity=".55"><circle cx="230" cy="100" r="5" fill="none" stroke="currentColor"/><circle cx="230" cy="100" r="1.6" fill="currentColor"/><circle cx="270" cy="100" r="5" fill="none" stroke="currentColor"/><circle cx="270" cy="100" r="1.6" fill="currentColor"/><circle cx="310" cy="100" r="5" fill="none" stroke="currentColor"/><circle cx="310" cy="100" r="1.6" fill="currentColor"/><circle cx="230" cy="145" r="5" fill="none" stroke="currentColor"/><circle cx="230" cy="145" r="1.6" fill="currentColor"/><circle cx="270" cy="145" r="5" fill="none" stroke="currentColor"/><circle cx="270" cy="145" r="1.6" fill="currentColor"/><circle cx="310" cy="145" r="5" fill="none" stroke="currentColor"/><circle cx="310" cy="145" r="1.6" fill="currentColor"/><circle cx="250" cy="190" r="5" fill="none" stroke="currentColor"/><circle cx="250" cy="190" r="1.6" fill="currentColor"/><circle cx="290" cy="190" r="5" fill="none" stroke="currentColor"/><circle cx="290" cy="190" r="1.6" fill="currentColor"/><circle cx="330" cy="190" r="5" fill="none" stroke="currentColor"/><circle cx="330" cy="190" r="1.6" fill="currentColor"/></g>
<path d="M190 75 L255 75 A55 55 0 0 1 255 185" fill="none" stroke="currentColor" stroke-width="2"/>
<line x1="255" y1="75" x2="255" y2="185" stroke="currentColor" stroke-dasharray="3 3"/><text x="262" y="135">2r</text>
<text x="195" y="68">B₂ (out of page)</text></svg>
<p><b>Mass spectrometer.</b> Ions of charge $q$ pass the selector at known speed $v$, then enter a region of field $B_2$ and travel a semicircle of radius $r=mv/(qB_2)$ before hitting a detector at distance $2r$ from the entry slit. Different masses land at different places: $m=qB_2r/v$.</p>
<div class="box key">In both devices the logic is the same two lines: <b>(1)</b> choose the direction of $\vec F$ with the right-hand rule (and flip it for a negative charge); <b>(2)</b> set $|\vec F|$ equal to what the motion needs ($0$ for straight, $mv^2/r$ for a circle).</div>
<div class="box trap"><b>Trap:</b> at equal kinetic energy $K$, $r=\sqrt{2mK}/(qB)$, so a heavier particle does <i>not</i> automatically have a bigger radius: charge matters too. At equal speed, the more massive particle has the larger radius; at equal momentum, the one with less charge.</div>`},

  {id:"l3", title:"Forces on wires and loops", videos:[{title:"Search: force between parallel wires and torque on a current loop",url:"https://www.youtube.com/results?search_query=force+between+parallel+current-carrying+wires+torque+on+current+loop+AP+Physics+C",src:"YouTube search",note:"Look for both parallel-wire force and loop torque"}], html:String.raw`
<p><b>Force on a current-carrying wire.</b> A current is moving charge. A straight segment of length $L$ carrying current $I$ (direction of $\vec L$ = direction of conventional current) in a uniform field feels</p>
$$\vec F=I\,\vec L\times\vec B,\qquad |\vec F|=ILB\sin\theta$$
<p>For a curved wire or nonuniform field, integrate: $\vec F=\int I\,d\vec l\times\vec B$. (Derivation sketch: $n$ carriers per volume, charge $q$, drift velocity $v_d$, cross-section $A$, length $L$: $\vec F=(nAL)\,q\vec v_d\times\vec B$ and $I=nqv_dA$.) For a closed loop in a <i>uniform</i> field, $\oint d\vec l=0$, so the net force is zero.</p>
<p><b>Parallel wires.</b> Wire 1 carrying $I_1$ makes a field at distance $d$ of magnitude $\mu_0I_1/(2\pi d)$ (derived below). Wire 2 sits in that field with $\vec L\perp\vec B$, so the force <i>per unit length</i> on it is</p>
$$\frac{F}{L}=\frac{\mu_0I_1I_2}{2\pi d}$$
<p><b>Parallel currents attract; antiparallel currents repel.</b> By Newton's third law the forces on the two wires are equal and opposite, whatever the sizes of $I_1,I_2$. (This is how the ampere is defined: two long wires 1 m apart with equal currents of 1 A attract with $2\times10^{-7}$ N per meter.)</p>
<svg class="fig" viewBox="0 0 320 150" width="320" role="img" aria-label="Two parallel wires carrying current out of the page; each is pulled toward the other">
<circle cx="90" cy="75" r="14" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="90" cy="75" r="3" fill="currentColor"/>
<circle cx="230" cy="75" r="14" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="230" cy="75" r="3" fill="currentColor"/>
<line x1="108" y1="75" x2="150" y2="75" stroke="currentColor" stroke-width="2.5"/><polygon points="150,70 160,75 150,80" fill="currentColor"/>
<line x1="212" y1="75" x2="170" y2="75" stroke="currentColor" stroke-width="2.5"/><polygon points="170,70 160,75 170,80" fill="currentColor"/>
<text x="75" y="115">I₁ (out)</text><text x="215" y="115">I₂ (out)</text><text x="148" y="60">attract</text>
<line x1="90" y1="130" x2="230" y2="130" stroke="currentColor"/><text x="150" y="146">d</text></svg>
<p><b>Torque on a current loop.</b> In a uniform field, the forces on opposite sides of a loop cancel, but they may not act along the same line, giving a torque. For a flat loop of $N$ turns, area $A$, current $I$, define the <b>magnetic dipole moment</b> $\vec\mu=NIA\,\hat n$ ($\hat n$ from the right-hand rule: curl fingers along the current, thumb gives $\hat n$). Then</p>
$$\vec\tau=\vec\mu\times\vec B,\qquad \tau=NIAB\sin\phi$$
<p>with $\phi$ the angle between $\hat n$ and $\vec B$. The torque is maximal ($NIAB$) when the plane of the loop is <i>parallel</i> to $\vec B$ and zero when the plane is perpendicular to $\vec B$ ($\hat n\parallel\vec B$, stable equilibrium). The torque tries to rotate $\vec\mu$ toward $\vec B$. This is the working principle of the DC motor and galvanometer. (Associated energy: $U=-\vec\mu\cdot\vec B$.)</p>
<div class="box trap"><b>Trap:</b> $\phi$ in $\tau=NIAB\sin\phi$ is measured from the <i>normal</i> to the loop, not from its plane. A loop with its plane parallel to $\vec B$ has $\phi=90^\circ$, the maximum.</div>`},

  {id:"l4", title:"The Biot-Savart law", videos:[{title:"Biot-Savart and Ampere's Laws - Review for AP Physics C: Electricity and Magnetism",url:"https://www.youtube.com/watch?v=gSsp6NQqvmk",src:"YouTube (AP Physics C review)",note:"Biot-Savart part first"},{title:"The Biot-Savart Law and Introduction to Ampere's Law",url:"https://www.youtube.com/watch?v=NJsJB7-PWPg",src:"YouTube (Dr Mike Young)",note:"Derivation-level treatment"}], html:String.raw`
<p>Moving charges (currents) <i>create</i> magnetic fields. The field from a small piece $d\vec l$ of wire carrying current $I$, at a point displaced by $\vec r$ from the piece (distance $r$, unit vector $\hat r$ pointing <i>from the source to the field point</i>), is</p>
$$d\vec B=\frac{\mu_0}{4\pi}\frac{I\,d\vec l\times\hat r}{r^2},\qquad \mu_0=4\pi\times10^{-7}\ \text{T·m/A}$$
<p>This plays the role Coulomb's law played for electrostatics; the total field is the sum (integral) over the whole current: $\vec B=\int d\vec B$. The $1/r^2$ and the direction rule are new twists: $d\vec B$ is perpendicular to both the wire element and $\hat r$, so field lines circle the wire. <b>RHR-2:</b> thumb along the current, fingers curl the way $\vec B$ circulates.</p>
<p><b>Straight wire.</b> Place the wire along a line, and the field point at perpendicular distance $a$ from it. Let $y$ measure position along the wire from the foot of the perpendicular. Then $r=\sqrt{a^2+y^2}$, $|d\vec l\times\hat r|=dy\sin\varphi=dy\,a/r$ and</p>
$$B=\frac{\mu_0I}{4\pi}\int\frac{a\,dy}{(a^2+y^2)^{3/2}}=\frac{\mu_0I}{4\pi a}\left[\frac{y}{\sqrt{a^2+y^2}}\right]_{y_1}^{y_2}=\frac{\mu_0I}{4\pi a}(\sin\theta_2+\sin\theta_1)$$
<p>with $\theta_1,\theta_2$ the angles from the perpendicular to the two ends (taken positive when the ends lie on opposite sides of the foot). For an <b>infinite wire</b> $\theta_{1,2}\to90^\circ$:</p>
$$B=\frac{\mu_0I}{2\pi a}$$
<svg class="fig" viewBox="0 0 330 210" width="330" role="img" aria-label="Straight vertical wire with current up, a small element dl, the vector r to a field point P at perpendicular distance a, and angles theta one and theta two from the perpendicular">
<line x1="80" y1="10" x2="80" y2="200" stroke="currentColor" stroke-width="3"/><polygon points="75,24 80,10 85,24" fill="currentColor"/><text x="88" y="22">I</text>
<line x1="80" y1="110" x2="260" y2="110" stroke="currentColor" stroke-dasharray="4 3"/><text x="160" y="104">a</text>
<circle cx="260" cy="110" r="4" fill="currentColor"/><text x="268" y="114">P</text>
<line x1="80" y1="55" x2="260" y2="110" stroke="currentColor"/><text x="86" y="52">dl</text><text x="170" y="75">r</text>
<line x1="80" y1="170" x2="260" y2="110" stroke="currentColor" stroke-opacity=".5"/>
<path d="M215 96 A30 30 0 0 0 232 110" fill="none" stroke="currentColor"/><text x="196" y="96">θ₂</text>
<path d="M232 110 A30 30 0 0 0 225 128" fill="none" stroke="currentColor"/><text x="186" y="134">θ₁</text>
<text x="40" y="115">y = 0</text></svg>
<p><b>Circular loop, on the axis.</b> Loop of radius $R$, current $I$, field point at height $z$ above the center on the axis. Every element has $d\vec l\perp\hat r$, $r^2=R^2+z^2$, so $dB=\frac{\mu_0I\,dl}{4\pi(R^2+z^2)}$. By symmetry, components perpendicular to the axis cancel in pairs; only the axial component survives, with factor $\cos\alpha=R/\sqrt{R^2+z^2}$. Summing $\oint dl=2\pi R$:</p>
$$B_z=\frac{\mu_0I}{4\pi}\frac{2\pi R\cdot R}{(R^2+z^2)^{3/2}}=\frac{\mu_0IR^2}{2(R^2+z^2)^{3/2}}$$
<p>At the center ($z=0$): $B=\mu_0I/(2R)$. Far away ($z\gg R$): $B\approx\mu_0IR^2/(2z^3)=\mu_0\mu/(2\pi z^3)$ with $\mu=I\pi R^2$, the dipole field. For an $N$-turn coil multiply by $N$.</p>
<p><b>Circular arc.</b> At the center of an arc of radius $R$ subtending angle $\theta$ (radians), $d\vec l\perp\hat r$ everywhere and $r=R$, so $B=\frac{\mu_0I}{4\pi R^2}(R\theta)=\dfrac{\mu_0I\theta}{4\pi R}$ (a full circle gives $\mu_0I/2R$ as above, a semicircle $\mu_0I/4R$). Straight pieces whose line passes <i>through</i> the field point contribute nothing, because $d\vec l\parallel\hat r$ and the cross product vanishes.</p>
<div class="box trap"><b>Trap:</b> direction needs care when you add pieces. Find the direction of each piece's contribution (RHR-2) before adding magnitudes, and use $\hat r$ from the <i>source</i> to the field point.</div>`},

  {id:"l5", title:"Ampère's law", videos:[{title:"How to derive Ampere's Law from the Biot-Savart Law",url:"https://www.youtube.com/watch?v=yuyEGV4-b8g",src:"YouTube",note:"Shows where the line-integral form comes from"},{title:"Biot-Savart and Ampere's Laws - Review for AP Physics C: Electricity and Magnetism",url:"https://www.youtube.com/watch?v=gSsp6NQqvmk",src:"YouTube (AP Physics C review)",note:"Ampere's-law examples (wire, solenoid)"}], html:String.raw`
<p><b>Ampère's law</b> relates the circulation of $\vec B$ around any closed path (an "Amperian loop") to the current threading it:</p>
$$\oint\vec B\cdot d\vec l=\mu_0I_{\text{enc}}$$
<p>$I_{\text{enc}}=\int\vec J\cdot d\vec A$ is the current through any surface bounded by the loop, counted positive when it passes in the direction your right thumb points when your fingers curl along the direction you traverse the loop. Like Gauss's law, it is always true but only <i>useful</i> when symmetry lets you pull $B$ out of the integral. Choose a loop on which $\vec B$ is either tangent with constant magnitude, or perpendicular to the path, or zero.</p>
<p><b>Long straight wire (radius $R$), total current $I$.</b> By symmetry $\vec B$ circles the axis with magnitude $B(r)$. For a circular loop of radius $r$: $B(2\pi r)=\mu_0I_{\text{enc}}(r)$. Outside ($r>R$): $I_{\text{enc}}=I$, so $B=\mu_0I/(2\pi r)$, regardless of how the current is distributed inside. Inside, you need $I_{\text{enc}}(r)=\int_0^rJ(r')\,2\pi r'\,dr'$:</p>
<ul>
<li><b>uniform</b> $J=I/(\pi R^2)$: $I_{\text{enc}}=I r^2/R^2$, so $B=\dfrac{\mu_0Ir}{2\pi R^2}$ (linear in $r$)</li>
<li><b>nonuniform</b>, e.g. $J=J_0\,r/R$: $I_{\text{enc}}=\dfrac{2\pi J_0r^3}{3R}$, so $B=\dfrac{\mu_0J_0r^2}{3R}$ (quadratic)</li></ul>
<svg class="fig" viewBox="0 0 330 190" width="330" role="img" aria-label="Graph of B versus r for a cylindrical wire: rises inside the wire up to r equals R, then falls as one over r outside">
<line x1="40" y1="160" x2="310" y2="160" stroke="currentColor"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor"/>
<path d="M40 160 L130 40" fill="none" stroke="currentColor" stroke-width="2.5"/>
<path d="M130 40 C170 80 220 110 300 128" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="130" y1="160" x2="130" y2="40" stroke="currentColor" stroke-dasharray="3 3"/>
<text x="124" y="177">R</text><text x="298" y="177">r</text><text x="18" y="22">B</text>
<text x="48" y="115">inside: ∝ r</text><text x="190" y="85">outside: ∝ 1/r</text></svg>
<p><b>Ideal solenoid</b> ($n$ turns per unit length, current $I$, long compared with its radius): inside, $\vec B$ is uniform and parallel to the axis; outside it is negligible. Take a rectangular loop with one side of length $\ell$ inside parallel to the axis and the other outside far away. Only the inner side contributes: $B\ell=\mu_0(n\ell)I$, so</p>
$$B_{\text{inside}}=\mu_0nI$$
<p>(direction by RHR: curl fingers along the current in the windings, thumb gives $\vec B$).</p>
<p><b>Toroid</b> ($N$ turns total, wound on a doughnut): by symmetry $\vec B$ circulates around the doughnut; a circular loop of radius $r$ inside the core encloses $N$ wire crossings each carrying $I$, so $B(2\pi r)=\mu_0NI$:</p>
$$B=\frac{\mu_0NI}{2\pi r}\quad(\text{inside the core}),\qquad B=0\ \text{outside}$$
<p>(For a loop outside the doughnut, or through the hole, the net enclosed current is zero.) Note that, unlike the solenoid, $B$ varies across the toroid's cross-section.</p>
<div class="box key"><b>Biot-Savart vs Ampère.</b> Biot-Savart is the underlying law for steady currents of any shape (you integrate). Ampère's law is a consequence you can use as a shortcut when symmetry makes $\oint\vec B\cdot d\vec l$ trivial. If the geometry has no such symmetry (a finite wire, a single loop), Ampère's law is still true but does not by itself give you $B$.</div>
<div class="box trap"><b>Trap:</b> for $r&lt;R$ in a thick wire only the current <i>inside</i> your Amperian loop counts, and for nonuniform $J$ you must integrate: $I_{\text{enc}}\ne J(r)\pi r^2$.</div>`}
  ],
  examples:[
  {id:"x1", title:"Proton in a magnetic field", problem:String.raw`<p>A proton ($m=1.67\times10^{-27}$ kg, $q=1.60\times10^{-19}$ C) moves at $2.0\times10^6$ m/s perpendicular to a uniform $0.50$ T field. Find the radius of its orbit, its orbital period, and its kinetic energy after one full revolution.</p>`,
   solution:String.raw`<p>$r=\dfrac{mv}{qB}=\dfrac{(1.67\times10^{-27})(2.0\times10^6)}{(1.60\times10^{-19})(0.50)}=4.2\times10^{-2}$ m $=4.2$ cm.</p>
<p>$T=\dfrac{2\pi m}{qB}=\dfrac{2\pi(1.67\times10^{-27})}{(1.60\times10^{-19})(0.50)}=1.3\times10^{-7}$ s (frequency about 7.6 MHz). Check: $2\pi r/v=2\pi(0.0418)/(2\times10^6)=1.3\times10^{-7}$ s. ✓</p>
<p>The speed never changes, because the magnetic force does no work. Kinetic energy stays $\tfrac12mv^2=3.3\times10^{-15}$ J ($\approx21$ keV).</p>`},
  {id:"x2", title:"Selector plus spectrometer", problem:String.raw`<p>Singly charged carbon ions ($q=+e$) of mass $12$ u and $14$ u ($1\text{ u}=1.66\times10^{-27}$ kg) pass through a velocity selector with $E=2.0\times10^4$ V/m and $B=0.050$ T. They then enter a region with $B_2=0.20$ T perpendicular to their velocity. (a) What speed do the ions have on emerging? (b) How far apart do the two isotopes land on the detector?</p>`,
   solution:String.raw`<p>(a) Only ions with $qE=qvB$ pass: $v=E/B=2.0\times10^4/0.050=4.0\times10^5$ m/s (the same for both isotopes).</p>
<p>(b) Landing distance from the slit is $2r=2mv/(qB_2)$. For 12 u ($1.99\times10^{-26}$ kg): $2r=\dfrac{2(1.99\times10^{-26})(4.0\times10^5)}{(1.60\times10^{-19})(0.20)}=0.50$ m. Distance scales with mass, so for 14 u: $0.50\times14/12=0.58$ m. Separation $\approx0.083$ m $=8.3$ cm.</p>`},
  {id:"x3", title:"Force between wires, and the null point", problem:String.raw`<p>Two long parallel wires 5.0 cm apart carry currents $I_1=10$ A and $I_2=20$ A in the same direction. (a) Find the force per unit length on each wire and whether it is attractive or repulsive. (b) If instead the currents are in opposite directions, at what points on the line joining the wires is $B=0$?</p>`,
   solution:String.raw`<p>(a) $\dfrac FL=\dfrac{\mu_0I_1I_2}{2\pi d}=\dfrac{(2\times10^{-7})(10)(20)}{0.050}=8.0\times10^{-4}$ N/m. The force is the same magnitude on both wires (Newton's third law) and <b>attractive</b>, since the currents are parallel.</p>
<p>(b) With opposite currents, between the wires both fields point the same way, so they cannot cancel there. Outside the wires the fields oppose, and the null must be nearer the <i>smaller</i> current. Let it be at distance $x$ from wire 1 on the side away from wire 2: $\dfrac{\mu_0I_1}{2\pi x}=\dfrac{\mu_0I_2}{2\pi(x+d)}\Rightarrow 10(x+0.05)=20x\Rightarrow x=0.050$ m. So $B=0$ on the line 5.0 cm beyond the 10 A wire (10 cm from the 20 A wire).</p>`},
  {id:"x4", title:"Biot-Savart on a straight segment", problem:String.raw`<p>A straight wire segment of total length $0.60$ m carries $10$ A. Find $B$ at a point $0.40$ m from the wire's midpoint, on the perpendicular bisector. Compare with the infinite-wire result at the same distance.</p>`,
   solution:String.raw`<p>Half-length $L=0.30$ m, $a=0.40$ m, so $\sin\theta=L/\sqrt{a^2+L^2}=0.30/0.50=0.60$ at each end ($\theta_1=\theta_2$).</p>
<p>$B=\dfrac{\mu_0I}{4\pi a}(2\sin\theta)=\dfrac{(10^{-7})(10)}{0.40}(1.2)=3.0\times10^{-6}$ T.</p>
<p>Infinite wire: $\mu_0I/(2\pi a)=2\times10^{-7}(10)/0.40=5.0\times10^{-6}$ T. The finite wire gives 60 percent of it: the far parts of an infinite wire contribute the rest.</p>`},
  {id:"x5", title:"Ampère's law with nonuniform current", problem:String.raw`<p>A long cylindrical conductor of radius $R=1.0$ cm carries current density $J(r)=J_0\,r/R$ along its axis, with $J_0=2.0\times10^6$ A/m². Find the total current, and $B$ at $r=R/2$ and at $r=2R$.</p>`,
   solution:String.raw`<p>$I=\int_0^RJ\,2\pi r\,dr=\dfrac{2\pi J_0}{R}\int_0^Rr^2dr=\dfrac{2\pi J_0R^2}{3}=\dfrac{2\pi(2.0\times10^6)(10^{-4})}{3}=4.2\times10^2$ A.</p>
<p>Inside: $I_{\text{enc}}(r)=\dfrac{2\pi J_0r^3}{3R}$, $B(2\pi r)=\mu_0I_{\text{enc}}\Rightarrow B=\dfrac{\mu_0J_0r^2}{3R}$. At $r=R/2$: $B=\dfrac{(4\pi\times10^{-7})(2.0\times10^6)(0.005)^2}{3(0.01)}=2.1\times10^{-3}$ T.</p>
<p>Outside: $B=\dfrac{\mu_0I}{2\pi r}=\dfrac{2\times10^{-7}(419)}{0.020}=4.2\times10^{-3}$ T. Check at $r=R$ the two formulas agree: $\mu_0J_0R/3$ and $\mu_0I/(2\pi R)=\mu_0J_0R/3$ ✓.</p>`}
  ],
  mcq:[
  {id:"q1", q:String.raw`<p>A proton moves in the $+x$ direction through a uniform magnetic field pointing in the $+z$ direction. The magnetic force on the proton points in the</p>`, choices:["$+y$ direction","$-y$ direction","$+z$ direction","$-x$ direction","$+x$ direction"], a:1,
   why:String.raw`<p>$\hat x\times\hat z=-\hat y$ (since $\hat z\times\hat x=\hat y$), and the proton is positive, so the force is along $-y$. The $+y$ choice would be right for an electron or for $\hat z\times\hat x$ order mistakes. The force is never along $\vec v$ or $\vec B$.</p>`},
  {id:"q2", q:String.raw`<p>An electron moves to the right in a region where the magnetic field points into the page. The force on the electron is directed</p>`, choices:["up the page","down the page","into the page","out of the page","to the right"], a:1,
   why:String.raw`<p>For a positive charge, $\hat x\times(-\hat z)=+\hat y$ (up). The electron is negative, so the force reverses: down the page. The tempting wrong answer, up, is the force on a positive charge.</p>`},
  {id:"q3", q:String.raw`<p>A charged particle moves in a region of uniform magnetic field with its velocity perpendicular to the field. Which quantity does the field change?</p>`, choices:["The particle's speed","The particle's kinetic energy","The direction of the particle's momentum","The magnitude of the particle's momentum","The particle's mass-to-charge ratio"], a:2,
   why:String.raw`<p>The force is perpendicular to $\vec v$, so it does zero work: speed, kinetic energy and momentum magnitude are all constant. Only the direction of the velocity (and so of the momentum) changes.</p>`},
  {id:"q4", q:String.raw`<p>A proton and an alpha particle (charge $+2e$, mass about $4m_p$) enter the same uniform magnetic field perpendicular to it, both with the <i>same kinetic energy</i>. The ratio of the radius of the alpha's orbit to the proton's is closest to</p>`, choices:["$1/2$","$1$","$2$","$4$","$1/4$"], a:1,
   why:String.raw`<p>$r=\sqrt{2mK}/(qB)$. Relative to the proton, the alpha has $\sqrt4/2=1$. The heavier mass increases $r$ by 2 but the double charge decreases it by 2. Assuming the larger mass gives a larger orbit forgets the charge.</p>`},
  {id:"q5", q:String.raw`<p>An electron ($m=9.11\times10^{-31}$ kg) enters a uniform $0.010$ T field with speed $4.0\times10^6$ m/s at $30^\circ$ to the field direction. The distance it advances along the field in one turn of its helical path (the pitch) is closest to</p>`, choices:["$0.62$ cm","$1.2$ cm","$2.5$ cm","$3.6$ cm","$7.1$ cm"], a:1,
   why:String.raw`<p>$T=2\pi m/(eB)=3.57\times10^{-9}$ s, $v_\parallel=v\cos30^\circ=3.46\times10^6$ m/s, pitch $=v_\parallel T=1.24\times10^{-2}$ m. Using $v\sin30^\circ$ (the perpendicular component) for the pitch gives $0.71$ cm, the wrong component.</p>`},
  {id:"q6", q:String.raw`<p>In a velocity selector the uniform electric and magnetic fields are perpendicular to each other and to the beam, with $E=6.0\times10^3$ V/m and $B=0.030$ T. Ions pass undeflected if their speed is</p>`, choices:["$2.0\\times10^5$ m/s","$5.0\\times10^{-6}$ m/s","$1.8\\times10^2$ m/s","$2.0\\times10^{4}$ m/s","it depends on the ion's charge"], a:0,
   why:String.raw`<p>$qE=qvB\Rightarrow v=E/B=6000/0.030=2.0\times10^5$ m/s. The charge cancels, so the selector works for any charge and mass (the choice $B/E$ has the ratio inverted).</p>`},
  {id:"q7", q:String.raw`<p>A straight wire of length $0.50$ m carries $4.0$ A in a uniform $0.20$ T field making an angle of $30^\circ$ with the wire. The magnitude of the force on the wire is</p>`, choices:["$0.10$ N","$0.20$ N","$0.35$ N","$0.40$ N","zero"], a:1,
   why:String.raw`<p>$F=ILB\sin\theta=(4.0)(0.50)(0.20)\sin30^\circ=0.20$ N. Omitting the sine gives $0.40$ N.</p>`},
  {id:"q8", q:String.raw`<p>Two long parallel wires carry currents in the same direction, $I$ in wire 1 and $2I$ in wire 2. Which statement is correct?</p>`, choices:["Wire 2 attracts wire 1 with twice the force that wire 1 exerts on wire 2","The wires repel each other with equal forces","The wires attract each other with equal magnitude forces","The wires attract each other, and the force on wire 1 is half that on wire 2","There is no net force between the wires because the currents are parallel"], a:2,
   why:String.raw`<p>Parallel currents attract. The forces form a Newton's-third-law pair, each with magnitude $\mu_0(I)(2I)L/(2\pi d)$. Wire 2 carries more current but sits in a weaker field (made by the smaller current in wire 1), so the two forces come out equal.</p>`},
  {id:"q9", q:String.raw`<p>A flat rectangular coil of 100 turns, each of area $0.010$ m², carries $2.0$ A. It is placed in a uniform $0.50$ T field with the plane of the coil parallel to the field. The torque on the coil is</p>`, choices:["zero","$0.50$ N·m","$1.0$ N·m","$50$ N·m","$100$ N·m"], a:2,
   why:String.raw`<p>The normal is perpendicular to $\vec B$, so $\sin\phi=1$: $\tau=NIAB=(100)(2.0)(0.010)(0.50)=1.0$ N·m. Zero would be correct if the coil's plane were perpendicular to $\vec B$.</p>`},
  {id:"q10", q:String.raw`<p>A wire carrying $8.0$ A is bent into a semicircle of radius $0.20$ m, with straight leads that point directly toward the center of the semicircle (so the leads' lines pass through the center). The magnitude of $B$ at the center is closest to</p>`, choices:["$1.3\\times10^{-5}$ T","$2.5\\times10^{-5}$ T","$5.0\\times10^{-5}$ T","$6.3\\times10^{-6}$ T","zero"], a:0,
   why:String.raw`<p>The straight leads contribute zero (their $d\vec l$ is parallel to $\hat r$ at the center). The semicircle gives $\mu_0I/(4R)=(4\pi\times10^{-7})(8)/(0.80)=1.26\times10^{-5}$ T. The full-circle formula $\mu_0I/2R$ would double it.</p>`},
  {id:"q11", q:String.raw`<p>A circular loop of radius $R$ carries current. The magnitude of $B$ on the axis at a distance $z=R$ from the center, compared with its value $B_0$ at the center, is</p>`, choices:["$B_0/2$","$B_0/\\sqrt2$","$0.35\\,B_0$","$B_0/8$","$B_0/4$"], a:2,
   why:String.raw`<p>$B_z/B_0=R^3/(R^2+z^2)^{3/2}=2^{-3/2}=0.354$. At $z=R$ each element is farther away ($r^2=2R^2$) and its field is tilted, only the axial fraction $R/r$ survives. Forgetting that fraction would give $0.5\,B_0$.</p>`},
  {id:"q12", q:String.raw`<p>A long solenoid has $2000$ turns per meter and carries $3.0$ A. The magnetic field magnitude well inside it is closest to</p>`, choices:["$7.5\\times10^{-3}$ T","$1.5\\times10^{-2}$ T","$2.4\\times10^{-3}$ T","$7.5\\times10^{-6}$ T","zero"], a:0,
   why:String.raw`<p>$B=\mu_0nI=(4\pi\times10^{-7})(2000)(3.0)=7.5\times10^{-3}$ T. The field outside an ideal solenoid is (nearly) zero, but inside it is not.</p>`},
  {id:"q13", q:String.raw`<p>A toroid has $500$ turns and carries $2.0$ A. At a point inside the core at radius $0.10$ m from the toroid's central axis, $B$ is</p>`, choices:["$1.0\\times10^{-3}$ T","$2.0\\times10^{-3}$ T","$4.0\\times10^{-3}$ T","$1.3\\times10^{-2}$ T","zero"], a:1,
   why:String.raw`<p>$B=\mu_0NI/(2\pi r)=(2\times10^{-7})(1000)/0.10=2.0\times10^{-3}$ T. Dropping the factor of $2\pi$ in the denominator, or using $\mu_0NI$ alone, gives the wrong sizes. Unlike a solenoid, $B$ here depends on position through $1/r$.</p>`}
  ],
  frq:[
  {id:"f1", type:"Qualitative/quantitative translation", title:"Selector and spectrometer",
   prompt:String.raw`<p>A beam of positive ions, each of charge $+e$ and mass $m$, travels to the right (in the $+x$ direction) through a region between two charged plates, as in a velocity selector. A uniform magnetic field $B_1$ points into the page in this region. The electric field $E$ between the plates points toward the bottom of the page.</p>
<p>(a) On a sketch, draw and label the direction of the electric force and of the magnetic force on an ion. Explain why they can balance.<br>
(b) Derive an expression for the speed $v$ of the ions that pass through undeflected. Does it depend on $m$ or $e$?<br>
(c) Ions emerging from the selector enter a second region containing a uniform field $B_2$ (into the page, no electric field) and move in a semicircle. Derive an expression for the diameter of the path in terms of $m$, $e$, $E$, $B_1$ and $B_2$, and state whether the ions circulate clockwise or counterclockwise.<br>
(d) Ions of two different masses give diameters of $0.48$ m and $0.56$ m when $E=2.0\times10^4$ V/m, $B_1=0.050$ T, $B_2=0.20$ T. Find the ratio of the masses and the mass of the lighter ion.<br>
(e) An ion with speed slightly larger than $E/B_1$ enters the selector. Explain, with reference to the forces, which way it deflects.</p>`,
   pts:[
    {p:1,d:"Electric force on a positive ion is down (along $\\vec E$); magnetic force by RHR is up ($\\hat x\\times(-\\hat z)=+\\hat y$); opposite, so can cancel"},
    {p:1,d:"Sets $eE=evB_1$"},
    {p:1,d:"$v=E/B_1$, independent of $m$ and $e$"},
    {p:1,d:"Uses $evB_2=mv^2/r$ to get $r=mv/(eB_2)$"},
    {p:1,d:"Diameter $d=2mE/(eB_1B_2)$"},
    {p:1,d:"Counterclockwise for a positive ion (initial force up when moving right, field into page)"},
    {p:1,d:"Mass ratio equals diameter ratio $=0.56/0.48=1.17$ (14:12); $m=d\\,eB_1B_2/(2E)=0.48(1.6\\times10^{-19})(0.05)(0.2)/(2\\cdot2\\times10^4)=1.9\\times10^{-26}$ kg"},
    {p:1,d:"Faster ion: magnetic force $evB_1$ exceeds $eE$, net force up, deflects up (toward the magnetic-force side)"}],
   solution:String.raw`<p>(a) Positive charge: $\vec F_E=e\vec E$ points down. $\vec F_B=e\vec v\times\vec B$ with $\vec v=v\hat x$, $\vec B=-B_1\hat z$: $\hat x\times(-\hat z)=+\hat y$, up. They are opposite, so the net force can vanish.</p>
<p>(b) $eE=evB_1\Rightarrow v=E/B_1$. Both $m$ and $e$ cancel.</p>
<p>(c) $evB_2=mv^2/r\Rightarrow r=mv/(eB_2)$, so the diameter is $2r=\dfrac{2mE}{eB_1B_2}$. Initially the force is up, so the center of the circle is above: the ion turns counterclockwise (turns upward).</p>
<p>(d) $d\propto m$, so $m_2/m_1=0.56/0.48=1.17$ (like 14 u : 12 u). $m_1=\dfrac{d\,eB_1B_2}{2E}=\dfrac{(0.48)(1.6\times10^{-19})(0.050)(0.20)}{2(2.0\times10^4)}=1.9\times10^{-26}$ kg (about 12 u).</p>
<p>(e) The magnetic force $evB_1>eE$, so the net force is up: the ion drifts toward the upper plate. (Slower ions drift down.)</p>`},
  {id:"f2", type:"Mathematical routines", title:"Field of a current loop",
   prompt:String.raw`<p>A circular loop of radius $R$ lies in the $xy$-plane, centered at the origin, and carries a steady current $I$ counterclockwise as seen from $+z$.</p>
<p>(a) Starting from the Biot-Savart law, show that the magnitude of $dB$ from a length element $dl$ at a point on the $z$ axis at height $z$ is $\dfrac{\mu_0I\,dl}{4\pi(R^2+z^2)}$, and state its direction relative to the radial direction of the loop.<br>
(b) Explain by symmetry why the net field on the axis has no component perpendicular to the axis.<br>
(c) Integrate to show $B_z=\dfrac{\mu_0IR^2}{2(R^2+z^2)^{3/2}}$ and give the direction of $\vec B$ on the axis.<br>
(d) Find $B$ at the center, and find the limit for $z\gg R$ in terms of the dipole moment $\mu=I\pi R^2$.<br>
(e) At what two values of $z$ is the magnitude of $B_z$ equal to half its center value? Give the answer in units of $R$.<br>
(f) A second identical loop is placed coaxially at $z=d$ carrying the same current in the same sense. The single-loop function $B_z(z)$ is concave down for $|z|&lt;R/2$ and concave up for $|z|>R/2$. Use this to decide whether the total field at the midpoint $z=d/2$ is a local maximum or minimum along the axis for $d&lt;R$, for $d=R$, and for $d>R$.</p>`,
   pts:[
    {p:1,d:"$d\\vec l\\perp\\hat r$ so $|d\\vec l\\times\\hat r|=dl$, $r^2=R^2+z^2$, giving the stated $dB$; direction perpendicular to both $d\\vec l$ and $\\vec r$ (tilted by angle with the axis)"},
    {p:1,d:"Symmetry argument: perpendicular components of opposite elements cancel"},
    {p:1,d:"Axial component factor $R/\\sqrt{R^2+z^2}$"},
    {p:1,d:"Integrates $\\oint dl=2\\pi R$ to get the stated $B_z$"},
    {p:1,d:"Direction $+z$ (RHR-2: fingers along counterclockwise current, thumb up)"},
    {p:1,d:"Center $\\mu_0I/2R$; far field $\\mu_0\\mu/(2\\pi z^3)$"},
    {p:1,d:"Solves $(1+z^2/R^2)^{3/2}=2$: $z=\\pm R\\sqrt{2^{2/3}-1}=\\pm0.77R$"},
    {p:1,d:"Midpoint curvature is $2B_1''(d/2)$: local maximum for $d&lt;R$, zero curvature for $d=R$ (Helmholtz pair, very uniform), local minimum for $d>R$"}],
   solution:String.raw`<p>(a) $d\vec B=\frac{\mu_0}{4\pi}\frac{I\,d\vec l\times\hat r}{r^2}$. The element lies on the circle, the field point is on the axis, so $\vec r$ has components $(-R\hat\rho,\ z\hat z)$ and $d\vec l$ is tangential, hence perpendicular to $\vec r$: $|d\vec l\times\hat r|=dl$, $r^2=R^2+z^2$ and $dB=\mu_0I\,dl/[4\pi(R^2+z^2)]$. $d\vec B$ is perpendicular to $\vec r$ and $d\vec l$, so it tilts out of the axial direction by the angle whose cosine is $R/\sqrt{R^2+z^2}$.</p>
<p>(b) An element on the opposite side has the same $dB$ but its perpendicular component points the opposite way; summing over the ring cancels all perpendicular components.</p>
<p>(c) $B_z=\oint dB\cos\alpha=\dfrac{\mu_0I}{4\pi(R^2+z^2)}\dfrac{R}{\sqrt{R^2+z^2}}(2\pi R)=\dfrac{\mu_0IR^2}{2(R^2+z^2)^{3/2}}$, along $+z$ (RHR: counterclockwise current, thumb out of the page toward $+z$).</p>
<p>(d) $z=0$: $B_0=\mu_0I/2R$. $z\gg R$: $B\approx\mu_0IR^2/2z^3=\mu_0\mu/(2\pi z^3)$ with $\mu=I\pi R^2$.</p>
<p>(e) $\dfrac{B_z}{B_0}=\dfrac{1}{(1+z^2/R^2)^{3/2}}=\dfrac12\Rightarrow 1+z^2/R^2=2^{2/3}=1.587\Rightarrow z=\pm0.77R$.</p>
<p>(f) By symmetry the total field has zero slope at the midpoint, and its second derivative there is $2B_1''(d/2)$ (each loop contributes the same, evaluated a distance $d/2$ from its own center). Since $B_1''<0$ for $|z|&lt;R/2$, the midpoint is a local maximum when $d&lt;R$; at $d=R$ the curvature vanishes (a Helmholtz pair gives an unusually uniform field); for $d>R$, $B_1''>0$ and the midpoint is a local minimum between two peaks.</p>`},
  {id:"f3", type:"Mathematical routines", title:"Ampère's law with a nonuniform current",
   prompt:String.raw`<p>A long straight cylindrical conductor of radius $R$ carries a current along its axis with current density $J(r)=J_0\left(1-\dfrac rR\right)$ for $r\le R$ and $0$ outside, where $J_0$ is a positive constant and $r$ is the distance from the axis.</p>
<p>(a) Find the total current $I$ in terms of $J_0$ and $R$.<br>
(b) State Ampère's law and the symmetry argument that lets you evaluate it here. Show the Amperian loop on a sketch.<br>
(c) Derive $B(r)$ for $r\ge R$.<br>
(d) Derive $B(r)$ for $r\le R$.<br>
(e) Show that $B$ is continuous at $r=R$, and find the radius inside the conductor at which $B$ is largest. Express the maximum value in terms of $\mu_0$, $J_0$ and $R$.<br>
(f) Sketch $B$ versus $r$ from $0$ to $3R$. Explain in words why $B$ at $r=R$ is smaller than its maximum inside.</p>`,
   pts:[
    {p:1,d:"$I=\\int_0^RJ\\,2\\pi r\\,dr=2\\pi J_0(R^2/2-R^2/3)=\\pi J_0R^2/3$"},
    {p:1,d:"States $\\oint\\vec B\\cdot d\\vec l=\\mu_0I_{enc}$; $B$ tangential and constant in magnitude on a circle coaxial with the wire; loop sketched"},
    {p:1,d:"Outside: $B=\\mu_0I/2\\pi r=\\mu_0J_0R^2/(6r)$"},
    {p:1,d:"Inside: $I_{enc}=2\\pi J_0(r^2/2-r^3/3R)$"},
    {p:1,d:"Inside: $B=\\mu_0J_0(r/2-r^2/3R)$"},
    {p:1,d:"Continuity: both give $\\mu_0J_0R/6$ at $r=R$"},
    {p:1,d:"Maximizes: $dB/dr=0\\Rightarrow r=3R/4$, $B_{max}=3\\mu_0J_0R/16$"},
    {p:1,d:"Sketch: rises (concave down) to a peak at $3R/4$, decreases slightly to $R$, then falls as $1/r$; explanation: $J$ is small near the surface so extra enclosed current added there is less than the $1/r$ geometric dilution"}],
   solution:String.raw`<p>(a) $I=\int_0^RJ_0\left(1-\frac rR\right)2\pi r\,dr=2\pi J_0\left(\frac{R^2}{2}-\frac{R^2}{3}\right)=\dfrac{\pi J_0R^2}{3}$.</p>
<p>(b) $\oint\vec B\cdot d\vec l=\mu_0I_{\text{enc}}$. By the cylindrical symmetry of the current, $\vec B$ is tangential to circles around the axis with the same magnitude everywhere on a given circle. Use a circular loop of radius $r$ coaxial with the conductor: $\oint\vec B\cdot d\vec l=B(2\pi r)$.</p>
<p>(c) For $r\ge R$, $I_{\text{enc}}=I$: $B=\dfrac{\mu_0I}{2\pi r}=\dfrac{\mu_0J_0R^2}{6r}$.</p>
<p>(d) For $r\le R$, $I_{\text{enc}}=2\pi J_0\left(\dfrac{r^2}{2}-\dfrac{r^3}{3R}\right)$, so $B=\dfrac{\mu_0I_{\text{enc}}}{2\pi r}=\mu_0J_0\left(\dfrac r2-\dfrac{r^2}{3R}\right)$.</p>
<p>(e) At $r=R$ inside: $\mu_0J_0(R/2-R/3)=\mu_0J_0R/6$, equal to the outside formula. $dB/dr=\mu_0J_0(\tfrac12-\tfrac{2r}{3R})=0\Rightarrow r=\tfrac34R$, and $B_{\max}=\mu_0J_0\left(\tfrac{3R}{8}-\tfrac{3R}{16}\right)=\dfrac{3\mu_0J_0R}{16}$ (compare with $B(R)=\mu_0J_0R/6=0.167\,\mu_0J_0R$ versus $0.1875\,\mu_0J_0R$).</p>
<p>(f) The graph rises, flattens at a peak at $r=0.75R$, dips a little to $B(R)$, then decays as $1/r$. Beyond $0.75R$ the current in each added shell is tiny (the density vanishes at the surface), so the enclosed current grows slower than $r$, and $B=\mu_0I_{\text{enc}}/2\pi r$ decreases.</p>`}
  ]
});
