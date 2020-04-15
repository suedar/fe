class Solution {
    private:
        const string letterMap[10] = {
                " ",    //0
                "",     //1
                "abc",  //2
                "def",  //3
                "ghi",  //4
                "jkl",  //5
                "mno",  //6
                "pqrs", //7
                "tuv",  //8
                "wxyz"  //9
        };

        vector<string> res;

        // index表示从该数字开始在字串，存于s中
        // s中保存了此时从digits[0...index-1]翻译得到的一个字母字符串
        // 寻找和digits[index]匹配的字母, 获得digits[0...index]翻译得到的解
        void findCombination(const string &digits, int index, const string &s){
            if (index == digits.size()){
                res.push_back(s);
                return;
            }

            // 获得数字
            char c = digits[index];
            // 对应的字母串
            string letters = letterMap[c - '0'];

            for (int i = 0; i < letters.size(); i++){
                findCombination(digits, index + 1, s + letters[i]);
            }
            return ;
        }

    public:
        vector<string> letterCombinations(string digits) {
            res.clear();
            if (digits.size() == 0){
                return res;
            }

            findCombination(digits, 0, "");
            return res;
        }
};