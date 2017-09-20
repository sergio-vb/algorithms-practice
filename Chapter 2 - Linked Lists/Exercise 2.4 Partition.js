var arrayOfNotes = [
    {
        value: 3,
        next: null
    },
    {
        value: 1,
        next: null
    },
    {
        value: 2,
        next: null
    },
    {
        value: 5,
        next: null
    },
    {
        value: 8,
        next: null
    },
    {
        value: 4,
        next: null
    },
    {
        value: 7,
        next: null
    },
    {
        value: 2,
        next: null
    },
];
for (i = 0; i < arrayOfNotes.length - 1; i++){
    arrayOfNotes[i].next = arrayOfNotes[i++];    
}

/* Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x. The partition element x can appear anywhere in the right partition; it does not need to appear between the left and right partitions.
Example:
Input: 3 - 5 - 8 - 5 - 10 - 2 - 1 / Partition = 5
Output: 3 - 1 - 2 - 10 - 5 - 5 - 8
 */

/*Brainstorm

3 - 5 - 8 - 5 - 10 - 2 - 1

3 - 1 - 2 - 5 - 8 - 4 - 7 - 2

One way of approaching the problem is that after the first ocurrence of a value greater than or equal to x, all elements less than x should be removed and moved to the point before this first ocurrence.
*//*
function createPartition(head, x){
    secondPartitionStarted = false;

    n = head;

    if (n.value >= x){
        secondPartitionStarted = true;
        limitOfFirstPartition = null;
    }

    while (n.next != null){
        if ( (n.next.value >= x) && !secondPartitionStarted){
            limitOfFirstPartition = n;
            secondPartitionStarted = true;
        }

        if ( secondPartitionStarted && n.next.value < x){
            temp = n.next.next;

            if (limitOfFirstPartition){
                n.next.next = limitOfFirstPartition.next;
                limitOfFirstPartition.next = n.next;
                limitOfFirstPartition = limitOfFirstPartition.next;
            }else{
                n.next.next = n;
                limitOfFirstPartition = n.next;
            }

            n.next = temp;
        }

        n = n.next;
    }
}

createPartition(arrayOfNotes[0], 5); */
console.log("Array of Nodes:", arrayOfNotes);