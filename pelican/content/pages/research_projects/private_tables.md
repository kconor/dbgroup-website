Title: Private Dissemination of Tabular Data
Date: 2014-02-01
Modified: 2014-02-01
status: hidden


Differential privacy is a robust privacy standard that has been successfully
applied to a range of data analysis tasks. But despite much recent work,
optimal strategies for answering a collection of related queries are not known.
Our main contribution in this area is the **matrix mechanism**, a technique for
answering a workload of predicate counting queries under differential privacy.
Each query is a linear combination of base counts reporting the number of
tuples with the given combination of attribute values. A set of such queries is
represented as a matrix in which each row contains the coefficients of a linear
query. Multi-dimensional histograms, sets of marginals, and data cubes can be
viewed as workloads of linear counting queries.

The matrix mechanism generalizes standard mechanisms like the Laplace mechanism
for epsilon differential privacy (or the Gaussian mechanism for approximate
differential privacy). Given a workload of queries, the matrix mechanism first
asks a different set of queries, called a query strategy, and obtains noisy
answers by invoking the Laplace or Gaussian mechanism. Noisy answers to the
workload queries are then derived from the noisy answers to the strategy
queries. There may be more than one way to estimate a workload query from the
answers to the strategy queries. The answer derived by the matrix mechanism
combines the available evidence into a single consistent estimate with least
variance.

While standard mechanisms add independent noise to each query in the workload,
the noise of the matrix mechanism may consist of a complex linear combination
of independent noise samples. Such correlated noise preserves differential
privacy but can allow much more accurate results, particularly for workloads
with correlated queries.

The accuracy of the matrix mechanism depends on the query strategy chosen to
instantiate it. For the particular workload consisting of all range queries
(possibly over multiple dimensions) two good strategies are known (in fact,
they were proposed prior to their formalization as instances of the matrix
mechanism). One uses the Haar wavelet transformation as a query strategy (Xiao,
Wang, and Gehrke. ICDE 2010). The other uses a hierarchical decomposition of
the domain as a query strategy. Although both these query strategies offer
improved error for the set of all range queries, neither is optimal, and these
strategies may not perform well for other workloads. The problem of designing
the optimal strategy for a given workload is explored in (Li et al. PODS 2010).
An efficient algorithm for computing a good strategy for a workload and a lower
bound on the error of the optimal strategy are described in (Li et al, ArXiv
2011).  

Publications
------------

* Optimal error of query sets under the differentially-private matrix mechanism
Chao Li and Gerome Miklau
International Conference on Database Theory (ICDT) 2013

* An Adaptive Mechanism for Accurate Query Answering under Differential Privacy
Chao Li and Gerome Miklau
Proceedings of the VLDB (PVLDB) 2012

* Efficient Batch Query Answering Under Differential Privacy
Chao Li and Gerome Miklau
ArXiv Preprint March 2011

* Optimizing Linear Counting Queries Under Differential Privacy
Chao Li, Michael Hay, Vibhor Rastogi, Gerome Miklau, and Andrew McGregor
Principles of Database Systems (PODS) 2010

* Boosting the Accuracy of Differentially-Private Histograms Through Consistency
Michael Hay, Vibhor Rastogi, Gerome Miklau, Dan Suciu
Conference on Very Large Databases (VLDB) 2010

Software
--------

* Matrix Mechanism for answering sets of linear counting queries, including the release of multi-dimensional histograms. This Python implementation supports (epsilon) and (epsilon-delta) differential privacy, includes the hierarchical and wavelet strategies, analytic error analysis routines, and standard least-squares inference as well as non-negative least squares inference.

* Inference algorithm for hierarchical histograms (H query) from Hay et al. VLDB 2010. This code pre-dates the matrix mechanism and only supports hierarchical strategies. It is therefore less general, but it is more efficient.


Project Members
---------------

* Chao Li (graduate student)
* Michael Hay (graduated student)
* Gerome Miklau (faculty)
* Andrew McGregor (faculty)



This project is funded in part by NSF Trustworthy computing grants CNS-1012748
and IIS-0964094.  Any opinions, findings, and conclusions or recommendations
expressed in this material are those of the author(s) and do not necessarily
reflect the views of the National Science Foundation.

