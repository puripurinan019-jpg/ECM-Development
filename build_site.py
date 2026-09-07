# -*- coding: utf-8 -*-
"""
ECM LTD. - Complete Website Builder
Updated with real images from assets/images/
"""
import os

os.makedirs('assets/css', exist_ok=True)
os.makedirs('assets/js', exist_ok=True)
os.makedirs('assets/images', exist_ok=True)

# 1. GENERATE CSS
css_content = '''/* Custom Style Enhancements for ECM LTD. */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Prompt:wght@300;400;500;600;700;800&display=swap');

:root {
  --ecm-navy: #0A2540;
  --ecm-navy-dark: #07192C;
  --ecm-blue: #2563EB;
  --ecm-blue-hover: #1D4ED8;
  --ecm-light-bg: #F8FAFC;
  --ecm-border: #E2E8F0;
  --ecm-text-dark: #0F172A;
  --ecm-text-muted: #64748B;
}

body {
  font-family: 'Prompt', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: var(--ecm-text-dark);
  background-color: var(--ecm-light-bg);
  scroll-behavior: smooth;
}

.font-heading {
  font-family: 'Inter', 'Prompt', sans-serif;
}

/* Hero gradient with subtle industrial grid */
.hero-industrial {
  background: linear-gradient(135deg, rgba(10, 37, 64, 0.96) 0%, rgba(7, 25, 44, 0.98) 100%),
              radial-gradient(circle at 80% 20%, rgba(37, 99, 235, 0.25) 0%, transparent 60%);
  background-size: cover;
  background-position: center;
}

.nav-link {
  transition: all 0.2s ease;
  position: relative;
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.02em;
}

.nav-link:hover, .nav-link.active {
  color: #2563EB;
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -6px;
  left: 0;
  right: 0;
  height: 3px;
  background: #2563EB;
  border-radius: 2px;
}

/* Card hover animation */
.product-card {
  transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 25px -5px rgba(10, 37, 64, 0.1), 0 8px 10px -6px rgba(10, 37, 64, 0.06);
}

/* Modal transition */
.modal-backdrop {
  background-color: rgba(10, 37, 64, 0.75);
  backdrop-filter: blur(4px);
  transition: opacity 0.25s ease;
}

/* Table styling for specs */
.spec-table th {
  background-color: #0A2540;
  color: #ffffff;
  padding: 10px 14px;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.spec-table td {
  padding: 10px 14px;
  border-bottom: 1px solid #E2E8F0;
  font-size: 0.9rem;
}

.spec-table tr:nth-child(even) td {
  background-color: #F8FAFC;
}

.spec-table tr:hover td {
  background-color: #EFF6FF;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-track {
  background: #F1F5F9;
}
::-webkit-scrollbar-thumb {
  background: #94A3B8;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #64748B;
}

/* Toast alert notification */
.toast-notification {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  transform: translateY(100px);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.toast-notification.show {
  transform: translateY(0);
  opacity: 1;
}
'''

with open('assets/css/styles.css', 'w', encoding='utf-8') as f:
    f.write(css_content.strip())
print('Updated assets/css/styles.css')


# 2. GENERATE JAVASCRIPT WITH REAL PRODUCT IMAGES
js_content = '''/**
 * ECM LTD. - Interactive Website Script
 * Real Images mapped to 8 Wire Rope & Sling Products
 */

const productsData = [
  {
    id: 1,
    titleTh: "ลวดสลิงโครงสร้าง 6x19 (Standard 6x19 IWRC)",
    titleEn: "6x19 IWRC WIRE ROPE",
    badge: "ลวดสลิงมาตรฐานสากล",
    subtitle: "ลวดสลิงเหล็กกล้าโครงสร้าง 6x19 แกนเหล็ก IWRC ทนแรงดึงสูง ทนการกดทับ",
    category: "wire-rope",
    image: "assets/images/sling6x19.png",
    diameters: "6 มม. ถึง 38 มม. (6, 8, 9, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 38 มม.)",
    lengths: "ตัดตามความยาว 1 เมตร ถึง 1,000+ เมตร (พร้อมอัดปลอกเข้าหัว)",
    wll: "0.5 ตัน ถึง 50+ ตัน",
    safetyFactor: "5:1 (มาตรฐาน EN 12385-4 / ASME B30.9)",
    specs: [
      "โครงสร้าง: 6x19 (6 เกลียว เกลียวละ 19 เส้น) พร้อมแกนเหล็ก IWRC",
      "เกรดความแข็งแรง: 1770 N/mm² และ 1960 N/mm² (High Tensile Steel)",
      "ผิวเคลือบ: Galvanised (ชุบกัลวาไนซ์กันสนิม) และ Ungalvanised (ลวดดำทาน้ำมันพิเศษ)",
      "การประกอบหัว: อัดปลอกไฮดรอลิกอลูมิเนียม (Ferrule Secured) พร้อมห่วงเกือกม้า (Thimble Eye)",
      "การทดสอบ: ผ่านการทดสอบ Proof Load Testing 100% พร้อมใบ Certificate"
    ],
    tableData: [
      { size: "8 มม.", single: "0.75 ตัน", twoLeg45: "1.05 ตัน", twoLeg60: "0.75 ตัน", fourLeg: "1.55 ตัน" },
      { size: "12 มม.", single: "1.70 ตัน", twoLeg45: "2.38 ตัน", twoLeg60: "1.70 ตัน", fourLeg: "3.57 ตัน" },
      { size: "16 มม.", single: "3.00 ตัน", twoLeg45: "4.20 ตัน", twoLeg60: "3.00 ตัน", fourLeg: "6.30 ตัน" },
      { size: "20 มม.", single: "4.70 ตัน", twoLeg45: "6.58 ตัน", twoLeg60: "4.70 ตัน", fourLeg: "9.87 ตัน" },
      { size: "24 มม.", single: "6.80 ตัน", twoLeg45: "9.52 ตัน", twoLeg60: "6.80 ตัน", fourLeg: "14.2 ตัน" },
      { size: "32 มม.", single: "12.0 ตัน", twoLeg45: "16.8 ตัน", twoLeg60: "12.0 ตัน", fourLeg: "25.2 ตัน" }
    ],
    applications: "งานยกทั่วไปในโรงงาน, ลิฟต์โดยสาร/ขนส่ง, งานยึดโยง (Guy Wire), ปั้นจั่น และเครนโรงงาน"
  },
  {
    id: 2,
    titleTh: "ลวดสลิงอัดแน่น 6x19 Compacted (Compacted 6x19)",
    titleEn: "6x19 COMPACTED WIRE ROPE",
    badge: "อัดแน่น ผิวเรียบ ทนแรงกด",
    subtitle: "ลวดสลิงผ่านกระบวนการรีดอัดแน่น เพิ่มพื้นที่หน้าตัดเหล็ก ทนการสึกหรอบนดรัม",
    category: "wire-rope",
    image: "assets/images/sling6x19com.png",
    diameters: "8 มม. ถึง 36 มม. (8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36 มม.)",
    lengths: "ตัดตามความยาว 1 เมตร ถึง 1,000+ เมตร",
    wll: "0.85 ตัน ถึง 55+ ตัน (แรงดึงสูงขึ้น 15-20% เมื่อเทียบกับลวดธรรมดา)",
    safetyFactor: "5:1 (มาตรฐาน EN 12385-4 / ISO 4309)",
    specs: [
      "กระบวนการ: Compacted Strands เส้นเกลียวถูกรีดให้ผิวด้านนอกเรียบเนียนแนบสนิท",
      "คุณสมบัติเด่น: ลดการกดทับและเสียรูปเมื่อม้วนหลายชั้นบนร่องดรัม (Multi-Layer Drum Spooling)",
      "พื้นที่สัมผัส: กระจายแรงกดสม่ำเสมอบนพูลเลย์ ยืดอายุการใช้งานยาวนานกว่าลวดทั่วไป 2 เท่า",
      "แกนใน: แกนเหล็ก IWRC หล่อลื่นพิเศษจากโรงงาน",
      "การรับรอง: Test Certificate รับรองค่า Breaking Load แท้จริง"
    ],
    tableData: [
      { size: "10 มม.", single: "1.45 ตัน", twoLeg45: "2.03 ตัน", twoLeg60: "1.45 ตัน", fourLeg: "3.04 ตัน" },
      { size: "14 มม.", single: "2.85 ตัน", twoLeg45: "3.99 ตัน", twoLeg60: "2.85 ตัน", fourLeg: "5.98 ตัน" },
      { size: "18 มม.", single: "4.75 ตัน", twoLeg45: "6.65 ตัน", twoLeg60: "4.75 ตัน", fourLeg: "9.97 ตัน" },
      { size: "22 มม.", single: "7.10 ตัน", twoLeg45: "9.94 ตัน", twoLeg60: "7.10 ตัน", fourLeg: "14.9 ตัน" },
      { size: "28 มม.", single: "11.5 ตัน", twoLeg45: "16.1 ตัน", twoLeg60: "11.5 ตัน", fourLeg: "24.1 ตัน" }
    ],
    applications: "รอกสลิงไฟฟ้าความเร็วสูง, กว้านยกงานหนัก, โมบายเครน และงานดรัมหลายชั้น"
  },
  {
    id: 3,
    titleTh: "ลวดสลิงโครงสร้าง 6x36 WS (High Flexibility 6x36 WS)",
    titleEn: "6x36 WS IWRC WIRE ROPE",
    badge: "ยืดหยุ่นสูงพิเศษ สำหรับรอกและเครน",
    subtitle: "ลวดสลิงเส้นฝอย 36 เส้นต่อเกลียว โค้งงอผ่านรอกได้นิ่มนวล ทนแรงล้าจากการดัดงอ",
    category: "wire-rope",
    image: "assets/images/sling6x36.png",
    diameters: "8 มม. ถึง 60 มม. (8, 10, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40, 52, 60 มม.)",
    lengths: "ตัดตามความยาว 1 เมตร ถึง 1,500+ เมตร",
    wll: "0.8 ตัน ถึง 150+ ตัน",
    safetyFactor: "5:1 (มาตรฐาน EN 12385-4 / ASME B30.9)",
    specs: [
      "โครงสร้าง: 6x36 Warrington Seale (WS) แกนเหล็ก IWRC",
      "ความยืดหยุ่น: ยืดหยุ่นสูงสุดในตระกูลลวดสลิง 6 เกลียว ทนทานต่อ Bending Fatigue",
      "การประกอบ: เหมาะอย่างยิ่งสำหรับทำชุดสลิงยกของหนัก 1 ขา, 2 ขา, 3 ขา, 4 ขา",
      "ขนาดหัวต่อ: รองรับ Soft Eye, Thimble Eye, Spelter Socket, Swaged Hook",
      "เอกสารรับรอง: ผ่าน Proof Load Test ทุกชุดสั่งประกอบ"
    ],
    tableData: [
      { size: "12 มม.", single: "1.75 ตัน", twoLeg45: "2.45 ตัน", twoLeg60: "1.75 ตัน", fourLeg: "3.67 ตัน" },
      { size: "16 มม.", single: "3.10 ตัน", twoLeg45: "4.34 ตัน", twoLeg60: "3.10 ตัน", fourLeg: "6.51 ตัน" },
      { size: "20 มม.", single: "4.85 ตัน", twoLeg45: "6.79 ตัน", twoLeg60: "4.85 ตัน", fourLeg: "10.1 ตัน" },
      { size: "28 มม.", single: "9.50 ตัน", twoLeg45: "13.3 ตัน", twoLeg60: "9.50 ตัน", fourLeg: "19.9 ตัน" },
      { size: "36 มม.", single: "15.8 ตัน", twoLeg45: "22.1 ตัน", twoLeg60: "15.8 ตัน", fourLeg: "33.1 ตัน" },
      { size: "48 มม.", single: "28.0 ตัน", twoLeg45: "39.2 ตัน", twoLeg60: "28.0 ตัน", fourLeg: "58.8 ตัน" }
    ],
    applications: "โอเวอร์เฮดเครนในโรงงาน (Overhead Crane), โมบายเครน, สลิงยกชิ้นงานหนัก, ท่าเรือ และแท่นขุดเจาะ"
  },
  {
    id: 4,
    titleTh: "ลวดสลิงอัดแน่น 8 เกลียว 8x26 Compacted (High Strength 8-Strand)",
    titleEn: "8x26 COMPACTED WIRE ROPE",
    badge: "ทนการขัดสี รับแรงดึงสูงสุด",
    subtitle: "ลวดสลิง 8 เกลียวทรงกลมเรียบเนียน รับแรงดึงสูงกว่าลวด 6 เกลียวอย่างเห็นได้ชัด",
    category: "wire-rope",
    image: "assets/images/sling8x26com.png",
    diameters: "10 มม. ถึง 40 มม. (10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40 มม.)",
    lengths: "ตัดตามความยาว 1 เมตร ถึง 1,000+ เมตร",
    wll: "1.5 ตัน ถึง 70+ ตัน",
    safetyFactor: "5:1 (มาตรฐานสากล ISO 4309 / EN 12385)",
    specs: [
      "โครงสร้าง: 8 Outer Strands Compacted แกนเหล็ก Solid IWRC Plastic Impregnated (EPIWRC)",
      "ข้อได้เปรียบ: รูปร่างกลมสมบูรณ์แบบ เพิ่มพื้นที่สัมผัสร่องพูลเลย์ ลดแรงดันเฉพาะจุด (Contact Pressure)",
      "ความแข็งแรง: ค่า Breaking Load สูงเป็นพิเศษ ทนต่อ Shock Load และแรงกระชาก",
      "การใช้งานราบรื่น: วิ่งผ่านรอกลื่นไหล ไร้แรงสั่นสะเทือน",
      "มาตรฐาน: เกรดเหล็ก 1960 N/mm² / 2160 N/mm²"
    ],
    tableData: [
      { size: "12 มม.", single: "2.10 ตัน", twoLeg45: "2.94 ตัน", twoLeg60: "2.10 ตัน", fourLeg: "4.41 ตัน" },
      { size: "16 มม.", single: "3.75 ตัน", twoLeg45: "5.25 ตัน", twoLeg60: "3.75 ตัน", fourLeg: "7.87 ตัน" },
      { size: "20 มม.", single: "5.85 ตัน", twoLeg45: "8.19 ตัน", twoLeg60: "5.85 ตัน", fourLeg: "12.2 ตัน" },
      { size: "26 มม.", single: "9.90 ตัน", twoLeg45: "13.8 ตัน", twoLeg60: "9.90 ตัน", fourLeg: "20.7 ตัน" },
      { size: "32 มม.", single: "15.0 ตัน", twoLeg45: "21.0 ตัน", twoLeg60: "15.0 ตัน", fourLeg: "31.5 ตัน" }
    ],
    applications: "เครนท่าเรือคอนเทนเนอร์ (STS / RTG Crane), เครนยกแม่พิมพ์หนัก, รอกสลิงงานหนักพิเศษ"
  },
  {
    id: 5,
    titleTh: "ลวดสลิงกันหมุนอัดแน่น 29x7 Compacted (Non-Rotating Compacted)",
    titleEn: "29x7 COMPACTED NON-ROTATING",
    badge: "กันหมุน สำหรับทาวเวอร์เครน",
    subtitle: "ลวดสลิงหลายเกลียวต้านทานการหมุนคลายตัว ผิวอัดแน่น เรียบ สวยงาม แข็งแกร่ง",
    category: "crane",
    image: "assets/images/sling29x7com.png",
    diameters: "10 มม. ถึง 36 มม. (10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36 มม.)",
    lengths: "ตัดตามความยาว 50 เมตร ถึง 1,000+ เมตร",
    wll: "1.4 ตัน ถึง 55+ ตัน",
    safetyFactor: "5:1 ถึง 7:1 (มาตรฐาน EN 12385-4 Rotation Resistant Class)",
    specs: [
      "โครงสร้าง: 29x7 Compacted (เกลียวชั้นนอกและชั้นในบิดสวนทางกันเพื่อหักล้างแรงบิด)",
      "การต้านแรงหมุน: Zero Rotation Property ป้องกันชิ้นงานหมุนควงสว่านขณะยกสูง",
      "การอัดแน่น: ผิวเรียบ ทนทานต่อการกดทับในดรัมของทาวเวอร์เครน",
      "งานปลายสาย: เข้าหัวหล่อ Spelter Socket หรืออัดหัวตายได้มาตรฐาน",
      "การทดสอบ: ผ่านการรับรอง Non-Rotating Certificate ทุกม้วน"
    ],
    tableData: [
      { size: "10 มม.", single: "1.38 ตัน", twoLeg45: "1.93 ตัน", twoLeg60: "1.38 ตัน", fourLeg: "Non-Rotating" },
      { size: "14 มม.", single: "2.75 ตัน", twoLeg45: "3.85 ตัน", twoLeg60: "2.75 ตัน", fourLeg: "High Stability" },
      { size: "18 มม.", single: "4.60 ตัน", twoLeg45: "6.44 ตัน", twoLeg60: "4.60 ตัน", fourLeg: "Tower Crane" },
      { size: "22 มม.", single: "6.85 ตัน", twoLeg45: "9.59 ตัน", twoLeg60: "6.85 ตัน", fourLeg: "Heavy Lift" },
      { size: "28 มม.", single: "11.1 ตัน", twoLeg45: "15.5 ตัน", twoLeg60: "11.1 ตัน", fourLeg: "Deep Hoisting" }
    ],
    applications: "ทาวเวอร์เครน (Tower Crane), ปั้นจั่นก่อสร้างอาคารสูง, เครนตอกเสาเข็ม และงานกว้านเรือ"
  },
  {
    id: 6,
    titleTh: "ลวดสลิงกันหมุนพิเศษ 35x7 (Multi-Strand Non-Rotating)",
    titleEn: "35x7 MULTI-STRAND NON-ROTATING",
    badge: "ยกงานระดับสูงมาก เสถียรภาพ 100%",
    subtitle: "ลวดสลิงกันหมุนเกรดสูงสุด 35 เกลียว ลิขสิทธิ์ความเสถียรสำหรับงานยกตึกสูงและเหมืองแร่",
    category: "crane",
    image: "assets/images/sling35x7.png",
    diameters: "12 มม. ถึง 42 มม. (12, 14, 16, 18, 20, 22, 24, 26, 28, 32, 36, 40, 42 มม.)",
    lengths: "ตัดตามความยาว 50 เมตร ถึง 1,500+ เมตร",
    wll: "2.0 ตัน ถึง 75+ ตัน",
    safetyFactor: "5:1 ถึง 7:1 (มาตรฐาน EN 12385-4 / ISO 21669)",
    specs: [
      "โครงสร้าง: 35x7 Multi-Strand High-Performance Non-Rotating",
      "การทรงตัว: ความเสถียรในการยกแนวดิ่งสูงสุด แม้จะยกระยะลึก 100+ เมตร ชิ้นงานไม่แกว่งตัว",
      "ความยืดหยุ่น: มีเส้นลวดฝอยละเอียดจำนวนมาก ให้ความยืดหยุ่นสูงและม้วนเก็บง่าย",
      "สารหล่อลื่น: ผ่านการอัดจารบีสังเคราะห์เกรดพรีเมียมจากแกนในสู่ผิวนอก",
      "การตรวจสอบ: ตรวจสอบด้วยสนามแม่เหล็ก (Magnetic NDT Testing)"
    ],
    tableData: [
      { size: "12 มม.", single: "2.05 ตัน", twoLeg45: "2.87 ตัน", twoLeg60: "2.05 ตัน", fourLeg: "High Stability" },
      { size: "16 มม.", single: "3.65 ตัน", twoLeg45: "5.11 ตัน", twoLeg60: "3.65 ตัน", fourLeg: "Tower Crane" },
      { size: "20 มม.", single: "5.70 ตัน", twoLeg45: "7.98 ตัน", twoLeg60: "5.70 ตัน", fourLeg: "Deep Shaft" },
      { size: "24 มม.", single: "8.20 ตัน", twoLeg45: "11.4 ตัน", twoLeg60: "8.20 ตัน", fourLeg: "Mobile Crane" },
      { size: "32 มม.", single: "14.6 ตัน", twoLeg45: "20.4 ตัน", twoLeg60: "14.6 ตัน", fourLeg: "Heavy Mining" }
    ],
    applications: "โมบายเครนขนาดใหญ่ (Telescopic Mobile Crane), ทาวเวอร์เครนอาคารสูงพิเศษ, ลิฟต์เหมืองแร่ และงานนอกชายฝั่ง (Offshore)"
  },
  {
    id: 7,
    titleTh: "ชุดสลิงลวดเหล็กกล้าอัดปลอก 1-4 ขา (Wire Rope Sling Assemblies)",
    titleEn: "WIRE ROPE SLING ASSEMBLIES",
    badge: "ประกอบสำเร็จรูปพร้อมใช้งาน",
    subtitle: "ชุดสลิงลวดสลิงสำเร็จรูป 1 ขา, 2 ขา, 3 ขา, 4 ขา อัดปลอกไฮดรอลิกพร้อมตะขอและมาสเตอร์ลิงค์",
    category: "assembly",
    image: "assets/images/sling6x36.png",
    diameters: "ขนาดเส้นลวด 6 มม. ถึง 60 มม. (กำหนดสเปกตามน้ำหนักยก)",
    lengths: "ระยะยก 0.5 เมตร ถึง 50+ เมตร (สั่งผลิตตามสเปกหน้างาน)",
    wll: "1.0 ตัน ถึง 150+ ตัน",
    safetyFactor: "5:1 (มาตรฐาน EN 13414-1 / ASME B30.9)",
    specs: [
      "รูปแบบชุดยก: Single-Leg, 2-Leg, 3-Leg, 4-Leg และ Choker Sling",
      "อุปกรณ์หัวต่อ: Master Link, Thimble Eye, Eye Hook, Self-Locking Hook, Shackle",
      "กรรมวิธี: อัดปลอกอลูมิเนียมด้วยเครื่องอัดแรงดันสูง 1,000 ตัน ยึดเกาะแน่นหนา 100%",
      "ป้ายสแตนเลส: ตอกป้ายโลหะระบุ Serial Number, WLL, และวันที่ทดสอบชัดเจน",
      "ใบรับรอง: มี Test Certificate แนบให้ทุกชุด"
    ],
    tableData: [
      { size: "10 มม.", single: "1.15 ตัน", twoLeg45: "1.61 ตัน", twoLeg60: "1.15 ตัน", fourLeg: "2.41 ตัน" },
      { size: "14 มม.", single: "2.25 ตัน", twoLeg45: "3.15 ตัน", twoLeg60: "2.25 ตัน", fourLeg: "4.72 ตัน" },
      { size: "18 มม.", single: "3.80 ตัน", twoLeg45: "5.32 ตัน", twoLeg60: "3.80 ตัน", fourLeg: "7.98 ตัน" },
      { size: "22 มม.", single: "5.65 ตัน", twoLeg45: "7.91 ตัน", twoLeg60: "5.65 ตัน", fourLeg: "11.8 ตัน" },
      { size: "32 มม.", single: "12.0 ตัน", twoLeg45: "16.8 ตัน", twoLeg60: "12.0 ตัน", fourLeg: "25.2 ตัน" }
    ],
    applications: "ยกชิ้นงานในโรงงานประกอบ, แท่นเครื่องจักร, ขนส่งตู้คอนเทนเนอร์, งานริกกิ้งก่อสร้าง และงานขนถ่ายสินค้า"
  },
  {
    id: 8,
    titleTh: "ชุดลวดสลิงและอุปกรณ์ยกสั่งทำพิเศษ (Custom Engineered Slings & Lashing)",
    titleEn: "CUSTOM ENGINEERED SLINGS & LASHING",
    badge: "วิศวกรรมคำนวณและผลิตเฉพาะงาน",
    subtitle: "ออกแบบและผลิตสลิงลวดสั่งทำตามมิติชิ้นงานพิเศษ พร้อมอุปกรณ์ผูกรัดตรึงสินค้าสำหรับงานขนส่ง",
    category: "custom",
    image: "assets/images/sling8x26com.png",
    diameters: "ขนาดเส้นผ่านศูนย์กลาง 8 มม. ถึง 60 มม. (พร้อมอุปกรณ์เสริมเฉพาะทาง)",
    lengths: "สั่งผลิตตามความยาวและระยะยกทุกรูปแบบ (1 ถึง 50+ เมตร)",
    wll: "คำนวณและผลิตรองรับพิกัด 1.0 ตัน ถึง 200+ ตัน",
    safetyFactor: "5:1 สำหรับงานยก และ 2:1 สำหรับงานผูกรัดตรึงขนส่ง (Lashing)",
    specs: [
      "การออกแบบ: ออกแบบตามแบบพิมพ์เขียว หรือส่งทีมงานเข้าวัดขนาดหน้างานจริง",
      "การคำนวณแรง: คำนวณจุดสมดุล CG (Center of Gravity) และมุมยกเพื่อความปลอดภัยสูงสุด",
      "อุปกรณ์ประกอบ: ตะขอนิรภัย Swivel, เกลียวเร่ง (Turnbuckles), สะเก็นเกรดสูง และคานยก",
      "งานขนส่งโลจิสติกส์: สลิงรัดตรึงสินค้าบนรถเทรลเลอร์ รถบรรทุก และงานผูกรัดเรือเดินทะเล",
      "ใบรับรองวิศวกรรม: ออกเอกสารรับรองผลการทดสอบแรงดึงจริงโดยวิศวกรผู้เชี่ยวชาญ"
    ],
    tableData: [
      { size: "Custom 1-Leg", single: "ตามสั่งทำ", twoLeg45: "Proof-Tested", twoLeg60: "ความยาวกำหนดเอง", fourLeg: "ใบเซอร์ 100%" },
      { size: "Custom 2-Leg", single: "ตามสั่งทำ", twoLeg45: "Proof-Tested", twoLeg60: "ความยาวกำหนดเอง", fourLeg: "ใบเซอร์ 100%" },
      { size: "Custom 4-Leg", single: "ตามสั่งทำ", twoLeg45: "Proof-Tested", twoLeg60: "ความยาวกำหนดเอง", fourLeg: "ใบเซอร์ 100%" },
      { size: "Heavy Rigging", single: "สูงสุด 200T", twoLeg45: "Proof-Tested", twoLeg60: "งานแท่นขุดเจาะ", fourLeg: "ใบเซอร์ 100%" }
    ],
    applications: "งานยกโครงสร้างสะพาน, แม่พิมพ์ขนาดยักษ์, เครื่องกำเนิดไฟฟ้า, งานขนส่งเครื่องจักรขนาดใหญ่พิเศษ และแท่นขุดเจาะ"
  }
];

// Initialize DOM
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  renderProductsGrid();
  renderHomeProducts();
  setupContactForm();
  setupQuoteCalculator();
});

// Routing & Tabs Navigation
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.page-section');
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  function showSection(targetId) {
    sections.forEach(sec => {
      if (sec.id === targetId) {
        sec.classList.remove('hidden');
      } else {
        sec.classList.add('hidden');
      }
    });

    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${targetId}` || link.getAttribute('data-target') === targetId) {
        link.classList.add('active', 'text-blue-600');
        link.classList.remove('text-slate-600', 'text-slate-200');
      } else {
        link.classList.remove('active', 'text-blue-600');
        link.classList.add('text-slate-600');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Handle hash change
  function handleHash() {
    const hash = window.location.hash.replace('#', '') || 'home';
    const validSections = ['home', 'about', 'products', 'contact'];
    const target = validSections.includes(hash) ? hash : 'home';
    showSection(target);
  }

  window.addEventListener('hashchange', handleHash);
  handleHash();

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }
}

// Render 8 Products in Products Page
function renderProductsGrid() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  container.innerHTML = productsData.map(product => `
    <div class="product-card bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:border-blue-300">
      <div>
        <div class="relative bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-center h-56">
          <img src="${product.image}" alt="${product.titleEn}" class="max-h-full max-w-full object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105">
          <span class="absolute top-3 left-3 bg-slate-900/90 text-white text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
            ${product.badge}
          </span>
        </div>
        <div class="p-6">
          <div class="text-xs font-bold text-blue-600 tracking-wider uppercase mb-1">${product.titleEn}</div>
          <h3 class="text-xl font-bold text-slate-900 mb-2">${product.titleTh}</h3>
          <p class="text-sm text-slate-600 mb-4 line-clamp-2">${product.subtitle}</p>
          
          <div class="space-y-2 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-4">
            <div class="flex items-start justify-between">
              <span class="text-slate-500 font-medium">ขนาด (มม.):</span>
              <span class="text-slate-800 font-semibold text-right max-w-[65%]">${product.diameters}</span>
            </div>
            <div class="flex items-start justify-between">
              <span class="text-slate-500 font-medium">ความยาว (เมตร):</span>
              <span class="text-slate-800 font-semibold text-right max-w-[65%]">${product.lengths}</span>
            </div>
            <div class="flex items-start justify-between">
              <span class="text-slate-500 font-medium">พิกัดรับน้ำหนัก:</span>
              <span class="text-blue-700 font-bold text-right">${product.wll}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="px-6 pb-6 pt-0 flex gap-2">
        <button onclick="openProductModal(${product.id})" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-sm hover:shadow">
          <span>อธิบายเพิ่มเติม</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
        <button onclick="quickQuoteForProduct('${product.titleTh}')" title="ขอใบเสนอราคา" class="bg-slate-100 hover:bg-slate-200 text-slate-700 p-2.5 rounded-xl transition flex items-center justify-center">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Render Home Page Featured Products
function renderHomeProducts() {
  const container = document.getElementById('homeFeaturedGrid');
  if (!container) return;

  const featured = productsData.slice(0, 5);
  container.innerHTML = featured.map(product => `
    <div class="product-card bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:border-blue-300">
      <div class="bg-slate-50 p-6 flex items-center justify-center h-52 border-b border-slate-100">
        <img src="${product.image}" alt="${product.titleEn}" class="max-h-full max-w-full object-contain">
      </div>
      <div class="p-6">
        <h3 class="text-lg font-bold text-slate-900 mb-1">${product.titleEn}</h3>
        <p class="text-sm text-slate-500 mb-4">${product.subtitle}</p>
        <button onclick="openProductModal(${product.id})" class="text-blue-600 hover:text-blue-800 text-sm font-semibold inline-flex items-center gap-1.5 transition">
          <span>อธิบายเพิ่มเติม</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
    </div>
  `).join('') + `
    <!-- CTA Card (Matching user screenshot) -->
    <div class="bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-2xl p-6 text-white flex flex-col justify-between border border-slate-800 shadow-md">
      <div>
        <div class="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mb-4 text-xl">💡</div>
        <h3 class="text-xl font-bold mb-2">NOT SURE WHAT YOU NEED?</h3>
        <p class="text-slate-300 text-sm leading-relaxed mb-6">
          บอกน้ำหนักของชิ้นงาน (ตัน), สภาพแวดล้อมหน้างาน, และระยะยกที่ต้องการ เราจะช่วยคำนวณและเสนอสเปกสลิงที่ปลอดภัยและคุ้มค่าที่สุดให้คุณ
        </p>
      </div>
      <a href="#contact" class="w-full bg-white hover:bg-slate-100 text-slate-900 text-sm font-bold py-3 px-4 rounded-xl transition text-center flex items-center justify-center gap-2">
        <span>ปรึกษาวิศวกรของเรา</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
      </a>
    </div>
  `;
}

// Open Detailed Product Modal
function openProductModal(productId) {
  const product = productsData.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('productDetailModal');
  const modalContent = document.getElementById('modalProductDetails');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <!-- Left Column: Image & Quick Info -->
      <div class="lg:col-span-5 flex flex-col gap-4">
        <div class="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-center justify-center h-72">
          <img src="${product.image}" alt="${product.titleEn}" class="max-h-full max-w-full object-contain">
        </div>
        
        <div class="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm space-y-2">
          <div class="font-bold text-blue-950 flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            <span>มาตรฐานความปลอดภัย (Safety Factor)</span>
          </div>
          <p class="text-blue-900 font-semibold">${product.safetyFactor}</p>
          <p class="text-xs text-blue-700">ผ่านการทดสอบ Proof Load Testing 100% พร้อมออกใบ Certificate of Conformity ทุกคำสั่งซื้อ</p>
        </div>

        <div class="bg-slate-900 text-white rounded-2xl p-4 text-xs space-y-1.5">
          <div class="text-slate-400 font-semibold">การใช้งานที่เหมาะสม (Applications):</div>
          <div class="text-slate-200">${product.applications}</div>
        </div>
      </div>

      <!-- Right Column: Full Specifications & Table -->
      <div class="lg:col-span-7 flex flex-col justify-between">
        <div>
          <div class="flex items-center gap-2 mb-1">
            <span class="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full">${product.badge}</span>
            <span class="text-xs font-semibold text-slate-400">${product.titleEn}</span>
          </div>
          <h2 class="text-2xl font-extrabold text-slate-900 mb-2">${product.titleTh}</h2>
          <p class="text-sm text-slate-600 mb-6 leading-relaxed">${product.subtitle}</p>

          <!-- Specifications Highlights -->
          <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            คุณสมบัติและการผลิต
          </h4>
          <ul class="space-y-2 mb-6">
            ${product.specs.map(s => `
              <li class="text-sm text-slate-700 flex items-start gap-2.5">
                <svg class="w-4 h-4 text-blue-600 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                <span>${s}</span>
              </li>
            `).join('')}
          </ul>

          <!-- Spec Table -->
          <h4 class="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-blue-600"></span>
            ตารางพิกัดยกตัวอย่าง (Working Load Limit)
          </h4>
          <div class="overflow-x-auto rounded-xl border border-slate-200 mb-6">
            <table class="w-full text-left border-collapse spec-table">
              <thead>
                <tr>
                  <th>ขนาด (มม.)</th>
                  <th>1 ขา (ตรง)</th>
                  <th>2 ขา (45°)</th>
                  <th>2 ขา (60°)</th>
                  <th>4 ขา / หมายเหตุ</th>
                </tr>
              </thead>
              <tbody>
                ${product.tableData.map(row => `
                  <tr>
                    <td class="font-bold text-slate-800">${row.size}</td>
                    <td class="text-blue-700 font-semibold">${row.single}</td>
                    <td>${row.twoLeg45}</td>
                    <td>${row.twoLeg60}</td>
                    <td class="text-slate-600">${row.fourLeg}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex flex-wrap gap-3 pt-4 border-t border-slate-100">
          <button onclick="closeProductModal(); quickQuoteForProduct('${product.titleTh}')" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl transition shadow-md flex items-center justify-center gap-2 text-sm">
            <span>ขอใบเสนอราคาสำหรับสินค้านี้</span>
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </button>
          <button onclick="closeProductModal()" class="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-3 px-6 rounded-xl transition text-sm">
            ปิดหน้าต่าง
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.classList.add('overflow-hidden');
}

function closeProductModal() {
  const modal = document.getElementById('productDetailModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  }
}

// Quick Quote from Product
function quickQuoteForProduct(productName) {
  window.location.hash = '#contact';
  setTimeout(() => {
    const subjectSelect = document.getElementById('enquirySubject');
    const messageInput = document.getElementById('enquiryMessage');
    if (subjectSelect) subjectSelect.value = 'quote';
    if (messageInput) {
      messageInput.value = `สวัสดีครับ ต้องการขอใบเสนอราคาสำหรับ: ${productName}\n- ขนาดเส้นผ่านศูนย์กลาง (มม.): \n- ความยาวที่ต้องการ (เมตร): \n- จำนวน (เส้น/ชุด): \n- พิกัดรับน้ำหนักที่ต้องการใช้งาน (ตัน): `;
      messageInput.focus();
    }
  }, 200);
}

// Interactive Spec & Weight Calculator
function setupQuoteCalculator() {
  const typeSelect = document.getElementById('calcType');
  const diaInput = document.getElementById('calcDiameter');
  const lengthInput = document.getElementById('calcLength');
  const legsSelect = document.getElementById('calcLegs');
  const resultWll = document.getElementById('calcResultWll');
  const resultWeight = document.getElementById('calcResultWeight');

  if (!typeSelect || !diaInput || !lengthInput || !resultWll) return;

  function calculate() {
    const type = typeSelect.value;
    const dia = parseFloat(diaInput.value) || 12;
    const length = parseFloat(lengthInput.value) || 2;
    const legs = parseInt(legsSelect ? legsSelect.value : 1) || 1;

    let wll = 0;
    let approxKg = 0;

    if (type === 'wire') {
      // Wire rope WLL approx formula: d^2 * 8 / 1000 for grade 1960
      const baseWll = (dia * dia * 8.5) / 1000;
      wll = baseWll * (legs === 1 ? 1 : legs === 2 ? 1.4 : legs === 4 ? 2.1 : 1);
      approxKg = (dia * dia * 0.0036) * length * legs;
    } else if (type === 'chain') {
      // Chain G80 WLL approx
      const baseWll = (dia * dia * 0.031);
      wll = baseWll * (legs === 1 ? 1 : legs === 2 ? 1.4 : legs === 4 ? 2.1 : 1);
      approxKg = (dia * dia * 0.022) * length * legs;
    } else if (type === 'webbing') {
      // Webbing width based
      const baseWll = dia / 25; // 25mm = 1T, 50mm = 2T, etc.
      wll = baseWll * (legs === 1 ? 1 : legs === 2 ? 1.4 : 1);
      approxKg = (dia * 0.003) * length * legs;
    }

    resultWll.textContent = wll.toFixed(2) + " ตัน (Ton)";
    if (resultWeight) {
      resultWeight.textContent = approxKg.toFixed(2) + " กก. (โดยประมาณ)";
    }
  }

  typeSelect.addEventListener('change', calculate);
  diaInput.addEventListener('input', calculate);
  lengthInput.addEventListener('input', calculate);
  if (legsSelect) legsSelect.addEventListener('change', calculate);

  calculate();
}

// Contact Form Handler
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('fullName')?.value || '';
    const email = document.getElementById('emailAddress')?.value || '';

    showToast(`ขอบคุณครับ คุณ ${name} ทางทีมงาน ECM จะติดต่อกลับที่ ${email} โดยเร็วที่สุด`);
    form.reset();
  });
}

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('toastNotification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toastNotification';
    toast.className = 'toast-notification bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl border border-blue-500/30 flex items-center gap-3 text-sm font-medium';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <div class="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
      <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
    </div>
    <div>${message}</div>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 4500);
}
'''

with open('assets/js/main.js', 'w', encoding='utf-8') as f:
    f.write(js_content.strip())
print('Generated JS.')

print("All base assets generated successfully!")
