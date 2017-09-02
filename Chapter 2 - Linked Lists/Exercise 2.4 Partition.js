/* Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x. The partition element x can appear anywhere in the right partition; it does not need to appear between the left and right partitions.
Example:
Input: 3 - 5 - 8 - 5 - 10 - 2 - 1 / Partition = 5
Output: 3 - 1 - 2 - 10 - 5 - 5 - 8
 */

/*Brainstorm

3 - 5 - 8 - 5 - 10 - 2 - 1

3 - 1 - 2 - 5 - 8 - 4 - 7 - 2

One way of approaching the problem is that after the first ocurrence of a value greater than or equal to x, all elements less than x should be removed and moved to the point before this first ocurrence.
*/
secondPartitionStarted = false;

For each element n in list:
    if (n.next >= x){
        limitOfFirstPartition = n
        secondPartitionStarted = true;
    }

    if ( secondPartitionStarted && n.next < x){
        temp = n.next.next;
        n.next.next = limitOfFirstPartition.next;
        limitOfFirstPartition.next = n.next;
        n.next = temp;
    }

    n = n.next;
