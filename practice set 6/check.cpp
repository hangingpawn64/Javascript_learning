// #include<iostream>
// using namespace std;

// int main(){

//     cout<< 0.1 + 0.2;
//     return 0;
// }
#include <iostream>
#include <iomanip>

int main() {
    double a = 0.1;
    double b = 0.2;
    double c = a + b;
    std::cout << std::setprecision(17) << c << std::endl; // Output: 0.30000000000000004
    return 0;
}
