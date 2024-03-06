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

// 끝에서부터 n번째 노드를 없앤다
// 새로운 더미노드를 헤드로 지정후 탐색
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