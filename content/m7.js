PH.unit({
  id:"m7", course:"mech", order:90, hours:5,
  title:"Mechanics 7: Gravitation",
  blurb:"One inverse-square force explains falling apples, orbits and escape. Derive the potential energy by integration, get Kepler's laws from Newton's laws and conservation of angular momentum, and learn what happens inside a planet.",
  needs:["m1","m2","m3","m5"],
  goals:[
    "Use $F=GMm/r^2$ and the field $g=GM/r^2$ with vectors and superposition",
    "Derive $U=-GMm/r$ by integrating the force, and use it for energy conservation and escape speed",
    "Derive circular-orbit speed, period (Kepler's 3rd law), and orbital energies $K=-E$, $U=2E$",
    "Derive Kepler's 2nd law from conservation of angular momentum",
    "Use conservation of $E$ and $L$ to relate perigee and apogee in elliptical orbits",
    "State and use the shell theorem for fields inside and outside spherical mass distributions"
  ],
  lessons:[
  {id:"l1", title:"Newton's law of gravitation, the field, and spheres", videos:[{title:"Search: shell theorem gravity inside a uniform sphere Gauss law",url:"https://www.youtube.com/results?search_query=shell+theorem+gravity+inside+a+uniform+sphere+Gauss+law",src:"YouTube search",note:"Look for the field inside and outside a sphere."},{title:"Search: Newton's law of gravitation gravitational field AP Physics C",url:"https://www.youtube.com/results?search_query=Newton's+law+of+gravitation+gravitational+field+AP+Physics+C",src:"YouTube search",note:"Field g = GM/r^2 and superposition."}], html:String.raw`
<p>Any two masses attract each other. For two point masses $M$ and $m$ separated by distance $r$, the force on each has magnitude</p>
$$F=\frac{GMm}{r^2},\qquad G=6.67\times10^{-11}\ \text{N m}^2/\text{kg}^2$$
<p>directed along the line joining them, toward the other mass, and equal and opposite on the two bodies (Newton's third law). $G$ is a universal constant. The force is an <b>inverse-square law</b>: double $r$, quarter the force. In vector form on $m$ at position $\vec r$ measured from $M$: $\vec F=-\dfrac{GMm}{r^2}\hat r$.</p>
<svg class="fig" viewBox="0 0 340 130" width="340" role="img" aria-label="Two masses M and m separated by distance r, each pulling on the other with equal and opposite forces of magnitude G M m over r squared">
<circle cx="90" cy="60" r="26" fill="currentColor" fill-opacity=".2" stroke="currentColor" stroke-width="2"/><circle cx="250" cy="60" r="14" fill="currentColor" fill-opacity=".2" stroke="currentColor" stroke-width="2"/>
<text x="84" y="65">M</text><text x="245" y="65">m</text>
<line x1="118" y1="60" x2="168" y2="60" stroke="currentColor" stroke-width="2.5"/><polygon points="168,55 178,60 168,65" fill="currentColor"/>
<line x1="232" y1="60" x2="182" y2="60" stroke="currentColor" stroke-width="2.5"/><polygon points="190,55 180,60 190,65" fill="currentColor"/>
<line x1="90" y1="105" x2="250" y2="105" stroke="currentColor"/><line x1="90" y1="99" x2="90" y2="111" stroke="currentColor"/><line x1="250" y1="99" x2="250" y2="111" stroke="currentColor"/>
<text x="160" y="122">r (center to center)</text><text x="80" y="22">F on m is toward M, same size as F on M</text></svg>
<p>Divide by $m$ to get the <b>gravitational field</b> of $M$, the force per unit mass on a small test mass, in N/kg (the same as m/s²):</p>
$$\vec g(\vec r)=-\frac{GM}{r^2}\hat r.$$
<p>Because $m$ cancels, any object dropped at that spot accelerates at the same rate $g$. That is the origin of "all objects fall alike". Fields from several masses add as vectors (superposition), exactly like forces. At the surface of Earth ($M_E=5.97\times10^{24}$ kg, $R_E=6.37\times10^6$ m), $GM_E/R_E^2=9.81$ m/s², our familiar $g$. The product $GM_E=3.98\times10^{14}$ m³/s² appears constantly. In numeric problems we use $g=10$ m/s² unless told otherwise.</p>
<div class="box trap"><b>Trap:</b> $r$ is measured from the <i>center</i> of the planet, not from the surface. A satellite 400 km above Earth is at $r=R_E+400\text{ km}$, almost the same as $R_E$, so gravity there is still about 89% of its surface value. Astronauts float because they are in free fall, not because gravity is absent.</div>
<h4>Spheres: the shell theorem</h4>
<p>Newton's law is for point masses, but planets are spheres. The result you need is the <b>shell theorem</b> for a spherically symmetric distribution (density depends only on the distance from the center):</p>
<ul>
<li><b>Outside</b> ($r\ge R$): the field is the same as if all the mass $M$ sat at the center, $g=GM/r^2$.</li>
<li><b>Inside a thin uniform shell</b>: the field is exactly zero.</li>
<li><b>Inside a solid sphere</b> at radius $r$: only the mass <i>within</i> radius $r$ counts, as if it sat at the center; the outer shells contribute nothing: $g=GM_{\rm enc}(r)/r^2$.</li>
</ul>
<p><b>Why (a Gauss-law-flavored argument).</b> The inverse-square law implies that the flux of $\vec g$ through any closed surface equals $-4\pi G$ times the mass enclosed: $\oint\vec g\cdot d\vec A=-4\pi GM_{\rm enc}$. This is Gauss's law for gravity; its twin for electric fields is a centerpiece of E&amp;M and is proved there, so here we accept it. For a spherically symmetric mass, symmetry forces $\vec g$ to be radial and the same size everywhere on a sphere of radius $r$, so $g(4\pi r^2)=4\pi GM_{\rm enc}$, giving $g=GM_{\rm enc}/r^2$. Inside a hollow shell $M_{\rm enc}=0$, so $g=0$.</p>
<p>For a <b>uniform</b> solid sphere of radius $R$, $M_{\rm enc}=M(r/R)^3$ for $r&lt;R$, so</p>
$$g(r)=\frac{GM}{R^3}\,r\quad(r&lt;R),\qquad g(r)=\frac{GM}{r^2}\quad(r\ge R).$$
<svg class="fig" viewBox="0 0 340 200" width="340" role="img" aria-label="Gravitational field strength g versus distance r from the center of a uniform sphere: rising linearly inside to a maximum at the surface R, then falling as one over r squared outside">
<line x1="50" y1="160" x2="330" y2="160" stroke="currentColor"/><line x1="50" y1="15" x2="50" y2="165" stroke="currentColor"/>
<polyline points="50.0,160.0 50.7,159.2 51.4,158.4 52.1,157.6 52.9,156.9 53.6,156.1 54.3,155.3 55.0,154.5 55.7,153.7 56.4,152.9 57.1,152.1 57.9,151.4 58.6,150.6 59.3,149.8 60.0,149.0 60.7,148.2 61.4,147.4 62.1,146.6 62.9,145.9 63.6,145.1 64.3,144.3 65.0,143.5 65.7,142.7 66.4,141.9 67.1,141.1 67.9,140.4 68.6,139.6 69.3,138.8 70.0,138.0 70.7,137.2 71.4,136.4 72.1,135.6 72.9,134.9 73.6,134.1 74.3,133.3 75.0,132.5 75.7,131.7 76.4,130.9 77.1,130.1 77.9,129.4 78.6,128.6 79.3,127.8 80.0,127.0 80.7,126.2 81.4,125.4 82.1,124.6 82.9,123.9 83.6,123.1 84.3,122.3 85.0,121.5 85.7,120.7 86.4,119.9 87.1,119.1 87.9,118.4 88.6,117.6 89.3,116.8 90.0,116.0 90.7,115.2 91.4,114.4 92.1,113.6 92.9,112.9 93.6,112.1 94.3,111.3 95.0,110.5 95.7,109.7 96.4,108.9 97.1,108.1 97.9,107.4 98.6,106.6 99.3,105.8 100.0,105.0 100.7,104.2 101.4,103.4 102.1,102.6 102.9,101.9 103.6,101.1 104.3,100.3 105.0,99.5 105.7,98.7 106.4,97.9 107.1,97.1 107.9,96.4 108.6,95.6 109.3,94.8 110.0,94.0 110.7,93.2 111.4,92.4 112.1,91.6 112.9,90.9 113.6,90.1 114.3,89.3 115.0,88.5 115.7,87.7 116.4,86.9 117.1,86.1 117.9,85.4 118.6,84.6 119.3,83.8 120.0,83.0 120.7,82.2 121.4,81.4 122.1,80.6 122.9,79.9 123.6,79.1 124.3,78.3 125.0,77.5 125.7,76.7 126.4,75.9 127.1,75.1 127.9,74.4 128.6,73.6 129.3,72.8 130.0,72.0 130.7,71.2 131.4,70.4 132.1,69.6 132.9,68.9 133.6,68.1 134.3,67.3 135.0,66.5 135.7,65.7 136.4,64.9 137.1,64.1 137.9,63.4 138.6,62.6 139.3,61.8 140.0,61.0 140.7,60.2 141.4,59.4 142.1,58.6 142.9,57.9 143.6,57.1 144.3,56.3 145.0,55.5 145.7,54.7 146.4,53.9 147.1,53.1 147.9,52.4 148.6,51.6 149.3,50.8 150.0,50.0 150.0,50.0 151.8,53.8 153.6,57.5 155.4,60.9 157.1,64.2 158.9,67.3 160.7,70.3 162.5,73.1 164.3,75.8 166.1,78.4 167.9,80.8 169.6,83.2 171.4,85.4 173.2,87.5 175.0,89.6 176.8,91.6 178.6,93.5 180.4,95.3 182.1,97.0 183.9,98.7 185.7,100.3 187.5,101.8 189.3,103.3 191.1,104.7 192.9,106.1 194.6,107.4 196.4,108.7 198.2,109.9 200.0,111.1 201.8,112.3 203.6,113.4 205.4,114.4 207.1,115.5 208.9,116.4 210.7,117.4 212.5,118.3 214.3,119.2 216.1,120.1 217.9,121.0 219.6,121.8 221.4,122.6 223.2,123.3 225.0,124.1 226.8,124.8 228.6,125.5 230.4,126.2 232.1,126.8 233.9,127.5 235.7,128.1 237.5,128.7 239.3,129.3 241.1,129.9 242.9,130.4 244.6,131.0 246.4,131.5 248.2,132.0 250.0,132.5 251.8,133.0 253.6,133.5 255.4,133.9 257.1,134.4 258.9,134.8 260.7,135.2 262.5,135.6 264.3,136.0 266.1,136.4 267.9,136.8 269.6,137.2 271.4,137.6 273.2,137.9 275.0,138.3 276.8,138.6 278.6,138.9 280.4,139.3 282.1,139.6 283.9,139.9 285.7,140.2 287.5,140.5 289.3,140.8 291.1,141.1 292.9,141.3 294.6,141.6 296.4,141.9 298.2,142.1 300.0,142.4 301.8,142.6 303.6,142.9 305.4,143.1 307.1,143.4 308.9,143.6 310.7,143.8 312.5,144.0 314.3,144.3 316.1,144.5 317.9,144.7 319.6,144.9 321.4,145.1 323.2,145.3 325.0,145.5 326.8,145.6 328.6,145.8 330.4,146.0 332.1,146.2 333.9,146.4 335.7,146.5 337.5,146.7 339.3,146.9 341.1,147.0 342.9,147.2 344.6,147.3 346.4,147.5 348.2,147.6 350.0,147.8 351.8,147.9 353.6,148.1 355.4,148.2 357.1,148.3 358.9,148.5 360.7,148.6 362.5,148.7 364.3,148.9 366.1,149.0 367.9,149.1 369.6,149.2 371.4,149.4 373.2,149.5 375.0,149.6 376.8,149.7 378.6,149.8 380.4,149.9 382.1,150.0 383.9,150.1 385.7,150.2 387.5,150.3 389.3,150.4 391.1,150.5 392.9,150.6 394.6,150.7 396.4,150.8 398.2,150.9 400.0,151.0" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="150" y1="50" x2="150" y2="165" stroke="currentColor" stroke-dasharray="3 4" stroke-opacity=".6"/>
<text x="144" y="180">R</text><text x="14" y="52">g₀</text><text x="86" y="108">∝ r</text><text x="220" y="100">∝ 1/r²</text><text x="320" y="176">r</text>
<text x="180" y="40">inside: g = GMr/R³</text></svg>
<p>The field rises linearly from zero at the center to a maximum at the surface, then falls as $1/r^2$. Linear in $r$ means a restoring force proportional to displacement, which should ring a bell from Unit 6.</p>
<div class="box trap"><b>Trap:</b> inside a uniform sphere $g$ is <i>not</i> $GM/r^2$ with the full $M$ (that blows up at $r\to0$). It is $g_0\,r/R$. Shell theorem needs spherical symmetry; a hollow cube or a sphere with an off-center cavity does not give zero.</div>`},
  {id:"l2", title:"Gravitational potential energy and escape speed", videos:[{title:"Search: gravitational potential energy -GMm/r derivation integration escape speed",url:"https://www.youtube.com/results?search_query=gravitational+potential+energy+-GMm/r+derivation+integration+escape+speed",src:"YouTube search",note:"Look for the integral from infinity and escape velocity."}], html:String.raw`
<p>Near Earth's surface we used $U=mgh$. That formula assumes $g$ is constant, which fails over large distances. Gravity is a conservative central force, so we can define a potential energy that works everywhere. Choose the zero of $U$ at infinite separation and define $U(r)$ as the work an external agent does to bring $m$ slowly from infinity to $r$, which equals minus the work done by gravity. Gravity's radial force is $F_r=-GMm/r^2$ (negative: pointing inward), so</p>
$$U(r)=-\int_{\infty}^{r}F_r\,dr'=\int_{\infty}^{r}\frac{GMm}{r'^2}\,dr'=GMm\left[-\frac1{r'}\right]_{\infty}^{r}=-\frac{GMm}{r}.$$
<p>Check by differentiating: $F_r=-\dfrac{dU}{dr}=-\dfrac{GMm}{r^2}$, correct. $U$ is <b>negative</b> and rises toward 0 as $r\to\infty$: it takes energy to pull masses apart. A negative $U$ is not strange: the zero is a choice and only differences matter.</p>
<svg class="fig" viewBox="0 0 340 200" width="340" role="img" aria-label="Gravitational potential energy U of r, a curve starting deeply negative at the planet surface R and rising toward zero at large r, with energy levels for bound and escaping motion">
<line x1="40" y1="30" x2="325" y2="30" stroke="currentColor"/><line x1="60" y1="10" x2="60" y2="180" stroke="currentColor"/>
<polyline points="60.0,135.0 61.4,132.4 62.8,130.0 64.1,127.7 65.5,125.5 66.9,123.3 68.2,121.3 69.6,119.4 71.0,117.5 72.4,115.7 73.8,114.0 75.1,112.4 76.5,110.8 77.9,109.2 79.2,107.8 80.6,106.4 82.0,105.0 83.4,103.7 84.8,102.4 86.1,101.2 87.5,100.0 88.9,98.9 90.2,97.7 91.6,96.7 93.0,95.6 94.4,94.6 95.8,93.6 97.1,92.7 98.5,91.8 99.9,90.9 101.2,90.0 102.6,89.2 104.0,88.3 105.4,87.5 106.8,86.8 108.1,86.0 109.5,85.3 110.9,84.5 112.2,83.8 113.6,83.2 115.0,82.5 116.4,81.9 117.8,81.2 119.1,80.6 120.5,80.0 121.9,79.4 123.3,78.8 124.6,78.3 126.0,77.7 127.4,77.2 128.8,76.7 130.1,76.2 131.5,75.7 132.9,75.2 134.2,74.7 135.6,74.2 137.0,73.8 138.4,73.3 139.8,72.9 141.1,72.4 142.5,72.0 143.9,71.6 145.2,71.2 146.6,70.8 148.0,70.4 149.4,70.0 150.8,69.6 152.1,69.3 153.5,68.9 154.9,68.5 156.2,68.2 157.6,67.8 159.0,67.5 160.4,67.2 161.8,66.8 163.1,66.5 164.5,66.2 165.9,65.9 167.2,65.6 168.6,65.3 170.0,65.0 171.4,64.7 172.8,64.4 174.1,64.1 175.5,63.9 176.9,63.6 178.2,63.3 179.6,63.1 181.0,62.8 182.4,62.6 183.8,62.3 185.1,62.1 186.5,61.8 187.9,61.6 189.2,61.3 190.6,61.1 192.0,60.9 193.4,60.7 194.8,60.4 196.1,60.2 197.5,60.0 198.9,59.8 200.3,59.6 201.6,59.4 203.0,59.2 204.4,59.0 205.8,58.8 207.1,58.6 208.5,58.4 209.9,58.2 211.2,58.0 212.6,57.8 214.0,57.6 215.4,57.5 216.8,57.3 218.1,57.1 219.5,56.9 220.9,56.8 222.2,56.6 223.6,56.4 225.0,56.2 226.4,56.1 227.8,55.9 229.1,55.8 230.5,55.6 231.9,55.5 233.3,55.3 234.6,55.1 236.0,55.0 237.4,54.9 238.8,54.7 240.1,54.6 241.5,54.4 242.9,54.3 244.2,54.1 245.6,54.0 247.0,53.9 248.4,53.7 249.8,53.6 251.1,53.5 252.5,53.3 253.9,53.2 255.3,53.1 256.6,53.0 258.0,52.8 259.4,52.7 260.8,52.6 262.1,52.5 263.5,52.3 264.9,52.2 266.2,52.1 267.6,52.0 269.0,51.9 270.4,51.8 271.8,51.6 273.1,51.5 274.5,51.4 275.9,51.3 277.2,51.2 278.6,51.1 280.0,51.0 281.4,50.9 282.8,50.8 284.1,50.7 285.5,50.6 286.9,50.5 288.2,50.4 289.6,50.3 291.0,50.2 292.4,50.1 293.8,50.0 295.1,49.9 296.5,49.8 297.9,49.7 299.2,49.6 300.6,49.5 302.0,49.4 303.4,49.4 304.8,49.3 306.1,49.2 307.5,49.1" fill="none" stroke="currentColor" stroke-width="2.5"/>
<line x1="60" y1="82" x2="310" y2="82" stroke="currentColor" stroke-dasharray="5 4" stroke-opacity=".7"/>
<text x="312" y="34">U = 0</text><text x="195" y="76">E &lt; 0: bound</text><text x="200" y="22">E ≥ 0: escapes</text>
<text x="52" y="194">R</text><text x="66" y="150">U = −GMm/r</text><text x="290" y="194">r</text></svg>
<h4>Recovering $mgh$</h4>
<p>Lifting $m$ from the surface $R$ to $R+h$ costs</p>
$$\Delta U=GMm\left(\frac1R-\frac1{R+h}\right)=\frac{GMm\,h}{R(R+h)}\approx\frac{GM}{R^2}\,mh=mgh\quad(h\ll R).$$
<p>So $mgh$ is just the first-order Taylor term of $-GMm/r$. For large $h$ it overestimates: a lift to $h=R$ costs $\tfrac12mgR$, not $mgR$.</p>
<h4>Conservation of energy and escape speed</h4>
<p>With only gravity acting, $E=\tfrac12mv^2-\dfrac{GMm}{r}$ is constant. An object is <b>bound</b> if $E<0$ (it cannot reach $r=\infty$ since there $U=0$ and $K\ge0$ would give $E\ge0$). <b>Escape speed</b> is the minimum launch speed from radius $R$ for which it can just reach infinity with zero speed, $E=0$:</p>
$$\tfrac12mv_{\rm esc}^2=\frac{GMm}{R}\ \Rightarrow\ v_{\rm esc}=\sqrt{\frac{2GM}{R}}=\sqrt{2gR}.$$
<p>For Earth this is $11.2$ km/s, and $\sqrt2$ times the speed of a circular orbit at the surface. Note: it does not depend on the mass of the projectile or on the direction of launch (as long as it clears the ground). We ignore air resistance and the planet's rotation. $E=0$ gives a parabolic path, $E>0$ a hyperbolic one; any $E<0$ path is closed (a circle or ellipse).</p>
<div class="box key"><b>Energy method for radial motion:</b> to find the speed at $r_2$ given speed at $r_1$, write $\tfrac12v_1^2-GM/r_1=\tfrac12v_2^2-GM/r_2$. The mass drops out of every one of these equations; only $GM$ of the attractor matters.</div>
<div class="box trap"><b>Trap:</b> do not use $mgh$ for distances comparable to the planet's radius, and do not forget the minus sign: $E=K+U$ with $U<0$.</div>`},
  {id:"l3", title:"Circular orbits and Kepler's laws", videos:[{title:"Lecture 7 - Kepler's Laws",url:"https://oyc.yale.edu/physics/phys-200/lecture-7",src:"Yale PHYS 200 (Shankar)",note:"Kepler's laws and Newton's explanation."},{title:"Search: circular orbit speed period Kepler third law derivation AP Physics C",url:"https://www.youtube.com/results?search_query=circular+orbit+speed+period+Kepler+third+law+derivation+AP+Physics+C",src:"YouTube search",note:"Centripetal force equals gravity."}], html:String.raw`
<p>A satellite in a <b>circular orbit</b> of radius $r$ about a mass $M$ is simply an object accelerating toward $M$ with the centripetal acceleration $v^2/r$, supplied entirely by gravity:</p>
$$\frac{GMm}{r^2}=\frac{mv^2}{r}\ \Rightarrow\ v=\sqrt{\frac{GM}{r}}.$$
<p>Notice: the orbital speed does not depend on the satellite's mass, and <i>farther orbits are slower</i>. The period is the circumference over the speed:</p>
$$T=\frac{2\pi r}{v}=2\pi\sqrt{\frac{r^3}{GM}}\ \Rightarrow\ T^2=\frac{4\pi^2}{GM}\,r^3.$$
<p>This is <b>Kepler's third law</b>: $T^2\propto r^3$ with a constant that depends only on the central mass. (For an ellipse, $r$ is replaced by the semi-major axis $a$.) Kepler found it from Tycho Brahe's data; Newton derived it. Applications: comparing two planets, $T_1^2/T_2^2=r_1^3/r_2^3$; or measuring a star's mass from a planet's orbit. A <b>geosynchronous</b> orbit has $T=24$ h, so $r$ is fixed ($4.2\times10^7$ m) and it must be above the equator for the satellite to hover over one spot.</p>
<h4>Energies</h4>
<p>From $v^2=GM/r$: $K=\tfrac12mv^2=\dfrac{GMm}{2r}$ while $U=-\dfrac{GMm}{r}$. Thus</p>
$$E=K+U=-\frac{GMm}{2r}=-K=\frac U2.$$
<p>The total energy is <i>negative</i> (bound). A bigger orbit has higher (less negative) energy: raising a satellite needs energy even though it ends up moving more slowly.</p>
<div class="box trap"><b>Trap (drag):</b> a satellite in thin atmosphere loses energy, so $E=-GMm/2r$ gets more negative, so $r$ <i>decreases</i>, so the speed $\sqrt{GM/r}$ <i>increases</i>. Friction speeds the satellite up, because gravity does positive work as it spirals in: $\Delta K=-\Delta E>0$.</div>
<h4>Kepler's three laws</h4>
<ol>
<li><b>Orbits are ellipses</b> with the Sun (center of attraction) at one focus. (A circle is the special case.)</li>
<li>A line from the Sun to a planet <b>sweeps out equal areas in equal times</b>. Derived from angular momentum in the next lesson.</li>
<li>$T^2=\dfrac{4\pi^2}{GM}a^3$, derived above for circles.</li>
</ol>
<p>Kepler's laws describe the sky; Newton's single law explains all three. The first law (ellipses) needs the inverse-square form exactly; the second holds for <i>any</i> central force; the third also needs inverse-square.</p>`},
  {id:"l4", title:"Elliptical orbits: conservation of L and E", videos:[{title:"Lecture 22: Kepler's Laws - Elliptical Orbits - Satellites - Change of Orbits - Ham Sandwich",url:"https://videolectures.net/mit801f99_lewin_lec22",src:"Walter Lewin lectures (MIT 8.01)",note:"Conservation of L and E in elliptical orbits and orbit changes."}], html:String.raw`
<p>Gravity from a point mass always points toward it, a <b>central force</b>. Its torque about that point is $\vec r\times\vec F=0$, so the satellite's angular momentum about the central mass is conserved (Unit 5). Write $L=mr v_\perp$, where $v_\perp$ is the component of velocity perpendicular to the radius vector, $v_\perp=r\dot\theta$:</p>
$$L=mr^2\dot\theta=\text{constant}.$$
<h4>Kepler's second law</h4>
<p>In a short time $dt$ the radius vector sweeps a thin triangle of area $dA=\tfrac12r(r\,d\theta)$. So</p>
$$\frac{dA}{dt}=\tfrac12r^2\dot\theta=\frac{L}{2m}=\text{constant}.$$
<p>That is exactly equal areas in equal times. It also says that the planet moves fastest at its closest approach (<b>perigee</b> for Earth, <b>perihelion</b> for the Sun) and slowest at its farthest point (<b>apogee</b>, <b>aphelion</b>).</p>
<svg class="fig" viewBox="0 0 350 200" width="350" role="img" aria-label="Elliptical orbit with the central mass at one focus, perigee on the near side and apogee on the far side, and two equal-area shaded sectors swept in equal times">
<ellipse cx="175" cy="100" rx="110" ry="75" fill="none" stroke="currentColor" stroke-width="2"/>
<circle cx="255.5" cy="100" r="8" fill="currentColor" fill-opacity=".3" stroke="currentColor" stroke-width="2"/>
<path d="M 255.5,100 L 285,100 L 278.3,74.3 Z" fill="currentColor" fill-opacity=".25" stroke="currentColor"/>
<path d="M 255.5,100 L 65.0,100 L 65.8,109.0 Z" fill="currentColor" fill-opacity=".25" stroke="currentColor"/>
<circle cx="285" cy="100" r="4" fill="currentColor"/><circle cx="65" cy="100" r="4" fill="currentColor"/>
<text x="265" y="122">perigee</text><text x="59" y="122">apogee</text>
<text x="249" y="124">M</text>
<text x="95" y="190">equal areas in equal times: fast near M, slow far away</text></svg>
<h4>Perigee and apogee</h4>
<p>At the two extreme points the velocity is perpendicular to the radius (the distance is at a maximum or minimum so $\dot r=0$). There $L=mrv$ exactly, and conservation of $L$ gives</p>
$$r_pv_p=r_av_a.$$
<p>Conservation of energy between the same two points gives</p>
$$\tfrac12v_p^2-\frac{GM}{r_p}=\tfrac12v_a^2-\frac{GM}{r_a}.$$
<p>These two equations determine $r_a$ and $v_a$ from $r_p$ and $v_p$ (substitute $v_a=r_pv_p/r_a$ and solve a quadratic; $r_a=r_p$ is one root, the other is the apogee). A useful shortcut: the energy of any ellipse depends only on its semi-major axis,</p>
$$E=-\frac{GMm}{2a},\qquad 2a=r_p+r_a.$$
<p>So find $E$ at perigee, then $a=-GMm/2E$, then $r_a=2a-r_p$. Also by Kepler's third law $T^2=4\pi^2a^3/GM$. Comparing with the circle: at perigee $v_p$ is <i>larger</i> than the circular speed $\sqrt{GM/r_p}$; at apogee $v_a$ is <i>smaller</i> than $\sqrt{GM/r_a}$. If $v_p=\sqrt{2GM/r_p}$ exactly, the orbit is a parabola and the satellite escapes. (A beyond-AP formula that packages all of this is the vis-viva equation $v^2=GM(2/r-1/a)$.)</p>
<div class="box key"><b>Changing orbits:</b> a brief engine burn changes $v$ but not $r$ at that moment. Speeding up at perigee raises the apogee (bigger $a$, higher $E$); speeding up at apogee raises the perigee. This is how a transfer from a low circular orbit to a high one is done in two burns.</div>
<div class="box trap"><b>Trap:</b> the equal-area law does not mean equal <i>arc</i> lengths; and "$v^2/r=GM/r^2$" applies only to circular orbits, not at general points of an ellipse (where the acceleration is not purely centripetal).</div>`}
  ],
  examples:[
  {id:"x1", title:"Gravity and escape on the Moon", problem:String.raw`<p>The Moon has mass $7.35\times10^{22}$ kg and radius $1.74\times10^6$ m. Take $G=6.67\times10^{-11}$ N m²/kg². Find (a) $g$ at its surface, (b) the weight of a $70$ kg astronaut there, and (c) the escape speed.</p>`,
   solution:String.raw`<p>(a) $g=\dfrac{GM}{R^2}=\dfrac{(6.67\times10^{-11})(7.35\times10^{22})}{(1.74\times10^6)^2}=\dfrac{4.90\times10^{12}}{3.03\times10^{12}}=1.62$ m/s².</p>
<p>(b) $W=mg=70(1.62)=113$ N (about one sixth of the Earth weight).</p>
<p>(c) $v_{\rm esc}=\sqrt{2GM/R}=\sqrt{2gR}=\sqrt{2(1.62)(1.74\times10^6)}=2.37\times10^3$ m/s $\approx2.4$ km/s. (Earth: 11.2 km/s.)</p>`},
  {id:"x2", title:"A low Earth orbit", problem:String.raw`<p>A satellite orbits Earth in a circle $400$ km above the surface. Use $GM_E=3.98\times10^{14}$ m³/s² and $R_E=6.37\times10^6$ m. Find its speed, its period, and the total mechanical energy per kilogram. How much energy per kg does it take to put a mass in this orbit from rest on the ground (ignore rotation and air)?</p>`,
   solution:String.raw`<p>$r=6.37\times10^6+4.0\times10^5=6.77\times10^6$ m.</p>
<p>$v=\sqrt{GM/r}=\sqrt{3.98\times10^{14}/6.77\times10^6}=7.67\times10^3$ m/s.</p>
<p>$T=2\pi r/v=2\pi(6.77\times10^6)/(7.67\times10^3)=5.55\times10^3$ s $=92.4$ min.</p>
<p>$E/m=-\dfrac{GM}{2r}=-2.94\times10^7$ J/kg.</p>
<p>At rest on the ground, $E/m=-GM/R_E=-6.25\times10^7$ J/kg. The energy needed is $-2.94\times10^7-(-6.25\times10^7)=3.31\times10^7$ J/kg. The kinetic part, $2.94\times10^7$ J/kg, is a large share of it: getting <i>into</i> orbit is mostly about speed, not height.</p>`},
  {id:"x3", title:"Geosynchronous radius", problem:String.raw`<p>Find the orbital radius and speed of a satellite whose period is $24$ h $=8.64\times10^4$ s (use $GM_E=3.98\times10^{14}$ m³/s²). What is its altitude?</p>`,
   solution:String.raw`<p>$T^2=\dfrac{4\pi^2}{GM}r^3\Rightarrow r^3=\dfrac{GMT^2}{4\pi^2}=\dfrac{(3.98\times10^{14})(8.64\times10^4)^2}{39.48}=7.53\times10^{22}$ m³, so $r=4.22\times10^7$ m.</p>
<p>Altitude $=r-R_E=4.22\times10^7-6.37\times10^6=3.59\times10^7$ m ($\approx36{,}000$ km). Speed $v=2\pi r/T=3.07\times10^3$ m/s (check: $\sqrt{GM/r}=3.07\times10^3$ m/s).</p>
<p>Using the sidereal day ($86{,}164$ s) instead changes $r$ by only 0.03%. Notice the satellite is slower than the low orbit of the last example but has more energy.</p>`},
  {id:"x4", title:"An elliptical orbit", problem:String.raw`<p>A satellite passes perigee at $r_p=7.00\times10^6$ m moving at $v_p=9.00\times10^3$ m/s. ($GM_E=3.98\times10^{14}$ m³/s².) Show that the orbit is bound, then find the apogee distance, the speed at apogee, and the period.</p>`,
   solution:String.raw`<p>Escape speed at $r_p$: $\sqrt{2GM/r_p}=\sqrt{2(3.98\times10^{14})/7\times10^6}=10.7$ km/s. Since $9.0<10.7$ the orbit is bound ($E<0$): $E/m=\tfrac12(9.0\times10^3)^2-\dfrac{3.98\times10^{14}}{7.0\times10^6}=4.05\times10^7-5.69\times10^7=-1.64\times10^7$ J/kg.</p>
<p>$E=-GMm/2a\Rightarrow a=\dfrac{GM}{2|E/m|}=\dfrac{3.98\times10^{14}}{2(1.64\times10^7)}=1.21\times10^7$ m, so $r_a=2a-r_p=2.43\times10^7-0.70\times10^7=1.73\times10^7$ m.</p>
<p>Angular momentum: $v_a=\dfrac{r_pv_p}{r_a}=\dfrac{(7.0\times10^6)(9.0\times10^3)}{1.73\times10^7}=3.64\times10^3$ m/s.</p>
<p>Check with energy: $\tfrac12(3640)^2-\dfrac{3.98\times10^{14}}{1.73\times10^7}=6.63\times10^6-2.30\times10^7=-1.64\times10^7$ J/kg. ✓.</p>
<p>Period: $T=2\pi\sqrt{a^3/GM}=2\pi\sqrt{(1.215\times10^7)^3/3.98\times10^{14}}=1.33\times10^4$ s $=222$ min.</p>`}
  ],
  mcq:[
  {id:"q1", q:String.raw`<p>An astronaut's weight on Earth's surface is $W$. At a point $2R_E$ <i>above</i> the surface (distance $3R_E$ from Earth's center), the gravitational force on her is</p>`, choices:["$W/2$","$W/3$","$W/4$","$W/6$","$W/9$"], a:4,
   why:String.raw`<p>Distance from the center is $3R_E$, so $F\propto1/r^2$ gives $W/9$. The tempting $W/4$ uses the altitude $2R_E$ in place of $r$.</p>`},
  {id:"q2", q:String.raw`<p>Planet X has four times the mass and twice the radius of Earth. Its escape speed is how many times Earth's?</p>`, choices:["1","$\\sqrt2$","2","$2\\sqrt2$","4"], a:1,
   why:String.raw`<p>$v_{\rm esc}=\sqrt{2GM/R}\propto\sqrt{M/R}=\sqrt{4/2}=\sqrt2$.</p>`},
  {id:"q3", q:String.raw`<p>A satellite in a circular orbit of radius $r$ has period $T$. A second satellite orbits the same planet in a circle of radius $4r$. Its period is</p>`, choices:["$2T$","$4T$","$8T$","$16T$","$T/8$"], a:2,
   why:String.raw`<p>$T^2\propto r^3$, so $T\propto r^{3/2}=4^{3/2}=8$. Common slips: $4T$ (linear) or $2T$ (square root).</p>`},
  {id:"q4", q:String.raw`<p>A satellite in a nearly circular orbit slowly loses energy to atmospheric drag. As a result its orbital radius and its speed</p>`, choices:["both decrease","radius decreases and speed increases","radius decreases and speed stays the same","both increase","radius increases and speed decreases"], a:1,
   why:String.raw`<p>$E=-GMm/2r$ decreases (more negative) so $r$ decreases. $v=\sqrt{GM/r}$ then increases: gravity does positive work as it falls inward, more than drag removes. Drag speeds up a circular orbiter.</p>`},
  {id:"q5", q:String.raw`<p>A comet's distance from the Sun at aphelion is three times its distance at perihelion. The ratio $v_{\rm perihelion}/v_{\rm aphelion}$ is</p>`, choices:["$1/3$","$1$","$\\sqrt3$","$3$","$9$"], a:3,
   why:String.raw`<p>At both points $\vec v\perp\vec r$, so conservation of $L$ gives $r_pv_p=r_av_a$, so $v_p/v_a=r_a/r_p=3$. (Energy conservation would give a different-looking but consistent equation; the ratio of speeds is simply the inverse ratio of distances, not its square or square root.)</p>`},
  {id:"q6", q:String.raw`<p>A $1000$ kg probe is lifted from Earth's surface to a height equal to Earth's radius ($r=2R_E$). Take $R_E=6.4\times10^6$ m and $g=10$ m/s² at the surface. The increase in its gravitational potential energy is closest to</p>`, choices:["$6.4\\times10^{9}$ J","$3.2\\times10^{10}$ J","$6.4\\times10^{10}$ J","$1.3\\times10^{11}$ J","$1.0\\times10^{4}$ J"], a:1,
   why:String.raw`<p>$\Delta U=GMm\left(\tfrac1R-\tfrac1{2R}\right)=\tfrac12\,\dfrac{GM}{R^2}\,mR=\tfrac12mgR=3.2\times10^{10}$ J. The naive $mgh=mgR=6.4\times10^{10}$ J is double: $g$ weakens as it climbs.</p>`},
  {id:"q7", q:String.raw`<p>A uniform solid planet has surface gravity $g_0$. Inside, at half the planet's radius from the center, the gravitational field has magnitude</p>`, choices:["$g_0/4$","$g_0/2$","$g_0$","$2g_0$","$0$"], a:1,
   why:String.raw`<p>Only the mass inside $r=R/2$ attracts: $M_{\rm enc}=M/8$, so $g=G(M/8)/(R/2)^2=\tfrac12GM/R^2=g_0/2$ (equivalently $g=g_0r/R$). The $g_0/4$ answer wrongly applies $1/r^2$ inside.</p>`},
  {id:"q8", q:String.raw`<p>A thin, uniform, hollow spherical shell of mass $M$ and radius $R$ has a small object of mass $m$ placed inside the shell at a distance $R/2$ from the center. The net gravitational force on $m$ due to the shell is</p>`, choices:["zero","$GMm/R^2$ toward the nearest part of the shell","$4GMm/R^2$ toward the center","$GMm/(R/2)^2$ toward the center","$GMm/R^2$ directed away from the nearest part of the shell"], a:0,
   why:String.raw`<p>By the shell theorem, the field is zero everywhere inside a uniform shell. The nearer part pulls harder per unit mass, but there is less of it, and the effects cancel exactly for inverse-square forces.</p>`},
  {id:"q9", q:String.raw`<p>A $500$ kg satellite is in a circular orbit of radius $8.0\times10^6$ m about Earth ($G=6.67\times10^{-11}$ N m²/kg², $M_E=5.97\times10^{24}$ kg). Its total mechanical energy is closest to</p>`, choices:["$-1.2\\times10^{10}$ J","$-2.5\\times10^{10}$ J","$0$","$+1.2\\times10^{10}$ J","$+2.5\\times10^{10}$ J"], a:0,
   why:String.raw`<p>$E=-\dfrac{GMm}{2r}=-\dfrac{(3.98\times10^{14})(500)}{2(8.0\times10^6)}=-1.24\times10^{10}$ J. The value $-2.5\times10^{10}$ J is $U$ alone, and $+1.2\times10^{10}$ J is only $K$; the total is $-K$.</p>`},
  {id:"q10", q:String.raw`<p>At the apogee of a satellite's elliptical orbit about a planet of mass $M$, the satellite is at distance $r_a$ from the planet's center. Its speed there is</p>`, choices:["less than $\\sqrt{GM/r_a}$","equal to $\\sqrt{GM/r_a}$","between $\\sqrt{GM/r_a}$ and $\\sqrt{2GM/r_a}$","at least $\\sqrt{2GM/r_a}$","zero"], a:0,
   why:String.raw`<p>At apogee the velocity is perpendicular to $\vec r$. If it equaled the circular speed $\sqrt{GM/r_a}$, the orbit would be a circle of radius $r_a$. Since the satellite then falls back inward, it must be moving slower than that. A speed above circular makes $r_a$ the <i>perigee</i> instead; $\ge\sqrt{2GM/r_a}$ is unbound.</p>`}
  ],
  frq:[
  {id:"f1", type:"Mathematical routines", title:"Potential energy, escape, and orbit change",
   prompt:String.raw`<p>A probe of mass $m$ is near a planet of mass $M$ and radius $R$. Gravity is the only force acting on the probe; ignore air and the planet's rotation. Express answers in terms of $G$, $M$, $m$, $R$ unless told otherwise.</p>
<p>(a) Starting from Newton's law of gravitation, derive an expression for the gravitational potential energy $U(r)$ of the probe, taking $U=0$ at infinite separation. Show the integral.<br>
(b) Derive the escape speed from the surface, and show that it equals $\sqrt{2gR}$, where $g=GM/R^2$ is the surface field.<br>
(c) The probe is instead placed in a circular orbit of radius $r=2R$. Derive its speed and its total mechanical energy in this orbit.<br>
(d) At that orbit the probe fires its engine in the direction of motion to just escape. Determine the required <i>increase</i> in speed, in terms of $g$ and $R$, and evaluate it for $g=10$ m/s² and $R=6.4\times10^6$ m.<br>
(e) Explain why the escape speed does not depend on the probe's mass or on the direction of launch.</p>`,
   pts:[
    {p:1,d:String.raw`Sets up work/integral: $U(r)=-\int_\infty^rF\,dr'$ with $F_r=-GMm/r'^2$ (or equivalent)`},
    {p:1,d:String.raw`Evaluates to $U=-GMm/r$ with consistent sign and limits`},
    {p:1,d:String.raw`Escape: $E=\tfrac12mv^2-GMm/R=0$ (or $v\to0$ at $\infty$) giving $v_{\rm esc}=\sqrt{2GM/R}$`},
    {p:1,d:String.raw`Substitutes $GM=gR^2$ to get $\sqrt{2gR}$`},
    {p:1,d:String.raw`Circular orbit: $GMm/r^2=mv^2/r$ with $r=2R$ giving $v=\sqrt{GM/2R}=\sqrt{gR/2}$`},
    {p:1,d:String.raw`$E=K+U=\tfrac12m\frac{GM}{2R}-\frac{GMm}{2R}=-\dfrac{GMm}{4R}$`},
    {p:1,d:String.raw`Escape speed at $2R$ is $\sqrt{2GM/2R}=\sqrt{gR}$; $\Delta v=\sqrt{gR}-\sqrt{gR/2}=(1-\tfrac1{\sqrt2})\sqrt{gR}=(\sqrt2-1)\sqrt{gR/2}$; numerically about $2.3\times10^3$ m/s`},
    {p:1,d:String.raw`Explains: mass cancels from energy conservation (both $K$ and $U$ are $\propto m$); energy is a scalar, so direction does not matter (provided the path clears the planet)`}],
   solution:String.raw`<p>(a) $U(r)=-\displaystyle\int_\infty^r\left(-\frac{GMm}{r'^2}\right)dr'=GMm\left[-\frac1{r'}\right]_\infty^r=-\frac{GMm}r$.</p>
<p>(b) $\tfrac12mv^2-\dfrac{GMm}R=0\Rightarrow v_{\rm esc}=\sqrt{\dfrac{2GM}R}$. Using $GM=gR^2$: $v_{\rm esc}=\sqrt{2gR}$.</p>
<p>(c) $\dfrac{GMm}{(2R)^2}=\dfrac{mv^2}{2R}\Rightarrow v=\sqrt{\dfrac{GM}{2R}}=\sqrt{\dfrac{gR}2}$. $E=\tfrac12m\dfrac{GM}{2R}-\dfrac{GMm}{2R}=-\dfrac{GMm}{4R}$.</p>
<p>(d) To escape from $r=2R$, need $E=0$, $v_{\rm esc}=\sqrt{2GM/2R}=\sqrt{gR}$. $\Delta v=\sqrt{gR}-\sqrt{gR/2}=(\sqrt2-1)\sqrt{gR/2}$. With $g=10$ and $R=6.4\times10^6$: $\sqrt{gR/2}=\sqrt{3.2\times10^7}=5657$ m/s, so $\Delta v=0.414(5657)\approx2.3\times10^3$ m/s.</p>
<p>(e) In $\tfrac12mv^2-GMm/R=0$ the $m$ cancels, so $v_{\rm esc}$ is independent of $m$ (gravitational mass equals inertial mass). Kinetic and potential energy are scalars: $E$ depends only on speed and distance, so any launch direction that does not hit the ground gives the same threshold.</p>`},
  {id:"f2", type:"Qualitative/quantitative translation", title:"A tunnel through a uniform planet",
   prompt:String.raw`<p>Model Earth as a uniform solid sphere of mass $M$ and radius $R$ with surface field $g=GM/R^2$. A frictionless straight tunnel is bored along a diameter through the center. A small object of mass $m$ is released from rest at the surface end. Ignore air and Earth's rotation.</p>
<p>(a) Using the shell theorem, show that the gravitational field at a distance $r&lt;R$ from the center has magnitude $g\,r/R$, directed toward the center. Explain why only the mass inside radius $r$ matters.<br>
(b) Write Newton's second law for the object along the tunnel (coordinate $x$ measured from the center) and show that its motion is SHM. Give $\omega$.<br>
(c) Find the time for one complete round trip (surface to the far end and back) using $g=10$ m/s² and $R=6.4\times10^6$ m.<br>
(d) Find the object's speed at the center.<br>
(e) Sketch the force on the object versus $x$ for $-R\le x\le R$, labeling the slope.<br>
(f) Compare your period in (c) with the period of a satellite orbiting just above the surface, and give a physical reason for the connection.</p>`,
   pts:[
    {p:1,d:String.raw`States the shell theorem: shells outside radius $r$ exert zero net field; mass inside acts as if at the center`},
    {p:1,d:String.raw`$M_{\rm enc}=M(r/R)^3$ so $g(r)=GM_{\rm enc}/r^2=GMr/R^3=gr/R$, inward`},
    {p:1,d:String.raw`$m\ddot x=-\dfrac{mg}{R}x$ (correct restoring sign)`},
    {p:1,d:String.raw`Identifies SHM and $\omega=\sqrt{g/R}$`},
    {p:1,d:String.raw`$T=2\pi\sqrt{R/g}=2\pi\sqrt{6.4\times10^5}\approx5.0\times10^3$ s $\approx84$ min, for the round trip`},
    {p:1,d:String.raw`Speed at center $v_{\max}=\omega A=\sqrt{gR}\approx8.0\times10^3$ m/s`},
    {p:1,d:String.raw`Sketch: straight line through origin with negative slope $-mg/R$, running from $+mg$ at $x=-R$ to $-mg$ at $x=+R$`},
    {p:1,d:String.raw`Surface circular orbit has $T=2\pi\sqrt{R/g}$, the same; reason: the tunnel motion is the projection of the circular motion onto a diameter (SHM is the shadow of uniform circular motion), and both have the same $\omega^2=g/R$`}],
   solution:String.raw`<p>(a) Divide the sphere into thin concentric shells. Each shell with radius larger than $r$ exerts zero field at the point (shell theorem), so only the sphere of radius $r$ contributes, behaving as a point mass at the center. Uniform density gives $M_{\rm enc}=M(r/R)^3$. Hence $g(r)=\dfrac{GM(r/R)^3}{r^2}=\dfrac{GM}{R^3}r=g\dfrac rR$, toward the center.</p>
<p>(b) $m\ddot x=-\dfrac{mg}{R}x\Rightarrow\ddot x=-\dfrac gRx$: SHM with $\omega=\sqrt{g/R}$. The motion goes from $x=+R$ to $-R$ and back.</p>
<p>(c) $T=2\pi\sqrt{R/g}=2\pi\sqrt{6.4\times10^6/10}=2\pi(800)=5.03\times10^3$ s $=83.8$ min.</p>
<p>(d) $A=R$, so $v_{\max}=R\omega=\sqrt{gR}=\sqrt{6.4\times10^7}=8.0\times10^3$ m/s. (Energy check: $\tfrac12mv^2=\tfrac12\cdot\tfrac{mg}{R}R^2=\tfrac12mgR$ equals the drop in $U=\tfrac12\frac{mg}{R}x^2$.)</p>
<p>(e) Line $F=-(mg/R)x$ through the origin; at $x=\pm R$ the force magnitude is $mg$.</p>
<p>(f) A low circular orbit has $v=\sqrt{gR}$ and period $2\pi R/v=2\pi\sqrt{R/g}$, the same $84$ min. The tunnel object's motion is the shadow, on a diameter, of the satellite's circular motion at the same angular rate: both have acceleration magnitude $\omega^2\times$ displacement with $\omega^2=g/R$.</p>`}
  ]
});
