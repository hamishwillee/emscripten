function finall(x) {
 x = +x;
 var a = 5.0;
 a = +x;
 a = 17;
 a = 44.0;
 a = 44.0;
 a = 44.9;
 a = 1278.0e3;
 a = 12.0e10;
 a = -x;
 a = -17;
 a = -44;
 a = -44;
 a = -44.9;
 a = -1278e3;
 a = -12e10;
 a = +-x;
 a = -17.0;
 a = -44.0;
 a = -44.0;
 a = -44.9;
 a = -1278.0e3;
 a = -12.0e10;
 a = 9223372036854776000.0;
 a = -9223372036854776000.0;
 a = -9223372036854776000.0;
 a = -0x8000000000000000;
 a = 999999984306749400.0;
 a = -999999984306749400.0;
 a = -999999984306749400.0;
 a = -0xde0b6b000000000;
 a = 1.1234567890123457e+21;
 f(g() | 0);
 return 12.0e10;
}
function looop() {
 do {
  do_it();
 } while (!condition());
 do {
  do_it();
 } while (!(a > b));
 do {
  do_it();
 } while (x());
 while (1) {
  do_it();
  if (a()) continue;
  if (!x()) {
   break;
  }
 }
 do {
  do_it();
  do {
   if (a()) continue;
  } while (b());
 } while (x());
 do {
  do_it();
  while (b()) {
   if (a()) continue;
  }
 } while (x());
 X : while (1) {
  do_it();
  while (b()) {
   if (a()) continue X;
  }
  if (!x()) {
   break;
  }
 }
 do {
  blah();
 } while (!shah());
 a = b;
 LABELED : while (1) {
  blah();
  if (shah()) {
   c = d;
   break;
  }
 }
 while (1) {
  blah();
  if (check) break;
  if (shah()) {
   e = f;
   break;
  }
 }
 do {
  blah();
  while (1) {
   if (check) break;
  }
 } while (!shah());
 g = h;
}

