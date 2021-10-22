---
path: /framework
title: Framework Principles
description: Use the technologies of the modern enterprise. 
order: 2
image: ../images/operations.png
---

## 6. Distributed

> All components should be **distributed** so that it can scale and be available, all the time, to all users.

* Data storage is distributed and replicated for high traffic and availability.  
* Queues or streams are distributed or sharded for high traffic and availability.
* Stream processing should be distributed for computional scale, speed, and availability. 

## 7. Realtime

> All components should be **realtime** or reactive platforms.

* Data storage should respond to all read and write requests at high speeds. 
* Queues should respond to all read and write requests at high speeds, without bottlenecks.
* Stream processing should handle queue processing and data storage/retrieval at high speeds, without bottlenecks. 

## 8. Extendable

> All components should be **extendable** and not closed. 

Don't reinvent the wheel if you can help it by using existing components that are extendable. 

* Cloud native Software, platforms, and infrastructures should be leveraged if and only if they can be extended through APIs, or modules.  
* Alternatively commercial open source software or platforms should be leveraged for ultimate portability and no vendor lockin.
* Pure open source should be used if no commercial or cloud options are available either as a managed service or as a commercially supported offering.

## 9. Automated

> All operations with data and dev should **automated**.

* Development Operations (DevOps) should be implemented for continuous integration and continuous delivery (CICD)
* Data Operations (DataOps) should be implemented for automated data pipeline management. 
* All infrastructure, software configuration, and software maintenance should be automated. 

## 10. Monitored

> All systems should be **monitored** with metrics and logging.

* All systems should have baseline Service Levels that are monitored as metrics. 
* All systems should emit logs that are configurable at different levels.
* All systems logs should be aggregated and retained in an index for quick correlation and investigation. 

<a href="https://anantstage.wpengine.com/framework/" target="_blank">Find out how Anant can help you apply our framework principles to make your platform distributed, realtime, extendable, automated, and monitored.</a>

<!-- end -->
