PH.unit({
  id:"e1", course:"em", order:100, hours:12,
  title:"E&M 1: Electrostatics",
  blurb:"Charges at rest: Coulomb's law, electric fields by integration, Gauss's law, and electric potential. The biggest unit in E&M, and the foundation for everything after it.",
  needs:["prereq1","prereq2"],
  goals:[
    "Use Coulomb's law and superposition (as vectors, in components) for point charges",
    "Compute $\\vec E$ for rods, rings and disks by choosing $dq$, using symmetry, and integrating; check limiting cases",
    "State Gauss's law as a surface integral and pick Gaussian surfaces for spheres, cylinders and planes",
    "Find $E(r)$ for a non-uniform charge density by integrating $Q_{enc}=\\int\\rho\\,dV$",
    "Move between $\\vec E$ and $V$ with $V=-\\int\\vec E\\cdot d\\vec l$ and $E_x=-\\partial V/\\partial x$",
    "Sketch and read $E(r)$ and $V(r)$ graphs for spheres and shells, and compute the energy of a charge configuration"
  ],
  lessons:[
  {id:"l1", title:"Charge, Coulomb's law and the electric field", videos:[{title:"Lec 01: What holds our world together?", url:"https://www.youtube.com/watch?v=Lx64cq0HeXY", src:"Walter Lewin lectures (MIT 8.02)", note:"Charge and Coulomb's law with live demos."}, {title:"Lec 02: Electric Field and Dipoles", url:"https://www.youtube.com/watch?v=JSa7_pEVdpA", src:"Walter Lewin lectures (MIT 8.02)", note:"The electric field and superposition."}], html:String.raw`
<p><b>Electric charge</b> is a property of matter that makes it feel (and exert) electric forces. It comes in two kinds, called positive and negative, and is measured in <b>coulombs</b> (C). A proton carries $+e$ and an electron $-e$, with $e=1.6\times10^{-19}$ C. Two facts hold without exception:</p>
<ul><li><b>Quantization:</b> any charge is a whole number times $e$ (for everyday objects, so many electrons that charge looks continuous).</li>
<li><b>Conservation:</b> the total charge of an isolated system never changes. Charge can be moved from place to place, but never created or destroyed. Rubbing two objects together moves electrons; it does not make them.</li></ul>
<p>A <b>conductor</b> is a material in which charge moves freely (metals); an <b>insulator</b> holds charge where you put it.</p>
<p>A <b>force</b> is a push or pull, a vector measured in newtons (N). <b>Coulomb's law</b> gives the force between two point charges, with $\hat r$ the unit vector pointing from the source charge toward the charge feeling the force:</p>
$$\vec F=\frac{1}{4\pi\epsilon_0}\frac{q_1q_2}{r^2}\hat r=k\frac{q_1q_2}{r^2}\hat r,\qquad k=\frac{1}{4\pi\epsilon_0}=9\times10^{9}\ \text{N·m}^2/\text{C}^2,\quad \epsilon_0=8.85\times10^{-12}\ \text{C}^2/(\text{N·m}^2)$$
<p>Like charges repel, unlike attract; the two forces are equal and opposite. The $1/r^2$ shape is the same as Newton's gravity, but charge comes in both signs, so electric forces can cancel and gravity cannot.</p>
<svg class="fig" viewBox="0 0 350 135" width="350" role="img" aria-label="Left: two positive charges repel with equal and opposite forces. Right: field lines of a positive point charge pointing radially outward.">
<defs><marker id="a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<circle cx="70" cy="70" r="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="64" y="75">+</text>
<circle cx="170" cy="70" r="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="164" y="75">+</text>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="56" y1="70" x2="18" y2="70" marker-end="url(#a1)"/><line x1="184" y1="70" x2="222" y2="70" marker-end="url(#a1)"/></g>
<text x="20" y="58">F on q₁</text><text x="170" y="52">F on q₂</text><text x="105" y="115">q₁, q₂ same sign: repel</text>
<circle cx="290" cy="70" r="12" fill="none" stroke="currentColor" stroke-width="2"/><text x="284" y="75">+</text>
<g stroke="currentColor" stroke-width="1.5" fill="none">
<line x1="304" y1="70" x2="342" y2="70" marker-end="url(#a1)"/><line x1="300" y1="60" x2="327" y2="33" marker-end="url(#a1)"/><line x1="290" y1="56" x2="290" y2="18" marker-end="url(#a1)"/><line x1="280" y1="60" x2="253" y2="33" marker-end="url(#a1)"/><line x1="276" y1="70" x2="238" y2="70" marker-end="url(#a1)"/><line x1="280" y1="80" x2="253" y2="107" marker-end="url(#a1)"/><line x1="290" y1="84" x2="290" y2="122" marker-end="url(#a1)"/><line x1="300" y1="80" x2="327" y2="107" marker-end="url(#a1)"/></g></svg>
<p><b>Superposition:</b> the net force on a charge from several others is the vector sum of the individual Coulomb forces. Add components, not magnitudes.</p>
<p>The <b>electric field</b> $\vec E$ at a point is the force per unit charge a small positive test charge $q_0$ would feel there, $\vec E=\vec F/q_0$. It is a property of the source charges and the point in space, whether or not a test charge is present. Then the force on any charge $q$ is $\vec F=q\vec E$. For a point charge $q$ at the origin:</p>
$$\vec E=k\frac{q}{r^2}\hat r\qquad(\text{units: N/C})$$
<p>Fields also superpose: $\vec E=\sum_i k\,q_i\hat r_i/r_i^2$. Field lines show direction (tangent to the line), and they are denser where the field is stronger. They leave positive charges and end on negative ones.</p>
<div class="box trap"><b>Traps:</b> (1) $\vec F=q\vec E$: on a negative charge the force points <i>opposite</i> to $\vec E$. (2) $\hat r$ points <i>from the source to the field point</i>, so a negative source gives a field pointing toward it. (3) Never add field magnitudes of two charges without checking directions.</div>`},
  {id:"l2", title:"Fields of continuous charge distributions", videos:[{title:"Search: electric field of a ring, disk and rod by integration", url:"https://www.youtube.com/results?search_query=electric+field+ring+disk+rod+integration+dq", src:"YouTube search", note:"Look for derivations with dq = lambda dx and symmetry arguments."}], html:String.raw`
<p>For a distribution you cannot sum over a finite list of charges, so chop it into pieces $dq$, treat each piece as a point charge, and integrate. The charge element depends on the geometry:</p>
$$dq=\lambda\,dx\ (\text{line}),\qquad dq=\sigma\,dA\ (\text{surface}),\qquad dq=\rho\,dV\ (\text{volume})$$
<p>where $\lambda,\sigma,\rho$ are the charge per length, area, volume (they may vary with position).</p>
<div class="box key"><b>The method.</b> (1) Sketch the distribution, the field point $P$, and one element $dq$. (2) Write $dE=k\,dq/r^2$ with $r$ the distance from $dq$ to $P$. (3) <b>Use symmetry first:</b> pair each element with a mirror partner and cancel components that must cancel. (4) Express the surviving component and $r$ in terms of one integration variable. (5) Integrate. (6) Check limits (far away, and an extreme geometry).</div>
<p><b>Ring on its axis.</b> A ring of radius $R$ and total charge $Q$, field point on the axis a distance $z$ from the center. Every $dq$ is the same distance $\sqrt{z^2+R^2}$ from $P$; its field has an axial piece $dE\cos\theta=dE\,\dfrac{z}{\sqrt{z^2+R^2}}$ and a perpendicular piece that cancels against the element on the opposite side. All the surviving pieces have the same distance and angle, so they come out of the integral:</p>
$$E_z=\int\frac{k\,dq}{z^2+R^2}\frac{z}{\sqrt{z^2+R^2}}=\frac{kQ\,z}{(z^2+R^2)^{3/2}}$$
<p>Checks: for $z\gg R$ this is $kQ/z^2$ (a point charge from far away); at $z=0$ it is $0$ (symmetry). It is largest at $z=R/\sqrt2$.</p>
<svg class="fig" viewBox="0 0 340 180" width="340" role="img" aria-label="A ring seen at an angle with axis through its center, a field point P on the axis, and field contributions from two opposite charge elements whose perpendicular parts cancel.">
<defs><marker id="a2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<ellipse cx="100" cy="90" rx="22" ry="62" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="30" y1="90" x2="330" y2="90" stroke="currentColor" stroke-dasharray="4 3"/>
<circle cx="100" cy="28" r="4" fill="currentColor"/><circle cx="100" cy="152" r="4" fill="currentColor"/><circle cx="240" cy="90" r="3.5" fill="currentColor"/>
<line x1="100" y1="28" x2="240" y2="90" stroke="currentColor" stroke-width=".8"/><line x1="100" y1="152" x2="240" y2="90" stroke="currentColor" stroke-width=".8"/>
<g stroke="currentColor" stroke-width="2" fill="none"><line x1="240" y1="90" x2="292" y2="113" marker-end="url(#a2)"/><line x1="240" y1="90" x2="292" y2="67" marker-end="url(#a2)"/><line x1="240" y1="90" x2="305" y2="90" stroke-width="3" marker-end="url(#a2)"/></g>
<text x="104" y="22">dq</text><text x="104" y="168">dq</text><text x="236" y="108">P</text><text x="305" y="84">E</text><text x="290" y="128">dE</text><text x="290" y="62">dE</text>
<text x="160" y="105">z</text><text x="60" y="94">R</text></svg>
<p><b>Disk on its axis.</b> A disk of radius $R$ with uniform surface density $\sigma$ is a stack of rings. A ring of radius $s$ and width $ds$ has $dq=\sigma\,2\pi s\,ds$, so</p>
$$E_z=\int_0^R\frac{k\,(\sigma2\pi s\,ds)\,z}{(z^2+s^2)^{3/2}}=2\pi k\sigma z\left[-\frac{1}{\sqrt{z^2+s^2}}\right]_0^R=2\pi k\sigma\left(1-\frac{z}{\sqrt{z^2+R^2}}\right)=\frac{\sigma}{2\epsilon_0}\left(1-\frac{z}{\sqrt{z^2+R^2}}\right)$$
<p>Limits: $R\to\infty$ (an infinite plane) gives $E=\sigma/2\epsilon_0$, independent of distance. For $z\gg R$, $1-(1+R^2/z^2)^{-1/2}\approx R^2/2z^2$, so $E\to k(\sigma\pi R^2)/z^2=kQ/z^2$.</p>
<p><b>Straight rod.</b> A rod of length $L$ and charge $Q$ along the $x$ axis from $-L/2$ to $L/2$, field point on the perpendicular bisector at height $y$. By symmetry the $x$-components cancel; with $dq=\lambda\,dx$ and $\lambda=Q/L$:</p>
$$E_y=\int_{-L/2}^{L/2}\frac{k\lambda\,dx}{x^2+y^2}\frac{y}{\sqrt{x^2+y^2}}=\frac{k\lambda L}{y\sqrt{y^2+L^2/4}}=\frac{kQ}{y\sqrt{y^2+L^2/4}}$$
<p>Limits: $y\gg L$ gives $kQ/y^2$; $L\to\infty$ at fixed $\lambda$ gives $E=2k\lambda/y=\lambda/(2\pi\epsilon_0y)$, the infinite line charge.</p>
<div class="box trap"><b>Trap:</b> $r$ in $dE=k\,dq/r^2$ is the distance from the <i>element</i> to $P$, not from the origin. And do not forget that $dE$ is a vector: only integrate the component that survives symmetry.</div>`},
  {id:"l3", title:"Electric flux and Gauss's law", videos:[{title:"Physics 37.1 Gauss's Law Understood", url:"https://www.youtube.com/watch?v=6t8KCC-FeC8", src:"ilectureonline (Michel van Biezen)", note:"Series tagged AP Physics C: E&M; flux and Gauss's law."}], html:String.raw`
<p><b>Flux</b> measures how much field passes through a surface. For a small patch of area $dA$ with outward normal $\hat n$ (a vector $d\vec A=\hat n\,dA$), the flux is $E\cdot dA$ projected along the normal, and for a whole surface:</p>
$$\Phi_E=\int\vec E\cdot d\vec A\qquad(\text{units: N·m}^2/\text{C})$$
<p>For uniform $\vec E$ crossing a flat area $A$ at angle $\theta$ between $\vec E$ and the normal, $\Phi_E=EA\cos\theta$. For a <b>closed</b> surface the outward normal is the convention: field leaving counts positive, entering counts negative.</p>
<p><b>Gauss's law</b> says that the flux through <i>any</i> closed surface depends only on the charge inside it:</p>
$$\oint\vec E\cdot d\vec A=\frac{Q_{enc}}{\epsilon_0}$$
<p><b>Why it is true.</b> Take a point charge $q$ and a sphere of radius $r$ around it. $\vec E$ is radial, so $\vec E\parallel d\vec A$ everywhere, and $|\vec E|=kq/r^2$ is constant on the sphere: $\oint\vec E\cdot d\vec A=\dfrac{kq}{r^2}\cdot4\pi r^2=4\pi kq=q/\epsilon_0$. The $r^2$ cancels, which is the fingerprint of the inverse-square law: the same number of field lines pass through every concentric sphere. Any other closed shape around $q$ catches the same lines. A charge outside the surface sends lines in one side and out the other, contributing zero net flux.</p>
<svg class="fig" viewBox="0 0 340 150" width="340" role="img" aria-label="Left: a sphere around a positive charge with radial field arrows crossing it, net flux q over epsilon zero. Right: a closed blob with an outside charge, field lines entering and leaving, net flux zero.">
<defs><marker id="a3" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<circle cx="80" cy="70" r="42" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="2"/>
<circle cx="80" cy="70" r="9" fill="none" stroke="currentColor" stroke-width="2"/><text x="75" y="75">+</text>
<g stroke="currentColor" stroke-width="1.5"><line x1="122" y1="70" x2="152" y2="70" marker-end="url(#a3)"/><line x1="110" y1="40" x2="131" y2="19" marker-end="url(#a3)"/><line x1="50" y1="40" x2="29" y2="19" marker-end="url(#a3)"/><line x1="38" y1="70" x2="8" y2="70" marker-end="url(#a3)"/><line x1="80" y1="112" x2="80" y2="140" marker-end="url(#a3)"/><line x1="80" y1="28" x2="80" y2="6" marker-end="url(#a3)"/></g>
<text x="40" y="148">flux = q/ε₀</text>
<path d="M235,45 C260,30 300,35 315,60 C325,90 295,115 262,108 C232,102 215,70 235,45 z" fill="currentColor" fill-opacity=".08" stroke="currentColor" stroke-width="2"/>
<circle cx="192" cy="80" r="8" fill="none" stroke="currentColor" stroke-width="2"/><text x="187" y="85">+</text>
<g stroke="currentColor" stroke-width="1.5" fill="none"><line x1="202" y1="72" x2="236" y2="62" marker-end="url(#a3)"/><line x1="202" y1="88" x2="232" y2="92" marker-end="url(#a3)"/><line x1="305" y1="52" x2="335" y2="40" marker-end="url(#a3)"/><line x1="300" y1="100" x2="330" y2="112" marker-end="url(#a3)"/></g>
<text x="232" y="138">net flux = 0</text></svg>
<div class="box key"><b>Gauss's law is always true, but only <i>useful</i> when symmetry lets you pull $E$ out of the integral.</b> The $\vec E$ in the integral is the <i>total</i> field from all charges, inside and outside; $Q_{enc}$ counts only the charge inside the surface.</div>
<div class="box trap"><b>Trap:</b> "Flux is zero, therefore $\vec E$ is zero on the surface" is false. It only says as much field enters as leaves. Similarly, moving a charge around <i>inside</i> a closed surface changes $\vec E$ on the surface but not the total flux.</div>`},
  {id:"l4", title:"Using Gauss's law: spheres, cylinders, planes, conductors", videos:[{title:"Search: Gauss's law sphere cylinder plane non-uniform charge density", url:"https://www.youtube.com/results?search_query=gauss%27s+law+sphere+cylinder+plane+non-uniform+charge+density+calculus", src:"YouTube search", note:"Look for the Gaussian surface choice and Q_enc integral."}], html:String.raw`
<p>Pick a Gaussian surface on which $\vec E$ is either constant and parallel to $d\vec A$, or perpendicular to $d\vec A$ (zero flux). That requires one of three symmetries:</p>
<table><tr><th>Symmetry</th><th>Gaussian surface</th><th>Result of Gauss</th></tr>
<tr><td>Spherical</td><td>concentric sphere, radius $r$</td><td>$E\,(4\pi r^2)=Q_{enc}/\epsilon_0$</td></tr>
<tr><td>Cylindrical (long line)</td><td>coaxial cylinder, radius $r$, length $\ell$</td><td>$E\,(2\pi r\ell)=Q_{enc}/\epsilon_0$ (end caps have zero flux)</td></tr>
<tr><td>Planar (large sheet)</td><td>pillbox through the sheet, area $A$ each face</td><td>$2EA=Q_{enc}/\epsilon_0$ (sides have zero flux)</td></tr></table>
<p><b>Results to know</b> (you should be able to derive each):</p>
$$E_{\text{sphere, }r>R}=\frac{kQ}{r^2},\qquad E_{\text{line}}=\frac{\lambda}{2\pi\epsilon_0r}=\frac{2k\lambda}{r},\qquad E_{\text{sheet}}=\frac{\sigma}{2\epsilon_0}$$
<p><b>Uniformly charged solid sphere</b> (radius $R$, total charge $Q$). Inside, $Q_{enc}=Q\,r^3/R^3$ (charge is proportional to volume), so $E=\dfrac{kQ\,r}{R^3}$: linear in $r$. Outside, it looks like a point charge, $kQ/r^2$. A <b>thin shell</b> has $E=0$ inside and $kQ/r^2$ outside.</p>
<p><b>Non-uniform density.</b> When $\rho$ depends on $r$, you cannot use $Q_{enc}=\rho V$. Add up thin shells instead:</p>
$$Q_{enc}(r)=\int_0^r\rho(r')\,4\pi r'^2\,dr'\quad(\text{sphere}),\qquad Q_{enc}(r)=\int_0^r\rho(r')\,2\pi r'\ell\,dr'\quad(\text{cylinder of length }\ell)$$
<p>Example: $\rho=\rho_0r/R$ gives $Q_{enc}=\pi\rho_0r^4/R$ and so $E=\rho_0r^2/(4\epsilon_0R)$ inside (you will do this in an FRQ).</p>
<svg class="fig" viewBox="0 0 340 185" width="340" role="img" aria-label="Graph of electric field versus r for a uniformly charged solid sphere: a straight line rising up to radius R, then falling as one over r squared. A dashed curve shows a thin shell: zero inside, jump at R, then the same one over r squared.">
<line x1="40" y1="160" x2="325" y2="160" stroke="currentColor"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor"/>
<polyline points="40,160 140,40" fill="none" stroke="currentColor" stroke-width="2.5"/>
<polyline points="140,40 149,60.8 158,76.7 167,89 176,98.8 185,106.7 194,113.1 203,118.5 212,123 221,126.8 230,130 239,132.8 248,135.2 257,137.3 266,139.2 275,140.8 284,142.2 293,143.5 302,144.7 311,145.7 320,146.7" fill="none" stroke="currentColor" stroke-width="2.5"/>
<polyline points="40,160 140,160" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/><line x1="140" y1="160" x2="140" y2="40" stroke="currentColor" stroke-width="1.5" stroke-dasharray="5 3"/>
<line x1="140" y1="160" x2="140" y2="166" stroke="currentColor"/>
<text x="136" y="178">R</text><text x="310" y="176">r</text><text x="18" y="22">E</text><text x="48" y="60">solid sphere (solid)</text><text x="48" y="76">thin shell (dashed)</text><text x="200" y="100">∝ 1/r²</text></svg>
<p><b>Conductors in electrostatic equilibrium</b> (charges at rest). Inside the material $\vec E=0$ (otherwise free charges would move). Then Gauss's law with a surface inside the metal shows that there is no net charge in the bulk: all excess charge sits on the surface. At the surface the field is perpendicular to it with magnitude $E=\sigma/\epsilon_0$ (a pillbox with one face inside the metal, where there is no flux). A hollow in a conductor with no charge inside has no charge on its inner wall and no field in it. A charge $+Q$ placed inside a cavity induces $-Q$ on the cavity wall (so that $E=0$ in the metal).</p>
<div class="box trap"><b>Trap:</b> the $\sigma/2\epsilon_0$ of an isolated sheet and the $\sigma/\epsilon_0$ just outside a conductor are different. The sheet's field points away on both sides; the conductor's field is zero inside the metal and the whole $\sigma/\epsilon_0$ appears on the outside, because the rest of the charges in the conductor add their own contribution that exactly doubles the outside field and cancels it inside.</div>`},
  {id:"l5", title:"Electric potential and potential energy", videos:[{title:"8.02x - Lect 4 - Electrostatic Potential, Electric Energy, Equipotential Surfaces", url:"https://www.youtube.com/watch?v=QpVxj3XrLgk", src:"Walter Lewin lectures (MIT 8.02x)", note:"Potential, conservative field, eV."}, {title:"Electric potential energy", url:"https://www.youtube.com/watch?v=elJUghWSVh4", src:"Khan Academy", note:"Gentle introduction to potential energy of charges."}], html:String.raw`
<p><b>Work</b> is energy transferred by a force: for a force $\vec F$ along a path, $W=\int\vec F\cdot d\vec l$. <b>Kinetic energy</b> is $\tfrac12mv^2$, and the work done on a particle changes it ($W_{net}=\Delta K$). When the force depends only on position and the work between two points does not depend on the path (the electrostatic force is like that, a <i>conservative</i> force), you can define a <b>potential energy</b> $U$ with $W_{\text{by field}}=-\Delta U$. Total energy $K+U$ is then conserved.</p>
<p>Dividing by charge gives a property of the field alone, the <b>electric potential</b> $V=U/q$, in joules per coulomb $=$ <b>volts</b> (V). Only differences matter physically:</p>
$$V_B-V_A=-\int_A^B\vec E\cdot d\vec l,\qquad \Delta U=q\,\Delta V$$
<p>Interpretation: $-\int\vec E\cdot d\vec l$ is the work per unit charge you must do to move a charge slowly from $A$ to $B$ against the field. Moving along $\vec E$ means falling to lower $V$. Because the integral is path independent you may choose the easiest path (radial, or along an axis).</p>
<p><b>Point charge</b> (taking $V=0$ at infinity): $V=-\int_\infty^r\dfrac{kq}{r'^2}dr'=\dfrac{kq}{r}$. This is a <b>scalar</b>, and superposition is just addition (signs included):</p>
$$V=\sum_i\frac{kq_i}{r_i},\qquad V=\int\frac{k\,dq}{r}\ \text{(continuous)}$$
<p>This is much easier than fields: no components, no symmetry cancellations. For the ring on its axis every element is at the same distance, so $V=\dfrac{kQ}{\sqrt{z^2+R^2}}$.</p>
<p><b>From $V$ back to $\vec E$.</b> Differentiate the integral relation: $E_x=-\dfrac{dV}{dx}$, and in 3D $\vec E=-\nabla V=-\left(\dfrac{\partial V}{\partial x},\dfrac{\partial V}{\partial y},\dfrac{\partial V}{\partial z}\right)$ ($E$ points toward falling $V$; its size is the steepness). Check with the ring:</p>
$$E_z=-\frac{d}{dz}\left[kQ(z^2+R^2)^{-1/2}\right]=\frac{kQ\,z}{(z^2+R^2)^{3/2}}$$
<p>which matches the result of the direct vector integral in Lesson 2 with far less work. This works only along directions where you know $V$ as a function (the axis gives $E_z$ but not the perpendicular components).</p>
<p><b>Energy bookkeeping.</b> A charge $q$ moving through a potential difference gains kinetic energy $\Delta K=-q\Delta V$. One <b>electron-volt</b> is the energy of an electron through 1 V: $1\text{ eV}=1.6\times10^{-19}$ J.</p>
<div class="box key">Potential is energy per charge; field is force per charge. $V=-\int\vec E\cdot d\vec l$ and $\vec E=-\nabla V$ are the same statement read in two directions.</div>
<div class="box trap"><b>Traps:</b> (1) $V=0$ does not mean $E=0$ (midway between $+q$ and $-q$, $V=0$ and $E\ne0$); $E=0$ does not mean $V=0$ (inside a charged shell). (2) A negative charge gains kinetic energy moving to <i>higher</i> $V$. (3) $V=kq/r$ assumes $V(\infty)=0$; for infinite lines or sheets, choose any convenient zero.</div>`},
  {id:"l6", title:"Equipotentials, energy of configurations, and E and V graphs", videos:[{title:"Electric potential of charge distributions", url:"https://www.youtube.com/watch?v=3pPsVNNEm08", src:"Khan Academy", note:"AP Physics treatment of potential for charge distributions."}, {title:"8.02x - Lect 4 (equipotential surfaces part)", url:"https://www.youtube.com/watch?v=QpVxj3XrLgk", src:"Walter Lewin lectures (MIT 8.02x)", note:"Equipotential surfaces; see the later part of the lecture."}], html:String.raw`
<p><b>Equipotentials</b> are surfaces on which $V$ is constant. Facts: (1) $\vec E$ is perpendicular to the equipotential through that point; (2) $\vec E$ points from higher to lower $V$; (3) the field is stronger where equipotentials (drawn at equal $V$ steps) are closer together; (4) no work is done moving a charge along an equipotential; (5) a conductor in equilibrium is an equipotential throughout, including its surface.</p>
<svg class="fig" viewBox="0 0 300 160" width="300" role="img" aria-label="Concentric dashed circles of radius 20, 30 and 60 around a positive charge labeled 3V0, 2V0, V0, with radial field lines crossing them at right angles.">
<defs><marker id="a6" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<g fill="none" stroke="currentColor" stroke-dasharray="5 3"><circle cx="150" cy="80" r="20"/><circle cx="150" cy="80" r="30"/><circle cx="150" cy="80" r="60"/></g>
<circle cx="150" cy="80" r="6" fill="none" stroke="currentColor" stroke-width="2"/><text x="146" y="84" style="font-size:11px">+</text>
<g stroke="currentColor" stroke-width="1.5"><line x1="156" y1="80" x2="228" y2="80" marker-end="url(#a6)"/><line x1="144" y1="80" x2="72" y2="80" marker-end="url(#a6)"/><line x1="150" y1="74" x2="150" y2="8" marker-end="url(#a6)"/><line x1="150" y1="86" x2="150" y2="152" marker-end="url(#a6)"/></g>
<text x="170" y="78" style="font-size:11px">3V₀</text><text x="183" y="64" style="font-size:11px">2V₀</text><text x="212" y="64" style="font-size:11px">V₀</text>
<text x="236" y="84">E</text></svg>
<p>For a point charge $r=kq/V$ gives radii in the ratio $1:\tfrac12:\tfrac13$ for $V_0,2V_0,3V_0$: the surfaces crowd together near the charge, where $E$ is large.</p>
<p><b>Potential energy of a configuration.</b> The electric potential energy of a set of point charges is the work needed to assemble them from far apart. Bring them in one at a time: the first costs nothing, the second costs $q_2V_1$, the third $q_3(V_1+V_2)$, and so on. Equivalently, sum over <b>each pair once</b>:</p>
$$U=\sum_{\text{pairs}}\frac{kq_iq_j}{r_{ij}}$$
<p>$U>0$ means you did positive work to push like charges together; $U<0$ means the arrangement is bound (energy must be supplied to pull it apart).</p>
<p><b>Graphs of $E(r)$ and $V(r)$ for spheres and shells.</b> The slope of $V$ gives $-E$, so (a) $V(r)$ is continuous (a jump would need an infinite field), (b) $V$ is flat wherever $E=0$, (c) $E$ jumps by $\sigma/\epsilon_0$ crossing a surface charge, producing a kink in $V$. For total charge $Q$ and radius $R$:</p>
<table><tr><th>Object</th><th>$r&lt;R$</th><th>$r>R$</th></tr>
<tr><td>Conducting sphere or thin shell</td><td>$E=0,\ V=kQ/R$ (constant)</td><td>$E=kQ/r^2,\ V=kQ/r$</td></tr>
<tr><td>Uniform insulating solid sphere</td><td>$E=kQr/R^3,\ V=\dfrac{kQ}{2R^3}(3R^2-r^2)$</td><td>$E=kQ/r^2,\ V=kQ/r$</td></tr></table>
<svg class="fig" viewBox="0 0 340 190" width="340" role="img" aria-label="Graph of potential versus r. For a uniform solid sphere, a downward curving parabola from V at center equal to 1.5 times V at the surface, down to V at R, then falling as 1 over r. For a conducting sphere, dashed: flat at the surface value inside R, then the same 1 over r.">
<line x1="40" y1="170" x2="325" y2="170" stroke="currentColor"/><line x1="40" y1="170" x2="40" y2="20" stroke="currentColor"/>
<polyline points="40,65 50,65.3 60,66.4 70,68.1 80,70.6 90,73.8 100,77.6 110,82.1 120,87.4 130,93.4 140,100" fill="none" stroke="currentColor" stroke-width="2.5"/>
<polyline points="140,100 149,106.4 158,111.7 167,116.2 176,120 185,123.3 194,126.2 203,128.8 212,131.1 221,133.2 230,135 239,136.7 248,138.2 257,139.6 266,140.8 275,142 284,143.1 293,144.1 302,145 311,145.9 320,146.7" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="40" y1="100" x2="140" y2="100" stroke="currentColor" stroke-width="1.8" stroke-dasharray="5 3"/>
<line x1="140" y1="170" x2="140" y2="176" stroke="currentColor"/>
<text x="136" y="188">R</text><text x="310" y="186">r</text><text x="20" y="26">V</text><text x="8" y="69">1.5V_R</text><text x="14" y="104">V_R</text>
<text x="165" y="80">solid sphere: curve</text><text x="165" y="96">conductor: dashed inside</text><text x="240" y="125">kQ/r</text></svg>
<div class="box key">To sketch any $V(r)$ from $E(r)$: start at $V(\infty)=0$ and work inward; at each $r$, $V$ is the area under $E$ from $r$ to $\infty$. Its slope is $-E$ and it never jumps.</div>`}
  ],
  examples:[
  {id:"x1", title:"Rod: field at a point on its axis", problem:String.raw`<p>A thin rod lies on the $x$-axis from $x=0$ to $x=L=0.40$ m and carries uniform charge $Q=4.0$ nC (use $k=9\times10^9$ N·m²/C²). Find a general expression for the field at the point $P$ on the axis a distance $d$ beyond the end ($x=L+d$), then evaluate it for $d=0.10$ m.</p>`,
   solution:String.raw`<p>Linear density $\lambda=Q/L$. An element $dq=\lambda\,dx$ at position $x$ is a distance $L+d-x$ from $P$, and all contributions point along $+x$ (no cancellation needed; everything is on the axis). </p>
$$E=\int_0^L\frac{k\lambda\,dx}{(L+d-x)^2}=k\lambda\left[\frac{1}{L+d-x}\right]_0^L=k\lambda\left(\frac1d-\frac1{L+d}\right)=\frac{k\lambda L}{d(L+d)}=\frac{kQ}{d(d+L)}$$
<p>Numerically: $E=\dfrac{(9\times10^9)(4.0\times10^{-9})}{(0.10)(0.50)}=720$ N/C, directed away from the rod. Check: for $d\gg L$ this becomes $kQ/d^2$, a point charge.</p>`},
  {id:"x2", title:"How close is a disk to a plane?", problem:String.raw`<p>A disk of radius $R=0.10$ m carries uniform $\sigma=2.0\ \mu\text{C/m}^2$. Find the field on the axis at $z=0.10$ m, and compare with the infinite plane result and with treating the disk as a point charge.</p>`,
   solution:String.raw`<p>From Lesson 2, $E=\dfrac{\sigma}{2\epsilon_0}\left(1-\dfrac{z}{\sqrt{z^2+R^2}}\right)$. Here $\dfrac{\sigma}{2\epsilon_0}=\dfrac{2.0\times10^{-6}}{2(8.85\times10^{-12})}=1.13\times10^5$ N/C and $1-\dfrac{1}{\sqrt2}=0.293$, so</p>
$$E=3.3\times10^4\ \text{N/C}$$
<p>The infinite plane would give $1.13\times10^5$ N/C (too large by a factor of 3.4) and the point-charge estimate with $Q=\sigma\pi R^2=6.3\times10^{-8}$ C gives $kQ/z^2=5.7\times10^4$ N/C (too large by 1.7). At $z=R$ neither approximation is good; the full integral is needed. The exact answer lies below both because the disk is neither infinite nor concentrated at the center.</p>`},
  {id:"x3", title:"Point charge inside a conducting shell", problem:String.raw`<p>A point charge $+Q$ sits at the center of a thick, spherical conducting shell with inner radius $a$ and outer radius $b$. The shell carries a net charge of $-2Q$. Find the charge on the inner and outer surfaces of the shell, and the field $E(r)$ in all three regions.</p>`,
   solution:String.raw`<p>In the metal ($a&lt;r&lt;b$) $\vec E=0$. A Gaussian sphere in the metal then has zero flux, so it encloses zero net charge: the inner surface carries $-Q$ (to cancel the $+Q$ inside). The shell's total is $-2Q$, so the outer surface carries $-2Q-(-Q)=-Q$.</p>
<p>Fields (radial, from Gauss with $Q_{enc}$):</p>
<p>$r&lt;a$: $Q_{enc}=Q$, $E=kQ/r^2$ outward.<br>$a&lt;r&lt;b$: $E=0$.<br>$r>b$: $Q_{enc}=Q-2Q=-Q$, $E=kQ/r^2$ <i>inward</i> (negative radial component).</p>
<p>Note that the field outside depends only on the total charge enclosed, not on how the shell redistributes it.</p>`},
  {id:"x4", title:"Potential at the center of a charged sphere", problem:String.raw`<p>A uniformly charged insulating sphere has radius $R=0.10$ m and total charge $Q=2.0$ nC. Taking $V(\infty)=0$, find $V$ at the surface and at the center by integrating $\vec E$.</p>`,
   solution:String.raw`<p>Outside: $E=kQ/r^2$. Inside: $E=kQr/R^3$. At the surface, $V(R)=-\int_\infty^R\dfrac{kQ}{r^2}dr=\dfrac{kQ}{R}=\dfrac{(9\times10^9)(2.0\times10^{-9})}{0.10}=180$ V.</p>
<p>At the center, continue inward: $V(0)=V(R)-\int_R^0E\,dr=V(R)+\int_0^R\dfrac{kQr}{R^3}dr=\dfrac{kQ}{R}+\dfrac{kQ}{2R}=\dfrac{3kQ}{2R}=270$ V.</p>
<p>The center is higher in potential than the surface by half of $kQ/R$, as expected: a positive test charge moving inward fights the outward field the whole way.</p>`},
  {id:"x5", title:"Energy of four charges at the corners of a square", problem:String.raw`<p>Four identical charges $q=2.0\ \mu\text{C}$ are at the corners of a square of side $a=0.50$ m. How much work is required to assemble them from infinity?</p>`,
   solution:String.raw`<p>Sum over the 6 pairs once: four side pairs (distance $a$) and two diagonal pairs (distance $a\sqrt2$):</p>
$$U=\frac{kq^2}{a}\left(4+\frac{2}{\sqrt2}\right)=\frac{kq^2}{a}(4+\sqrt2)$$
<p>$\dfrac{kq^2}{a}=\dfrac{(9\times10^9)(2.0\times10^{-6})^2}{0.50}=0.072$ J, so $U=0.072\times5.414=0.39$ J. Positive, because you had to push like charges together.</p>`}
  ],
  mcq:[
  {id:"q1", q:String.raw`<p>Two point charges $q_1$ and $q_2$ are a distance $r$ apart and exert a force of magnitude $F$ on each other. If $q_1$ is doubled and the separation is also doubled, the force becomes</p>`, choices:[String.raw`$F/4$`,String.raw`$F/2$`,String.raw`$F$`,String.raw`$2F$`,String.raw`$4F$`], a:1,
   why:String.raw`<p>$F\propto q_1q_2/r^2$, so the new force is $F\cdot2/2^2=F/2$. The tempting $F$ comes from treating the doubling of charge and distance as canceling, but distance enters squared.</p>`},
  {id:"q2", q:String.raw`<p>Charges of $+2.0\ \mu$C and $+3.0\ \mu$C are $0.30$ m apart. The magnitude of the force between them is closest to</p>`, choices:["0.06 N","0.18 N","0.6 N","1.8 N","6 N"], a:2,
   why:String.raw`<p>$F=kq_1q_2/r^2=(9\times10^9)(6\times10^{-12})/0.09=0.6$ N. Forgetting to square $r$ gives 0.18 N, and forgetting that $\mu$ means $10^{-6}$ gives wildly different answers.</p>`},
  {id:"q3", q:String.raw`<p>Two charges $+q$ are located at $(+a,0)$ and $(-a,0)$. The magnitude of the net electric field at $(0,a)$ is</p>`, choices:[String.raw`$0$`,String.raw`$\dfrac{kq}{2a^2}$`,String.raw`$\dfrac{kq}{\sqrt2\,a^2}$`,String.raw`$\dfrac{\sqrt2\,kq}{a^2}$`,String.raw`$\dfrac{2kq}{a^2}$`], a:2,
   why:String.raw`<p>Each charge is $\sqrt2a$ away, so each contributes $kq/(2a^2)$. The $x$-components cancel; each $y$-component is $\dfrac{kq}{2a^2}\cos45^\circ$. The sum is $2\cdot\dfrac{kq}{2a^2}\cdot\dfrac1{\sqrt2}=\dfrac{kq}{\sqrt2a^2}$. Adding the magnitudes $kq/a^2$ would ignore direction.</p>`},
  {id:"q4", q:String.raw`<p>A ring of radius $R$ carries uniform charge $Q$. Along its axis, at what distance $z$ from the center is the magnitude of the field greatest?</p>`, choices:[String.raw`$0$`,String.raw`$R/2$`,String.raw`$R/\sqrt2$`,String.raw`$R$`,String.raw`$\infty$`], a:2,
   why:String.raw`<p>$E=kQz/(z^2+R^2)^{3/2}$. Setting $dE/dz=0$: $(z^2+R^2)-3z^2=0\Rightarrow z=R/\sqrt2$. $E=0$ at $z=0$ (symmetry) and $E\to0$ as $z\to\infty$, so the maximum is between them.</p>`},
  {id:"q5", q:String.raw`<p>Two large parallel sheets carry uniform surface charge densities $+\sigma$ and $-\sigma$. The field magnitude between the sheets (away from the edges) is</p>`, choices:["0",String.raw`$\sigma/2\epsilon_0$`,String.raw`$\sigma/\epsilon_0$`,String.raw`$2\sigma/\epsilon_0$`,String.raw`$\sigma/4\epsilon_0$`], a:2,
   why:String.raw`<p>Each sheet contributes $\sigma/2\epsilon_0$; between them both point from the $+$ sheet toward the $-$ sheet, so they add to $\sigma/\epsilon_0$. Outside, they cancel. Choosing $\sigma/2\epsilon_0$ forgets one of the two sheets.</p>`},
  {id:"q6", q:String.raw`<p>A point charge $+q$ sits at the center of a cube. The electric flux through one face of the cube is</p>`, choices:[String.raw`$q/\epsilon_0$`,String.raw`$q/(2\epsilon_0)$`,String.raw`$q/(6\epsilon_0)$`,String.raw`$q/(24\epsilon_0)$`,"0"], a:2,
   why:String.raw`<p>By Gauss's law the total flux is $q/\epsilon_0$. By symmetry the six faces share it equally: $q/6\epsilon_0$ each. Note the field is not uniform over a face, but symmetry makes the sharing exact.</p>`},
  {id:"q7", q:String.raw`<p>A solid insulating sphere of radius $R$ has uniform volume charge density. The magnitude of the field at $r=R/2$ is what fraction of the field at the surface $r=R$?</p>`, choices:["1/8","1/4","1/2","1","2"], a:2,
   why:String.raw`<p>Inside, $E=kQr/R^3\propto r$, so at $R/2$ it is half of the surface value. The tempting $1/4$ comes from using the point-charge $1/r^2$ law, which holds only outside.</p>`},
  {id:"q8", q:String.raw`<p>An insulating sphere of large radius has charge density $\rho(r)=A/r$ (where $A$ is a constant). At a point inside it, the magnitude of the electric field at radius $r$ is</p>`, choices:[String.raw`$\dfrac{A}{\epsilon_0}$`,String.raw`$\dfrac{A}{2\epsilon_0}$`,String.raw`$\dfrac{A}{3\epsilon_0}$`,String.raw`$\dfrac{Ar}{2\epsilon_0}$`,String.raw`$\dfrac{A}{4\epsilon_0}$`], a:1,
   why:String.raw`<p>$Q_{enc}=\int_0^r\dfrac{A}{r'}4\pi r'^2dr'=2\pi Ar^2$. Gauss: $E(4\pi r^2)=2\pi Ar^2/\epsilon_0\Rightarrow E=A/2\epsilon_0$, constant. The $r^2$ in $Q_{enc}$ cancels the $r^2$ from the area. The answer with $r$ in it would come from a (wrong) uniform density.</p>`},
  {id:"q9", q:String.raw`<p>Charges $+q$ and $-q$ are placed a distance $2a$ apart. At the midpoint between them, taking $V=0$ at infinity,</p>`, choices:[String.raw`$V=0$ and $E=0$`,String.raw`$V=0$ and $E\neq0$, pointing toward the $-q$ charge`,String.raw`$V=0$ and $E\neq0$, pointing toward the $+q$ charge`,String.raw`$V\neq0$ and $E=0$`,String.raw`$V\neq0$ and $E\neq0$`], a:1,
   why:String.raw`<p>The potentials $+kq/a$ and $-kq/a$ cancel, so $V=0$. The fields do not cancel: both point away from $+q$ toward $-q$, giving $E=2kq/a^2$. $V=0$ does not imply $E=0$.</p>`},
  {id:"q10", q:String.raw`<p>In some region the electric field is $E_x=6x$ (in V/m, with $x$ in m). The change in potential $V(2\text{ m})-V(0)$ is</p>`, choices:["$-24$ V","$-12$ V","$-6$ V","$+12$ V","$+24$ V"], a:1,
   why:String.raw`<p>$\Delta V=-\int_0^2E_x\,dx=-\int_0^26x\,dx=-3x^2\Big|_0^2=-12$ V. The sign is negative because moving along $\vec E$ means falling potential.</p>`},
  {id:"q11", q:String.raw`<p>The potential along the $x$-axis is $V(x)=3x^2-2x$ (SI units). The $x$-component of the electric field at $x=1$ m is</p>`, choices:["$-4$ V/m","$+4$ V/m","$+1$ V/m","$-1$ V/m","0"], a:0,
   why:String.raw`<p>$E_x=-dV/dx=-(6x-2)=-4$ V/m at $x=1$. The $+4$ choice drops the minus sign in $\vec E=-\nabla V$.</p>`},
  {id:"q12", q:String.raw`<p>An electron starts from rest and is accelerated through a potential difference of 500 V (use $e=1.6\times10^{-19}$ C, $m_e=9.1\times10^{-31}$ kg; ignore relativity). Its final speed is closest to</p>`, choices:[String.raw`$1.3\times10^{6}$ m/s`,String.raw`$9.4\times10^{6}$ m/s`,String.raw`$1.3\times10^{7}$ m/s`,String.raw`$2.6\times10^{7}$ m/s`,String.raw`$1.8\times10^{8}$ m/s`], a:2,
   why:String.raw`<p>$\tfrac12mv^2=eV\Rightarrow v=\sqrt{2eV/m}=\sqrt{2(1.6\times10^{-19})(500)/(9.1\times10^{-31})}=1.3\times10^7$ m/s. Dropping the factor of 2 gives $9.4\times10^6$ m/s.</p>`},
  {id:"q13", q:String.raw`<p>Charges $+q$, $+q$ and $-q$ are placed at the corners of an equilateral triangle of side $a$. The electric potential energy of the system (zero at infinite separation) is</p>`, choices:[String.raw`$-kq^2/a$`,String.raw`$kq^2/a$`,String.raw`$-3kq^2/a$`,String.raw`$3kq^2/a$`,"0"], a:0,
   why:String.raw`<p>Three pairs: $(+,+)$ gives $+kq^2/a$; the two $(+,-)$ pairs give $-kq^2/a$ each. Total $=-kq^2/a$. Taking all three as $+kq^2/a$ ignores signs.</p>`},
  {id:"q14", q:String.raw`<p>A thin conducting spherical shell of radius $R$ carries total charge $Q>0$. Inside the shell ($r&lt;R$), with $V(\infty)=0$,</p>`, choices:[String.raw`$E=0$ and $V=kQ/R$ (constant)`,String.raw`$E=0$ and $V=0$`,String.raw`$E=kQ/R^2$ and $V=kQ/R$`,String.raw`$E=0$ and $V=kQ/r$`,String.raw`$E=kQr/R^3$ and $V=kQ/R$`], a:0,
   why:String.raw`<p>Gauss gives $E=0$ inside (no enclosed charge). Since $E=-dV/dr=0$, $V$ is constant inside and, because $V$ is continuous, equals its surface value $kQ/R$. $E=0$ does not mean $V=0$.</p>`}
  ],
  frq:[
  {id:"f1", type:"Mathematical routines", title:"Field of a non-uniform rod",
   prompt:String.raw`<p>A thin rod of length $L$ lies along the $x$-axis from $x=0$ to $x=L$. Its linear charge density is $\lambda(x)=\lambda_0x/L$, where $\lambda_0$ is a positive constant. Point $P$ is on the axis at $x=-d$ (to the left of the rod).</p>
<p>(a) Determine the total charge $Q$ on the rod in terms of $\lambda_0$ and $L$.<br>(b) Explain in words why the field at $P$ points entirely along the $x$-axis, and give its direction.<br>(c) For a charge element $dq$ at position $x$, write an expression for the magnitude $dE$ of its field at $P$.<br>(d) Integrate to find the field at $P$.<br>(e) Show that for $d\gg L$ your result reduces to the field of a point charge $Q$ at the origin. (You may use $\ln(1+u)\approx u-u^2/2+u^3/3$ for small $u$.)</p>`,
   pts:[
    {p:1,d:String.raw`$Q=\int\lambda\,dx=\lambda_0L/2$ with correct integration`},
    {p:1,d:String.raw`Explains that $P$ is on the line of the rod, so every element's field is along the axis (no perpendicular components; or by mirror pairing about the axis)`},
    {p:1,d:String.raw`States direction: in the $-x$ direction (away from the rod, since the charge is positive)`},
    {p:1,d:String.raw`$dq=\lambda_0(x/L)\,dx$ and distance $x+d$`},
    {p:1,d:String.raw`$dE=k\,\lambda_0x\,dx\,/\,[L(x+d)^2]$`},
    {p:1,d:String.raw`Sets up $E=(k\lambda_0/L)\int_0^Lx\,dx/(x+d)^2$ with correct limits`},
    {p:1,d:String.raw`Correct integration (e.g. $u=x+d$ giving $\ln u+d/u$)`},
    {p:1,d:String.raw`$E=\dfrac{k\lambda_0}{L}\left[\ln\dfrac{L+d}{d}-\dfrac{L}{L+d}\right]$`},
    {p:1,d:String.raw`Expands for $d\gg L$ ($u=L/d$): $\ln(1+u)-u/(1+u)\approx u^2/2$`},
    {p:1,d:String.raw`Obtains $E\to k\lambda_0L/(2d^2)=kQ/d^2$, matching a point charge`}],
   solution:String.raw`<p>(a) $Q=\int_0^L\lambda_0\dfrac xL\,dx=\dfrac{\lambda_0L}{2}$.</p>
<p>(b) $P$ lies on the line containing the rod, so the vector from any element to $P$ is along $x$. Every $dE$ points along $x$, so no perpendicular components exist. The charge is positive, so the field points away from the rod: the $-x$ direction.</p>
<p>(c) $dq=\lambda\,dx=\lambda_0\dfrac xL\,dx$, distance to $P$ is $x+d$, so $dE=\dfrac{k\lambda_0}{L}\dfrac{x\,dx}{(x+d)^2}$.</p>
<p>(d) $E=\dfrac{k\lambda_0}{L}\displaystyle\int_0^L\dfrac{x\,dx}{(x+d)^2}$. With $u=x+d$: $\int\dfrac{u-d}{u^2}du=\ln u+\dfrac du$, evaluated from $d$ to $L+d$: $\ln\dfrac{L+d}{d}+\dfrac{d}{L+d}-1=\ln\dfrac{L+d}{d}-\dfrac{L}{L+d}$. Therefore
$$E=\frac{k\lambda_0}{L}\left[\ln\frac{L+d}{d}-\frac{L}{L+d}\right],\ \text{directed along }-x.$$</p>
<p>(e) With $u=L/d\ll1$: $\ln(1+u)-\dfrac{u}{1+u}\approx\left(u-\dfrac{u^2}2+\dfrac{u^3}3\right)-\left(u-u^2+u^3\right)=\dfrac{u^2}{2}+\ldots$ So $E\approx\dfrac{k\lambda_0}{L}\dfrac{L^2}{2d^2}=\dfrac{k\lambda_0L}{2d^2}=\dfrac{kQ}{d^2}$.</p>
<p class="mut">Check: for $\lambda_0=L=1$ and $d=0.3$ a numerical integral gives $0.6971$, matching the formula.</p>`},
  {id:"f2", type:"Translation between representations", title:"Sphere with a charge density that grows with radius",
   prompt:String.raw`<p>An insulating sphere of radius $R$ has a volume charge density $\rho(r)=\rho_0\,r/R$ for $r\le R$ and $\rho=0$ for $r>R$, where $\rho_0>0$ is a constant. Take $V=0$ at infinity.</p>
<p>(a) Show that the total charge is $Q=\pi\rho_0R^3$.<br>(b) Use Gauss's law to find $E(r)$ for $r&lt;R$.<br>(c) Find $E(r)$ for $r>R$.<br>(d) Find the potential at the surface $V(R)$ and at the center $V(0)$.<br>(e) Sketch graphs of $E(r)$ and $V(r)$ from $r=0$ to $r=3R$. Label the values at $r=R$ and the behavior at large $r$.<br>(f) In words, explain why the slope of your $V(r)$ graph has no sudden change at $r=R$.</p>`,
   pts:[
    {p:1,d:String.raw`Uses shell element $dq=\rho\,4\pi r^2\,dr$ for the total charge`},
    {p:1,d:String.raw`Integrates $\int_0^R\rho_0(r/R)4\pi r^2dr=\pi\rho_0R^3$`},
    {p:1,d:String.raw`Spherical Gaussian surface with $E$ radial and constant on it: $E\,4\pi r^2=Q_{enc}/\epsilon_0$`},
    {p:1,d:String.raw`$Q_{enc}(r)=\int_0^r\rho_0(r'/R)4\pi r'^2dr'=\pi\rho_0r^4/R$`},
    {p:1,d:String.raw`$E=\rho_0r^2/(4\epsilon_0R)$ for $r&lt;R$`},
    {p:1,d:String.raw`$E=\rho_0R^3/(4\epsilon_0r^2)$ for $r>R$ (all charge enclosed)`},
    {p:1,d:String.raw`$V(R)=-\int_\infty^RE\,dr=\rho_0R^2/(4\epsilon_0)$ (equivalently $kQ/R$)`},
    {p:1,d:String.raw`Integrates inside: $V(0)=V(R)+\int_0^RE\,dr$ with $\int_0^R\rho_0r^2/(4\epsilon_0R)dr=\rho_0R^2/(12\epsilon_0)$`},
    {p:1,d:String.raw`$V(0)=\rho_0R^2/(3\epsilon_0)$`},
    {p:1,d:String.raw`$E(r)$ sketch: $\propto r^2$ (concave up) rising to a maximum $\rho_0R/(4\epsilon_0)$ at $R$, continuous, then falling as $1/r^2$`},
    {p:1,d:String.raw`$V(r)$ sketch: decreasing from $V(0)$, flat slope at $r=0$, passing through $V(R)$, decaying as $1/r$ toward 0, no kinks`},
    {p:1,d:String.raw`Explains $E=-dV/dr$: $E$ is continuous at $R$ (there is no surface charge, only volume density), so the slope of $V$ is continuous`}],
   solution:String.raw`<p>(a) A shell of radius $r$ and thickness $dr$ has volume $4\pi r^2dr$ and charge $dq=\rho_0\dfrac rR4\pi r^2dr$. $Q=\dfrac{4\pi\rho_0}{R}\displaystyle\int_0^Rr^3dr=\dfrac{4\pi\rho_0}{R}\dfrac{R^4}{4}=\pi\rho_0R^3$.</p>
<p>(b) Spherical symmetry: $E\,4\pi r^2=Q_{enc}/\epsilon_0$ with $Q_{enc}=\dfrac{4\pi\rho_0}{R}\dfrac{r^4}{4}=\dfrac{\pi\rho_0r^4}{R}$. So $E=\dfrac{\rho_0r^2}{4\epsilon_0R}$, radially outward.</p>
<p>(c) $r>R$: $Q_{enc}=Q$, $E=\dfrac{\pi\rho_0R^3}{4\pi\epsilon_0r^2}=\dfrac{\rho_0R^3}{4\epsilon_0r^2}$. At $r=R$ both expressions give $\rho_0R/(4\epsilon_0)$ (continuous).</p>
<p>(d) $V(R)=\displaystyle\int_R^\infty\dfrac{\rho_0R^3}{4\epsilon_0r^2}dr=\dfrac{\rho_0R^2}{4\epsilon_0}$ ($=kQ/R$). $V(0)=V(R)+\displaystyle\int_0^R\dfrac{\rho_0r^2}{4\epsilon_0R}dr=\dfrac{\rho_0R^2}{4\epsilon_0}+\dfrac{\rho_0R^2}{12\epsilon_0}=\dfrac{\rho_0R^2}{3\epsilon_0}$.</p>
<p>(e) $E(r)$: starts at 0 with zero slope, grows like $r^2$ to $\rho_0R/(4\epsilon_0)$ at $r=R$, then decays like $1/r^2$. $V(r)$: starts at $V(0)=\rho_0R^2/(3\epsilon_0)$ with zero slope at $r=0$, steepens (slope $-E$) to $V(R)=\rho_0R^2/(4\epsilon_0)$ (which is $\tfrac34V(0)$), then falls as $1/r$ toward 0; the steepest slope is at $r=R$.</p>
<p>(f) The slope of $V$ is $-E$. $E$ has no jump at $r=R$ because the charge is spread through the volume with no surface layer (a surface charge $\sigma$ would make $E$ jump by $\sigma/\epsilon_0$ and produce a kink in $V$).</p>`},
  {id:"f3", type:"Qualitative/quantitative translation", title:"Reading a potential graph",
   prompt:String.raw`<p>The graph shows the electric potential $V(x)$ along the $x$-axis in a region where the field is along $x$.</p>
<svg class="fig" viewBox="0 0 340 185" width="340" role="img" aria-label="Piecewise linear potential graph. V is 0 at x=0, rises linearly to 20 V at x=2 m, stays at 20 V until x=4 m, falls linearly to minus 10 V at x=6 m, and stays at minus 10 V until x=8 m.">
<line x1="40" y1="110" x2="330" y2="110" stroke="currentColor"/><line x1="40" y1="15" x2="40" y2="170" stroke="currentColor"/>
<polyline points="40,110 110,50 180,50 250,140 320,140" fill="none" stroke="currentColor" stroke-width="2.5"/>
<g stroke="currentColor" stroke-dasharray="3 3" stroke-width=".8"><line x1="110" y1="50" x2="110" y2="110"/><line x1="180" y1="50" x2="180" y2="110"/><line x1="250" y1="110" x2="250" y2="140"/><line x1="40" y1="50" x2="110" y2="50"/><line x1="40" y1="140" x2="250" y2="140"/></g>
<text x="12" y="54">20</text><text x="10" y="144">-10</text><text x="22" y="114">0</text><text x="20" y="22">V (V)</text><text x="300" y="104">x (m)</text>
<text x="108" y="124">2</text><text x="178" y="124">4</text><text x="248" y="106">6</text><text x="318" y="124">8</text></svg>
<p>(a) Sketch $E_x$ versus $x$ for $0&lt;x<8$ m, labeling values.<br>(b) An electron is at rest at $x=1$ m. Give the magnitude and direction of the force on it. (Use $e=1.6\times10^{-19}$ C.)<br>(c) How much work does the electric field do on a proton moving from $x=0$ to $x=6$ m? Give the answer in eV and in J.<br>(d) An electron is released from rest at $x=0$. Find its speed at $x=3$ m ($m_e=9.1\times10^{-31}$ kg).<br>(e) Does the electron of part (d) reach $x=6$ m? Justify using energy, and if not, locate the point where it turns around.<br>(f) What does the flat region $2&lt;x<4$ m tell you about the field and force there? What sign of surface charge must sit at $x=4$ m to produce the change in the field there? Explain.</p>`,
   pts:[
    {p:1,d:String.raw`$E_x=-dV/dx$ used; $E_x=-10$ V/m for $0&lt;x<2$`},
    {p:1,d:String.raw`$E_x=0$ for $2&lt;x<4$ and $6&lt;x<8$`},
    {p:1,d:String.raw`$E_x=+15$ V/m for $4&lt;x<6$ with correct sign change`},
    {p:1,d:String.raw`$F=eE=1.6\times10^{-18}$ N, directed in $+x$ (opposite to $\vec E$ for a negative charge)`},
    {p:1,d:String.raw`Work by field $W=q(V_i-V_f)$ with correct sign: $+10$ eV`},
    {p:1,d:String.raw`Converts: $W=1.6\times10^{-18}$ J`},
    {p:1,d:String.raw`Energy gained to $x=2$: $K=e\Delta V=20$ eV $=3.2\times10^{-18}$ J (stays constant to $x=3$)`},
    {p:1,d:String.raw`$v=\sqrt{2K/m}=2.7\times10^6$ m/s`},
    {p:1,d:String.raw`Energy conservation: electron cannot reach $x=6$ (would need $K=-10$ eV there)`},
    {p:1,d:String.raw`Turning point where $V=0$ again: $x=4+20/15=5.33$ m`},
    {p:1,d:String.raw`$E=0$, no force, constant velocity (equipotential region)`},
    {p:1,d:String.raw`Positive sheet at $x=4$: $E$ jumps from $0$ to $+15$ V/m ($\Delta E=\sigma/\epsilon_0>0$), by Gauss's law pillbox`}],
   solution:String.raw`<p>(a) $E_x=-dV/dx$: $-10$ V/m on $0&lt;x<2$ (slope $+10$ V/m); $0$ on $2&lt;x<4$; $+15$ V/m on $4&lt;x<6$ (slope $-15$ V/m); $0$ on $6&lt;x<8$. A piecewise-constant step graph.</p>
<p>(b) At $x=1$, $E_x=-10$ V/m (points in $-x$). The electron has charge $-e$, so $F_x=-eE_x=+(1.6\times10^{-19})(10)=1.6\times10^{-18}$ N in the $+x$ direction.</p>
<p>(c) $W_{\text{field}}=q(V_i-V_f)=e(0-(-10\text{ V}))=+10$ eV $=1.6\times10^{-18}$ J. (The field pushes the proton toward lower $V$.)</p>
<p>(d) The electron is pushed toward $+x$ (toward higher $V$), gaining kinetic energy $e\times20\text{ V}=20$ eV $=3.2\times10^{-18}$ J by $x=2$ m; between 2 and 3 m there is no field so $K$ is unchanged. $v=\sqrt{2(3.2\times10^{-18})/9.1\times10^{-31}}=2.65\times10^6$ m/s.</p>
<p>(e) Conservation: $K+(-e)V$ is constant; starting from $K=0$ at $V=0$, the electron has $K=eV$ wherever it is. At $x=6$, $V=-10$ V would give $K=-10$ eV, impossible. For $4&lt;x<6$ the force is $-eE$, i.e. in $-x$, slowing it. It stops where $V=0$ again: $V=20-15(x-4)=0\Rightarrow x=5.33$ m, then returns.</p>
<p>(f) $E=-dV/dx=0$ there, so no force: a charge moves at constant velocity. At $x=4$, $E$ jumps from 0 to $+15$ V/m (a step $\Delta E=+15$ V/m $=\sigma/\epsilon_0$ over a pillbox straddling $x=4$), so there is a positive sheet of charge. (Likewise a positive sheet at $x=2$ ($-10\to0$) and a negative sheet at $x=6$ ($+15\to0$).)</p>`}
  ]
});
