// this is what a linkedlist node looks like:
class linkedlist {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// Question: ReversedLinkedList : Given the pointer to the head node of a linked list, change the next pointers of the nodes so that their order is reversed. The head pointer given may be null meaning that the initial list is empty.
const reversedLinkedList = (head) => {
    let prev = null
    let current = head

    while (current) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }

    return prev
}