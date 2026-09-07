/**
 * ECM LTD. - Interactive Website Script
 * Products Data (10 รายการ), Spec Calculator, Modals & Navigation
 */

// ข้อมูลสินค้าครบทั้ง 10 ชิ้น พร้อมคำอธิบายตามมาตรฐานญี่ปุ่น (JIS) และตารางพิกัดยกสูงสุดที่ 28 มม.
const productsData = [
  {
    id: 1,
    titleTh: "ลวดสลิง 6 x 19",
    titleEn: "Steel Wire Rope 6 x 19",
    badge: "JIS Standard",
    subtitle: "ลวดสลิงเหล็กกล้า 6 เกลียว โครงสร้างมาตรฐาน แข็งแกร่งทนทาน ทนแรงดึงและแรงกดทับได้ดีเยี่ยม",
    category: "wire-rope",
    image: "assets/images/sling6x19.png",
    diameters: "6 มม. ถึง 28 มม. (มีสต็อกพร้อมตัดตามขนาด)",
    lengths: "0.5 เมตร ถึง 1,000+ เมตร (ตัดและสั่งทำตามความยาวหน้างาน)",
    suitableFor: "งานโรงงานอุตสาหกรรมทั่วไป, งานก่อสร้าง, รอกและเครนโรงงาน, งานลากจูง และงานผูกยกชิ้นงานทั่วไป",
    safetyFactor: "มาตรฐานอุตสาหกรรมญี่ปุ่น JIS G 3525 (Safety Factor 5:1 หรือ 6:1 ตามลักษณะงานยก)",
    specs: [
      "รูปแบบงานที่รองรับ: งานโรงงาน, งานก่อสร้าง, เครนและรอก, งานลากจูง, งานผูกยก และงานขนย้ายในโกดังสินค้า",
      "โครงสร้างลวดสลิง: โครงสร้าง 6 x 19 (6 เกลียวหลัก เกลียวละ 19 เส้น) แกนเหล็ก IWRC ทนแรงบีบอัดสูง หรือแกนเชือก FC ให้ความอ่อนตัว",
      "คุณสมบัติเด่น: ลวดสลิงมีคุณสมบัติแข็งแรงเป็นพิเศษ รับน้ำหนักได้มาก ทนทานต่อแรงดึงสูงและการสึกหรอจากการเสียดสี มีความยืดหยุ่นตัวดี เหมาะสำหรับใช้ในงานยกและเคลื่อนย้ายวัสดุโครงสร้างเหล็ก ชิ้นส่วนเครื่องจักร และท่อเหล็ก",
      "การปรับแต่งเข้าหัว: อัดปลอกไฮดรอลิกอลูมิเนียมมาตรฐาน, ถักหัวห่วง (Hand Splice), ใส่ห่วงหัวใจ (Thimble) และประกอบตะขอนิรภัย",
      "การตรวจสอบคุณภาพ: ผ่านการทดสอบแรงดึงจริง (Proof Load Test 100%) พร้อมออกเอกสารรับรอง Certificate ตามมาตรฐานวิศวกรรม"
    ],
    tableData: [
      { size: "8 มม.", single: "0.75 ตัน", twoLeg45: "1.05 ตัน", twoLeg60: "0.75 ตัน", fourLeg: "1.55 ตัน" },
      { size: "10 มม.", single: "1.15 ตัน", twoLeg45: "1.60 ตัน", twoLeg60: "1.15 ตัน", fourLeg: "2.40 ตัน" },
      { size: "12 มม.", single: "1.70 ตัน", twoLeg45: "2.38 ตัน", twoLeg60: "1.70 ตัน", fourLeg: "3.57 ตัน" },
      { size: "16 มม.", single: "3.00 ตัน", twoLeg45: "4.20 ตัน", twoLeg60: "3.00 ตัน", fourLeg: "6.30 ตัน" },
      { size: "20 มม.", single: "4.70 ตัน", twoLeg45: "6.58 ตัน", twoLeg60: "4.70 ตัน", fourLeg: "9.87 ตัน" },
      { size: "24 มม.", single: "6.80 ตัน", twoLeg45: "9.52 ตัน", twoLeg60: "6.80 ตัน", fourLeg: "14.28 ตัน" },
      { size: "28 มม.", single: "9.30 ตัน", twoLeg45: "13.02 ตัน", twoLeg60: "9.30 ตัน", fourLeg: "19.53 ตัน" }
    ],
    applications: "งานโรงงาน, งานก่อสร้าง, เครนและรอก, งานลากจูง, งานผูกยก และงานเคลื่อนย้ายโครงสร้างเหล็ก/เครื่องจักร"
  },
  {
    id: 2,
    titleTh: "ลวดสลิง 6 x 19 COMPACTED",
    titleEn: "Compacted Wire Rope 6 x 19",
    badge: "JIS Compacted",
    subtitle: "ลวดสลิงอัดแน่นพิเศษ ผิวเรียบลื่น ลดแรงเค้นบนร่องดรัมและพูลเลย์ ยืดอายุการใช้งานยาวนาน",
    category: "wire-rope",
    image: "assets/images/sling6x19com.png",
    diameters: "สอบถามเพิ่มเติมได้ เกี่ยวกับขนาด(มม.)",
    lengths: "สอบถามเพิ่มเติมได้ เกี่ยวกับความยาว(เมตร)",
    suitableFor: "งานเครนและรอกความเร็วสูง, งานดรัมม้วนหลายชั้น (Multi-layer Drum), งานโรงงานผลิตเหล็ก และงานลากจูงหนัก",
    safetyFactor: "มาตรฐานอุตสาหกรรมญี่ปุ่น JIS G 3525 ชนิดเกลียวอัดแน่น (Safety Factor 5:1)",
    specs: [
      "รูปแบบงานที่รองรับ: เครนและรอก, งานโรงงานอุตสาหกรรมหนัก, งานก่อสร้าง, งานลากจูง และงานผูกยกชิ้นงานหนักพิเศษ",
      "โครงสร้างลวดสลิง: โครงสร้าง 6 x 19 Compacted ผ่านกระบวนการรีดอัดแน่นเกลียวชั้นนอก ผิวเรียบแนบชิดกัน แกนกลาง IWRC เสริมความแกร่ง",
      "คุณสมบัติเด่น: สลิงมีคุณสมบัติแข็งแรงสูงมาก รับน้ำหนักได้มากกว่าลวดธรรมดา 15-20% ทนทานต่อแรงดึงและการสึกหรอ ทนต่อแรงกดทับไม่แบนเสียรูปง่ายในร่องดรัมเครน และมีความยืดหยุ่นตัวสูง เหมาะสำหรับใช้ในงานยกและเคลื่อนย้ายแม่พิมพ์เหล็ก แผ่นเหล็กหนา และวัตถุขนาดใหญ่",
      "ข้อได้เปรียบ: ลดการเสียดสีบนรอกพูลเลย์ ทำให้รอกไม่สึกหรอเร็ว และวิ่งผ่านระบบกว้านได้อย่างราบรื่น ไร้แรงสะดุด",
      "การรับรองคุณภาพ: ทดสอบค่า Breaking Load จริงตามมาตรฐาน JIS พร้อมใบ Certificate ประจำล็อตการผลิต"
    ],
    tableData: [
      { size: "8 มม.", single: "0.85 ตัน", twoLeg45: "1.19 ตัน", twoLeg60: "0.85 ตัน", fourLeg: "1.78 ตัน" },
      { size: "10 มม.", single: "1.35 ตัน", twoLeg45: "1.89 ตัน", twoLeg60: "1.35 ตัน", fourLeg: "2.83 ตัน" },
      { size: "12 มม.", single: "1.95 ตัน", twoLeg45: "2.73 ตัน", twoLeg60: "1.95 ตัน", fourLeg: "4.09 ตัน" },
      { size: "16 มม.", single: "3.45 ตัน", twoLeg45: "4.83 ตัน", twoLeg60: "3.45 ตัน", fourLeg: "7.24 ตัน" },
      { size: "20 มม.", single: "5.40 ตัน", twoLeg45: "7.56 ตัน", twoLeg60: "5.40 ตัน", fourLeg: "11.34 ตัน" },
      { size: "24 มม.", single: "7.80 ตัน", twoLeg45: "10.92 ตัน", twoLeg60: "7.80 ตัน", fourLeg: "16.38 ตัน" },
      { size: "28 มม.", single: "10.70 ตัน", twoLeg45: "14.98 ตัน", twoLeg60: "10.70 ตัน", fourLeg: "22.47 ตัน" }
    ],
    applications: "เครนและรอก, งานโรงงานอุตสาหกรรม, งานก่อสร้าง, งานลากจูง และงานยกแม่พิมพ์อุตสาหกรรม"
  },
  {
    id: 3,
    titleTh: "ลวดสลิง 6 x 36",
    titleEn: "Steel Wire Rope 6 x 36 WS",
    badge: "JIS Standard",
    subtitle: "ลวดสลิงโครงสร้างฝอยละเอียด โค้งงอผ่านรอกได้นิ่มนวล ยืดหยุ่นสูงสุดในตระกูลสลิงยก 6 เกลียว",
    category: "wire-rope",
    image: "assets/images/sling6x36.png",
    diameters: "สอบถามเพิ่มเติมได้ เกี่ยวกับขนาด(มม.)",
    lengths: "สอบถามเพิ่มเติมได้ เกี่ยวกับความยาว(เมตร)",
    suitableFor: "งานผูกยกชิ้นงาน (Sling Assemblies), งานเครนและรอกทุกชนิด, งานก่อสร้าง, งานโรงงาน และงานท่าเรือ",
    safetyFactor: "มาตรฐานอุตสาหกรรมญี่ปุ่น JIS G 3525 Warrington-Seale (Safety Factor 5:1)",
    specs: [
      "รูปแบบงานที่รองรับ: งานผูกยก (Rigging & Slings), เครนและรอก, งานโรงงาน, งานก่อสร้าง, งานเรือ/ท่าเรือ และงานประกอบชิ้นส่วนโครงสร้าง",
      "โครงสร้างลวดสลิง: โครงสร้าง 6 x 36 WS (Warrington Seale) ประกอบด้วยเส้นลวดฝอย 36 เส้นต่อเกลียว แกนเหล็ก IWRC แข็งแรงพิเศษ",
      "คุณสมบัติเด่น: สลิงมีคุณสมบัติแข็งแรง รับน้ำหนักได้มาก ทนต่อแรงดึงสูง มีความยืดหยุ่นและอ่อนตัวสูงสุด ทนต่อแรงล้าจากการดัดงอซ้ำๆ (Bending Fatigue) ได้ดีเยี่ยม เหมาะสำหรับใช้ในงานยกและเคลื่อนย้ายวัสดุที่มีรูปร่างซับซ้อน ชิ้นงานเครื่องจักร ท่อเหล็ก และโครงสร้างเหล็กก่อสร้าง",
      "การใช้งานอเนกประสงค์: นิยมนำมาทำชุดสลิงยกของ 1 ขา, 2 ขา, 3 ขา และ 4 ขา มากที่สุดในภาคอุตสาหกรรม",
      "การรับรองคุณภาพ: ผ่านการทดสอบ Proof Load Testing 100% พร้อมป้ายสแตนเลสระบุสเปกตามเกณฑ์ JIS"
    ],
    tableData: [
      { size: "8 มม.", single: "0.78 ตัน", twoLeg45: "1.09 ตัน", twoLeg60: "0.78 ตัน", fourLeg: "1.63 ตัน" },
      { size: "10 มม.", single: "1.20 ตัน", twoLeg45: "1.68 ตัน", twoLeg60: "1.20 ตัน", fourLeg: "2.52 ตัน" },
      { size: "12 มม.", single: "1.75 ตัน", twoLeg45: "2.45 ตัน", twoLeg60: "1.75 ตัน", fourLeg: "3.67 ตัน" },
      { size: "16 มม.", single: "3.10 ตัน", twoLeg45: "4.34 ตัน", twoLeg60: "3.10 ตัน", fourLeg: "6.51 ตัน" },
      { size: "20 มม.", single: "4.85 ตัน", twoLeg45: "6.79 ตัน", twoLeg60: "4.85 ตัน", fourLeg: "10.18 ตัน" },
      { size: "24 มม.", single: "7.00 ตัน", twoLeg45: "9.80 ตัน", twoLeg60: "7.00 ตัน", fourLeg: "14.70 ตัน" },
      { size: "28 มม.", single: "9.50 ตัน", twoLeg45: "13.30 ตัน", twoLeg60: "9.50 ตัน", fourLeg: "19.95 ตัน" }
    ],
    applications: "งานผูกยก, เครนและรอก, งานก่อสร้าง, งานโรงงาน, งานเรือ/ท่าเรือ และงานยกชิ้นงานซับซ้อน"
  },
  {
    id: 4,
    titleTh: "ลวดสลิง 8 x 26 COMPACTED",
    titleEn: "Compacted Wire Rope 8 x 26",
    badge: "JIS High Strength",
    subtitle: "ลวดสลิง 8 เกลียวอัดแน่น ทรงกลมสมบูรณ์แบบ กระจายแรงกดสม่ำเสมอ ทนการขัดสีสูงสุด",
    category: "wire-rope",
    image: "assets/images/sling8x26com.png",
    diameters: "สอบถามเพิ่มเติมได้ เกี่ยวกับขนาด(มม.)",
    lengths: "สอบถามเพิ่มเติมได้ เกี่ยวกับความยาว(เมตร)",
    suitableFor: "งานเครนท่าเรือ, เครนโรงงานรับงานหนักต่อเนื่อง (Heavy Duty Crane), งานรอกไฟฟ้า และงานเคลื่อนย้ายตู้คอนเทนเนอร์",
    safetyFactor: "มาตรฐานอุตสาหกรรมญี่ปุ่น JIS G 3525 Grade E/S (Safety Factor 5:1)",
    specs: [
      "รูปแบบงานที่รองรับ: เครนและรอก, งานเรือ/ท่าเรือ, งานโรงงานอุตสาหกรรมหนัก, งานก่อสร้าง และงานผูกยกชิ้นงานหนัก",
      "โครงสร้างลวดสลิง: โครงสร้าง 8 x 26 Compacted (8 เกลียวชั้นนอกแบบรีดอัดแน่น) แกนกลาง IWRC ชนิดพิเศษ",
      "คุณสมบัติเด่น: สลิงมีคุณสมบัติแข็งแรงสูงเป็นเลิศ รับน้ำหนักได้มหาศาล ทนทานต่อแรงดึงและแรงกระชาก (Shock Load) ผิวภายนอกกลมเรียบเนียน ทนต่อการขัดสีและลดแรงเค้นบนร่องพูลเลย์ มีความยืดหยุ่นสูง เหมาะสำหรับใช้ในงานยกและเคลื่อนย้ายวัสดุหนักต่อเนื่อง เช่น คอนเทนเนอร์ แม่พิมพ์ขนาดใหญ่ และคอยล์เหล็ก",
      "อายุการใช้งาน: ใช้งานได้ยาวนานกว่าลวด 6 เกลียวทั่วไป ลดรอบเวลาซ่อมบำรุงในโรงงานอย่างเห็นได้ชัด",
      "มาตรฐานตรวจสอบ: ตรวจสอบความถูกต้องและทดสอบแรงดึงตามข้อกำหนด JIS"
    ],
    tableData: [
      { size: "10 มม.", single: "1.45 ตัน", twoLeg45: "2.03 ตัน", twoLeg60: "1.45 ตัน", fourLeg: "3.04 ตัน" },
      { size: "12 มม.", single: "2.10 ตัน", twoLeg45: "2.94 ตัน", twoLeg60: "2.10 ตัน", fourLeg: "4.41 ตัน" },
      { size: "14 มม.", single: "2.85 ตัน", twoLeg45: "3.99 ตัน", twoLeg60: "2.85 ตัน", fourLeg: "5.98 ตัน" },
      { size: "16 มม.", single: "3.75 ตัน", twoLeg45: "5.25 ตัน", twoLeg60: "3.75 ตัน", fourLeg: "7.87 ตัน" },
      { size: "20 มม.", single: "5.85 ตัน", twoLeg45: "8.19 ตัน", twoLeg60: "5.85 ตัน", fourLeg: "12.28 ตัน" },
      { size: "24 มม.", single: "8.40 ตัน", twoLeg45: "11.76 ตัน", twoLeg60: "8.40 ตัน", fourLeg: "17.64 ตัน" },
      { size: "28 มม.", single: "11.50 ตัน", twoLeg45: "16.10 ตัน", twoLeg60: "11.50 ตัน", fourLeg: "24.15 ตัน" }
    ],
    applications: "เครนและรอก, งานเรือ/ท่าเรือ, งานโรงงานอุตสาหกรรมหนัก, งานยกแม่พิมพ์ยักษ์ และงานคอยล์เหล็ก"
  },
  {
    id: 5,
    titleTh: "ลวดสลิง 29 x 7 COMPACTED",
    titleEn: "Steel Wire Rope 29 x 7 Compacted",
    badge: "JIS Non-Rotating",
    subtitle: "ลวดสลิงกันหมุนชนิดเกลียวอัดแน่น ต้านการควงสว่าน เสถียรภาพสูงสำหรับงานยกสูง",
    category: "crane",
    image: "assets/images/sling29x7com.png",
    diameters: "สอบถามเพิ่มเติมได้ เกี่ยวกับขนาด(มม.)",
    lengths: "สอบถามเพิ่มเติมได้ เกี่ยวกับความยาว(เมตร)",
    suitableFor: "งานทาวเวอร์เครนก่อสร้างอาคารสูง, ปั้นจั่นตอกเสาเข็ม, งานเครนและรอกยกของในแนวดิ่งระยะลึก",
    safetyFactor: "มาตรฐานอุตสาหกรรมญี่ปุ่น JIS G 3525 Rotation-Resistant Class (Safety Factor 5:1 ถึง 6:1)",
    specs: [
      "รูปแบบงานที่รองรับ: งานก่อสร้างอาคารสูง, เครนและรอก, งานทาวเวอร์เครน, งานเรือ/ท่าเรือ และงานยกดิ่งระยะลึก",
      "โครงสร้างลวดสลิง: โครงสร้าง 29 x 7 Compacted (เกลียวชั้นในและชั้นนอกบิดสวนทางกันเพื่อหักล้างแรงบิด) พร้อมการรีดอัดแน่นผิว",
      "คุณสมบัติเด่น: สลิงมีคุณสมบัติแข็งแรง รับน้ำหนักได้มาก ทนต่อแรงดึงสูง ไม่หมุนคลายตัวขณะยกชิ้นงานลอยในอากาศ (Zero-Twist Property) ทนต่อแรงกดทับบนดรัมกว้าน และมีความยืดหยุ่นตัวดี เหมาะสำหรับใช้ในงานยกและเคลื่อนย้ายวัสดุก่อสร้างขึ้นสู่ยอดตึก แผ่นคอนกรีตสำเร็จรูป และเสาเข็ม",
      "ความปลอดภัยสูง: ป้องกันอันตรายจากชิ้นงานหมุนเหวี่ยงกระแทกนั่งร้านหรือโครงสร้างอาคาร",
      "การรับรองคุณภาพ: ออกหนังสือรับรองผลทดสอบ Non-Rotating Test Certificate ตามเกณฑ์ JIS"
    ],
    tableData: [
      { size: "10 มม.", single: "1.38 ตัน", twoLeg45: "1.93 ตัน", twoLeg60: "1.38 ตัน", fourLeg: "Non-Rotating" },
      { size: "12 มม.", single: "1.98 ตัน", twoLeg45: "2.77 ตัน", twoLeg60: "1.98 ตัน", fourLeg: "High Stability" },
      { size: "14 มม.", single: "2.75 ตัน", twoLeg45: "3.85 ตัน", twoLeg60: "2.75 ตัน", fourLeg: "Tower Crane" },
      { size: "16 มม.", single: "3.60 ตัน", twoLeg45: "5.04 ตัน", twoLeg60: "3.60 ตัน", fourLeg: "JIS G 3525" },
      { size: "20 มม.", single: "5.60 ตัน", twoLeg45: "7.84 ตัน", twoLeg60: "5.60 ตัน", fourLeg: "Deep Hoisting" },
      { size: "24 มม.", single: "8.10 ตัน", twoLeg45: "11.34 ตัน", twoLeg60: "8.10 ตัน", fourLeg: "Heavy Lift" },
      { size: "28 มม.", single: "11.10 ตัน", twoLeg45: "15.54 ตัน", twoLeg60: "11.10 ตัน", fourLeg: "Construction" }
    ],
    applications: "งานก่อสร้าง, ทาวเวอร์เครน, เครนและรอก, งานเรือ/ท่าเรือ และงานยกชิ้นงานขึ้นตึกสูง"
  },
  {
    id: 6,
    titleTh: "ลวดสลิง 35 x 7",
    titleEn: "Steel Wire Rope 35 x 7 Multi-Strand",
    badge: "JIS Non-Rotating",
    subtitle: "ลวดสลิงกันหมุนเกรดพรีเมียม 35 เกลียว ให้ความนิ่งและสมดุลสูงสุดในการยกแนวดิ่ง",
    category: "crane",
    image: "assets/images/sling35x7.png",
    diameters: "สอบถามเพิ่มเติมได้ เกี่ยวกับขนาด(มม.)",
    lengths: "สอบถามเพิ่มเติมได้ เกี่ยวกับความยาว(เมตร)",
    suitableFor: "งานโมบายเครนขนาดใหญ่, ทาวเวอร์เครน, งานขุดเจาะใต้ดิน/เหมืองแร่ และงานยกดิ่งที่เน้นความนิ่ง 100%",
    safetyFactor: "มาตรฐานอุตสาหกรรมญี่ปุ่น JIS G 3525 High-Class Rotation Resistant (Safety Factor 5:1 ถึง 6:1)",
    specs: [
      "รูปแบบงานที่รองรับ: เครนและรอก, งานก่อสร้าง, โมบายเครน, งานเรือ/ท่าเรือ และงานยกแนวดิ่งระยะลึกมาก",
      "โครงสร้างลวดสลิง: โครงสร้าง 35 x 7 Multi-Strand (ประกอบด้วยเกลียวย่อย 35 เกลียว จัดเรียงสมดุลแรงบิดอย่างสมบูรณ์แบบ)",
      "คุณสมบัติเด่น: สลิงมีคุณสมบัติแข็งแรง รับน้ำหนักได้มาก ทนต่อแรงดึงสูง มีความยืดหยุ่นตัวสูงเป็นพิเศษ ให้การเคลื่อนตัวที่นิ่มนวล ไม่เกิดการบิดตัวแม้ปล่อยสายยาวหลายร้อยเมตร เหมาะสำหรับใช้ในงานยกและเคลื่อนย้ายวัสดุ อุปกรณ์วิศวกรรมที่มีความแม่นยำสูง และงานก่อสร้างโครงสร้างเหล็กสูง",
      "สารหล่อลื่น: ผ่านการอัดสารหล่อลื่นป้องกันสนิมสูตรพิเศษลึกถึงแกนในตามมาตรฐานญี่ปุ่น",
      "การรับรองคุณภาพ: ผ่านการทดสอบ Magnetic NDT และ Proof Testing ครบถ้วน"
    ],
    tableData: [
      { size: "12 มม.", single: "2.05 ตัน", twoLeg45: "2.87 ตัน", twoLeg60: "2.05 ตัน", fourLeg: "Non-Rotating" },
      { size: "14 มม.", single: "2.80 ตัน", twoLeg45: "3.92 ตัน", twoLeg60: "2.80 ตัน", fourLeg: "High Stability" },
      { size: "16 มม.", single: "3.65 ตัน", twoLeg45: "5.11 ตัน", twoLeg60: "3.65 ตัน", fourLeg: "Mobile Crane" },
      { size: "18 มม.", single: "4.65 ตัน", twoLeg45: "6.51 ตัน", twoLeg60: "4.65 ตัน", fourLeg: "JIS G 3525" },
      { size: "20 มม.", single: "5.70 ตัน", twoLeg45: "7.98 ตัน", twoLeg60: "5.70 ตัน", fourLeg: "Deep Shaft" },
      { size: "24 มม.", single: "8.20 ตัน", twoLeg45: "11.48 ตัน", twoLeg60: "8.20 ตัน", fourLeg: "Heavy Lift" },
      { size: "28 มม.", single: "11.20 ตัน", twoLeg45: "15.68 ตัน", twoLeg60: "11.20 ตัน", fourLeg: "High Precision" }
    ],
    applications: "เครนและรอก, งานก่อสร้าง, โมบายเครน, งานเรือ/ท่าเรือ และงานยกอุปกรณ์ที่มีความแม่นยำสูง"
  },
  {
    id: 7,
    titleTh: "ลวดสลิงยกของอัดปลอก",
    titleEn: "Wire Rope Sling With Soft Eyes",
    badge: "JIS Swaged",
    subtitle: "ชุดสลิงยกของอัดปลอกไฮดรอลิกหัวห่วงเปล่า ตาห่วงกว้าง คล้องเกี่ยวง่าย รวดเร็วและแข็งแรง",
    category: "assembly",
    image: "assets/images/ลวดสลิงยกของอัดปลอก.png",
    diameters: "สอบถามเพิ่มเติมได้ เกี่ยวกับขนาด(มม.)",
    lengths: "สอบถามเพิ่มเติมได้ เกี่ยวกับความยาว(เมตร)",
    suitableFor: "งานผูกยกชิ้นงานทั่วไป, งานโรงงาน, งานก่อสร้าง, งานลากจูง และงานคล้องยกแบบ Choker Hitch",
    safetyFactor: "มาตรฐานอุตสาหกรรมญี่ปุ่น JIS B 8817 (Wire Rope Slings for General Purposes - Safety Factor 5:1)",
    specs: [
      "รูปแบบงานที่รองรับ: งานผูกยก, งานโรงงาน, งานก่อสร้าง, งานลากจูง และงานยกชิ้นงานในโกดังสินค้า",
      "โครงสร้างลวดสลิง: ใช้ลวดสลิงคุณภาพสูงโครงสร้าง 6 x 24 หรือ 6 x 36 IWRC อัดปลอกไฮดรอลิกอลูมิเนียมมาตรฐาน JIS ปลอกยึดแน่นสนิท 100%",
      "คุณสมบัติเด่น: สลิงมีคุณสมบัติแข็งแรง รับน้ำหนักได้มาก ทนต่อแรงดึงและการสึกหรอได้ดี และมีความยืดหยุ่นสูง ตาห่วงหัวสลิงอ่อนนุ่ม คล้องเกี่ยวง่ายและแนบกับชิ้นงานได้ดี เหมาะสำหรับใช้ในงานยกและเคลื่อนย้ายวัสดุ เช่น ชิ้นส่วนเหล็กรูปพรรณ แท่นเครื่องจักร และงานขนส่งสินค้า",
      "จุดเด่นการใช้งาน: ใช้งานผูกรัดแบบรัดคอ (Choker) หรือยกคู่ (Basket) ได้สะดวก น้ำหนักเบา ปลอดภัย",
      "เอกสารรับรอง: ผ่านการตรวจสอบความยาวและค่าแรงดึงจริง พร้อมออกใบ Certificate ทุกคำสั่งซื้อ"
    ],
    tableData: [
      { size: "8 มม.", single: "0.75 ตัน", twoLeg45: "1.05 ตัน", twoLeg60: "0.75 ตัน", fourLeg: "1.55 ตัน" },
      { size: "10 มม.", single: "1.15 ตัน", twoLeg45: "1.60 ตัน", twoLeg60: "1.15 ตัน", fourLeg: "2.40 ตัน" },
      { size: "12 มม.", single: "1.70 ตัน", twoLeg45: "2.38 ตัน", twoLeg60: "1.70 ตัน", fourLeg: "3.57 ตัน" },
      { size: "16 มม.", single: "3.00 ตัน", twoLeg45: "4.20 ตัน", twoLeg60: "3.00 ตัน", fourLeg: "6.30 ตัน" },
      { size: "20 มม.", single: "4.70 ตัน", twoLeg45: "6.58 ตัน", twoLeg60: "4.70 ตัน", fourLeg: "9.87 ตัน" },
      { size: "24 มม.", single: "6.80 ตัน", twoLeg45: "9.52 ตัน", twoLeg60: "6.80 ตัน", fourLeg: "14.28 ตัน" },
      { size: "28 มม.", single: "9.30 ตัน", twoLeg45: "13.02 ตัน", twoLeg60: "9.30 ตัน", fourLeg: "19.53 ตัน" }
    ],
    applications: "งานผูกยก, งานโรงงาน, งานก่อสร้าง, งานลากจูง และงานเคลื่อนย้ายแท่นเครื่องจักร/เหล็กรูปพรรณ"
  },
  {
    id: 8,
    titleTh: "ลวดสลิงยกของอัดปลอกใส่ห่วงหัวใจ 2 ข้าง",
    titleEn: "Wire Rope Sling With Thimble Eyes Both Ends",
    badge: "JIS Rigging",
    subtitle: "สลิงยกอัดปลอกเสริมห่วงหัวใจสแตนเลส/เหล็กชุบ ป้องกันการกดทับและขัดสีของตาห่วงทั้งสองด้าน",
    category: "assembly",
    image: "assets/images/ลวดสลิงยกของอัดปลอกใส่ห่วงหัวใจ 2 ข้าง.png",
    diameters: "สอบถามเพิ่มเติมได้ เกี่ยวกับขนาด(มม.)",
    lengths: "สอบถามเพิ่มเติมได้ เกี่ยวกับความยาว(เมตร)",
    suitableFor: "งานต่อพ่วงสะเก็น (Shackle), งานยกชิ้นงานหนักในโรงงานและไซต์งานก่อสร้าง, งานเรือ/ท่าเรือ และงานผูกยก",
    safetyFactor: "มาตรฐานอุตสาหกรรมญี่ปุ่น JIS B 8817 และห่วงหัวใจมาตรฐาน JIS B 2802 (Safety Factor 5:1)",
    specs: [
      "รูปแบบงานที่รองรับ: งานผูกยก, เครนและรอก, งานโรงงาน, งานก่อสร้าง และงานเรือ/ท่าเรือ",
      "โครงสร้างลวดสลิง: ลวดสลิงแกนเหล็ก 6 x 36 WS อัดปลอกไฮดรอลิกพร้อมใส่ห่วงหัวใจ (Thimble) ทั้ง 2 ด้าน รองรับแรงกดตรงจุดเชื่อมต่อได้เต็มที่",
      "คุณสมบัติเด่น: สลิงมีคุณสมบัติแข็งแรง รับน้ำหนักได้มาก ทนต่อแรงดึงสูงมาก และทนต่อการสึกหรอจากการเสียดสีของตะขอเครนหรือสะเก็นได้อย่างยอดเยี่ยม มีความยืดหยุ่น เหมาะสำหรับใช้ในงานยกและเคลื่อนย้ายวัสดุหนัก เช่น ชิ้นงานหล่อคอนกรีต แม่พิมพ์ปั๊มโลหะ และเครื่องจักรหนักในโรงงาน",
      "การยืดอายุการใช้งาน: ห่วงหัวใจช่วยรักษารูปทรงของสายสลิง ไม่ให้หักพับงอจนเสียรูปเมื่อรับแรงยกเต็มพิกัด",
      "การรับรองคุณภาพ: ผ่านการทดสอบ Proof Load Testing 100% พร้อมป้าย Tag สแตนเลสระบุขนาดและค่า WLL ชัดเจน"
    ],
    tableData: [
      { size: "8 มม.", single: "0.75 ตัน", twoLeg45: "1.05 ตัน", twoLeg60: "0.75 ตัน", fourLeg: "1.55 ตัน" },
      { size: "10 มม.", single: "1.15 ตัน", twoLeg45: "1.60 ตัน", twoLeg60: "1.15 ตัน", fourLeg: "2.40 ตัน" },
      { size: "12 มม.", single: "1.70 ตัน", twoLeg45: "2.38 ตัน", twoLeg60: "1.70 ตัน", fourLeg: "3.57 ตัน" },
      { size: "16 มม.", single: "3.00 ตัน", twoLeg45: "4.20 ตัน", twoLeg60: "3.00 ตัน", fourLeg: "6.30 ตัน" },
      { size: "20 มม.", single: "4.70 ตัน", twoLeg45: "6.58 ตัน", twoLeg60: "4.70 ตัน", fourLeg: "9.87 ตัน" },
      { size: "24 มม.", single: "6.80 ตัน", twoLeg45: "9.52 ตัน", twoLeg60: "6.80 ตัน", fourLeg: "14.28 ตัน" },
      { size: "28 มม.", single: "9.30 ตัน", twoLeg45: "13.02 ตัน", twoLeg60: "9.30 ตัน", fourLeg: "19.53 ตัน" }
    ],
    applications: "งานผูกยก, เครนและรอก, งานโรงงาน, งานก่อสร้าง, งานเรือ/ท่าเรือ และงานยกแม่พิมพ์/เครื่องจักรหนัก"
  },
  {
    id: 9,
    titleTh: "ลวดสลิงยกของอัดปลอกใส่ห่วงหัวใจ-ตุ้ม",
    titleEn: "Wire Rope Sling With Thimble & Ball End",
    badge: "JIS Hoist",
    subtitle: "สลิงประกอบพิเศษ ด้านหนึ่งใส่ห่วงหัวใจ อีกด้านหนึ่งอัดตุ้มหยุด (Ball/Stop End) สำหรับรอกและกว้าน",
    category: "special",
    image: "assets/images/ลวดสลิงยกของอัดปลอกใส่ห่วงหัวใจ-ตุ้ม.png",
    diameters: "สอบถามเพิ่มเติมได้ เกี่ยวกับขนาด(มม.)",
    lengths: "สอบถามเพิ่มเติมได้ เกี่ยวกับความยาว(เมตร)",
    suitableFor: "งานรอกสลิงไฟฟ้า, กว้านยกสินค้า, งานลิฟต์ขนส่ง, งานดึงสลิงในรางรอก และงานโรงงานเฉพาะทาง",
    safetyFactor: "มาตรฐานอุตสาหกรรมญี่ปุ่น JIS B 8817 และ JIS F 3403 (Safety Factor 5:1)",
    specs: [
      "รูปแบบงานที่รองรับ: เครนและรอก, งานโรงงาน, งานก่อสร้าง, งานลิฟต์/กว้านยก และงานลากจูงในระบบราง",
      "โครงสร้างลวดสลิง: ลวดสลิงโครงสร้างยืดหยุ่นสูง 6 x 36 หรือ 6 x 19 ด้านหนึ่งเข้าหัวห่วงหัวใจพร้อมอัดปลอก อีกด้านอัดหัวตุ้มเหล็กกล้าแรงดันสูง ยึดแน่นไม่หลุดเลื่อน",
      "คุณสมบัติเด่น: สลิงมีคุณสมบัติแข็งแรง รับน้ำหนักได้มาก ทนต่อแรงดึงและการสึกหรอ มีความยืดหยุ่นสูง ตุ้มปลายสายทำหน้าที่เป็นจุดหยุด (Stopper) ได้แม่นยำ เหมาะสำหรับใช้ในงานยกและเคลื่อนย้ายวัสดุในแนวดิ่งผ่านระบบรอกและกว้าน เช่น ลิฟต์ส่งของในโรงงาน และรอกยกชิ้นงานในสายการผลิต",
      "ความแม่นยำสูง: ผลิตด้วยเครื่องอัดไฮดรอลิกมาตรฐานอุตสาหกรรมญี่ปุ่น ค่าพิกัดแม่นยำ ปลอดภัยสูงสุด",
      "การรับรองคุณภาพ: ผ่านการทดสอบแรงดึงส่วนหัวตุ้ม (Proof Load Testing) พร้อมเอกสารรับรอง Certificate"
    ],
    tableData: [
      { size: "8 มม.", single: "0.75 ตัน", twoLeg45: "1.05 ตัน", twoLeg60: "0.75 ตัน", fourLeg: "1.55 ตัน" },
      { size: "10 มม.", single: "1.15 ตัน", twoLeg45: "1.60 ตัน", twoLeg60: "1.15 ตัน", fourLeg: "2.40 ตัน" },
      { size: "12 มม.", single: "1.70 ตัน", twoLeg45: "2.38 ตัน", twoLeg60: "1.70 ตัน", fourLeg: "3.57 ตัน" },
      { size: "16 มม.", single: "3.00 ตัน", twoLeg45: "4.20 ตัน", twoLeg60: "3.00 ตัน", fourLeg: "6.30 ตัน" },
      { size: "20 มม.", single: "4.70 ตัน", twoLeg45: "6.58 ตัน", twoLeg60: "4.70 ตัน", fourLeg: "9.87 ตัน" },
      { size: "24 มม.", single: "6.80 ตัน", twoLeg45: "9.52 ตัน", twoLeg60: "6.80 ตัน", fourLeg: "14.28 ตัน" },
      { size: "28 มม.", single: "9.30 ตัน", twoLeg45: "13.02 ตัน", twoLeg60: "9.30 ตัน", fourLeg: "19.53 ตัน" }
    ],
    applications: "เครนและรอก, งานโรงงาน, กว้านยกสินค้า, งานลิฟต์ส่งของ และงานลากจูงในระบบราง"
  },
  {
    id: 10,
    titleTh: "ลวดสลิงยกของอัดปลอกใส่ห่วงหัวใจ-อัดปลอก",
    titleEn: "Wire Rope Sling With Thimble & Soft Eye",
    badge: "JIS Hybrid",
    subtitle: "สลิงยกแบบผสม ด้านหนึ่งใส่ห่วงหัวใจป้องกันการสึกหรอ อีกด้านเป็นตาห่วงเปล่าคล้องรัดง่าย",
    category: "assembly",
    image: "assets/images/ลวดสลิงยกของอัดปลอกใส่ห่วงหัวใจ-อัดปลอก.png",
    diameters: "สอบถามเพิ่มเติมได้ เกี่ยวกับขนาด(มม.)",
    lengths: "สอบถามเพิ่มเติมได้ เกี่ยวกับความยาว(เมตร)",
    suitableFor: "งานยกแบบคล้องรัดคอ (Choker Hitch), งานผูกยกชิ้นงานในโรงงานและไซต์ก่อสร้าง, งานลากจูง และงานเครน",
    safetyFactor: "มาตรฐานอุตสาหกรรมญี่ปุ่น JIS B 8817 (Wire Rope Slings - Safety Factor 5:1)",
    specs: [
      "รูปแบบงานที่รองรับ: งานผูกยก, งานโรงงาน, งานก่อสร้าง, งานลากจูง และงานเคลื่อนย้ายวัสดุอุตสาหกรรม",
      "โครงสร้างลวดสลิง: ลวดสลิงเหล็กกล้า 6 x 24 หรือ 6 x 36 แกนเหล็ก IWRC อัดปลอกไฮดรอลิก 2 ข้าง ด้านหนึ่งเสริมห่วงหัวใจ (Thimble) สำหรับเกี่ยวกับตะขอหรือสะเก็น อีกด้านเป็นห่วงเปล่า (Soft Eye) สอดรัดง่าย",
      "คุณสมบัติเด่น: สลิงมีคุณสมบัติแข็งแรง รับน้ำหนักได้มาก ทนต่อแรงดึงสูงและการสึกหรอ มีความยืดหยุ่นตัวดี เหมาะสำหรับใช้ในงานยกและเคลื่อนย้ายวัสดุที่ต้องใช้การผูกรัดรอบตัวชิ้นงาน เช่น ท่อเหล็ก ท่อคอนกรีต มัดเหล็กเส้น และเสาเข็ม",
      "ฟังก์ชันการทำงานคล่องตัว: ปลายข้างห่วงเปล่าสามารถสอดผ่านรูห่วงหัวใจเพื่อทำการรัดคอชิ้นงานได้อย่างแน่นหนาและไม่ลื่นหลุด",
      "การรับรองคุณภาพ: ผ่านการทดสอบแรงดึง Proof Load Testing 100% ตามมาตรฐาน JIS พร้อมใบรับรอง"
    ],
    tableData: [
      { size: "8 มม.", single: "0.75 ตัน", twoLeg45: "1.05 ตัน", twoLeg60: "0.75 ตัน", fourLeg: "1.55 ตัน" },
      { size: "10 มม.", single: "1.15 ตัน", twoLeg45: "1.60 ตัน", twoLeg60: "1.15 ตัน", fourLeg: "2.40 ตัน" },
      { size: "12 มม.", single: "1.70 ตัน", twoLeg45: "2.38 ตัน", twoLeg60: "1.70 ตัน", fourLeg: "3.57 ตัน" },
      { size: "16 มม.", single: "3.00 ตัน", twoLeg45: "4.20 ตัน", twoLeg60: "3.00 ตัน", fourLeg: "6.30 ตัน" },
      { size: "20 มม.", single: "4.70 ตัน", twoLeg45: "6.58 ตัน", twoLeg60: "4.70 ตัน", fourLeg: "9.87 ตัน" },
      { size: "24 มม.", single: "6.80 ตัน", twoLeg45: "9.52 ตัน", twoLeg60: "6.80 ตัน", fourLeg: "14.28 ตัน" },
      { size: "28 มม.", single: "9.30 ตัน", twoLeg45: "13.02 ตัน", twoLeg60: "9.30 ตัน", fourLeg: "19.53 ตัน" }
    ],
    applications: "งานผูกยก, งานโรงงาน, งานก่อสร้าง, งานลากจูง และงานรัดคอยกท่อเหล็ก/เสาเข็ม/มัดเหล็กเส้น"
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

// Render All 10 Products in Products Page
function renderProductsGrid() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  container.innerHTML = productsData.map(product => `
    <div class="product-card bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col justify-between shadow-sm hover:border-blue-300">
      <div>
        <div class="relative bg-slate-50 border-b border-slate-100 p-4 flex items-center justify-center h-56">
          <img src="${product.image}" alt="${product.titleEn}" class="max-h-full max-w-full object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105">
          <span class="absolute top-3 left-3 bg-[#0A2540] text-white text-xs font-semibold px-2.5 py-1 rounded-md backdrop-blur-sm">
            ${product.badge}
          </span>
        </div>
        <div class="p-6">
          <div class="text-xs font-bold text-blue-600 tracking-wider uppercase mb-1">${product.titleEn}</div>
          <h3 class="text-lg font-bold text-slate-900 mb-2 leading-snug">${product.titleTh}</h3>
          <p class="text-xs text-slate-600 mb-4 line-clamp-2">${product.subtitle}</p>
          
          <div class="space-y-2 text-xs bg-slate-50 p-3.5 rounded-xl border border-slate-100 mb-4">
            <div class="flex items-start justify-between">
              <span class="text-slate-500 font-medium shrink-0">ขนาด (มม.):</span>
              <span class="text-slate-800 font-semibold text-right max-w-[65%]">${product.diameters}</span>
            </div>
            <div class="flex items-start justify-between">
              <span class="text-slate-500 font-medium shrink-0">ความยาว (เมตร):</span>
              <span class="text-slate-800 font-semibold text-right max-w-[65%]">${product.lengths}</span>
            </div>
            <div class="flex items-start justify-between pt-1 border-t border-slate-200/60">
              <span class="text-slate-500 font-medium shrink-0">เหมาะสำหรับ:</span>
              <span class="text-blue-700 font-bold text-right max-w-[70%] line-clamp-2">${product.suitableFor}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="px-6 pb-6 pt-0 flex gap-2">
        <button onclick="openProductModal(${product.id})" class="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition flex items-center justify-center gap-2 shadow-sm hover:shadow">
          <span>อธิบายเพิ่มเติม</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
        </button>
        <button onclick="quickQuoteForProduct('${product.titleTh}')" title="ขอใบเสนอราคา" class="bg-slate-100 hover:bg-slate-200 text-slate-700 p-2.5 rounded-xl transition flex items-center justify-center">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        </button>
      </div>
    </div>
  `).join('');
}

// Render Home Page Featured Products (แสดงตัวอย่าง 5 ชิ้นแรก + การ์ดปรึกษาวิศวกร)
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
        <div class="text-xs font-bold text-blue-600 uppercase mb-1">${product.badge}</div>
        <h3 class="text-base font-bold text-slate-900 mb-1">${product.titleTh}</h3>
        <p class="text-xs text-slate-500 mb-4 line-clamp-2">${product.subtitle}</p>
        <button onclick="openProductModal(${product.id})" class="text-blue-600 hover:text-blue-800 text-xs font-semibold inline-flex items-center gap-1.5 transition">
          <span>อธิบายเพิ่มเติม</span>
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>
    </div>
  `).join('') + `
    <!-- CTA Card -->
    <div class="bg-gradient-to-br from-[#0A2540] to-[#0F172A] rounded-2xl p-6 text-white flex flex-col justify-between border border-slate-800 shadow-md">
      <div>
        <div class="w-10 h-10 bg-blue-600/20 text-blue-400 rounded-xl flex items-center justify-center mb-4 text-xl">💡</div>
        <h3 class="text-xl font-bold mb-2">NOT SURE WHAT YOU NEED?</h3>
        <p class="text-slate-300 text-xs leading-relaxed mb-6">
          บอกน้ำหนักของชิ้นงาน (ตัน), สภาพแวดล้อมหน้างาน และระยะยกที่ต้องการ เราจะช่วยคำนวณและเสนอสเปกสลิงมาตรฐานญี่ปุ่นที่ปลอดภัยและคุ้มค่าที่สุดให้คุณ
        </p>
      </div>
      <a href="#contact" class="w-full bg-white hover:bg-slate-100 text-slate-900 text-xs font-bold py-3 px-4 rounded-xl transition text-center flex items-center justify-center gap-2">
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
        
        <!-- มาตรฐานของญี่ปุ่น -->
        <div class="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm space-y-2">
          <div class="font-bold text-blue-950 flex items-center gap-2">
            <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
            <span>มาตรฐานความปลอดภัย (มาตรฐานของญี่ปุ่น)</span>
          </div>
          <p class="text-blue-900 font-bold text-xs sm:text-sm">${product.safetyFactor}</p>
          <p class="text-xs text-blue-700">ผ่านการทดสอบ Proof Load Testing 100% พร้อมออกใบ Certificate of Conformity ทุกคำสั่งซื้อ</p>
        </div>

        <!-- เหมาะสำหรับงานแบบไหน -->
        <div class="bg-[#0A2540] text-white rounded-2xl p-4 text-xs space-y-1.5">
          <div class="text-blue-300 font-bold uppercase tracking-wider">เหมาะสำหรับงานแบบไหน:</div>
          <div class="text-slate-200 leading-relaxed">${product.suitableFor}</div>
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
          <p class="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">${product.subtitle}</p>

          <!-- คุณสมบัติและการผลิต -->
          <h4 class="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
            คุณสมบัติและการผลิต
          </h4>
          <ul class="space-y-2.5 mb-6">
            ${product.specs.map(s => `
              <li class="text-xs sm:text-sm text-slate-700 flex items-start gap-2.5 leading-relaxed">
                <svg class="w-4 h-4 text-blue-600 mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                <span>${s}</span>
              </li>
            `).join('')}
          </ul>

          <!-- ตารางพิกัดยกตัวอย่าง สูงสุดที่ 28 มม. -->
          <div class="flex items-center justify-between mb-2">
            <h4 class="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              ตารางพิกัดยกตัวอย่าง (Working Load Limit) สูงสุดที่ 28 มม.
            </h4>
            <span class="text-[11px] text-slate-500 font-semibold">มาตรฐาน JIS</span>
          </div>
          
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
    // Clear content
    const modalContent = document.getElementById('modalProductDetails');
    if (modalContent) modalContent.innerHTML = '';
  }
}

// Quick quote shortcut to contact section
function quickQuoteForProduct(productName) {
  window.location.hash = '#contact';
  setTimeout(() => {
    const subjectSelect = document.getElementById('enquirySubject');
    const messageInput = document.getElementById('enquiryMessage');
    if (subjectSelect) subjectSelect.value = 'ขอใบเสนอราคาสลิง (Request a Quote)';
    if (messageInput) {
      messageInput.value = `สวัสดีครับ ต้องการขอใบเสนอราคาสำหรับ: ${productName}\n- ขนาดเส้นผ่านศูนย์กลาง (มม.): \n- ความยาวที่ต้องการ (เมตร): \n- จำนวน (เส้น/ชุด): \n- ลักษณะงานยกและเคลื่อนย้าย: `;
      messageInput.focus();
    }
  }, 200);
}

// Sling Spec & WLL Calculator Tool
function setupQuoteCalculator() {
  const typeSelect = document.getElementById('calcType');
  const diaInput = document.getElementById('calcDiameter');
  const lengthInput = document.getElementById('calcLength');
  const legsSelect = document.getElementById('calcLegs');
  const resultWll = document.getElementById('calcResultWll');
  const resultWeight = document.getElementById('calcResultWeight');

  if (!typeSelect || !diaInput || !lengthInput || !resultWll) return;

  function calculate() {
    const dia = parseFloat(diaInput.value) || 12;
    const length = parseFloat(lengthInput.value) || 2;
    const legs = parseInt(legsSelect ? legsSelect.value : 1) || 1;

    // Calculation approximation based on standard steel wire rope formula
    const baseWll = (dia * dia * 8.5) / 1000;
    const wll = baseWll * (legs === 1 ? 1 : legs === 2 ? 1.4 : legs === 4 ? 2.1 : 1);
    const approxKg = (dia * dia * 0.0036) * length * legs;

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

// Contact Form Handler - Real Email Sending to ecm2561@gmail.com
function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const submitBtn = document.getElementById('submitBtn');
    const submitBtnText = document.getElementById('submitBtnText');
    const submitSpinner = document.getElementById('submitSpinner');
    const submitIcon = document.getElementById('submitIcon');

    const name = document.getElementById('fullName')?.value || '';
    const email = document.getElementById('emailAddress')?.value || '';
    const formData = new FormData(form);

    // Set Loading State
    if (submitBtn) submitBtn.disabled = true;
    if (submitSpinner) submitSpinner.classList.remove('hidden');
    if (submitIcon) submitIcon.classList.add('hidden');
    if (submitBtnText) submitBtnText.textContent = 'กำลังส่งข้อความ...';

    try {
      const response = await fetch('https://formsubmit.co/ajax/ecm2561@gmail.com', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        showToast(`ส่งข้อความสำเร็จ! ระบบได้ส่งข้อมูลไปยังอีเมล ecm2561@gmail.com เรียบร้อยแล้ว ขอบคุณครับ คุณ ${name}`);
        form.reset();
      } else {
        // Fallback: regular form submit
        form.submit();
      }
    } catch (error) {
      console.warn('AJAX submit failed, falling back to standard submit:', error);
      // Fallback: standard submission
      form.submit();
    } finally {
      if (submitBtn) submitBtn.disabled = false;
      if (submitSpinner) submitSpinner.classList.add('hidden');
      if (submitIcon) submitIcon.classList.remove('hidden');
      if (submitBtnText) submitBtnText.textContent = 'Send Enquiry / ส่งข้อความ';
    }
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
    <div class="text-xs sm:text-sm leading-relaxed">${message}</div>
  `;

  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 6000);
}