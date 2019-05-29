export class Utils {
    /**
   * Generate a unique GUID
   *
   * @returns {string}
   */
    public static generateGUID(): number {
        return Math.floor((1 + Math.random()) * 10000);
    }
}