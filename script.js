// ระบบตรวจสอบความถูกต้องของฟอร์มหน้า Contact (Dynamic Form Validation)
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    
    // ดักจับเหตุการณ์ถ้ามีฟอร์มในหน้านั้น ๆ
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            
            let isValid = true;
            let errorMessage = "";

            // 1. ตรวจสอบช่องกรอกชื่อ
            if (nameInput && nameInput.value.trim() === "") {
                isValid = false;
                errorMessage += "Please enter your name.\n";
            }

            // 2. ตรวจสอบช่องอีเมล
            if (emailInput) {
                const emailValue = emailInput.value.trim();
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailValue === "") {
                    isValid = false;
                    errorMessage += "Please enter your email address.\n";
                } else if (!emailPattern.test(emailValue)) {
                    isValid = false;
                    errorMessage += "Please enter a valid email address.\n";
                }
            }

            // 3. ตรวจสอบช่องข้อความ
            if (messageInput && messageInput.value.trim() === "") {
                isValid = false;
                errorMessage += "Please write your message.";
            }

            // ถ้าข้อมูลไม่ครบถ้วน ให้ระงับการส่งฟอร์มและแจ้งเตือนผู้ใช้ทันที
            if (!isValid) {
                event.preventDefault(); // หยุดการส่งฟอร์มไปหลังบ้าน
                alert(errorMessage); // เด้งหน้าต่างแจ้งเตือนแบบเรียลไทม์
            } else {
                alert("Thank you, " + nameInput.value + "! Your message has been sent successfully.");
            }
        });
    }
});