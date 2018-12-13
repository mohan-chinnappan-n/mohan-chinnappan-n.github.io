## Topic Modeling

Doc is represented as distribution of Topics

Example:
Book A is 60% of Adventure, 30% of Farming and 10% of Detective

Book about Sports:

- 30% Football
- 30% Cricket
- 10% Score
- 10% Goal

Book about Economy:

- 30% USD
- 30% Money
- 10% Euro
- 10% Goal
- 10% Salary


Book about Politics:
- 30% President
- 10% Prime minister
- 10% Union
- 5% Law

Example statement:

- **Football** player from **USA** has **salary** of 10M **USD**

#### Problem description

- You have huge number docs
- You like to what is in those docs and you can't read them all
- Topic models offer a way to get corpus-level view of major topics in those docs
- Unsupervised

- how to get a good topic model

Input corpus 
- docs 
    - collections of words
- words2topic
- topic-1, topic-2, ...
- words in topic-1, words in topic-2, ...

#### Organization

DOCS
    - DOC
        - TOPICS
            - Words


### Key terms
- Lemmatization : covert a word to its root word. Example lemma of word **walking** is **walk**

### LDA - Latent Dirichlet Allocation

- Each document is considered as collection of topics in certain proportion
- Each topic is a collection of keywords in certain proportion
- Topic is collection of dominant keywords - by just looking at the keywords you can identify what the topic is all about


### References 

-[Topic Modeling with Gensim (Python)](https://www.machinelearningplus.com/nlp/topic-modeling-gensim-python/) 

-[Introduction to Latent Dirichlet Allocation](http://blog.echen.me/2011/08/22/introduction-to-latent-dirichlet-allocation/)

