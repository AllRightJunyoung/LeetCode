/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let fast=head.next
    let slow=head

    if(head===null || head.next===null) return head

    while(fast!==null){
        fast=fast.next
        if(fast!==null) fast=fast.next


        slow=slow.next

    }    
    return slow

};