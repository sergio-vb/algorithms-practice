function isPalindrome(head){
    let x = head;
    let length = 0;
    while (x != null){
        length++;
        x = x.next;
    }

    const middle = length / 2;
    const odd = length % 2;
    let pos = 0;
    x = head;
    const stack = new Stack();
    while (x != null){
        if (pos < middle){
            stack.push(x.value);
        }else if(pos >= (middle + odd)){
            if (x.value != stack.pop()){
                return false;
            }
        }
        x = x.next;
    }
    return true;
}