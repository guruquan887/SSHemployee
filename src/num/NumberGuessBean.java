/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 * Originally written by Jason Hunter, http://www.servlets.com.
 */

package num;

import java.io.Serializable;
import java.util.Random;

public class NumberGuessBean implements Serializable {

    private static final long serialVersionUID = 1L;

    private int answer;    //答案，奖项
    private String hint;   //提示
    private int numGuesses;//第几次摸奖
    private boolean success;//是否猜中
    private Random random = new Random();

    public NumberGuessBean() {
        reset();
    }

    public int getAnswer() {
        return answer;
    }

    public void setAnswer(int answer) {
        this.answer = answer;
    }

    public String getHint() {
        return "" + hint;
    }

    public void setHint(String hint) {
        this.hint = hint;
    }

    public int getNumGuesses() {
	    return numGuesses;
	}

	public void setNumGuesses(int numGuesses) {
        this.numGuesses = numGuesses;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }
    public void setNum(String arg) {
        numGuesses++;

        int g;
        try {
            g = Integer.parseInt(arg);
        } catch (NumberFormatException e) {
            g = -1;
        }

        if (g == answer) {
            success = true;
        }else if (g == -1) {
            hint = "a number next time";
        } else if (g < answer) {
            hint = "higher";
        } else if (g > answer) {
            hint = "lower";
        }
    }

    public void reset() {
        answer = Math.abs(random.nextInt() % 100) + 1;
        //success = false;
        setSuccess(false);
        numGuesses = 0;
    }
    
	public String main() throws Exception {
		return "main";
	}
}
