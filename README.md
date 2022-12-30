# URL
https://brooke0223.github.io/PharmaTech/


# Overview

Immunization Registry databases (or Immunization Information Systems) are currently managed by individual states and/or large municipalities, amounting to 56 fragmented databases that can result in duplicated and inconsistent information. 

This project serves as an exploration into methods that may improve the issues stemming from the currently siloed system by implementing an improved user-interface with a singular database driven backend. The project will focus on addressing and amending data discrepancies, and contributing to modernization and improvement initiatives including the development of a universally-recognized digital vaccination card, inventory optimization and auto-replenishment capabilities, and assessing coverage rates in the community. The regulated nature and scale of such a project would necessitate compliance with any required components mandated by the CDC, and would need to accommodate record-keeping capacity at the population-level, potentially affecting more than 332M Americans.


# Summary

The PharmaTech database and corresponding web application have been carefully constructed over the course of 10 weeks to facilitate the high-quality capture of immunization-related data. Based on peer and instructor feedback, revisions were made to improve, enhance, and expand the abilities of the project to meet the objectives depicted in the Project Outline section.

Data validation was implemented in the UI to ensure capture of quality data (e.g. Add/Edit Patient functionality ensures a patient’s DOB cannot be past the present date, the “Submission Date” for the Add Event functionality is auto-generated and cannot be modified by the user, etc.).

To ensure quality and normalized data, an additional table (Contact_Methods) was created to accommodate Patients having multiple contact methods, e.g. work phone, home phone, email address, street address, etc.

Descriptive feedback alerts were implemented in the UI to communicate the successful/unsuccessful results of users’ CRUD operations–e.g. “Patient has been successfully added.” Feedback alerts were also needed to explain the results of data validation check failures; for example, though a phone number is not required in the “Contact_Methods” table, if a user opted a patient into receiving phone messaging notification (i.e. by selecting “Yes” to “Phone Opt In”), a contact phone number would then become required and the user would need to either add a phone number or opt the patient out of receiving phone messaging in order to submit a new/updated Contact_Methods instance.

Datatypes for some entities were modified to more appropriately fit the data they would depict. For example, the primary keys for the Patients and Providers tables were initially set to be an auto-incrementing integer of the datatype INT, but were updated to the datatype BIGINT in order to reflect the sheer number of instances that would likely occur in a project of this scope.


# Database Outline

    - **Patients - maintains demographic information for every enrolled patient**
        - PatientID: BIGINT(10), auto_increment, unique, not NULL, PK
        - FirstName: VARCHAR(50), not NULL
        - MiddleName: VARCHAR(50) NULL
        - LastName: VARCHAR(50), not NULL
        - DOB: DATE, not NULL
        - Sex: VARCHAR(50) NULL
        - Race: VARCHAR(50) NULL
        - Ethnicity: VARCHAR(50) NULL
        - ActiveStatus: VARCHAR(50) NULL
        - Indicates whether the patient is living or deceased (for archival purposes)
        - Relationships: 
                - A 1:M relationship between Patients and Events is implemented with PatientID as a FK inside of Events
                - A 1:M relationship between Patients and ContactMethods is implemented with PatientID as FK inside of ContactMethods

    - **Contact_Methods - maintains the contact information of patients and/or caregivers**
        - ContactID: BIGINT(10), auto_increment, unique, not NULL, PK
        - PatientID: BIGINT(10), not NULL, FK
        - Phone: BIGINT(10) NULL
        - PhoneType: VARCHAR(50) NULL
        - PhoneOpt: VARCHAR(50) NULL
        - Email: VARCHAR(50) NULL
        - EmailOpt: VARCHAR(50) NULL
        - AddressStreet: VARCHAR(50) NULL
        - AddressCity: VARCHAR(50) NULL
        - AddressState: CHAR(2) NULL
        - AddressZip: INT(5) NULL
        - MailOpt: VARCHAR(50) NULL
        - Relationship: 
            - A 1:M relationship between Patients and Contact_Methods is implemented with PatientID as FK inside of Contact_Methods

    - **Events - records administration details of each unique vaccine encounter**
        - EventID: BIGINT(10), auto_increment, unique, not NULL, PK
        - PatientID: BIGINT(10), not NULL, FK
        - EventType: VARCHAR(50), not NULL
            - Indicates whether event is documenting an immunization that was provided by the reporting agency, an immunization that is being recorded based on a historical record (e.g. from an immunization card), evidence of immunity based on a patient’s history of disease, evidence of immunity based on a patient’s serology, or refusal by a patient to receive a recommended vaccine
        - EventDate: DATE, NOT NULL
            - In instances where the date is unknown (e.g. for a historical event), providers are encouraged to enter as much information as is available from the patient, substitute “01” for the month and/or date as necessary, and provide further clarifying details in the “Notes” attribute of this entity
        - SubmissionDate: DATE, NOT NULL 
        - ProductID: BIGINT(10), not NULL FK
        - AdministrationSite: VARCHAR(50) NULL
        - AdministrationRoute: VARCHAR(50) NULL
        - ProviderID: BIGINT(10), NULL, FK
        - FacilityID: BIGINT(10), NULL, FK
        - Notes: Text NULL
            - Used to add clarifying details as needed, e.g. clarifying information regarding a historical vaccine event
        - Relationships: 
            - A 1:M relationship between Patients and Events is implemented with PatientID as a FK inside of Events
            - A 1:M relationship between Providers and Events is implemented with ProviderID as a FK inside of Events
            - A 1:M relationship between Facilities and Events is implemented with FacilityID as a FK inside of Events
            - A 1:1 relationship between Products and Events is implemented with ProductID as a FK inside of Events

    - **Facilities - maintains demographic information for every enrolled IIS-AO (Immunization Information System Authorized Organization), i.e. entities reporting immunizations**
        - FacilityID: BIGINT(10), auto_increment, unique, NOT NULL, PK
        - FacilityName: VARCHAR(50), NOT NULL
        - FacilityType: VARCHAR(50), NOT NULL
        - AddressStreet: VARCHAR(50) NOT NULL
        - AddressCity: VARCHAR(50) NOT NULL
        - AddressState: CHAR(2) NOT NULL
        - AddressZip: INT(5) NOT NULL
        - Relationships: 
            - A 1:M relationship between Facilities and Events is implemented with FacilityID as a FK inside of Events
            - A M:M relationship between Facilities and Providers is implemented via the composite entity Providers_Facilities with FacilityID as a FK inside of Providers_Facilities
            - A M:M relationship between Products and Facilities is implemented via the composite entity Products_Facilities with ProductID as a FK inside of Products_Facilities

    - **Providers - maintains demographic information for every healthcare professional enrolled in IIS, i.e. entities administering immunizations**
        - ProviderID: BIGINT(10), auto_increment, unique, NOT NULL, PK
        - FirstName: VARCHAR(50), NOT NULL
        - LastName: VARCHAR(50), NOT NULL
        - NPI: BIGINT(10) NULL
        - Designation: VARCHAR(50), NOT NULL
        - Relationships:
            - A 1:M relationship between Providers and Events is implemented with ProviderID as a FK inside of Events
            - A M:M relationship between Facilities and Providers is implemented via the composite entity Providers_Facilities with FacilityID as a FK inside of Providers_Facilities

    - **Products - maintains information about the products available at each facility. Tracks inventory levels and nation-wide supply to support auto-replenishment efforts and minimize waste.**
        - ProductID: BIGINT(10), auto_increment, unique, NOT NULL, PK 
        - ProductType: VARCHAR(50) NOT NULL
        - NDC: BIGINT(11) NULL
        - Lot: VARCHAR(50) NULL
        - Expiration: DATE NULL
        - DoseVolume: DECIMAL(5, 2) NULL
        - DoseUnit: VARCHAR(2)
        - Relationships: 
            - A M:M relationship between Products and Facilities is implemented with FacilityID as a FK inside of Products
            - A 1:1 relationship between Products and Events is implemented via the composite entity Products_Facilities with ProductID as a FK inside of Products_Facilities


# ERD
![ERD image](/src/Assets/ERD.jpeg)

# Schema
![Schema image](/src/Assets/schema.jpeg)

# Sample Data
### *Patients* Sample Data
![Patients image](/src/Assets/patients_sample_data.jpeg)

### *Events* Sample Data
![Events image](/src/Assets/event_sample_data.jpeg)

### *Contact_Methods* Sample Data
![Contact Methods image](/src/Assets/contact_methods_sample_data.jpeg)

### *Facilities* Sample Data
![Facilities image](/src/Assets/facilities_sample_data.jpeg)

### *Products* Sample Data
![Products image](/src/Assets/products_sample_data.jpeg)

### *Products_Facilities* Sample Data
![Events image](/src/Assets/products_facilities_sample_data.jpeg)

### *Providers* Sample Data
![Providers image](/src/Assets/providers_sample_data.jpeg)

### *Providers_Facilities* Sample Data
![Providers-Facilities](/src/Assets/providers_facilities_sample_data.jpeg)


# Screen Captures
### *View Patients* Page
### *Search Patients* Page
### *Search Patients Results* Page
### *Add a New Patient* Page
### *Edit Patient* Page
### *View Contacts* Page
### *Add a New Contact* Page
### *Edit Contact* Page
### *View Events* Page
### *Search Events* Page
### *Search Events Results* Page
### *Add a New Event* Page
### *Edit Event* Page
### *View Facilities* Page
### *Search Facilities* Page
### *Search Facilities Results* Page
### *Add a New Facility* Page
### *Edit Facility* Page
### *View Providers* Page
### *Search Providers* Page
### *Search Providers Results* Page
### *Add a New Provider* Page
### *Edit Provider* Page
### *View Providers' Facilities* Page
### *Add Providers to Facilities* Page
### *View Products* Page
### *Search Products* Page
### *Search Products Results* Page
### *Add a New Product* Page
### *Edit Product* Page
### *View Products in Facilities* Page
### *Add Products to Facilities* Page
### *Edit Products in Facilities* Page
### *Edit Products in Facilities* Page