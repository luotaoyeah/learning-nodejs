#include <stdio.h>
#include <time.h>

int main() {
  int n = 1000000000;
  clock_t start, end;
  double duration;

  start = clock();
  for(int i = 0; i < n; i++) {}
  end = clock();
  duration = ((double)(end - start)) / CLOCKS_PER_SEC;

  /* c loop 1000000000 in 2.595400 seconds */
  printf("c loop 1000000000 in %lf seconds\n", duration);
  return 0;
}
