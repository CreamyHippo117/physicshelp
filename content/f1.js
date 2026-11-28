PH.unit({
  id:"f1", course:"skills", order:150, hours:8,
  title:"Exam skills: FRQ strategy for both exams",
  blurb:"How free-response answers are scored, how to write them, how to design and analyze an experiment, how to attack multiple choice, and how to organize five months of study. For official exam facts (counts, timing, points) see the app's Official page.",
  needs:["m1"],
  goals:[
    "Write FRQ answers in the order graders reward: equation, substitution, answer with units, then justification",
    "Work symbolically first and check every result with units and limiting cases",
    "Tell apart 'justify', 'explain' and 'derive', and answer each in the right form",
    "Design an experiment, linearize the data, and extract a physical constant and its uncertainty from a graph",
    "Pick the right principle (Newton, energy, momentum, Gauss, Ampere, Faraday, Kirchhoff) quickly",
    "Run a paper-practice and error-log routine that carries you through five months"
  ],
  lessons:[
  {id:"l1", videos:[{title:"Search: AP Physics C free response strategy and scoring",url:"https://www.youtube.com/results?search_query=AP+Physics+C+free+response+strategy+how+FRQs+are+scored",src:"YouTube search",note:"Pick a recent video from a teacher channel; compare its advice with the rubric habits above."}], title:"How free-response answers are scored", html:String.raw`
<p>Free-response questions (FRQs) are graded against a <b>rubric</b>: a list of specific, separately earned points. A grader is not asking "is this student smart?" but "is each rubric item visibly present on the page?" Your job is to make every item easy to find. For the exact number of questions, timing and point values, see the app's <b>Official</b> page; those facts are set by the College Board and can change.</p>
<p>The free-response section tends to mix several <i>kinds</i> of task. Names and mix can vary a little from year to year, but the skills are stable:</p>
<table><tr><th>Kind of task</th><th>What it rewards</th></tr>
<tr><td>Mathematical routines</td><td>Deriving or solving symbolically with calculus; clean algebra; correct limits and constants of integration</td></tr>
<tr><td>Translation between representations</td><td>Moving among a graph, an equation, words and a diagram, without losing information</td></tr>
<tr><td>Experimental design and analysis</td><td>Procedure, variables, linearizing data, reading a slope, uncertainty</td></tr>
<tr><td>Qualitative/quantitative translation</td><td>Physics reasoning in words tied explicitly to an equation or a calculated number</td></tr></table>
<h3>Rules that decide points</h3>
<ul>
<li><b>Equations first.</b> Write the governing law or principle (for example $\sum F=ma$ or $\Delta K=W$) before substituting. A correct starting equation is often worth a point by itself, even if the arithmetic later fails.</li>
<li><b>Answer before justification.</b> When a part says "determine, and justify", state the result in a clearly marked line, then justify. Graders hunt for the answer; a correct answer buried in a paragraph can be missed, and a justification that contradicts your boxed answer loses both.</li>
<li><b>Consistent with earlier error.</b> If part (a) is wrong but part (b) uses your (a) correctly, you can still earn (b). Never leave a later part blank because an earlier one failed. Write "using my result from (a)" and carry on. Conversely, make each part's work visible so the grader can see what you carried forward.</li>
<li><b>Units and significant figures.</b> A numerical answer without units usually loses a point. Keep 2 to 3 significant figures; do not round intermediate steps; do not report 9.8000000 either. Write the unit with the final answer, not only in the middle of the work.</li>
<li><b>Cross out, do not erase wildly.</b> A single neat strike-through is fine. Two competing answers, with neither crossed out, usually earns neither.</li>
<li><b>Do not say it twice differently.</b> Extra wrong statements can cost credit even when your main line is right.</li>
</ul>
<h3>Verbs on the page</h3>
<p><b>Derive</b>: start from a fundamental relation (a law, a definition, or a stated starting equation) and show the algebra or calculus to the target. Do not just quote the target. <b>Calculate / determine</b>: show the equation and a numerical or symbolic result. <b>Justify</b>: give a reason that rests on a physics principle, with an equation or a numerical comparison where possible. <b>Explain</b>: a short chain of cause and effect in words, naming the principle ("because the net force is zero, by Newton's first law, ..."). A bare "because" is not a justification; "because energy is conserved" is a start; "because energy is conserved, so $\tfrac12mv^2=mgh$, so $v$ does not depend on $m$" earns the point.</p>
<div class="box trap"><b>Trap:</b> "Explain" does not mean "restate the answer louder". Name the principle and apply it to the specific situation.</div>`},

  {id:"l2", title:"Symbolic first, check always, and the calculus toolkit", html:String.raw`
<h3>The symbolic-first habit</h3>
<p>Carry letters through the whole solution and substitute numbers only at the end. Reasons: (1) the AP often asks for an answer "in terms of $m$, $g$, $h$" with no numbers at all; (2) letters let you check units and limits; (3) quantities cancel (mass often does), which is itself a physics result you can state; (4) one arithmetic slip no longer corrupts everything after it.</p>
<div class="box key"><b>Check every final symbolic answer twice.</b></div>
<ol>
<li><b>Units (dimensions).</b> Both sides of an equation must have the same dimensions, and you cannot add a length to a time. If $v=\sqrt{2gh}$, then $[g][h]=\mathrm{m^2/s^2}$ and the root is m/s. A wrong formula often fails here in two seconds.</li>
<li><b>Limiting cases.</b> Put in an extreme value where you already know the answer. Example: an Atwood machine acceleration $a=\dfrac{(m_2-m_1)g}{m_1+m_2}$ gives $0$ when $m_1=m_2$, gives $g$ when $m_1\to0$ (free fall), and changes sign if you swap the masses. All three are correct physics.</li>
<li><b>Sign and size.</b> Does the answer decrease when it should? Is it positive when you expect a positive quantity?</li>
</ol>
<h3>Calculus-in-physics moves you will use again and again</h3>
<table><tr><th>Move</th><th>When</th><th>Pattern</th></tr>
<tr><td>Separation of variables</td><td>$dv/dt=f(v)$, RC and RL decay, drag</td><td>$\int \dfrac{dv}{f(v)}=\int dt$, then apply initial conditions</td></tr>
<tr><td>Chain rule $a=v\,dv/dx$</td><td>Acceleration given as a function of position, or you want $v(x)$</td><td>$\int v\,dv=\int a\,dx$</td></tr>
<tr><td>Slicing with $dm$ or $dq$</td><td>Non-uniform rod, disk, shell: moments of inertia, center of mass, field of a charge distribution</td><td>$dm=\lambda\,dx$ or $\sigma\,dA$ or $\rho\,dV$; integrate $r^2\,dm$ etc.</td></tr>
<tr><td>Work as an integral</td><td>Force varies with position</td><td>$W=\int F\,dx$ (area under $F$ versus $x$)</td></tr>
<tr><td>Gauss's law symmetry</td><td>Sphere, long cylinder, infinite plane of charge</td><td>Choose a surface where $E$ is constant and perpendicular: $E\,A=Q_\text{enc}/\varepsilon_0$</td></tr>
<tr><td>Ampere's law symmetry</td><td>Long wire, solenoid, toroid</td><td>$\oint\vec B\cdot d\vec\ell=\mu_0I_\text{enc}$ with a loop along which $B$ is constant</td></tr>
<tr><td>Exponential ODE</td><td>$dy/dt=-y/\tau$</td><td>$y=y_0e^{-t/\tau}$; half-life $\tau\ln 2$</td></tr>
<tr><td>Dimensional "tracking" of a derivative</td><td>Slope of a graph</td><td>Slope units = (y units)/(x units); that is often the quantity you want</td></tr></table>
<div class="box trap"><b>Trap:</b> Integrals need <i>limits</i> or an initial condition. A bare "$+C$" never resolved is a lost point on nearly every derive question.</div>

<h3>Which principle should I use?</h3>
<p>Most of the time wasted on an exam is spent choosing the wrong tool. Run this chart top to bottom and take the first "yes".</p>
<svg class="fig" viewBox="0 0 660 560" width="660" role="img" aria-label="Decision chart for choosing a physics principle. Question boxes on the left each point right to a tool: force or acceleration at one instant leads to Newton's second law; asking for time or motion with varying force leads to Newton's second law then integrate or solve the differential equation; speed versus position with conservative forces leads to energy conservation, with friction or drag to work-energy with nonconservative work; collision or explosion leads to momentum conservation; rotation with torques leads to torque and angular momentum; field from a symmetric charge or current distribution leads to Gauss or Ampere; changing magnetic flux leads to Faraday and Lenz; circuit with loops and junctions leads to Kirchhoff and RC differential equations; no symmetry leads to superposition integrals.">
<defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="currentColor"/></marker></defs>
<g font-size="12">
<text x="10" y="18" font-weight="bold">MECHANICS</text>
<rect x="10" y="26" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="43">Need a force, tension, or the acceleration</text><text x="18" y="58">right now (one instant)?</text>
<line x1="340" y1="46" x2="400" y2="46" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="26" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="50">Newton's 2nd law with a free-body diagram</text>
<rect x="10" y="74" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="91">Need x(t) or v(t), or the force depends on</text><text x="18" y="106">time or velocity (drag, spring, ...)?</text>
<line x1="340" y1="94" x2="400" y2="94" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="74" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="91">Newton's 2nd law, then integrate</text><text x="410" y="106">(ODE, separation of variables)</text>
<rect x="10" y="122" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="139">Speed or height at two positions, only</text><text x="18" y="154">gravity or springs doing work?</text>
<line x1="340" y1="142" x2="400" y2="142" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="122" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="139">Conservation of mechanical energy</text><text x="410" y="154">(K + U constant)</text>
<rect x="10" y="170" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="187">Same, but friction, drag or an applied</text><text x="18" y="202">force also does work?</text>
<line x1="340" y1="190" x2="400" y2="190" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="170" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="187">Work-energy theorem:</text><text x="410" y="202">K_i + W_other = K_f (+U terms)</text>
<rect x="10" y="218" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="235">Collision, explosion, or very short</text><text x="18" y="250">interaction between objects?</text>
<line x1="340" y1="238" x2="400" y2="238" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="218" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="235">Momentum conservation of the system</text><text x="410" y="250">(then check if energy is lost)</text>
<rect x="10" y="266" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="283">Spinning, rolling, or torque about an axis?</text><text x="18" y="298">Is any external torque zero?</text>
<line x1="340" y1="286" x2="400" y2="286" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="266" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="283">Torque = I alpha, or angular momentum</text><text x="410" y="298">conservation if net torque is zero</text>
<text x="10" y="334" font-weight="bold">ELECTRICITY AND MAGNETISM</text>
<rect x="10" y="342" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="359">Field from charge or current with spherical,</text><text x="18" y="374">cylindrical or planar symmetry?</text>
<line x1="340" y1="362" x2="400" y2="362" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="342" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="359">Gauss's law (E) or Ampere's law (B):</text><text x="410" y="374">pick a symmetric surface or loop</text>
<rect x="10" y="390" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="407">Field at a point, but no useful symmetry?</text><text x="18" y="422">(ring, finite rod, short wire)</text>
<line x1="340" y1="410" x2="400" y2="410" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="390" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="407">Superposition integral: slice dq, use</text><text x="410" y="422">Coulomb (E) or Biot-Savart (B)</text>
<rect x="10" y="438" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="455">Magnetic flux changing in time, or a</text><text x="18" y="470">conductor moving in a B field?</text>
<line x1="340" y1="458" x2="400" y2="458" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="438" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="455">Faraday's law for emf, Lenz's law</text><text x="410" y="470">for direction</text>
<rect x="10" y="486" width="330" height="40" rx="6" fill="none" stroke="currentColor"/><text x="18" y="503">Currents and voltages in a circuit with</text><text x="18" y="518">resistors, capacitors, inductors?</text>
<line x1="340" y1="506" x2="400" y2="506" stroke="currentColor" marker-end="url(#ar)"/><rect x="402" y="486" width="248" height="40" rx="6" fill="currentColor" fill-opacity=".1" stroke="currentColor"/><text x="410" y="503">Kirchhoff loop and junction rules;</text><text x="410" y="518">RC / RL differential equations</text>
<text x="10" y="548" class="mut">Many problems need two tools in sequence, for example energy for a speed, then Newton for the force at that instant.</text>
</g></svg>
<p>Combining tools is normal: a pendulum bob's speed at the bottom comes from <b>energy</b>; the string's tension there then comes from <b>Newton's second law</b> (centripetal). Name each tool as you switch.</p>`},

  {id:"l3", videos:[{title:"Linearization of Data for Science Labs & Experimental Design",url:"https://www.youtube.com/watch?v=oB2I5PEYc64",src:"YouTube (channel not verified)",note:"Turning a theory into a straight-line plot and reading slope and intercept."},{title:"Linearization and Uncertainty in Slope",url:"https://www.youtube.com/watch?v=__Wr7LbvwKE",src:"YouTube (channel not verified)",note:"Worked linearization plus slope uncertainty; an IB-style treatment, matches the steepest/shallowest-line idea."}], title:"Experimental design, linearization and uncertainty", html:String.raw`
<p>An experimental question usually gives you a physical relationship and asks you to design a way to <b>test it or find a constant</b>, then analyze (often fictional) data. A good answer is concrete enough that another student could repeat it.</p>
<h3>What a complete procedure contains</h3>
<ol>
<li><b>Goal as an equation.</b> Say which quantity you want ($g$, a spring constant $k$, a resistance $R$) and the theory that connects it to what you can measure.</li>
<li><b>Variables.</b> The <b>independent variable</b> is the one you choose and change (for example the length $L$). The <b>dependent variable</b> is the one you measure in response (the period $T$). <b>Controlled variables</b> are everything else you keep fixed (same bob, small release angle). Naming them separately is routinely a rubric item.</li>
<li><b>Equipment and what each measures.</b> Meter stick for length, stopwatch or photogate for time, balance for mass, voltmeter in parallel, ammeter in series.</li>
<li><b>Steps with repetition.</b> Vary the independent variable over a wide range (at least five values), repeat each measurement and average, and say <i>how</i> you reduce error (time ten swings instead of one; measure from the pivot to the center of the bob).</li>
<li><b>What you will plot and how you will use it.</b> State the plot and what its slope or intercept means.</li>
</ol>
<h3>Linearization</h3>
<p>Straight lines are easy to judge by eye and easy to fit, so rearrange the theory into $y=mx+b$ with $y$ and $x$ built from measured quantities.</p>
<table><tr><th>Theory</th><th>Plot ($y$ vs $x$)</th><th>Slope</th></tr>
<tr><td>$T=2\pi\sqrt{L/g}$</td><td>$T^2$ vs $L$</td><td>$4\pi^2/g$</td></tr>
<tr><td>$d=v^2/(2\mu g)$ (skid distance)</td><td>$d$ vs $v^2$</td><td>$1/(2\mu g)$</td></tr>
<tr><td>$V=V_0e^{-t/RC}$</td><td>$\ln V$ vs $t$</td><td>$-1/RC$</td></tr>
<tr><td>$F=kx$</td><td>$F$ vs $x$</td><td>$k$</td></tr>
<tr><td>$y=Ax^n$ (power law)</td><td>$\ln y$ vs $\ln x$</td><td>$n$ (intercept is $\ln A$)</td></tr></table>
<svg class="fig" viewBox="0 0 340 220" width="340" role="img" aria-label="Scatter plot of T squared versus L with a best-fit line, a steeper line and a shallower line, all drawn through a common region, with a positive intercept on the vertical axis">
<line x1="50" y1="190" x2="320" y2="190" stroke="currentColor"/><line x1="50" y1="190" x2="50" y2="15" stroke="currentColor"/>
<line x1="50" y1="170" x2="300" y2="30" stroke="currentColor" stroke-width="2"/>
<line x1="50" y1="172" x2="300" y2="18" stroke="currentColor" stroke-dasharray="5 4"/>
<line x1="50" y1="168" x2="300" y2="42" stroke="currentColor" stroke-dasharray="5 4"/>
<g fill="currentColor"><circle cx="90" cy="148" r="3.5"/><circle cx="140" cy="122" r="3.5"/><circle cx="190" cy="98" r="3.5"/><circle cx="240" cy="68" r="3.5"/><circle cx="290" cy="36" r="3.5"/></g>
<text x="300" y="208">L (m)</text><text x="6" y="14">T² (s²)</text><text x="8" y="174">b</text><text x="150" y="60">steepest and shallowest lines</text><text x="150" y="76">give the range of the slope</text></svg>
<h3>Reading the graph</h3>
<ul>
<li><b>Slope:</b> choose two points <i>on the line</i>, far apart, not two data points. Show the subtraction with units. Then convert: $g=4\pi^2/\text{slope}$.</li>
<li><b>Intercept:</b> compare it with what the theory predicts. A theory $T^2\propto L$ predicts an intercept of zero. A non-zero intercept signals a <i>systematic</i> error (for example $L$ measured to the top of the bob rather than its center).</li>
<li><b>Uncertainty:</b> draw the steepest and shallowest lines that still pass through the error bars (or the scatter). Their slopes bound the slope, and therefore the constant. Random scatter is reduced by averaging; systematic errors shift every point the same way and show up as an offset.</li>
<li><b>Propagation (simple worst-case):</b> for $g=4\pi^2L/T^2$ the fractional uncertainties add, with $T$ counted twice: $\dfrac{\delta g}{g}\approx\dfrac{\delta L}{L}+2\dfrac{\delta T}{T}$.</li>
</ul>
<div class="box trap"><b>Trap:</b> Do not "improve" a result by naming a cause you did not measure. Say how an effect would shift the data (higher or lower, which axis) and whether it matches the observed intercept or scatter.</div>`},

  {id:"l4", videos:[{title:"Search: how to study for AP Physics C spaced repetition",url:"https://www.youtube.com/results?search_query=how+to+study+for+AP+Physics+C+spaced+repetition+error+log",src:"YouTube search",note:"Look for study-method advice; optional."}], title:"Multiple choice, paper practice, and a five-month method", html:String.raw`
<h3>Multiple-choice strategy</h3>
<p>Multiple choice rewards speed and judgment more than long derivations. See the Official page for the number of questions and the time; the strategy below works for any count.</p>
<ol>
<li><b>Budget time by the clock, not by feel.</b> Compute roughly how many minutes per question once, then check at fixed checkpoints. Hard problems cost the same one point as easy ones, so skip and mark anything that stalls you after about double your average time, and return at the end.</li>
<li><b>Estimate first.</b> Round $g$ to 10, $\pi$ to 3, $\sqrt{2}$ to 1.4. Choices are often spread widely enough that a one-line estimate picks the answer.</li>
<li><b>Eliminate with units and limits.</b> Throw out any choice with wrong dimensions. Then test two extremes (a mass to zero or infinity, an angle to $0^\circ$ or $90^\circ$). Usually one choice survives.</li>
<li><b>Look at the answer set.</b> Choices that differ by a factor of 2 or a sign reveal which common errors are expected, such as forgetting the $\tfrac12$ in $\tfrac12mv^2$.</li>
<li><b>Use the right tool.</b> Re-read the decision chart. A collision problem asked for a final speed is momentum, not energy.</li>
<li><b>Never leave a blank</b> unless the official rules for the current year say guessing is penalized (check the Official page); otherwise guess after eliminating.</li>
</ol>
<h3>Paper-practice protocol</h3>
<p>Do free-response practice on paper, under honest conditions, because exam skill is partly physical: handwriting, layout, speed.</p>
<ol>
<li><b>Set a timer</b> for the realistic time for that question, closed book, with only the permitted formula sheet and calculator.</li>
<li><b>Write the full answer</b> as you would on the exam: equations first, units, justification.</li>
<li><b>Self-score against the rubric</b> in a different color pen. Be strict: if the grader would have to guess your intention, no point. Score each item 0 or 1.</li>
<li><b>Classify every lost point</b> in an error log (below), then <b>redo the question from scratch</b> two to three days later without looking.</li>
</ol>
<h3>The error log</h3>
<p>Keep a notebook with one line per lost point: date, unit, question, <i>what went wrong</i>, and <i>the rule that would have prevented it</i>. Tag the cause: <b>concept</b> (did not know), <b>method</b> (wrong tool), <b>algebra/calculus</b>, <b>units/sig figs</b>, <b>reading the question</b>, <b>communication</b> (right idea, not shown). After two or three weeks, count tags. The biggest tag is your study plan.</p>
<h3>A five-month plan</h3>
<table><tr><th>Phase</th><th>Focus</th></tr>
<tr><td>Months 1-2</td><td>Learn each unit once: read, work every example, do the MCQs. Sleep on it, then redo the examples next day without looking.</td></tr>
<tr><td>Months 3-4</td><td>Finish the second exam's units. Begin <b>spaced review</b>: revisit each unit at about 1 day, 1 week, 1 month. Start the error log and weekly timed FRQs on paper.</td></tr>
<tr><td>Month 5</td><td>Mixed timed practice only. Full-length sections, strict self-scoring, rework your error log. Taper: sleep and a calm routine in the last week matter more than one more cram session.</td></tr></table>
<p>Two principles carry everything: <b>retrieval beats rereading</b> (close the page and reproduce the derivation), and <b>spacing beats massing</b> (four 30-minute sessions across a month beat one two-hour block). Since the two exams share Mechanics and E&amp;M skills that return again and again, reviewing common tools (energy, Newton, Gauss) pays double.</p>`},

  {id:"l5", title:"The equation sheet: what you are given and what you must own", html:String.raw`
<p class="mut">Hedge: I could not reach the College Board while writing this, so everything below about the sheet's contents is from memory of past sheets and may be out of date. <b>Download the current official equation sheet for each exam from the College Board's AP Physics C pages, print it, and compare it line by line with this lesson.</b> Where this lesson and the official sheet disagree, the sheet wins.</p>
<h3>Why this matters</h3>
<p>Both exams hand you a formula sheet. That changes what is worth memorizing, but it does not remove the need to <i>know</i> physics: a sheet lists relations, not when each applies, what the symbols mean in your problem, or how to build a result the sheet does not list. A sheet also costs time to scan. Students who have never seen it before exam day lose both.</p>
<h3>Three tiers</h3>
<table><tr><th>Tier</th><th>What goes in it</th><th>How to treat it</th></tr>
<tr><td><b>A. Own it cold</b></td><td>Newton's second law in vector form, $F=dp/dt$; the definitions of work, power, torque, angular momentum, flux, emf; conservation laws and the conditions under which each holds; sign conventions; which direction forces, fields and induced currents point (Lenz, right-hand rules)</td><td>Never need a lookup. These are the <i>meaning</i> of the course.</td></tr>
<tr><td><b>B. Derive in under a minute</b></td><td>Constant-acceleration kinematics (integrate $a$), range and time of flight, the moment of inertia of a rod or disk from $\int r^2\,dm$, parallel-axis shifts, $v_\text{esc}$, the field of a symmetric charge distribution from Gauss's or Ampere's law, $\tau=RC$ results from the ODE</td><td>If a result is on the sheet, great; if not, you can rebuild it. Practice each derivation until it is automatic (see the next lesson for the list).</td></tr>
<tr><td><b>C. Look up</b></td><td>Constants, the literal forms of standard laws and rarely used formulas (for example, lists of capacitance or inductance expressions, or moments of inertia, if the sheet carries them)</td><td>Know <i>where</i> on the sheet each lives so you find it in seconds.</td></tr></table>
<h3>Things to verify on the official sheet (do this today)</h3>
<ul>
<li>Does it list $I=\int r^2\,dm$ and the parallel-axis theorem? My recollection is that the Mechanics sheet gives these general forms and that problems supply the specific $I$ of a given object in the statement. If the sheet has no table of shapes, you must be able to derive the rod and disk (done in the rotation unit).</li>
<li>Which of the following are given: the kinematics equations for constant $a$, the work and power integrals, $F=dp/dt$, the SHM relations, the gravitational potential energy $-GMm/r$ and Kepler-type relations?</li>
<li>For E&amp;M: which of Coulomb's law, Gauss's law, $V=-\int\vec E\cdot d\vec\ell$, the capacitor and inductor energy and series/parallel formulas, Biot-Savart, Ampere's law, Faraday's law, the RC and RL exponentials appear? Are the units of the constants given?</li>
<li>Where is the table of constants, and does it use $g=9.8$ or 10 m/s²? Use whichever the exam statement says.</li>
<li>Does the sheet carry a "geometry and trigonometry" panel (areas, volumes, trig identities, calculus formulas)? Know exactly what is in it.</li>
</ul>
<h3>How to use the sheet well</h3>
<ol>
<li><b>Annotate your own copy during practice.</b> Mark each formula with the unit it comes from and a note about when it applies ("only for constant $a$", "only for a point charge", "$I$ about the center").</li>
<li><b>Write the principle before you look.</b> Decide the physics first (decision chart in lesson 2), then find the form on the sheet. Hunting through the sheet for "a formula with $m$, $v$ and $r$" leads to plugging numbers into the wrong relation.</li>
<li><b>Check the conditions.</b> Many sheet entries are special cases: $v=v_0+at$ needs constant $a$; $E=kq/r^2$ is a point charge; $U=\tfrac12kx^2$ is a spring about its relaxed length. The sheet does not print those warnings.</li>
<li><b>Check symbols.</b> The same letter can mean different things across entries ($\mu$ for friction versus magnetic permeability, $R$ for a radius versus a resistance, $\tau$ for torque versus a time constant). Say what each symbol is in your answer.</li>
<li><b>Use it to test results.</b> After deriving something, compare with the sheet entry. If the two differ by a factor, find the mistake now.</li>
</ol>
<h3>E&amp;M units to be fluent in</h3>
<p>The sheet may not list units, and a units check is the fastest error filter. All of these follow from the definitions.</p>
<table><tr><th>Quantity</th><th>Unit</th><th>In base or familiar units</th></tr>
<tr><td>Magnetic field $B$</td><td>tesla (T)</td><td>$\mathrm{N/(A\,m)}=\mathrm{kg/(A\,s^2)}=\mathrm{V\,s/m^2}$</td></tr>
<tr><td>Magnetic flux $\Phi_B$</td><td>weber (Wb)</td><td>$\mathrm{T\,m^2}=\mathrm{V\,s}$</td></tr>
<tr><td>Capacitance</td><td>farad (F)</td><td>$\mathrm{C/V}=\mathrm{s/\Omega}$</td></tr>
<tr><td>Inductance</td><td>henry (H)</td><td>$\mathrm{V\,s/A}=\Omega\,\mathrm{s}$</td></tr>
<tr><td>$\varepsilon_0$</td><td>F/m</td><td>$\mathrm{C^2/(N\,m^2)}$</td></tr>
<tr><td>$\mu_0$</td><td>T$\cdot$m/A</td><td>$\mathrm{N/A^2}$ (also H/m)</td></tr>
<tr><td>Time constants</td><td>seconds</td><td>$RC$: $\Omega\cdot\mathrm{F}=\mathrm{s}$; $L/R$: $\mathrm{H/\Omega}=\mathrm{s}$</td></tr></table>
<div class="box trap"><b>Trap:</b> A formula that is on the sheet is not automatically the right one for your problem. Using $a=\Delta v/\Delta t$ for a varying force, or $E=kq/r^2$ for a charged disk, is a classic lost point.</div>`},

  {id:"l6", videos:[{title:"Lec 01: Units, Dimensions, and Scaling Arguments (Walter Lewin, 8.01, MIT 1999)",url:"https://archive.org/details/MIT8.01F99/",src:"Walter Lewin lectures (MIT 8.01, Internet Archive)",note:"Dimensional analysis and uncertainties; the first lecture in the series. I found this series page in search, not the specific video file."}], title:"Common FRQ derivation moves", html:String.raw`
<p>Free-response "derive" parts reuse the same dozen moves. If you can name the move, you can usually start. Each is short here; the full treatment is in the relevant unit.</p>
<h3>1. Pick a positive direction, then write one equation per object</h3>
<p>For each object draw a free-body diagram, choose positive along its acceleration, and write $\sum F=ma$. For several connected objects write one equation each and then add the <b>constraint</b> (move 2).</p>
<h3>2. Constraint equations from a string of fixed length</h3>
<p>If a string has fixed length, the lengths of its segments add to a constant, and differentiating twice links the accelerations. A string over a fixed pulley gives $a_1=a_2$ in magnitude. A string supporting a <i>movable</i> pulley by two segments gives: the pulley moves half as far as the free end. Rolling without slipping gives $v_\text{cm}=\omega R$, $a_\text{cm}=\alpha R$. A massless string has the same tension throughout only if it passes over a frictionless, massless pulley; a pulley with moment of inertia has different tensions on its two sides.</p>
<h3>3. Energy for speeds, Newton for forces, in that order</h3>
<p>Energy gives speed at a place with no time or path details. Then insert that speed into $\sum F=ma$ (with $a=v^2/r$ along a circle) to get tension, normal force or the condition for leaving the surface.</p>
<h3>4. Slice and integrate</h3>
<p>Choose an element ($dm=\lambda\,dx$, $dq=\sigma\,dA$, $dV$ of a shell, a ring, a thin rod), write the contribution of that element in terms of one variable, check its direction (cancelling components by symmetry), and integrate with limits. State the limits and the symmetry argument.</p>
<h3>5. Change of variable</h3>
<p>$a=\dfrac{dv}{dt}=v\dfrac{dv}{dx}$ when the force depends on position; separation of variables when it depends on $v$; rewrite $\int F\,dx$ with a substitution when $x$ is given implicitly.</p>
<h3>6. Optimization by calculus</h3>
<p>For maximum range, minimum force or optimum angle: write the quantity as a function of one variable, set the derivative to zero, then confirm it is a maximum or minimum (second derivative or a physical check at the end points). Example: pulling a crate with a rope at angle $\theta$ above the horizontal at constant speed, $F\cos\theta=\mu(mg-F\sin\theta)$, so $F=\dfrac{\mu mg}{\cos\theta+\mu\sin\theta}$. The force is smallest when the denominator is largest: $\dfrac{d}{d\theta}(\cos\theta+\mu\sin\theta)=0\Rightarrow\tan\theta=\mu$.</p>
<h3>7. Small-angle and Taylor expansion</h3>
<p>$\sin\theta\approx\theta$ turns a pendulum or a restoring torque into SHM. Expand $(1+x)^{-1/2}\approx1-\tfrac{x}{2}$ to show that a general result reduces to a familiar one far away ($z\gg R$ for a ring: it becomes a point charge).</p>
<h3>8. Symmetry first (Gauss, Ampere)</h3>
<p>State the symmetry, choose the surface or loop, write what is constant on it, and write $Q_\text{enc}$ or $I_\text{enc}$ as an integral of the density when the distribution is not uniform.</p>
<h3>9. Kirchhoff plus an ODE</h3>
<p>Write the loop equation, rewrite $I=dq/dt$ (or $dq/dt$ with the capacitor's $q$), solve by separating variables with $q(0)$ given, then check $t=0$ and $t\to\infty$ with the "capacitor is a wire, then an open circuit" rules.</p>
<h3>10. Reading graphs</h3>
<table><tr><th>Graph</th><th>Slope means</th><th>Area means</th></tr>
<tr><td>$x$ versus $t$</td><td>velocity</td><td></td></tr>
<tr><td>$v$ versus $t$</td><td>acceleration</td><td>displacement</td></tr>
<tr><td>$F$ versus $x$</td><td></td><td>work</td></tr>
<tr><td>$F$ versus $t$</td><td></td><td>impulse</td></tr>
<tr><td>$U$ versus $x$</td><td>$-F$</td><td></td></tr>
<tr><td>$V$ versus $x$</td><td>$-E_x$</td><td></td></tr>
<tr><td>$\Phi_B$ versus $t$</td><td>$-\varepsilon$ (for one turn)</td><td></td></tr>
<tr><td>$I$ versus $t$</td><td></td><td>charge</td></tr>
<tr><td>$V$ versus $I$ (battery)</td><td>$-r$ (internal resistance)</td><td></td></tr></table>
<p>Always attach units: slope units are (vertical)/(horizontal), area units are (vertical)$\times$(horizontal).</p>
<h3>Derivations to own</h3>
<p>Be able to produce these from scratch, in a few lines, without the sheet: projectile range and $y(x)$; terminal speed from $mg=kv$ or $mg=kv^2$; $v(t)$ under linear drag; $I$ of a rod and a disk and the parallel-axis shift; $a=g\sin\theta/(1+\beta)$ for rolling down an incline; the period of a physical pendulum; orbital energy $-GMm/2r$ and the escape speed; $E$ of a ring, a long line, a plane, a sphere; capacitance of parallel plates, a spherical and a cylindrical capacitor; $B$ of a long wire, a solenoid and the axis of a loop; and the $RC$ charging curve.</p>
<div class="box trap"><b>Trap:</b> Do not announce a derived formula and then use a different one. If you wrote $F=\mu mg/(\cos\theta+\mu\sin\theta)$ in (a), use it in (b), even if you later suspect an error. See "consistent with earlier error" in lesson 1.</div>`},

  {id:"l7", extra:true, videos:[{title:"Lecture 2: Euler's Numerical Method for y'=f(x,y) (MIT 18.03, Prof. Mattuck)",url:"https://ocw.mit.edu/courses/mathematics/18-03-differential-equations-spring-2010/video-lectures/lecture-2-eulers-numerical-method-for-y-f-x-y/",src:"MIT OCW 18.03",note:"Euler's method from the slope field idea; the page turned up in search results."}], title:"Extension: numerical solution of an ODE (Euler's method)", html:String.raw`
<p>Many force laws give an ODE you cannot integrate in closed form. Then you march forward in small time steps. This is how physics software works, and a spreadsheet is enough to do it.</p>
<h3>The method</h3>
<p>If $\dfrac{dy}{dt}=f(y,t)$ and you know $y$ now, the slope tells you where $y$ goes next:</p>
$$y_{n+1}=y_n+f(y_n,t_n)\,\Delta t,\qquad t_{n+1}=t_n+\Delta t.$$
<p>For motion, track two quantities: $v_{n+1}=v_n+a(x_n,v_n,t_n)\Delta t$ and $x_{n+1}=x_n+v_n\Delta t$. Each row of a spreadsheet is one step.</p>
<h3>What to expect</h3>
<ul>
<li>The error per step is of order $\Delta t^2$ and the total error over a fixed time is of order $\Delta t$: halve the step and the error roughly halves.</li>
<li>When the exact curve is concave down (the slope is decreasing), Euler uses the slope at the start of each step, which is too steep, and so overshoots. When the curve is concave up it undershoots (a decaying exponential is concave up, so Euler lands below it).</li>
<li>Always test your spreadsheet on a case with a known answer (for example $dv/dt=-v/\tau$) before trusting it on a new problem.</li>
</ul>
<p>The AP will not ask you to run a spreadsheet by hand for many steps, but one or two steps, or the idea of stepping with the slope, can appear in a qualitative way, and the habit of "slope times step" strengthens your understanding of $dy/dt$. Example 5 below carries out five steps.</p>`},

  {id:"l8", extra:true, title:"Extension: an experiment menu", html:String.raw`
<p>Experimental questions repeat a pattern: find a theory $y=mx+b$ that links a quantity you can set and one you can measure. Here is a menu of systems, each with the plot and what the slope and intercept give. Practice writing the full procedure from lesson 3 for several of them.</p>
<table><tr><th>Goal</th><th>Theory</th><th>Plot</th><th>Slope</th><th>Intercept</th></tr>
<tr><td>$g$ from a pendulum</td><td>$T^2=\dfrac{4\pi^2}{g}L$</td><td>$T^2$ vs $L$</td><td>$4\pi^2/g$</td><td>0 (offset signals $L$ error)</td></tr>
<tr><td>$k$ of a spring (dynamic)</td><td>$T^2=\dfrac{4\pi^2}{k}\left(m+\dfrac{m_s}{3}\right)$</td><td>$T^2$ vs $m$</td><td>$4\pi^2/k$</td><td>$\dfrac{4\pi^2}{k}\dfrac{m_s}{3}$</td></tr>
<tr><td>$k$ of a spring (static)</td><td>$mg=kx$</td><td>$mg$ vs $x$</td><td>$k$</td><td>0 (offset: unstretched length)</td></tr>
<tr><td>Friction coefficient</td><td>$d=v^2/(2\mu g)$</td><td>$d$ vs $v^2$</td><td>$1/(2\mu g)$</td><td>0</td></tr>
<tr><td>Rolling or incline acceleration</td><td>$x=\tfrac12at^2$</td><td>$x$ vs $t^2$</td><td>$a/2$</td><td>0</td></tr>
<tr><td>Physical pendulum</td><td>$T=2\pi\sqrt{I_\text{pivot}/(mgd)}$</td><td>$T^2d$ vs $d^2$ (rod about a pivot at distance $d$)</td><td>$4\pi^2/g$</td><td>$4\pi^2 I_\text{cm}/(mg)$</td></tr>
<tr><td>Battery internal resistance</td><td>$V=\varepsilon-Ir$</td><td>$V$ vs $I$</td><td>$-r$</td><td>$\varepsilon$</td></tr>
<tr><td>Resistivity of a wire</td><td>$R=\rho L/A$</td><td>$R$ vs $L$</td><td>$\rho/A$</td><td>0 (offset: contact resistance)</td></tr>
<tr><td>RC time constant</td><td>$\ln V=\ln V_0-t/RC$</td><td>$\ln V$ vs $t$</td><td>$-1/RC$</td><td>$\ln V_0$</td></tr>
<tr><td>Power-law exponent</td><td>$y=Ax^n$</td><td>$\ln y$ vs $\ln x$</td><td>$n$</td><td>$\ln A$</td></tr></table>
<div class="box key"><b>Physical pendulum check:</b> $I_\text{pivot}=I_\text{cm}+md^2$ gives $T^2=\dfrac{4\pi^2}{mgd}(I_\text{cm}+md^2)$, so $T^2d=\dfrac{4\pi^2I_\text{cm}}{mg}+\dfrac{4\pi^2}{g}d^2$, a straight line in $d^2$ with slope $4\pi^2/g$.</div>
<p>For a uniform rod, $I_\text{cm}=\tfrac1{12}ML^2$, so the intercept is about $\dfrac{\pi^2L^2}{3g}$; a measured intercept far from this suggests the rod is not uniform or not thin.</p>
<p>Magnetic-field measurements follow the same pattern: for a long solenoid, $B=\mu_0nI$, so a Hall-probe reading versus current $I$ is a line through the origin with slope $\mu_0n$, and an offset reveals the Earth's field.</p>`}

  ],

  examples:[
  {id:"x1", title:"A model full-credit written answer, annotated", problem:String.raw`<p>A block of mass $m$ is released from rest at the top of a smooth (frictionless) incline whose top is a height $h$ above a horizontal floor. It slides onto the rough floor, with kinetic friction coefficient $\mu$, and stops after a distance $d$. Use $g=10$ m/s².</p>
<p>(a) Derive the block's speed $v$ at the bottom of the incline in terms of $h$ and $g$.<br>(b) Derive an expression for $d$ in terms of $h$ and $\mu$.<br>(c) For $h=1.8$ m and $\mu=0.30$ find $v$ and $d$.<br>(d) Would $d$ change if the block's mass were doubled? Justify your answer.</p>`,
   solution:String.raw`<p class="mut">What a full-credit written answer looks like. Rubric points are marked <b>[1]</b>.</p>
<p><b>(a)</b> The incline is smooth, so only gravity does work; the normal force is perpendicular to the motion and does no work. Energy is conserved: <b>[1: states principle and why friction/normal do not matter]</b></p>
$$mgh=\tfrac12mv^2\ \Rightarrow\ v=\sqrt{2gh}\qquad\textbf{[1: correct result]}$$
<p><b>(b)</b> On the floor, the normal force is $N=mg$, so friction is $f=\mu mg$ <b>[1]</b>. The work-energy theorem from the bottom to rest gives <b>[1: correct equation including negative friction work]</b>:</p>
$$0-\tfrac12mv^2=-\mu mg\,d\ \Rightarrow\ d=\frac{v^2}{2\mu g}=\frac{h}{\mu}\qquad\textbf{[1]}$$
<p>(Check: units of $h/\mu$ are meters, and $d\to\infty$ as $\mu\to0$, as it should.)</p>
<p><b>(c)</b> $v=\sqrt{2(10)(1.8)}=\sqrt{36}=6.0$ m/s and $d=1.8/0.30=6.0$ m <b>[1: both numbers with units]</b>.</p>
<p><b>(d)</b> No. <b>[answer first]</b> In $\tfrac12mv^2=\mu mg\,d$ the mass cancels, so $d=h/\mu$ depends only on $h$ and $\mu$. <b>[1: ties the explanation to the equation]</b> Physically, the extra weight raises the friction force and the kinetic energy by the same factor.</p>
<p class="mut">Total 7 points. Notice: principle named, equation before numbers, units at the end, answer before reasoning in (d), a quick check.</p>`},

  {id:"x2", title:"A deliberately weak answer, annotated", problem:String.raw`<p>Same problem as the previous example. Below is a student's written answer. Find every place it loses rubric points.</p>
<blockquote>
<p>(a) v = at, a = g, so v = 10t. Not enough info, so use v² = 2gh = 2(10)(1.8). v = 6.</p>
<p>(b) friction = μN = 0.3(10) = 3. a = 3, so d = v²/2a = 36/6 = 6.</p>
<p>(c) v = 6, d = 6.</p>
<p>(d) Yes, heavier blocks have more friction so it would stop sooner.</p>
</blockquote>`,
   solution:String.raw`<p>The numbers in (c) happen to match the model answer (6 and 6), so the final line looks right. The point loss is in the missing reasoning and the wrong conclusion.</p>
<ul>
<li><b>(a) Loses the principle point and the derivation point.</b> "$a=g$" is false on an incline (the acceleration along it is $g\sin\theta$, and no angle is given). The formula $v^2=2gh$ happens to be right, but nothing justifies it. The required statement is that energy is conserved because only gravity does work. A grader sees a wrong starting claim ($a=g$), then a guessed formula. Also: the start "$v=at$" wastes time and invites a contradiction.</li>
<li><b>(b) Loses the equation points.</b> $\mu N=0.3(10)$ is a force only if $N=mg$ is written, and $mg$ with $m$ missing gives units of m/s², not N. The line "$a=3$" is correct only because the missing $m$ cancels, but nothing shows that. Numbers were substituted before any symbolic expression; no expression for $d$ in terms of $h$ and $\mu$ was ever written, so the "derive an expression" point is missing even though the number is right.</li>
<li><b>(c) Loses the units point.</b> "v = 6" and "d = 6" have no units.</li>
<li><b>(d) Loses both points.</b> The answer is wrong. Heavier blocks do have more friction, but they also have more kinetic energy to dissipate, and the mass cancels: $d=h/\mu$. The student gave a reason without any equation, which is an intuition that sounds physical but was not tested.</li>
</ul>
<p><b>Fixes:</b> state the principle first; keep letters until the end; write $N=mg$; write units on every final number; test any "more of X means more of Y" claim against the equation.</p>
<p class="mut">Net: maybe 2 of 7 points from this answer despite two correct numbers.</p>`},

  {id:"x3", title:"Linearizing data: an RC discharge", problem:String.raw`<p>A capacitor charged to $10.0$ V is discharged through a resistor $R=20\ \mathrm{k\Omega}$. A voltmeter reads the capacitor voltage at 1-second intervals:</p>
<table><tr><th>$t$ (s)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>$V$ (V)</th><td>10.0</td><td>6.07</td><td>3.66</td><td>2.25</td><td>1.34</td><td>0.82</td></tr></table>
<p>The theory is $V=V_0e^{-t/RC}$. Linearize, find the slope, and determine the capacitance $C$.</p>`,
   solution:String.raw`<p>Take the natural log: $\ln V=\ln V_0-\dfrac{t}{RC}$. Plotting $\ln V$ versus $t$ should give a straight line with slope $-1/RC$ and intercept $\ln V_0=\ln10.0=2.30$.</p>
<table><tr><th>$t$ (s)</th><td>0</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr><tr><th>$\ln V$</th><td>2.303</td><td>1.803</td><td>1.297</td><td>0.811</td><td>0.293</td><td>-0.198</td></tr></table>
<p>Slope using points on the line, $t=0$ and $t=5$ s: $(-0.198-2.303)/5=-0.500\ \mathrm{s^{-1}}$ (a least-squares fit gives $-0.501$). The straight line and intercept 2.30 confirm the exponential model.</p>
<p>$RC=1/0.500=2.00$ s, so $C=2.00/(20\times10^3)=1.0\times10^{-4}$ F $=100\ \mu$F.</p>
<p class="mut">Report the slope in 1/s; the logarithm itself is dimensionless once $V$ is measured in a stated unit.</p>`},

  {id:"x4", title:"Optimization: the easiest way to drag a crate", problem:String.raw`<p>A 20 kg crate is pulled at constant speed across a floor with $\mu_k=0.50$ by a rope at angle $\theta$ above the horizontal. Use $g=10$ m/s². (a) Find the rope tension $F(\theta)$. (b) Find the angle that minimizes $F$ and the minimum $F$. (c) Compare with a horizontal pull.</p>`,
   solution:String.raw`<p><b>(a)</b> Vertical: $N+F\sin\theta=mg$. Horizontal, constant speed: $F\cos\theta=\mu N=\mu(mg-F\sin\theta)$. So $$F=\frac{\mu mg}{\cos\theta+\mu\sin\theta}.$$</p>
<p><b>(b)</b> Minimizing $F$ means maximizing $D(\theta)=\cos\theta+\mu\sin\theta$. $D'=-\sin\theta+\mu\cos\theta=0\Rightarrow\tan\theta=\mu=0.50$, so $\theta=26.6^\circ$. This is a maximum (at $\theta=0$, $D=1$; at $26.6^\circ$, $D=\sqrt{1+\mu^2}=1.118$; at $90^\circ$, $D=0.5$). Then $$F_\text{min}=\frac{\mu mg}{\sqrt{1+\mu^2}}=\frac{100}{1.118}=89.4\ \text{N}.$$</p>
<p><b>(c)</b> Horizontal pull: $F=\mu mg=100$ N. The best angle saves about 11 N. Note that the answer depends only on $\mu$, not on the mass; and a pull at the best angle partly lifts the crate, reducing $N$ from 200 N to $mg-F\sin\theta=200-89.4\sin26.6^\circ=160$ N.</p>
<p class="mut">Check: $\mu N=0.5(160)=80$ N and $F\cos\theta=89.4(0.894)=80$ N. Consistent.</p>`},

  {id:"x5", title:"Euler's method on a drag problem", problem:String.raw`<p>A 2.0 kg object falls from rest with quadratic air drag, so $m\,dv/dt=mg-kv^2$ with $k=0.50$ kg/m and $g=10$ m/s². (a) Find the terminal speed. (b) Use Euler's method with $\Delta t=0.2$ s to estimate $v$ at $t=1.0$ s. (c) The exact solution is $v=v_t\tanh(gt/v_t)$. Compare and say whether Euler over- or underestimates, and why.</p>`,
   solution:String.raw`<p><b>(a)</b> At terminal speed $a=0$: $v_t=\sqrt{mg/k}=\sqrt{20/0.5}=\sqrt{40}=6.32$ m/s.</p>
<p><b>(b)</b> $a=g-(k/m)v^2=10-0.25v^2$. Steps $v_{n+1}=v_n+a_n(0.2)$:</p>
<table><tr><th>$t$ (s)</th><td>0</td><td>0.2</td><td>0.4</td><td>0.6</td><td>0.8</td><td>1.0</td></tr><tr><th>$v$ (m/s)</th><td>0</td><td>2.000</td><td>3.800</td><td>5.078</td><td>5.789</td><td>6.113</td></tr></table>
<p>For instance $v(0.4)=2.0+(10-0.25\cdot4)(0.2)=2.0+1.8=3.8$. So $v(1.0)\approx6.11$ m/s.</p>
<p><b>(c)</b> Exact: $6.32\tanh(10/6.32)=6.32\tanh(1.581)=5.81$ m/s. Euler is high by about 5%. The $v(t)$ curve is concave down (the acceleration decreases as $v$ grows), and each Euler step uses the slope at the start of the step, which is steeper than the average slope over the step, so the estimate overshoots. A smaller $\Delta t$ reduces the error.</p>`},

  {id:"x6", title:"A battery's internal resistance from a graph", problem:String.raw`<p>A battery is connected to a variable resistor with an ammeter in series and a voltmeter across the battery terminals. The best-fit line through the plot of terminal voltage $V$ versus current $I$ passes through $(0,\,1.495\ \text{V})$ and $(0.50\ \text{A},\,1.330\ \text{V})$. Find the emf, the internal resistance, and the largest current the battery could ever supply.</p>`,
   solution:String.raw`<p>Theory: $V=\varepsilon-Ir$, a line with intercept $\varepsilon$ and slope $-r$.</p>
<p>Intercept: $\varepsilon=1.495\approx1.50$ V. Slope: $\dfrac{1.330-1.495}{0.50-0}=-0.33$ V/A, so $r=0.33\ \Omega$ (units: V/A $=\Omega$).</p>
<p>The largest current occurs when the terminals are shorted ($V=0$): $I_\text{max}=\varepsilon/r=1.495/0.33=4.5$ A. This is the horizontal-axis intercept of the line extended.</p>
<p class="mut">Why the line is drawn through the intercept point and not at a data point: the intercept is the open-circuit voltage ($I=0$), where no current flows through $r$.</p>`},

  {id:"x7", title:"A movable pulley and a constraint", problem:String.raw`<p>A block of mass $M=2.0$ kg slides on a frictionless table. A string attached to it runs over a fixed pulley at the table edge and down to a light movable pulley that supports a hanging mass $m=3.0$ kg. The string passes under the movable pulley and its other end is fixed to the ceiling. All pulleys are light and frictionless; $g=10$ m/s². Find the accelerations and the tension.</p>`,
   solution:String.raw`<p><b>Constraint.</b> Let the hanging mass move down a distance $y$. Two vertical segments (one on each side of the movable pulley) both lengthen by $y$, since the ceiling end is fixed, so the string on the table side must supply $2y$ of string. The block moves $2y$ toward the pulley, so $a_M=2a_m$.</p>
<p><b>Newton's second law.</b> Block: $T=Ma_M=2Ma_m$. Hanging mass plus movable pulley (massless): two string segments pull up with $T$ each, so $mg-2T=ma_m$.</p>
<p>Substitute: $mg-4Ma_m=ma_m$, so $$a_m=\frac{mg}{m+4M}=\frac{30}{3+8}=2.73\ \text{m/s}^2,\quad a_M=5.45\ \text{m/s}^2,\quad T=Ma_M=10.9\ \text{N}.$$</p>
<p>Check: $mg-2T=30-21.8=8.18=m a_m$. Limiting case $M\to0$: $a_m\to g$, free fall.</p>`}

  ],

  mcq:[
  {id:"q1", q:String.raw`<p>You cannot remember the period of a mass $m$ on a spring of constant $k$ (units of $k$: N/m $=$ kg/s²). Which candidate has the dimensions of time?</p>`,
   choices:["$2\\pi\\sqrt{k/m}$","$2\\pi\\sqrt{m/k}$","$2\\pi mk$","$2\\pi\\sqrt{mk}$","$2\\pi m/k$"], a:1,
   why:String.raw`<p>$m/k$ has units kg$\,/\,$(kg/s²) $=$ s², so its square root is seconds. The inverse, $\sqrt{k/m}$, is 1/s (a frequency, not a period). $mk$ gives kg²/s² and $m/k$ alone gives s², neither a time. Units eliminate four choices in seconds.</p>`},
  {id:"q2", q:String.raw`<p>In an Atwood machine, masses $m_1$ and $m_2$ hang over a light frictionless pulley, and $m_2$ accelerates downward with acceleration $a$. Use limiting cases to decide which expression is correct.</p>`,
   choices:["$a=\\dfrac{(m_2-m_1)g}{m_1+m_2}$","$a=\\dfrac{(m_2-m_1)g}{m_2}$","$a=\\dfrac{(m_2+m_1)g}{m_2-m_1}$","$a=\\dfrac{(m_2-m_1)g}{2}$","$a=\\dfrac{(m_2-m_1)g}{m_1}$"], a:0,
   why:String.raw`<p>Test $m_1=m_2$: the acceleration must be 0; the third expression blows up, so it is out. Test $m_2\to\infty$ with $m_1$ fixed: the machine must approach free fall, $a\to g$; the fourth grows without bound, and the fifth also grows without bound, so both fail. Test $m_1\to\infty$: now $m_2$ is dragged upward at nearly $g$, so $a\to-g$; the second expression diverges to minus infinity. Only $(m_2-m_1)g/(m_1+m_2)$ passes every check.</p>`},
  {id:"q3", q:String.raw`<p>A small stone is dropped from rest from a bridge 20 m above the water. Neglecting air resistance, the time to hit the water is closest to</p>`,
   choices:["0.2 s","1 s","2 s","4 s","20 s"], a:2,
   why:String.raw`<p>$t=\sqrt{2h/g}=\sqrt{2(20)/10}=2$ s (with $g=9.8$: 2.02 s). The tempting 4 s comes from forgetting the square root ($2h/g=4$); 1 s is what you get from guessing. Rounding $g$ to 10 makes the estimate a one-line job.</p>`},
  {id:"q4", q:String.raw`<p>A 2.0 kg cart moving at 6.0 m/s on a frictionless track collides with a stationary 4.0 kg cart. They stick together. Their common speed afterward is</p>`,
   choices:["1.0 m/s","2.0 m/s","3.0 m/s","3.5 m/s","4.0 m/s"], a:1,
   why:String.raw`<p>A perfectly inelastic collision conserves momentum, not kinetic energy: $2.0(6.0)=(6.0)v\Rightarrow v=2.0$ m/s. The attractive wrong answer 3.5 m/s comes from wrongly conserving energy ($\tfrac12(2)(36)=\tfrac12(6)v^2\Rightarrow v\approx3.46$ m/s). Energy is lost to deformation and heat when the carts stick.</p>`},
  {id:"q5", q:String.raw`<p>A particle starts with velocity 3 m/s along $+x$. Its acceleration versus time graph rises linearly from 0 at $t=0$ to 6 m/s² at $t=2$ s, then falls linearly back to 0 at $t=4$ s. Its velocity at $t=4$ s is</p>`,
   choices:["12 m/s","15 m/s","18 m/s","24 m/s","27 m/s"], a:1,
   why:String.raw`<p>The area under an $a$-$t$ graph is $\Delta v$: a triangle with base 4 s and height 6 m/s² has area $\tfrac12(4)(6)=12$ m/s. Then $v=3+12=15$ m/s. The value 12 forgets the initial velocity; 24 is base times height without the $\tfrac12$.</p>`},
  {id:"q6", q:String.raw`<p>Which expression could be the magnitude of the electric field a distance $r$ from a long straight wire of uniform charge per length $\lambda$? ($\varepsilon_0$ has units C²/(N$\cdot$m²).)</p>`,
   choices:["$\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r}$","$\\dfrac{\\lambda}{2\\pi\\varepsilon_0 r^2}$","$\\dfrac{\\lambda}{4\\pi\\varepsilon_0 r^2}$","$\\dfrac{\\lambda r}{2\\pi\\varepsilon_0}$","$\\dfrac{\\lambda}{2\\pi\\varepsilon_0}$"], a:0,
   why:String.raw`<p>$E$ must have units N/C. $\lambda/\varepsilon_0$ has units (C/m)$\cdot$(N$\,$m²/C²) $=$ N$\cdot$m/C, so you need exactly one more power of 1/length: $\lambda/(\varepsilon_0 r)$. Every other choice has the wrong power of $r$. The Gauss's-law derivation, $E(2\pi rL)=\lambda L/\varepsilon_0$, gives the same result and confirms it.</p>`},
  {id:"q7", q:String.raw`<p>A student measures a pendulum length $L=1.000\pm0.004$ m and period $T=2.00\pm0.01$ s, then computes $g=4\pi^2L/T^2\approx9.87$ m/s². Using the simple worst-case rule that fractional uncertainties add (with the power counted), the uncertainty in $g$ is closest to</p>`,
   choices:["$\\pm0.04$ m/s²","$\\pm0.09$ m/s²","$\\pm0.14$ m/s²","$\\pm0.30$ m/s²","$\\pm0.50$ m/s²"], a:2,
   why:String.raw`<p>$\delta L/L=0.4\%$ and $\delta T/T=0.5\%$, counted twice because $T$ is squared: $0.4+2(0.5)=1.4\%$. Then $\delta g=0.014\times9.87\approx0.14$ m/s². Forgetting the factor 2 on $T$ gives 0.9%, or about 0.09 m/s², the tempting wrong answer.</p>`},
  {id:"q8", q:String.raw`<p>The stopping distance $d$ of a sliding crate on a rough floor is measured for several initial speeds $v$, and theory says $d=v^2/(2\mu g)$. A student plots $d$ (m) versus $v^2$ (m²/s²) and the best-fit line has slope $0.0625$ s²/m. Using $g=10$ m/s², the coefficient of friction is</p>`,
   choices:["0.10","0.20","0.40","0.80","1.6"], a:3,
   why:String.raw`<p>The slope equals $1/(2\mu g)$, so $\mu=1/(2g\cdot\text{slope})=1/(20\times0.0625)=0.80$. The wrong value 1.6 comes from using $1/(g\cdot\text{slope})$ and forgetting the 2. Check: $v=10$ m/s would give $d=6.25$ m, a reasonable skid.</p>`},
  {id:"q9", q:String.raw`<p>You need the moment of inertia of a uniform thin rod of mass $M$ and length $L$ about one end, but you do not remember it and it is not given. Which is the most reliable way to get it?</p>`,
   choices:["Use $\\tfrac1{12}ML^2$ because it is the standard rod formula","Integrate $I=\\int r^2\\,dm$ with $dm=(M/L)\\,dr$ from $0$ to $L$, giving $\\tfrac13ML^2$","Use $\\tfrac12ML^2$ by analogy with a disk","Guess $ML^2$ and check units","Use $\\tfrac16ML^2$, the average of the center and end values"], a:1,
   why:String.raw`<p>$I=\int_0^L r^2(M/L)\,dr=ML^2/3$. The same answer comes from the parallel-axis theorem, $\tfrac1{12}ML^2+M(L/2)^2=\tfrac13ML^2$. The tempting $\tfrac1{12}ML^2$ is the value about the center, not about the end. Units alone cannot separate the numerical factors.</p>`},
  {id:"q10", q:String.raw`<p>A projectile is launched with a fixed speed from the top of a cliff over level water below (no air resistance). To maximize the horizontal distance to where it lands, the launch angle above the horizontal should be</p>`,
   choices:["exactly $45^\\circ$","greater than $45^\\circ$","$0^\\circ$","$90^\\circ$","less than $45^\\circ$"], a:4,
   why:String.raw`<p>For launch and landing at the same height, $45^\circ$ is optimal. The projectile in this problem lands <i>lower</i> than it starts, so it benefits from extra time in the air and the best angle is a little below $45^\circ$ (it tends to $45^\circ$ as the cliff height tends to 0 and to $0^\circ$ as the height tends to infinity). The tempting $45^\circ$ is the answer to the level-ground case only.</p>`},
  {id:"q11", q:String.raw`<p>In the arrangement of Example 7 (a block on a frictionless table pulled by a string that runs over a fixed pulley and under a light movable pulley carrying a hanging mass, with the other end of the string fixed to the ceiling), the hanging mass has a downward acceleration of $1.5$ m/s². The acceleration of the block on the table is</p>`,
   choices:["0.75 m/s²","1.5 m/s²","3.0 m/s²","4.5 m/s²","6.0 m/s²"], a:2,
   why:String.raw`<p>The movable pulley is held by two string segments, so the hanging mass moves half as far as the end of the string on the table side: $a_\text{block}=2(1.5)=3.0$ m/s². The tempting 1.5 m/s² assumes the usual fixed-pulley constraint, where both ends move equally.</p>`},
  {id:"q12", q:String.raw`<p>A speed obeys $dv/dt=-v/\tau$ with $\tau=2.0$ s and $v(0)=8.0$ m/s. Using Euler's method with two steps of $\Delta t=1.0$ s, the estimate of $v(2.0\ \text{s})$ is</p>`,
   choices:["2.9 m/s","4.0 m/s","2.0 m/s","1.0 m/s","0.0 m/s"], a:2,
   why:String.raw`<p>Step 1: $v=8-(8/2)(1)=4$. Step 2: $v=4-(4/2)(1)=2$ m/s. The exact value is $8e^{-1}=2.9$ m/s, the tempting choice, which is not what Euler's method produces: with a coarse step it undershoots a decaying exponential because it uses the slope at the start of each step only.</p>`},
  {id:"q13", q:String.raw`<p>The electric potential along the $x$ axis falls linearly from $+6$ V at $x=0$ to $0$ V at $x=3$ m. The $x$-component of the field between 0 and 3 m is</p>`,
   choices:["$-2$ V/m","$0$","$+6$ V/m","$+2$ V/m","$+18$ V/m"], a:3,
   why:String.raw`<p>$E_x=-dV/dx=-(0-6)/(3-0)=+2$ V/m: the field points toward decreasing potential, in the $+x$ direction. The sign slip to $-2$ V/m comes from dropping the minus sign in $E=-dV/dx$ and taking the slope of $V$ itself.</p>`},
  {id:"q14", q:String.raw`<p>The terminal voltage of a battery is plotted against the current drawn. The line passes through $9.0$ V at $I=0$ and falls by $0.75$ V for each ampere. The battery's internal resistance and the current when the terminals are shorted are</p>`,
   choices:["0.75 $\\Omega$; 9.0 A","0.75 $\\Omega$; 12 A","1.33 $\\Omega$; 12 A","1.33 $\\Omega$; 6.8 A","9.0 $\\Omega$; 1.0 A"], a:1,
   why:String.raw`<p>$V=\varepsilon-Ir$ gives $r=0.75\ \Omega$ (magnitude of the slope) and $I_\text{short}=\varepsilon/r=9.0/0.75=12$ A. The value 1.33 comes from inverting the slope, which would be the "conductance" (A/V).</p>`},
  {id:"q15", q:String.raw`<p>Which combination of units is equivalent to the tesla? ($F=qvB$ may help.)</p>`,
   choices:["$\\mathrm{N\\,m/(C\\,s)}$","$\\mathrm{N/(C\\,m)}$","$\\mathrm{N\\,C/(m\\,s)}$","$\\mathrm{C\\,s/(N\\,m)}$","$\\mathrm{N\\,s/(C\\,m)}$"], a:4,
   why:String.raw`<p>$B=F/(qv)$ has units $\mathrm{N/(C\cdot m/s)}=\mathrm{N\,s/(C\,m)}$. The others are inverted or have the wrong power of length or time. Equivalently $\mathrm{N/(A\,m)}$, since $1\ \mathrm{A}=1\ \mathrm{C/s}$.</p>`},
  {id:"q16", q:String.raw`<p>An inductor $L$ is in series with a resistor $R$. Which of the following has the units of time?</p>`,
   choices:["$LR$","$R/L$","$1/(LR)$","$L/R$","$\\sqrt{LR}$"], a:3,
   why:String.raw`<p>Since $\mathrm{H}=\mathrm{V\,s/A}$ and $\Omega=\mathrm{V/A}$, $L/R$ has units of seconds. The tempting $R/L$ is its inverse (1/s), a rate.</p>`},
  {id:"q17", q:String.raw`<p>A student plots $\ln y$ against $\ln x$ and gets a straight line of slope $2.0$ and vertical intercept $1.1$. The relation is closest to</p>`,
   choices:["$y=1.1\\,x^{2.0}$","$y=3.0\\,x^{1.1}$","$y=3.0\\,x^{2.0}$","$y=2.0\\,x^{3.0}$","$y=1.1+2.0\\,x$"], a:2,
   why:String.raw`<p>$\ln y=n\ln x+\ln A$, so $n=2.0$ and $A=e^{1.1}=3.0$. The common slip is to read the intercept as $A$ itself instead of $\ln A$.</p>`},
  {id:"q18", q:String.raw`<p>A mass $m$ oscillates on a vertical spring of constant $k$ whose own mass is $m_s$; the period obeys $T^2=\dfrac{4\pi^2}{k}\left(m+\dfrac{m_s}{3}\right)$. A plot of $T^2$ against $m$ has slope $8.0\ \mathrm{s^2/kg}$ and intercept $0.16\ \mathrm{s^2}$. Then</p>`,
   choices:["$k=0.20$ N/m, $m_s=0.02$ kg","$k=4.9$ N/m, $m_s=0.02$ kg","$k=8.0$ N/m, $m_s=0.16$ kg","$k=4.9$ N/m, $m_s=0.06$ kg","$k=4.9$ N/m, $m_s=0.48$ kg"], a:3,
   why:String.raw`<p>$k=4\pi^2/8.0=4.9$ N/m. The intercept divided by the slope is $m_s/3=0.16/8.0=0.020$ kg, so $m_s=0.060$ kg. The tempting $0.02$ kg forgets the factor of 3.</p>`},
  {id:"q19", q:String.raw`<p>On an FRQ, part (a) asks for a speed and you realize your answer, 8 m/s, is probably wrong, but you cannot find the error. Part (b) asks for the kinetic energy at that point. The best move is to</p>`,
   choices:["Leave (b) blank because it depends on (a)","Use your 8 m/s in (b), state \"using my result from (a)\", and show the equation $K=\\tfrac12mv^2$","Use a guessed correct value without saying so","Erase (a) and rewrite it later with no answer","Write both possible answers for (b)"], a:1,
   why:String.raw`<p>Graders typically credit correct work that follows consistently from an earlier error, as long as the work is visible. Blank answers earn nothing, and two competing answers usually earn neither.</p>`},
  {id:"q20", q:String.raw`<p>During practice you notice a formula you want is not on the official equation sheet. The best approach is to</p>`,
   choices:["Give up on the part","Assume the exam will print it","Memorize a table of every possible formula","Use a nearby formula from the sheet and hope the factors match","Derive it from a principle you own (a law, a definition, an integral) and check it with units and a limiting case"], a:4,
   why:String.raw`<p>Results the sheet does not list are exactly the ones you are expected to build from first principles. Plugging into a "close" formula risks a wrong factor or an unmet condition, and memorizing everything is both impossible and unnecessary.</p>`}

  ],

  frq:[
  {id:"f1", type:"Experimental design & analysis", title:"Measuring g with a pendulum",
   prompt:String.raw`<p>A student wants to determine the gravitational field strength $g$ using a simple pendulum: a small dense bob on a light string of adjustable length. For small release angles the theory gives $T=2\pi\sqrt{L/g}$, where $L$ is the distance from the pivot to the center of the bob.</p>
<p>(a) Describe an experimental procedure to collect the data. Identify the independent and dependent variables, name at least two quantities you must keep fixed, and say how you would reduce the uncertainty in measuring the period.</p>
<p>(b) The student measures $L$ from the pivot to the <i>top</i> of the bob and obtains these data:</p>
<table><tr><th>$L$ (m)</th><td>0.20</td><td>0.40</td><td>0.60</td><td>0.80</td><td>1.00</td></tr><tr><th>$T$ (s)</th><td>0.94</td><td>1.30</td><td>1.58</td><td>1.82</td><td>2.03</td></tr></table>
<p>Show that plotting $T^2$ versus $L$ should give a straight line, and complete a table of $T^2$ for the data (2 decimal places).</p>
<p>(c) Draw the best-fit line on a plot of $T^2$ versus $L$ (describe it with two points on the line), find its slope with units, and use it to determine $g$.</p>
<p>(d) The student draws a steepest acceptable line of slope 4.15 s²/m and a shallowest of slope 3.95 s²/m. State the resulting range of $g$.</p>
<p>(e) The best-fit line has a positive vertical intercept of about 0.07 s². Explain what this tells you about the measurement, and estimate the size of the error in $L$.</p>`,
   pts:[
    {p:1,d:"Identifies $L$ as the independent variable and $T$ as the dependent variable"},
    {p:1,d:"Names two controlled quantities (e.g. same bob and string, small release angle, same pivot)"},
    {p:1,d:"Reduces timing uncertainty by timing many oscillations and dividing, or repeating and averaging; length measured with a stated tool"},
    {p:1,d:"Squares the theory to get $T^2=(4\\pi^2/g)L$, a line with slope $4\\pi^2/g$ and zero intercept"},
    {p:1,d:"Table: $T^2$ = 0.88, 1.69, 2.50, 3.31, 4.12 s² (allow rounding)"},
    {p:1,d:"Slope computed from two well-separated points on the line (not data points necessarily), with correct units s²/m"},
    {p:1,d:"Correct slope, about 4.05 s²/m (accept 3.95 to 4.15)"},
    {p:1,d:"Uses $g=4\\pi^2/\\text{slope}$ to get about 9.7 to 9.8 m/s²"},
    {p:1,d:"Range of $g$ from $4\\pi^2/4.15=9.51$ to $4\\pi^2/3.95=9.99$ m/s², i.e. about $9.5$ to $10.0$ (steeper gives smaller $g$)"},
    {p:1,d:"Identifies a systematic error in measuring $L$ (measured to the top of the bob, not the center) as the cause of the positive intercept"},
    {p:1,d:"Quantitative estimate: intercept$/$slope $=0.07/4.05\\approx0.02$ m, so $L$ was too short by about 2 cm, the bob's radius"}],
   solution:String.raw`<p><b>(a)</b> Independent variable: length $L$. Dependent variable: period $T$. Keep the same bob and string, the same pivot, and a small release angle (below about $10^\circ$) constant. Use a meter stick to measure $L$ from the pivot to the bob's center. Release from rest and time <b>10</b> full oscillations with a stopwatch, then divide by 10; repeat each length three times and average. Use at least five lengths spread over a wide range.</p>
<p><b>(b)</b> Squaring: $T^2=\dfrac{4\pi^2}{g}L$, which is $y=mx$ with slope $4\pi^2/g$ and intercept 0.</p>
<table><tr><th>$L$ (m)</th><td>0.20</td><td>0.40</td><td>0.60</td><td>0.80</td><td>1.00</td></tr><tr><th>$T^2$ (s²)</th><td>0.88</td><td>1.69</td><td>2.50</td><td>3.31</td><td>4.12</td></tr></table>
<p><b>(c)</b> A line through (0, 0.07 s²) and (1.00 m, 4.12 s²): slope $=(4.12-0.07)/(1.00-0)=4.05$ s²/m (least squares gives 4.05). Then $g=4\pi^2/4.05=9.75$ m/s², about $9.8$ m/s².</p>
<p><b>(d)</b> $g_\text{max}=4\pi^2/3.95=9.99$ m/s², $g_\text{min}=4\pi^2/4.15=9.51$ m/s². So $g=9.75\pm0.24$ m/s², roughly 9.5 to 10.0 m/s².</p>
<p><b>(e)</b> Theory says $T^2=\frac{4\pi^2}{g}\,(L_\text{true})$ with zero intercept. A positive intercept $b$ means $T^2$ is non-zero even when the measured $L$ is 0, so the true length is longer than the measured one by $\Delta L=b/\text{slope}=0.07/4.05\approx0.017$ m, about 2 cm. That matches the bob's radius, consistent with measuring to the top of the bob. This is a <b>systematic</b> error: it shifts every point by the same $L$, so it changes the intercept but not the slope, and the value of $g$ from the slope is unaffected.</p>`},

  {id:"f2", type:"Translation between representations", title:"From a force graph to energy and words",
   prompt:String.raw`<p>A 2.0 kg object starts from rest at $x=0$ on a smooth horizontal track. The only force doing work on it is a force $F_x$ along the track, shown below as a function of position.</p>
<svg class="fig" viewBox="0 0 340 200" width="340" role="img" aria-label="Graph of F in newtons versus x in meters: constant 8 newtons from x equals 0 to 2 meters, then a straight line falling to 0 at x equals 4 meters, staying at 0 beyond">
<line x1="40" y1="160" x2="320" y2="160" stroke="currentColor"/><line x1="40" y1="160" x2="40" y2="15" stroke="currentColor"/>
<polyline points="40,40 140,40 240,160 310,160" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="140" y1="160" x2="140" y2="40" stroke="currentColor" stroke-dasharray="3 3"/>
<text x="14" y="44">8</text><text x="136" y="178">2</text><text x="236" y="178">4</text><text x="40" y="178">0</text><text x="300" y="178">x (m)</text><text x="8" y="14">F (N)</text></svg>
<p>(a) Write $F_x(x)$ as an equation for $0\le x\le2$ m and for $2\le x\le4$ m.<br>
(b) Find the work done from $x=0$ to $2$ m and from $2$ m to $4$ m, and the object's speed at $x=2$ m and at $x=4$ m.<br>
(c) Sketch the kinetic energy $K$ as a function of $x$ from 0 to 5 m. Label the values at $x=2$ m and $x=4$ m and describe the shape of each segment.<br>
(d) A classmate says: "Between 2 m and 4 m the force is getting smaller, so the object must be slowing down." Explain, using physics, why the classmate is wrong, and tie your explanation to an equation.</p>`,
   pts:[
    {p:1,d:"$F_x=8$ N for $0\\le x\\le2$ m"},
    {p:1,d:"$F_x=16-4x$ N (equivalently $4(4-x)$) for $2\\le x\\le4$ m"},
    {p:1,d:"Uses work as area under the curve: 16 J for the first interval and 8 J for the second"},
    {p:1,d:"Applies $W_\\text{net}=\\Delta K$: $K(2)=16$ J and $K(4)=24$ J"},
    {p:1,d:"Speeds: $v(2)=4.0$ m/s and $v(4)\\approx4.9$ m/s"},
    {p:1,d:"Sketch: straight line from 0 to 16 J on $0\\le x\\le2$ m with slope 8 J/m, then rising concave down to 24 J at $x=4$ m, flat at 24 J beyond"},
    {p:1,d:"Sketch labeled with the key values (16 J at 2 m, 24 J at 4 m) and zero slope at and beyond 4 m"},
    {p:1,d:"States the classmate is wrong because the force is still positive (in the direction of motion), so it keeps doing positive work and the speed keeps increasing"},
    {p:1,d:"Ties to an equation, e.g. $dK/dx=F_x$ or $a=F/m>0$ with a decreasing but positive acceleration; the speed would only stop growing when $F_x=0$"}],
   solution:String.raw`<p><b>(a)</b> $F_x=8$ N for $0\le x\le2$ m. For $2\le x\le4$ m the line goes from 8 N at 2 m to 0 at 4 m, slope $-4$ N/m: $F_x=8-4(x-2)=16-4x$ N.</p>
<p><b>(b)</b> Work is the area under $F_x$ versus $x$ (or $\int F_x\,dx$). First interval: rectangle, $8\times2=16$ J. Second: triangle, $\tfrac12(2)(8)=8$ J. Starting from rest, $W_\text{net}=\Delta K$:</p>
$$K(2)=16\ \text{J}\Rightarrow v=\sqrt{2K/m}=\sqrt{2(16)/2}=4.0\ \text{m/s}$$
$$K(4)=24\ \text{J}\Rightarrow v=\sqrt{2(24)/2}=\sqrt{24}\approx4.9\ \text{m/s}$$
<p>(For $2\le x\le4$ one can also write $K(x)=16+\int_2^x(16-4x')\,dx'=-2x^2+16x-8$ J, which equals 16 at $x=2$ and 24 at $x=4$.)</p>
<p><b>(c)</b> Since $dK/dx=F_x$, the slope of $K(x)$ is the force. From 0 to 2 m: a straight line, $K=8x$, reaching 16 J (slope 8 J/m). From 2 to 4 m: still rising but with decreasing slope (concave down), reaching 24 J at $x=4$ m with slope 0 there. For $x>4$ m: $F=0$ so $K$ is constant at 24 J (horizontal line).</p>
<p><b>(d)</b> The classmate confuses a decreasing force with a negative force. In words: the force still points along the object's motion, so it still does positive work and the object keeps gaining kinetic energy, and the speed keeps increasing; only the <i>rate</i> of speeding up (the acceleration, $a=F/m$, which falls from 4 m/s² to 0) decreases. Mathematically $dK/dx=F_x>0$ for $x<4$ m, so $K$ and $v$ increase all the way to $x=4$ m. The speed stops changing only where $F_x=0$.</p>`},

  {id:"f3", type:"Experimental design & analysis", title:"Internal resistance of a battery",
   prompt:String.raw`<p>A student wants to measure the emf $\varepsilon$ and internal resistance $r$ of a battery using only a variable resistor, an ammeter and a voltmeter.</p>
<p>(a) Describe how to connect the meters (the voltmeter must read the battery's terminal voltage) and the measurements you would take. Say how you would avoid draining the battery.</p>
<p>(b) Show that plotting terminal voltage $V$ against current $I$ should be a straight line, and say what the slope and intercept represent.</p>
<p>(c) Data: $I$ (A) $=0.10,\ 0.20,\ 0.30,\ 0.40,\ 0.50$ and $V$ (V) $=1.46,\ 1.43,\ 1.40,\ 1.36,\ 1.33$. The best-fit line passes through $(0,\,1.495\ \text{V})$ and $(0.50\ \text{A},\,1.33\ \text{V})$. Determine the slope with units, $r$ and $\varepsilon$.</p>
<p>(d) Calculate the current if the terminals were shorted, and explain why it is a bad idea to measure that directly.</p>`,
   pts:[
    {p:1,d:"Voltmeter in parallel across the battery terminals; ammeter in series with the variable resistor and battery"},
    {p:1,d:"Varies the resistor to obtain at least five $(I,V)$ pairs; closes the circuit only briefly (or uses small currents) to avoid draining or heating the battery"},
    {p:1,d:"Writes $V=\\varepsilon-Ir$ (Kirchhoff loop: terminal voltage = emf minus the drop in the internal resistance)"},
    {p:1,d:"States slope $=-r$ and vertical intercept $=\\varepsilon$ for $V$ versus $I$"},
    {p:1,d:"Slope $=(1.33-1.495)/0.50=-0.33$ V/A (accept $-0.31$ to $-0.35$), with units"},
    {p:1,d:"$r=0.33\\ \\Omega$"},
    {p:1,d:"$\\varepsilon=1.50$ V (1.49 to 1.50)"},
    {p:1,d:"Short-circuit current $\\varepsilon/r\\approx4.5$ A"},
    {p:1,d:"Explains that a large current heats the battery ($P=I^2r\\approx6.7$ W inside it), may damage it, and changes $r$, so the extrapolation is better than a direct measurement"}],
   solution:String.raw`<p><b>(a)</b> Connect the battery, the ammeter and the variable resistor in series; connect the voltmeter in parallel directly across the battery terminals. Set the resistor to a large value, then reduce it step by step to get at least five pairs $(I,V)$, reading both meters each time. Keep the circuit closed only long enough to read the meters.</p>
<p><b>(b)</b> Loop rule: $\varepsilon-Ir-V=0$, so $V=\varepsilon-rI$: slope $-r$, intercept $\varepsilon$ (the open-circuit voltage).</p>
<p><b>(c)</b> Slope $=(1.33-1.495)/0.50=-0.33$ V/A, so $r=0.33\ \Omega$ and $\varepsilon=1.50$ V. (A least-squares fit of the five points gives $-0.33$ V/A and $1.495$ V.)</p>
<p><b>(d)</b> $I_\text{short}=\varepsilon/r=1.495/0.33\approx4.5$ A. Shorting would dissipate $I^2r\approx6.7$ W inside the cell, which heats it, shortens its life and changes $r$. Extrapolating the line gives the same number safely.</p>`},

  {id:"f4", type:"Experimental design & analysis", title:"A spring that is not massless",
   prompt:String.raw`<p>Masses $m$ are hung from a vertical spring of constant $k$ and set into small oscillations. The spring's own mass $m_s$ cannot be neglected; the theory is $T=2\pi\sqrt{(m+m_s/3)/k}$.</p>
<p>(a) Describe a procedure to obtain data for $T$ versus $m$, naming the independent, dependent and controlled variables and how you would reduce the timing uncertainty.</p>
<p>(b) Show how to plot the data so that it is a straight line, and say what the slope and the intercept represent.</p>
<p>(c) The data are: $m$ (kg) $=0.10,\ 0.20,\ 0.30,\ 0.40,\ 0.50$ and $T$ (s) $=0.49,\ 0.66,\ 0.79,\ 0.91,\ 1.01$. Fill in $T^2$ and, using a best-fit line of slope $1.95\ \mathrm{s^2/kg}$ and intercept $0.044\ \mathrm{s^2}$, determine $k$ and $m_s$.</p>
<p>(d) A classmate computes $k$ from a single point as $4\pi^2m/T^2$ and gets $16$ N/m for $m=0.10$ kg. Explain why this is lower than the true value, and say how the discrepancy changes as $m$ increases. Describe an independent static measurement of $k$.</p>`,
   pts:[
    {p:1,d:"Independent variable $m$, dependent variable $T$, controlled: same spring, small amplitude, same release procedure"},
    {p:1,d:"Times many oscillations (e.g. 10) and divides, repeats and averages; at least five masses"},
    {p:1,d:"Squares the theory: $T^2=\\dfrac{4\\pi^2}{k}m+\\dfrac{4\\pi^2}{k}\\dfrac{m_s}{3}$, so $T^2$ versus $m$ is linear"},
    {p:1,d:"Slope $=4\\pi^2/k$ and intercept $=\\dfrac{4\\pi^2}{k}\\dfrac{m_s}{3}$ (positive intercept from the spring's mass)"},
    {p:1,d:"Table: $T^2$ = 0.24, 0.44, 0.62, 0.83, 1.02 s²"},
    {p:1,d:"$k=4\\pi^2/1.95\\approx20$ N/m"},
    {p:1,d:"$m_s/3=\\text{intercept/slope}=0.044/1.95=0.0225$ kg, so $m_s\\approx0.07$ kg (0.06 to 0.07)"},
    {p:1,d:"Explains that the single-point formula ignores the spring's contribution $m_s/3$ to the effective mass, so $T$ is too large and $k$ too small"},
    {p:1,d:"The discrepancy shrinks as $m$ grows (the fractional effect of $m_s/3$ is smaller): about 16 N/m at 0.10 kg versus 19 N/m at 0.50 kg"},
    {p:1,d:"Static method: hang several masses, measure the extension $x$, plot $mg$ versus $x$ (slope $k$); this should agree with the dynamic $k$ within uncertainty"}],
   solution:String.raw`<p><b>(a)</b> Independent variable: hanging mass $m$. Dependent: period $T$. Controlled: the same spring, the same small amplitude, a release from rest. Time 10 full oscillations with a stopwatch (or photogate) and divide by 10; repeat three times and average; use at least five masses spread over a wide range.</p>
<p><b>(b)</b> $T^2=\dfrac{4\pi^2}{k}\,m+\dfrac{4\pi^2}{k}\dfrac{m_s}{3}$. Plot $T^2$ versus $m$: slope $4\pi^2/k$, intercept $\dfrac{4\pi^2}{k}\dfrac{m_s}{3}$.</p>
<table><tr><th>$m$ (kg)</th><td>0.10</td><td>0.20</td><td>0.30</td><td>0.40</td><td>0.50</td></tr><tr><th>$T^2$ (s²)</th><td>0.24</td><td>0.44</td><td>0.62</td><td>0.83</td><td>1.02</td></tr></table>
<p><b>(c)</b> $k=4\pi^2/1.95=20$ N/m. $m_s/3=0.044/1.95=0.0225$ kg, so $m_s=0.067\approx0.07$ kg.</p>
<p><b>(d)</b> The effective oscillating mass is $m+m_s/3$, larger than $m$, so the measured $T$ is longer than the massless-spring theory predicts and $k=4\pi^2m/T^2$ comes out too small. At $m=0.10$ kg the spring adds $0.022$ kg, a 22% increase; at $0.50$ kg it adds 4.5%. The single-point values rise from $16.4$ N/m ($m=0.10$ kg) to $19.4$ N/m ($m=0.50$ kg), approaching the true 20 N/m. Static check: hang masses, measure the stretch $x$ (meter stick), and plot $mg$ versus $x$; the slope is $k$ (this method does not depend on $m_s$ in the same way, because the spring's weight only shifts the unstretched reference).</p>`}

  ]
});
