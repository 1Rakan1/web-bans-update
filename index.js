/* صفحة تسجيل الدخول */
.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  position: relative;
  overflow: hidden;
}

.login-body::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent);
  animation: pulse 10s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

.login-container {
  background: rgba(255, 255, 255, 0.1);
  padding: 50px;
  border-radius: 25px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
  width: 100%;
  max-width: 500px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.login-title {
  text-align: center;
  margin-bottom: 40px;
  color: #fff;
  font-size: 36px;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(255, 75, 43, 0.5);
}

.animate-title {
  animation: fadeInDown 1s ease;
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.login-form .form-group {
  margin-bottom: 30px;
}

.login-form input {
  width: 100%;
  padding: 15px;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 18px;
  transition: all 0.3s ease;
}

.login-form input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.login-form input:focus {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 15px rgba(255, 75, 43, 0.5);
  outline: none;
}

/* أزرار عامة */
.btn {
  padding: 12px 30px;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  cursor: pointer;
  transition: all 0.4s ease;
}

.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.epic-btn {
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  color: #fff;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
}

.epic-btn:hover {
  background: linear-gradient(135deg, #e91e63, #d81b60);
}

/* القائمة الجانبية */
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 80px;
  height: 100%;
  background: rgba(44, 62, 80, 0.9);
  padding: 20px 10px;
  transition: width 0.5s ease;
  backdrop-filter: blur(5px);
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 1000;
}

.sidebar.expanded {
  width: 250px;
}

.sidebar a {
  display: flex;
  align-items: center;
  color: #ecf0f1;
  padding: 15px;
  text-decoration: none;
  margin-bottom: 15px;
  border-radius: 15px;
  font-size: 20px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.05);
}

.sidebar a .icon {
  font-size: 24px;
  margin-left: 10px;
  transition: all 0.3s ease;
}

.sidebar a .text {
  display: none;
}

.sidebar.expanded a .text {
  display: inline;
}

.sidebar a:hover .icon, .sidebar a.active .icon {
  text-shadow: 0 0 10px rgba(255, 75, 43, 0.8);
}

.sidebar a:hover, .sidebar a.active {
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  color: #fff;
  transform: translateX(-5px);
}

/* الـ Container */
.container {
  max-width: 1300px;
  margin: 0 auto;
  padding: 30px 30px 30px 100px;
  transition: padding-left 0.5s ease;
}

.sidebar.expanded ~ .container {
  padding-left: 270px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

h1 {
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(255, 75, 43, 0.3);
}

.toggle-btn {
  background: linear-gradient(135deg, #ff9800, #f57c00);
  color: #fff;
  padding: 12px 18px;
  font-size: 24px;
}

.toggle-btn:hover {
  background: linear-gradient(135deg, #fb8c00, #ef6c00);
}

.header-actions {
  display: flex;
  gap: 20px;
}

.mode-btn {
  background: linear-gradient(135deg, #00ddeb, #00b8c4);
  color: #fff;
  padding: 12px 25px;
  border-radius: 30px;
}

.mode-btn:hover {
  background: linear-gradient(135deg, #00c4cc, #0097a7);
}

body.dark-mode .mode-btn {
  background: linear-gradient(135deg, #ffeb3b, #fbc02d);
  color: #333;
}

body.dark-mode .mode-btn:hover {
  background: linear-gradient(135deg, #fdd835, #f9a825);
}

/* محتوى الصفحة */
.content-box {
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

h2 {
  color: #fff;
  margin-bottom: 30px;
  font-size: 28px;
  font-weight: bold;
  text-shadow: 0 2px 10px rgba(255, 75, 43, 0.3);
}

.epic-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;
}

th, td {
  padding: 20px;
  text-align: right;
}

th {
  background: linear-gradient(135deg, #ff416c, #ff4b2b);
  color: #fff;
  font-weight: bold;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.table-row {
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
}

.table-row:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-5px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid rgba(255, 75, 43, 0.5);
  transition: all 0.3s ease;
}

.table-row:hover .avatar {
  border-color: #ff4b2b;
}

.action-btn {
  padding: 10px 25px;
  border-radius: 25px;
  font-weight: bold;
}

.ban-btn {
  background: linear-gradient(135deg, #ff4d4d, #e63946);
  color: #fff;
}

.ban-btn:hover {
  background: linear-gradient(135deg, #e63946, #d32f2f);
}

.unban-btn {
  background: linear-gradient(135deg, #00c853, #00a843);
  color: #fff;
}

.unban-btn:hover {
  background: linear-gradient(135deg, #00a843, #008c39);
}

/* الإحصائيات */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.1);
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
}

.animate-card {
  animation: fadeInUp 1s ease;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.stat-card:hover {
  transform: scale(1.05);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
}

.stat-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #fff;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.stat-card p {
  font-size: 32px;
  font-weight: bold;
  color: #ff4b2b;
}

body.dark-mode .stat-card p {
  color: #ffeb3b;
}

.copyright {
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  margin: 30px 0;
  font-size: 16px;
  text-shadow: 0 1px 5px rgba(0, 0, 0, 0.2);
}

.error {
  text-align: center;
  color: #ff4d4d;
  margin: 30px 0;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

/* تصميم الـ Modal */
.modal {
  display: none;
  position: fixed;
  z-index: 1001;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);
}

.modal-content {
  background: rgba(255, 255, 255, 0.1);
  margin: 15% auto;
  padding: 30px;
  border-radius: 20px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.close {
  color: #fff;
  float: left;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.close:hover,
.close:focus {
  color: #ff4d4d;
  text-shadow: 0 0 10px rgba(255, 75, 43, 0.8);
}

.modal-content h2 {
  text-align: center;
  margin-bottom: 20px;
}

.modal-content textarea {
  width: 100%;
  height: 100px;
  padding: 15px;
  border: none;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 16px;
  resize: none;
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.modal-content textarea::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.modal-content textarea:focus {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0 0 15px rgba(255, 75, 43, 0.5);
  outline: none;
}

.confirm-btn {
  background: linear-gradient(135deg, #ff4d4d, #e63946);
  color: #fff;
  width: 100%;
  padding: 15px;
  font-weight: bold;
}

.confirm-btn:hover {
  background: linear-gradient(135deg, #e63946, #d32f2f);
}
