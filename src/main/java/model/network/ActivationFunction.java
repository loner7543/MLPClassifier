package model.network;

/**
 * Created by User on 012 12.02.17.
 */
public class ActivationFunction {

    public static double stepFunction(double value,double p){
        if (value>p){
            return 1;
        }
        else return 0;
    }

    public static double getSigmoidValue(double x){
        return 1/1+Math.exp(x);
    }
}
