/* */ 
"format cjs";
import { isPresent, isBlank } from 'angular2/src/facade/lang';
import { BaseWrappedException } from 'angular2/src/facade/base_wrapped_exception';
import { isListLikeIterable } from 'angular2/src/facade/collection';
class _ArrayLogger {
    constructor() {
        this.res = [];
    }
    log(s) { this.res.push(s); }
    logError(s) { this.res.push(s); }
    logGroup(s) { this.res.push(s); }
    logGroupEnd() { }
    ;
}
/**
 * Provides a hook for centralized exception handling.
 *
 * The default implementation of `ExceptionHandler` prints error messages to the `Console`. To
 * intercept error handling,
 * write a custom exception handler that replaces this default as appropriate for your app.
 *
 * ### Example
 *
 * ```javascript
 *
 * class MyExceptionHandler implements ExceptionHandler {
 *   call(error, stackTrace = null, reason = null) {
 *     // do something with the exception
 *   }
 * }
 *
 * bootstrap(MyApp, [provide(ExceptionHandler, {useClass: MyExceptionHandler})])
 *
 * ```
 */
export class ExceptionHandler {
    constructor(_logger, _rethrowException = true) {
        this._logger = _logger;
        this._rethrowException = _rethrowException;
    }
    static exceptionToString(exception, stackTrace = null, reason = null) {
        var l = new _ArrayLogger();
        var e = new ExceptionHandler(l, false);
        e.call(exception, stackTrace, reason);
        return l.res.join("\n");
    }
    call(exception, stackTrace = null, reason = null) {
        var originalException = this._findOriginalException(exception);
        var originalStack = this._findOriginalStack(exception);
        var context = this._findContext(exception);
        this._logger.logGroup(`EXCEPTION: ${this._extractMessage(exception)}`);
        if (isPresent(stackTrace) && isBlank(originalStack)) {
            this._logger.logError("STACKTRACE:");
            this._logger.logError(this._longStackTrace(stackTrace));
        }
        if (isPresent(reason)) {
            this._logger.logError(`REASON: ${reason}`);
        }
        if (isPresent(originalException)) {
            this._logger.logError(`ORIGINAL EXCEPTION: ${this._extractMessage(originalException)}`);
        }
        if (isPresent(originalStack)) {
            this._logger.logError("ORIGINAL STACKTRACE:");
            this._logger.logError(this._longStackTrace(originalStack));
        }
        if (isPresent(context)) {
            this._logger.logError("ERROR CONTEXT:");
            this._logger.logError(context);
        }
        this._logger.logGroupEnd();
        // We rethrow exceptions, so operations like 'bootstrap' will result in an error
        // when an exception happens. If we do not rethrow, bootstrap will always succeed.
        if (this._rethrowException)
            throw exception;
    }
    /** @internal */
    _extractMessage(exception) {
        return exception instanceof BaseWrappedException ? exception.wrapperMessage :
            exception.toString();
    }
    /** @internal */
    _longStackTrace(stackTrace) {
        return isListLikeIterable(stackTrace) ? stackTrace.join("\n\n-----async gap-----\n") :
            stackTrace.toString();
    }
    /** @internal */
    _findContext(exception) {
        try {
            if (!(exception instanceof BaseWrappedException))
                return null;
            return isPresent(exception.context) ? exception.context :
                this._findContext(exception.originalException);
        }
        catch (e) {
            // exception.context can throw an exception. if it happens, we ignore the context.
            return null;
        }
    }
    /** @internal */
    _findOriginalException(exception) {
        if (!(exception instanceof BaseWrappedException))
            return null;
        var e = exception.originalException;
        while (e instanceof BaseWrappedException && isPresent(e.originalException)) {
            e = e.originalException;
        }
        return e;
    }
    /** @internal */
    _findOriginalStack(exception) {
        if (!(exception instanceof BaseWrappedException))
            return null;
        var e = exception;
        var stack = exception.originalStack;
        while (e instanceof BaseWrappedException && isPresent(e.originalException)) {
            e = e.originalException;
            if (e instanceof BaseWrappedException && isPresent(e.originalException)) {
                stack = e.originalStack;
            }
        }
        return stack;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uX2hhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhbmd1bGFyMi9zcmMvZmFjYWRlL2V4Y2VwdGlvbl9oYW5kbGVyLnRzIl0sIm5hbWVzIjpbIl9BcnJheUxvZ2dlciIsIl9BcnJheUxvZ2dlci5jb25zdHJ1Y3RvciIsIl9BcnJheUxvZ2dlci5sb2ciLCJfQXJyYXlMb2dnZXIubG9nRXJyb3IiLCJfQXJyYXlMb2dnZXIubG9nR3JvdXAiLCJfQXJyYXlMb2dnZXIubG9nR3JvdXBFbmQiLCJFeGNlcHRpb25IYW5kbGVyIiwiRXhjZXB0aW9uSGFuZGxlci5jb25zdHJ1Y3RvciIsIkV4Y2VwdGlvbkhhbmRsZXIuZXhjZXB0aW9uVG9TdHJpbmciLCJFeGNlcHRpb25IYW5kbGVyLmNhbGwiLCJFeGNlcHRpb25IYW5kbGVyLl9leHRyYWN0TWVzc2FnZSIsIkV4Y2VwdGlvbkhhbmRsZXIuX2xvbmdTdGFja1RyYWNlIiwiRXhjZXB0aW9uSGFuZGxlci5fZmluZENvbnRleHQiLCJFeGNlcHRpb25IYW5kbGVyLl9maW5kT3JpZ2luYWxFeGNlcHRpb24iLCJFeGNlcHRpb25IYW5kbGVyLl9maW5kT3JpZ2luYWxTdGFjayJdLCJtYXBwaW5ncyI6Ik9BQU8sRUFBQyxTQUFTLEVBQUUsT0FBTyxFQUFRLE1BQU0sMEJBQTBCO09BQzNELEVBQUMsb0JBQW9CLEVBQUMsTUFBTSw0Q0FBNEM7T0FDeEUsRUFBYyxrQkFBa0IsRUFBQyxNQUFNLGdDQUFnQztBQUU5RTtJQUFBQTtRQUNFQyxRQUFHQSxHQUFVQSxFQUFFQSxDQUFDQTtJQUtsQkEsQ0FBQ0E7SUFKQ0QsR0FBR0EsQ0FBQ0EsQ0FBTUEsSUFBVUUsSUFBSUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7SUFDdkNGLFFBQVFBLENBQUNBLENBQU1BLElBQVVHLElBQUlBLENBQUNBLEdBQUdBLENBQUNBLElBQUlBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO0lBQzVDSCxRQUFRQSxDQUFDQSxDQUFNQSxJQUFVSSxJQUFJQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtJQUM1Q0osV0FBV0EsS0FBR0ssQ0FBQ0E7O0FBQ2pCTCxDQUFDQTtBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUNIO0lBQ0VNLFlBQW9CQSxPQUFZQSxFQUFVQSxpQkFBaUJBLEdBQVlBLElBQUlBO1FBQXZEQyxZQUFPQSxHQUFQQSxPQUFPQSxDQUFLQTtRQUFVQSxzQkFBaUJBLEdBQWpCQSxpQkFBaUJBLENBQWdCQTtJQUFHQSxDQUFDQTtJQUUvRUQsT0FBT0EsaUJBQWlCQSxDQUFDQSxTQUFjQSxFQUFFQSxVQUFVQSxHQUFRQSxJQUFJQSxFQUFFQSxNQUFNQSxHQUFXQSxJQUFJQTtRQUNwRkUsSUFBSUEsQ0FBQ0EsR0FBR0EsSUFBSUEsWUFBWUEsRUFBRUEsQ0FBQ0E7UUFDM0JBLElBQUlBLENBQUNBLEdBQUdBLElBQUlBLGdCQUFnQkEsQ0FBQ0EsQ0FBQ0EsRUFBRUEsS0FBS0EsQ0FBQ0EsQ0FBQ0E7UUFDdkNBLENBQUNBLENBQUNBLElBQUlBLENBQUNBLFNBQVNBLEVBQUVBLFVBQVVBLEVBQUVBLE1BQU1BLENBQUNBLENBQUNBO1FBQ3RDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxHQUFHQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtJQUMxQkEsQ0FBQ0E7SUFFREYsSUFBSUEsQ0FBQ0EsU0FBY0EsRUFBRUEsVUFBVUEsR0FBUUEsSUFBSUEsRUFBRUEsTUFBTUEsR0FBV0EsSUFBSUE7UUFDaEVHLElBQUlBLGlCQUFpQkEsR0FBR0EsSUFBSUEsQ0FBQ0Esc0JBQXNCQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUMvREEsSUFBSUEsYUFBYUEsR0FBR0EsSUFBSUEsQ0FBQ0Esa0JBQWtCQSxDQUFDQSxTQUFTQSxDQUFDQSxDQUFDQTtRQUN2REEsSUFBSUEsT0FBT0EsR0FBR0EsSUFBSUEsQ0FBQ0EsWUFBWUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsQ0FBQ0E7UUFFM0NBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLGNBQWNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLFNBQVNBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBO1FBRXZFQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxVQUFVQSxDQUFDQSxJQUFJQSxPQUFPQSxDQUFDQSxhQUFhQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNwREEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0E7WUFDckNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLElBQUlBLENBQUNBLGVBQWVBLENBQUNBLFVBQVVBLENBQUNBLENBQUNBLENBQUNBO1FBQzFEQSxDQUFDQTtRQUVEQSxFQUFFQSxDQUFDQSxDQUFDQSxTQUFTQSxDQUFDQSxNQUFNQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN0QkEsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsUUFBUUEsQ0FBQ0EsV0FBV0EsTUFBTUEsRUFBRUEsQ0FBQ0EsQ0FBQ0E7UUFDN0NBLENBQUNBO1FBRURBLEVBQUVBLENBQUNBLENBQUNBLFNBQVNBLENBQUNBLGlCQUFpQkEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDakNBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLHVCQUF1QkEsSUFBSUEsQ0FBQ0EsZUFBZUEsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxFQUFFQSxDQUFDQSxDQUFDQTtRQUMxRkEsQ0FBQ0E7UUFFREEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsYUFBYUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDN0JBLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLFFBQVFBLENBQUNBLHNCQUFzQkEsQ0FBQ0EsQ0FBQ0E7WUFD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S0FBS0EsR0FBR0EsU0FBU0EsQ0FBQ0EsYUFBYUEsQ0FBQ0E7UUFDcENBLE9BQU9BLENBQUNBLFlBQVlBLG9CQUFvQkEsSUFBSUEsU0FBU0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQSxFQUFFQSxDQUFDQTtZQUMzRUEsQ0FBQ0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsaUJBQWlCQSxDQUFDQTtZQUN4QkEsRUFBRUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsWUFBWUEsb0JBQW9CQSxJQUFJQSxTQUFTQSxDQUFDQSxDQUFDQSxDQUFDQSxpQkFBaUJBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO2dCQUN4RUEsS0FBS0EsR0FBR0EsQ0FBQ0EsQ0FBQ0EsYUFBYUEsQ0FBQ0E7WUFDMUJBLENBQUNBO1FBQ0hBLENBQUNBO1FBRURBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO0lBQ2ZBLENBQUNBO0FBQ0hSLENBQUNBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2lzUHJlc2VudCwgaXNCbGFuaywgcHJpbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge0Jhc2VXcmFwcGVkRXhjZXB0aW9ufSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2Jhc2Vfd3JhcHBlZF9leGNlcHRpb24nO1xuaW1wb3J0IHtMaXN0V3JhcHBlciwgaXNMaXN0TGlrZUl0ZXJhYmxlfSBmcm9tICdhbmd1bGFyMi9zcmMvZmFjYWRlL2NvbGxlY3Rpb24nO1xuXG5jbGFzcyBfQXJyYXlMb2dnZXIge1xuICByZXM6IGFueVtdID0gW107XG4gIGxvZyhzOiBhbnkpOiB2b2lkIHsgdGhpcy5yZXMucHVzaChzKTsgfVxuICBsb2dFcnJvcihzOiBhbnkpOiB2b2lkIHsgdGhpcy5yZXMucHVzaChzKTsgfVxuICBsb2dHcm91cChzOiBhbnkpOiB2b2lkIHsgdGhpcy5yZXMucHVzaChzKTsgfVxuICBsb2dHcm91cEVuZCgpe307XG59XG5cbi8qKlxuICogUHJvdmlkZXMgYSBob29rIGZvciBjZW50cmFsaXplZCBleGNlcHRpb24gaGFuZGxpbmcuXG4gKlxuICogVGhlIGRlZmF1bHQgaW1wbGVtZW50YXRpb24gb2YgYEV4Y2VwdGlvbkhhbmRsZXJgIHByaW50cyBlcnJvciBtZXNzYWdlcyB0byB0aGUgYENvbnNvbGVgLiBUb1xuICogaW50ZXJjZXB0IGVycm9yIGhhbmRsaW5nLFxuICogd3JpdGUgYSBjdXN0b20gZXhjZXB0aW9uIGhhbmRsZXIgdGhhdCByZXBsYWNlcyB0aGlzIGRlZmF1bHQgYXMgYXBwcm9wcmlhdGUgZm9yIHlvdXIgYXBwLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKlxuICogYGBgamF2YXNjcmlwdFxuICpcbiAqIGNsYXNzIE15RXhjZXB0aW9uSGFuZGxlciBpbXBsZW1lbnRzIEV4Y2VwdGlvbkhhbmRsZXIge1xuICogICBjYWxsKGVycm9yLCBzdGFja1RyYWNlID0gbnVsbCwgcmVhc29uID0gbnVsbCkge1xuICogICAgIC8vIGRvIHNvbWV0aGluZyB3aXRoIHRoZSBleGNlcHRpb25cbiAqICAgfVxuICogfVxuICpcbiAqIGJvb3RzdHJhcChNeUFwcCwgW3Byb3ZpZGUoRXhjZXB0aW9uSGFuZGxlciwge3VzZUNsYXNzOiBNeUV4Y2VwdGlvbkhhbmRsZXJ9KV0pXG4gKlxuICogYGBgXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGNlcHRpb25IYW5kbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbG9nZ2VyOiBhbnksIHByaXZhdGUgX3JldGhyb3dFeGNlcHRpb246IGJvb2xlYW4gPSB0cnVlKSB7fVxuXG4gIHN0YXRpYyBleGNlcHRpb25Ub1N0cmluZyhleGNlcHRpb246IGFueSwgc3RhY2tUcmFjZTogYW55ID0gbnVsbCwgcmVhc29uOiBzdHJpbmcgPSBudWxsKTogc3RyaW5nIHtcbiAgICB2YXIgbCA9IG5ldyBfQXJyYXlMb2dnZXIoKTtcbiAgICB2YXIgZSA9IG5ldyBFeGNlcHRpb25IYW5kbGVyKGwsIGZhbHNlKTtcbiAgICBlLmNhbGwoZXhjZXB0aW9uLCBzdGFja1RyYWNlLCByZWFzb24pO1xuICAgIHJldHVybiBsLnJlcy5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgY2FsbChleGNlcHRpb246IGFueSwgc3RhY2tUcmFjZTogYW55ID0gbnVsbCwgcmVhc29uOiBzdHJpbmcgPSBudWxsKTogdm9pZCB7XG4gICAgdmFyIG9yaWdpbmFsRXhjZXB0aW9uID0gdGhpcy5fZmluZE9yaWdpbmFsRXhjZXB0aW9uKGV4Y2VwdGlvbik7XG4gICAgdmFyIG9yaWdpbmFsU3RhY2sgPSB0aGlzLl9maW5kT3JpZ2luYWxTdGFjayhleGNlcHRpb24pO1xuICAgIHZhciBjb250ZXh0ID0gdGhpcy5fZmluZENvbnRleHQoZXhjZXB0aW9uKTtcblxuICAgIHRoaXMuX2xvZ2dlci5sb2dHcm91cChgRVhDRVBUSU9OOiAke3RoaXMuX2V4dHJhY3RNZXNzYWdlKGV4Y2VwdGlvbil9YCk7XG5cbiAgICBpZiAoaXNQcmVzZW50KHN0YWNrVHJhY2UpICYmIGlzQmxhbmsob3JpZ2luYWxTdGFjaykpIHtcbiAgICAgIHRoaXMuX2xvZ2dlci5sb2dFcnJvcihcIlNUQUNLVFJBQ0U6XCIpO1xuICAgICAgdGhpcy5fbG9nZ2VyLmxvZ0Vycm9yKHRoaXMuX2xvbmdTdGFja1RyYWNlKHN0YWNrVHJhY2UpKTtcbiAgICB9XG5cbiAgICBpZiAoaXNQcmVzZW50KHJlYXNvbikpIHtcbiAgICAgIHRoaXMuX2xvZ2dlci5sb2dFcnJvcihgUkVBU09OOiAke3JlYXNvbn1gKTtcbiAgICB9XG5cbiAgICBpZiAoaXNQcmVzZW50KG9yaWdpbmFsRXhjZXB0aW9uKSkge1xuICAgICAgdGhpcy5fbG9nZ2VyLmxvZ0Vycm9yKGBPUklHSU5BTCBFWENFUFRJT046ICR7dGhpcy5fZXh0cmFjdE1lc3NhZ2Uob3JpZ2luYWxFeGNlcHRpb24pfWApO1xuICAgIH1cblxuICAgIGlmIChpc1ByZXNlbnQob3JpZ2luYWxTdGFjaykpIHtcbiAgICAgIHRoaXMuX2xvZ2dlci5sb2dFcnJvcihcIk9SSUdJTkFMIFNUQUNLVFJBQ0U6XCIpO1xuICAgICAgdGhpcy5fbG9nZ2VyLmxvZ0Vycm9yKHRoaXMuX2xvbmdTdGFja1RyYWNlKG9yaWdpbmFsU3RhY2spKTtcbiAgICB9XG5cbiAgICBpZiAoaXNQcmVzZW50KGNvbnRleHQpKSB7XG4gICAgICB0aGlzLl9sb2dnZXIubG9nRXJyb3IoXCJFUlJPUiBDT05URVhUOlwiKTtcbiAgICAgIHRoaXMuX2xvZ2dlci5sb2dFcnJvcihjb250ZXh0KTtcbiAgICB9XG5cbiAgICB0aGlzLl9sb2dnZXIubG9nR3JvdXBFbmQoKTtcblxuICAgIC8vIFdlIHJldGhyb3cgZXhjZXB0aW9ucywgc28gb3BlcmF0aW9ucyBsaWtlICdib290c3RyYXAnIHdpbGwgcmVzdWx0IGluIGFuIGVycm9yXG4gICAgLy8gd2hlbiBhbiBleGNlcHRpb24gaGFwcGVucy4gSWYgd2UgZG8gbm90IHJldGhyb3csIGJvb3RzdHJhcCB3aWxsIGFsd2F5cyBzdWNjZWVkLlxuICAgIGlmICh0aGlzLl9yZXRocm93RXhjZXB0aW9uKSB0aHJvdyBleGNlcHRpb247XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9leHRyYWN0TWVzc2FnZShleGNlcHRpb246IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGV4Y2VwdGlvbiBpbnN0YW5jZW9mIEJhc2VXcmFwcGVkRXhjZXB0aW9uID8gZXhjZXB0aW9uLndyYXBwZXJNZXNzYWdlIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGNlcHRpb24udG9TdHJpbmcoKTtcbiAgfVxuXG4gIC8qKiBAaW50ZXJuYWwgKi9cbiAgX2xvbmdTdGFja1RyYWNlKHN0YWNrVHJhY2U6IGFueSk6IGFueSB7XG4gICAgcmV0dXJuIGlzTGlzdExpa2VJdGVyYWJsZShzdGFja1RyYWNlKSA/ICg8YW55W10+c3RhY2tUcmFjZSkuam9pbihcIlxcblxcbi0tLS0tYXN5bmMgZ2FwLS0tLS1cXG5cIikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFja1RyYWNlLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9maW5kQ29udGV4dChleGNlcHRpb246IGFueSk6IGFueSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghKGV4Y2VwdGlvbiBpbnN0YW5jZW9mIEJhc2VXcmFwcGVkRXhjZXB0aW9uKSkgcmV0dXJuIG51bGw7XG4gICAgICByZXR1cm4gaXNQcmVzZW50KGV4Y2VwdGlvbi5jb250ZXh0KSA/IGV4Y2VwdGlvbi5jb250ZXh0IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmluZENvbnRleHQoZXhjZXB0aW9uLm9yaWdpbmFsRXhjZXB0aW9uKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBleGNlcHRpb24uY29udGV4dCBjYW4gdGhyb3cgYW4gZXhjZXB0aW9uLiBpZiBpdCBoYXBwZW5zLCB3ZSBpZ25vcmUgdGhlIGNvbnRleHQuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9maW5kT3JpZ2luYWxFeGNlcHRpb24oZXhjZXB0aW9uOiBhbnkpOiBhbnkge1xuICAgIGlmICghKGV4Y2VwdGlvbiBpbnN0YW5jZW9mIEJhc2VXcmFwcGVkRXhjZXB0aW9uKSkgcmV0dXJuIG51bGw7XG5cbiAgICB2YXIgZSA9IGV4Y2VwdGlvbi5vcmlnaW5hbEV4Y2VwdGlvbjtcbiAgICB3aGlsZSAoZSBpbnN0YW5jZW9mIEJhc2VXcmFwcGVkRXhjZXB0aW9uICYmIGlzUHJlc2VudChlLm9yaWdpbmFsRXhjZXB0aW9uKSkge1xuICAgICAgZSA9IGUub3JpZ2luYWxFeGNlcHRpb247XG4gICAgfVxuXG4gICAgcmV0dXJuIGU7XG4gIH1cblxuICAvKiogQGludGVybmFsICovXG4gIF9maW5kT3JpZ2luYWxTdGFjayhleGNlcHRpb246IGFueSk6IGFueSB7XG4gICAgaWYgKCEoZXhjZXB0aW9uIGluc3RhbmNlb2YgQmFzZVdyYXBwZWRFeGNlcHRpb24pKSByZXR1cm4gbnVsbDtcblxuICAgIHZhciBlID0gZXhjZXB0aW9uO1xuICAgIHZhciBzdGFjayA9IGV4Y2VwdGlvbi5vcmlnaW5hbFN0YWNrO1xuICAgIHdoaWxlIChlIGluc3RhbmNlb2YgQmFzZVdyYXBwZWRFeGNlcHRpb24gJiYgaXNQcmVzZW50KGUub3JpZ2luYWxFeGNlcHRpb24pKSB7XG4gICAgICBlID0gZS5vcmlnaW5hbEV4Y2VwdGlvbjtcbiAgICAgIGlmIChlIGluc3RhbmNlb2YgQmFzZVdyYXBwZWRFeGNlcHRpb24gJiYgaXNQcmVzZW50KGUub3JpZ2luYWxFeGNlcHRpb24pKSB7XG4gICAgICAgIHN0YWNrID0gZS5vcmlnaW5hbFN0YWNrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGFjaztcbiAgfVxufVxuIl19