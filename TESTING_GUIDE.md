# Quick Start Testing Guide - AI Proctoring System

## Pre-Flight Checklist

Before running tests, ensure:
- [ ] Node.js 16+ installed
- [ ] npm dependencies installed (`npm install`)
- [ ] Backend running (if testing submission)
- [ ] Browser cache cleared
- [ ] Webcam/camera available on device
- [ ] Camera permissions not blocked in browser

---

## 1. Prepare Test Environment

### Step 1A: Start Development Server
```bash
# Terminal 1 - Frontend
cd frontend
npm start
# Expected: "Compiled successfully" / Vite dev server running at http://localhost:5173

# Terminal 2 - Backend (Optional, if testing API integration)
cd backend
npm start
# Expected: "Server running on port 3000"

# Terminal 3 - ML Service (Optional)
cd ml-service
python main.py
# Expected: "Service running on port 5000"
```

### Step 1B: Access the Application
```
Navigate to: http://localhost:5173
Expected: Landing page loads successfully
```

---

## 2. Navigation to Exam

### Step 2A: Go to Exam Page
1. Click "Courses" in navbar (or navigate to `/exam`)
2. You should see 5 course cards:
   - Data Structures & Algorithms
   - Database Management Systems
   - Operating Systems
   - Computer Networks
   - Object-Oriented Programming

### Step 2B: Select a Course
1. Click "Start Exam" on any course (e.g., DSA)
2. You should see:
   ```
   Ready to take this exam?
   [Start Exam] button
   ```

---

## 3. Test: Exam Initiation

### Test 3.1: Start Exam Button
1. Click "Start Exam"
2. **Expected Result:**
   ```
   ✅ Modal appears with:
      - Title: "IMPORTANT: Proctoring Security Rules"
      - Your camera will be used to monitor the exam
      - List of security rules
      - List of blocked actions
      - List of AI capabilities
      - Buttons: "Cancel" | "Allow Camera & Start Exam"
      - Modal is dark background (cannot dismiss by clicking outside)
   ```

3. **If Modal Doesn't Appear:**
   - Check browser console (F12 → Console tab)
   - Look for errors
   - Ensure ExamProctoring component is importing correctly

### Test 3.2: Camera Modal Visibility
1. Modal shows all security rules clearly
2. **Expected Content:**
   ```
   SECURITY RULES:
   • Full-screen mode is required
   • Your camera must remain on throughout the exam
   • Your face must be visible to the camera at all times
   • You cannot switch to other tabs or windows
   • You cannot minimize the exam window
   
   BLOCKED ACTIONS:
   • Ctrl+C (Copy)
   • Ctrl+V (Paste)
   • Ctrl+X (Cut)
   • Ctrl+A (Select All)
   • Ctrl+P (Print)
   • PrintScreen
   • ESC
   • F12 (Developer Tools)
   • Right-click
   
   AI DETECTION:
   • Your face will be monitored to ensure you're taking the exam
   • Any suspicious movements (hands bringing objects near camera) will be flagged
   • Attempting to use a phone or camera as a substitute will cause the exam to fail
   • First violation: Warning
   • Second violation: Automatic exam failure with 0% score
   ```

---

## 4. Test: Camera Access

### Test 4.1: Request Camera Access
1. Click "Allow Camera & Start Exam" button
2. **Expected Behavior:**
   ```
   ✅ Browser requests camera permission
      - "Allow Skillforge-Portal to use your camera?"
      - Grant button
   ```

### Test 4.2: Grant Camera Permission
1. Click "Allow" or "Grant" (browser-dependent)
2. **Expected Result:**
   ```
   ✅ Modal closes automatically
   ✅ Camera starts (may take 0.5-1 second)
   ✅ Exam interface loads with:
      - Question 1 of 8
      - Question text
      - 4 option radio buttons
      - Previous/Next navigation buttons
      - Submit button (disabled until last question)
      - Timer in header showing: "2:00:00" (2 hours)
      - AI Status Panel (top-right with face/movement indicators)
   ```

### Test 4.3: Deny Camera Permission
1. If you click "Block" or "Deny":
   ```
   ✅ Modal closes
   ✅ Error message displays
   ✅ Exam cannot start
   ✅ User can try again
   ```

**Troubleshooting:**
- If camera doesn't show: Check browser privacy settings
  - Chrome: Settings → Privacy → Camera
  - Firefox: Preferences → Privacy → Permissions → Camera
  - Safari: System Preferences → Security & Privacy → Camera

---

## 5. Test: Exam Interface

### Test 5.1: Question Navigation
1. Select an answer for Question 1
2. Click "Next Question"
3. **Expected Result:**
   ```
   ✅ Answer is saved (radio button stays selected if you go back)
   ✅ Question 2 displays
   ✅ Progress shows: Question 2 of 8
   ✅ "Previous" button now enabled
   ```

4. Click "Previous Question"
5. **Expected Result:**
   ```
   ✅ Back to Question 1
   ✅ Your answer is still selected (auto-save works)
   ```

### Test 5.2: Timer Display
1. Check timer in exam header
2. **Expected:**
   ```
   ✅ Shows format: H:MM:SS (2:00:00 to 1:59:59 to ... 0:00:01 to 0:00:00)
   ✅ Counts down every second
   ✅ When < 10 minutes: Timer turns red and pulses
   ✅ When reaches 0:00:00: Auto-submit triggered
   ```

### Test 5.3: AI Status Panel
1. Look at top-right corner of exam interface
2. **Expected Display:**
   ```
   ✅ Face Detected: ✓ (Green indicator)
   ✅ Stable Position: ✓ (Green indicator)
   ✅ Warnings: ⚠️ 0
   ```

3. Cover camera with your hand
4. **Expected (after ~1 second):**
   ```
   ✅ Face Detected: ✗ (Red indicator)
   ✅ Alert: "Face not detected - possible phone/camera substitution"
   ✅ Warnings: ⚠️ 1 (may show warning banner)
   ```

5. Uncover camera
6. **Expected:**
   ```
   ✅ Face Detected: ✓ (Green)
   ✅ Warning banner closes
   ✅ Warning count stays at 1 (or resets depending on implementation)
   ```

---

## 6. Test: Security Features

### Test 6.1: Keyboard Blocking - Ctrl+C
1. During exam, press **Ctrl+C**
2. **Expected:**
   ```
   ✅ Copy command is blocked (nothing copied)
   ✅ Console shows: "[SECURITY] Attempted Ctrl+C"
   ✅ Suspicious activity added to log
   ```

3. Check browser console (F12 → Console)
4. **Should see:**
   ```
   [SECURITY] Attempted Ctrl+C
   [TIMESTAMP] 10:15:32
   ```

### Test 6.2: Keyboard Blocking - Ctrl+V
1. Try **Ctrl+V** (paste)
2. **Expected:**
   ```
   ✅ Paste doesn't work
   ✅ Console shows: "[SECURITY] Attempted Ctrl+V"
   ```

### Test 6.3: Print Screen Blocking
1. Press **Print Screen / PrtScn**
2. **Expected:**
   ```
   ✅ Screenshot is blocked
   ✅ Console shows: "[SECURITY] Attempted to press PrintScreen"
   ```

### Test 6.4: F12 DevTools Blocking
1. Press **F12**
2. **Expected:**
   ```
   ✅ DevTools doesn't open
   ✅ Console shows: "[SECURITY] Attempted to press F12"
   ✅ Exam continues normally
   ```

### Test 6.5: Right-Click Blocking
1. Right-click on exam interface
2. **Expected:**
   ```
   ✅ Context menu doesn't appear
   ✅ Console shows: "[SECURITY] Right-click attempt detected"
   ```

### Test 6.6: Escape Key Blocking
1. Press **ESC**
2. **Expected:**
   ```
   ✅ Exam doesn't close
   ✅ Full-screen doesn't exit (or if it does, warning is logged)
   ✅ Console shows: "[SECURITY] Attempted to press Escape"
   ```

---

## 7. Test: Exam Abandonment

### Test 7.1: Tab Switching Detection
1. During exam, press **Alt+Tab** to switch to another tab
2. **Expected (after 0-1 seconds):**
   ```
   ✅ Console shows: "[SECURITY] Tab switched or window hidden"
   ✅ Warning count increases to 1
   ✅ Yellow security alert appears: "⚠️ Warning 1/2: Suspicious activity detected"
   ```

3. Switch back to exam tab
4. **Expected:**
   ```
   ✅ Exam continues
   ✅ Warning count stays at 1
   ✅ Alert remains visible
   ```

5. Switch away **AGAIN** (Alt+Tab)
6. **Expected (Automatic Fail):**
   ```
   ✅ Warning count becomes 2
   ✅ Red security alert appears: "❌ Warning 2/2: Exam Failure Triggered"
   ✅ Exam auto-submits with score: 0%
   ✅ Result shows:
      Status: FAILED
      Score: 0%
      Violations: 2
      Suspicious Activities:
      1. Tab switched or window hidden (00:15:32)
      2. Tab switched or window hidden (00:15:49)
   ✅ Auto-redirects to /exam after 3 seconds
   ```

### Test 7.2: Window Blur Detection
1. During exam, click on browser address bar or outside window
2. **Expected:**
   ```
   ✅ Console shows: "[SECURITY] Window focus lost"
   ✅ Warnings increase by 1
   ```

3. Click back on exam area
4. Expected: Exam continues, warning persists

### Test 7.3: Fullscreen Exit Detection (Manual)
1. Start exam (camera requested, fullscreen auto-enters)
2. **Current state:**
   ```
   ✅ Browser is in fullscreen mode
   ✅ You see only the exam, no browser chrome
   ```

3. Press **ESC** to exit full-screen
   - Note: ESC is blocked by keyboard handler, but fullscreen can still exit via:
   - Browser menu → Exit Full Screen
   - Hover cursor → Browser controls appears → Click fullscreen icon

4. **Expected:**
   ```
   ✅ Console shows: "[SECURITY] Exited fullscreen mode"
   ✅ Warning count increases
   ✅ Exam automatically re-enters fullscreen (auto-retry)
   ```

5. Exit fullscreen again
6. **If second violation:**
   ```
   ✅ Auto-fail triggered (score: 0%)
   ✅ Result page shows violations
   ✅ Redirect to /exam
   ```

---

## 8. Test: AI Detection (Face & Movement)

### Test 8.1: Face Detection
1. During exam, ensure your face is clearly visible
2. **Expected:**
   ```
   ✅ AI Status Panel shows: "✓ Face Detected" (Green)
   ✅ Console may show: "[AI] Face detected with 65% confidence"
   ```

3. Move face out of camera view
4. **Expected (after ~1-2 seconds):**
   ```
   ✅ Indicator changes: "✗ Face Not Detected" (Red)
   ✅ Console shows: "[AI] Face detection failed"
   ✅ Suspicious activity logged: "Face not detected..."
   ✅ May trigger warning if happens repeatedly
   ```

### Test 8.2: Movement Detection
1. Keep face visible, move hands slowly around camera
2. **Expected:**
   ```
   ✅ Movement indicator may show: "⚠️ Movement Detected"
   **If movement + no face detected:**
   ✅ Logs: "Suspicious hand/object movement detected"
   ✅ Counted as suspicious activity
   ```

### Test 8.3: Phone Substitution Detection
1. During exam, bring your phone camera near your laptop camera
2. **Expected:**
   ```
   ✅ Motion detection triggers (movement > 30%)
   ✅ Face detection fails (phone screen ≠ skin tone)
   ✅ Logs: "Possible phone/camera substitution"
   ✅ Marked as suspicious activity
   ✅ May trigger warning
   ```

---

## 9. Test: Normal Exam Completion

### Test 9.1: Complete Entire Exam
1. Start fresh exam (new browser tab or incognito mode)
2. Answer all 8 questions normally
3. For example:
   - Question 1: Select Option 2
   - Question 2: Select Option 1
   - ... (answer all appropriately)
   - Question 8: Select Option 3

4. Click "Submit Exam ✓"

### Test 9.2: Submission Confirmation
1. **Expected Dialog:**
   ```
   Modal: "Confirm Submission"
   "Are you sure you want to submit your exam?"
   Buttons: [Cancel] [Submit]
   ```

2. Click "Submit"

### Test 9.3: Exam Results
1. **Expected Display:**
   ```
   ✅ Score: X% (based on correct answers)
   ✅ Status: PASSED (if >= 60%) or FAILED
   ✅ Correct: X/8
   ✅ Analysis showing which questions correct/incorrect
   ✅ Violations: 0 (if no suspicious activity)
   ✅ "Return to Courses" button appears
   
   Result Example:
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   EXAM COMPLETED ✓
   
   Course: Data Structures & Algorithms
   Score: 75%
   Status: PASSED ✅
   Correct Answers: 6/8
   
   Violations Detected: 0
   
   Questions:
   1. 🟢 Correct
   2. 🟢 Correct
   3. 🔴 Incorrect
   4. 🟢 Correct
   5. 🟢 Correct
   6. 🟢 Correct
   7. 🔴 Incorrect
   8. 🟢 Correct
   
   [Return to Courses]
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ```

4. Click "Return to Courses"
5. **Expected:**
   ```
   ✅ Camera stream stops (you might see "Allowing camera..." briefly then closes)
   ✅ Page redirects to /exam
   ✅ Course list displays again
   ```

### Test 9.4: Verify Camera Is Released
1. Try to take another exam immediately
2. **Expected:**
   ```
   ✅ Modal appears (fresh)
   ✅ Click "Allow Camera & Start Exam"
   ✅ Camera requests permission AGAIN (or grants immediately if device allows multiple access)
   ✅ Exam 2 starts normally with clean state
   ```

---

## 10. Test: Edge Cases

### Test 10.1: Timeout Auto-Submit
1. Start exam
2. Let timer count down naturally until **0:00:00**
3. **Expected:**
   ```
   ✅ Timer reaches 0:00:00
   ✅ Exam auto-submits automatically
   ✅ Results page shows with current score
   ✅ No manual submit button needed
   ```

### Test 10.2: Multiple Violations
1. Start exam
2. Cause violations in sequence:
   - Switch tab (violation 1) → Warning 1 shown
   - Keep exam focused
   - Press Ctrl+C (violation 2) → Warning 2 shown
3. **Expected:**
   ```
   ✅ On warning 2 → Auto-fail immediately
   ✅ All violations logged in result
   ✅ Score: 0%
   ✅ List shows:
      1. Tab switched or window hidden (00:10:30)
      2. Attempted Ctrl+C (00:10:45)
   ```

### Test 10.3: Resume After Navigation
1. Start exam, answer 3 questions
2. Accidentally press back button (if available)
3. **Expected:**
   ```
   ✅ beforeunload event triggers
   ✅ failExamForAbandonment() called
   ✅ Exam marked as failed
   ✅ Cannot go back
   ```

### Test 10.4: Multiple Exam Sessions
1. Complete exam 1 with passing score (75%)
2. Start exam 2 immediately
3. **Expected:**
   ```
   ✅ Exam 2 shows fresh state
   ✅ Questions are different (from course 2)
   ✅ Timer resets to 2:00:00
   ✅ Answers are empty (clean slate)
   ✅ Warnings reset to 0
   ✅ No carry-over from exam 1
   ```

---

## 11. Browser Console Verification

### Open Developer Tools
1. Press **F12** or **Ctrl+Shift+I**
2. Go to **Console** tab
3. **Expected to see logs like:**
   ```
   [SECURITY] Attempted Ctrl+C
   [TIMESTAMP] 10:15:32
   [AI] Face detected with 68% confidence
   [AI] Motion detected: 32% of pixels changed
   [STATE] Warnings: 1
   [STATE] Face Detected: true
   [STATE] Movement Detected: false
   [EXAM] Question 1 answered: Option 2
   [EXAM] Question 2 answered: Option 1
   ... etc
   ```

### Check for Errors
1. Loo for red error messages
2. **Should NOT see:**
   ```
   ❌ Uncaught TypeError: ...
   ❌ Uncaught ReferenceError: ...
   ❌ CORS Error
   ```

3. **Acceptable warnings:**
   ```
   ⚠️ Warning: React 18...
   ⚠️ Deprecation: ...
   ```

---

## 12. Performance Check

### Monitor CPU/Memory
1. Open DevTools → Performance tab
2. Click "Record"
3. Do exam activities (answer question, switch focus, etc.)
4. Click "Stop"
5. **Expected:**
   ```
   ✅ CPU usage: < 50% (on modern hardware)
   ✅ Memory: < 500MB
   ✅ Frame rate: 50+ FPS (smooth)
   ✅ No long tasks (> 50ms)
   ```

### Check Network Activity
1. DevTools → Network tab
2. Refresh page, start exam
3. **Expected:**
   ```
   ✅ Initial page load: < 3 seconds
   ✅ Quiz questions load: < 1 second
   ✅ No failed requests (red status codes)
   ✅ No excessive requests
   ```

---

## 13. Mobile/Responsive Testing

### Test on Tablet (iPad)
1. Navigate to http://localhost:5173
2. Start exam
3. **Expected:**
   ```
   ⚠️ Warning: "Exam proctoring limited on mobile devices"
   ⚠️ Fullscreen API may not work fully
   ⚠️ Keyboard security features may not work (touchscreen)
   ✅ Camera and face detection still functional
   ✅ AI monitoring still active
   ```

### Test on Phone
1. **Expected:**
   ```
   ❌ Most features not recommended on phone
   ⚠️ Very limited fullscreen
   ⚠️ Very limited keyboard security
   ⚠️ Camera access may be limited by OS
   ```

**Recommendation:** Show warning and recommend desktop for proper proctoring

---

## 14. Clean Test - Fresh Start

### Reset for Clean Test
```bash
# Clear cache
rm -rf frontend/node_modules/.cache

# In browser:
# 1. DevTools → Application → Storage → Clear Site Data
# 2. Ctrl+F5 (hard refresh)

# Restart:
npm start
```

### Full Test Scenario
1. ✅ Navigate to /exam
2. ✅ Click "Start Exam"
3. ✅ See security modal
4. ✅ Click "Allow Camera"
5. ✅ Grant camera permission
6. ✅ Exam loads with questions
7. ✅ Answer 5/8 questions
8. ✅ Try Ctrl+C (blocked)
9. ✅ Switch tabs (violation 1)
10. ✅ Switch back, continue
11. ✅ Press Escape (blocked/warning)
12. ✅ Answer remaining questions
13. ✅ Click Submit
14. ✅ Confirm submission
15. ✅ See results (should show violations)
16. ✅ Click "Return to Courses"
17. ✅ Back at /exam page
18. ✅ Take another exam (clean state)
19. ✅ Verify camera released between exams

---

## 15. Success Criteria

### Minimum Requirements (MUST PASS)
- [ ] Exam starts without errors
- [ ] Camera access works
- [ ] Keyboard blocks (Ctrl+C, PrintScreen, etc.)
- [ ] Tab switching detected
- [ ] Score calculated correctly
- [ ] Results show violations
- [ ] Camera releases after exam
- [ ] No console errors (red)

### Recommended (SHOULD PASS)
- [ ] AI status panel shows and updates
- [ ] Full-screen enforced
- [ ] Face detection working
- [ ] Motion detection working
- [ ] All animations smooth (no jank)
- [ ] Mobile shows warning
- [ ] Multiple exams work sequentially

### Nice to Have (CAN BE ADDED LATER)
- [ ] Biometric verification
- [ ] Advanced gesture detection
- [ ] Proctor real-time monitoring
- [ ] IP geolocation verification
- [ ] Browser extension for enhanced security

---

## 16. Documentation References

For more details, see:
- [`AI_PROCTORING_SECURITY.md`](AI_PROCTORING_SECURITY.md) - Security features explained
- [`TECHNICAL_REFERENCE.md`](TECHNICAL_REFERENCE.md) - Implementation details
- [`IMPLEMENTATION_CHANGELOG.md`](IMPLEMENTATION_CHANGELOG.md) - Code changes

---

## 17. Support & Troubleshooting

### Problem: Camera Permission Blocked
**Solution:**
1. Check browser settings (Chrome/Firefox/Safari preferences)
2. Look for site in "Allowed" cameras list
3. Restart browser
4. Try private/incognito mode

### Problem: Exam Fails to Load
**Solution:**
1. Check console for errors (F12)
2. Hard refresh (Ctrl+F5)
3. Check backend is running (if using real API)
4. Check network tab for failed requests

### Problem: Motion Detection Too Sensitive
**Solution:**
1. Check lighting conditions
2. Increase motion threshold in code (see TECHNICAL_REFERENCE.md)
3. Ensure camera view is stable

### Problem: Face Detection Not Working
**Solution:**
1. Ensure good lighting
2. Face directly at camera
3. Remove glasses/sunglasses if possible
4. Check if camera image is inverted (check code)
5. Adjust RGB thresholds for your skin tone

### Problem: Timer Not Counting Down
**Solution:**
1. Open console to check for errors
2. Restart exam
3. Check system clock (sync with NTP if server-based)

### Problem: Violation Logging Incorrect
**Solution:**
1. Clear console, watch for new violations
2. Timestamp should show exam time, not system time
3. Check if suspiciousActivity state is updating

---

## Final Verification Checklist

Before Deployment:
- [ ] All tests passed
- [ ] No console errors in production mode
- [ ] Camera properly releases
- [ ] Exams can be taken multiple times
- [ ] Violations correctly logged
- [ ] Score calculation accurate
- [ ] Redirect to /exam works
- [ ] Mobile shows warnings (if applicable)
- [ ] Documentation updated
- [ ] Stakeholders notified

---

**Date Created:** February 27, 2026
**Status:** Ready for Testing ✅
**Last Updated:** Today

Happy Testing! 🎉

