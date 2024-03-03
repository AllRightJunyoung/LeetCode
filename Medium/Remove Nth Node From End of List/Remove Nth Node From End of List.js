/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let newNode=new ListNode()
    newNode.next=head


    function dfs(head){
        if(head.next===null){
            return 1
        }
        let cnt=dfs(head.next)
        if(cnt===n){
            let dummy=head.next.next
            head.next=dummy
        }

        return cnt+1
    }
    
    dfs(newNode)
    let answer=newNode.next
    return answer
};