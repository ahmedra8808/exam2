/* script.js */
let questions = [
    {
        question: "Patients in the oliguric phase of renal failure might have a 24-hour urine output of less than:",
        options: ["200 ml", "500 ml", "800 ml", "1000 ml", "1500 ml"],
        correctAnswer: "500 ml"
    },
    {
        question: "A child is prescribed an oral antibiotic. When should the nurse educate the parents about potential side effects:",
        options: ["Before the medication is administered", "After the child has finished the entire course of antibiotics", "At the time of medication refill", "When the child starts showing improvement", "After the child has beginning the course of antibiotics by one week"],
        correctAnswer: "Before the medication is administered"
    },
    {
        question: "A preschooler is admitted to the hospital the day before scheduled surgery. This is the child's first hospitalization. Which action to help reduce the child's anxiety about the upcoming surgery:",
        options: ["Begin preoperative teaching immediately.", "Describe preoperative procedures in detail.", "Give the child dolls and medical equipment to play out the experience.", "Explain that the child will be put to sleep during surgery and won't feel anything.", "Describe postoperative procedures in detail."],
        correctAnswer: "Give the child dolls and medical equipment to play out the experience."
    },
    {
        question: "While the patient is in active labor with twins and the cervix is 5 cm dilates, the nurse observes contractions occurring at a rate of every 7 to 8 minutes in a 30-minute period. Which of the following would be the nurse's appropriate action:",
        options: ["Note the fetal heart rate patterns", "Notify the physician immediately", "Administer oxygen at 6 liters by mask", "Have the patient pant-blow during the contractions", "Change position of the patient."],
        correctAnswer: "Notify the physician immediately"
    },
    {
        question: "Which color bag should you use when disposing of clinical waste:",
        options: ["Red", "Yellow", "Green", "Black", "Pink"],
        correctAnswer: "Red"
    },
    {
        question: "A 28 year old female, who is 33 weeks pregnant with her second child, has uncontrolled hypertension. What risk factor below found in the patient's health history places her at risk for abruptio placentae:",
        options: ["Childhood polio", "Preeclampsia", "C-section", "Her age", "BMI of 23%"],
        correctAnswer: "Preeclampsia"
    },
    {
        question: "Mrs.A has been working as an administrative assistant at specialized hospital for thirty-five years. When employees need to get a task done, they often get her advice. What type of power did Mrs.A have:",
        options: ["Expert", "Reward", "Legitimate", "Coercive", "Punishment"],
        correctAnswer: "Expert"
    },
    {
        question: "A patient in labor is transported to the delivery room and is prepared for cesarean delivery. The patient is transferred to the delivery room table, and the nurse places the patient in the:",
        options: ["Trendelenburg's position with the legs in stirrups.", "Semi-Fowler position with a pillow under the knees.", "Prone position with the legs separated and elevated.", "Supine position with a wedge under the right hip.", "Right Lateral position."],
        correctAnswer: "Supine position with a wedge under the right hip."
    },
    {
        question: "A patient in labor is transported to the delivery room and is prepared for Normal vaginal delivery. The patient is transferred to the delivery room table, and the nurse places the patient in the:",
        options: ["Trendelenburg's position with the legs in stirrups.", "Semi-Fowler position with a pillow under the knees.", "Prone position with the legs separated and elevated.", "Supine position with a wedge under the right hip.", "Lithotomy position."],
        correctAnswer: "Lithotomy position."
    },
    {
        question: "Which of the following would the nurse expect to find when assessing a pregnant patient with abruption placenta:",
        options: ["Excessive vaginal bleeding", "Rigid, boardlike abdomen", "Titanic uterine contractions", "Premature rupture of membranes", "Well audible fetal heart rate"],
        correctAnswer: "Rigid, boardlike abdomen"
    },
    {
        question: "Which of the following is a common symptom of asthma in children:",
        options: ["Bradycardia", "Wheezing", "Hypertension", "Hypoglycemia", "Decreased urine output"],
        correctAnswer: "Wheezing"
    },
    {
        question: "Hypertension often goes undetected until symptoms of other system failures occur. This may occur in the form of:",
        options: ["Cerebrovascular accident", "Liver disease", "Myocardial infarction", "Pulmonary disease", "Renal disease"],
        correctAnswer: "Cerebrovascular accident"
    },
    {
        question: "A pediatric nurse is caring for a child who received chemotherapy 10 days ago. Which laboratory value requires the nurse's intervention:",
        options: ["A blood urea nitrogen level of 10 mg/dL.", "A hemoglobin of 8.6 g/dL.", "A negative blood culture", "A platelet count of 18 x 103/uL.", "A serum glucose of 110 mg/dL."],
        correctAnswer: "A platelet count of 18 x 103/uL."
    },
    {
        question: "A patient has experienced full-thickness burns to the face and neck. As a nurse, it is a priority to:",
        options: ["Prevent hypothermia.", "Assess the blood pressure.", "Assess the airway.", "Prevent Infection", "Assess the urine output"],
        correctAnswer: "Assess the airway."
    },
    {
        question: "The nurse is preparing a patient for a colonoscopy. The nurse is familiar with the colonoscopy procedures at the hospital and which type of anesthesia is commonly used for this procedure:",
        options: ["Conscious sedation", "Spinal anesthesia", "Epidural anesthesia", "Nerve block", "General anesthesia"],
        correctAnswer: "Conscious sedation"
    },
    {
        question: "For a patient in active labor, the nurse plans to use an internal electronic fetal monitoring (EFM) device. What must occur before the internal EFM can be applied:",
        options: ["The membranes must be ruptured", "The patient must receive anesthesia", "The cervix must be dilated fully", "The fetus must be at 0 station", "Place patient in right lateral position."],
        correctAnswer: "The membranes must be ruptured"
    },
    {
        question: "Which neonate is at risk for developing respiratory distress syndrome:",
        options: ["A neonate is born at less than 34 weeks gestation.", "A neonate is born at more than 36 weeks 'gestation.", "A neonate is born at 38 weeks gestation.", "A neonate is born at more than 38 weeks gestation.", "A neonate is born at more than 40 weeks gestation."],
        correctAnswer: "A neonate is born at less than 34 weeks gestation."
    },
    {
        question: "The patient was admitted to emergency room post motor vehicle accident which of the following emergency measures should the nurse perform immediately:",
        options: ["Check the victim's breathing.", "Cover the victim with a blanket.", "Move the victim to the curb.", "Assess the victim for injuries.", "Assess the victim level of consciousness."],
        correctAnswer: "Check the victim's breathing."
    },
    {
        question: "A nurse is preparing a sterile field for a confused patient who is scheduled for a surgical procedure. When setting up the field, the patient accidentally touches an instrument in the sterile field. What is the appropriate nursing action in this situation:",
        options: ["Ask another nurse to hold the hands of the patient.", "Remove the instrument that was touched by the patient.", "Discard the supplies and prepare a new sterile field", "Discard the supplies, prepare a new sterile field, and ask another person to hold the patient's hand.", "No action is necessary since the patient has touched the sterile field"],
        correctAnswer: "Discard the supplies, prepare a new sterile field, and ask another person to hold the patient's hand."
    },
    {
        question: "Careful hand-washing and using sterile techniques are ways in which nurses meet basic human needs, which are called:",
        options: ["Physiological", "Safety and Security", "Self-esteem", "Love and belonging", "Self-Actualization"],
        correctAnswer: "Safety and Security"
    },
    {
        question: "A patient is in the second stage of labor. During this stage, how frequently should the nurse in charge assess her uterine contractions:",
        options: ["Every 5 minutes.", "Every 15 minutes.", "Every 30 minutes.", "Every 60 minutes.", "Every 2 minutes"],
        correctAnswer: "Every 15 minutes."
    },
    {
        question: "Mrs.S is often seen interacting with the medical intern during coffee breaks and after duty hours. What type of organizational structure is this:",
        options: ["Formal", "Informal", "Staff", "Line", "Hierarchy"],
        correctAnswer: "Informal"
    },
    {
        question: "To communicate effectively with a patient, the nurse needs to:",
        options: ["Giving false assurance", "Respond quickly to the patient", "Sit with legs crossed", "Keep your voice calm and steady", "Speak with the patient's family"],
        correctAnswer: "Keep your voice calm and steady"
    },
    {
        question: "Orientation staff on the patterns of reporting relationships throughout the organization. Which of the following principles refer to this:",
        options: ["Span of control", "Hierarchy", "Esprit de' corps", "Unity of direction", "Unity of control"],
        correctAnswer: "Hierarchy"
    },
    {
        question: "For a child with pneumonia, priority nursing care directed to the maintenance of:",
        options: ["Adequate nutritional intake.", "Normal body temperature.", "Appropriate fluid intake.", "Normal urine output.", "Clear and open airway."],
        correctAnswer: "Clear and open airway."
    },
    {
        question: "The surgical procedure that creates an opening in the skull to gain access to the brain during neurosurgical procedures is called:",
        options: ["Craniotomy", "Thalamotomy", "CSF analysis", "Lumbar puncture", "Lumbar hernia"],
        correctAnswer: "Craniotomy"
    },
    {
        question: "Which of the following arterial blood gas values are considered within normal ranges:",
        options: ["PH: 7.25-7.45- PaCo2: 45-50- Pao2:90-100", "PH: 7.25-7.45- PaCo2: 30-40- Pao2:70-100", "pH: 7.35-7.45- PaCo2: 25-35- Pao2:60-100", "PH: 7.35-7.45- PaCo2 35- 45- Pao2:80-100", "pH: 7.45-7.55- PaCo2 45- 55- Pao2:90-100"],
        correctAnswer: "PH: 7.35-7.45- PaCo2 35- 45- Pao2:80-100"
    },
    {
        question: "The care plan for a patient with viral encephalitis indicates that the nurse should perform neurologic checks every 2 hours. If the patient had been unresponsive except to painful stimuli, which new assessment finding indicates that the patient is improving:",
        options: ["Patient's Glasgow Coma Scale score is 8.", "Pupils are unequal when stimulated with light.", "Patient's Glasgow Coma Scale score is 12.", "Stroking the cheek with a swab causes swallowing.", "Patient's Glasgow Coma Scale score is 4."],
        correctAnswer: "Patient's Glasgow Coma Scale score is 12."
    },
    {
        question: "A 31-year-old multipara is admitted to the birthing room after initial examination reveals her cervix to be at 8 cm, completely effaced (100 %), and at 0 stations. What phase of labor is she in:",
        options: ["Active phase", "Latent phase", "Expulsive phase", "Transitional phase", "Placental stage"],
        correctAnswer: "Transitional phase"
    },
    {
        question: "When obtaining history from a patient, at the beginning nurse should ask about:",
        options: ["Biographic data.", "The patient's chief complaint.", "Health insurance coverage.", "Family history.", "Past health history"],
        correctAnswer: "Biographic data."
    },  {
        question: "Patient complains of chest pain, dyspnea and cough. The nurse documents these data as:",
        options: ["Objective data", "Subjective data", "Observable data", "General information", "Measurable data"],
        correctAnswer: "Subjective data"
    },
    {
        question: "When giving mouth care to an unconscious patient, the safest position to prevent aspiration is:",
        options: ["Recovery position", "Trendelenburg position", "Semi-Fowler's position", "Supine position", "Semi-Fowler's position and head on the side"],
        correctAnswer: "Semi-Fowler's position and head on the side"
    },
    {
        question: "A nurse is caring for a patient in labor and prepares to auscultate the fetal heart rate by using a Doppler ultrasound device. The nurse accurately determines that the fetal heart sounds are heard by:",
        options: ["Noting if the heart rate is greater than 140 BPM.", "Placing the diaphragm of the Doppler on the mother's abdomen.", "Performing Leopold's maneuvers first to determine the location of the fetal heart.", "Palpating the maternal radial pulse while listening to the fetal heart rate.", "Placing Doppler above the umbilicus of maternal abdomen."],
        correctAnswer: "Palpating the maternal radial pulse while listening to the fetal heart rate."
    },
    {
        question: "Absence of bowel sounds and distended abdomen after surgery indicates:",
        options: ["Bleeding", "Perforation", "Paralytic ileus", "Constipation", "Diarrhea"],
        correctAnswer: "Paralytic ileus"
    },
    {
        question: "Which of the following is the inflammation and irritation of the mucous membrane of the nose?",
        options: ["Laryngitis", "Pharyngitis", "Tracheitis", "Rhinitis", "Stomatitis"],
        correctAnswer: "Rhinitis"
    },
    {
        question: "Some managers have a compassionate-authoritative style of management. Which of the following behaviors will exhibit?",
        options: ["Have condescending trust and confidence in their subordinates.", "Gives economic or ego awards.", "Communicates downward to the staff.", "Allows decision-making among subordinates.", "Communicates upward to the staff."],
        correctAnswer: "Have condescending trust and confidence in their subordinates."
    },
    {
        question: "A nursing care priority in caring for an infant with severe diarrhea and dehydration is to:",
        options: ["Provide medication to stop the diarrhea.", "Treat the cause to maintain weight.", "Give support to the child and family.", "Replace the lost fluid and electrolytes.", "Provide a diet rich in fat and sugar."],
        correctAnswer: "Replace the lost fluid and electrolytes."
    },
    {
        question: "Which one of the following statements refers to the vision of the hospital?",
        options: ["Medical Center is a leader in tertiary health care in the next five years.", "The officers and staff of The Medical Center believe in the unique nature of the human person.", "The Medical Center means to provide patient care with no harm only", "All the nurses shall undergo a continuing competency training program.", "The Medical Center aims to provide patient-centered care in a total healing environment."],
        correctAnswer: "Medical Center is a leader in tertiary health care in the next five years."
    },
    {
        question: "During the acute phase of rheumatic fever, the nurse should do which of the following?",
        options: ["Measure urine output", "Maintain bed rest.", "Divert child's attention.", "Encourage diet", "Give anticoagulant drugs"],
        correctAnswer: "Maintain bed rest."
    },
    {
        question: "The nurse is preparing to administer digoxin to a hospitalized five-year-old child. Which of the following is the minimal apical pulse rate the nurse should obtain prior to administering this medication?",
        options: ["60 beats per minute.", "70 beats per minute.", "90 beats per minute.", "100 beats per minute.", "120 beats per minute."],
        correctAnswer: "70 beats per minute."
    },
    {
        question: "In preparing the incubator for safe use, the nurse:",
        options: ["Keep the incubator in sunlight or warm radiant.", "Adjust humidity knob between 80-95%.", "Turn the temperature control dial between 15-20°C.", "Turn the temperature control dial between 28-32°C.", "Turn the room temperature between 33-39°C"],
        correctAnswer: "Turn the temperature control dial between 28-32°C."
    },
    {
        question: "A nurse is caring for a patient in labor. The nurse determines that the patient is beginning in the second stage of labor when which of the following assessments is noted?",
        options: ["The patient begins to expel clear vaginal fluid.", "The contractions are regular.", "The membranes have ruptured.", "The cervix is dilated completely.", "The patient has a full body perspiration."],
        correctAnswer: "The cervix is dilated completely."
    },
    {
        question: "The nurse is providing teaching to a patient regarding pain control after surgery. What time does the nurse inform the patient is the best time to request pain medication?",
        options: ["Before the pain becomes severe", "After the pain becomes severe", "When the relaxation techniques have failed", "When the patient experiences a pain rating of '10' on a 1-10 pain scale", "When there is no pain, it is time for the medication to be administered"],
        correctAnswer: "Before the pain becomes severe"
    },
    {
        question: "A neonate girl delivered at 38 weeks gestation weighs 2,325 grams and is having difficulty maintaining body temperature. Which nursing action would prevent cold stress?",
        options: ["Immediately after birth, dry the neonate and place her under a radiant warmer for 2 hours.", "Administer vitamin K after birth.", "Decrease integumentary stimulation after birth.", "Give anticoagulant drugs.", "Protect the child from injury."],
        correctAnswer: "Immediately after birth, dry the neonate and place her under a radiant warmer for 2 hours."
    },
    {
        question: "A 5-year-old is brought to the hospital with a temperature of 37.5°C, a barky cough, stridor, and hoarseness. Which nursing intervention should the nurse prepare for?",
        options: ["Immediate intravenous placement.", "Respiratory support to keep the airway open.", "A tracheostomy set at the bedside.", "Informing the child's parents about a tonsillectomy.", "Offer a well-balanced diet for the child."],
        correctAnswer: "Respiratory support to keep the airway open."
    },
    {
        question: "A nurse is caring for a child who's experiencing a seizure. Which nursing intervention takes the priority when caring for this child?",
        options: ["Protect the child from injury.", "Shout at the child to end the seizure.", "Allow seizure activity to end without interference.", "Use a padded tongue blade to protect the airway.", "Take vital signs for the child."],
        correctAnswer: "Protect the child from injury."
    },
    {
        question: "A patient has active TB. Which of the following symptoms will he exhibit?",
        options: ["Chest and lower back pain", "Chills, fever, night sweats, and hemoptysis", "Fever of more than 38.5 and nausea", "Headache and photophobia", "Chest and abdominal pain"],
        correctAnswer: "Chills, fever, night sweats, and hemoptysis"
    },
    {
        question: "Perineal care is an important infection control measure. When evaluating a postpartum woman's perineal care technique, the nurse would recognize the need for further instruction if the woman:",
        options: ["Uses soap and warm water to wash the vulva and perineum.", "Washes from symphysis pubis back to episiotomy.", "Changes her perineal pad every 2-3 hours.", "Uses the peri bottle to rinse upward into her vagina.", "Uses betadine or Dettol as disinfectant."],
        correctAnswer: "Uses the peri bottle to rinse upward into her vagina."
    },
    {
        question: "A nurse is caring for an infant with spina bifida. Which assessment findings suggest hydrocephalus?",
        options: ["Depressed fontanels and suture lines.", "Deep-set eyes, which appear to look upward only.", "Rapid increase in head size and irritability.", "Motor dysfunction in the foot and leg.", "Sensory dysfunction in the foot and leg."],
        correctAnswer: "Rapid increase in head size and irritability."
    },
    {
        question: "Which of the following body functions is regulated by the thyroid hormones?",
        options: ["Digestion", "Breathing", "Metabolism", "Blood pressure", "Urination"],
        correctAnswer: "Metabolism"
    },
    {
        question: "If the last menstrual period is January 30, the expected date of delivery is:",
        options: ["24th October 2024", "7th November 2024", "7th October 2024", "8th November 2024", "1st December 2024"],
        correctAnswer: "7th November 2024"
    },
    {
        question: "A patient with severe preeclampsia is admitted to the maternity department. Which room assignment is appropriate for this patient?",
        options: ["A private room across from the elevator", "A semiprivate room across from the nurses' station", "A private room 2 doors away from the nurses station", "A semiprivate room with another patient who enjoys watching television", "A bed in general section."],
        correctAnswer: "A private room across from the elevator"
    },
    {
        question: "A nurse in the labor room is caring for a patient in the active phase of labor. The nurse is assessing the fetal patterns and notes a late deceleration on the monitor strip. The appropriate nursing action is to:",
        options: ["Place the mother in the supine position.", "Document the findings and continue to monitor the fetal patterns.", "Administer oxygen via face mask.", "Increase the rate of Pitocin IV infusion.", "Move patient out of bed"],
        correctAnswer: "Administer oxygen via face mask."
    },
    {
        question: "When the nurse inserts the nasogastric tube, she measures the required length of the nasogastric tube, measuring from the patient's:",
        options: ["Ear to xiphisternum.", "Nose to ear to xiphisternum.", "Nose to xiphisternum.", "Angle of the jaw to xiphisternum.", "Ear to Nose to Xiphisternum."],
        correctAnswer: "Nose to ear to xiphisternum."
    },
    {
        question: "After birth, where do you expect to assess fundal height?",
        options: ["At the xiphoid process", "5 cm below the umbilicus", "2 cm above the pubic symphysis", "At or near the umbilicus", "Not palpable at the abdomen."],
        correctAnswer: "At or near the umbilicus"
    },
    {
        question: "High-risk neonates with hyperbilirubinemia are liable to imbalanced temperature related to the use of:",
        options: ["Exchange transfusion.", "Phenobarbital administration.", "Albumin administration.", "Phototherapy.", "Infection."],
        correctAnswer: "Phototherapy."
    },
    {
        question: "The patient has returned to bed from surgery with a dressing. Which of the following would the nurse identify as the top priority when documenting the postoperative:",
        options: ["Adequate neurovascular functioning.", "Minimal pain on movement.", "Vital signs within normal limit.", "No drainage noted on the dressing.", "Adequate urine output."],
        correctAnswer: "Adequate neurovascular functioning."
    },
    {
        question: "Which of the following signs will require a pregnant woman to seek immediate medical attention?",
        options: ["When the first fetal movement is felt", "Mild uterine contraction", "Slight dyspnea on the last month of gestation", "No fetal movement is felt on the 32 weeks gestation", "Nausea and vomiting at 12 weeks gestation"],
        correctAnswer: "No fetal movement is felt on the 32 weeks gestation"
    },
    {
        question: "Which type of nutrition is the energy source?",
        options: ["Protein", "Fat", "Carbohydrates", "Vitamins", "Minerals"],
        correctAnswer: "Carbohydrates"
    },
    {
        question: "To promote respiratory function in the immobilized patient, the nurse should:",
        options: ["Change the patient's position every 4 to 8 hours", "Encourage deep breathing and coughing every hour", "Use oxygen therapy 3 liters for protection", "Nebulizer treatments regularly for protection", "Suction the patient's secretions every hour"],
        correctAnswer: "Encourage deep breathing and coughing every hour"
    }, {
        question: "Patient complains of chest pain, dyspnea and cough. The nurse documents these data as:",
        options: ["Objective data", "Subjective data", "Observable data", "General information", "Measurable data"],
        correctAnswer: "Subjective data"
    },
    {
        question: "When giving mouth care to an unconscious patient, the safest position to prevent aspiration is:",
        options: ["Recovery position", "Trendelenburg position", "Semi-Fowler's position", "Supine position", "Semi-Fowler's position and head on the side"],
        correctAnswer: "Semi-Fowler's position and head on the side"
    },
    {
        question: "A nurse is caring for a patient in labor and prepares to auscultate the fetal heart rate by using a Doppler ultrasound device. The nurse accurately determines that the fetal heart sounds are heard by:",
        options: ["Noting if the heart rate is greater than 140 BPM.", "Placing the diaphragm of the Doppler on the mother's abdomen.", "Performing Leopold's maneuvers first to determine the location of the fetal heart.", "Palpating the maternal radial pulse while listening to the fetal heart rate.", "Placing Doppler above the umbilicus of maternal abdomen."],
        correctAnswer: "Palpating the maternal radial pulse while listening to the fetal heart rate."
    },
    {
        question: "Absence of bowel sounds and distended abdomen after surgery indicates:",
        options: ["Bleeding", "Perforation", "Paralytic ileus", "Constipation", "Diarrhea"],
        correctAnswer: "Paralytic ileus"
    },
    {
        question: "Which of the following is the inflammation and irritation of the mucous membrane of the nose?",
        options: ["Laryngitis", "Pharyngitis", "Tracheitis", "Rhinitis", "Stomatitis"],
        correctAnswer: "Rhinitis"
    },
    {
        question: "Some managers have a compassionate-authoritative style of management. Which of the following behaviors will exhibit?",
        options: ["Have condescending trust and confidence in their subordinates.", "Gives economic or ego awards.", "Communicates downward to the staff.", "Allows decision-making among subordinates.", "Communicates upward to the staff."],
        correctAnswer: "Have condescending trust and confidence in their subordinates."
    },
    {
        question: "A nursing care priority in caring for an infant with severe diarrhea and dehydration is to:",
        options: ["Provide medication to stop the diarrhea.", "Treat the cause to maintain weight.", "Give support to the child and family.", "Replace the lost fluid and electrolytes.", "Provide a diet rich in fat and sugar."],
        correctAnswer: "Replace the lost fluid and electrolytes."
    },
    {
        question: "Which one of the following statements refers to the vision of the hospital?",
        options: ["Medical Center is a leader in tertiary health care in the next five years.", "The officers and staff of The Medical Center believe in the unique nature of the human person.", "The Medical Center means to provide patient care with no harm only", "All the nurses shall undergo a continuing competency training program.", "The Medical Center aims to provide patient-centered care in a total healing environment."],
        correctAnswer: "Medical Center is a leader in tertiary health care in the next five years."
    },
    {
        question: "During the acute phase of rheumatic fever, the nurse should do which of the following?",
        options: ["Measure urine output", "Maintain bed rest.", "Divert child's attention.", "Encourage diet", "Give anticoagulant drugs"],
        correctAnswer: "Maintain bed rest."
    },
    {
        question: "The nurse is preparing to administer digoxin to a hospitalized five-year-old child. Which of the following is the minimal apical pulse rate the nurse should obtain prior to administering this medication?",
        options: ["60 beats per minute.", "70 beats per minute.", "90 beats per minute.", "100 beats per minute.", "120 beats per minute."],
        correctAnswer: "70 beats per minute."
    },
    {
        question: "In preparing the incubator for safe use, the nurse:",
        options: ["Keep the incubator in sunlight or warm radiant.", "Adjust humidity knob between 80-95%.", "Turn the temperature control dial between 15-20°C.", "Turn the temperature control dial between 28-32°C.", "Turn the room temperature between 33-39°C"],
        correctAnswer: "Turn the temperature control dial between 28-32°C."
    },
    {
        question: "A nurse is caring for a patient in labor. The nurse determines that the patient is beginning in the second stage of labor when which of the following assessments is noted?",
        options: ["The patient begins to expel clear vaginal fluid.", "The contractions are regular.", "The membranes have ruptured.", "The cervix is dilated completely.", "The patient has a full body perspiration."],
        correctAnswer: "The cervix is dilated completely."
    },
    {
        question: "The nurse is providing teaching to a patient regarding pain control after surgery. What time does the nurse inform the patient is the best time to request pain medication?",
        options: ["Before the pain becomes severe", "After the pain becomes severe", "When the relaxation techniques have failed", "When the patient experiences a pain rating of '10' on a 1-10 pain scale", "When there is no pain, it is time for the medication to be administered"],
        correctAnswer: "Before the pain becomes severe"
    },
    {
        question: "A neonate girl delivered at 38 weeks gestation weighs 2,325 grams and is having difficulty maintaining body temperature. Which nursing action would prevent cold stress?",
        options: ["Immediately after birth, dry the neonate and place her under a radiant warmer for 2 hours.", "Administer vitamin K after birth.", "Decrease integumentary stimulation after birth.", "Give anticoagulant drugs.", "Protect the child from injury."],
        correctAnswer: "Immediately after birth, dry the neonate and place her under a radiant warmer for 2 hours."
    },
    {
        question: "A 5-year-old is brought to the hospital with a temperature of 37.5°C, a barky cough, stridor, and hoarseness. Which nursing intervention should the nurse prepare for?",
        options: ["Immediate intravenous placement.", "Respiratory support to keep the airway open.", "A tracheostomy set at the bedside.", "Informing the child's parents about a tonsillectomy.", "Offer a well-balanced diet for the child."],
        correctAnswer: "Respiratory support to keep the airway open."
    },
    {
        question: "A nurse is caring for a child who's experiencing a seizure. Which nursing intervention takes the priority when caring for this child?",
        options: ["Protect the child from injury.", "Shout at the child to end the seizure.", "Allow seizure activity to end without interference.", "Use a padded tongue blade to protect the airway.", "Take vital signs for the child."],
        correctAnswer: "Protect the child from injury."
    },
    {
        question: "A patient has active TB. Which of the following symptoms will he exhibit?",
        options: ["Chest and lower back pain", "Chills, fever, night sweats, and hemoptysis", "Fever of more than 38.5 and nausea", "Headache and photophobia", "Chest and abdominal pain"],
        correctAnswer: "Chills, fever, night sweats, and hemoptysis"
    },
    {
        question: "Perineal care is an important infection control measure. When evaluating a postpartum woman's perineal care technique, the nurse would recognize the need for further instruction if the woman:",
        options: ["Uses soap and warm water to wash the vulva and perineum.", "Washes from symphysis pubis back to episiotomy.", "Changes her perineal pad every 2-3 hours.", "Uses the peri bottle to rinse upward into her vagina.", "Uses betadine or Dettol as disinfectant."],
        correctAnswer: "Uses the peri bottle to rinse upward into her vagina."
    },
    {
        question: "A nurse is caring for an infant with spina bifida. Which assessment findings suggest hydrocephalus?",
        options: ["Depressed fontanels and suture lines.", "Deep-set eyes, which appear to look upward only.", "Rapid increase in head size and irritability.", "Motor dysfunction in the foot and leg.", "Sensory dysfunction in the foot and leg."],
        correctAnswer: "Rapid increase in head size and irritability."
    },
    {
        question: "Which of the following body functions is regulated by the thyroid hormones?",
        options: ["Digestion", "Breathing", "Metabolism", "Blood pressure", "Urination"],
        correctAnswer: "Metabolism"
    },
    {
        question: "If the last menstrual period is January 30, the expected date of delivery is:",
        options: ["24th October 2024", "7th November 2024", "7th October 2024", "8th November 2024", "1st December 2024"],
        correctAnswer: "7th November 2024"
    },
    {
        question: "A patient with severe preeclampsia is admitted to the maternity department. Which room assignment is appropriate for this patient?",
        options: ["A private room across from the elevator", "A semiprivate room across from the nurses' station", "A private room 2 doors away from the nurses' station", "A semiprivate room with another patient who enjoys watching television", "A bed in general section."],
        correctAnswer: "A private room across from the elevator"
    },
    {
        question: "A nurse in the labor room is caring for a patient in the active phase of labor. The nurse is assessing the fetal patterns and notes a late deceleration on the monitor strip. The appropriate nursing action is to:",
        options: ["Place the mother in the supine position.", "Document the findings and continue to monitor the fetal patterns.", "Administer oxygen via face mask.", "Increase the rate of Pitocin IV infusion.", "Move patient out of bed"],
        correctAnswer: "Administer oxygen via face mask."
    },
    {
        question: "When the nurse inserts the nasogastric tube, she measures the required length of the nasogastric tube, measuring from the patient's:",
        options: ["Ear to xiphisternum.", "Nose to ear to xiphisternum.", "Nose to xiphisternum.", "Angle of the jaw to xiphisternum.", "Ear to Nose to Xiphisternum."],
        correctAnswer: "Nose to ear to xiphisternum."
    },
    {
        question: "After birth, where do you expect to assess fundal height?",
        options: ["At the xiphoid process", "5 cm below the umbilicus", "2 cm above the pubic symphysis", "At or near the umbilicus", "Not palpable at the abdomen."],
        correctAnswer: "At or near the umbilicus"
    },
    {
        question: "High-risk neonates with hyperbilirubinemia are liable to imbalanced temperature related to the use of:",
        options: ["Exchange transfusion.", "Phenobarbital administration.", "Albumin administration.", "Phototherapy.", "Infection."],
        correctAnswer: "Phototherapy."
    },
    {
        question: "The patient has returned to bed from surgery with a dressing. Which of the following would the nurse identify as the top priority when documenting the postoperative:",
        options: ["Adequate neurovascular functioning.", "Minimal pain on movement.", "Vital signs within normal limit.", "No drainage noted on the dressing.", "Adequate urine output."],
        correctAnswer: "Adequate neurovascular functioning."
    },
    {
        question: "Which of the following signs will require a pregnant woman to seek immediate medical attention?",
        options: ["When the first fetal movement is felt", "Mild uterine contraction", "Slight dyspnea on the last month of gestation", "No fetal movement is felt on the 32 weeks gestation", "Nausea and vomiting at 12 weeks gestation"],
        correctAnswer: "No fetal movement is felt on the 32 weeks gestation"
    },
    {
        question: "Which type of nutrition is the energy source?",
        options: ["Protein", "Fat", "Carbohydrates", "Vitamins", "Minerals"],
        correctAnswer: "Carbohydrates"
    },
    {
        question: "To promote respiratory function in the immobilized patient, the nurse should:",
        options: ["Change the patient's position every 4 to 8 hours", "Encourage deep breathing and coughing every hour", "Use oxygen therapy 3 liters for protection", "Nebulizer treatments regularly for protection", "Suction the patient's secretions every hour"],
        correctAnswer: "Encourage deep breathing and coughing every hour"
    },
    {
        question: "A nurse is monitoring a pregnant patient with gestational hypertension who is at risk for preeclampsia. At each home care visit, the nurse assesses the patient for which classic signs of preeclampsia?",
        options: ["Proteinuria & Hypertension", "Low-grade fever", "Generalized edema", "Increased pulse rate", "Increased respiratory rate"],
        correctAnswer: "Proteinuria & Hypertension"
    },
    {
        question: "The nurse recognizes that lack of physical activity and increased consumption of fast food by children are causative factors contributing to which of the following problems?",
        options: ["Nutritional disorders", "Type I diabetes", "Dental caries", "Hepatitis", "Weight gain"],
        correctAnswer: "Weight gain"
    },
    {
        question: "A patient had an open cholecystectomy 36 hours earlier, and the nurse's assessment this morning confirms that the patient has not yet had a bowel movement since before surgery. How should the nurse respond to this assessment finding?",
        options: ["Increase the rate of the patient's IV infusion", "Contact the physician to come assess the patient", "Administer a cleansing enema", "Monitor the patient closely and promote fluid intake", "Monitor the patient closely"],
        correctAnswer: "Monitor the patient closely and promote fluid intake"
    },
    {
        question: "The nurse knows that elevated findings on which laboratory test typically validate a diagnosis of gout?",
        options: ["Creatinine clearance", "Blood urea nitrogen", "Serum uric acid", "Serum calcium", "Lipid profile"],
        correctAnswer: "Serum uric acid"
    },
    {
        question: "A nurse is teaching the parents of a school-age child. Which teaching topic should take priority?",
        options: ["Accident prevention", "Keeping a night light on to allay fears", "Normalcy of fears about body integrity", "Encouraging the child to dress without help", "Encouraging the child to eat without help"],
        correctAnswer: "Accident prevention"
    },
    {
        question: "The nurse helps the patient with chronic renal failure to develop a home diet plan to help the patient maintain adequate nutritional intake. Which of the following diets would be appropriate for the patient?",
        options: ["High carbohydrate, high protein", "High calcium, high potassium, high protein", "Low protein, low sodium, low potassium", "Low protein, high potassium", "High protein, low sodium, high potassium"],
        correctAnswer: "Low protein, low sodium, low potassium"
    },
    {
        question: "Your laboring patient has transitioned to stage 2 of labor. What changes in the perineum indicate the birth of the baby is imminent?",
        options: ["Increase in meconium-stained fluid and retracting perineum", "Retracting perineum and anus with an increase of bloody show", "Rapid and intense contractions", "Bulging perineum and rectum with an increase in bloody show", "Normal intact perineum"],
        correctAnswer: "Bulging perineum and rectum with an increase in bloody show"
    },
    {
        question: "A nurse is performing an assessment of a patient who is scheduled for cesarean delivery. Which assessment finding would indicate a need to contact the physician?",
        options: ["Fetal heart rate of 180 beats per minute", "White blood cell count of 12,000", "Maternal pulse rate of 85 beats per minute", "Hemoglobin of 11.0 g/dL", "Maternal BP of 120/80"],
        correctAnswer: "Fetal heart rate of 180 beats per minute"
    },
    {
        question: "When the nurse measured central venous pressure (CVP) found 17 mmH2O, these indicate to:",
        options: ["Hypervolemia", "Hyperkalemia", "Hypernatremia", "Hypotension", "Hypovolemia"],
        correctAnswer: "Hypervolemia"
    },
    {
        question: "A child has a fluid volume deficit. The nurse performs an assessment and determines that the child is improving and the deficit is resolving if which finding is noted?",
        options: ["The child has no tears", "Urine specific gravity is 1.035", "Urine output is less than 1 mL/kg/hr", "Decreased skin elasticity", "Capillary refill is less than 2 seconds"],
        correctAnswer: "Capillary refill is less than 2 seconds"
    },
    {
        question: "A patient has a burn on the back that is extremely red and painful, but no blisters are present. When you press on the skin it blanches. You document this as a:",
        options: ["Superficial burn", "Partial-thickness burn", "Full-thickness burn", "Deep full-thickness burn", "Third-degree burn"],
        correctAnswer: "Superficial burn"
    },
    {
        question: "The nurse is assessing a 4-year-old child with suspected acute otitis media. Which symptom is commonly associated with this condition?",
        options: ["Cough", "Rash", "Abdominal pain", "Ear pain", "Pallor"],
        correctAnswer: "Ear pain"
    },
    {
        question: "The important instruction for patients with arteriovenous fistula is:",
        options: ["Wear tight clothes on the affected arm", "Carry a heavy object on the affected arm", "Using a stethoscope for auscultating the fistula", "Avoid taking a blood pressure reading on the affected arm", "Taking a blood sample from the affected arm"],
        correctAnswer: "Avoid taking a blood pressure reading on the affected arm"
    },
    {
        question: "Which of the following instructions should the nurse provide for the patient on hypertension treatment?",
        options: ["Eat foods high in potassium", "Take daily potassium supplements", "Discontinue sodium restrictions", "Avoid salt substitutes", "Eat foods high in protein"],
        correctAnswer: "Avoid salt substitutes"
    },
    {
        question: "A patient has been on prolonged bed rest, and the nurse is observing for signs associated with immobility. The nurse is alert to:",
        options: ["Increased blood pressure", "Decreased heart rate", "Increased urinary output", "Increased cardiac output", "Decreased peristalsis"],
        correctAnswer: "Decreased peristalsis"
    },
    {
        question: "The mother asks what to do when her infant with cyanotic heart disease becomes very blue and has trouble breathing; which of the following the nurse should instruct the mother:",
        options: ["Leave the infant alone", "Put the infant in the knee-chest position", "Feed the infant quickly", "Offer the infant a toy to play with", "Cover the infant with extra clothes"],
        correctAnswer: "Put the infant in the knee-chest position"
    },
    {
        question: "Which of the following types of pain is always characteristic of angina?",
        options: ["Knifelike", "Sharp and discomfort", "Shooting and crushing", "Tightness and squeezing", "Burning and choking"],
        correctAnswer: "Tightness and squeezing"
    },
    {
        question: "Discharge plan for a female patient diagnosed with sepsis from a urinary tract infection must include:",
        options: ["Taking a cool bath", "Using tube bath", "Avoiding sexual activity", "Drinking 2-3 L of water daily", "Eating excessive vegetable"],
        correctAnswer: "Drinking 2-3 L of water daily"
    },
    {
        question: "A nurse is caring for a child after shunt insertion to relieve hydrocephalus. Which intervention should the nurse perform?",
        options: ["Place the child in an upright position", "Avoid lying the child on the side where the shunt is located", "Place the child in the semi-Fowler position", "Place the child in a prone position", "Sleeping the child on the back"],
        correctAnswer: "Avoid lying the child on the side where the shunt is located"
    },
    {
        question: "A maternity unit nurse is creating a plan of care for a patient with severe preeclampsia who will be admitted to the nursing unit. The nurse should include which nursing intervention in the plan?",
        options: ["Restrict food and fluids", "Reduce external stimuli", "Monitor blood glucose levels", "Maintain the patient in a supine position", "Encourage ambulation out of bed"],
        correctAnswer: "Reduce external stimuli"
    },
    {
        question: "What is the appropriate method the nurse should use when drawing blood from a child with a bleeding tendency?",
        options: ["Use a lancet to collect blood samples", "Warm the child's extremities before venipuncture", "Schedule all blood samples at one time", "Prepare platelets in case of prolonged bleeding", "Administer aspirin for the child"],
        correctAnswer: "Schedule all blood samples at one time"
    },
    {
        question: "Which statement describes abruptio placenta?",
        options: ["This condition occurs due to an abnormal attachment of the placenta in the uterus near or over the cervical opening", "A marginal abruptio placenta occurs when the placenta is located near the edge of the cervical opening", "Nursing interventions for this condition include measuring the fundal height", "Fetal distress is not common in this condition as it is in placenta previa", "Abruptio placenta is more common to occur during the first trimester"],
        correctAnswer: "Nursing interventions for this condition include measuring the fundal height"
    },
    {
        question: "A clinical nurse specialist (CNS) is included in a hospital department's organizational chart. However, there are no solid lines leading to or from the nurse's position on the chart. What does this imply?",
        options: ["The CNS lacks productive relationships with colleagues", "Any member of staff may exercise authority over the CNS", "The CNS is not accountable for his or her practice", "The CNS does not have formal authority over other staff members", "The CNS has authority-obedience management"],
        correctAnswer: "The CNS does not have formal authority over other staff members"
    },
    {
        question: "Which type of shock is associated with low blood levels?",
        options: ["Septic shock", "Hypovolemic shock", "Anaphylactic shock", "Cardiogenic shock", "Neurogenic shock"],
        correctAnswer: "Hypovolemic shock"
    },
    {
        question: "Which of the following factors can cause hepatitis A?",
        options: ["Contact with infected blood", "Blood transfusions with infected blood", "Eating contaminated food", "Sexual contact with an infected person", "Shared toothbrushes"],
        correctAnswer: "Eating contaminated food"
    },
    {
        question: "A nurse is practicing in a case management context and a patient has been following a multidisciplinary action plan (MAP). In the last 24 hours, it has become clear that the patient's health status is not improving as quickly as expected and the patient is deviating from the MAP. What is the appropriate action the nurse should do?",
        options: ["Cancel the patient's current MAP and call for a meeting to select a new one", "Document the presence of a variance in the MAP", "Collaborate with the care team to arrange a transfer to a new setting", "Cancel the current MAP and adopt customized, rather than standardized care", "Communicate downward to the staff"],
        correctAnswer: "Document the presence of a variance in the MAP"
    },
    {
        question: "The nurse is caring for a patient with left-sided heart failure. To reduce fluid volume excess, the nurse can anticipate using:",
        options: ["Antiembolism stockings", "Oxygen", "Diuretics", "Anticoagulants", "Antihypertensives"],
        correctAnswer: "Diuretics"
    },
    {
        question: "What method is used only as a last resort to control severe arm bleeding?",
        options: ["Tourniquet", "Indirect pressure", "Direct pressure", "Elevation", "Press by a sterile dressing"],
        correctAnswer: "Tourniquet"
    },
    {
        question: "A pregnant patient is diagnosed with partial placenta previa. In explaining the diagnosis, the nurse tells the patient that the usual treatment for partial placenta previa is which of the following?",
        options: ["Activity limited to bed rest", "Platelet infusion", "Immediate cesarean delivery", "Labor induction with oxytocin", "Continuous fetal monitoring"],
        correctAnswer: "Activity limited to bed rest"
    },
    {
        question: "While the nurse is administering medication, the patient says, 'This pill looks different from what I usually take.' What is the nurse's best action?",
        options: ["Go recheck the medication order, taking along the medication", "Ask the patient to swallow the pill and observe any abnormality", "Tell the doctor about patient observation after taking medication", "The nurse documents on the medication administration record", "Tell the patient it is your medication, no different"],
        correctAnswer: "Go recheck the medication order, taking along the medication"
    },
    {
        question: "Which measure would be ineffective in preventing postpartum hemorrhage?",
        options: ["Administer Methergine 0.2 mg every 6 hours for 4 doses as ordered", "Encourage the woman to void every 2 hours", "Massage the fundus every hour for the first 24 hours following birth", "Teach the woman the importance of rest and nutrition to enhance healing", "Encourage initiation of breastfeeding"],
        correctAnswer: "Massage the fundus every hour for the first 24 hours following birth"
    },
    {
        question: "Which of the following nursing interventions is likely to prevent respiratory complications such as pneumonia and atelectasis in a post-surgical patient?",
        options: ["Control of anxiety and agitation", "Adequate nutrition", "Adequate fluids intake", "Adequate pain control", "Use of incentive spirometry"],
        correctAnswer: "Use of incentive spirometry"
    },
    {
        question: "Which of the following actions demonstrates reaching the third stage of change?",
        options: ["Wonders why things are not what they used to be", "Finds solutions to the problems", "Integrates the solutions into day-to-day activities", "Selects the best change strategy", "Threat to established power relationships"],
        correctAnswer: "Integrates the solutions into day-to-day activities"
    },
    {
        question: "Mrs. W plans on assigning competent people to fill the roles designed in the hierarchy. Which process refers to this?",
        options: ["Staffing", "Scheduling", "Recruitment", "Induction", "Organizing"],
        correctAnswer: "Organizing"
    },
    {
        question: "When assessing the patient with a head injury, which of the following should receive priority attention?",
        options: ["Lung sounds", "Clarity of speech", "Mobility of fingers", "Pupillary responses", "Mobility of lower limb"],
        correctAnswer: "Pupillary responses"
    },
    {
        question: "A patient with bacterial pneumonia is to be started on IV antibiotics. Which of the following diagnostic tests must be completed before antibiotic therapy begins?",
        options: ["Urinalysis", "Sputum culture", "Chest radiograph", "Red blood cell count", "Complete blood count"],
        correctAnswer: "Sputum culture"
    },
    {
        question: "A woman, who is 22 weeks pregnant, has a routine ultrasound performed. The ultrasound shows that the placenta is located at the edge of the cervical opening. As the nurse, you know that which statement is FALSE about this finding?",
        options: ["This is known as marginal placenta previa", "The placenta may move upward as the pregnancy progresses and needs to be re-evaluated with another ultrasound at about 32 weeks gestation", "The patient will need to have a c-section and cannot deliver vaginally", "The woman should report any bleeding immediately to the doctor", "This is known as laterals placenta previa"],
        correctAnswer: "The patient will need to have a c-section and cannot deliver vaginally"
    },
    {
        question: "Which pattern of nursing care involves the care given by a group of paraprofessional workers led by a professional nurse who takes care of patients with the same disease conditions and is located geographically near each other?",
        options: ["Case method", "Modular nursing", "Nursing case management", "Team nursing", "Functional method"],
        correctAnswer: "Modular nursing"
    },
    {
        question: "The nurse should take which action to determine the accurate measurement of the length of the nasogastric tube to be inserted for children?",
        options: ["Mark the tube at 5.5 cm", "Mark the tube at 3.2 cm", "Place the tube at the tip of the nose and measure by extending the tube to the earlobe and then down to the xiphoid process", "Mark the tube at 4.2 cm", "Mark the tube at 1 cm"],
        correctAnswer: "Place the tube at the tip of the nose and measure by extending the tube to the earlobe and then down to the xiphoid process"
    },
    {
        question: "A nurse is instructing a mother about the nutritional needs of her full-term, breastfeeding infant age 2 months. Which response shows that the mother understands the infant's dietary needs?",
        options: ["We won't start any new foods now", "We'll start the baby on skim milk", "We'll introduce cereal into the diet now", "We should add new fruits to the diet one at a time", "We'll introduce whole milk and baby food"],
        correctAnswer: "We won't start any new foods now"
    },
    {
        question: "In stage 1 of labor, during the active phase, the cervix dilates:",
        options: ["1-3 cm", "7-10 cm", "4-7 cm", "8-10 cm", "3-5 cm"],
        correctAnswer: "4-7 cm"
    }
];

let currentQuestionIndex = 0;
let time = 10800; // 90 minutes in seconds
let userAnswers = Array(questions.length).fill(null);

function loadQuestion(index) {
    const questionContainer = document.getElementById('question-text');
    const optionsForm = document.getElementById('options-form');
    const feedbackBox = document.getElementById('feedback-box');

    questionContainer.textContent = questions[index].question;

    optionsForm.innerHTML = '';
    questions[index].options.forEach(option => {
        const label = document.createElement('label');
        label.innerHTML = `<input type="radio" name="option" value="${option}" ${userAnswers[index] === option ? 'checked' : ''}> ${option}`;
        optionsForm.appendChild(label);
        optionsForm.appendChild(document.createElement('br'));
    });

    feedbackBox.style.display = 'none';
    feedbackBox.classList.remove('feedback-correct', 'feedback-incorrect');
    feedbackBox.textContent = '';

    updateQuestionList();
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) return;

    userAnswers[currentQuestionIndex] = selectedOption.value;

    const feedbackBox = document.getElementById('feedback-box');
    if (selectedOption.value === questions[currentQuestionIndex].correctAnswer) {
        feedbackBox.textContent = 'The answer is correct!';
        feedbackBox.classList.add('feedback-correct');
    } else {
        feedbackBox.textContent = `The answer is incorrect. The correct answer is "${questions[currentQuestionIndex].correctAnswer}"`;
        feedbackBox.classList.add('feedback-incorrect');
    }

    feedbackBox.style.display = 'block';

    setTimeout(() => {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else {
            endExam();
        }
    }, 2000);
}

function jumpToQuestion(index) {
    currentQuestionIndex = index;
    loadQuestion(index);
}

function startTimer() {
    const timerElement = document.getElementById('timer');
    let timerInterval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        if (time > 0) {
            time--;
        } else {
            clearInterval(timerInterval);
            alert('Time is up!');
            endExam();
        }
    }, 1000);
}

function endExam() {
    const confirmed = confirm('Are you sure you want to end the exam?');
    if (confirmed) {
        const unansweredQuestions = userAnswers.filter(answer => answer === null).length;
        alert(`Exam ended. You answered ${questions.length - unansweredQuestions} out of ${questions.length} questions.`);
        // Add logic here to submit the exam and handle results
    }
}

function updateQuestionList() {
    const questionList = document.getElementById('question-list');
    questionList.innerHTML = '';

    questions.forEach((question, index) => {
        const button = document.createElement('button');
        button.textContent = index + 1;
        button.className = userAnswers[index] ? 'answered-question' : 'not-answered-question';
        if (index === currentQuestionIndex) {
            button.className = 'current-question';
        }
        button.onclick = () => jumpToQuestion(index);
        questionList.appendChild(button);
    });
}

window.onload = () => {
    loadQuestion(currentQuestionIndex);
    startTimer();
};
