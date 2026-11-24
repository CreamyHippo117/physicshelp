PH.unit({
  id:"prereq5", course:"prereq", order:14, hours:4,
  title:"Prereq 5: Assumed E&M basics",
  blurb:"The first-course electricity and magnetism that E&M teachers take for granted: static charge, current and resistance, series and parallel circuits, magnets, and what generators and motors do. Quick, concept-heavy, with calculus where it helps.",
  needs:["prereq1"],
  goals:[
    "Explain charging by friction, contact and induction, and why conductors and insulators behave differently",
    "Use charge conservation and quantization ($e=1.6\\times10^{-19}$ C) and a first-look Coulomb's law",
    "Interpret electric field lines and magnetic field lines (including right-hand rules in practice)",
    "Use voltage, current, resistance, $V=IR$ and $P=IV$ fluently, with the water analogy and its limits",
    "Derive and apply series and parallel resistor rules; place ammeters and voltmeters correctly",
    "Read circuit diagrams, and know what a capacitor, generator and motor do at a conceptual level"
  ],
  lessons:[
  {id:"l1", title:"Static electricity, charge and Coulomb's law (first look)", html:String.raw`
<p>Matter contains positive charges (protons, fixed in nuclei) and negative charges (electrons, which can move). An object is <b>neutral</b> when the two balance. <b>Charging</b> an object means moving electrons on or off it: gaining electrons makes it negative, losing them makes it positive.</p>
<ul>
<li><b>Friction:</b> rubbing two different materials transfers electrons from one to the other (rubbed glass becomes positive, the cloth negative).</li>
<li><b>Contact:</b> touching a charged conductor to another shares charge; the second ends up with the same sign.</li>
<li><b>Induction:</b> bring a charged rod <i>near</i> (not touching) an isolated neutral conductor: charges separate (near side opposite to the rod, far side same). Ground the far side briefly (let electrons flow to or from the ground), remove the ground, then remove the rod: the conductor is left with charge <i>opposite</i> to the rod.</li>
</ul>
<p><b>Conductors</b> (metals, salt water) have electrons free to move; <b>insulators</b> (rubber, glass, dry air) hold them in place. An insulator can still be <i>polarized</i> (its atoms stretch slightly) which is why a charged comb attracts neutral bits of paper: the nearer charges of the paper are opposite to the comb and are pulled harder than the farther same-sign ones.</p>
<div class="box key"><b>Two laws to hold onto.</b> (1) <b>Conservation:</b> the net charge of an isolated system never changes; charge only moves. (2) <b>Quantization:</b> all observed charge is an integer multiple of $e=1.6\times10^{-19}$ C. The unit is the coulomb (C); a typical static spark involves nanocoulombs.</div>
<p><b>Coulomb's law.</b> Two point charges exert equal and opposite forces on each other along the line joining them:</p>
$$F=k\frac{|q_1q_2|}{r^2},\qquad k\approx9\times10^9\ \text{N·m}^2/\text{C}^2$$
<p>Like charges repel, opposite charges attract. Same inverse-square shape as gravity, but vastly stronger and it comes in both signs. Doubling $r$ quarters $F$. (Electric & E&M 1 builds the whole theory, including the field and $\varepsilon_0$.)</p>
<h3>Field lines</h3>
<p>A charge $Q$ is surrounded by an <b>electric field</b> $\vec E$: the force per unit positive test charge. Field lines are drawn pointing away from positive and into negative charges; the line direction gives the direction of $\vec E$ and the <i>spacing</i> shows its strength (closer means stronger). Lines never cross, and never start or stop in empty space.</p>
<svg class="fig" viewBox="0 0 520 170" width="520" role="img" aria-label="Electric field lines: radial lines pointing out of a positive charge, and lines from a positive charge curving to a negative charge">
<g stroke="currentColor" stroke-width="1.6" fill="none">
<line x1="100" y1="85" x2="100" y2="15"/><line x1="100" y1="85" x2="100" y2="155"/><line x1="100" y1="85" x2="30" y2="85"/><line x1="100" y1="85" x2="170" y2="85"/>
<line x1="100" y1="85" x2="50" y2="35"/><line x1="100" y1="85" x2="150" y2="35"/><line x1="100" y1="85" x2="50" y2="135"/><line x1="100" y1="85" x2="150" y2="135"/>
<path d="M330 80 C 360 20, 440 20, 470 80"/><path d="M335 85 C 370 85, 430 85, 465 85"/><path d="M330 90 C 360 150, 440 150, 470 90"/>
<path d="M322 75 C 330 10, 470 10, 478 75"/><path d="M322 95 C 330 160, 470 160, 478 95"/>
</g>
<circle cx="100" cy="85" r="10" fill="currentColor" fill-opacity=".2" stroke="currentColor"/><text x="95" y="90" font-size="14">+</text>
<circle cx="320" cy="85" r="10" fill="currentColor" fill-opacity=".2" stroke="currentColor"/><text x="315" y="90" font-size="14">+</text>
<circle cx="480" cy="85" r="10" fill="currentColor" fill-opacity=".2" stroke="currentColor"/><text x="476" y="90" font-size="14">−</text>
<text x="40" y="165" font-size="12">lines point outward; spacing = strength</text><text x="300" y="165" font-size="12">lines run from + to −</text>
</svg>`},
  {id:"l2", title:"Voltage, current, resistance: the plain-language version", html:String.raw`
<p><b>Current</b> $I$ is the rate of charge flow past a point: $I=dq/dt$ (units: amperes, 1 A = 1 C/s). By historical convention, the direction of current is the direction <i>positive</i> charge would move, from high to low potential, even though in wires it is electrons that move the other way.</p>
<p><b>Voltage</b> (potential difference) $V$ is the energy given per unit charge when moving between two points: $V=\Delta U/q$ (units: volts, 1 V = 1 J/C). A 9 V battery gives each coulomb passing through it 9 J. Voltage is always measured <i>between two points</i>. "Voltage at a point" only means relative to a chosen zero (ground).</p>
<p><b>Resistance</b> $R$ measures how hard it is to push current through something (ohms, $\Omega$). For ohmic materials:</p>
$$V=IR\quad\text{(Ohm's law)}$$
<p>A thin, long, or poorly conducting wire has more resistance. (Ohm's law is a property of a material, not a universal law: a diode or a light bulb filament does not obey it exactly.)</p>
<p><b>Water analogy.</b> Pipes: charge = water, current = flow rate (liters/second), voltage = pressure difference, battery = pump, resistor = narrow section, wire = wide pipe. It predicts: current is the same everywhere in a single loop (water is not used up), most of the pressure drop happens across the narrow part, and a pump is needed to maintain flow. <b>Limits:</b> there is no electrical "leak" analog (charge is not consumed); charge can build up only on capacitors (like a pressurized tank); the electric field in the wire, not the pipe walls, drives the flow; and water stops flowing if the pipe breaks while an electric circuit "knows" instantly everywhere. The analogy also hides that the energy is carried by the fields, not the carriers.</p>
<div class="box key"><b>Power.</b> Energy per time delivered to a component: $P=IV$. With Ohm's law: $P=I^2R=V^2/R$. Units: watts (1 W = 1 J/s). A kilowatt-hour is an energy unit: $3.6\times10^6$ J.</div>
<div class="box trap"><b>Trap:</b> "Current is used up in a bulb." No: the same current enters and leaves. What the bulb uses up is <i>energy</i> (each coulomb arrives with more potential energy than it leaves with).</div>
<h3>Batteries and EMF</h3>
<p>A battery moves charge from its low-potential (−) terminal to its high-potential (+) terminal inside it, doing work on the charge. Its <b>emf</b> $\mathcal E$ is that work per unit charge (the open-circuit voltage). We usually treat batteries as ideal: terminal voltage $=\mathcal E$ regardless of current. (A real battery has a small internal resistance $r$ so that $V_{\text{terminal}}=\mathcal E-Ir$; E&amp;M 3 covers it.)</p>
<h3>Circuit symbol key</h3>
<svg class="fig" viewBox="0 0 560 170" width="560" role="img" aria-label="Key of circuit symbols: wire, battery, resistor, light bulb, switch, capacitor, ammeter, voltmeter, ground">
<g stroke="currentColor" stroke-width="2" fill="none">
<line x1="10" y1="35" x2="70" y2="35"/>
<line x1="100" y1="35" x2="120" y2="35"/><line x1="120" y1="18" x2="120" y2="52"/><line x1="132" y1="26" x2="132" y2="44" stroke-width="3.5"/><line x1="132" y1="35" x2="152" y2="35"/>
<polyline points="180,35 195,35 200,22 210,48 220,22 230,48 240,22 245,35 260,35"/>
<line x1="290" y1="35" x2="310" y2="35"/><circle cx="330" cy="35" r="20"/><line x1="316" y1="21" x2="344" y2="49"/><line x1="344" y1="21" x2="316" y2="49"/><line x1="350" y1="35" x2="370" y2="35"/>
<line x1="400" y1="35" x2="420" y2="35"/><line x1="420" y1="35" x2="450" y2="15"/><line x1="450" y1="35" x2="470" y2="35"/>
<line x1="20" y1="110" x2="40" y2="110"/><line x1="40" y1="92" x2="40" y2="128"/><line x1="52" y1="92" x2="52" y2="128"/><line x1="52" y1="110" x2="72" y2="110"/>
<line x1="100" y1="110" x2="120" y2="110"/><circle cx="140" cy="110" r="20"/><line x1="160" y1="110" x2="180" y2="110"/>
<line x1="220" y1="110" x2="240" y2="110"/><circle cx="260" cy="110" r="20"/><line x1="280" y1="110" x2="300" y2="110"/>
<line x1="350" y1="90" x2="350" y2="110"/><line x1="332" y1="110" x2="368" y2="110"/><line x1="338" y1="119" x2="362" y2="119"/><line x1="344" y1="128" x2="356" y2="128"/>
</g>
<circle cx="450" cy="35" r="2.5" fill="currentColor"/><circle cx="420" cy="35" r="2.5" fill="currentColor"/>
<text x="25" y="68" font-size="12">wire</text><text x="95" y="68" font-size="12">battery (long = +)</text><text x="190" y="68" font-size="12">resistor</text><text x="305" y="68" font-size="12">bulb</text><text x="405" y="68" font-size="12">switch (open)</text>
<text x="10" y="148" font-size="12">capacitor</text><text x="130" y="115" font-size="14">A</text><text x="108" y="148" font-size="12">ammeter</text><text x="253" y="115" font-size="14">V</text><text x="228" y="148" font-size="12">voltmeter</text><text x="335" y="148" font-size="12">ground</text>
</svg>
<h3>Meters</h3>
<p>An <b>ammeter</b> measures the current through a component, so it goes <b>in series</b> (the current must flow through it) and should have tiny resistance. A <b>voltmeter</b> measures the potential difference across a component, so it is connected <b>in parallel</b> with it (touch its leads to both ends) and should have huge resistance so that it draws almost no current. Mixed up, an ammeter across a battery is a short circuit.</p>`},
  {id:"l3", title:"Series and parallel circuits (with derivation)", html:String.raw`
<p>Two conservation ideas explain every resistor network:</p>
<ul>
<li><b>Charge conservation at a junction</b> (Kirchhoff's junction rule): current into a junction equals current out.</li>
<li><b>Energy conservation around a loop</b> (loop rule): going around any closed loop, the potential rises (batteries) and drops ($IR$) sum to zero.</li>
</ul>
<h3>Series: one path</h3>
<p>The same current $I$ passes through all resistors (charge has nowhere else to go). The voltages add up to the battery: $V=V_1+V_2=IR_1+IR_2=I(R_1+R_2)$. So the pair behaves like a single resistor:</p>
$$R_{\text{series}}=R_1+R_2+\cdots$$
<p>Series resistors <i>share</i> the voltage in proportion to $R$ (bigger R gets bigger drop).</p>
<h3>Parallel: several paths</h3>
<p>Each branch connects directly across the same two points, so each has the <i>same voltage</i> $V$. The current splits: $I=I_1+I_2=\dfrac{V}{R_1}+\dfrac{V}{R_2}=V\left(\dfrac1{R_1}+\dfrac1{R_2}\right)$. Thus</p>
$$\frac1{R_{\text{parallel}}}=\frac1{R_1}+\frac1{R_2}+\cdots,\qquad R_{\text{par}}=\frac{R_1R_2}{R_1+R_2}\ \text{(two resistors)}$$
<p>Adding a branch gives the current an <i>extra</i> path, so the total resistance <b>goes down</b>, and is always smaller than the smallest branch. Parallel resistors <i>share</i> the current: smaller $R$ gets more current. This is why your house uses parallel wiring: every appliance sees the full 120 V, and unplugging one does not affect the others.</p>
<svg class="fig" viewBox="0 0 520 190" width="520" role="img" aria-label="Left: two resistors in series with a battery. Right: two resistors in parallel with a battery">
<g stroke="currentColor" stroke-width="2" fill="none">
<polyline points="40,50 40,30 100,30"/><polyline points="100,30 108,30 112,20 120,40 128,20 136,40 144,20 148,30 160,30"/><polyline points="160,30 175,30"/><polyline points="175,30 183,30 187,20 195,40 203,20 211,40 219,20 223,30 235,30"/><polyline points="235,30 235,150 40,150 40,100"/>
<line x1="28" y1="50" x2="52" y2="50"/><line x1="34" y1="60" x2="46" y2="60" stroke-width="4"/><line x1="40" y1="60" x2="40" y2="100"/>
<polyline points="300,50 300,30 400,30 400,150 300,150 300,100"/>
<line x1="288" y1="50" x2="312" y2="50"/><line x1="294" y1="60" x2="306" y2="60" stroke-width="4"/><line x1="300" y1="60" x2="300" y2="100"/>
<line x1="350" y1="30" x2="350" y2="45"/><polyline points="350,45 350,52 340,56 360,64 340,72 360,80 340,88 360,96 350,100 350,108"/><line x1="350" y1="108" x2="350" y2="150"/>
<line x1="400" y1="30" x2="450" y2="30"/><polyline points="450,30 450,52 440,56 460,64 440,72 460,80 440,88 460,96 450,100 450,108"/><line x1="450" y1="108" x2="450" y2="150"/><line x1="450" y1="150" x2="400" y2="150"/>
</g>
<text x="118" y="14" font-size="12">R₁</text><text x="193" y="14" font-size="12">R₂</text><text x="50" y="80" font-size="12">V</text>
<text x="322" y="82" font-size="12">R₁</text><text x="462" y="82" font-size="12">R₂</text><text x="310" y="80" font-size="12">V</text>
<text x="60" y="178" font-size="12">series: same I, voltages add</text><text x="290" y="178" font-size="12">parallel: same V, currents add</text>
</svg>
<p>For a mixed network: collapse innermost parallel/series groups into equivalent resistors until one remains; find the total current; then expand outward, using "current splits, voltage splits" at each step. Bulbs in the same circuit: a bulb's brightness follows its power $P=I^2R=V^2/R$.</p>
<div class="box trap"><b>Trap:</b> A battery does not supply a fixed current; it supplies a fixed <i>voltage</i> (ideal). Adding a resistor in parallel across a battery increases total current drawn, and the other branches are unaffected. Adding one in series decreases the current in every element.</div>`},
  {id:"l4", title:"Capacitors, magnets, magnetic fields from currents, generators and light", html:String.raw`
<h3>Capacitors: charge buckets (preview)</h3>
<p>A <b>capacitor</b> is two conductors separated by an insulator. Connect it to a battery and charge $+Q$ collects on one plate and $-Q$ on the other until the voltage across it matches the battery's: $Q=CV$, where $C$ is the <b>capacitance</b> (farads). A charged capacitor stores energy $\tfrac12CV^2$. Think of a bucket: current flows only while it fills; when full, <b>no current flows through it</b> and it acts like a gap in the circuit. In an RC circuit the filling is exponential, $q=Q_{\max}(1-e^{-t/RC})$ (E&amp;M 3). Capacitance appears in E&amp;M 2 and 3.</p>
<h3>Magnets</h3>
<p>Every magnet has two poles, north and south. Like poles repel, unlike attract. Cut a magnet in half and you get two smaller magnets each with both poles; <b>isolated poles (monopoles) have never been observed</b>. Magnetic field lines are drawn outside a magnet from north to south and, unlike electric lines, <b>form closed loops</b> (they continue inside from S to N). A compass needle is a tiny magnet that aligns with the local field: its north end points along the field, which is why the Earth's geographic-north compass end is attracted to what is, magnetically, a south pole.</p>
<h3>Currents make magnetic fields</h3>
<svg class="fig" viewBox="0 0 520 190" width="520" role="img" aria-label="Left: bar magnet with field lines leaving the north pole and entering the south pole. Right: a wire with current out of the page, with counterclockwise circular field lines">
<g stroke="currentColor" stroke-width="1.8" fill="none">
<rect x="50" y="80" width="60" height="30" fill="currentColor" fill-opacity=".08"/><rect x="110" y="80" width="60" height="30" fill="currentColor" fill-opacity=".25"/>
<path d="M170 95 C 215 95, 215 20, 140 20 C 65 20, 65 95, 50 95"/><path d="M170 95 C 250 95, 250 -5, 140 -5"/>
<path d="M170 95 C 215 95, 215 170, 140 170 C 65 170, 65 95, 50 95"/>
<circle cx="390" cy="95" r="30"/><circle cx="390" cy="95" r="55"/><circle cx="390" cy="95" r="80"/>
</g>
<text x="75" y="100" font-size="14">S</text><text x="135" y="100" font-size="14">N</text>
<circle cx="390" cy="95" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="390" cy="95" r="2.5" fill="currentColor"/>
<polygon points="420,95 414,103 426,103" fill="currentColor" transform="rotate(0 420 95)"/>
<polygon points="390,40 398,47 398,33" fill="currentColor"/><polygon points="360,95 366,87 354,87" fill="currentColor"/><polygon points="390,150 382,143 382,157" fill="currentColor"/>
<text x="320" y="185" font-size="12">current out of page: field circulates counterclockwise</text><text x="30" y="185" font-size="12">field lines leave N, enter S</text>
</svg>
<p><b>Right-hand rule for a straight wire:</b> point the thumb of your right hand along the current; your curled fingers show the direction of the magnetic field circling the wire. Out of the page: counterclockwise as seen from the front. A <b>coil</b> (solenoid) makes a field like a bar magnet: curl fingers along the current in the loops, and the thumb points toward the north end. <b>Force on a current:</b> a wire carrying current $I$ in a field $\vec B$ feels $\vec F=I\vec L\times\vec B$; a moving charge feels $\vec F=q\vec v\times\vec B$ (right-hand rule: fingers along $\vec v$, curl toward $\vec B$, thumb gives the force on a positive charge). The force is perpendicular to both, so a magnetic field never speeds a particle up; it only bends its path. E&amp;M 4 has all the details.</p>
<h3>Generators, motors and light</h3>
<p>A <b>motor</b> turns electrical energy into mechanical: a current-carrying loop in a magnetic field feels a torque, and a commutator flips the current each half-turn to keep it spinning. A <b>generator</b> is the same machine run backwards: an external torque spins a loop in a magnetic field, and the changing magnetic flux through the loop pushes charges around it, producing an emf $\mathcal E=-d\Phi_B/dt$ (Faraday's law, E&amp;M 5). Generators do not create energy: they convert mechanical (from steam, water, wind) into electrical.</p>
<p><b>Light</b> is an electromagnetic wave: oscillating electric and magnetic fields sustained by each other, moving at $c=3\times10^8$ m/s in vacuum. Radio, microwaves, visible light and X-rays differ only in frequency. The AP Physics C exam only touches this idea in passing (Maxwell's equations at the very end of E&amp;M 5), so one paragraph is all you need now.</p>`}
  ],
  examples:[
  {id:"x1", title:"Coulomb force first look", problem:String.raw`<p>Two small spheres each carry $+1.0\ \mu\text{C}$ and are 3.0 cm apart in air. Find the force one exerts on the other, and what happens to it if the separation is doubled. Use $k=9\times10^9$ N·m²/C².</p>`,
   solution:String.raw`<p>$F=k\dfrac{q^2}{r^2}=\dfrac{(9\times10^9)(1\times10^{-6})^2}{(0.03)^2}=\dfrac{9\times10^{-3}}{9\times10^{-4}}=10$ N, repulsive (like charges). Each sphere feels 10 N, pointing away from the other (third law). At $r=6$ cm the force is $\tfrac14$ as large: 2.5 N.</p>`},
  {id:"x2", title:"A mixed resistor network", problem:String.raw`<p>A 12 V ideal battery drives a 4 $\Omega$ resistor in series with a parallel pair of 6 $\Omega$ and 3 $\Omega$ resistors. Find the total current, the voltage across the parallel pair, the current in each of the parallel resistors, and the total power.</p>`,
   solution:String.raw`<p>Parallel pair: $R_p=\dfrac{6\cdot3}{6+3}=2\ \Omega$. Total: $R=4+2=6\ \Omega$. Current from battery: $I=12/6=2$ A, all of which goes through the 4 $\Omega$ resistor (drop 8 V).</p>
<p>The parallel pair gets the rest: $12-8=4$ V (check: $2\text{ A}\times2\ \Omega=4$ V). Currents: $4/6=\tfrac23$ A in the 6 $\Omega$ and $4/3$ A in the 3 $\Omega$; they sum to 2 A (junction rule).</p>
<p>Total power $P=IV=2(12)=24$ W. Check the parts: $2^2(4)=16$ W, plus $4^2/6+4^2/3=2.67+5.33=8$ W, total 24 W.</p>`},
  {id:"x3", title:"Household bulb", problem:String.raw`<p>A 60 W bulb is designed to run on 120 V. Find its current and resistance at operating conditions, and the energy it uses in 1 hour in joules and in kilowatt-hours.</p>`,
   solution:String.raw`<p>$I=P/V=60/120=0.5$ A. $R=V/I=240\ \Omega$ (equivalently $V^2/P=14400/60$). Energy $=Pt=60(3600)=2.16\times10^5$ J, which is $0.060$ kWh (60 W for one hour). The filament is hot when running; its resistance when cold is much lower, which is why bulbs often burn out at the moment of switch-on.</p>`}
  ],
  mcq:[
  {id:"q1", q:String.raw`<p>A plastic comb is rubbed on hair and then picks up small pieces of neutral paper. The best explanation is that</p>`, choices:["the paper becomes the same charge as the comb and is attracted","the comb's charge polarizes the paper, so the nearer charges of the paper are opposite and feel a stronger pull","neutral objects always attract charged ones with no charge motion","the paper has a net charge opposite to the comb to begin with","gravity increases near a charged object"], a:1,
   why:String.raw`<p>The paper stays neutral overall, but its charges shift slightly. The side nearer the comb is opposite in sign and is pulled more strongly than the farther, same-sign side is pushed (Coulomb forces fall with distance), giving net attraction. If the paper had become the same sign as the comb, it would be repelled.</p>`},
  {id:"q2", q:String.raw`<p>A negatively charged rod is brought near, without touching, an isolated neutral metal sphere. The sphere is touched momentarily with a finger (grounded), the finger is removed, and then the rod is taken away. The sphere is now</p>`, choices:["neutral","positively charged","negatively charged","negatively charged on one side and positively on the other","positively charged only if the rod was a conductor"], a:1,
   why:String.raw`<p>The rod repels electrons toward the far side. Grounding lets those electrons flow off to the Earth. After the ground is removed and the rod leaves, the sphere has a deficit of electrons: net positive. Induction always gives charge opposite to the inducing rod.</p>`},
  {id:"q3", q:String.raw`<p>An object carries a net charge of $-3.2$ nC ($-3.2\times10^{-9}$ C). Compared with neutral, it has an excess of about how many electrons? ($e=1.6\times10^{-19}$ C.)</p>`, choices:["$2\\times10^{10}$","$2\\times10^{9}$","$5\\times10^{-11}$","$2\\times10^{-10}$","$5\\times10^{10}$"], a:0,
   why:String.raw`<p>$N=Q/e=3.2\times10^{-9}/1.6\times10^{-19}=2\times10^{10}$. Large integer; charge is quantized but enormous numbers of electrons make it look continuous.</p>`},
  {id:"q4", q:String.raw`<p>Two point charges exert a force of 8 N on each other. One charge is tripled and the separation is doubled. The new force magnitude is</p>`, choices:["2 N","4 N","6 N","12 N","24 N"], a:2,
   why:String.raw`<p>$F\propto q_1q_2/r^2$: factor $3/2^2=3/4$, so $8\times\tfrac34=6$ N. Tripling alone gives 24 N; forgetting to square the distance gives 12 N.</p>`},
  {id:"q5", q:String.raw`<p>A battery is connected in series to a resistor and a light bulb. Compared with the current entering the bulb, the current leaving the bulb is</p>`, choices:["smaller, since the bulb uses up current to make light","larger, since the filament heats up","the same","zero, since the energy is gone","smaller by an amount equal to the power divided by the voltage"], a:2,
   why:String.raw`<p>Charge is conserved and cannot pile up in a steady circuit, so the same current flows everywhere in a single loop. The bulb converts <i>energy</i>: charges leave with lower potential energy than they entered with, but they all still leave.</p>`},
  {id:"q6", q:String.raw`<p>A bar magnet is cut in half across its middle, perpendicular to its length. The two pieces are</p>`, choices:["one north-only piece and one south-only piece","two weaker magnets, each with its own north and south pole","non-magnetic","two magnets, but only one has poles","one magnet and one piece of iron"], a:1,
   why:String.raw`<p>Poles come in pairs. Cutting reveals new poles at each cut face, so each piece is a smaller bar magnet. No isolated north or south pole has ever been found.</p>`},
  {id:"q7", q:String.raw`<p>Two identical bulbs are connected in parallel across an ideal battery. If one bulb burns out (its filament breaks), the other bulb</p>`, choices:["goes out too","glows brighter because the current has only one path","glows exactly as before","glows dimmer because the total resistance rose","glows only if the battery voltage rises"], a:2,
   why:String.raw`<p>In parallel each branch is connected directly across the battery and sees the full voltage regardless of the other branch. Its current and power $V^2/R$ are unchanged; only the total current drawn from the battery falls.</p>`},
  {id:"q8", q:String.raw`<p>A 12 $\Omega$ resistor and a 4 $\Omega$ resistor are connected in parallel. Their equivalent resistance is</p>`, choices:["3 $\\Omega$","8 $\\Omega$","16 $\\Omega$","4 $\\Omega$ exactly","48 $\\Omega$"], a:0,
   why:String.raw`<p>$R=\dfrac{12\cdot4}{12+4}=3\ \Omega$. A parallel combination is always smaller than its smallest member (4 $\Omega$), which rules out 8, 16 and 48 immediately. (Check: $\tfrac1{12}+\tfrac14=\tfrac13$.)</p>`},
  {id:"q9", q:String.raw`<p>An electric heater is rated 1500 W at 120 V. When operating normally, the current through it is closest to</p>`, choices:["0.08 A","12.5 A","18 A","180 A","1500 A"], a:1,
   why:String.raw`<p>$I=P/V=1500/120=12.5$ A. This is why such appliances need a heavy circuit (the 0.08 A answer comes from inverting the ratio).</p>`},
  {id:"q10", q:String.raw`<p>To measure both the current through a resistor and the potential difference across it, the ammeter and voltmeter should be connected, respectively,</p>`, choices:["in parallel with the resistor, and in series with the resistor","in series with the resistor, and in parallel with the resistor","both in series with the resistor","both in parallel with the resistor","in series with the battery only, and in parallel with the battery only"], a:1,
   why:String.raw`<p>Current is measured by letting it flow through the meter: series, and the meter should have very low resistance. Voltage is measured between two points: parallel across the component, and the meter should have very high resistance. Putting an ideal ammeter in parallel would short the resistor.</p>`},
  {id:"q11", q:String.raw`<p>A long straight wire carries current out of the page, toward the viewer. At a point to the right of the wire in the plane of the page, the magnetic field due to the wire points</p>`, choices:["into the page","out of the page","up the page","down the page","to the right, away from the wire"], a:2,
   why:String.raw`<p>Right thumb out of the page: the fingers circulate counterclockwise as seen by the viewer. At the right-hand point the counterclockwise tangent points up the page. The field never points toward or away from the wire; it circles it.</p>`},
  {id:"q12", q:String.raw`<p>A capacitor is connected in series with an ideal battery and a resistor, and the switch has been closed for a very long time. At that time the current in the resistor is</p>`, choices:["maximum, equal to the battery voltage divided by $R$","zero, and the capacitor's voltage equals the battery voltage","zero, and the capacitor's voltage is zero","maximum, and the capacitor's voltage is zero","zero, and the resistor has the full battery voltage"], a:1,
   why:String.raw`<p>Current only flows while the capacitor charges. When it is full, its voltage matches the battery's, no current flows, and the resistor (with $I=0$) has $V=IR=0$. The maximum-current picture is correct only at the instant the switch closes.</p>`}
  ],
  frq:[
  {id:"f1", type:"Qualitative/quantitative translation", title:"A series-parallel circuit and a burnt-out resistor",
   prompt:String.raw`<p>In the circuit shown, an ideal 12 V battery is connected to a resistor $R_1=6\ \Omega$ in series with two resistors in parallel, $R_2=6\ \Omega$ and $R_3=12\ \Omega$.</p>
<svg class="fig" viewBox="0 0 400 200" width="360" role="img" aria-label="Circuit: 12 V battery in series with R1 across the top, then R2 and R3 in parallel branches on the right, returning along the bottom wire">
<g stroke="currentColor" stroke-width="2" fill="none">
<polyline points="40,70 40,40 100,40"/><polyline points="100,40 110,40 114,30 122,50 130,30 138,50 146,30 150,40 160,40 250,40 250,170 40,170 40,100"/>
<line x1="28" y1="70" x2="52" y2="70"/><line x1="34" y1="80" x2="46" y2="80" stroke-width="4"/><line x1="40" y1="80" x2="40" y2="100"/>
<line x1="250" y1="40" x2="190" y2="40"/>
<polyline points="320,40 250,40"/><line x1="320" y1="40" x2="320" y2="170"/><line x1="320" y1="170" x2="250" y2="170"/>
</g>
<g stroke="currentColor" stroke-width="2" fill="none">
<rect x="244" y="80" width="12" height="50" fill="var(--bg,transparent)"/>
<rect x="314" y="80" width="12" height="50" fill="var(--bg,transparent)"/>
</g>
<text x="20" y="64" font-size="12">12 V</text><text x="116" y="26" font-size="12">R₁</text><text x="262" y="110" font-size="12">R₂</text><text x="332" y="110" font-size="12">R₃</text>
</svg>
<p>(a) Determine the equivalent resistance of the circuit and the current drawn from the battery.<br>
(b) Determine the potential difference across the parallel pair and the current in each of $R_2$ and $R_3$.<br>
(c) Determine the power dissipated in each resistor, and show that the total equals the power supplied by the battery.<br>
(d) Resistor $R_3$ now burns out and becomes an open circuit. Does the power dissipated in $R_1$ increase, decrease, or stay the same? Does the power in $R_2$ increase, decrease or stay the same? Justify both answers in words using the idea of how current and voltage are shared.<br>
(e) Indicate where an ammeter must be placed to measure the current through $R_2$ only, and state whether it is connected in series or parallel.</p>`,
   pts:[
    {p:1,d:"Parallel pair $=\\frac{6\\cdot12}{18}=4\\ \\Omega$"},
    {p:1,d:"Total $R=10\\ \\Omega$, $I=1.2$ A"},
    {p:1,d:"Voltage across parallel pair $=I(4)=4.8$ V (or $12-1.2\\cdot6=4.8$)"},
    {p:1,d:"$I_2=4.8/6=0.8$ A"},
    {p:1,d:"$I_3=4.8/12=0.4$ A (and checks $I_2+I_3=1.2$ A)"},
    {p:1,d:"Powers: $P_1=I^2R_1=8.64$ W, $P_2=3.84$ W, $P_3=1.92$ W"},
    {p:1,d:"Sum $=14.4$ W $=IV=1.2\\times12$"},
    {p:1,d:"$R_{eq}$ rises to 12 $\\Omega$, current falls to 1.0 A, so $P_1=1^2(6)=6$ W: decreases (battery fixed voltage; more resistance means less total current)"},
    {p:1,d:"$V$ across $R_2$ is now $12-6=6$ V, which is larger than 4.8 V: $P_2=36/6=6$ W, increases; explanation that $R_2$ gets a larger share of the voltage after the parallel partner is removed"},
    {p:1,d:"Qualitative explanation: with one fewer parallel path the total resistance is higher, so the series resistor's current and power drop while the voltage share across what remains rises"},
    {p:1,d:"Ammeter in series with $R_2$ (in its branch), not in parallel"}],
   solution:String.raw`<p>(a) $R_{23}=\dfrac{6\cdot12}{6+12}=4\ \Omega$; $R_{eq}=6+4=10\ \Omega$; $I=12/10=1.2$ A.</p>
<p>(b) $V_{23}=1.2(4)=4.8$ V. $I_2=4.8/6=0.8$ A, $I_3=4.8/12=0.4$ A; sum 1.2 A as required by the junction rule.</p>
<p>(c) $P_1=1.2^2(6)=8.64$ W, $P_2=4.8^2/6=3.84$ W, $P_3=4.8^2/12=1.92$ W. Total $=14.40$ W, and the battery supplies $IV=1.2(12)=14.4$ W.</p>
<p>(d) With $R_3$ gone, $R_{eq}=6+6=12\ \Omega$ and $I=1.0$ A. $R_1$ then dissipates $1^2(6)=6$ W: <b>decreases</b> (from 8.64 W), because the same battery voltage faces a larger total resistance, so less current flows through the series resistor. $R_2$ now has $V=12-6=6$ V, so $P=6^2/6=6$ W: <b>increases</b> (from 3.84 W). In words: removing a parallel path raises the resistance of that section, so it takes a larger share of the fixed 12 V (series elements split the voltage in proportion to resistance), while the series resistor takes a smaller share.</p>
<p>(e) The ammeter goes in the $R_2$ branch, <b>in series</b> with $R_2$, so that the same 0.8 A flows through it.</p>`}
  ]
});
