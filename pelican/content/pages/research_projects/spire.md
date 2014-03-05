Title: SPIRE: RFID Data Stream Processing
Date: 2014-01-31
Modified: 2014-01-31
status: hidden


Efficient, Robust RFID Stream Processing for Tracking and Monitoring
--------------------------------------------------------------------

Recent advances in Radio Frequency Identification (RFID) technology and
ubiquitous networking are facilitating the emergence of an information
infrastructure that collects real-time data associated with physical objects
and delivers high-value content to a variety of user communities. Emerging user
communities include supply chain management, healthcare, postal services, to
name just a new.

Data stream management is central to such an RFID-based information
infrastructure---it allows the relevant information to be sifted out of the
flood of RFID data immediately after it emerges. Despite recent advances in
related areas such as relational stream processing and sensor data management,
RFID data---inherently noisy data for identification of individual
objects---raises many new questions. The significant mismatch between raw RFID
data and meaningful, actionable information required by RFID applications
requires complex processing beyond the capabilities of existing stream systems.
The incomplete and noisy nature of RFID data further complicates such
data-information translation. The volumes of data generated from large RFID
deployments can also stress or overwhelm existing stream systems.

The goal of this research project is to design and develop an efficient, robust
RFID stream processing system that addresses the challenges posed by the
data-information mismatch, incomplete and noisy data, and high data volume, and
enables real-time tracking and monitoring. This project has two main
components.

**SPIRE: low-level interpretation and compression over RFID streams.** This
low-level substrate offers accurate interpretation of incomplete and noisy raw
data. In particular, it infers locations of unobserved objects and inter-object
relationships using probabilistic algorithms. To handle high data volume, it
performs online interpretation, enabling online compression by identifying and
discarding redundant data.

**SASE: complex event processing.** This higher-level event processing system
addresses the data-information mismatch by encoding application information
needs as event patterns and evaluating these patterns continuously over event
streams. The SASE system offers a compact, expressive event language,
automata-based mechanisms for efficient event pattern evaluation, and advanced
techniques for robust event processing.

Project Members
---------------

**Team at UMass Amherst**

* Yanlei Diao (faculty)
* Neil Immerman (faculty)
* Prashant Shenoy (faculty)
* Jagrati Agrawal (grad)
* Daniel Gyllstrom (grad)
* Thanh Tran (grad)
* Yanming Nie (visiting)

**Collaborators**

* Charles Sutton (UC Berkeley)

**Alumni**

* Richard Cocci
* Hee-Jin Chae
* Eugene Wu (MIT)

Sponsors
--------

Cisco Systems

