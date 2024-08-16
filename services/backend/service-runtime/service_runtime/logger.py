# -*- coding: utf-8 -*-
import inspect
import io
import sys
from datetime import datetime
import threading


class LoggingStream(io.TextIOWrapper):
    """A custom stream that redirects to a custom logger
    """
    def __init__(self, stream: object):
        self.__stream = stream
        self.__buffer = ""

    def write(self, message: str):
        self.__buffer += message
        if "\n" in self.__buffer:
            self.flush()

    def flush(self):
        if self.__buffer:
            log = self.format_log(self.__buffer)
            self.__stream.write(log)
            self.__buffer = ""
        self.__stream.flush()

    def format_log(self, message: str) -> str:
        """Formats the log message
        """

        # get calling function/file/line
        frame = inspect.currentframe()
        try:
            caller = inspect.getouterframes(frame, 3)[3]
            file = caller.filename
            file = file.split("/")[-1]
            line = caller.lineno
            function = caller.function
        except IndexError:
            file = "?"
            line = 0
            function = "?"

        time = datetime.now().strftime("%H:%M:%S")
        thread_name = threading.current_thread().name
        thread = thread_name.replace("Thread-", "")
        return f"[{time}] [{thread}/{file}:{function}:{line}] {message}"

def hijack_stdout():
    """Redirects stdout and stderr to custom loggers
    """
    sys.stdout = LoggingStream(sys.__stdout__)
    sys.stderr = LoggingStream(sys.__stderr__)