/**
 * Comprehensive Course Content and Exam Data
 * Contains detailed learning materials for all 5 subjects
 */

const coursesData = [
  {
    _id: 'course-dsa-001',
    title: 'Data Structures and Algorithms (DSA)',
    description: 'Master fundamental data structures and algorithmic problem-solving techniques used in competitive programming and technical interviews.',
    level: 'Intermediate',
    duration: '40 hours',
    instructor: 'Prof. Algomaster',
    category: 'Computer Science',
    modules: [
      {
        _id: 'dsa-mod-1',
        title: 'Arrays and Strings',
        description: 'Learn about linear data structures and string manipulation',
        duration: 8,
        videoUrl: 'https://youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&si=tRN2q278sxk2bTqF',
        content: `
        Arrays and Strings are fundamental data structures in computer science.

        **What is an Array?**
        An array is a collection of elements stored at contiguous memory locations. It's one of the most commonly used data structures.

        Key Concepts:
        - Indexing: Access elements in O(1) time
        - Insertion/Deletion: O(n) time complexity
        - Searching: O(n) for linear search, O(log n) for binary search
        - Sorting: Various algorithms like QuickSort, MergeSort

        **Common Operations:**
        1. Linear Search: O(n)
        2. Binary Search: O(log n) - requires sorted array
        3. Reverse Array: O(n)
        4. Rotate Array: O(n)
        5. Find Duplicates: O(n)

        **String Manipulation:**
        - Pattern matching
        - String compression
        - Palindrome checking
        - Anagram detection
        - Substring problems

        **Real-world Applications:**
        - Database indexing
        - Image processing
        - Text processing
        - Cache implementation
        `
      },
      {
        _id: 'dsa-mod-2',
        title: 'Linked Lists',
        description: 'Understand dynamic data structures and linked list operations',
        duration: 6,
        videoUrl: 'https://youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&si=tRN2q278sxk2bTqF',
        content: `
        Linked Lists: Dynamic Data Structures

        **Why Linked Lists?**
        - Dynamic size allocation
        - Efficient insertion/deletion
        - No memory waste
        - Better than arrays in certain scenarios

        **Types of Linked Lists:**
        1. Singly Linked List - One direction traversal
        2. Doubly Linked List - Two direction traversal
        3. Circular Linked List - Last node points to first

        **Operations and Complexities:**
        - Insertion at beginning: O(1)
        - Insertion at end: O(n) or O(1) with tail pointer
        - Deletion: O(n)
        - Search: O(n)
        - Reverse: O(n)

        **Common Problems:**
        1. Reverse a linked list
        2. Detect cycle
        3. Find middle element
        4. Merge two sorted lists
        5. Remove duplicates
        6. Partition list
        7. Flatten a nested list

        **Real Applications:**
        - Undo functionality in applications
        - Browser history
        - Playlist implementation
        - File systems
        `
      },
      {
        _id: 'dsa-mod-3',
        title: 'Stacks and Queues',
        description: 'Master LIFO and FIFO data structures',
        duration: 6,
        videoUrl: 'https://youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&si=tRN2q278sxk2bTqF',
        content: `
        Stacks and Queues: LIFO and FIFO Structures

        **Stacks (LIFO - Last In First Out)**
        Operations:
        - Push: Add element to top - O(1)
        - Pop: Remove top element - O(1)
        - Peek: View top element - O(1)

        Applications:
        - Function call stack (recursion)
        - Undo/Redo functionality
        - Expression evaluation
        - Depth-first search
        - Balanced parentheses checking
        - Backtracking problems

        **Queues (FIFO - First In First Out)**
        Operations:
        - Enqueue: Add to rear - O(1)
        - Dequeue: Remove from front - O(1)
        - Peek: View front element - O(1)

        Types:
        - Simple Queue
        - Circular Queue
        - Priority Queue
        - Double-ended Queue (Deque)

        Applications:
        - BFS (Breadth-first search)
        - Print queue management
        - Task scheduling
        - Asynchronous data processing
        - Load balancing

        **Deque (Double Ended Queue)**
        - Insertion/Deletion at both ends: O(1)
        - Applications: Sliding window, palindrome checking
        `
      },
      {
        _id: 'dsa-mod-4',
        title: 'Trees and Graphs',
        description: 'Learn hierarchical and network data structures',
        duration: 10,
        videoUrl: 'https://youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&si=tRN2q278sxk2bTqF',
        content: `
        Trees and Graphs: Complex Data Structures

        **Binary Trees**
        - Structure: Each node has at most 2 children
        - Traversals: In-order, Pre-order, Post-order, Level-order
        - Height: Maximum distance from root to leaf
        - Balanced: Height difference between subtrees ≤ 1

        **Binary Search Trees (BST)**
        - Left child < Parent < Right child
        - Average operations: O(log n)
        - Worst case: O(n) if unbalanced
        - Operations: Insert, Delete, Search

        **Balanced BSTs**
        - AVL Trees: Height difference ≤ 1, rotations needed
        - Red-Black Trees: Color-based balancing
        - B-Trees: Multiple keys per node

        **Graphs**
        Representation:
        - Adjacency Matrix: O(V²) space, O(1) edge lookup
        - Adjacency List: O(V+E) space, efficient traversal

        **Graph Traversals:**
        1. DFS (Depth-First Search): Uses stack - O(V+E)
        2. BFS (Breadth-First Search): Uses queue - O(V+E)

        **Key Algorithms:**
        - Shortest Path: Dijkstra, Bellman-Ford
        - Minimum Spanning Tree: Kruskal, Prim
        - Topological Sort
        - Cycle Detection
        - Strongly Connected Components

        **Common Problems:**
        - Course schedule
        - Word ladder
        - Clone graph
        - Alien dictionary
        - Graph coloring
        `
      },
      {
        _id: 'dsa-mod-5',
        title: 'Dynamic Programming',
        description: 'Solve optimization problems using memoization',
        duration: 10,
        videoUrl: 'https://youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt&si=tRN2q278sxk2bTqF',
        content: `
        Dynamic Programming: Optimization Technique

        **Core Concepts:**
        1. Overlapping Subproblems: Same subproblems solved multiple times
        2. Optimal Substructure: Optimal solution contains optimal solutions of subproblems
        3. Memoization: Cache results to avoid recomputation
        4. Tabulation: Bottom-up approach using DP table

        **Two Approaches:**
        
        **Top-Down (Memoization):**
        - Recursive solution with caching
        - Natural problem decomposition
        - More intuitive
        - Risk of stack overflow for large inputs

        **Bottom-Up (Tabulation):**
        - Iterative solution using table
        - No recursion overhead
        - Better space management possible
        - Requires identifying recurrence relation

        **Classic DP Problems:**
        1. Fibonacci (0-1 -> 1-100 in milliseconds!)
        2. 0/1 Knapsack
        3. Longest Common Subsequence
        4. Longest Increasing Subsequence
        5. Coin Change Problem
        6. Matrix Chain Multiplication
        7. Edit Distance
        8. Partition Equal Subset Sum
        9. Reg Ex Matching
        10. Distinct Subsequences

        **Space Optimization:**
        - Many DP problems can be optimized from O(n²) to O(n) space
        - Sliding window technique
        - Using only necessary previous states

        **When to Use DP:**
        - Optimization problems (maximize/minimize)
        - Counting problems
        - Multiple choices at each step
        - Past choices affect future options
        `
      }
    ]
  },

  {
    _id: 'course-dbms-001',
    title: 'Database Management Systems (DBMS)',
    description: 'Comprehensive guide to database design, SQL, normalization, and optimization techniques.',
    level: 'Intermediate',
    duration: '35 hours',
    instructor: 'Prof. DataMaster',
    category: 'Databases',
    modules: [
      {
        _id: 'dbms-mod-1',
        title: 'Relational Database Fundamentals',
        description: 'Understanding RDBMS concepts and data modeling',
        duration: 7,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRiyryTrbKHX1Sh9luYI0dhX&si=gKzujSDmQJx6TZfp',
        content: `
        Relational Database Management Systems (RDBMS)

        **Key Concepts:**
        1. Tables (Relations): Two-dimensional structure with rows and columns
        2. Rows (Tuples): Individual records
        3. Columns (Attributes): Data fields
        4. Keys: Unique identifiers for rows
           - Primary Key: Uniquely identifies each row
           - Foreign Key: References primary key in another table
           - Candidate Key: Could be primary key
           - Super Key: Contains candidate key + extra attributes

        **Data Types:**
        - Numeric: INT, FLOAT, DECIMAL
        - String: VARCHAR, CHAR, TEXT
        - Date/Time: DATE, TIME, TIMESTAMP
        - Boolean: BOOLEAN, BIT
        - JSON: JSON, JSONB

        **Constraints:**
        - NOT NULL: Column must have value
        - UNIQUE: All values different
        - PRIMARY KEY: Unique + NOT NULL
        - FOREIGN KEY: Reference another table
        - CHECK: Custom validation
        - DEFAULT: Default value if not specified

        **Relationships:**
        1. One-to-One: 1:1
        2. One-to-Many: 1:N
        3. Many-to-Many: M:N (requires junction table)
        4. Self-Referencing: Table refers to itself

        **Database Design:**
        - Top-down approach (conceptual → logical → physical)
        - Bottom-up approach (existing data → schema)
        - Meet-in-middle approach
        `
      },
      {
        _id: 'dbms-mod-2',
        title: 'SQL: Querying and Manipulation',
        description: 'Master SQL for data retrieval and manipulation',
        duration: 8,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRiyryTrbKHX1Sh9luYI0dhX&si=gKzujSDmQJx6TZfp',
        content: `
        SQL: Structured Query Language

        **DML (Data Manipulation Language):**
        - SELECT: Retrieve data
        - INSERT: Add new records
        - UPDATE: Modify existing records
        - DELETE: Remove records

        **Filtering and Conditions:**
        - WHERE: Basic filtering
        - AND, OR, NOT: Logical operators
        - BETWEEN: Range filtering
        - IN/NOT IN: Multiple values
        - LIKE: Pattern matching (%, _)
        - NULL checks: IS NULL, IS NOT NULL

        **Data Retrieval:**
        - SELECT columns with aliases
        - Arithmetic and string operations
        - DISTINCT: Remove duplicates
        - ORDER BY: Sorting (ASC, DESC)
        - LIMIT/OFFSET: Pagination
        - GROUP BY: Grouping records
        - HAVING: Filter grouped results

        **Aggregate Functions:**
        - COUNT: Number of rows
        - SUM: Total of numeric column
        - AVG: Average value
        - MIN: Minimum value
        - MAX: Maximum value
        - STRING_AGG: Concatenate strings
        - ARRAY_AGG: Aggregate into array

        **Joins:**
        1. INNER JOIN: Only matching rows
        2. LEFT JOIN: All left + matching right
        3. RIGHT JOIN: All right + matching left
        4. FULL OUTER JOIN: All rows from both
        5. CROSS JOIN: Cartesian product
        6. Self JOIN: Join table to itself

        **Subqueries:**
        - Scalar subqueries (return single value)
        - Row subqueries (return single row)
        - Table subqueries (return multiple rows/columns)
        - Correlated subqueries (reference outer query)

        **Set Operations:**
        - UNION: Combine + remove duplicates
        - UNION ALL: Combine keeping duplicates
        - INTERSECT: Common rows
        - EXCEPT/MINUS: Rows in first not in second
        `
      },
      {
        _id: 'dbms-mod-3',
        title: 'Database Normalization',
        description: 'Design efficient databases with normalization rules',
        duration: 7,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRiyryTrbKHX1Sh9luYI0dhX&si=gKzujSDmQJx6TZfp',
        content: `
        Database Normalization

        **Purpose:**
        - Eliminate data redundancy
        - Reduce anomalies (insert, update, delete)
        - Improve data integrity
        - Optimize database performance

        **Normal Forms:**

        **1NF (First Normal Form):**
        - Atomic values (no arrays, lists)
        - No repeating groups
        - Each column contains single type
        Example: Separate "Phone1, Phone2" into separate rows

        **2NF (Second Normal Form):**
        - Must be in 1NF
        - Remove partial dependencies
        - Non-key attributes depend on entire primary key
        - Especially important for composite keys

        **3NF (Third Normal Form):**
        - Must be in 2NF
        - Remove transitive dependencies
        - Non-key attributes don't depend on other non-key attributes
        - Most common goal in practice

        **BCNF (Boyce-Codd Normal Form):**
        - Stricter than 3NF
        - Every determinant is a candidate key
        - Handles edge cases in 3NF

        **4NF & 5NF:**
        - Deal with multivalued dependencies
        - Rarely needed in practice

        **Denormalization:**
        - Intentionally breaking normalization rules
        - For performance optimization
        - Common in data warehouses and analytics

        **Trade-offs:**
        - Normalized: Better for OLTP, less redundancy
        - Denormalized: Better for OLAP, faster reads
        - Find balance based on use case
        `
      },
      {
        _id: 'dbms-mod-4',
        title: 'Indexing and Query Optimization',
        description: 'Improve database performance through indexing strategies',
        duration: 7,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRiyryTrbKHX1Sh9luYI0dhX&si=gKzujSDmQJx6TZfp',
        content: `
        Indexing and Query Optimization

        **Why Indexing?**
        - Faster data retrieval (O(log n) vs O(n))
        - Slower write operations (must update index)
        - Storage overhead
        - Trade-off between read and write performance

        **Types of Indexes:**
        1. Primary Index: On primary key (auto-created)
        2. Unique Index: Enforces uniqueness
        3. Composite Index: Multiple columns
        4. Full-text Index: Text searching
        5. Spatial Index: Geographic queries
        6. Bitmap Index: Low cardinality columns
        7. Hash Index: Perfect equality matching

        **Index Data Structures:**
        - B-Tree: Most common, balanced
        - B+ Tree: Leaf nodes contain data
        - Hash Index: Fast equality, no range
        - R-Tree: Spatial data
        - Bitmap: Set operations efficient

        **Query Optimization:**
        1. Use EXPLAIN to see execution plan
        2. Avoid SELECT * - specific columns only
        3. Index on WHERE columns
        4. Avoid functions on indexed columns
        5. Use INNER JOIN over LEFT when possible
        6. Optimize subqueries
        7. Partition large tables
        8. Archive old data

        **Best Practices:**
        - Index on foreign keys (for joins)
        - Index on frequently searched columns
        - Don't over-index (slows writes)
        - Monitor index usage
        - Rebuild fragmented indexes
        - Regular ANALYZE and VACUUM

        **Performance Tips:**
        - Connection pooling
        - Query caching
        - Batch operations
        - Asynchronous processing
        - Read replicas for scale
        `
      },
      {
        _id: 'dbms-mod-5',
        title: 'Transactions and ACID Properties',
        description: 'Understanding data consistency and isolation levels',
        duration: 6,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRiyryTrbKHX1Sh9luYI0dhX&si=gKzujSDmQJx6TZfp',
        content: `
        Transactions and ACID Properties

        **ACID Properties:**

        **A - Atomicity:**
        - All or nothing
        - Either complete transaction or roll back
        - Prevents partial updates
        - Example: Bank transfer must reduce source AND increase destination

        **C - Consistency:**
        - Data remains valid after transaction
        - All constraints satisfied
        - From one consistent state to another
        - Application + database responsibility

        **I - Isolation:**
        - Concurrent transactions don't interfere
        - Schedule transactions as if serial
        - Isolation levels determine strictness
        - Trade-off between isolation and performance

        **D - Durability:**
        - Committed data persists
        - Survives system failures
        - Write-ahead logging
        - Data recovery mechanisms

        **Isolation Levels (Strictest to Least):**
        1. Serializable: No anomalies (slowest)
        2. Repeatable Read: Phantom reads possible
        3. Read Committed: Committed reads only (default)
        4. Read Uncommitted: Dirty reads possible (fastest)

        **Transaction Anomalies:**
        1. Dirty Read: Read uncommitted data
        2. Non-repeatable Read: Read changes between queries
        3. Phantom Read: New rows appear/disappear
        4. Lost Update: Concurrent updates conflict

        **Locking Mechanisms:**
        - Shared Lock (Read): Multiple readers
        - Exclusive Lock (Write): Only one writer
        - Deadlock: Circular dependencies
        - Lock timeout: Prevent indefinite waiting

        **Transaction Control:**
        - BEGIN/START TRANSACTION: Start
        - COMMIT: Save changes
        - ROLLBACK: Undo changes
        - SAVEPOINT: Partial rollback point
        `
      }
    ]
  },

  {
    _id: 'course-os-001',
    title: 'Operating Systems (OS)',
    description: 'Deep dive into OS concepts including processes, memory management, and file systems.',
    level: 'Intermediate',
    duration: '38 hours',
    instructor: 'Prof. Kernelwiz',
    category: 'Systems',
    modules: [
      {
        _id: 'os-mod-1',
        title: 'OS Fundamentals and Process Management',
        description: 'Core OS concepts and process lifecycle',
        duration: 8,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&si=_b1d-TeVhq7zQxye',
        content: `
        Operating Systems Fundamentals

        **What is an OS?**
        - Software that manages hardware resources
        - Intermediary between user and hardware
        - Process management, memory management, I/O handling
        - Multi-user, multitasking, multiprocessing capabilities

        **Main Functions:**
        1. Resource Allocation: CPU, Memory, Storage, I/O
        2. Process Management: Creation, scheduling, termination
        3. Memory Management: Allocation, protection, virtual memory
        4. File System: Storage, organization, access control
        5. Security: Authentication, authorization, protection
        6. I/O Management: Device control and data transfer

        **Process Management:**
        A process is executing instance of a program with its own:
        - Program counter
        - Memory space
        - Registers
        - Resources

        **Process States:**
        1. New: Created but not loaded
        2. Ready: Loaded, waiting for CPU
        3. Running: Executing on CPU
        4. Waiting: Waiting for I/O
        5. Terminated: Finished

        **Process Control Block (PCB):**
        - Process ID
        - Program counter
        - CPU registers
        - Memory limits
        - Open files
        - Scheduling info

        **Context Switching:**
        - Save current process state
        - Load next process state
        - Overhead cost but enables multitasking
        - Time: microseconds to milliseconds

        **Threads:**
        - Lightweight processes
        - Share memory space with parent
        - Lower creation overhead
        - Simpler communication
        - Shared resources can cause issues
        `
      },
      {
        _id: 'os-mod-2',
        title: 'CPU Scheduling',
        description: 'Learn scheduling algorithms for optimal CPU utilization',
        duration: 7,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&si=_b1d-TeVhq7zQxye',
        content: `
        CPU Scheduling Algorithms

        **Scheduling Criteria:**
        - CPU Utilization: Keep CPU busy
        - Throughput: Processes completed per unit time
        - Turnaround Time: Total time from submission to completion
        - Waiting Time: Time in ready queue
        - Response Time: First response time

        **Non-Preemptive Algorithms:**
        
        **1. FCFS (First Come First Served)**
        - Simple, fair
        - Convoy effect (short process waits long)
        - Average wait time: high

        **2. SJF (Shortest Job First)**
        - Minimize average wait time
        - Optimal non-preemptive
        - Problem: May starve long jobs
        - Requires knowing job duration (difficult)

        **3. Priority Scheduling**
        - Each process has priority
        - Higher priority runs first
        - Problem: Starvation (low priority)
        - Solution: Aging (increase priority over time)

        **Preemptive Algorithms:**

        **1. SRTF (Shortest Remaining Time First)**
        - Preemptive version of SJF
        - Swap to shorter job when arrives
        - More overhead but better response
        - Still requires job duration

        **2. Round Robin (RR)**
        - Each process gets time quantum
        - After quantum, go to end of queue
        - Fair, good response time
        - Performance depends on quantum size
        - Too small: High overhead
        - Too large: Behaves like FCFS

        **3. Priority Scheduling (Preemptive)**
        - With preemption on higher priority
        - Dynamic priority adjustment
        - Common in real systems

        **4. Multi-level Queue**
        - Multiple ready queues by priority
        - Fixed priority between levels
        - Within level: different algorithms
        - Used in modern OS (foreground/background)

        **5. Multi-level Feedback Queue**
        - Process can move between queues
        - Prevents starvation
        - Adaptive scheduling
        - Most flexible, most complex
        `
      },
      {
        _id: 'os-mod-3',
        title: 'Memory Management',
        description: 'Techniques for efficient memory allocation and protection',
        duration: 8,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&si=_b1d-TeVhq7zQxye',
        content: `
        Memory Management

        **Memory Hierarchy:**
        Registers → L1 Cache → L2 Cache → L3 Cache → RAM → SSD → Disk

        **Memory Allocation Types:**
        
        **1. Contiguous Allocation:**
        - Fixed Partitions: Memory divided into fixed sizes
        - Variable Partitions: Dynamic partition creation
        - Problems: Fragmentation (internal/external)
        - Simple but inefficient

        **2. Paging:**
        - Divide memory into fixed-size pages
        - Divide process into fixed-size pages
        - Eliminates external fragmentation
        - Internal fragmentation still exists
        - Page Table: Maps virtual to physical
        - Requires special hardware (MMU)

        **3. Segmentation:**
        - Memory divided into variable, meaningful segments
        - Segments: Code, data, stack, heap
        - Logical units make sense
        - External fragmentation problem
        - Better protection and sharing

        **Virtual Memory:**
        - Process uses virtual address space
        - Larger than physical memory
        - Paging to disk for excess
        - Demand paging: Load page on demand
        - Page faults: When page not in memory

        **Page Replacement Algorithms:**
        1. FIFO: First in first out (poor)
        2. Optimal: Least used in future (impossible to know)
        3. LRU (Least Recently Used): Good approximation
        4. LFU (Least Frequently Used): Less common
        5. Clock: Approximation of LRU, easier implementation

        **Thrashing:**
        - Excessive page faults
        - System spends more time paging than executing
        - Working set theory: Keep needed pages in memory
        - Solutions: More memory, better algorithms, admission control

        **Memory Protection:**
        - Base-limit registers
        - Memory management unit (MMU)
        - Read-only, read-write permissions
        - Prevents process interference
        `
      },
      {
        _id: 'os-mod-4',
        title: 'File Systems',
        description: 'Understanding file organization and access methods',
        duration: 7,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&si=_b1d-TeVhq7zQxye',
        content: `
        File Systems

        **File Concepts:**
        - Named collection of data
        - Attributes: Name, type, location, size, dates
        - Operations: Create, read, write, delete, seek

        **File Types:**
        - Text: Human readable
        - Binary: Machine readable
        - Executable: Runnable code
        - Special: Device files, pipes

        **File Access Methods:**
        
        **1. Sequential Access:**
        - Read from beginning
        - Like tape
        - Simple but slow for random access

        **2. Random Access:**
        - Direct access to any position
        - Like disk
        - Allows seeking

        **3. Indexed Access:**
        - Index structure
        - Fast for specific searches
        - Database-like access

        **Directory Structures:**
        
        **1. Single-level Directory:**
        - All files in one directory
        - Simple but limited

        **2. Two-level Directory:**
        - Master file directory + user directories
        - Some isolation

        **3. Tree-structured Directory:**
        - Hierarchical folders
        - Modern file systems
        - Absolute and relative paths

        **4. Acyclic Graph:**
        - Shared subdirectories
        - Hard links
        - Complexity management needed

        **Disk Scheduling:**
        1. FCFS: Simple, poor
        2. SSTF: Shortest seek time first
        3. SCAN: Like elevator (arm sweeps)
        4. C-SCAN: Only one direction
        5. FSCAN: Prevents starvation

        **File System Types:**
        - FAT: Simple, limited
        - NTFS: Modern Windows
        - ext4: Modern Linux
        - APFS: Modern macOS
        `
      },
      {
        _id: 'os-mod-5',
        title: 'Synchronization and Deadlocks',
        description: 'Managing concurrent processes and avoiding deadlocks',
        duration: 8,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O&si=_b1d-TeVhq7zQxye',
        content: `
        Process Synchronization and Deadlock

        **Critical Section Problem:**
        - Mutual exclusion: Only one process at a time
        - Progress: Non-blocked process can enter
        - Bounded waiting: No indefinite waiting
        - Entry/exit protocols needed

        **Synchronization Tools:**

        **Locks/Mutexes:**
        - Binary semaphore
        - Only one can hold
        - Spinlock: Keep trying
        - Sleep lock: Wait in queue

        **Semaphores:**
        - Counter ≥ 0
        - wait() / P(): Decrement (block if 0)
        - signal() / V(): Increment
        - Binary: 0 or 1 (like mutex)
        - Counting: Any value (resource counting)

        **Monitors:**
        - Encapsulation approach
        - Automatic mutual exclusion
        - Condition variables for signaling
        - Higher level abstraction

        **Deadlock:**
        When processes wait indefinitely for resources held by each other

        **Necessary Conditions (all must be true):**
        1. Mutual Exclusion: Resource can't be shared
        2. Hold and Wait: Process holds while waiting
        3. No Preemption: Can't forcefully take
        4. Circular Wait: Cycle in resource graph

        **Deadlock Prevention:**
        - Break one necessary condition
        - Eliminate mutual exclusion (hard)
        - Eliminate hold and wait
        - Allow preemption
        - Break circular wait (ordering)

        **Deadlock Avoidance:**
        - Banker's algorithm
        - Safe state: Resources sufficient
        - Needs to know max requirements

        **Deadlock Detection:**
        - Allow deadlocks to happen
        - Detect using resource graph
        - Expensive but more efficient

        **Deadlock Recovery:**
        - Process termination
        - Resource preemption
        `
      }
    ]
  },

  {
    _id: 'course-cn-001',
    title: 'Computer Networks (CN)',
    description: 'Comprehensive networking course covering OSI model, TCP/IP, and protocols.',
    level: 'Intermediate',
    duration: '36 hours',
    instructor: 'Prof. Networkpro',
    category: 'Networking',
    modules: [
      {
        _id: 'cn-mod-1',
        title: 'Network Fundamentals and OSI Model',
        description: 'Understanding network basics and OSI layered architecture',
        duration: 7,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=6wtBf1fvH2FjJvOR',
        content: `
        Computer Networks Fundamentals

        **Network Components:**
        - Hosts: Computers, servers, devices
        - Communication Links: Wired, wireless media
        - Switches/Routers: Forward packets
        - Applications: Services using network

        **Network Types:**
        1. LAN (Local Area Network): Within building
        2. MAN (Metropolitan Area Network): City-wide
        3. WAN (Wide Area Network): Across continents
        4. PAN (Personal Area Network): Bluetooth, Zigbee
        5. VPN (Virtual Private Network): Encrypted tunnel

        **OSI Model (7 Layers):**
        
        **Layer 7 - Application:**
        - User applications
        - HTTP, HTTPS, FTP, SMTP, DNS, Telnet
        - Data units: Messages

        **Layer 6 - Presentation:**
        - Data formatting, encryption, compression
        - Character encoding (ASCII, Unicode)
        - Data units: Messages

        **Layer 5 - Session:**
        - Session establishment and termination
        - Dialog control, synchronization
        - Data units: Messages

        **Layer 4 - Transport:**
        - End-to-end communication
        - TCP (reliable), UDP (fast)
        - Port numbers, flow control
        - Data units: Segments/Datagrams

        **Layer 3 - Network:**
        - Routing, logical addressing
        - IP (IPv4, IPv6)
        - ICMP, IGMP
        - Data units: Packets

        **Layer 2 - Data Link:**
        - Physical addressing (MAC)
        - Switching, framing
        - Ethernet, PPP
        - Data units: Frames

        **Layer 1 - Physical:**
        - Physical transmission media
        - Cables, signals, bitrate
        - Hub, repeater
        - Data units: Bits

        **TCP/IP Model (4 layers):**
        - Application (7,6,5)
        - Transport (4)
        - Network (3)
        - Link (2,1)
        `
      },
      {
        _id: 'cn-mod-2',
        title: 'IP Addressing and Routing',
        description: 'IPv4, IPv6, subnetting, and routing protocols',
        duration: 7,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=6wtBf1fvH2FjJvOR',
        content: `
        IP Addressing and Routing

        **IPv4 Addressing:**
        - 32-bit address (192.168.1.1)
        - 4 octets (0-255)
        - About 4.3 billion unique addresses
        - Classes A, B, C, D, E (deprecated)

        **IPv4 Classes:**
        - Class A: 0-127 (1-126), 16M addresses
        - Class B: 128-191, 65K addresses
        - Class C: 192-223, 256 addresses
        - Class D: 224-239 (Multicast)
        - Class E: 240-255 (Reserved)

        **Subnetting:**
        - Divide large network into smaller
        - CIDR notation: 192.168.1.0/24
        - Subnet mask: 255.255.255.0
        - Network, broadcast, usable addresses

        **IPv6 Addressing:**
        - 128-bit address
        - 8 groups of 4 hex digits (2001:0db8:85a3:0000:0000:8a2e:0370:7334)
        - Simpler header than IPv4
        - Enough for everything (340 undecillion)
        - Auto-configuration, IPsec built-in

        **Special Addresses:**
        - Loopback: 127.0.0.1 (127.0.0.0/8)
        - Private: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16
        - Broadcast: .255
        - Multicast: 224.0.0.0 to 239.255.255.255

        **Routing:**
        - Process of forwarding packets
        - Routing table: Destination → Next hop
        - Routing protocols: RIP, OSPF, BGP

        **RIP (Routing Information Protocol):**
        - Distance vector
        - Hop count metric
        - Simple but limited
        - Max 15 hops

        **OSPF (Open Shortest Path First):**
        - Link state
        - Dijkstra's algorithm
        - Cost metric (bandwidth-based)
        - More complex, better

        **BGP (Border Gateway Protocol):**
        - Path vector
        - Between autonomous systems
        - Policy-based routing
        - Most used on internet
        `
      },
      {
        _id: 'cn-mod-3',
        title: 'Transport Layer Protocols',
        description: 'TCP, UDP, and end-to-end communication',
        duration: 7,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=6wtBf1fvH2FjJvOR',
        content: `
        Transport Layer Protocols

        **UDP (User Datagram Protocol):**
        - Connectionless
        - Unreliable but fast
        - No flow control
        - No congestion control
        - Low overhead
        - Use cases: DNS, NTP, VoIP, streaming, gaming

        **UDP Header:**
        - Source port (2 bytes)
        - Destination port (2 bytes)
        - Length (2 bytes)
        - Checksum (2 bytes)
        - Data

        **TCP (Transmission Control Protocol):**
        - Connection-oriented
        - Reliable (error-checking)
        - In-order delivery
        - Flow control
        - Congestion control
        - More overhead
        - Use cases: Email, FTP, HTTP, Banking

        **TCP Features:**
        - Sequence numbers: Ordering
        - Acknowledgments: Confirmation
        - Checksums: Error detection
        - Windows: Flow control
        - Timers: Retransmission, keepalive

        **TCP Connection Establishment:**
        Three-way handshake:
        1. SYN: Client initiates
        2. SYN-ACK: Server responds
        3. ACK: Client confirms

        **TCP Connection Termination:**
        Four-way handshake:
        1. FIN: One side initiates close
        2. ACK: Other side acknowledges
        3. FIN: Other side sends FIN
        4. ACK: First side acknowledges

        **TCP States:**
        - CLOSED → LISTEN (server)
        - CLOSED → SYN_SENT (client)
        - SYN_RECEIVED → ESTABLISHED
        - Data transfer
        - FIN_WAIT → CLOSED

        **Flow Control:**
        - Sliding window: Receiver advertises window size
        - Receiver can't be overwhelmed
        - Prevents buffer overflow

        **Congestion Control:**
        - Network can't be overwhelmed
        - Slow start: Exponential increase
        - Congestion avoidance: Linear increase
        - Fast retransmit: On duplicate ACKs
        - Fast recovery: Skip slow start
        `
      },
      {
        _id: 'cn-mod-4',
        title: 'DNS and Application Layer',
        description: 'DNS, HTTP, HTTPS, and application protocols',
        duration: 7,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=6wtBf1fvH2FjJvOR',
        content: `
        Application Layer Protocols

        **DNS (Domain Name System):**
        - Translate domain names to IP addresses
        - Distributed system of nameservers
        - Hierarchical: Root → TLD → Authoritative
        - Caching at multiple levels
        - Record types: A, AAAA, CNAME, MX, TXT, NS

        **DNS Process:**
        1. Client asks local resolver
        2. Resolver asks root nameserver
        3. Root directs to TLD
        4. TLD directs to authoritative
        5. Authoritative returns IP
        6. Resolver returns to client (cached)

        **HTTP (Hypertext Transfer Protocol):**
        - Request-response protocol
        - Stateless
        - Methods: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS
        - Status codes: 1xx, 2xx (success), 3xx (redirect), 4xx (client error), 5xx (server error)

        **Common Status Codes:**
        - 200 OK, 201 Created
        - 301 Moved Permanently, 304 Not Modified
        - 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found
        - 500 Internal Server Error, 503 Service Unavailable

        **HTTP Headers:**
        - Content-Type: Type of body
        - Content-Length: Size of body
        - Cache-Control: Caching directives
        - Authorization: Authentication
        - Cookie: Session tracking
        - User-Agent: Client info

        **HTTPS (HTTP Secure):**
        - HTTP over TLS/SSL
        - Encryption of all data
        - Certificate-based authentication
        - Prevents eavesdropping and tampering
        - Uses port 443

        **Email Protocols:**
        - SMTP: Send mail (port 25, 465, 587)
        - POP3: Receive mail (port 110)
        - IMAP: Receive mail with folders (port 143)

        **FTP (File Transfer Protocol):**
        - Transfer files
        - User credentials
        - Active/Passive mode
        - Plain-text credentials (security issue)
        - SFTP: Secure FTP over SSH

        **DHCP (Dynamic Host Configuration Protocol):**
        - Automatic IP assignment
        - Reduces manual configuration
        - Lease-based allocation
        - Discover → Offer → Request → Ack cycle
        `
      },
      {
        _id: 'cn-mod-5',
        title: 'Network Security and Wireless Networks',
        description: 'Security protocols, encryption, and wireless communication',
        duration: 8,
        videoUrl: 'https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx&si=6wtBf1fvH2FjJvOR',
        content: `
        Network Security and Wireless Networks

        **Encryption:**
        
        **Symmetric Encryption:**
        - Same key for encrypt/decrypt
        - Fast but key sharing problem
        - Examples: AES, DES, 3DES
        - Use cases: Bulk data

        **Asymmetric Encryption:**
        - Public key encrypt, private key decrypt
        - Solves key exchange problem
        - Slower but solves distribution
        - Examples: RSA, ECC
        - Use cases: Key exchange, digital signatures

        **Hash Functions:**
        - One-way function
        - Same input = same output
        - Different inputs ≠ same output (mostly)
        - Examples: MD5, SHA-256, SHA-3
        - Use cases: Passwords, integrity check

        **Digital Signatures:**
        - Sign with private key
        - Verify with public key
        - Ensures authentication and non-repudiation
        - Like handwritten signature for digital

        **IPsec (IP Security):**
        - Secure IP communication
        - Two modes: Transport (payload only), Tunnel (whole packet)
        - AH (Authentication Header)
        - ESP (Encapsulating Security Payload)
        - Or both

        **TLS/SSL (Transport Layer Security):**
        - Secure communication over internet
        - Uses certificates
        - Encryption, authentication, integrity
        - Handshake then data transfer
        - Version: SSL 3.0, TLS 1.0-1.3

        **Wireless Networks:**
        
        **WiFi (802.11):**
        - Wireless LAN
        - Standards: 802.11a/b/g/n/ac/ax
        - Frequencies: 2.4 GHz, 5 GHz
        - Range: ~100 meters
        - Security: WEP (broken), WPA, WPA2, WPA3

        **WiFi Security:**
        - WEP: 64/128-bit (crackable in minutes)
        - WPA: 128-bit (personal/enterprise)
        - WPA2: 256-bit (current standard)
        - WPA3: Latest, resistant to brute-force
        - Authentication: PSK vs 802.1X (enterprise)

        **Bluetooth:**
        - Short range (10-100 meters)
        - Low power
        - 2.4 GHz band
        - Versions: 1.0 to 5.3
        - Use cases: Phones, wearables, IoT

        **Mobile Networks:**
        - 2G (GSM): Voice
        - 3G (UMTS): Data + voice
        - 4G (LTE): High-speed data
        - 5G: Ultra-fast, low latency
        `
      }
    ]
  },

  {
    _id: 'course-oop-001',
    title: 'Object-Oriented Programming (OOP)',
    description: 'Master OOP principles, design patterns, and SOLID principles.',
    level: 'Intermediate',
    duration: '32 hours',
    instructor: 'Prof. OOPMaster',
    category: 'Programming',
    modules: [
      {
        _id: 'oop-mod-1',
        title: 'OOP Fundamentals: Classes and Objects',
        description: 'Introduction to classes, objects, and instance variables',
        duration: 6,
        videoUrl: 'https://youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&si=f0MmWwefnX5PPIBJ',
        content: `
        Object-Oriented Programming Fundamentals

        **What is OOP?**
        - Programming paradigm based on objects
        - Objects: Instances of classes
        - Classes: Blueprint for objects
        - Organizes code into reusable components

        **Core Concepts:**

        **Classes:**
        - Template for objects
        - Define properties (attributes)
        - Define behaviors (methods)
        - Access modifiers: public, private, protected, package-private

        **Objects:**
        - Instance of a class
        - Each has its own state (attribute values)
        - Can perform actions (call methods)
        - Allocated in memory

        **Attributes/Properties:**
        - Variables inside a class
        - Represent object state
        - Can have default values
        - Access modifiers control visibility

        **Methods:**
        - Functions inside a class
        - Represent object behavior
        - Can access attributes
        - Can accept parameters and return values
        - Static methods: Belong to class, not instance

        **Constructors:**
        - Special method called when creating object
        - Initialize object state
        - Can be overloaded with different parameters
        - No return type

        **Access Modifiers:**
        - public: Accessible everywhere
        - private: Only within class
        - protected: Within class and subclasses
        - package-private/default: Within package
        - Important for encapsulation

        **this Keyword:**
        - Refers to current object
        - Access instance attributes
        - Call other methods
        - Useful in constructors to distinguish variables

        **static Keyword:**
        - Belongs to class, not instance
        - Shared by all instances
        - Access via ClassName.staticMember
        - Use for constants, utility methods

        **final Keyword:**
        - Class: Can't subclass
        - Method: Can't override
        - Variable: Can't change (constant)
        `
      },
      {
        _id: 'oop-mod-2',
        title: 'Inheritance and Polymorphism',
        description: 'Code reuse through inheritance and flexible design with polymorphism',
        duration: 6,
        videoUrl: 'https://youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&si=f0MmWwefnX5PPIBJ',
        content: `
        Inheritance and Polymorphism

        **Inheritance:**
        - Acquire properties and methods from parent class
        - Extends code reusability
        - Forms hierarchy: Parent (superclass) → Child (subclass)
        - Single inheritance: One parent class (Java)
        - Multiple inheritance: Multiple parents (C++, problematic)

        **super Keyword:**
        - Refer to parent class
        - super.methodName(): Call parent's method
        - super(): Call parent's constructor
        - Important for overriding while using parent functionality

        **Method Overriding:**
        - Child class provides different implementation
        - Same signature as parent method
        - @Override annotation (good practice)
        - Runtime polymorphism
        - Return type can be subtype (covariance)

        **Polymorphism:**
        - Ability to exist in many forms
        - Same interface, different implementations
        - Write general code, work with specific objects
        - Loosely coupled design

        **Compile-time Polymorphism (Static):**
        
        **Method Overloading:**
        - Same method name, different parameters
        - Parameter type, number, or order differs
        - Returns at compile time which method to call
        - Improves readability

        **Operator Overloading:**
        - Redefine operator behavior for custom types
        - Example: String concatenation with +
        - Some languages allow, some don't (Java doesn't)

        **Runtime Polymorphism (Dynamic):**
        - Determined at runtime
        - Based on object's actual class
        - Method resolution based on actual type
        - Enables loose coupling

        **upcasting and downcasting:**
        - Upcasting: Child → Parent (safe)
        - Downcasting: Parent → Child (requires check)
        - Use instanceof before downcasting

        **Interface vs Abstract Class:**
        - Interface: Contract, multiple inheritance, all abstract (old)
        - Abstract Class: Partial template, single inheritance, mix abstract/concrete
        - Choose based on "is-a" vs "can-do" relationship

        **Liskov Substitution Principle:**
        - Substitutable for parent's type
        - Derived classes shouldn't break parent contracts
        - Enable polymorphism without surprises
        `
      },
      {
        _id: 'oop-mod-3',
        title: 'Encapsulation and Abstraction',
        description: 'Data hiding and creating clean interfaces',
        duration: 5,
        videoUrl: 'https://youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&si=f0MmWwefnX5PPIBJ',
        content: `
        Encapsulation and Abstraction

        **Encapsulation:**
        - Bundle data and methods together
        - Hide internal details (data hiding)
        - Control access through public methods
        - Protects data integrity
        - Enables internal changes without affecting users

        **Benefits of Encapsulation:**
        - Flexibility: Change implementation without changing interface
        - Maintainability: Internal changes don't break external code
        - Security: Validate data before setting
        - Control: Enforce business rules

        **Getters and Setters:**
        - Getter: Read-only access
        - Setter: Write access with validation
        - Allows computed properties
        - Can change implementation later
        - Convention: get/set prefix (Java)

        **Abstraction:**
        - Hide complexity, show only necessary details
        - Interface focuses on "what", not "how"
        - Simplifies usage from client perspective
        - Example: Car, driver doesn't need to know engine details

        **Abstract Classes:**
        - Can't instantiate directly
        - Can have concrete and abstract methods
        - Defines partial template
        - Subclasses must implement abstract methods
        - Use when "is-a" relationship

        **Interfaces:**
        - Complete abstraction (Java 8+ can have defaults)
        - Can't have state (only constants)
        - Multiple inheritance supported
        - Contract: Class agrees to implement methods
        - Use when "can-do" relationship

        **Default Methods in Interfaces:**
        - Java 8+ feature
        - Provides default implementation
        - Backward compatibility
        - Subclasses can override

        **Designing Good Abstractions:**
        - Single Responsibility: One job
        - Cohesion: Related methods together
        - Minimal Interface: Only necessary methods
        - Intuitive: Names match behavior
        - Document expectations and contracts

        **Information Hiding:**
        - Minimize what's exposed
        - Public API as small as possible
        - Change implementation without affecting users
        - Version compatibility easier
        `
      },
      {
        _id: 'oop-mod-4',
        title: 'Design Patterns',
        description: 'Common solutions to design problems',
        duration: 8,
        videoUrl: 'https://youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&si=f0MmWwefnX5PPIBJ',
        content: `
        Design Patterns

        **What are Design Patterns?**
        - Reusable solutions to common problems
        - Tested, proven approaches
        - Language-independent
        - Improve code quality and maintainability

        **Categories:**

        **Creational Patterns (Object creation):**

        **1. Singleton:**
        - Only one instance of class
        - Global access point
        - Thread-safe implementation important
        - Use: Database connections, logging, config

        **2. Factory:**
        - Create objects without specifying exact classes
        - Encapsulate creation logic
        - Subclasses decide which to create
        - Use: Complex object creation

        **3. Builder:**
        - Construct complex objects step-by-step
        - Fluent interface (method chaining)
        - Optional parameters handled elegantly
        - Use: Objects with many parameters

        **4. Prototype:**
        - Clone existing object
        - Avoid expensive creation
        - Deep copy important
        - Use: Heavy object creation

        **Structural Patterns (Object composition):**

        **1. Adapter:**
        - Make incompatible interfaces compatible
        - Wrapper around incompatible class
        - Use: Legacy code integration

        **2. Decorator:**
        - Add functionality to object dynamically
        - Alternative to subclassing
        - Wraps object with new behavior
        - Use: Runtime feature addition

        **3. Facade:**
        - Simplified interface to complex subsystem
        - Reduces coupling
        - Use: Complex libraries, frameworks

        **4. Proxy:**
        - Control access to another object
        - Lazy loading, authorization, logging
        - Similar to original but with control
        - Use: Resource management

        **Behavioral Patterns (Object collaboration):**

        **1. Strategy:**
        - Select algorithm at runtime
        - Interchangeable strategies
        - Avoids conditionals
        - Use: Multiple ways to do something

        **2. Observer:**
        - Notify multiple objects of state change
        - Loose coupling between observer and subject
        - Event-driven programming
        - Use: Event systems, MVC

        **3. Command:**
        - Encapsulate request as object
        - Queue, log, undo commands
        - Separate invoker from receiver
        - Use: Undo/redo, macro recording

        **4. State:**
        - Alter behavior when state changes
        - Encapsulate state-specific behavior
        - Avoid large switch statements
        - Use: Objects with multiple states
        `
      },
      {
        _id: 'oop-mod-5',
        title: 'SOLID Principles',
        description: 'Best practices for writing maintainable object-oriented code',
        duration: 7,
        videoUrl: 'https://youtube.com/playlist?list=PL9gnSGHSqcno1G3XjUbwzXHL8_EttOuKk&si=f0MmWwefnX5PPIBJ',
        content: `
        SOLID Principles

        **S - Single Responsibility Principle:**
        - Class should have single reason to change
        - Do one thing and do it well
        - Easier to test, modify, understand
        - Avoid "God classes" with many responsibilities
        - Example: UserValidator separate from UserRepository

        **O - Open/Closed Principle:**
        - Open for extension, closed for modification
        - Change behavior without modifying code
        - Use inheritance, composition, interfaces
        - Design for future without knowing future
        - Example: Strategy pattern implements this

        **L - Liskov Substitution Principle:**
        - Derived classes substitutable for base
        - Don't violate parent's contract
        - Preconditions can't be strengthened
        - Postconditions can't be weakened
        - Invariants must be preserved
        - Enables true polymorphism

        **I - Interface Segregation Principle:**
        - Don't force classes to depend on unused methods
        - Specific interfaces better than general
        - Clients depend on only what they use
        - Reduces coupling
        - Example: SortableList, SearchableList instead of List

        **D - Dependency Inversion Principle:**
        - Depend on abstractions, not concretions
        - High-level doesn't depend on low-level
        - Both depend on abstractions
        - Easier testing, swapping implementations
        - Use dependency injection

        **Benefits of SOLID:**
        - Maintainability: Easier to understand and modify
        - Flexibility: Easy to extend without breaking
        - Testability: Loose coupling makes mocking easy
        - Reusability: Well-designed components reusable
        - Scalability: Handles growth better

        **Anti-Patterns to Avoid:**
        - God Objects: Too much responsibility
        - Rigid Design: Can't change without breaking
        - Fragile Design: Small changes cause failures
        - Tight Coupling: Components depend on each other
        - Feature Envy: Using too many methods of other class

        **SOLID in Practice:**
        - Apply incrementally, don't over-engineer
        - Refactor when problems appear
        - Balance with simplicity
        - Team consistency and conventions
        - Reviews and pair programming help
        `
      }
    ]
  }
];

// Quiz/Exam questions for each course
const quizzesData = [
  // DSA Quizzes
  {
    courseId: 'course-dsa-001',
    title: 'DSA Complete Assessment',
    questions: [
      {
        id: 1,
        question: 'What is the time complexity of binary search?',
        options: ['O(n)', 'O(log n)', 'O(n log n)', 'O(n²)'],
        correctAnswer: 1,
        explanation: 'Binary search divides search space in half each time, giving O(log n)'
      },
      {
        id: 2,
        question: 'Which data structure uses LIFO principle?',
        options: ['Queue', 'Stack', 'Array', 'Linked List'],
        correctAnswer: 1,
        explanation: 'Stack (Last In First Out) is LIFO, Queue is FIFO'
      },
      {
        id: 3,
        question: 'What is the average case time complexity of QuickSort?',
        options: ['O(n)', 'O(n log n)', 'O(n²)', 'O(log n)'],
        correctAnswer: 1,
        explanation: 'QuickSort has average O(n log n) but worst case O(n²)'
      },
      {
        id: 4,
        question: 'In a binary search tree, what property must hold?',
        options: [
          'Left < Parent < Right',
          'Left > Parent > Right',
          'All elements equal',
          'Random order'
        ],
        correctAnswer: 0,
        explanation: 'BST property: Left child < Parent < Right child'
      },
      {
        id: 5,
        question: 'What is the space complexity of merge sort?',
        options: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
        correctAnswer: 2,
        explanation: 'Merge sort requires O(n) extra space for merging'
      },
      {
        id: 6,
        question: 'How many edges does a tree with n vertices have?',
        options: ['n', 'n-1', 'n+1', '2n'],
        correctAnswer: 1,
        explanation: 'A tree with n vertices has exactly n-1 edges'
      },
      {
        id: 7,
        question: 'Which algorithm finds shortest path in weighted graphs with negative edges?',
        options: ['Dijkstra', 'BFS', 'DFS', 'Bellman-Ford'],
        correctAnswer: 3,
        explanation: 'Bellman-Ford handles negative weights, Dijkstra does not'
      },
      {
        id: 8,
        question: 'What is the main idea behind dynamic programming?',
        options: [
          'Use random numbers',
          'Solve subproblems and reuse solutions',
          'Always use recursion',
          'Sort everything first'
        ],
        correctAnswer: 1,
        explanation: 'DP solves overlapping subproblems and stores results'
      }
    ]
  },

  // DBMS Quizzes
  {
    courseId: 'course-dbms-001',
    title: 'DBMS Complete Assessment',
    questions: [
      {
        id: 1,
        question: 'Which normal form eliminates partial dependencies?',
        options: ['1NF', '2NF', '3NF', 'BCNF'],
        correctAnswer: 1,
        explanation: '2NF removes partial dependencies on composite keys'
      },
      {
        id: 2,
        question: 'What is the primary purpose of indexing?',
        options: [
          'Reduce storage',
          'Speed up data retrieval',
          'Improve data quality',
          'Enable encryption'
        ],
        correctAnswer: 1,
        explanation: 'Indexes speed up SELECT queries by reducing search time'
      },
      {
        id: 3,
        question: 'Which of the following is NOT part of ACID properties?',
        options: ['Atomicity', 'Concurrency', 'Consistency', 'Durability'],
        correctAnswer: 1,
        explanation: 'ACID = Atomicity, Consistency, Isolation, Durability (not Concurrency)'
      },
      {
        id: 4,
        question: 'What type of join returns matching rows from both tables?',
        options: ['LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'FULL OUTER JOIN'],
        correctAnswer: 2,
        explanation: 'INNER JOIN returns only matching rows from both tables'
      },
      {
        id: 5,
        question: 'Which SELECT clause function counts rows?',
        options: ['SUM()', 'AVG()', 'COUNT()', 'TOTAL()'],
        correctAnswer: 2,
        explanation: 'COUNT() returns number of rows'
      },
      {
        id: 6,
        question: 'What is a foreign key?',
        options: [
          'A key from another country',
          'An invalid primary key',
          'A reference to primary key in another table',
          'A key used for encryption'
        ],
        correctAnswer: 2,
        explanation: 'Foreign key references primary key in related table'
      },
      {
        id: 7,
        question: 'What is the most common type of index?',
        options: ['Hash', 'Bitmap', 'B-Tree', 'R-Tree'],
        correctAnswer: 2,
        explanation: 'B-Tree indexes are most common for general purpose'
      },
      {
        id: 8,
        question: 'Which isolation level prevents dirty reads?',
        options: [
          'Read Uncommitted',
          'Read Committed',
          'Repeatable Read',
          'Serializable'
        ],
        correctAnswer: 1,
        explanation: 'Read Committed prevents dirty reads (lowest that does)'
      }
    ]
  },

  // OS Quizzes
  {
    courseId: 'course-os-001',
    title: 'Operating Systems Complete Assessment',
    questions: [
      {
        id: 1,
        question: 'What is the context of a process in terms of CPU?',
        options: [
          'The program stored on disk',
          'Register values and program counter state',
          'Memory allocated for variables',
          'The process schedule'
        ],
        correctAnswer: 1,
        explanation: 'Process context includes registers, PC, and CPU state needed to resume'
      },
      {
        id: 2,
        question: 'Which scheduling algorithm suffers from "convoy effect"?',
        options: ['SJF', 'Round Robin', 'FCFS', 'Priority Scheduling'],
        correctAnswer: 2,
        explanation: 'FCFS causes convoy effect when long job blocks short jobs'
      },
      {
        id: 3,
        question: 'What is a page fault?',
        options: [
          'An error in the page structure',
          'When requested page not in memory',
          'When memory is full',
          'A page protection violation'
        ],
        correctAnswer: 1,
        explanation: 'Page fault occurs when needed page must be loaded from disk'
      },
      {
        id: 4,
        question: 'Which of these is NOT a necessary condition for deadlock?',
        options: [
          'Mutual Exclusion',
          'Hold and Wait',
          'No Preemption',
          'Priority Scheduling'
        ],
        correctAnswer: 3,
        explanation: 'Deadlock needs: Mutual exclusion, Hold and Wait, No Preemption, Circular Wait'
      },
      {
        id: 5,
        question: 'What does thrashing mean in virtual memory?',
        options: [
          'Deleting files',
          'Excessive page faults and swapping',
          'Corrupting data',
          'Breaking the disk'
        ],
        correctAnswer: 1,
        explanation: 'Thrashing is excessive page faults causing system to waste time paging'
      },
      {
        id: 6,
        question: 'Which memory allocation method uses base and limit registers?',
        options: [
          'Paging',
          'Segmentation',
          'Contiguous allocation',
          'Virtual memory'
        ],
        correctAnswer: 2,
        explanation: 'Contiguous allocation uses base (starting address) and limit (size)'
      },
      {
        id: 7,
        question: 'What is the maximum distance in scheduling latency called?',
        options: ['Turnaround time', 'Response time', 'Wait time', 'Period'],
        correctAnswer: 0,
        explanation: 'Turnaround time is total time from submission to completion'
      },
      {
        id: 8,
        question: 'How many process states are there in basic model?',
        options: ['2', '3', '5', '7'],
        correctAnswer: 2,
        explanation: 'Basic states: New, Ready, Running, Waiting, Terminated'
      }
    ]
  },

  // CN Quizzes
  {
    courseId: 'course-cn-001',
    title: 'Computer Networks Complete Assessment',
    questions: [
      {
        id: 1,
        question: 'At which OSI layer does IP work?',
        options: [
          'Layer 2 (Data Link)',
          'Layer 3 (Network)',
          'Layer 4 (Transport)',
          'Layer 7 (Application)'
        ],
        correctAnswer: 1,
        explanation: 'IP is Layer 3 (Network layer) protocol'
      },
      {
        id: 2,
        question: 'How many bits is an IPv4 address?',
        options: ['16 bits', '32 bits', '64 bits', '128 bits'],
        correctAnswer: 1,
        explanation: 'IPv4 is 32-bit address (4 octets)'
      },
      {
        id: 3,
        question: 'What does TCP provide that UDP does not?',
        options: [
          'Speed',
          'Low latency',
          'Reliability and ordered delivery',
          'Support for datagrams'
        ],
        correctAnswer: 2,
        explanation: 'TCP ensures reliable, in-order delivery; UDP is connectionless'
      },
      {
        id: 4,
        question: 'What is the full form of DNS?',
        options: [
          'Data Name System',
          'Domain Name System',
          'Direct Network Service',
          'Dynamic Network System'
        ],
        correctAnswer: 1,
        explanation: 'DNS = Domain Name System (translates names to IPs)'
      },
      {
        id: 5,
        question: 'Which HTTP method is idempotent?',
        options: ['POST', 'PUT', 'DELETE', 'All of above'],
        correctAnswer: 3,
        explanation: 'PUT, DELETE, GET are idempotent (POST is not)'
      },
      {
        id: 6,
        question: 'What is the purpose of ARP?',
        options: [
          'Convert IP to MAC address',
          'Convert MAC to IP',
          'Encrypt data',
          'Route packets'
        ],
        correctAnswer: 0,
        explanation: 'ARP (Address Resolution Protocol) maps IP to MAC addresses'
      },
      {
        id: 7,
        question: 'Which is the most secure WiFi security standard?',
        options: ['WEP', 'WPA', 'WPA2', 'WPA3'],
        correctAnswer: 3,
        explanation: 'WPA3 is the latest and most secure WiFi standard'
      },
      {
        id: 8,
        question: 'What is the range of TCP/UDP port numbers?',
        options: ['0-256', '0-1023', '0-65535', '1-100000'],
        correctAnswer: 2,
        explanation: 'Port range is 0-65535 (16-bit unsigned integer)'
      }
    ]
  },

  // OOP Quizzes
  {
    courseId: 'course-oop-001',
    title: 'OOP Complete Assessment',
    questions: [
      {
        id: 1,
        question: 'What is encapsulation in OOP?',
        options: [
          'Using envelopes for data',
          'Bundling data and methods with access control',
          'Making all data public',
          'Using many classes'
        ],
        correctAnswer: 1,
        explanation: 'Encapsulation = bundling data + methods with controlled access'
      },
      {
        id: 2,
        question: 'What is method overriding?',
        options: [
          'Using same method name in different classes',
          'Child class providing different implementation of parent method',
          'Calling a method multiple times',
          'Renaming a method'
        ],
        correctAnswer: 1,
        explanation: 'Overriding = child provides new implementation while keeping same signature'
      },
      {
        id: 3,
        question: 'Which principle states "Depend on abstractions, not concretions"?',
        options: [
          'Single Responsibility',
          'Open/Closed',
          'Liskov Substitution',
          'Dependency Inversion'
        ],
        correctAnswer: 3,
        explanation: 'Dependency Inversion Principle (DIP) advocates interface-based design'
      },
      {
        id: 4,
        question: 'What is the purpose of a constructor?',
        options: [
          'Destroy objects',
          'Initialize a newly created object',
          'Call parent method',
          'Declare variables'
        ],
        correctAnswer: 1,
        explanation: 'Constructor initializes object state when instance is created'
      },
      {
        id: 5,
        question: 'Which design pattern creates objects without specifying exact classes?',
        options: ['Singleton', 'Factory', 'Adapter', 'Observer'],
        correctAnswer: 1,
        explanation: 'Factory pattern abstracts object creation'
      },
      {
        id: 6,
        question: 'What does polymorphism mean?',
        options: [
          'Having multiple countries',
          'Ability to exist in many forms',
          'Using many variables',
          'Complex inheritance'
        ],
        correctAnswer: 1,
        explanation: 'Polymorphism = ability to take many forms (interface, multiple implementations)'
      },
      {
        id: 7,
        question: 'What is an abstract class?',
        options: [
          'A class with abstract concepts',
          'A class that can\'t be instantiated directly',
          'A class without inheritance',
          'A very complex class'
        ],
        correctAnswer: 1,
        explanation: 'Abstract class can\'t be instantiated; provides partial template for subclasses'
      },
      {
        id: 8,
        question: 'What does the "this" keyword refer to?',
        options: [
          'The class definition',
          'The parent class',
          'The current object instance',
          'A temporary variable'
        ],
        correctAnswer: 2,
        explanation: '"this" refers to the current object instance inside a class'
      }
    ]
  }
];

module.exports = { coursesData, quizzesData };
