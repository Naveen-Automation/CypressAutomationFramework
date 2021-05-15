
Implementation Details: Technical Assement is implemented using two different frameworks. Both are present in the same project. Mentioned the details of both below under seperate					sections.
			I have also mentioned the improvisations that can be done to extend the framework and also added the challenges I have faced and my trouble shooting to solve them.

			1. Cucumber framework
			2. Mocha framework




**************************************************************************
Framework 1 Details: BDD using Cucumber 
**************************************************************************
Tooling & Programing Language:
	1. Cypress 6.5.0
	2. Cypress-cucumber-preprocessor 4.0.1
	3. Cucumber-html-reporter 5.4.0
	4. Javascript
	5. GIT 

Note: Please use cypress test runner to execute the scripts. I coudn't test cypress CLI scripts added in cypress.json.

1. Used BDD framework to write feature files and scenarios along with page object model design pattern.
	-Added hooks to reduce repeatition of code
   	-Code is commented inside the files as much as possible for better readability.
	-Haven't added any assertions inside page classes as per best practices instead added them inside 'Step Definition' files.
	-Added cucmber html report of the execution in the GIT.
	
2. Feature files are presnt in 'integration\cucumber_tests' folder.
	Path: "cypress\integration\"

3. Step definitions are present in 'integration' folder. 'Step definitions' have the exact same folder name as the feature file in the same hierarcy.
	Path: "cypress\integration\"

4. Cypress configurations like timeouts and Environment variables are maintained under 'cypress.json'.
	Path: "cypress.json"

5. Page class files containing Webelement locators and operations of POM are present under 'integration' folder.
	Path:"cypress\integration\page_classes"

6. Test Data is maintained with in the feature file tables present inside 'integration' folder
	Path: "cypress\integration\"

7. Utilties or inbuilt commands to support scripting is maintained in 'commands.js'
	Path: "cypress\support\commands.js"

8. Cucumber HTML reports are placed under 'results' folder.
	Path: "cypress\results\cucumber\cucumber_html"

9. All global variables are maintenaned under common.js.
	Path: "cypress\fixtures\example.json"

10. 'cucumber-html-reporter.js' contains the code implementation to convert cucumber json reports to cucmber html. This can be further improvised for merging multiple reports.

11. 'cypress\support\index.js' contains handling of uncaugth exceptions and cookies handling.





**************************************************************************
Framework 2 Details: MOCHA 
**************************************************************************
Tooling & Programing Language:
	1. Cypress 6.5.0
	2. Javascript
	4. MOCHA 
	5. GIT

1. Used Mocha framework to write test scripts along with page object model design pattern to promote resusability, maintainability & prevent code duplication.
   Code is commented inside the js files as much as possible.
   Mocha hooks are used to prevent code redunduncy.
   
2. Test scripts are presnt in 'Integration' folder.
	Path: "cypress\integration\mocha_tests"

3. Cypress configurations and Environment variables are maintained under 'cypress.json'.
	Path: "cypress.json"

4. Page class files containing Webelement locators and operations of POM are present under 'Integration' folder.
	Path:"cypress\integration\page_classes"

5. Test Data is maintained under 'Fixtures' folder
	Path: "cypress\fixtures\test_data"

6. Utilties or inbuilt commands to support scripting is maintained in 'commands.js'
	Path: "cypress\support\commands.js"

7. Mochawesome HTML reports not implemented yet.

8. All global variables are maintenaned under common.js.
	Path: "cypress\fixtures\example.json"

9.'cypress\support\index.js' contains handling of uncaugth exceptions and cookies handling.





**************************************************************************
Bonus Points:
**************************************************************************
1. Bonus point one:
	 We have lighthouse plugin for client side performance testing but to analyze the performance of cypress tests we can use cypress Dashboard which provides analytics.
	 

2. Bonus point 2:
	I have kept the product to be searched configurable from feature file in Cucumber framework and AddToCart.json in Mocha framework.
	added if block to check if the product is available or not and log accordingly. 




**************************************************************************
I can improvise both Frameworks by adding below items:
**************************************************************************

1. Data driven mechanism using 'Scenario Outline'.

2. Parallization techniques to reduce execution time.

3. Declarative Jenkins jobs via jenkinsfile

4. Cross browser testing support.

5. Email notifications.

6. Better refactoring and more otimized code.

7. Robust Exception handeling

8. Adding code quality tools like sonar cube.




**************************************************************************
Challenges Faced:
**************************************************************************

1. Unsucessful in adding the item to the basket. Cypress is clicking the 'Add to Basket' button but post request is failing. I have attached the screen shots in the 'Application Error'       folder in the root directory.
	-Being new to Cypress couldn't debug the root cause well.
	-Though tried different ways to click but no luck. jotted down few options which I tried to troble shoot. There could be few ways which I couldn't try like manipulating DOM or 	 	 sending post request directly as an alternative. 
		1. Keyboard strokes					-	didn't work
		2. Doubleclick option					-	didn't work 
		3. Mousehove + click					-	didn't work 
		4. Tried with multiple browsers 			-	didn't work 
		5. Tried with different versions of cypress		-	didn't work 
		6. Tried to record and replay the events with Cypress studio -	didn't work 





