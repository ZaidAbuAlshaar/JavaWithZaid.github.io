
// MODIFIED: Consolidating and expanding level data
const levelsData = {
    1: {
        title: {
            ar: "المستوى 1: أنواع البيانات والإدخال",
            en: "Level 1: Data Types and Input"
        },
        description: {
            ar: "في هذا المستوى، ستتعلم أساسيات التعامل مع البيانات في جافا. سنتعرف على الأنواع الرئيسية مثل الأعداد الصحيحة (int)، الأعداد العشرية (double)، السلاسل النصية (String)، والقيم المنطقية (boolean). الأهم من ذلك، ستتعلم كيفية جعل برنامجك يتفاعل مع المستخدم عبر استقبال المدخلات باستخدام `Scanner`.",
            en: "In this level, you will learn the basics of data handling in Java. We will explore main types like integers (int), decimals (double), text strings (String), and boolean values. Most importantly, you will learn how to make your program interact with the user by receiving input using `Scanner`."
        },
        // MODIFIED: Added detailed theory
        theory: {
            ar: `في جافا، كل قيمة لها نوع محدد. أنواع البيانات الأساسية تشمل:

• الأعداد الصحيحة (int): تستخدم لتخزين الأعداد الصحيحة مثل 5، 10، -3
• الأعداد العشرية (double): تستخدم لتخزين الأعداد الكسرية مثل 3.14، 2.5
• السلاسل النصية (String): تستخدم لتخزين النصوص مثل "مرحبا"، "جافا"
• القيم المنطقية (boolean): تستخدم لتخزين قيم true أو false فقط

لأخذ مدخلات من المستخدم، نستخدم الكلاس Scanner الذي يتيح لنا قراءة البيانات التي يدخلها المستخدم من خلال لوحة المفاتيح.`,
            en: `In Java, every value has a specific type. Basic data types include:

• Integers (int): Used to store whole numbers like 5, 10, -3
• Decimals (double): Used to store fractional numbers like 3.14, 2.5
• Text strings (String): Used to store text like "Hello", "Java"
• Boolean values: Used to store only true or false values

To take input from the user, we use the Scanner class which allows us to read data entered by the user through the keyboard.`
        },
        // MODIFIED: Added common errors
        commonErrors: {
            ar: [
                "نسيان استيراد الكلاس Scanner: يجب إضافة import java.util.Scanner; في أعلى الملف",
                "عدم إغلاق كائن Scanner: قد يؤدي إلى تسرب في الذاكرة",
                "محاولة قراءة نوع خاطئ: مثل محاولة قراءة نص عندما يتوقع المستخدم رقم",
                "نسيان تهيئة المتغيرات قبل استخدامها"
            ],
            en: [
                "Forgetting to import the Scanner class: Must add import java.util.Scanner; at the top of the file",
                "Not closing the Scanner object: May lead to memory leaks",
                "Trying to read the wrong type: Like trying to read text when the user expects a number",
                "Forgetting to initialize variables before using them"
            ]
        },
        // MODIFIED: Added practical examples
        examples: {
            ar: `مثال 1: إنشاء متغيرات من أنواع مختلفة
int age = 25;                    // عدد صحيح
double price = 19.99;            // عدد عشري
String name = "أحمد";            // نص
boolean isStudent = true;        // قيمة منطقية

مثال 2: أخذ مدخلات من المستخدم
Scanner input = new Scanner(System.in);
System.out.print("أدخل عمرك: ");
int userAge = input.nextInt();   // قراءة عدد صحيح

System.out.print("أدخل اسمك: ");
String userName = input.next();  // قراءة نص`,
            en: `Example 1: Creating variables of different types
int age = 25;                    // integer
double price = 19.99;            // decimal
String name = "Ahmed";           // text
boolean isStudent = true;        // boolean value

Example 2: Taking input from user
Scanner input = new Scanner(System.in);
System.out.print("Enter your age: ");
int userAge = input.nextInt();   // read integer

System.out.print("Enter your name: ");
String userName = input.next();  // read text`
        },
        concepts: {
            ar: [
                "أنواع البيانات الأساسية في جافا",
                "الفرق بين int و double",
                "كيفية التعامل مع النصوص (String)",
                "القيم المنطقية (true/false)",
                "استخدام Scanner لقراءة المدخلات"
            ],
            en: [
                "Basic data types in Java",
                "Difference between int and double",
                "How to work with text (String)",
                "Boolean values (true/false)",
                "Using Scanner to read input"
            ]
        },
        codeExample: `import java.util.Scanner;

public class DataTypesExample {
    public static void main(String[] args) {
        // تعريف متغيرات بأنواع مختلفة
        int age = 25;
        double height = 1.75;
        String name = "زيد";
        boolean isStudent = true;
        
        // طباعة القيم
        System.out.println("الاسم: " + name);
        System.out.println("العمر: " + age);
        System.out.println("الطول: " + height);
        System.out.println("هل هو طالب؟ " + isStudent);
        
        // قراءة المدخلات من المستخدم
        Scanner scanner = new Scanner(System.in);
        System.out.print("أدخل اسمك: ");
        String userName = scanner.nextLine();
        System.out.println("مرحبًا " + userName + "!");
    }
}`,
        quizQuestion: {
            ar: "ما هي الكلاس المستخدم لأخذ مدخلات من المستخدم في جافا؟",
            en: "Which class is used to take user input in Java?"
        },
        quizOptions: {
            ar: ["Scanner", "Input", "Reader", "System.in"],
            en: ["Scanner", "Input", "Reader", "System.in"]
        },
        correctAnswer: "Scanner",
        resources: [
            {
                title: {
                    ar: "أنواع البيانات في جافا",
                    en: "Data Types in Java"
                },
                url: "https://www.w3schools.com/java/java_data_types.asp",
                description: {
                    ar: "شرح مفصل لأنواع البيانات الأساسية في جافا مع أمثلة",
                    en: "Detailed explanation of basic data types in Java with examples"
                }
            },
            {
                title: {
                    ar: "أخذ المدخلات من المستخدم",
                    en: "Taking User Input"
                },
                url: "https://www.w3schools.com/java/java_user_input.asp",
                description: {
                    ar: "كيفية استخدام Scanner لأخذ المدخلات من المستخدم",
                    en: "How to use Scanner to take input from the user"
                }
            }
        ]
    },
    2: {
        title: {
            ar: "المستوى 2: المتغيرات والتعبيرات",
            en: "Level 2: Variables and Expressions"
        },
        description: {
            ar: "في هذا المستوى، ستتعلم كيفية تخزين البيانات في المتغيرات واستخدام التعبيرات الحسابية والمنطقية. سنتعرف على قواعد تسمية المتغيرات وكيفية استخدامها في التعبيرات المختلفة. من الأخطاء الشائعة هي عدم الانتباه إلى أسبقية العمليات (Operator Precedence) أو محاولة استخدام متغير قبل تعريفه.",
            en: "In this level, you will learn how to store data in variables and use arithmetic and logical expressions. We will explore variable naming rules and how to use them in different expressions. Common mistakes include not paying attention to operator precedence or trying to use a variable before it's defined."
        },
        theory: {
            ar: `المتغيرات هي أماكن في الذاكرة نستخدمها لتخزين البيانات. لكل متغير:
• اسم: نستخدمه للوصول إلى القيمة المخزنة
• نوع: يحدد نوع البيانات التي يمكن تخزينها
• قيمة: البيانات المخزنة فعلياً

قواعد تسمية المتغيرات:
• يجب أن تبدأ بحرف أو _
• يمكن أن تحتوي على أرقام ولكن لا تبدأ برقم
• لا يمكن أن تحتوي على مسافات
• حساسة لحالة الأحرف (الكبيرة والصغيرة مختلفة)

التعبيرات هي مجموعات من المتغيرات والقيم والمعاملات التي تُنتج قيمة جديدة.`,
            en: `Variables are places in memory that we use to store data. Each variable has:
• A name: We use it to access the stored value
• A type: Determines the type of data that can be stored
• A value: The actual stored data

Variable naming rules:
• Must start with a letter or _
• Can contain numbers but cannot start with a number
• Cannot contain spaces
• Case sensitive (uppercase and lowercase are different)

Expressions are combinations of variables, values, and operators that produce a new value.`
        },
        commonErrors: {
            ar: [
                "استخدام متغير قبل تعريفه أو تهيئته",
                "عدم الانتباه إلى أسبقية العمليات الحسابية",
                "استخدام أسماء متغيرات غير واضحة أو غير وصافية",
                "محاولة تخزين قيمة من نوع في متغير من نوع آخر غير متوافق"
            ],
            en: [
                "Using a variable before defining or initializing it",
                "Not paying attention to operator precedence in arithmetic operations",
                "Using unclear or non-descriptive variable names",
                "Trying to store a value of one type in a variable of another incompatible type"
            ]
        },
        examples: {
            ar: `مثال 1: تعريف المتغيرات
int age = 25;                    // متغير عدد صحيح
double salary = 2500.50;         // متغير عدد عشري
String name = "محمد";            // متغير نصي
boolean isEmployed = true;       // متغير منطقي

مثال 2: التعبيرات الحسابية
int x = 10;
int y = 5;
int sum = x + y;                 // 15
int difference = x - y;          // 5
int product = x * y;             // 50
int quotient = x / y;            // 2

مثال 3: أسبقية العمليات
int result1 = 10 + 5 * 2;        // 20 (لأن الضرب أولاً)
int result2 = (10 + 5) * 2;      // 30 (لأن الأقواس أولاً)`,
            en: `Example 1: Defining variables
int age = 25;                    // integer variable
double salary = 2500.50;         // decimal variable
String name = "Mohammad";        // text variable
boolean isEmployed = true;       // boolean variable

Example 2: Arithmetic expressions
int x = 10;
int y = 5;
int sum = x + y;                 // 15
int difference = x - y;          // 5
int product = x * y;             // 50
int quotient = x / y;            // 2

Example 3: Operator precedence
int result1 = 10 + 5 * 2;        // 20 (multiplication first)
int result2 = (10 + 5) * 2;      // 30 (parentheses first)`
        },
        concepts: {
            ar: [
                "تعريف المتغيرات في جافا",
                "قواعد تسمية المتغيرات",
                "التعبيرات الحسابية",
                "التعبيرات المنطقية",
                "أسبقية العمليات"
            ],
            en: [
                "Defining variables in Java",
                "Variable naming rules",
                "Arithmetic expressions",
                "Logical expressions",
                "Operator precedence"
            ]
        },
        codeExample: `public class VariablesExample {
    public static void main(String[] args) {
        int x = 10;
        int y = 5;
        
        // تعبيرات حسابية
        int sum = x + y;
        int difference = x - y;
        int product = x * y;
        int quotient = x / y;
        int remainder = x % y;
        
        System.out.println("المجموع: " + sum);
        System.out.println("الفرق: " + difference);
        System.out.println("الضرب: " + product);
        System.out.println("القسمة: " + quotient);
        System.out.println("الباقي: " + remainder);
        
        // تعبيرات منطقية
        boolean isEqual = (x == y);
        boolean isGreater = (x > y);
        boolean isLess = (x < y);
        
        System.out.println("هل x يساوي y؟ " + isEqual);
        System.out.println("هل x أكبر من y؟ " + isGreater);
        System.out.println("هل x أصغر من y？ " + isLess);
    }
}`,
        quizQuestion: {
            ar: "ما هو ناتج العملية الحسابية: 10 % 3؟",
            en: "What is the result of the arithmetic operation: 10 % 3?"
        },
        quizOptions: {
            ar: ["1", "0", "3", "10"],
            en: ["1", "0", "3", "10"]
        },
        correctAnswer: "1",
        resources: [
            {
                title: {
                    ar: "المتغيرات في جافا",
                    en: "Variables in Java"
                },
                url: "https://www.w3schools.com/java/java_variables.asp",
                description: {
                    ar: "شرح شامل للمتغيرات في جافا وكيفية استخدامها",
                    en: "Comprehensive guide to variables in Java and how to use them"
                }
            },
            {
                title: {
                    ar: "التعبيرات الحسابية",
                    en: "Arithmetic Expressions"
                },
                url: "https://www.w3schools.com/java/java_operators.asp",
                description: {
                    ar: "دليل شامل للمعاملات الحسابية في جافا",
                    en: "Comprehensive guide to arithmetic operators in Java"
                }
            }
        ]
    },
    3: {
        title: {
            ar: "المستوى 3: المعاملات",
            en: "Level 3: Operators"
        },
        description: {
            ar: "في هذا المستوى، ستتعرف على أنواع المعاملات المختلفة في جافا وكيفية استخدامها في التعبيرات المنطقية والحسابية. ستكتشف كيفية عمل المعاملات الحسابية، المنطقية، ومعاملات المقارنة. من الأخطاء الشائعة هو الخلط بين `==` (المقارنة) و `=` (الإسناد).",
            en: "In this level, you will learn about different types of operators in Java and how to use them in logical and arithmetic expressions. You'll discover how arithmetic, logical, and comparison operators work. A common mistake is confusing `==` (comparison) with `=` (assignment)."
        },
        theory: {
            ar: `المعاملات في جافا تنقسم إلى عدة أنواع:

1. المعاملات الحسابية:
   • الجمع: +
   • الطرح: -
   • الضرب: *
   • القسمة: /
   • باقي القسمة: %

2. معاملات المقارنة:
   • المساواة: ==
   • عدم المساواة: !=
   • أكبر من: >
   • أصغر من: <
   • أكبر من أو يساوي: >=
   • أصغر من أو يساوي: <=

3. المعاملات المنطقية:
   • AND: &&
   • OR: ||
   • NOT: !

4. معاملات الإسناد:
   • الإسناد: =
   • الإسناد مع عملية: +=, -=, *=, /=, %=`,
            en: `Operators in Java are divided into several types:

1. Arithmetic operators:
   • Addition: +
   • Subtraction: -
   • Multiplication: *
   • Division: /
   • Modulus: %

2. Comparison operators:
   • Equality: ==
   • Inequality: !=
   • Greater than: >
   • Less than: <
   • Greater than or equal: >=
   • Less than or equal: <=

3. Logical operators:
   • AND: &&
   • OR: ||
   • NOT: !

4. Assignment operators:
   • Assignment: =
   • Assignment with operation: +=, -=, *=, /=, %=`
        },
        commonErrors: {
            ar: [
                "الخلط بين = (إسناد) و == (مقارنة)",
                "عدم فهم أسبقية المعاملات المنطقية",
                "استخدام المعامل المنطقي الخاطئ في التعبيرات الشرطية",
                "نسيان أن معاملات المقارنة تعيد قيمة boolean وليس رقم"
            ],
            en: [
                "Confusing = (assignment) with == (comparison)",
                "Not understanding logical operator precedence",
                "Using the wrong logical operator in conditional expressions",
                "Forgetting that comparison operators return boolean values not numbers"
            ]
        },
        examples: {
            ar: `مثال 1: المعاملات الحسابية
int a = 15;
int b = 4;
int sum = a + b;         // 19
int difference = a - b;  // 11
int product = a * b;     // 60
int quotient = a / b;    // 3 (القسمة الصحيحة)
int remainder = a % b;   // 3 (باقي القسمة)

مثال 2: معاملات المقارنة
int x = 10;
int y = 5;
boolean isEqual = (x == y);      // false
boolean isGreater = (x > y);     // true
boolean isLessOrEqual = (x <= y);// false

مثال 3: المعاملات المنطقية
boolean hasPermission = true;
boolean isAdult = false;
boolean canEnter = hasPermission && isAdult;     // false
boolean canView = hasPermission || isAdult;      // true
boolean cannotView = !hasPermission;             // false`,
            en: `Example 1: Arithmetic operators
int a = 15;
int b = 4;
int sum = a + b;         // 19
int difference = a - b;  // 11
int product = a * b;     // 60
int quotient = a / b;    // 3 (integer division)
int remainder = a % b;   // 3 (modulus)

Example 2: Comparison operators
int x = 10;
int y = 5;
boolean isEqual = (x == y);      // false
boolean isGreater = (x > y);     // true
boolean isLessOrEqual = (x <= y);// false

Example 3: Logical operators
boolean hasPermission = true;
boolean isAdult = false;
boolean canEnter = hasPermission && isAdult;     // false
boolean canView = hasPermission || isAdult;      // true
boolean cannotView = !hasPermission;             // false`
        },
        concepts: {
            ar: [
                "المعاملات الحسابية (+, -, *, /, %)",
                "المعاملات المنطقية (&&, ||, !)",
                "المعاملات المقارنة (==, !=, >, <, >=, <=)",
                "المعاملات المختصرة (+=, -=, *=, /=)",
                "أسبقية المعاملات"
            ],
            en: [
                "Arithmetic operators (+, -, *, /, %)",
                "Logical operators (&&, ||, !)",
                "Comparison operators (==, !=, >, <, >=, <=)",
                "Shortcut operators (+=, -=, *=, /=)",
                "Operator precedence"
            ]
        },
        codeExample: `public class OperatorsExample {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;
        int c = 3;
        
        // معاملات حسابية
        int result1 = a + b * c; // 10 + (5*3) = 25
        int result2 = (a + b) * c; // (10+5)*3 = 45
        
        // معاملات مقارنة
        boolean isGreater = a > b; // true
        boolean isEqual = a == b; // false
        
        // معاملات منطقية
        boolean logicalAnd = (a > b) && (b > c); // true && true = true
        boolean logicalOr = (a < b) || (b > c); // false || true = true
        
        System.out.println("result1: " + result1);
        System.out.println("result2: " + result2);
        System.out.println("isGreater: " + isGreater);
        System.out.println("isEqual: " + isEqual);
        System.out.println("logicalAnd: " + logicalAnd);
        System.out.println("logicalOr: " + logicalOr);
        
        // معاملات الإسناد المختصرة
        a += 5; // تعادل a = a + 5
        System.out.println("a after += 5: " + a); // 15
    }
}`,
        quizQuestion: {
            ar: "ما هو ناتج العملية المنطقية: (10 > 5) && (3 < 2)؟",
            en: "What is the result of the logical operation: (10 > 5) && (3 < 2)?"
        },
        quizOptions: {
            ar: ["صحيح", "false", "true", "خطأ"],
            en: ["True", "false", "Syntax error", "null"]
        },
        correctAnswer: "false",
        resources: [
            {
                title: {
                    ar: "المعاملات في جافا",
                    en: "Operators in Java"
                },
                url: "https://www.w3schools.com/java/java_operators.asp",
                description: {
                    ar: "دليل شامل لجميع أنواع المعاملات في جافا",
                    en: "Comprehensive guide to all types of operators in Java"
                }
            },
            {
                title: {
                    ar: "أسبقية المعاملات",
                    en: "Operator Precedence"
                },
                url: "https://www.w3schools.com/java/java_operators_precedence.asp",
                description: {
                    ar: "ترتيب تنفيذ المعاملات في التعبيرات المعقدة",
                    en: "Order of execution of operators in complex expressions"
                }
            }
        ]
    },
    // المستويات من 4 إلى 10 سيتم إضافتها بنفس النمط
    // ... (لن يتم تضمينها هنا بسبب قيود الطول)
4: {
        title: {
            ar: "المستوى 4: التحكم بالتدفق",
            en: "Level 4: Control Flow"
        },
        description: {
            ar: "في هذا المستوى، ستتعلم كيفية التحكم في تدفق البرنامج باستخدام الجمل الشرطية if-else و switch-case.",
            en: "In this level, you will learn how to control program flow using if-else and switch-case conditional statements."
        },
        theory: {
            ar: `التحكم بالتدفق يسمح لك باتخاذ قرارات في برنامجك بناءً على شروط معينة.

• if-else: تستخدم لتنفيذ كود معين إذا تحقق شرط ما
• switch-case: تستخدم عندما يكون لديك عدة حالات محتملة

أمثلة على الشروط:
- إذا كان العمر أكبر من 18 → يمكن التصويت
- إذا كانت الدرجة بين 90-100 → تقدير امتياز
- إذا كان اليوم جمعة → عطلة نهاية الأسبوع`,
            en: `Control flow allows you to make decisions in your program based on certain conditions.

• if-else: Used to execute specific code if a condition is met
• switch-case: Used when you have multiple possible cases

Examples of conditions:
- If age is greater than 18 → can vote
- If grade is between 90-100 → excellent
- If day is Friday → weekend`
        },
        commonErrors: {
            ar: [
                "نسيان الأقواس {} بعد الشرط",
                "استخدام = بدلاً من == للمقارنة",
                "نسيان break في عبارة switch",
                "عدم تغطية جميع الحالات المحتملة في switch-case"
            ],
            en: [
                "Forgetting braces {} after condition",
                "Using = instead of == for comparison",
                "Forgetting break in switch statement",
                "Not covering all possible cases in switch-case"
            ]
        },
        examples: {
            ar: `مثال 1: استخدام if-else
int age = 20;
if (age >= 18) {
    System.out.println("يمكنك التصويت");
} else {
    System.out.println("لا يمكنك التصويت بعد");
}

مثال 2: استخدام else-if
int score = 85;
if (score >= 90) {
    System.out.println("امتياز");
} else if (score >= 80) {
    System.out.println("جيد جداً");
} else if (score >= 70) {
    System.out.println("جيد");
} else {
    System.out.println("مقبول");
}

مثال 3: استخدام switch-case
String day = "الجمعة";
switch (day) {
    case "الجمعة":
        System.out.println("عطلة نهاية الأسبوع");
        break;
    case "السبت":
        System.out.println("عطلة نهاية الأسبوع");
        break;
    default:
        System.out.println("يوم عمل");
}`,
            en: `Example 1: Using if-else
int age = 20;
if (age >= 18) {
    System.out.println("You can vote");
} else {
    System.out.println("You cannot vote yet");
}

Example 2: Using else-if
int score = 85;
if (score >= 90) {
    System.out.println("Excellent");
} else if (score >= 80) {
    System.out.println("Very Good");
} else if (score >= 70) {
    System.out.println("Good");
} else {
    System.out.println("Acceptable");
}

Example 3: Using switch-case
String day = "Friday";
switch (day) {
    case "Friday":
        System.out.println("Weekend");
        break;
    case "Saturday":
        System.out.println("Weekend");
        break;
    default:
        System.out.println("Work day");
}`
        },
        concepts: {
            ar: [
                "الجمل الشرطية if",
                "الجمل الشرطية if-else",
                "الجمل الشرطية else-if",
                "عبارة switch-case",
                "كلمة break وكلمة default"
            ],
            en: [
                "if statements",
                "if-else statements",
                "else-if statements",
                "switch-case statements",
                "break and default keywords"
            ]
        },
        codeExample: `public class ControlFlowExample {
    public static void main(String[] args) {
        // مثال على if-else
        int number = 10;
        if (number % 2 == 0) {
            System.out.println("العدد زوجي");
        } else {
            System.out.println("العدد فردي");
        }
        
        // مثال على switch-case
        String day = "الاثنين";
        String dayType;
        
        switch (day) {
            case "الجمعة":
            case "السبت":
                dayType = "عطلة نهاية الأسبوع";
                break;
            case "الأحد":
            case "الاثنين":
            case "الثلاثاء":
            case "الأربعاء":
            case "الخميس":
                dayType = "يوم عمل";
                break;
            default:
                dayType = "يوم غير معروف";
        }
        
        System.out.println(day + " هو " + dayType);
    }
}`,
        quizQuestion: {
            ar: "ما هو الخرج المتوقع للكود التالي: int x = 5; if (x > 3) { System.out.println('A'); } else { System.out.println('B'); }",
            en: "What is the expected output of the following code: int x = 5; if (x > 3) { System.out.println('A'); } else { System.out.println('B'); }"
        },
        quizOptions: {
            ar: ["A", "B", "لا شيء", "خطأ في الصياغة"],
            en: ["A", "B", "Nothing", "Syntax error"]
        },
        correctAnswer: "A",
        resources: [
            {
                title: {
                    ar: "التحكم بالتدفق في جافا",
                    en: "Control Flow in Java"
                },
                url: "https://www.w3schools.com/java/java_conditions.asp",
                description: {
                    ar: "شرح مفصل للجمل الشرطية في جافا",
                    en: "Detailed explanation of conditional statements in Java"
                }
            }
        ]
    },
    
    5: {
        title: {
            ar: "المستوى 5: الحلقات التكرارية",
            en: "Level 5: Loops"
        },
        description: {
            ar: "في هذا المستوى، ستتعلم كيفية استخدام الحلقات التكرارية for و while و do-while لتكرار تنفيذ الأكواد.",
            en: "In this level, you will learn how to use for, while, and do-while loops to repeat code execution."
        },
        theory: {
            ar: `الحلقات التكرارية تمكنك من تنفيذ كود معين عدة مرات.

• for: تستخدم عندما تعرف عدد المرات التي تريد التكرار فيها
• while: تستخدم عندما تريد التكرار طالما أن شرطاً معيناً يتحقق
• do-while: تشبه while لكنها تنفذ الكود مرة واحدة على الأقل

استخدامات الحلقات:
- معالجة عناصر المصفوفات
- تنفيذ عمليات متكررة
- البحث في البيانات`,
            en: `Loops allow you to execute code multiple times.

• for: Used when you know how many times you want to repeat
• while: Used when you want to repeat as long as a condition is true
• do-while: Similar to while but executes the code at least once

Uses of loops:
- Processing array elements
- Performing repetitive operations
- Searching data`
        },
        commonErrors: {
            ar: [
                "حلقة لا نهائية بسبب شرط لا يتغير",
                "نسيان زيادة العداد في حلقة for",
                "استخدام = بدلاً من == في شرط الحلقة",
                "عدم تهيئة المتغيرات المستخدمة في الشروط"
            ],
            en: [
                "Infinite loop due to unchanging condition",
                "Forgetting to increment counter in for loop",
                "Using = instead of == in loop condition",
                "Not initializing variables used in conditions"
            ]
        },
        examples: {
            ar: `مثال 1: حلقة for
for (int i = 1; i <= 5; i++) {
    System.out.println("التكرار رقم: " + i);
}

مثال 2: حلقة while
int count = 1;
while (count <= 5) {
    System.out.println("التكرار رقم: " + count);
    count++;
}

مثال 3: حلقة do-while
int num = 1;
do {
    System.out.println("الرقم: " + num);
    num++;
} while (num <= 5);`,
            en: `Example 1: for loop
for (int i = 1; i <= 5; i++) {
    System.out.println("Iteration: " + i);
}

Example 2: while loop
int count = 1;
while (count <= 5) {
    System.out.println("Iteration: " + count);
    count++;
}

Example 3: do-while loop
int num = 1;
do {
    System.out.println("Number: " + num);
    num++;
} while (num <= 5);`
        },
        concepts: {
            ar: [
                "حلقة for",
                "حلقة while",
                "حلقة do-while",
                "كلمات break و continue",
                "الحلقات المتداخلة"
            ],
            en: [
                "for loop",
                "while loop",
                "do-while loop",
                "break and continue keywords",
                "Nested loops"
            ]
        },
        codeExample: `public class LoopsExample {
    public static void main(String[] args) {
        // مثال على حلقة for
        System.out.println("أعداد من 1 إلى 5:");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        
        System.out.println("\n\nأعداد زوجية من 2 إلى 10:");
        for (int i = 2; i <= 10; i += 2) {
            System.out.print(i + " ");
        }
        
        // مثال على حلقة while
        System.out.println("\n\nعد تنازلي من 5 إلى 1:");
        int count = 5;
        while (count >= 1) {
            System.out.print(count + " ");
            count--;
        }
        
        // مثال على break و continue
        System.out.println("\n\nأرقام من 1 إلى 10 (تخطي 5):");
        for (int i = 1; i <= 10; i++) {
            if (i == 5) {
                continue; // تخطي الرقم 5
            }
            if (i == 8) {
                break; // إيقاف عند الرقم 8
            }
            System.out.print(i + " ");
        }
    }
}`,
        quizQuestion: {
            ar: "كم مرة ستنفذ الحلقة التالية: for (int i = 0; i < 5; i++) { System.out.println(i); }",
            en: "How many times will this loop execute: for (int i = 0; i < 5; i++) { System.out.println(i); }"
        },
        quizOptions: {
            ar: ["5 مرات", "4 مرات", "6 مرات", "لانهاية"],
            en: ["5 times", "4 times", "6 times", "Infinitely"]
        },
        correctAnswer: "5 مرات",
        resources: [
            {
                title: {
                    ar: "الحلقات التكرارية في جافا",
                    en: "Loops in Java"
                },
                url: "https://www.w3schools.com/java/java_loops.asp",
                description: {
                    ar: "شرح مفصل للحلقات التكرارية في جافا",
                    en: "Detailed explanation of loops in Java"
                }
            }
        ]
    },
    

// أضف هذا الكود بعد المستوى 5 في كائن levelsData
6: {
    title: {
        ar: "المستوى 6: المصفوفات",
        en: "Level 6: Arrays"
    },
    description: {
        ar: "في هذا المستوى، ستتعلم كيفية التعامل مع المصفوفات في جافا لتخزين مجموعات من البيانات.",
        en: "In this level, you will learn how to work with arrays in Java to store collections of data."
    },
    theory: {
        ar: `المصفوفات (Arrays) هي هياكل بيانات تستخدم لتخزين عدة قيم من نفس النوع في متغير واحد.

• يجب تحديد نوع المصفوفة وحجمها عند التصريح عنها
• يمكن الوصول إلى العناصر باستخدام الفهرس (index) الذي يبدأ من الصفر
• المصفوفات ثابتة الحجم بعد التهيئة

أمثلة على استخدامات المصفوفات:
- تخزين قائمة الطلاب
- حفظ درجات الامتحانات
- تخزين مجموعة من الأرقام`,
        en: `Arrays are data structures used to store multiple values of the same type in a single variable.

• Array type and size must be specified when declared
• Elements are accessed using an index starting from zero
• Arrays have fixed size after initialization

Examples of array usage:
- Storing student lists
- Saving exam grades
- Storing a set of numbers`
    },
    commonErrors: {
        ar: [
            "محاولة الوصول إلى عنصر خارج نطاق المصفوفة (IndexOutOfBoundsException)",
            "نسيان أن الفهرس يبدأ من الصفر وليس الواحد",
            "محاولة تغيير حجم المصفوفة بعد التهيئة",
            "الخلط بين length (الخاصية) و length() (الدالة)"
        ],
        en: [
            "Trying to access an element outside the array bounds (IndexOutOfBoundsException)",
            "Forgetting that index starts from zero not one",
            "Trying to resize the array after initialization",
            "Confusing length (property) with length() (method)"
        ]
    },
    examples: {
        ar: `مثال 1: إنشاء مصفوفة وتعبئتها
int[] numbers = new int[5]; // مصفوفة أعداد صحيحة بسعة 5
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

مثال 2: إنشاء مصفوفة مع قيم مبدئية
String[] names = {"أحمد", "محمد", "علي", "فاطمة"};

مثال 3: المرور على عناصر المصفوفة
for (int i = 0; i < numbers.length; i++) {
    System.out.println("العنصر " + i + ": " + numbers[i]);
}`,
        en: `Example 1: Creating and populating an array
int[] numbers = new int[5]; // Integer array with capacity of 5
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
numbers[3] = 40;
numbers[4] = 50;

Example 2: Creating array with initial values
String[] names = {"Ahmed", "Mohammad", "Ali", "Fatima"};

Example 3: Iterating through array elements
for (int i = 0; i < numbers.length; i++) {
    System.out.println("Element " + i + ": " + numbers[i]);
}`
    },
    concepts: {
        ar: [
            "تعريف المصفوفات بأنواعها المختلفة",
            "الوصول إلى عناصر المصفوفة والتعديل عليها",
            "المرور على عناصر المصفوفة باستخدام الحلقات",
            "المصفوفات متعددة الأبعاد",
            "الفرق بين المصفوفات والقوائم (Arrays vs Lists)"
        ],
        en: [
            "Defining arrays of different types",
            "Accessing and modifying array elements",
            "Iterating through array elements using loops",
            "Multi-dimensional arrays",
            "Difference between arrays and lists"
        ]
    },
    codeExample: `public class ArraysExample {
    public static void main(String[] args) {
        // إنشاء مصفوفة أعداد صحيحة
        int[] numbers = new int[5];
        
        // تعبئة المصفوفة
        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = (i + 1) * 10;
        }
        
        // طباعة عناصر المصفوفة
        System.out.println("عناصر المصفوفة:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("numbers[" + i + "] = " + numbers[i]);
        }
        
        // إنشاء مصفوفة مع قيم مبدئية
        String[] names = {"أحمد", "محمد", "علي", "فاطمة"};
        
        // طباعة أسماء الطلاب
        System.out.println("\nأسماء الطلاب:");
        for (String name : names) {
            System.out.println(name);
        }
        
        // مصفوفة ثنائية الأبعاد
        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        
        // طباعة المصفوفة الثنائية
        System.out.println("\nالمصفوفة الثنائية:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}`,
    quizQuestion: {
        ar: "ما هو الناتج عند محاولة الوصول إلى العنصر numbers[5] في مصفوفة بحجم 5؟",
        en: "What is the result of trying to access element numbers[5] in an array of size 5?"
    },
    quizOptions: {
        ar: ["خطأ IndexOutOfBoundsException", "القيمة 0", "القيمة null", "القيمة 5"],
        en: ["IndexOutOfBoundsException error", "Value 0", "Value null", "Value 5"]
    },
    correctAnswer: "خطأ IndexOutOfBoundsException",
    resources: [
        {
            title: {
                ar: "دليل المصفوفات في جافا",
                en: "Java Arrays Guide"
            },
            url: "https://www.w3schools.com/java/java_arrays.asp",
            description: {
                ar: "شرح مفصل للمصفوفات في جافا مع أمثلة",
                en: "Detailed explanation of arrays in Java with examples"
            }
        }
    ]
},

7: {
    title: {
        ar: "المستوى 7: الوظائف (Methods)",
        en: "Level 7: Methods"
    },
    description: {
        ar: "في هذا المستوى، ستتعلم كيفية إنشاء واستدعاء الوظائف (Methods) في جافا لتنظيم الكود وإعادة استخدامه.",
        en: "In this level, you will learn how to create and call methods in Java to organize and reuse code."
    },
    theory: {
        ar: `الوظائف (Methods) هي كتل من التعليمات البرمجية التي تؤدي مهمة محددة.

مميزات استخدام الوظائف:
• إعادة استخدام الكود: يمكن استدعاء الوظيفة多次اً
• تنظيم الكود: تقسيم البرنامج إلى أجزاء صغيرة يسهل فهمها
• تسهيل الصيانة: التعديل على وظيفة واحدة يؤثر على جميع الأماكن التي تستدعيها

أنواع الوظائف:
• وظائف ترجع قيمة (return type)
• وظائف لا ترجع قيمة (void)
• وظائف ذات معاملات (parameters)
• وظائف بدون معاملات`,
        en: `Methods are blocks of code that perform a specific task.

Advantages of using methods:
• Code reuse: Methods can be called multiple times
• Code organization: Dividing program into small understandable parts
• Easier maintenance: Modifying one method affects all places that call it

Types of methods:
• Methods that return a value (return type)
• Methods that don't return a value (void)
• Methods with parameters
• Methods without parameters`
    },
    commonErrors: {
        ar: [
            "نسيان كلمة return في الوظائف التي ترجع قيمة",
            "عدم مطابقة نوع المعاملات عند استدعاء الوظيفة",
            "الخلط بين المعاملات (Parameters) والوسائط (Arguments)",
            "محاولة استدعاء وظيفة غير موجودة أو غير مرئية"
        ],
        en: [
            "Forgetting the return statement in methods that return a value",
            "Not matching parameter types when calling a method",
            "Confusing parameters and arguments",
            "Trying to call a non-existent or invisible method"
        ]
    },
    examples: {
        ar: `مثال 1: وظيفة بسيطة بدون معاملات
public static void greet() {
    System.out.println("مرحباً بك!");
}

مثال 2: وظيفة مع معاملات
public static void greetPerson(String name) {
    System.out.println("مرحباً " + name + "!");
}

مثال 3: وظيفة ترجع قيمة
public static int addNumbers(int a, int b) {
    return a + b;
}

مثال 4: استدعاء الوظائف
greet(); // طباعة: مرحباً بك!
greetPerson("أحمد"); // طباعة: مرحباً أحمد!
int result = addNumbers(5, 3); // result = 8`,
        en: `Example 1: Simple method without parameters
public static void greet() {
    System.out.println("Welcome!");
}

Example 2: Method with parameters
public static void greetPerson(String name) {
    System.out.println("Hello " + name + "!");
}

Example 3: Method that returns a value
public static int addNumbers(int a, int b) {
    return a + b;
}

Example 4: Calling methods
greet(); // prints: Welcome!
greetPerson("Ahmed"); // prints: Hello Ahmed!
int result = addNumbers(5, 3); // result = 8`
    },
    concepts: {
        ar: [
            "بناء الوظائف في جافا",
            "المعاملات والوسائط (Parameters vs Arguments)",
            "كلمة return والقيم المرجعة",
            "نطاق المتغيرات (Variable Scope)",
            "التحميل الزائد للوظائف (Method Overloading)"
        ],
        en: [
            "Method structure in Java",
            "Parameters vs Arguments",
            "Return statement and return values",
            "Variable scope",
            "Method overloading"
        ]
    },
    codeExample: `public class MethodsExample {
    
    // وظيفة بدون معاملات وبدون قيمة مرجعة
    public static void printWelcome() {
        System.out.println("مرحباً بك في برنامج تعلم الجافا!");
    }
    
    // وظيفة مع معاملات وبدون قيمة مرجعة
    public static void printMessage(String message) {
        System.out.println("الرسالة: " + message);
    }
    
    // وظيفة مع معاملات وقيمة مرجعة
    public static int calculateSum(int a, int b) {
        return a + b;
    }
    
    // وظيفة مع قيمة مرجعة من نوع String
    public static String createGreeting(String name) {
        return "أهلاً وسهلاً بك " + name + "!";
    }
    
    // مثال على التحميل الزائد للوظائف (Method Overloading)
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    public static double multiply(double a, double b) {
        return a * b;
    }
    
    public static void main(String[] args) {
        // استدعاء الوظائف المختلفة
        printWelcome();
        printMessage("هذا مثال على الوظائف في جافا");
        
        int sum = calculateSum(15, 25);
        System.out.println("مجموع العددين: " + sum);
        
        String greeting = createGreeting("زيد");
        System.out.println(greeting);
        
        // استدعاء الوظائف المحملة زائداً
        int result1 = multiply(5, 4);
        double result2 = multiply(2.5, 3.5);
        
        System.out.println("نتيجة الضرب (أعداد صحيحة): " + result1);
        System.out.println("نتيجة الضرب (أعداد عشرية): " + result2);
        
        // مثال على نطاق المتغيرات
        int x = 10; // متغير يمكن استخدامه في جميع الوظائف في هذا الكلاس
        System.out.println("قيمة x في الدالة main: " + x);
    }
}`,
    quizQuestion: {
        ar: "ما هي الكلمة الأساسية المستخدمة لإرجاع قيمة من وظيفة في جافا؟",
        en: "Which keyword is used to return a value from a method in Java?"
    },
    quizOptions: {
        ar: ["return", "void", "break", "continue"],
        en: ["return", "void", "break", "continue"]
    },
    correctAnswer: "return",
    resources: [
        {
            title: {
                ar: "الوظائف في جافا",
                en: "Methods in Java"
            },
            url: "https://www.w3schools.com/java/java_methods.asp",
            description: {
                ar: "شرح مفصل للوظائف في جافا مع أمثلة عملية",
                en: "Detailed explanation of methods in Java with practical examples"
            }
        }
    ]
},

8: {
    title: {
        ar: "المستوى 8: البرمجة كائنية التوجه (OOP)",
        en: "Level 8: Object-Oriented Programming (OOP)"
    },
    description: {
        ar: "في هذا المستوى، ستتعلم أساسيات البرمجة كائنية التوجه في جافا بما في ذلك الكلاسات، الكائنات، والمبادئ الأساسية.",
        en: "In this level, you will learn the basics of object-oriented programming in Java including classes, objects, and fundamental principles."
    },
    theory: {
        ar: `البرمجة كائنية التوجه (OOP) هي نموذج برمجة يعتمد على مفهوم "الكائنات" التي تحتوي على بيانات ووظائف.

المبادئ الأساسية للبرمجة كائنية التوجه:
1. التجريد (Abstraction): إخفاء التفاصيل المعقدة وإظهار الوظائف الأساسية فقط
2. التغليف (Encapsulation): جمع البيانات والوظائف المتعلقة بها في وحدة واحدة وإخفاء تفاصيل التنفيذ
3. الوراثة (Inheritance): قدرة كلاس على ورادة خصائص ووظائف كلاس آخر
4. تعدد الأشكال (Polymorphism): قدرة الكائن على اتخاذ عدة أشكال

مفاهيم أساسية:
• الكلاس (Class): نموذج أو قالب لإنشاء الكائنات
• الكائن (Object): نسخة من الكلاس تحتوي على بيانات حقيقية
• السمات (Attributes): البيانات المخزنة في الكائن
• الوظائف (Methods): العمليات التي يمكن للكائن تنفيذها`,
        en: `Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects" that contain data and functions.

Basic principles of OOP:
1. Abstraction: Hiding complex details and showing only essential features
2. Encapsulation: Bundling data and related functions into a single unit and hiding implementation details
3. Inheritance: Ability of a class to inherit properties and functions from another class
4. Polymorphism: Ability of an object to take many forms

Basic concepts:
• Class: Blueprint or template for creating objects
• Object: Instance of a class containing actual data
• Attributes: Data stored in the object
• Methods: Operations that the object can perform`
    },
    commonErrors: {
        ar: [
            "الخلط بين الكلاس والكائن",
            "نسيان كلمة new عند إنشاء كائن جديد",
            "عدم تحديد مستوى الوصول المناسب للسمات (public, private, protected)",
            "محاولة الوصول إلى سمة خاصة من خارج الكلاس"
        ],
        en: [
            "Confusing class with object",
            "Forgetting the new keyword when creating a new object",
            "Not specifying appropriate access level for attributes (public, private, protected)",
            "Trying to access a private attribute from outside the class"
        ]
    },
    examples: {
        ar: `مثال 1: تعريف كلاس بسيط
public class Student {
    // السمات (Attributes)
    String name;
    int age;
    double grade;
    
    // الوظائف (Methods)
    public void displayInfo() {
        System.out.println("الاسم: " + name);
        System.out.println("العمر: " + age);
        System.out.println("الدرجة: " + grade);
    }
}

مثال 2: إنشاء كائنات واستخدامها
Student student1 = new Student();
student1.name = "أحمد";
student1.age = 20;
student1.grade = 95.5;
student1.displayInfo();

مثال 3: استخدام المنشئ (Constructor)
public class Car {
    String model;
    int year;
    
    // المنشئ
    public Car(String model, int year) {
        this.model = model;
        this.year = year;
    }
}

Car myCar = new Car("تويوتا", 2023);`,
        en: `Example 1: Defining a simple class
public class Student {
    // Attributes
    String name;
    int age;
    double grade;
    
    // Methods
    public void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Grade: " + grade);
    }
}

Example 2: Creating and using objects
Student student1 = new Student();
student1.name = "Ahmed";
student1.age = 20;
student1.grade = 95.5;
student1.displayInfo();

Example 3: Using constructor
public class Car {
    String model;
    int year;
    
    // Constructor
    public Car(String model, int year) {
        this.model = model;
        this.year = year;
    }
}

Car myCar = new Car("Toyota", 2023);`
    },
    concepts: {
        ar: [
            "الفرق بين الكلاس والكائن",
            "المنشئ (Constructor) واستخدام this",
            "مستويات الوصول (public, private, protected)",
            "الوظائف Getter و Setter",
            "مبدأ التغليف (Encapsulation)"
        ],
        en: [
            "Difference between class and object",
            "Constructor and this keyword usage",
            "Access levels (public, private, protected)",
            "Getter and Setter methods",
            "Encapsulation principle"
        ]
    },
    codeExample: `// تعريف كلاس الطالب
public class Student {
    // السمات مع مستوى وصول private
    private String name;
    private int age;
    private double grade;
    
    // المنشئ الافتراضي
    public Student() {
        this.name = "غير معروف";
        this.age = 0;
        this.grade = 0.0;
    }
    
    // منشئ مع معاملات
    public Student(String name, int age, double grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    
    // وظائف Getter و Setter
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        if (age > 0) {
            this.age = age;
        }
    }
    
    public double getGrade() {
        return grade;
    }
    
    public void setGrade(double grade) {
        if (grade >= 0 && grade <= 100) {
            this.grade = grade;
        }
    }
    
    // وظيفة لعرض المعلومات
    public void displayInfo() {
        System.out.println("معلومات الطالب:");
        System.out.println("الاسم: " + name);
        System.out.println("العمر: " + age);
        System.out.println("الدرجة: " + grade);
    }
    
    // وظيفة للتحقق إذا كان الطالب ناجحاً
    public boolean isPassed() {
        return grade >= 50;
    }
}

// الكلاس الرئيسي
public class OOPExample {
    public static void main(String[] args) {
        // إنشاء كائن باستخدام المنشئ الافتراضي
        Student student1 = new Student();
        student1.setName("أحمد");
        student1.setAge(20);
        student1.setGrade(85.5);
        
        // إنشاء كائن باستخدام المنشئ مع المعاملات
        Student student2 = new Student("محمد", 22, 92.0);
        
        // عرض معلومات الطلاب
        student1.displayInfo();
        System.out.println("هل نجح؟ " + student1.isPassed());
        System.out.println();
        
        student2.displayInfo();
        System.out.println("هل نجح؟ " + student2.isPassed());
        System.out.println();
        
        // مثال على تعديل البيانات
        student1.setGrade(45.0);
        System.out.println("بعد التعديل - الدرجة الجديدة: " + student1.getGrade());
        System.out.println("هل نجح الآن؟ " + student1.isPassed());
    }
}`,
    quizQuestion: {
        ar: "ما هو المبدأ الذي يتحقق باستخدام private للسمات و public للوظائف Getter/Setter؟",
        en: "Which principle is achieved by using private for attributes and public for Getter/Setter methods?"
    },
    quizOptions: {
        ar: ["التغليف (Encapsulation)", "الوراثة (Inheritance)", "تعدد الأشكال (Polymorphism)", "التجريد (Abstraction)"],
        en: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"]
    },
    correctAnswer: "التغليف (Encapsulation)",
    resources: [
        {
            title: {
                ar: "البرمجة كائنية التوجه في جافا",
                en: "OOP in Java"
            },
            url: "https://www.w3schools.com/java/java_oop.asp",
            description: {
                ar: "شرح شامل لمبادئ البرمجة كائنية التوجه في جافا",
                en: "Comprehensive guide to OOP principles in Java"
            }
        }
    ]
},

9: {
    title: {
        ar: "المستوى 9: تدريب على كتابة الأكواد",
        en: "Level 9: Code Writing Practice"
    },
    description: {
        ar: "في هذا المستوى، ستتدرب على كتابة أكواد جافا بسيطة وتصحيح الأخطاء. سيتم تقسيم الشاشة إلى أقسام لتسهيل عملية التعلم.",
        en: "In this level, you will practice writing simple Java code and debugging errors. The screen will be divided into sections to facilitate the learning process."
    },
    theory: {
        ar: `أهمية التدريب العملي على كتابة الأكواد:
• تطبيق المفاهيم النظرية بشكل عملي
• اكتساب الخبرة في حل المشكلات البرمجية
• تعلم كيفية تصحيح الأخطاء (Debugging)
• تطوير الأسلوب البرمجي الشخصي

نصائح للتدريب الفعال:
1. ابدأ بكتابة أكواد بسيطة ثم تدرج إلى الأكثر تعقيداً
2. حلل الأخطاء وفهم أسبابها بدلاً من نسخ الحلول
3. تدرب على قراءة وفهم أكواد الآخرين
4. استخدم أدوات التصحيح (Debugging Tools) لاكتشاف الأخطاء`,
        en: `Importance of practical code writing practice:
• Applying theoretical concepts practically
• Gaining experience in solving programming problems
• Learning how to debug errors
• Developing personal coding style

Tips for effective practice:
1. Start with simple codes then progress to more complex ones
2. Analyze errors and understand their causes instead of copying solutions
3. Practice reading and understanding others' code
4. Use debugging tools to discover errors`
    },
    commonErrors: {
        ar: [
            "نسيان الفاصلة المنقوطة في نهاية الجملة",
            "عدم مطابقة الأقواس المتعرجة { }",
            "الخلط بين الأحرف الكبيرة والصغيرة (Case Sensitivity)",
            "استخدام متغير غير معرّف",
            "نسيان استيراد المكتبات المطلوبة"
        ],
        en: [
            "Forgetting semicolons at the end of statements",
            "Not matching curly braces { }",
            "Confusing uppercase and lowercase letters (Case Sensitivity)",
            "Using undefined variables",
            "Forgetting to import required libraries"
        ]
    },
    examples: {
        ar: `مثال 1: كود به أخطاء يحتاج تصحيح
public class Main {
    public static void main(String[] args) {
        int x = 5
        int y = 10
        int sum = x + y
        System.out.println("المجموع: " + sum)
    }
}

مثال 2: الكود المصحح
public class Main {
    public static void main(String[] args) {
        int x = 5;
        int y = 10;
        int sum = x + y;
        System.out.println("المجموع: " + sum);
    }
}

مثال 3: كود أكثر تعقيداً للتدريب
public class Calculator {
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static double divide(int a, int b) {
        if (b == 0) {
            System.out.println("خطأ: القسمة على صفر!");
            return 0;
        }
        return (double) a / b;
    }
}`,
        en: `Example 1: Code with errors needs correction
public class Main {
    public static void main(String[] args) {
        int x = 5
        int y = 10
        int sum = x + y
        System.out.println("Sum: " + sum)
    }
}

Example 2: Corrected code
public class Main {
    public static void main(String[] args) {
        int x = 5;
        int y = 10;
        int sum = x + y;
        System.out.println("Sum: " + sum);
    }
}

Example 3: More complex code for practice
public class Calculator {
    public static int add(int a, int b) {
        return a + b;
    }
    
    public static double divide(int a, int b) {
        if (b == 0) {
            System.out.println("Error: Division by zero!");
            return 0;
        }
        return (double) a / b;
    }
}`
    },
    concepts: {
        ar: [
            "كتابة الأكواد من الصفر",
            "تصحيح الأخطاء الشائعة",
            "استخدام أدوات التصحيح",
            "قراءة وفهم الأكواد الجاهزة",
            "تحسين جودة الكود"
        ],
        en: [
            "Writing code from scratch",
            "Fixing common errors",
            "Using debugging tools",
            "Reading and understanding ready-made code",
            "Improving code quality"
        ]
    },
    codeExample: `// تدريب 1: حساب مجموع الأعداد من 1 إلى n
public class SumCalculator {
    public static void main(String[] args) {
        int n = 10;
        int sum = 0;
        
        for (int i = 1; i <= n; i++) {
            sum += i;
        }
        
        System.out.println("مجموع الأعداد من 1 إلى " + n + " هو: " + sum);
    }
}

// تدريب 2: التحقق من عدد أولي
public class PrimeChecker {
    public static void main(String[] args) {
        int number = 17;
        boolean isPrime = true;
        
        if (number <= 1) {
            isPrime = false;
        } else {
            for (int i = 2; i <= Math.sqrt(number); i++) {
                if (number % i == 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        
        if (isPrime) {
            System.out.println(number + " هو عدد أولي");
        } else {
            System.out.println(number + " ليس عدداً أولياً");
        }
    }
}

// تدريب 3: عكس نص
public class StringReverser {
    public static void main(String[] args) {
        String text = "مرحباً بالعالم";
        String reversed = "";
        
        for (int i = text.length() - 1; i >= 0; i--) {
            reversed += text.charAt(i);
        }
        
        System.out.println("النص الأصلي: " + text);
        System.out.println("النص المعكوس: " + reversed);
    }
}`,
    quizQuestion: {
        ar: "ما هو الخطأ في الكود التالي: int x = 5 int y = 10;",
        en: "What is the error in the following code: int x = 5 int y = 10;"
    },
    quizOptions: {
        ar: ["نسيان الفاصلة المنقوطة بعد x = 5", "المتغير x غير معرّف", "المتغير y غير معرّف", "لا يوجد خطأ"],
        en: ["Missing semicolon after x = 5", "Variable x is undefined", "Variable y is undefined", "No error"]
    },
    correctAnswer: "نسيان الفاصلة المنقوطة بعد x = 5",
    resources: [
        {
            title: {
                ar: "تدريب على كتابة الأكواد",
                en: "Code Writing Practice"
            },
            url: "https://www.w3schools.com/java/java_exercises.asp",
            description: {
                ar: "تمارين تفاعلية لكتابة الأكواد في جافا",
                en: "Interactive exercises for writing code in Java"
            }
        }
    ]
},

10: {
    title: {
        ar: "المستوى 10: مشروع متكامل",
        en: "Level 10: Complete Project"
    },
    description: {
        ar: "في هذا المستوى، ستطبق كل ما تعلمته في مشروع متكامل. سيتم تقسيم الشاشة إلى أقسام لتسهيل عملية التطوير.",
        en: "In this level, you will apply everything you've learned in a complete project. The screen will be divided into sections to facilitate the development process."
    },
    theory: {
        ar: `مشروع متكامل لتطبيق جميع مفاهيم جافا التي تعلمتها:

نظام إدارة الطلاب البسيط:
• إضافة طالب جديد
• عرض قائمة الطلاب
• البحث عن طالب
• تحديث معلومات الطالب
• حذف طالب

مكونات المشروع:
1. كلاس Student لتمثيل بيانات الطالب
2. كلاس StudentManagement لإدارة العمليات
3. واجهة المستخدم للتفاعل مع النظام

خطوات العمل:
1. تصميم هيكل المشروع والكلاسات
2. تنفيذ الوظائف الأساسية
3. اختبار المشروع وتصحيح الأخطاء
4. تحسين الكود وإضافة ميزات إضافية`,
        en: `Complete project to apply all Java concepts you've learned:

Simple Student Management System:
• Add new student
• Display student list
• Search for student
• Update student information
• Delete student

Project components:
1. Student class to represent student data
2. StudentManagement class to manage operations
3. User interface to interact with the system

Work steps:
1. Design project structure and classes
2. Implement basic functions
3. Test the project and fix errors
4. Improve code and add additional features`
    },
    commonErrors: {
        ar: [
            "عدم التخطيط الجيد للمشروع قبل البدء في الكتابة",
            "نسيان التعامل مع الحالات الشاذة (مثل الإدخال الخاطئ)",
            "عدم تقسيم المشروع إلى وحدات صغيرة",
            "إهمال اختبار كل جزء على حدة",
            "عدم توثيق الكود بشكل جيد"
        ],
        en: [
            "Not planning the project well before starting to write",
            "Forgetting to handle edge cases (like wrong input)",
            "Not dividing the project into small modules",
            "Neglecting to test each part separately",
            "Not documenting the code properly"
        ]
    },
    examples: {
        ar: `مثال 1: هيكل المشروع
StudentManagementSystem/
├── Student.java          // كلاس بيانات الطالب
├── StudentManager.java   // كلاس إدارة الطلاب
└── Main.java            // الكلاس الرئيسي

مثال 2: كلاس Student
public class Student {
    private int id;
    private String name;
    private int age;
    private String course;
    
    // المنشئ، getters، setters
}

مثال 3: وظائف الإدارة في StudentManager
public class StudentManager {
    private ArrayList<Student> students;
    
    public void addStudent(Student student) { ... }
    public void displayAllStudents() { ... }
    public Student findStudentById(int id) { ... }
    public void updateStudent(int id, Student newData) { ... }
    public void deleteStudent(int id) { ... }
}`,
        en: `Example 1: Project structure
StudentManagementSystem/
├── Student.java          // Student data class
├── StudentManager.java   // Student management class
└── Main.java            // Main class

Example 2: Student class
public class Student {
    private int id;
    private String name;
    private int age;
    private String course;
    
    // Constructor, getters, setters
}

Example 3: Management functions in StudentManager
public class StudentManager {
    private ArrayList<Student> students;
    
    public void addStudent(Student student) { ... }
    public void displayAllStudents() { ... }
    public Student findStudentById(int id) { ... }
    public void updateStudent(int id, Student newData) { ... }
    public void deleteStudent(int id) { ... }
}`
    },
    concepts: {
        ar: [
            "تخطيط المشروع وتصميم Architecture",
            "تنفيذ الوظائف الأساسية",
            "التعامل مع هياكل البيانات",
            "إدارة دورة حياة الكائنات",
            "واجهة المستخدم البسيطة"
        ],
        en: [
            "Project planning and architecture design",
            "Implementing basic functions",
            "Working with data structures",
            "Managing object lifecycle",
            "Simple user interface"
        ]
    },
    codeExample: `// Student.java
public class Student {
    private static int nextId = 1;
    
    private int id;
    private String name;
    private int age;
    private String course;
    
    public Student(String name, int age, String course) {
        this.id = nextId++;
        this.name = name;
        this.age = age;
        this.course = course;
    }
    
    // Getters and Setters
    public int getId() { return id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public int getAge() { return age; }
    public void setAge(int age) { this.age = age; }
    public String getCourse() { return course; }
    public void setCourse(String course) { this.course = course; }
    
    @Override
    public String toString() {
        return "ID: " + id + ", Name: " + name + ", Age: " + age + ", Course: " + course;
    }
}

// StudentManager.java
import java.util.ArrayList;
import java.util.Scanner;

public class StudentManager {
    private ArrayList<Student> students;
    private Scanner scanner;
    
    public StudentManager() {
        students = new ArrayList<>();
        scanner = new Scanner(System.in);
    }
    
    public void addStudent() {
        System.out.print("أدخل اسم الطالب: ");
        String name = scanner.nextLine();
        
        System.out.print("أدخل عمر الطالب: ");
        int age = scanner.nextInt();
        scanner.nextLine(); // consume newline
        
        System.out.print("أدخل التخصص: ");
        String course = scanner.nextLine();
        
        Student student = new Student(name, age, course);
        students.add(student);
        System.out.println("تم إضافة الطالب بنجاح!");
    }
    
    public void displayAllStudents() {
        if (students.isEmpty()) {
            System.out.println("لا يوجد طلاب مسجلين.");
            return;
        }
        
        System.out.println("قائمة جميع الطلاب:");
        for (Student student : students) {
            System.out.println(student);
        }
    }
    
    public void findStudent() {
        System.out.print("أدخل رقم ID الطالب: ");
        int id = scanner.nextInt();
        scanner.nextLine(); // consume newline
        
        for (Student student : students) {
            if (student.getId() == id) {
                System.out.println("تم العثور على الطالب:");
                System.out.println(student);
                return;
            }
        }
        
        System.out.println("لم يتم العثور على طالب بهذا ID.");
    }
    
    public void run() {
        boolean running = true;
        
        while (running) {
            System.out.println("\n--- نظام إدارة الطلاب ---");
            System.out.println("1. إضافة طالب");
            System.out.println("2. عرض جميع الطلاب");
            System.out.println("3. البحث عن طالب");
            System.out.println("4. الخروج");
            System.out.print("اختر الخيار: ");
            
            int choice = scanner.nextInt();
            scanner.nextLine(); // consume newline
            
            switch (choice) {
                case 1:
                    addStudent();
                    break;
                case 2:
                    displayAllStudents();
                    break;
                case 3:
                    findStudent();
                    break;
                case 4:
                    running = false;
                    System.out.println("شكراً لاستخدامك النظام. إلى اللقاء!");
                    break;
                default:
                    System.out.println("خيار غير صحيح. حاول مرة أخرى.");
            }
        }
    }
}

// Main.java
public class Main {
    public static void main(String[] args) {
        StudentManager manager = new StudentManager();
        manager.run();
    }
}`,
    quizQuestion: {
        ar: "ما هو أول شيء يجب عمله عند بدء مشروع برمجي؟",
        en: "What is the first thing to do when starting a programming project?"
    },
    quizOptions: {
        ar: ["التخطيط وتصميم هيكل المشروع", "كتابة الكود مباشرة", "اختبار المشروع", "توثيق الكود"],
        en: ["Planning and designing project structure", "Writing code directly", "Testing the project", "Documenting the code"]
    },
    correctAnswer: "التخطيط وتصميم هيكل المشروع",
    resources: [
        {
            title: {
                ar: "مشاريع جافا للمبتدئين",
                en: "Java Projects for Beginners"
            },
            url: "https://www.w3schools.com/java/java_projects.asp",
            description: {
                ar: "أفكار مشاريع متنوعة لتطبيق مفاهيم جافا",
                en: "Various project ideas to apply Java concepts"
            }
        }
    ]
}


};

// MODIFIED: Expanded translation data
const translations = {
    ar: {
        // Navigation
        home: "الرئيسية",
        about: "عني",
        levels: "المستويات",
        faq: "الأسئلة الشائعة",
        contact: "اتصل بنا",
        menu: "القائمة",
        
        // Hero section
        heroTitle1: "أتقن",
        javaWord: "جافا",
        heroTitle2: "مع زيد",
        heroDescription: "تعلم لغة جافا من الأساسيات إلى المفاهيم المتقدمة مع دروس تفاعلية واختبارات مصممة خصيصًا لك",
        startNow: "ابدأ الآن",
        watchIntro: "شاهد المقدمة",
        
        // Features section
        whyChoose: "لماذا تختار Zaid.java؟",
        interactiveLearning: "تعلم تفاعلي",
        interactiveLearningDesc: "تعلم جافا من خلال أمثلة عملية وتمارين تفاعلية مصممة للمبتدئين والمتقدمين على حد سواء.",
        structuredCurriculum: "منهج منظم",
        structuredCurriculumDesc: "تقدم عبر مستويات مصممة بعناية، من أنواع البيانات الأساسية إلى مفاهيم البرمجة الشيئية المتقدمة.",
        progressTracking: "تتبع التقدم",
        progressTrackingDesc: "أكمل الاختبارات واحصل على ملاحظات شخصية أثناء إتقانك لكل مفهوم برمجي في رحلتك التعليمية.",
        
        // Stats section
        stats: "إحصائيات الموقع",
        educationalLevels: "مستوى تعليمي",
        interactiveExercises: "تمرين تفاعلي",
        learningHours: "ساعة تعليمية",
        supportAvailable: "دعم متاح",
        
        // Levels section
        javaLevels: "مستويات تعلم جافا",
        dataTypes: "أنواع البيانات والإدخال",
        dataTypesDesc: "تعلم الأنواع الأساسية وكيفية استقبال مدخلات من المستخدم",
        variables: "المتغيرات والتعبيرات",
        variablesDesc: "فهم كيفية تخزين البيانات في متغيرات واستخدام التعبيرات",
        operators: "المعاملات",
        operatorsDesc: "تعرف على المعاملات الحسابية، المنطقية، والمقارنة",
        controlFlow: "التحكم بالتدفق",
        controlFlowDesc: "تعلم استخدام الجمل الشرطية والتفرعات",
        loops: "الحلقات التكرارية",
        loopsDesc: "فهم واستخدام الحلقات التكرارية في جافا",
        arrays: "المصفوفات",
        arraysDesc: "تعلم كيفية التعامل مع المصفوفات في جافا",
        methods: "الوظائف (Methods)",
        methodsDesc: "تعلم كيفية إنشاء واستدعاء الوظائف في جافا",
        oop: "البرمجة كائنية التوجه (OOP)",
        oopDesc: "فهم أساسيات البرمجة كائنية التوجه في جافا",
        codePractice: "تدريب على كتابة الأكواد",
        codePracticeDesc: "تدرب على كتابة أكواد جافا بسيطة وتصحيح الأخطاء",
        project: "مشروع متكامل",
        projectDesc: "تطبيق كل ما تعلمته في مشروع متكامل",
        viewAllLevels: "عرض جميع المستويات",
        startLearning: "ابدأ التعلم",
        
        // Testimonials
        testimonials: "آراء المتعلمين",
        studentName1: "محمد",
        studentName2: "سارة",
        studentName3: "علي",
        webDeveloper: "مطور ويب",
        testimonial1: "\"منصة رائعة لتعلم جافا، ساعدتني في فهم المفاهيم الصعبة بسهولة من خلال الأمثلة التفاعلية.\"",
        csStudent: "طالبة علوم حاسوب",
        testimonial2: "\"المستويات منظمة بشكل ممتاز، والتمارين ساعدتني في اجتياز امتحان البرمجة بنجاح.\"",
        beginner: "مبتدئ في البرمجة",
        testimonial3: "\"كمبتدئ، وجدت الدروس سهلة الفهم والتقدم التدريجي ساعدني في بناء أساس قوي في جافا.\"",
        
        // CTA section
        readyToStart: "هل أنت مستعد لبدء رحلتك في جافا؟",
        ctaDescription: "انضم إلى الكثير من المتعلمين الذين أتقنوا برمجة جافا من خلال منصتنا التفاعلية",
        startLearningNow: "ابدأ التعلم الآن",
        
        // About page
        aboutZaid: "عن زيد أبو الشعر",
        zaidName: "زيد أبو الشعر",
        aboutDescription1: "طالب علوم حاسوب متحمس ومطور AR/VR/AI (الأول على دفعته مع مرتبة الشرف). بارع في جافا، C#، جافا سكريبت، HTML، CSS، PHP. ذو خبرة في تطبيقات الرعاية الصحية بتقنية XR، ومشاريع الذكاء الاصطناعي (الاتصالات)، وتصميم/نمذجة الويب.",
        aboutDescription2: "مطور عضوية MD في فرع طلاب IEEE بجامعة البتراء، حيث أساهم في دعم نمو الفرع من خلال الفعاليات ومشاركة الأعضاء. عضو مؤسس لنادي الواقع الافتراضي والألعاب بجامعة البتراء.",
        skills: "مهارات وخبرات",
        programming: "البرمجة",
        advancedLevel: "مستوى متقدم",
        education: "التعليم",
        educationItem1: "بكالوريوس علوم الحاسوب \\الواقع الافتراضي والمعزز - جامعة البتراء",
        educationItem2: "الأول على الدفعة مع مرتبة الشرف",
        educationItem3: "دورات متقدمة في الذكاء الاصطناعي",
        experience: "الخبرات",
        experienceItem1: "مطور تطبيقات AR/VR",
        experienceItem2: "مطور مشاريع الذكاء الاصطناعي",
        experienceItem3: "مطور عضوية MD - IEEE",
        achievements: "الإنجازات",
        achievementItem1: "الأول على الدفعة في جامعة البتراء",
        achievementItem2: "مؤسس نادي الواقع الافتراضي والألعاب",
        achievementItem3: "مساهم رئيسي في فعاليات IEEE",
        
        // Levels page
        tenLevels: "10 مستويات لتعلم جافا",
        levelNumber1: "المستوى 1",
        levelNumber2: "المستوى 2",
        levelNumber3: "المستوى 3",
        levelNumber4: "المستوى 4",
        levelNumber5: "المستوى 5",
        levelNumber6: "المستوى 6",
        levelNumber7: "المستوى 7",
        levelNumber8: "المستوى 8",
        levelNumber9: "المستوى 9",
        levelNumber10: "المستوى 10",
        
        // FAQ page
        faqTitle: "الأسئلة الشائعة",
        faq1Question: "ما هي أنواع البيانات الأساسية في جافا؟",
        faq1Answer1: "أنواع البيانات الأساسية في جافا تشمل:",
        faq1ListItem1: "الأعداد الصحيحة (int): مثل 5, 10, -3",
        faq1ListItem2: "الأعداد العشرية (double): مثل 3.14, 2.5, -0.5",
        faq1ListItem3: "السلاسل النصية(الكلمات) (String): مثل \"مرحباً\", \"جافا\"",
        faq1ListItem4: "القيم المنطقية (boolean): true أو false",
        faq2Question: "كيف يمكنني أخذ مدخلات من المستخدم؟",
        faq2Answer1: "يمكنك استخدام الكلاس Scanner لأخذ مدخلات من المستخدم:",
        faq3Question: "ما الفرق بين المصفوفات (Arrays) والقوائم (Lists)؟",
        faq3Answer1: "الاختلافات الرئيسية:",
        faq3ListItem1: "المصفوفات (Arrays): حجم ثابت ولا يمكن تغيير حجمها بعد التهيئة",
        faq3ListItem2: "القوائم (Lists): حجم ديناميكي ويمكن إضافة/حذف العناصر بسهولة",
        faq4Question: "ما هي أهم مبادئ البرمجة كائنية التوجه (OOP) في جافا؟",
        faq4Answer1: "أهم مبادئ البرمجة كائنية التوجه في جافا هي:",
        faq4ListItem1: "التغليف (Encapsulation): إخفاء تفاصيل التنفيذ الداخلية",
        faq4ListItem2: "الوراثة (Inheritance): إعادة استخدام الكود من خلال إنشاء علاقات بين الفئات",
        faq4ListItem3: "تعدد الأشكال (Polymorphism): إمكانية تنفيذ نفس العملية بطرق مختلفة",
        faq4ListItem4: "التجريد (Abstraction): إخفاء التفاصيل المعقدة وإظهار الوظائف الأساسية فقط",
        faq5Question: "كيف يمكنني التعامل مع الملفات في جافا؟",
        faq5Answer1: "يمكن استخدام FileReader و FileWriter أو المكتبات الحديثة مثل java.nio.file:",
        faq6Question: "ما هي الاستثناءات (Exceptions) وكيف نتعامل معها في جافا؟",
        faq6Answer1: "استثناءات هي أحداث غير متوقعة تحدث أثناء تنفيذ البرنامج. يمكن التعامل معها باستخدام:",
        faq6ListItem1: "try-catch: للتعامل مع الاستثناءات عند حدوثها",
        faq6ListItem2: "throws: لنقل مسؤولية التعامل مع الاستثناء للدالة المستدعية",
        faq6ListItem3: "finally: لتنفيذ كود بغض النظر عن حدوث استثناء أم لا",
        
        // Contact page
        contactTitle: "اتصل بنا",
        stayInTouch: "ابقى على تواصل",
        contactDescription: "لديك استفسار أو تحتاج إلى مساعدة؟ لا تتردد في التواصل معنا. نحن هنا لمساعدتك في رحلتك التعليمية.",
        phoneWhatsapp: "الهاتف / واتساب",
        address: "العنوان",
        location: "عمان، الأردن",
        followUs: "تابعنا على",
        sendMessage: "أرسل رسالة",
        name: "الاسم",
        namePlaceholder: "اسمك",
        message: "الرسالة",
        messagePlaceholder: "اكتب رسالتك هنا...",
        sendViaWhatsapp: "إرسال عبر واتساب",
        
        // Level detail page
        backToLevels: "العودة للمستويات",
        levelDescription: "شرح المستوى",
        mainConcepts: "المفاهيم الرئيسية",
        codeExamples: "أمثلة التعليمات البرمجية",
        copyCode: "نسخ الكود",
        tryYourself: "جرب بنفسك",
        codeEditorPlaceholder: "اكتب كود جافا هنا...",
        run: "تشغيل",
        check: "تحقق",
        clear: "مسح",
        output: "الناتج:",
        error: "خطأ:",
        additionalResources: "الموارد الإضافية",
        testYourKnowledge: "اختبر معلوماتك",
        nextLevel: "المستوى التالي",
        
        // Intro page
        backToHome: "العودة للرئيسية",
        introTitle: "مقدمة لتعلم جافا",
        whatYouWillLearn: "ما ستتعلمه في هذه الدورة",
        introDescription: "في دورة تعلم جافا مع زيد، ستتمكن من إتقان أساسيات البرمجة بلغة جافا بدءًا من المفاهيم الأساسية وصولاً إلى التقنيات المتقدمة. ستتعلم كيفية بناء تطبيقات قوية وفعالة باستخدام أحدث إصدارات جافا.",
        introListItem1: "أساسيات لغة جافا وأنواع البيانات",
        introListItem2: "البرمجة الكائنية التوجه (OOP)",
        introListItem3: "التعامل مع الملفات وقواعد البيانات",
        introListItem4: "بناء واجهات المستخدم الرسومية",
        introListItem5: "برمجة الشبكات والتواصل",
        introListItem6: "تطوير تطبيقات الويب باستخدام جافا",
        startYourJourney: "ابدأ رحلتك الآن",
        
        // Footer
        footerDescription: "منصة تعليمية متخصصة في تعليم لغة جافا من الصفر إلى الاحتراف",
        quickLinks: "روابط سريعة",
        usefulLinks: "روابط مفيدة",
        blog: "المدونة",
        freeLessons: "الدروس المجانية",
        projectTemplates: "نماذج المشاريع",
        helpCenter: "مركز المساعدة",
        getInTouch: "تواصل معنا",
        allRightsReserved: "جميع الحقوق محفوظة",
        
        // Desktop popup
        desktopAdviceTitle: "نصيحة من زيد أبو الشعر",
        desktopAdviceMessage: "للحصول على أفضل تجربة تعليمية، ننصحك باستخدام الموقع من جهاز الحاسوب. ستحصل على واجهة أفضل وتجربة تعليمية أكثر تفاعلية ووضوحاً.",
        desktopAdviceButton: "فهمت، شكراً",

        // MODIFIED: New keys for i18n
        cSharpWord: "C#",
        javaScriptWord: "JavaScript",
        pythonWord: "Python"
    },
    en: {
        // Navigation
        home: "Home",
        about: "About",
        levels: "Levels",
        faq: "FAQ",
        contact: "Contact",
        menu: "Menu",
        
        // Hero section
        heroTitle1: "Master",
        javaWord: "Java",
        heroTitle2: "with Zaid",
        heroDescription: "Learn Java from basics to advanced concepts with interactive lessons and tests designed specifically for you",
        startNow: "Start Now",
        watchIntro: "Watch Intro",
        
        // Features section
        whyChoose: "Why Choose Zaid.java?",
        interactiveLearning: "Interactive Learning",
        interactiveLearningDesc: "Learn Java through practical examples and interactive exercises designed for both beginners and advanced learners.",
        structuredCurriculum: "Structured Curriculum",
        structuredCurriculumDesc: "Progress through carefully designed levels, from basic data types to advanced object-oriented programming concepts.",
        progressTracking: "Progress Tracking",
        progressTrackingDesc: "Complete tests and get personalized feedback as you master each programming concept on your learning journey.",
        
        // Stats section
        stats: "Site Statistics",
        educationalLevels: "Educational Level",
        interactiveExercises: "Interactive Exercise",
        learningHours: "Learning Hour",
        supportAvailable: "Support Available",
        
        // Levels section
        javaLevels: "Java Learning Levels",
        dataTypes: "Data Types and Input",
        dataTypesDesc: "Learn basic types and how to receive user input",
        variables: "Variables and Expressions",
        variablesDesc: "Understand how to store data in variables and use expressions",
        operators: "Operators",
        operatorsDesc: "Learn about arithmetic, logical, and comparison operators",
        controlFlow: "Control Flow",
        controlFlowDesc: "Learn to use conditional statements and branching",
        loops: "Loops",
        loopsDesc: "Understand and use loops in Java",
        arrays: "Arrays",
        arraysDesc: "Learn how to work with arrays in Java",
        methods: "Methods",
        methodsDesc: "Learn how to create and call methods in Java",
        oop: "Object-Oriented Programming (OOP)",
        oopDesc: "Understand the basics of object-oriented programming in Java",
        codePractice: "Code Writing Practice",
        codePracticeDesc: "Practice writing simple Java code and debugging errors",
        project: "Complete Project",
        projectDesc: "Apply everything you've learned in a complete project",
        viewAllLevels: "View All Levels",
        startLearning: "Start Learning",
        
        // Testimonials
        testimonials: "Student Testimonials",
        studentName1: "Mohammad",
        studentName2: "Sara",
        studentName3: "Ali",
        webDeveloper: "Web Developer",
        testimonial1: "\"A great platform for learning Java, helped me understand difficult concepts easily through interactive examples.\"",
        csStudent: "Computer Science Student",
        testimonial2: "\"The levels are excellently organized, and the exercises helped me pass the programming exam successfully.\"",
        beginner: "Programming Beginner",
        testimonial3: "\"As a beginner, I found the lessons easy to understand and the gradual progression helped me build a strong foundation in Java.\"",
        
        // CTA section
        readyToStart: "Ready to Start Your Java Journey?",
        ctaDescription: "Join the many learners who have mastered Java programming through our interactive platform",
        startLearningNow: "Start Learning Now",
        
        // About page
        aboutZaid: "About Zaid Abu Al Shaar",
        zaidName: "Zaid Abu Al Shaar",
        aboutDescription1: "An enthusiastic Computer Science student and AR/VR/AI developer (top of his class with honors). Proficient in Java, C#, JavaScript, HTML, CSS, PHP. Experienced in healthcare applications with XR technology, AI projects (communications), and web design/modeling.",
        aboutDescription2: "MD Membership Developer at the IEEE student branch at Petra University, where I contribute to supporting the branch's growth through events and member engagement. Founding member of the Virtual Reality and Games Club at Petra University.",
        skills: "Skills and Experience",
        programming: "Programming",
        advancedLevel: "Advanced Level",
        education: "Education",
        educationItem1: "Bachelor's in Computer Science \\ VR and AR - Petra University",
        educationItem2: "Top of the class with honors",
        educationItem3: "Advanced courses in Artificial Intelligence",
        experience: "Experience",
        experienceItem1: "AR/VR Applications Developer",
        experienceItem2: "AI Projects Developer",
        experienceItem3: "MD Membership Developer - IEEE",
        achievements: "Achievements",
        achievementItem1: "Top of the class at Petra University",
        achievementItem2: "Founder of Virtual Reality and Games Club",
        achievementItem3: "Key contributor to IEEE events",
        
        // Levels page
        tenLevels: "10 Levels to Learn Java",
        levelNumber1: "Level 1",
        levelNumber2: "Level 2",
        levelNumber3: "Level 3",
        levelNumber4: "Level 4",
        levelNumber5: "Level 5",
        levelNumber6: "Level 6",
        levelNumber7: "Level 7",
        levelNumber8: "Level 8",
        levelNumber9: "Level 9",
        levelNumber10: "Level 10",
        
        // FAQ page
        faqTitle: "Frequently Asked Questions",
        faq1Question: "What are the basic data types in Java?",
        faq1Answer1: "Basic data types in Java include:",
        faq1ListItem1: "Integers (int): e.g., 5, 10, -3",
        faq1ListItem2: "Decimals (double): e.g., 3.14, 2.5, -0.5",
        faq1ListItem3: "Text strings (String): e.g., \"Hello\", \"Java\"",
        faq1ListItem4: "Boolean values: true or false",
        faq2Question: "How can I take input from the user?",
        faq2Answer1: "You can use the Scanner class to take input from the user:",
        faq3Question: "What's the difference between Arrays and Lists?",
        faq3Answer1: "Main differences:",
        faq3ListItem1: "Arrays: Fixed size, cannot be resized after initialization",
        faq3ListItem2: "Lists: Dynamic size, elements can be easily added/removed",
        faq4Question: "What are the main principles of Object-Oriented Programming (OOP) in Java?",
        faq4Answer1: "The main principles of Object-Oriented Programming in Java are:",
        faq4ListItem1: "Encapsulation: Hiding internal implementation details",
        faq4ListItem2: "Inheritance: Reusing code by creating relationships between classes",
        faq4ListItem3: "Polymorphism: Ability to implement the same operation in different ways",
        faq4ListItem4: "Abstraction: Hiding complex details and showing only essential features",
        faq5Question: "How can I work with files in Java?",
        faq5Answer1: "You can use FileReader and FileWriter or modern libraries like java.nio.file:",
        faq6Question: "What are Exceptions and how do we handle them in Java?",
        faq6Answer1: "Exceptions are unexpected events that occur during program execution. They can be handled using:",
        faq6ListItem1: "try-catch: To handle exceptions when they occur",
        faq6ListItem2: "throws: To transfer exception handling responsibility to the calling method",
        faq6ListItem3: "finally: To execute code regardless of whether an exception occurs",
        
        // Contact page
        contactTitle: "Contact Us",
        stayInTouch: "Stay in Touch",
        contactDescription: "Have a question or need help? Don't hesitate to contact us. We're here to help you on your learning journey.",
        phoneWhatsapp: "Phone / WhatsApp",
        address: "Address",
        location: "Amman, Jordan",
        followUs: "Follow Us",
        sendMessage: "Send Message",
        name: "Name",
        namePlaceholder: "Your name",
        message: "Message",
        messagePlaceholder: "Write your message here...",
        sendViaWhatsapp: "Send via WhatsApp",
        
        // Level detail page
        backToLevels: "Back to Levels",
        levelDescription: "Level Description",
        mainConcepts: "Main Concepts",
        codeExamples: "Code Examples",
        copyCode: "Copy Code",
        tryYourself: "Try Yourself",
        codeEditorPlaceholder: "Write Java code here...",
        run: "Run",
        check: "Check",
        clear: "Clear",
        output: "Output:",
        error: "Error:",
        additionalResources: "Additional Resources",
        testYourKnowledge: "Test Your Knowledge",
        nextLevel: "Next Level",
        
        // Intro page
        backToHome: "Back to Home",
        introTitle: "Introduction to Learning Java",
        whatYouWillLearn: "What You Will Learn in This Course",
        introDescription: "In the Learn Java with Zaid course, you'll master Java programming fundamentals from basic concepts to advanced techniques. You'll learn how to build powerful and efficient applications using the latest Java versions.",
        introListItem1: "Java language basics and data types",
        introListItem2: "Object-Oriented Programming (OOP)",
        introListItem3: "Working with files and databases",
        introListItem4: "Building graphical user interfaces",
        introListItem5: "Network programming and communication",
        introListItem6: "Developing web applications with Java",
        startYourJourney: "Start Your Journey Now",
        
        // Footer
        footerDescription: "Educational platform specialized in teaching Java from scratch to professionalism",
        quickLinks: "Quick Links",
        usefulLinks: "Useful Links",
        blog: "Blog",
        freeLessons: "Free Lessons",
        projectTemplates: "Project Templates",
        helpCenter: "Help Center",
        getInTouch: "Get in Touch",
        allRightsReserved: "All Rights Reserved",
        python: "Python with Zaid",
        nextStep: "Next Step",
        
        // Desktop popup
        desktopAdviceTitle: "Advice from Zaid Abu Al Shaar",
        desktopAdviceMessage: "For the best learning experience, we recommend using the site from a computer. You'll get a better interface and a more interactive and clear learning experience.",
        desktopAdviceButton: "Understood, Thanks",

        // MODIFIED: New keys for i18n
        cSharpWord: "C#",
        javaScriptWord: "JavaScript",
        pythonWord: "Python"
    }
};

// MODIFIED: Global variables
let currentLanguage = 'ar';
let currentLevel = 1;
let currentPage = 'home';
let isCodeCorrect = false;

// MODIFIED: DOMContentLoaded handler
document.addEventListener('DOMContentLoaded', function() {
    // MODIFIED: Check if popup has been shown and manage its display
    if (!sessionStorage.getItem('popupShown')) {
        setTimeout(showPopup, 2000);
    }
    
    updateLanguage(currentLanguage);
    initNavigation();
    initScrollEffects();
    initContactForm();
    initHistory();

    // MODIFIED: Add event listeners for code editor buttons
    document.getElementById('check-btn')?.addEventListener('click', checkCode);
    document.getElementById('run-btn')?.addEventListener('click', runCode);
    document.getElementById('clear-btn')?.addEventListener('click', clearEditor);
});

// MODIFIED: Function to create and show popup dynamically
function showPopup() {
    const popupHTML = `
        <div id="desktop-popup" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex items-center justify-center z-[1000] backdrop-blur-sm">
            <div class="popup-content bg-primary-medium rounded-2xl p-8 max-w-xl w-[90%] text-center relative border-2 border-accent-color shadow-2xl">
                <button class="popup-close absolute top-4 right-4 text-text-secondary text-2xl transition-all hover:text-accent-color hover:rotate-90" onclick="closePopup()">
                    <i class="fas fa-times"></i>
                </button>
                <div class="popup-icon text-accent-color text-5xl mb-5">
                    <i class="fas fa-laptop"></i>
                </div>
                <h3 class="popup-title text-accent-color text-2xl mb-4" data-translate="desktopAdviceTitle"></h3>
                <p class="popup-message text-text-secondary text-lg mb-6 leading-relaxed" data-translate="desktopAdviceMessage"></p>
                <button class="btn-primary" onclick="closePopup()" data-translate="desktopAdviceButton"></button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', popupHTML);
    updateLanguage(currentLanguage);
}

// MODIFIED: Close popup and set session flag
function closePopup() {
    const popup = document.getElementById('desktop-popup');
    if (popup) {
        popup.remove();
        sessionStorage.setItem('popupShown', 'true');
    }
}

// تبديل اللغة
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    updateLanguage(currentLanguage);
    
    const langToggle = document.getElementById('lang-toggle');
    const langText = langToggle.querySelector('.lang-text');
    langText.textContent = currentLanguage === 'ar' ? 'EN' : 'AR';
    
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    
    if (currentPage === 'level-detail') {
        loadLevelDetail(currentLevel);
    }
}

// تحديث الترجمة في الصفحة
function updateLanguage(lang) {
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            if (element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translations[lang][key]);
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    
    const langToggle = document.getElementById('lang-toggle');
    const langText = langToggle.querySelector('.lang-text');
    if (langToggle && langText) {
        langText.textContent = lang === 'ar' ? 'EN' : 'AR';
    }
}

function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('open');
}

// MODIFIED: Navigation with History API
function navigateTo(page, level = null) {
    const url = `#${page}${level ? `-${level}` : ''}`;
    const state = { page, level };
    
    // Check if the current URL is the same to avoid redundant history entries
    if (window.location.hash !== url) {
        window.history.pushState(state, '', url);
    }

    renderPage(page, level);

    const mobileMenu = document.querySelector('.mobile-menu');
    if (mobileMenu && mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
    }
    
    window.scrollTo(0, 0);
}

// MODIFIED: Function to render the correct page content
function renderPage(page, level = null) {
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });

    const targetPage = document.getElementById(`${page}-page`);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPage = page;
        if (page === 'level-detail' && level) {
            currentLevel = level;
            loadLevelDetail(level);
        }
    }
}

// MODIFIED: Handle history navigation
function initHistory() {
    // MODIFIED: Use replaceState on first load
    const initialPage = 'home'; // Default page
    const initialLevel = null;
    if (!window.history.state) {
        window.history.replaceState({ page: initialPage, level: initialLevel }, '', window.location.hash || `#${initialPage}`);
    }

    window.addEventListener('popstate', function(event) {
        if (event.state) {
            renderPage(event.state.page, event.state.level);
        } else {
            // Reload if no state is available (e.g., direct URL navigation without a valid hash)
            location.reload();
        }
    });

    // Handle initial page load from URL hash
    const hash = window.location.hash.substring(1);
    if (hash) {
        if (hash.startsWith('level-detail-')) {
            const level = parseInt(hash.split('-')[2]);
            renderPage('level-detail', level);
        } else {
            renderPage(hash);
        }
    } else {
        renderPage('home');
    }
}

// MODIFIED: Updated function to load level details with new sections
function loadLevelDetail(level) {
    const levelData = levelsData[level];
    if (!levelData) return;
    
    const levelTitle = document.getElementById('level-title');
    levelTitle.textContent = levelData.title[currentLanguage];
    
    const levelDescription = document.getElementById('level-description');
    levelDescription.textContent = levelData.description[currentLanguage];
    
    // MODIFIED: Load theory section
    const levelTheory = document.getElementById('level-theory');
    levelTheory.textContent = levelData.theory[currentLanguage];
    
    // MODIFIED: Load common errors section
    const levelCommonErrors = document.getElementById('level-common-errors');
    levelCommonErrors.innerHTML = '';
    levelData.commonErrors[currentLanguage].forEach(error => {
        const li = document.createElement('li');
        li.textContent = error;
        li.classList.add('flex', 'items-start');
        li.innerHTML = '<span class="text-error mr-2">•</span>' + error;
        levelCommonErrors.appendChild(li);
    });
    
    // MODIFIED: Load examples section
    const levelExamples = document.getElementById('level-examples');
    levelExamples.textContent = levelData.examples[currentLanguage];
    
    const levelConcepts = document.getElementById('level-concepts');
    levelConcepts.innerHTML = '';
    levelData.concepts[currentLanguage].forEach(concept => {
        const li = document.createElement('li');
        li.textContent = concept;
        li.classList.add('flex', 'items-start');
        li.innerHTML = '<span class="text-accent-color mr-2">•</span>' + concept;
        levelConcepts.appendChild(li);
    });
    
    const levelCode = document.getElementById('level-code');
    levelCode.textContent = levelData.codeExample;
    
    const quizQuestion = document.getElementById('quiz-question');
    quizQuestion.textContent = levelData.quizQuestion[currentLanguage];
    
    const quizOptionsContainer = document.getElementById('quiz-options-container');
    quizOptionsContainer.innerHTML = '';
    levelData.quizOptions[currentLanguage].forEach(optionText => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'quiz-option fade-in';
        optionDiv.setAttribute('onclick', `selectAnswer(this, '${optionText.replace(/'/g, "\\'")}')`);
        optionDiv.innerHTML = `<div class="flex items-center justify-center"><span>${optionText}</span></div>`;
        quizOptionsContainer.appendChild(optionDiv);
    });

    const quizResult = document.getElementById('quiz-result');
    quizResult.classList.add('hidden');
    
    const codeEditorSection = document.getElementById('code-editor-section');
    if (level >= 9) {
        codeEditorSection.classList.remove('hidden');
        document.getElementById('run-btn').disabled = true;
    } else {
        codeEditorSection.classList.add('hidden');
    }
    
    const additionalResources = document.getElementById('additional-resources');
    additionalResources.innerHTML = '';
    
    levelData.resources.forEach(resource => {
        const resourceDiv = document.createElement('div');
        resourceDiv.className = 'resource-card card p-4 fade-in';
        resourceDiv.innerHTML = `
            <h5 class="text-lg font-bold text-white mb-2">${resource.title[currentLanguage]}</h5>
            <p class="text-text-secondary mb-3">${resource.description[currentLanguage]}</p>
            <a href="${resource.url}" target="_blank" class="text-accent-color hover:underline">
                ${currentLanguage === 'ar' ? 'عرض المورد' : 'View Resource'}
            </a>
        `;
        additionalResources.appendChild(resourceDiv);
    });
    
    setTimeout(() => {
        document.querySelectorAll('.fade-in').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

function selectAnswer(element, answer) {
    document.querySelectorAll('.quiz-option').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
    });
    
    element.classList.add('selected');
    
    const levelData = levelsData[currentLevel];
    const isCorrect = answer === levelData.correctAnswer;
    
    const quizResult = document.getElementById('quiz-result');
    const resultText = document.getElementById('result-text');
    
    if (isCorrect) {
        element.classList.add('correct');
        resultText.textContent = currentLanguage === 'ar' ? 'إجابة صحيحة! أحسنت!' : 'Correct answer! Well done!';
        resultText.className = 'text-xl font-bold text-success';
        quizResult.classList.remove('hidden');
        document.getElementById('next-level-btn').style.display = 'inline-block';
    } else {
        element.classList.add('incorrect');
        resultText.textContent = currentLanguage === 'ar' ? 'إجابة خاطئة! حاول مرة أخرى.' : 'Incorrect answer! Try again.';
        resultText.className = 'text-xl font-bold text-error';
        quizResult.classList.remove('hidden');
        document.getElementById('next-level-btn').style.display = 'none';
        
        setTimeout(() => {
            quizResult.classList.add('hidden');
            element.classList.remove('selected', 'incorrect');
        }, 2000);
    }
}

function goToNextLevel() {
    if (currentLevel < Object.keys(levelsData).length) {
        navigateTo('level-detail', currentLevel + 1);
    } else {
        navigateTo('levels');
    }
}

function copyCode() {
    const codeElement = document.getElementById('level-code');
    copyToClipboard(codeElement.textContent);
    showNotification(currentLanguage === 'ar' ? 'تم نسخ الكود بنجاح!' : 'Code copied successfully!', 'success');
}

function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification fixed top-4 right-4 px-4 py-3 rounded-lg shadow-lg z-50 transition-all transform translate-y-[-100px] ${type === 'success' ? 'bg-success text-primary-dark' : 'bg-error text-white'}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.remove('translate-y-[-100px]');
        notification.classList.add('translate-y-0');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('translate-y-0');
        notification.classList.add('translate-y-[-100px]');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// MODIFIED: Run code logic
function runCode() {
    if (!isCodeCorrect) {
        checkCode();
        return;
    }
    
    const codeEditor = document.getElementById('code-editor');
    const codeOutput = document.getElementById('code-output');
    const codeError = document.getElementById('code-error');
    const outputText = document.getElementById('output-text');
    const errorText = document.getElementById('error-text');
    
    codeOutput.classList.add('hidden');
    codeError.classList.add('hidden');
    
    try {
        const code = codeEditor.value;
        const outputLines = [];
        
        // Simple simulation of System.out.println
        const printStatements = code.match(/System\.out\.println\(([^)]*)\);/g);
        if (printStatements) {
            printStatements.forEach(statement => {
                const content = statement.match(/\(([^)]*)\)/)[1];
                let processedContent = content;

                // Simple variable simulation
                const vars = {};
                code.split(';').forEach(line => {
                    const trimmedLine = line.trim();
                    if (trimmedLine.startsWith('int') || trimmedLine.startsWith('double') || trimmedLine.startsWith('String')) {
                        const parts = trimmedLine.split('=');
                        if (parts.length > 1) {
                            const varName = parts[0].trim().split(' ')[1];
                            const varValue = parts[1].trim();
                            vars[varName] = varValue;
                        }
                    }
                });

                // Replace variables in output
                for (const varName in vars) {
                    const regex = new RegExp(`\\+${varName}\\b`, 'g');
                    processedContent = processedContent.replace(regex, ` + ${vars[varName]}`);
                }

                // Simple evaluation of expressions
                const evalRegex = /(?:(\".*?\")\s*\+\s*)*([a-zA-Z_]\w*|[0-9]+(?:\.[0-9]+)?)\s*(?:\s*([+\-*/%])\s*([a-zA-Z_]\w*|[0-9]+(?:\.[0-9]+)?))*/g;
                let evalResult = '';
                let match;
                
                while ((match = evalRegex.exec(processedContent)) !== null) {
                    const [fullMatch, quotedString, firstTerm, operator, secondTerm] = match;
                    
                    if (quotedString) {
                        evalResult += quotedString.replace(/"/g, '');
                    }

                    if (firstTerm) {
                        let termValue = isNaN(firstTerm) ? vars[firstTerm] : firstTerm;
                        if (operator && secondTerm) {
                            let secondTermValue = isNaN(secondTerm) ? vars[secondTerm] : secondTerm;
                            const expr = `${termValue}${operator}${secondTermValue}`;
                            termValue = eval(expr);
                        }
                        evalResult += termValue;
                    }
                }

                outputLines.push(evalResult);
            });
        }
        
        if (outputLines.length > 0) {
            outputText.textContent = outputLines.join('\n');
            codeOutput.classList.remove('hidden');
        } else {
            outputText.textContent = currentLanguage === 'ar' ? 'لا يوجد ناتج للعرض' : 'No output to display';
            codeOutput.classList.remove('hidden');
        }
    } catch (error) {
        errorText.textContent = currentLanguage === 'ar' ? 'حدث خطأ غير متوقع: ' + error.message : 'An unexpected error occurred: ' + error.message;
        codeError.classList.remove('hidden');
    }
}

// MODIFIED: Check code logic
function checkCode() {
    const codeEditor = document.getElementById('code-editor');
    const codeError = document.getElementById('code-error');
    const errorText = document.getElementById('error-text');
    const runBtn = document.getElementById('run-btn');

    codeError.classList.add('hidden');
    isCodeCorrect = false;
    runBtn.disabled = true;

    const code = codeEditor.value.trim();
    if (code === '') {
        errorText.textContent = currentLanguage === 'ar' ? 'المحرر فارغ! الرجاء كتابة بعض الأكواد.' : 'Editor is empty! Please write some code.';
        codeError.classList.remove('hidden');
        return;
    }

    const errors = [];
    if (!code.includes('class')) {
        errors.push(currentLanguage === 'ar' ? 'يجب أن يحتوي الكود على تعريف class.' : 'Code must contain a class definition.');
    }
    if (!code.includes('main(')) {
        errors.push(currentLanguage === 'ar' ? 'الكود لا يحتوي على دالة main.' : 'Code does not contain a main method.');
    }
    if (!code.includes('System.out.println')) {
        errors.push(currentLanguage === 'ar' ? 'يجب أن يحتوي الكود على جملة طباعة.' : 'Code must contain a print statement.');
    }
    if (code.includes(';')) {
        const lines = code.split(';');
        for (let i = 0; i < lines.length - 1; i++) {
            if (lines[i].trim().slice(-1) === ')') {
                continue; // Allow methods to end with a semicolon
            }
            if (!lines[i].trim().endsWith(')') && !lines[i].trim().endsWith('}')) {
                // A simple check for misplaced semicolons
                // Note: This is a very basic check and can be improved
                const lineNum = i + 1;
                if (currentLanguage === 'ar') {
                    errors.push(`خطأ في السطر ${lineNum}: فاصلة منقوطة غير متوقعة.`);
                } else {
                    errors.push(`Error on line ${lineNum}: Unexpected semicolon.`);
                }
            }
        }
    }

    if (errors.length > 0) {
        errorText.innerHTML = errors.join('<br>');
        codeError.classList.remove('hidden');
        isCodeCorrect = false;
    } else {
        showNotification(currentLanguage === 'ar' ? 'الكود صحيح! الآن يمكنك تشغيله.' : 'Code is correct! Now you can run it.', 'success');
        isCodeCorrect = true;
        runBtn.disabled = false;
    }
}

function clearEditor() {
    const codeEditor = document.getElementById('code-editor');
    const codeOutput = document.getElementById('code-output');
    const codeError = document.getElementById('code-error');
    const runBtn = document.getElementById('run-btn');

    codeEditor.value = '';
    codeOutput.classList.add('hidden');
    codeError.classList.add('hidden');
    runBtn.disabled = true;
    isCodeCorrect = false;
    
    showNotification(currentLanguage === 'ar' ? 'تم مسح المحرر!' : 'Editor cleared!', 'success');
}

function initScrollEffects() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        observer.observe(element);
    });
    
    const backToTopButton = document.getElementById('back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTopButton.classList.remove('opacity-0', 'invisible');
            backToTopButton.classList.add('opacity-100', 'visible');
        } else {
            backToTopButton.classList.remove('opacity-100', 'visible');
            backToTopButton.classList.add('opacity-0', 'invisible');
        }
    });
    
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const message = document.getElementById('message').value;
            
            if (name && message) {
                const encodedMessage = encodeURIComponent(message);
                const encodedName = encodeURIComponent(name);
                
                const whatsappUrl = `https://wa.me/962799569573?text=مرحباً، أنا ${encodedName}%0A${encodedMessage}`;
                
                window.open(whatsappUrl, '_blank');
                
                contactForm.reset();
                
                showNotification(currentLanguage === 'ar' ? 'تم إعداد الرسالة! سيتم فتح واتساب.' : 'Message prepared! WhatsApp will open.', 'success');
            } else {
                showNotification(currentLanguage === 'ar' ? 'الرجاء ملء جميع الحقول!' : 'Please fill all fields!', 'error');
            }
        });
    }
}

function initNavigation() {
    document.querySelectorAll('a[onclick^="navigateTo"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const [page, level] = this.getAttribute('onclick').match(/navigateTo\('([^']*)'(?:,\s*(\d+))?\)/).slice(1);
            navigateTo(page, level ? parseInt(level) : null);
        });
    });
}

function toggleFAQ(index) {
    const faqContent = document.getElementById(`faq-content-${index}`);
    const faqIcon = document.getElementById(`faq-icon-${index}`);
    
    faqContent.classList.toggle('hidden');
    faqIcon.classList.toggle('rotate-180');
}

