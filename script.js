// بيانات المستويات والأسئلة والموارد
const levelsData = {
    1: {
        title: "المستوى 1: أنواع البيانات والإدخال",
        description: "في هذا المستوى، ستتعلم أساسيات التعامل مع البيانات في جافا. سنتعرف على الأنواع الرئيسية مثل الأعداد الصحيحة (int)، الأعداد العشرية (double)، السلاسل النصية (String)، والقيم المنطقية (boolean). الأهم من ذلك، ستتعلم كيفية جعل برنامجك يتفاعل مع المستخدم عبر استقبال المدخلات باستخدام `Scanner`.",
        concepts: [
            "أنواع البيانات الأساسية في جافا",
            "الفرق بين int و double",
            "كيفية التعامل مع النصوص (String)",
            "القيم المنطقية (true/false)",
            "استخدام Scanner لقراءة المدخلات"
        ],
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
        quizQuestion: "ما هي الكلاس المستخدم لأخذ مدخلات من المستخدم في جافا؟",
        quizOptions: ["Scanner", "Input", "Reader", "System.in"],
        correctAnswer: "Scanner",
        resources: [
            {
                title: "أنواع البيانات في جافا",
                url: "https://www.w3schools.com/java/java_data_types.asp",
                description: "شرح مفصل لأنواع البيانات الأساسية في جافا مع أمثلة"
            },
            {
                title: "أخذ المدخلات من المستخدم",
                url: "https://www.w3schools.com/java/java_user_input.asp",
                description: "كيفية استخدام Scanner لأخذ المدخلات من المستخدم"
            }
        ]
    },
    2: {
        title: "المستوى 2: المتغيرات والتعبيرات",
        description: "في هذا المستوى، ستتعلم كيفية تخزين البيانات في المتغيرات واستخدام التعبيرات الحسابية والمنطقية. سنتعرف على قواعد تسمية المتغيرات وكيفية استخدامها في التعبيرات المختلفة.",
        concepts: [
            "تعريف المتغيرات في جافا",
            "قواعد تسمية المتغيرات",
            "التعبيرات الحسابية",
            "التعبيرات المنطقية",
            "أسبقية العمليات"
        ],
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
        System.out.println("هل x أصغر من y؟ " + isLess);
    }
}`,
        quizQuestion: "ما هو ناتج العملية الحسابية: 10 % 3؟",
        quizOptions: ["1", "0", "3", "10"],
        correctAnswer: "1",
        resources: [
            {
                title: "المتغيرات في جافا",
                url: "https://www.w3schools.com/java/java_variables.asp",
                description: "شرح شامل للمتغيرات في جافا وكيفية استخدامها"
            },
            {
                title: "التعبيرات الحسابية",
                url: "https://www.w3schools.com/java/java_operators.asp",
                description: "دليل شامل للمعاملات الحسابية في جافا"
            }
        ]
    },
    3: {
        title: "المستوى 3: المعاملات",
        description: "في هذا المستوى، ستتعرف على أنواع المعاملات المختلفة في جافا وكيفية استخدامها في التعبيرات المنطقية والحسابية.",
        concepts: [
            "المعاملات الحسابية (+, -, *, /, %)",
            "المعاملات المنطقية (&&, ||, !)",
            "المعاملات المقارنة (==, !=, >, <, >=, <=)",
            "المعاملات المختصرة (+=, -=, *=, /=)",
            "أسبقية المعاملات"
        ],
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
    }
}`,
        quizQuestion: "ما هو ناتج العملية: (10 > 5) && (3 < 2)؟",
        quizOptions: ["true", "false", "خطأ في الصياغة", "null"],
        correctAnswer: "false",
        resources: [
            {
                title: "المعاملات في جافا",
                url: "https://www.w3schools.com/java/java_operators.asp",
                description: "دليل شامل لجميع أنواع المعاملات في جافا"
            },
            {
                title: "أسبقية المعاملات",
                url: "https://www.w3schools.com/java/java_operators_precedence.asp",
                description: "ترتيب تنفيذ المعاملات في التعبيرات المعقدة"
            }
        ]
    },
    4: {
        title: "المستوى 4: التحكم بالتدفق",
        description: "في هذا المستوى، ستتعلم كيفية التحكم في تدفق البرنامج باستخدام الجمل الشرطية والتفرعات.",
        concepts: [
            "الجملة الشرطية if",
            "الجملة الشرطية if-else",
            "الجملة الشرطية if-else if-else",
            "الجملة الشرطية switch",
            "التعبير الشرطي (ternary operator)"
        ],
        codeExample: `import java.util.Scanner;

public class ControlFlowExample {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("أدخل درجة الحرارة: ");
        int temperature = scanner.nextInt();
        
        // استخدام if-else if-else
        if (temperature > 30) {
            System.out.println("الجو حار جدًا!");
        } else if (temperature > 20) {
            System.out.println("الجو معتدل");
        } else {
            System.out.println("الجو بارد");
        }
        
        // استخدام switch
        System.out.print("أدخل رقم اليوم (1-7): ");
        int dayNumber = scanner.nextInt();
        
        switch(dayNumber) {
            case 1:
                System.out.println("الإثنين");
                break;
            case 2:
                System.out.println("الثلاثاء");
                break;
            case 3:
                System.out.println("الأربعاء");
                break;
            case 4:
                System.out.println("الخميس");
                break;
            case 5:
                System.out.println("الجمعة");
                break;
            case 6:
                System.out.println("السبت");
                break;
            case 7:
                System.out.println("الأحد");
                break;
            default:
                System.out.println("رقم غير صحيح!");
        }
    }
}`,
        quizQuestion: "أي من الجمل التالية تستخدم للخروج من حالة switch؟",
        quizOptions: ["break", "continue", "return", "exit"],
        correctAnswer: "break",
        resources: [
            {
                title: "الجمل الشرطية في جافا",
                url: "https://www.w3schools.com/java/java_conditions.asp",
                description: "شرح مفصل للجمل الشرطية if و switch"
            },
            {
                title: "الجمل الشرطية المتداخلة",
                url: "https://www.w3schools.com/java/java_conditions_shorthand.asp",
                description: "كيفية استخدام الجمل الشرطية المتداخلة بشكل فعال"
            }
        ]
    },
    5: {
        title: "المستوى 5: الحلقات التكرارية",
        description: "في هذا المستوى، ستتعلم كيفية استخدام الحلقات التكرارية في جافا لتنفيذ مهام متكررة.",
        concepts: [
            "حلقة for",
            "حلقة while",
            "حلقة do-while",
            "كلمة break لإنهاء الحلقة",
            "كلمة continue لتخطي التكرار الحالي"
        ],
        codeExample: `public class LoopsExample {
    public static void main(String[] args) {
        // حلقة for لطباعة الأعداد من 1 إلى 5
        System.out.println("حلقة for:");
        for (int i = 1; i <= 5; i++) {
            System.out.println(i);
        }
        
        // حلقة while لطباعة الأعداد من 5 إلى 1
        System.out.println("حلقة while:");
        int j = 5;
        while (j >= 1) {
            System.out.println(j);
            j--;
        }
        
        // حلقة do-while لطباعة الأعداد الزوجية
        System.out.println("حلقة do-while:");
        int k = 2;
        do {
            System.out.println(k);
            k += 2;
        } while (k <= 10);
        
        // استخدام continue لطباعة الأعداد الفردية
        System.out.println("الأعداد الفردية من 1 إلى 10:");
        for (int m = 1; m <= 10; m++) {
            if (m % 2 == 0) {
                continue; // تخطي الأعداد الزوجية
            }
            System.out.println(m);
        }
    }
}`,
        quizQuestion: "أي حلقة تضمن تنفيذ الكود مرة واحدة على الأقل؟",
        quizOptions: ["for", "while", "do-while", "جميعهم"],
        correctAnswer: "do-while",
        resources: [
            {
                title: "حلقات التكرار في جافا",
                url: "https://www.w3schools.com/java/java_while_loop.asp",
                description: "شرح شامل لأنواع الحلقات التكرارية في جافا"
            },
            {
                title: "التحكم في الحلقات",
                url: "https://www.w3schools.com/java/java_break.asp",
                description: "كيفية استخدام break و continue للتحكم في الحلقات"
            }
        ]
    },
    6: {
        title: "المستوى 6: المصفوفات",
        description: "في هذا المستوى، ستتعلم كيفية التعامل مع المصفوفات في جافا لتخزين مجموعات من البيانات.",
        concepts: [
            "إنشاء مصفوفة",
            "تهيئة المصفوفة",
            "الوصول لعناصر المصفوفة",
            "تعديل عناصر المصفوفة",
            "تكرار عناصر المصفوفة"
        ],
        codeExample: `public class ArraysExample {
    public static void main(String[] args) {
        // إنشاء مصفوفة أعداد صحيحة
        int[] numbers = new int[5];
        
        // تعيين القيم
        numbers[0] = 10;
        numbers[1] = 20;
        numbers[2] = 30;
        numbers[3] = 40;
        numbers[4] = 50;
        
        // طريقة أخرى لإنشاء المصفوفة
        String[] names = {"زيد", "أحمد", "محمد", "علي"};
        
        // طباعة عناصر المصفوفة باستخدام حلقة for
        System.out.println("عناصر مصفوفة الأعداد:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
        
        // طباعة عناصر المصفوفة باستخدام حلقة for-each
        System.out.println("أسماء الطلاب:");
        for (String name : names) {
            System.out.println(name);
        }
        
        // تعديل عنصر في المصفوفة
        names[1] = "خالد";
        System.out.println("بعد التعديل: " + names[1]);
    }
}`,
        quizQuestion: "كيف يمكن الحصول على طول المصفوفة في جافا؟",
        quizOptions: ["array.size", "array.length", "array.count", "array.getSize()"],
        correctAnswer: "array.length",
        resources: [
            {
                title: "المصفوفات في جافا",
                url: "https://www.w3schools.com/java/java_arrays.asp",
                description: "دليل شامل للتعامل مع المصفوفات في جافا"
            },
            {
                title: "المصفوفات متعددة الأبعاد",
                url: "https://www.w3schools.com/java/java_arrays_multi.asp",
                description: "شرح للمصفوفات متعددة الأبعاد وكيفية استخدامها"
            }
        ]
    }
};

// Page navigation
function changePage(pageId, levelNumber = null) {
    // إيقاف الفيديو إذا كانت الصفحة الحالية هي صفحة المقدمة
    const currentActivePage = document.querySelector('.page.active');
    if (currentActivePage && currentActivePage.id === 'intro-page') {
        stopVideo();
    }
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show the selected page
    const pageElement = document.getElementById(pageId + '-page');
    pageElement.classList.add('active');
    
    // Load level details if level-detail page is selected
    if (pageId === 'level-detail' && levelNumber) {
        loadLevelDetails(levelNumber);
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Toggle mobile menu
function toggleMobileMenu() {
    document.querySelector('.mobile-menu').classList.toggle('open');
}

// Toggle FAQ items
function toggleFAQ(id) {
    const content = document.getElementById('faq-content-' + id);
    const icon = document.getElementById('faq-icon-' + id);
    
    content.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
}

// Load level details
function loadLevelDetails(levelNumber) {
    const levelData = levelsData[levelNumber];
    
    if (levelData) {
        // Update title
        document.getElementById('level-title').textContent = levelData.title;
        
        // Update description
        document.getElementById('level-description').textContent = levelData.description;
        
        // Update concepts
        const conceptsList = document.getElementById('level-concepts');
        conceptsList.innerHTML = '';
        levelData.concepts.forEach(concept => {
            const li = document.createElement('li');
            li.textContent = concept;
            conceptsList.appendChild(li);
        });
        
        // Update code example
        document.getElementById('level-code').textContent = levelData.codeExample;
        
        // Update quiz question
        document.getElementById('quiz-question').textContent = levelData.quizQuestion;
        
        // Update quiz options
        const quizOptions = document.querySelectorAll('.quiz-option');
        quizOptions.forEach((option, index) => {
            option.querySelector('span').textContent = levelData.quizOptions[index];
            option.onclick = function() { 
                selectAnswer(this, levelData.correctAnswer); 
            };
        });
        
        // Reset quiz result
        document.getElementById('quiz-result').classList.add('hidden');
        
        // Update additional resources
        const resourcesContainer = document.getElementById('additional-resources');
        resourcesContainer.innerHTML = '';
        
        if (levelData.resources && levelData.resources.length > 0) {
            levelData.resources.forEach(resource => {
                const resourceElement = document.createElement('div');
                resourceElement.className = 'resource-card p-4 rounded-lg bg-primary-light';
                resourceElement.innerHTML = `
                    <a href="${resource.url}" target="_blank" class="flex items-start text-accent-color hover:text-white transition-colors">
                        <i class="fas fa-external-link-alt mt-1 mr-3"></i>
                        <div>
                            <div class="font-bold">${resource.title}</div>
                            <div class="text-sm text-text-secondary mt-1">${resource.description}</div>
                        </div>
                    </a>
                `;
                resourcesContainer.appendChild(resourceElement);
            });
        } else {
            resourcesContainer.innerHTML = '<p class="text-text-secondary">لا توجد موارد إضافية متاحة لهذا المستوى حالياً.</p>';
        }
    }
}

// Select answer in quiz
function selectAnswer(element, correctAnswer) {
    // Remove selected class from all options
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.classList.remove('selected', 'correct', 'incorrect');
    });
    
    // Add selected class to clicked option
    element.classList.add('selected');
    
    // Get selected answer text
    const selectedAnswer = element.querySelector('span').textContent;
    
    // Check if answer is correct
    const resultText = document.getElementById('result-text');
    if (selectedAnswer === correctAnswer) {
        element.classList.add('correct');
        resultText.textContent = 'إجابة صحيحة! أحسنت!';
        resultText.className = 'text-xl font-bold text-success';
    } else {
        element.classList.add('incorrect');
        resultText.textContent = 'إجابة خاطئة! حاول مرة أخرى.';
        resultText.className = 'text-xl font-bold text-error';
    }
    
    // Show result
    document.getElementById('quiz-result').classList.remove('hidden');
}

// Close popup
function closePopup() {
    document.getElementById('desktop-popup').style.display = 'none';
}

// إيقاف تشغيل الفيديو عند مغادرة الصفحة
function stopVideo() {
    const videoIframe = document.getElementById('intro-video');
    if (videoIframe) {
        // حفظ مصدر الفيديو الحالي في سمة data-src (لإمكانية إعادة التشغيل لاحقًا)
        if (!videoIframe.dataset.src) {
            videoIframe.dataset.src = videoIframe.src;
        }
        videoIframe.src = ''; // إيقاف الفيديو
    }
}

// Back to top button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.remove('opacity-0', 'invisible');
        backToTopBtn.classList.add('opacity-100', 'visible');
    } else {
        backToTopBtn.classList.remove('opacity-100', 'visible');
        backToTopBtn.classList.add('opacity-0', 'invisible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Generate floating particles
function createParticles() {
    const container = document.body;
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 10 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 10 + Math.random() * 20;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        container.appendChild(particle);
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    
    // Hide popup after 10 seconds
    setTimeout(() => {
        document.getElementById('desktop-popup').style.display = 'none';
    }, 10000);
});