Title: Securing History
Date: 2014-02-01
Modified: 2014-02-01
status: hidden

Because errors and malicious behavior can never be
perfectly avoided, many applications that manage sensitive
information preserve a history of activities and data. This
provides system account- ability because past events can be
analyzed to detect breaches, maintain data quality, and to
audit compliance with security policies. There are other
settings, however, where retaining a history of past data
or operations poses a serious threat to privacy. Both
privacy and accountability are important goals. But they
are often at odds, and system designers need to carefully
manage the balance between them. The central issue is how
and when historical data is retained by the system, and who
will be able to recover and analyze it.

The goal of this proposal is to design and engineer
database systems that allow users to securely manage
history, thus balancing the needs for privacy and
accountability. In settings that require it, databases
should be configurable as “memoryless” systems that protect
privacy by resisting unauthorized attempts to trace
activities or recover deleted data. In other settings,
databases should support accountability by retaining
desired history, permitting its efficient analysis, and
controlling its release.

Publications
------------

 
* Auditing a Database under Retention Restrictions
Wentian Lu and Gerome Miklau
International Conference on Data Engineering (ICDE) 2009
* Securing history: Privacy and Accountability in Database Systems
Gerome Miklau and Brian Levine and Patrick Stahlberg
Conference on Innovative Data Systems Research (CIDR) 2007
* Threats to Privacy in the Forensic Analysis of Database Systems
Patrick Stahlberg and Gerome Miklau and Brian Neil Levine
Conference on Management of Data (SIGMOD) 2007
* AuditGuard: A System for Database Auditing Under Retention Restrictions
Wentian Lu and Gerome Miklau
Conference on Very Large Databases (VLDB) Demo Program 2008
* Log Sanitization: Auditing a Database Under Retention Restrictions
Wentian Lu and Gerome Miklau
University of Massachusetts, Amherst. Technical Report 2008

Project members
---------------

* Wentian Lu (grad)
* Patrick Stahlberg (grad)

